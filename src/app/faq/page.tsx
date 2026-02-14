"use client";

import { motion } from "framer-motion";
import { MessageCircle, Database } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import Accordion from "../../components/Accordion";
import CyberButton from "../../components/CyberButton";
import TerminalCard from "../../components/TerminalCard";

const faqItems = [
    {
        question: "Team Size?",
        answer: "Teams can have 2 to 4 members. Individual participants are welcome but forming a team is recommended.",
    },
    {
        question: "Who can join?",
        answer: "Open to all enrolled university students with valid ID cards. All skill levels are welcome.",
    },
    {
        question: "How to Register?",
        answer: "1. Enter Team Details. 2. Acknowledge Rules. 3. Pay Registration Fee (₹1700/team). 4. Await Confirmation.",
    },
    {
        question: "Hardware Requirements?",
        answer: "Bring your own devices (laptops, chargers). We provide power and WiFi. Specialized hardware lab available on request.",
    },
    {
        question: "Travel Reimbursement?",
        answer: "Travel reimbursement is not currently supported. Remote access is not available; physical presence is mandatory.",
    },
    {
        question: "What are the Prizes?",
        answer: "Prize pool > ₹1,00,000. Awards for Innovation, Technical Complexity, and Utility.",
    },
];

export default function FAQPage() {
    return (
        <div className="min-h-screen pt-28 pb-24 px-6 relative">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-2 text-neon mb-4">
                        <Database size={20} className="animate-pulse" />
                        <span className="font-mono-cyber text-sm tracking-widest">FAQ</span>
                    </div>
                    <SectionHeading
                        title="Common Inquiries"
                        subtitle="Frequently asked questions."
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <TerminalCard header="FAQ">
                        <Accordion items={faqItems} />
                    </TerminalCard>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <div className="bg-bg-card/50 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
                        <p className="text-text-secondary mb-6 font-light">
                            Query not resolved? Establish direct link with support staff.
                        </p>
                        <CyberButton href="#">
                            <MessageCircle size={18} className="mr-2" /> Connect on Discord
                        </CyberButton>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
