import type { ReactNode } from "react";

interface SignUpTemplateProps {
  children: ReactNode;
  imageSrc?: string;
}

export const SignUpTemplate = ({ children, imageSrc }: SignUpTemplateProps) => (
  <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
    <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-xl w-full max-w-5xl p-8 gap-8">
      <div className="w-full md:w-1/2 flex flex-col justify-center">{children}</div>
      <div className="hidden md:flex w-full md:w-1/2 justify-center">
        <img
          src={imageSrc || "https://images.unsplash.com/photo-1556742400-b5b7c5121f0b"}
          alt="Sign up illustration"
          className="rounded-2xl shadow-md w-full h-80 object-cover md:h-full"
        />
      </div>
    </div>
  </div>
);
