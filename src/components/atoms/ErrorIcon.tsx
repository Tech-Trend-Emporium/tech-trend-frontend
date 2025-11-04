import type { LucideIcon } from "lucide-react";


interface ErrorIconProps {
    Icon: LucideIcon;
}

export const ErrorIcon = ({ Icon }: ErrorIconProps) => {
    return (
        <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                <Icon className="w-10 h-10 text-white" />
            </div>
        </div>
    );
};