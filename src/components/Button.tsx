"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    href?: string;
    onClick?: () => void;
    type?: "button" | "submit";
    className?: string;
    disabled?: boolean;
}

export default function Button({
    children,
    variant = "primary",
    href,
    onClick,
    type = "button",
    className = "",
    disabled = false,
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer";

    const variants = {
        primary:
            "bg-neon text-bg-primary hover:shadow-[0_0_25px_rgba(0,255,102,0.5)] hover:scale-[1.02] active:scale-[0.98]",
        secondary:
            "bg-transparent border border-neon/40 text-neon hover:bg-neon/10 hover:border-neon/60 active:scale-[0.98]",
    };

    const styles = `${base} ${variants[variant]} ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`;

    if (href) {
        return (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href={href} className={styles}>
                    {children}
                </Link>
            </motion.div>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={styles}
        >
            {children}
        </motion.button>
    );
}
