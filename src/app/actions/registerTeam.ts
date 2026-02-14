"use server";

import { createClient } from "@supabase/supabase-js";

// Initialize Supabase Client for Server Action
// Prioritize Service Role Key for backend operations to bypass RLS if needed, 
// ensuring secure writes even if public policies are restrictive.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function registerTeam(formData: FormData) {
    const rawData = {
        teamName: formData.get("teamName") as string,
        leader: JSON.parse(formData.get("leader") as string),
        members: JSON.parse(formData.get("members") as string),
        txnId: formData.get("txnId") as string,
        upiId: formData.get("upiId") as string,
        paymentFile: formData.get("paymentFile") as File,
    };

    console.log("Processing Registration:", rawData.teamName);

    try {
        // 1. Upload Payment Screenshot
        const fileExt = rawData.paymentFile.name.split(".").pop();
        const fileName = `${rawData.teamName.replace(/\s+/g, "_")}_${Date.now()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
            .from("payment-proofs")
            .upload(fileName, rawData.paymentFile);

        if (uploadError) throw new Error(`Upload Failed: ${uploadError.message}`);

        const paymentProofUrl = supabase.storage
            .from("payment-proofs")
            .getPublicUrl(fileName).data.publicUrl;

        // 2. Insert Team Data
        const { data: teamData, error: teamError } = await supabase
            .from("teams")
            .insert({
                team_name: rawData.teamName,
                leader_name: rawData.leader.name,
                leader_email: rawData.leader.email,
                leader_phone: rawData.leader.phone,
                leader_college: rawData.leader.college,
                txn_id: rawData.txnId,
                upi_id: rawData.upiId,
                payment_proof_url: paymentProofUrl,
                status: "PENDING",
                leader_diet: rawData.leader.diet,
            })
            .select()
            .single();

        if (teamError) throw new Error(`Team Insert Failed: ${teamError.message}`);

        // 3. Insert Members Data
        if (rawData.members.length > 0) {
            const membersToInsert = rawData.members.map((m: { name: string; email: string; phone: string; college: string; diet: string }) => ({
                team_id: teamData.id,
                name: m.name,
                email: m.email,
                phone: m.phone,
                college: m.college,
                diet: m.diet,
            }));

            const { error: membersError } = await supabase
                .from("members")
                .insert(membersToInsert);

            if (membersError) throw new Error(`Member Insert Failed: ${membersError.message}`);
        }

        return { success: true, message: "Registration Successful! See you at NOVUS." };

    } catch (error: unknown) {
        console.error("Registration Error:", error);
        const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred.";
        return { success: false, message: errorMessage };
    }
}
