"use client";

import { motion } from "framer-motion";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
    return (
        <motion.div
            whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`glass glass-hover rounded-2xl p-6 ${className}`}
        >
            {children}
        </motion.div>
    );
}
