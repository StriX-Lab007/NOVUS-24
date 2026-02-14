"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}

export default function SectionHeading({
    title,
    subtitle,
    center = true,
}: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`mb-12 ${center ? "text-center" : ""}`}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-text-secondary max-w-2xl mx-auto">{subtitle}</p>
            )}
            <div className={`mt-4 h-1 w-16 bg-neon rounded-full ${center ? "mx-auto" : ""}`} />
        </motion.div>
    );
}
