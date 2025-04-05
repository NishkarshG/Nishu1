import React from "react";

export function TermsFooter() {
  return (
    <div className="text-sm text-slate-500">
      <span>By clicking continue, you agree to our </span>
      <a href="#" className="underline">
        Terms of Service
      </a>
      <span> and </span>
      <a href="#" className="underline">
        Privacy Policy
      </a>
      <span>.</span>
    </div>
  );
}
