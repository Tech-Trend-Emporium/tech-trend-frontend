import type { LucideIcon } from "lucide-react";
import { ErrorCode } from "../atoms/ErrorCode";
import { ErrorIcon } from "../atoms/ErrorIcon";


interface ErrorHeaderProps {
    code: string;
    icon: LucideIcon;
    title: string;
    description: string;
}

export const ErrorHeader = ({ code, icon, title, description }: ErrorHeaderProps) => {
    return (
        <div className="mb-8">
            <ErrorCode code={code} />
            <ErrorIcon Icon={icon} />
            <h2 className="text-3xl font-bold text-black mb-4">
                {title}
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
                {description}
            </p>
        </div>
    );
};