// Rain.tsx
import React from "react";
import { Smiley } from "./smiley";
import "./Rain.css";

const Rain: React.FC = () => {
  const count = 30;
  const drops = Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 30 + 20}px`,
    duration: `${Math.random() * 3 + 2}s`,
    delay: `${Math.random() * 5}s`,
  }));

  return (
    <div className="rain-container">
      {drops.map(({ id, left, size, duration, delay }) => (
        <div key={id} className="drop" style={{ left, width: size, height: size, animationDuration: duration, animationDelay: delay }}>
          <Smiley width="100%" height="100%" />
        </div>
      ))}
    </div>
  );
};

export default Rain;
