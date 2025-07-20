// Smiley.tsx
import React from "react";

export const Robot: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Robot head */}
    <rect x="6" y="6" width="52" height="52" rx="8" fill="#B0BEC5" stroke="#78909C" strokeWidth="4" />

    {/* LED eyes */}
    <rect x="18" y="22" width="8" height="8" rx="2" fill="#263238" />
    <rect x="38" y="22" width="8" height="8" rx="2" fill="#263238" />

    {/* Grill mouth */}
    <rect x="20" y="38" width="24" height="6" fill="none" stroke="#263238" strokeWidth="2" rx="1" />
    <line x1="20" y1="41" x2="44" y2="41" stroke="#263238" strokeWidth="1" />
    <line x1="20" y1="43" x2="44" y2="43" stroke="#263238" strokeWidth="1" />
    <line x1="20" y1="45" x2="44" y2="45" stroke="#263238" strokeWidth="1" />

    {/* Antenna */}
    <line x1="32" y1="2" x2="32" y2="12" stroke="#78909C" strokeWidth="4" strokeLinecap="round" />
    <circle cx="32" cy="2" r="3" fill="#FF5252" />
  </svg>
);
