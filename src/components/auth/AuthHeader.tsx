
import React from "react";

interface AuthHeaderProps {
  title: string;
  description: string;
}

export function AuthHeader({ title, description }: AuthHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-[3.262px]">
        <img
          src="/lovable-uploads/f9b3eb67-e325-4561-a54e-c8ded1106f8f.png"
          alt="Flowwbook Logo"
          className="h-10"
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-semibold text-[#020817]">{title}</h1>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
    </div>
  );
}
