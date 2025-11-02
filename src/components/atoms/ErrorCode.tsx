interface ErrorCodeProps {
    code: string;
}

export const ErrorCode = ({ code }: ErrorCodeProps) => {
    return (
        <h1 className="text-9xl font-bold text-black mb-2">
            {code}
        </h1>
    );
};