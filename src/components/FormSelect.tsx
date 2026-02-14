interface FormSelectProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
    required?: boolean;
    icon?: React.ReactNode;
}

export default function FormSelect({
    label,
    value,
    onChange,
    options,
    required = false,
    icon,
}: FormSelectProps) {
    return (
        <div className="space-y-2">
            <label className="text-xs text-neon font-mono-cyber uppercase flex items-center gap-2">
                {icon} {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required={required}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:border-neon focus:ring-1 focus:ring-neon/50 outline-none transition-all font-mono-cyber text-sm appearance-none cursor-pointer"
                >
                    <option value="" disabled className="bg-black text-text-secondary">Select an option</option>
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-black text-white">
                            {opt.label}
                        </option>
                    ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
