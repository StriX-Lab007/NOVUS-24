"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Shield, ArrowRight, MessageCircle } from "lucide-react";
import CyberButton from "../../../components/CyberButton";
import TerminalCard from "../../../components/TerminalCard";

export default function RegistrationSuccessPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 relative flex items-center justify-center">
            <div className="absolute top-20 left-10 w-64 h-64 bg-neon/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-xl w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <TerminalCard title="SYSTEM_MESSAGE // SUCCESS" className="border-neon/50 shadow-[0_0_50px_rgba(0,255,102,0.2)]">
                        <div className="text-center space-y-8 py-8">

                            <div className="relative inline-block">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                                    className="w-24 h-24 bg-neon/20 rounded-full flex items-center justify-center border-2 border-neon mx-auto mb-6"
                                >
                                    <CheckCircle size={48} className="text-neon" />
                                </motion.div>
                                <div className="absolute inset-0 bg-neon/20 blur-xl rounded-full animate-pulse-slow pointer-events-none" />
                            </div>

                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 uppercase tracking-wide">
                                    Registration <span className="text-neon">Successful</span>
                                </h2>
                                <p className="text-text-secondary font-mono-cyber text-sm">
                                    Your team data has been uplinked to the mainframe.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-6 rounded-lg text-left space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1">
                                        <Shield size={20} className="text-neon" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Validation Protocol</h4>
                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            The approval process, including payment verification, will be completed within <span className="text-white font-bold">24 hours</span>.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                                    <div className="mt-1">
                                        <MessageCircle size={20} className="text-neon" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Community Uplink</h4>
                                        <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                            Scan to join the official WhatsApp community for real-time updates and intel.
                                        </p>
                                        {/* Placeholder for QR Code */}
                                        <div className="w-48 h-48 bg-white p-2 mx-auto rounded-lg">
                                            <div className="w-full h-full bg-black flex items-center justify-center text-center">
                                                <span className="text-xs text-secondary/50 font-mono-cyber">
                                                    [QR CODE_PLACEHOLDER]
                                                    <br />
                                                    waiting for asset...
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-center mt-2">
                                            <a href="#" className="text-xs text-neon hover:underline font-mono-cyber">
                                                Or click here to join manually {">"}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <Link href="/">
                                    <CyberButton variant="primary" className="w-full sm:w-auto px-12">
                                        Return to Home Base <ArrowRight size={16} className="ml-2" />
                                    </CyberButton>
                                </Link>
                            </div>
                        </div>
                    </TerminalCard>
                </motion.div>
            </div>
        </div>
    );
}
