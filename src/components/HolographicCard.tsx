"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HolographicCardProps {
    children: ReactNode;
    className?: string;
}

export default function HolographicCard({ children, className = "" }: HolographicCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className={`relative holographic rounded-xl overflow-hidden ${className}`}
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-50" />
            <div className="relative z-10 p-6">{children}</div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-neon opacity-50" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-neon opacity-50" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-neon opacity-50" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-neon opacity-50" />
        </motion.div>
    );
}
