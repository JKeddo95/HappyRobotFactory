// Smiley.tsx
import React from "react";

export const Smiley: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="32" cy="32" r="30" fill="#FFEB3B" stroke="#FBC02D" strokeWidth="4" />
    <circle cx="22" cy="24" r="5" fill="#333" />
    <circle cx="42" cy="24" r="5" fill="#333" />
    <path d="M20,40 Q32,52 44,40" stroke="#333" strokeWidth="4" fill="none" strokeLinecap="round" />
  </svg>
);
