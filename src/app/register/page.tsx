"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, ArrowLeft, Shield, Lock, Plus, Trash2, Cpu, CreditCard, User, Mail, Phone, Building, Home } from "lucide-react";
import FormInput from "../../components/FormInput";
import UploadField from "../../components/UploadField";
import CyberButton from "../../components/CyberButton";
import TerminalCard from "../../components/TerminalCard";
import { registerTeam } from "../actions/registerTeam";

const steps = ["Leader Info", "Team Roster", "Rules & Guidelines", "Payment Gateway"];

interface Member {
    name: string;
    college: string;
    email: string;
    phone: string;
}

export default function RegisterPage() {
    const [step, setStep] = useState(0);
    const [teamName, setTeamName] = useState("");

    // Leader Details (Step 1)
    const [leader, setLeader] = useState<Member>({
        name: "",
        college: "",
        email: "",
        phone: ""
    });

    // Additional Members (Step 2)
    const [members, setMembers] = useState<Member[]>([]);

    // Rules Agreement (Step 3)
    const [agreed, setAgreed] = useState(false);

    // Payment Details (Step 4)
    const [txnId, setTxnId] = useState("");
    const [upiId, setUpiId] = useState("");
    const [paymentFile, setPaymentFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const updateLeader = (field: keyof Member, value: string) => {
        setLeader({ ...leader, [field]: value });
    };

    const addMember = () => {
        if (members.length < 3) {
            setMembers([...members, { name: "", college: "", email: "", phone: "" }]);
        }
    };

    const removeMember = (i: number) => {
        setMembers(members.filter((_, idx) => idx !== i));
    };

    const updateMember = (i: number, field: keyof Member, value: string) => {
        const updated = [...members];
        updated[i] = { ...updated[i], [field]: value };
        setMembers(updated);
    };

    const isLeaderValid = () => {
        return teamName.trim() !== "" &&
            leader.name.trim() !== "" &&
            leader.college.trim() !== "" &&
            leader.email.trim() !== "" &&
            leader.phone.trim() !== "";
    };

    const areMembersValid = () => {
        return members.every(m =>
            m.name.trim() !== "" &&
            m.college.trim() !== "" &&
            m.email.trim() !== "" &&
            m.phone.trim() !== ""
        );
    };

    const isRulesAccepted = () => agreed;

    const isPaymentValid = () => {
        return txnId.trim() !== "" && upiId.trim() !== "" && paymentFile !== null;
    };

    return (
        <div className="min-h-screen pt-32 pb-24 px-6 relative">
            <div className="absolute top-20 left-10 w-64 h-64 bg-neon/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Back Button */}
            <div className="absolute top-6 left-6 z-50">
                <Link href="/">
                    <CyberButton variant="secondary" className="!py-2 !px-4 text-xs">
                        <Home size={14} className="mr-2" /> Back to Home
                    </CyberButton>
                </Link>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-display uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-neon to-white animate-pulse-slow mb-4">
                        Team Registration
                    </h1>
                    <p className="text-text-secondary font-mono-cyber">
                        Join the Novus Initiative. Secure your spot in the grid.
                    </p>
                </div>

                {/* Progress Steps */}
                <div className="flex justify-between items-center mb-12 relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -z-10" />
                    {steps.map((s, i) => (
                        <div key={i} className="flex flex-col items-center gap-3">
                            <div
                                className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300 ${i <= step
                                    ? "bg-neon text-black border-neon shadow-[0_0_15px_rgba(15,255,169,0.5)]"
                                    : "bg-black/40 text-text-secondary border-white/10"
                                    }`}
                            >
                                {i < step ? <Check size={18} /> : i + 1}
                            </div>
                            <span className={`text-xs font-mono-cyber uppercase tracking-wider ${i <= step ? "text-neon" : "text-text-secondary/50"
                                }`}>
                                {s}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-8">
                    <TerminalCard title={`// STEP_0${step + 1}: ${steps[step]}`} className="min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="h-full flex flex-col justify-between"
                            >
                                {step === 0 && (
                                    <div className="space-y-6">
                                        <FormInput
                                            label="Team Name"
                                            placeholder="Enter your team's codename"
                                            value={teamName}
                                            onChange={setTeamName}
                                            required
                                            icon={<Shield size={16} className="text-neon" />}
                                        />

                                        <div className="space-y-6 pt-4 border-t border-white/5">
                                            <h4 className="text-sm font-bold text-white flex items-center gap-2">
                                                <User size={16} className="text-neon" /> Leader Details
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <FormInput
                                                    label="Full Name"
                                                    placeholder="John Doe"
                                                    value={leader.name}
                                                    onChange={(v) => updateLeader("name", v)}
                                                    required
                                                    icon={<User size={16} className="text-neon" />}
                                                />
                                                <FormInput
                                                    label="College / Institute"
                                                    placeholder="Malla Reddy University"
                                                    value={leader.college}
                                                    onChange={(v) => updateLeader("college", v)}
                                                    required
                                                    icon={<Building size={16} className="text-neon" />}
                                                />
                                                <FormInput
                                                    label="Email Address"
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    value={leader.email}
                                                    onChange={(v) => updateLeader("email", v)}
                                                    required
                                                    icon={<Mail size={16} className="text-neon" />}
                                                />
                                                <FormInput
                                                    label="Phone Number"
                                                    type="tel"
                                                    placeholder="+91 98765 43210"
                                                    value={leader.phone}
                                                    onChange={(v) => updateLeader("phone", v)}
                                                    required
                                                    icon={<Phone size={16} className="text-neon" />}
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-12 flex justify-end border-t border-white/10 pt-8">
                                            <CyberButton
                                                variant="primary"
                                                onClick={() => setStep(1)}
                                                disabled={!isLeaderValid()}
                                            >
                                                Next: Team Roster <ArrowRight size={16} className="ml-2" />
                                            </CyberButton>
                                        </div>
                                    </div>
                                )}

                                {step === 1 && (
                                    <div className="space-y-8">
                                        <div className="flex justify-between items-center bg-white/5 p-4 rounded-lg border border-white/10">
                                            <div>
                                                <h3 className="text-white font-bold">Team Roster</h3>
                                                <p className="text-xs text-text-secondary">Add up to 3 additional members (Total 4 including leader)</p>
                                            </div>
                                            <div className="text-neon font-mono-cyber text-sm">
                                                Total Team Size: {1 + members.length} / 4
                                            </div>
                                        </div>

                                        <div className="space-y-8">
                                            {members.map((member, i) => (
                                                <div key={i} className="bg-black/20 p-6 rounded-lg border border-white/5 relative group hover:border-neon/30 transition-colors">
                                                    <button
                                                        onClick={() => removeMember(i)}
                                                        className="absolute top-4 right-4 text-text-secondary hover:text-red-500 transition-colors"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                    <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                                                        <User size={14} className="text-neon" /> Member 0{i + 1}
                                                    </h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <FormInput
                                                            label="Full Name"
                                                            value={member.name}
                                                            onChange={(v) => updateMember(i, "name", v)}
                                                            required
                                                            icon={<User size={14} className="text-neon" />}
                                                        />
                                                        <FormInput
                                                            label="College / Institute"
                                                            value={member.college}
                                                            onChange={(v) => updateMember(i, "college", v)}
                                                            required
                                                            icon={<Building size={14} className="text-neon" />}
                                                        />
                                                        <FormInput
                                                            label="Email"
                                                            type="email"
                                                            value={member.email}
                                                            onChange={(v) => updateMember(i, "email", v)}
                                                            required
                                                            icon={<Mail size={14} className="text-neon" />}
                                                        />
                                                        <FormInput
                                                            label="Phone"
                                                            type="tel"
                                                            value={member.phone}
                                                            onChange={(v) => updateMember(i, "phone", v)}
                                                            required
                                                            icon={<Phone size={14} className="text-neon" />}
                                                        />
                                                    </div>
                                                </div>
                                            ))}

                                            {members.length < 3 && (
                                                <button
                                                    onClick={addMember}
                                                    className="w-full py-4 border border-dashed border-white/20 rounded-lg text-text-secondary hover:text-neon hover:border-neon/50 transition-all flex items-center justify-center gap-2 group"
                                                >
                                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon/10 transition-colors">
                                                        <Plus size={16} />
                                                    </div>
                                                    Add Team Member
                                                </button>
                                            )}
                                        </div>

                                        <div className="mt-12 flex justify-between border-t border-white/10 pt-8">
                                            <CyberButton variant="secondary" onClick={() => setStep(0)}>
                                                <ArrowLeft size={16} className="mr-2" /> Back
                                            </CyberButton>
                                            <CyberButton
                                                variant="primary"
                                                onClick={() => setStep(2)}
                                                disabled={!areMembersValid()}
                                            >
                                                Proceed to Rules <ArrowRight size={16} className="ml-2" />
                                            </CyberButton>
                                        </div>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="space-y-6">
                                        <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">

                                            <div className="space-y-2">
                                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                                    <Shield size={18} className="text-neon" /> Discipline & Code of Conduct
                                                </h3>
                                                <ul className="list-disc list-inside text-sm text-text-secondary space-y-1 ml-2">
                                                    <li>Respect all organizers, judges, mentors, volunteers, and participants.</li>
                                                    <li>Follow instructions issued by NOVUS coordinators.</li>
                                                    <li>Any misconduct, argument, or disruption will lead to <span className="text-red-400 font-bold">immediate disqualification</span>.</li>
                                                </ul>
                                            </div>

                                            <div className="space-y-2">
                                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                                    <Lock size={18} className="text-neon" /> Prohibited Activities
                                                </h3>
                                                <ul className="list-disc list-inside text-sm text-text-secondary space-y-1 ml-2">
                                                    <li>Copying ideas or code from other teams.</li>
                                                    <li>Misuse of internet or electronic devices.</li>
                                                    <li>Leaving the venue without permission.</li>
                                                    <li>Any unethical, inappropriate, or disruptive behavior.</li>
                                                </ul>
                                            </div>

                                            <div className="space-y-2">
                                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                                    <Cpu size={18} className="text-neon" /> Evaluation Criteria
                                                </h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {[
                                                        "Innovation & Creativity",
                                                        "Problem Understanding",
                                                        "AI & Technical Implementation",
                                                        "Feasibility & Practical Impact"
                                                    ].map((criteria, i) => (
                                                        <div key={i} className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-3">
                                                            <div className="w-1.5 h-1.5 bg-neon rounded-full" />
                                                            <span className="text-sm text-white">{criteria}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-white/10">
                                            <label className="flex items-start gap-3 p-4 bg-neon/5 border border-neon/20 rounded-lg cursor-pointer hover:bg-neon/10 transition-colors">
                                                <div className="relative flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        className="peer sr-only"
                                                        checked={agreed}
                                                        onChange={(e) => setAgreed(e.target.checked)}
                                                    />
                                                    <div className="w-5 h-5 border-2 border-neon rounded flex items-center justify-center peer-checked:bg-neon transition-all">
                                                        {agreed && <Check size={12} className="text-black" />}
                                                    </div>
                                                </div>
                                                <span className="text-sm text-text-secondary">
                                                    I have read and agree to follow all the rules and regulations mentioned above.
                                                </span>
                                            </label>
                                        </div>

                                        <div className="mt-8 flex justify-between">
                                            <CyberButton variant="secondary" onClick={() => setStep(1)}>
                                                <ArrowLeft size={16} className="mr-2" /> Back
                                            </CyberButton>
                                            <CyberButton
                                                variant="primary"
                                                onClick={() => setStep(3)}
                                                disabled={!isRulesAccepted()}
                                            >
                                                Next: Payment <ArrowRight size={16} className="ml-2" />
                                            </CyberButton>
                                        </div>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="space-y-6">
                                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-white/5 p-6 rounded-lg border border-white/10">
                                            <div className="bg-white p-2 rounded-lg shrink-0">
                                                {/* QR Code Placeholder */}
                                                <div className="w-32 h-32 bg-black flex items-center justify-center">
                                                    <span className="text-xs text-white">QR CODE</span>
                                                </div>
                                            </div>
                                            <div className="space-y-4 flex-1">
                                                <div>
                                                    <h3 className="text-xl font-bold text-white mb-1">Registration Fee</h3>
                                                    <div className="text-3xl font-display text-neon">₹ 1700 <span className="text-sm text-text-secondary font-sans font-normal">/ team</span></div>
                                                </div>
                                                <div className="space-y-2 text-sm text-text-secondary">
                                                    <p>Scan the QR code to pay via UPI.</p>
                                                    <p>Merchant Name: <span className="text-white">NOVUS Hackathon</span></p>
                                                    <p>UPI ID: <span className="text-white">novus@upi</span></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="space-y-4">
                                                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                                                    <CreditCard size={16} className="text-neon" /> Payment Details
                                                </h4>

                                                <FormInput
                                                    label="Transaction ID (UTR)"
                                                    placeholder="Enter 12-digit UTR/Txn ID"
                                                    value={txnId}
                                                    onChange={setTxnId}
                                                    required
                                                />

                                                <FormInput
                                                    label="Your UPI ID / Phone"
                                                    placeholder="e.g., user@upi or 98765..."
                                                    value={upiId}
                                                    onChange={setUpiId}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2 pt-2">
                                                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                                                    <div className="w-4 h-4 rounded-full bg-neon/20 flex items-center justify-center text-[10px] text-neon">!</div> Upload Proof
                                                </h4>
                                                <p className="text-xs text-text-secondary">Please upload a screenshot of your successful transaction.</p>
                                            </div>
                                            <UploadField onFileSelect={setPaymentFile} />

                                            <div className="bg-neon/10 border border-neon/20 p-4 rounded text-xs text-neon/80 flex gap-2">
                                                <Lock size={14} className="shrink-0" />
                                                Verification may take up to 24 hours.
                                            </div>
                                        </div>

                                        <div className="mt-12 flex justify-between border-t border-white/10 pt-8">
                                            <CyberButton variant="secondary" onClick={() => setStep(2)}>
                                                <ArrowLeft size={16} className="mr-2" /> Back
                                            </CyberButton>
                                            <CyberButton
                                                type="submit"
                                                variant="glitch"
                                                className="px-8"
                                                disabled={!isPaymentValid() || isSubmitting}
                                                onClick={async () => {
                                                    setIsSubmitting(true);
                                                    const formData = new FormData();
                                                    formData.append("teamName", teamName);
                                                    formData.append("leader", JSON.stringify(leader));
                                                    formData.append("members", JSON.stringify(members));
                                                    formData.append("txnId", txnId);
                                                    formData.append("upiId", upiId);
                                                    if (paymentFile) {
                                                        formData.append("paymentFile", paymentFile);
                                                    }

                                                    try {
                                                        const result = await registerTeam(formData);
                                                        if (result.success) {
                                                            window.location.href = "/register/success";
                                                        } else {
                                                            alert("Registration Failed: " + result.message);
                                                        }
                                                    } catch (error) {
                                                        console.error("Submission error:", error);
                                                        alert("An unexpected error occurred. Please try again.");
                                                    } finally {
                                                        setIsSubmitting(false);
                                                    }
                                                }}
                                            >
                                                {isSubmitting ? "Initiating Uplink..." : "Finalize Registration"}
                                            </CyberButton>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </TerminalCard>
                </div>
            </div>
        </div>
    );
}
