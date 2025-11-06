import type { ReactNode } from "react";


interface SignInTemplateProps {
  children: ReactNode;
  imageSrc?: string;
}

export const SignInTemplate = ({ children, imageSrc }: SignInTemplateProps) => (
  <div className="min-h-screen flex items-center justify-center px-4">
    <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-xl w-full max-w-5xl p-8 gap-8">
      <div className="w-full md:w-1/2 flex flex-col justify-center">{children}</div>
      <div className="hidden md:flex w-full md:w-1/2 justify-center">
        <img
          src={imageSrc || "./icon.png"}
          alt="Login illustration"
          className="rounded-2xl shadow-md w-full h-80 object-cover md:h-full"
        />
      </div>
    </div>
  </div>
);
