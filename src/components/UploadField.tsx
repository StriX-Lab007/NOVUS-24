"use client";

import { useRef, useState } from "react";
import { Upload, X, FileCheck } from "lucide-react";

interface UploadFieldProps {
    onFileSelect: (file: File | null) => void;
}

export default function UploadField({ onFileSelect }: UploadFieldProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<string | null>(null);
    const [dragging, setDragging] = useState(false);

    const handleFile = (file: File | null) => {
        setFileName(file?.name ?? null);
        onFileSelect(file);
    };

    return (
        <div
            onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
                e.preventDefault();
                setDragging(false);
                const file = e.dataTransfer.files?.[0] ?? null;
                handleFile(file);
            }}
            onClick={() => inputRef.current?.click()}
            className={`relative cursor-pointer border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${dragging
                    ? "border-neon bg-neon/5"
                    : fileName
                        ? "border-neon/40 bg-neon/5"
                        : "border-border-subtle hover:border-neon/30 hover:bg-bg-card"
                }`}
        >
            <input
                ref={inputRef}
                type="file"
                accept=".png,.jpg,.jpeg,.pdf"
                className="hidden"
                onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
            />
            {fileName ? (
                <div className="flex items-center justify-center gap-3">
                    <FileCheck size={24} className="text-neon" />
                    <span className="text-text-primary text-sm">{fileName}</span>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleFile(null);
                        }}
                        className="text-text-secondary hover:text-red-400 transition-colors"
                    >
                        <X size={16} />
                    </button>
                </div>
            ) : (
                <>
                    <Upload size={32} className="text-neon mx-auto mb-3" />
                    <p className="text-text-primary text-sm font-medium">
                        Click to Upload
                    </p>
                    <p className="text-text-secondary text-xs mt-1">
                        PNG, JPG, or PDF (Max 5MB)
                    </p>
                </>
            )}
        </div>
    );
}
