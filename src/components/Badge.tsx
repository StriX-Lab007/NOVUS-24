interface BadgeProps {
    children: React.ReactNode;
    variant?: "outline" | "solid";
    className?: string;
}

export default function Badge({ children, variant = "outline", className = "" }: BadgeProps) {
    const baseStyles = "inline-flex items-center px-3 py-1 rounded text-xs font-mono-cyber tracking-wider uppercase";
    const variants = {
        outline: "border border-neon text-neon bg-neon/10",
        solid: "bg-neon text-bg-primary font-bold",
    };

    return (
        <span className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
}
