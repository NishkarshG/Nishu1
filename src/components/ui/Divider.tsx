import React from "react";

interface DividerProps {
  children: React.ReactNode;
}

export function Divider({ children }: DividerProps) {
  return (
    <div className="flex items-center w-full">
      <div className="h-px flex-1 bg-slate-200" />
      <div className="text-xs text-slate-500 bg-white px-2.5">{children}</div>
      <div className="h-px flex-1 bg-slate-200" />
    </div>
  );
}
