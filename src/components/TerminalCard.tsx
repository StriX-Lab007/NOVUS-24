"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TerminalCardProps {
    children: ReactNode;
    header?: string;
    title?: string;
    className?: string;
}

export default function TerminalCard({ children, header, title, className = "" }: TerminalCardProps) {
    const displayHeader = title || header || "TERMINAL";
    return (
        <div className={`relative bg-bg-card border border-neon/30 rounded-lg overflow-hidden font-mono-cyber ${className}`}>
            {/* Scan Lines Overlay */}
            <div className="absolute inset-0 scan-lines opacity-20 pointer-events-none z-10" />

            {/* Header Bar */}
            <div className="bg-neon/10 border-b border-neon/30 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full opacity-75" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full opacity-75" />
                    <div className="w-3 h-3 bg-green-500 rounded-full opacity-75" />
                </div>
                <div className="text-neon text-xs tracking-widest opacity-80 uppercase">
                    {displayHeader}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 relative z-20">
                {children}
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-neon ml-1 align-middle"
                />
            </div>
        </div>
    );
}
