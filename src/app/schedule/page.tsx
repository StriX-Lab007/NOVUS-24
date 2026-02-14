"use client";

import { motion } from "framer-motion";
import {
    Rocket,
    UtensilsCrossed,
    Users,
    Coffee,
    Flag,
    Terminal,
    Activity,
    Cpu
} from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import TerminalCard from "../../components/TerminalCard";
import CyberButton from "../../components/CyberButton";

const phases = [
    {
        phase: "PHASE_01",
        label: "INITIATION",
        status: "COMPLETE",
        events: [
            {
                time: "09:00 AM",
                title: "Check-in",
                desc: "Check-in, ID verification, and Swag Kit distribution. Kickoff ceremony starts at 09:30 AM.",
                icon: Rocket,
            },
        ],
    },
    {
        phase: "PHASE_02",
        label: "BUILD",
        status: "ACTIVE",
        events: [
            {
                time: "10:00 AM",
                title: "Problem Statements",
                desc: "Problem statements released. Teams may begin architecture and prototyping.",
                icon: Terminal,
            },
            {
                time: "01:00 PM",
                title: "Lunch",
                desc: "Lunch break with gourmet catering. Refuel for sustained performance.",
                icon: UtensilsCrossed,
            },
        ],
    },
    {
        phase: "PHASE_03",
        label: "SUPPORT",
        status: "PENDING",
        events: [
            {
                time: "04:00 PM",
                title: "Progress Check",
                desc: "Review of progress by organizers. Ensure teams are on track.",
                icon: Users,
            },
            {
                time: "12:00 AM",
                title: "Midnight Snacks",
                desc: "Energy drinks, gaming tournament, and midnight snacks.",
                icon: Coffee,
            },
        ],
    },
    {
        phase: "PHASE_04",
        label: "FINALE",
        status: "LOCKED",
        events: [
            {
                time: "09:00 AM",
                title: "Submission",
                desc: "Project submission deadline. Prepare local environments for demo.",
                icon: Flag,
            },
        ],
    },
];

export default function SchedulePage() {
    return (
        <div className="min-h-screen pt-28 pb-24 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon/10 border border-neon/30 text-[10px] font-mono-cyber text-neon mb-6 uppercase tracking-widest">
                        <Activity size={12} className="animate-pulse" />
                        Live Sync: OFF
                    </div>

                    <SectionHeading
                        title="Command Center Timeline"
                        subtitle="Operation: NOVUS_24 // 24-Hour Sprint Protocol"
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-8">
                    {/* Timeline Column */}
                    <div className="space-y-8">
                        {phases.map((phase, i) => (
                            <motion.div
                                key={phase.phase}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <TerminalCard header={`${phase.phase} // ${phase.label}`}>
                                    <div className="space-y-8 relative">
                                        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-neon/20 border-l border-dashed border-neon/30" />
                                        {phase.events.map((evt, j) => (
                                            <div key={j} className="relative pl-12 group">
                                                <div className="absolute left-[13px] top-1.5 w-3.5 h-3.5 bg-bg-primary border border-neon rounded-sm flex items-center justify-center group-hover:bg-neon group-hover:shadow-[0_0_10px_#00ff66] transition-all">
                                                    <div className="w-1 h-1 bg-neon group-hover:bg-bg-primary transition-colors" />
                                                </div>
                                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                                    <div>
                                                        <div className="font-mono-cyber text-neon text-sm mb-1">{evt.time}</div>
                                                        <h4 className="text-white font-bold text-lg">{evt.title}</h4>
                                                        <p className="text-text-secondary text-sm mt-1 leading-relaxed">{evt.desc}</p>
                                                    </div>
                                                    <div className="hidden sm:flex w-10 h-10 rounded bg-white/5 items-center justify-center border border-white/10 text-neon/50 group-hover:text-neon group-hover:border-neon/50 transition-all">
                                                        <evt.icon size={18} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </TerminalCard>
                            </motion.div>
                        ))}
                    </div>

                    {/* Sidebar Status (Hidden on mobile) */}
                    <div className="hidden md:block space-y-6">
                        <div className="sticky top-28">
                            <div className="bg-bg-card/50 border border-white/10 p-4 rounded-xl backdrop-blur-md">
                                <h4 className="text-xs font-mono-cyber text-text-secondary uppercase tracking-widest mb-4">Phase Status</h4>
                                <div className="space-y-3">
                                    {phases.map((phase) => (
                                        <div key={phase.phase} className="flex items-center justify-between text-xs">
                                            <span className={phase.status === 'ACTIVE' ? 'text-neon font-bold' : 'text-text-secondary'}>{phase.label}</span>
                                            <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-mono-cyber ${phase.status === 'COMPLETE' ? 'bg-white/10 text-white/50' :
                                                phase.status === 'ACTIVE' ? 'bg-neon/20 text-neon animate-pulse' :
                                                    'bg-white/5 text-white/30'
                                                }`}>
                                                {phase.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 bg-gradient-to-br from-neon/20 to-transparent p-[1px] rounded-xl">
                                <div className="bg-bg-primary/90 p-6 rounded-xl text-center">
                                    <Cpu size={24} className="text-neon mx-auto mb-2" />
                                    <h4 className="text-white font-bold mb-1">System Check</h4>
                                    <p className="text-xs text-text-secondary mb-4">All specialized hardware must be registered.</p>
                                    <CyberButton href="/rules" variant="secondary" className="w-full text-xs">
                                        View Hardware Policy
                                    </CyberButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
