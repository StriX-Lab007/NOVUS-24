interface FormInputProps {
    label: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
    icon?: React.ReactNode;
}

export default function FormInput({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    required = false,
    icon,
}: FormInputProps) {
    return (
        <div className="space-y-2">
            <label className="text-xs text-neon font-mono-cyber uppercase flex items-center gap-2">
                {icon} {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                required={required}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:border-neon focus:ring-1 focus:ring-neon/50 outline-none transition-all font-mono-cyber text-sm"
            />
        </div>
    );
}
