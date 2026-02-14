"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Terminal } from "lucide-react";

interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="space-y-4">
            {items.map((item, i) => (
                <div
                    key={i}
                    className={`border transition-all duration-300 overflow-hidden relative group ${openIndex === i
                            ? "bg-bg-card border-neon shadow-[0_0_15px_rgba(0,255,102,0.15)]"
                            : "bg-bg-card/50 border-white/10 hover:border-neon/50"
                        }`}
                >
                    {/* Active Scan Line */}
                    {openIndex === i && (
                        <div className="absolute inset-0 scan-lines opacity-10 pointer-events-none" />
                    )}

                    <button
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer relative z-10"
                    >
                        <div className="flex items-center gap-4">
                            <span className={`text-xs font-mono-cyber opacity-50 ${openIndex === i ? 'text-neon' : 'text-text-secondary'}`}>
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className={`font-medium transition-colors ${openIndex === i ? 'text-neon' : 'text-text-primary'}`}>
                                {item.question}
                            </span>
                        </div>
                        <motion.div
                            animate={{ rotate: openIndex === i ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {openIndex === i ? <Terminal size={18} className="text-neon" /> : <ChevronDown size={18} className="text-text-secondary" />}
                        </motion.div>
                    </button>

                    <AnimatePresence>
                        {openIndex === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="px-6 pb-6 pt-2 pl-14 text-text-secondary text-sm leading-relaxed font-mono-cyber border-t border-dashed border-white/10 relative z-10">
                                    <span className="text-neon mr-2">{">"}</span>
                                    {item.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}

