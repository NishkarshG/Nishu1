import React from "react";

interface SocialLoginButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

export function SocialLoginButton({
  icon,
  label,
  onClick,
}: SocialLoginButtonProps) {
  return (
    <button
      className="flex h-9 justify-center items-center gap-2 w-full border border-slate-200 bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] px-4 py-2 rounded-[2.8px]"
      onClick={onClick}
      type="button"
    >
      <div>{icon}</div>
      <span className="text-sm text-slate-900 font-medium">{label}</span>
    </button>
  );
}
