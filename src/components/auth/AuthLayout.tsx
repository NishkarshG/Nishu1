import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-[#F9F9F9] p-5">
      <div className="flex flex-col items-center gap-8 bg-white shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10),0px_4px_6px_-1px_rgba(0,0,0,0.10)] p-20 rounded-2xl max-md:p-[60px] max-sm:p-10">
        {children}
      </div>
    </div>
  );
}
