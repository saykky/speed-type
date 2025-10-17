import {JSX, ReactNode} from "react";

interface InformationItemProps {
    icon: ReactNode;
    value: string | number;
    variant: "info" | "error" | "success";
}

export default function InformationItem({ icon, value, variant }: InformationItemProps) {
    const variantStyles = {
        info: {
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(96, 165, 250, 0.05))",
            borderColor: "rgba(59, 130, 246, 0.2)",
            boxShadow: "0 4px 24px -4px rgba(59, 130, 246, 0.2)",
            iconColor: "#3b82f6",
            hoverBorderColor: "rgba(59, 130, 246, 0.4)",
        },
        error: {
            background: "linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(248, 113, 113, 0.05))",
            borderColor: "rgba(239, 68, 68, 0.2)",
            boxShadow: "0 4px 24px -4px rgba(239, 68, 68, 0.2)",
            iconColor: "#ef4444",
            hoverBorderColor: "rgba(239, 68, 68, 0.4)",
        },
        success: {
            background: "linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(74, 222, 128, 0.05))",
            borderColor: "rgba(34, 197, 94, 0.2)",
            boxShadow: "0 4px 24px -4px rgba(34, 197, 94, 0.2)",
            iconColor: "#22c55e",
            hoverBorderColor: "rgba(34, 197, 94, 0.4)",
        },
    };

    const currentStyle = variantStyles[variant];

    return (
        <div
            className="relative h-[60px] flex items-center gap-4 px-6 py-4 rounded-xl border-2 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            style={{
                background: currentStyle.background,
                borderColor: currentStyle.borderColor,
                boxShadow: currentStyle.boxShadow,
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = currentStyle.hoverBorderColor;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = currentStyle.borderColor;
            }}
        >
            <div
                className="flex items-center justify-center w-12 h-12 rounded-lg"
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    color: currentStyle.iconColor
                }}
            >
                {icon}
            </div>
            <span className="text-3xl text-zinc-800 dark:text-white font-bold tracking-tight">
        {value}
      </span>
        </div>
    );
}