import React from "react";

export function Constellations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 opacity-40">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes orbit-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse-node {
          0%, 100% { transform: scale(1); opacity: 0.3; filter: drop-shadow(0 0 1px var(--color-primary)); }
          50% { transform: scale(1.3); opacity: 1; filter: drop-shadow(0 0 6px var(--color-primary)); }
        }
        @keyframes pulse-node-accent {
          0%, 100% { transform: scale(1); opacity: 0.3; filter: drop-shadow(0 0 1px var(--color-accent)); }
          50% { transform: scale(1.35); opacity: 1; filter: drop-shadow(0 0 6px var(--color-accent)); }
        }
        .animate-orbit-rotate { animation: orbit-rotate 40s linear infinite; }
        .animate-pulse-node { animation: pulse-node 4s ease-in-out infinite; }
        .animate-pulse-node-accent { animation: pulse-node-accent 5s ease-in-out infinite; }
      ` }} />

      {/* Center Astrolabe / Coordinate HUD (Positioned exactly in page center behind the black hole) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] md:w-[600px] md:h-[600px] flex items-center justify-center">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-primary/10 animate-orbit-rotate">
          {/* Orbital Guidelines */}
          <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" />
          <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 4" />
          <circle cx="100" cy="100" r="35" stroke="currentColor" strokeWidth="0.3" />

          {/* Coordinate Axes */}
          <line x1="100" y1="5" x2="100" y2="195" stroke="currentColor" strokeWidth="0.2" />
          <line x1="5" y1="100" x2="195" y2="100" stroke="currentColor" strokeWidth="0.2" />

          {/* Radar ticks */}
          <path d="M100,10 L100,15 M100,185 L100,190 M10,100 L15,100 M185,100 L190,100" stroke="currentColor" strokeWidth="0.5" />
          
          {/* Astrolabe degree markings */}
          <text x="100" y="22" className="fill-primary/20 text-[5px] font-mono text-center" textAnchor="middle">000°</text>
          <text x="178" y="102" className="fill-primary/20 text-[5px] font-mono" textAnchor="middle">090°</text>
          <text x="100" y="184" className="fill-primary/20 text-[5px] font-mono" textAnchor="middle">180°</text>
          <text x="22" y="102" className="fill-primary/20 text-[5px] font-mono" textAnchor="middle">270°</text>
        </svg>
      </div>

      {/* Top-Left Constellation (Ursa-Major style) */}
      <svg viewBox="0 0 160 120" className="absolute top-12 left-6 md:left-24 w-40 md:w-64 text-accent/15">
        <path d="M20,90 L50,85 L70,55 L90,40 L110,45 L135,25 L150,45" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 2" />
        <circle cx="20" cy="90" r="2.5" fill="currentColor" className="animate-pulse-node" style={{ animationDelay: "0s" }} />
        <circle cx="50" cy="85" r="2.5" fill="currentColor" className="animate-pulse-node" style={{ animationDelay: "0.8s" }} />
        <circle cx="70" cy="55" r="3" fill="currentColor" className="animate-pulse-node-accent" style={{ animationDelay: "1.6s" }} />
        <circle cx="90" cy="40" r="2.5" fill="currentColor" className="animate-pulse-node" style={{ animationDelay: "2.4s" }} />
        <circle cx="110" cy="45" r="2" fill="currentColor" className="animate-pulse-node" style={{ animationDelay: "3.2s" }} />
        <circle cx="135" cy="25" r="3" fill="currentColor" className="animate-pulse-node-accent" style={{ animationDelay: "4s" }} />
        <circle cx="150" cy="45" r="2.5" fill="currentColor" className="animate-pulse-node" style={{ animationDelay: "4.8s" }} />
      </svg>

      {/* Bottom-Right Constellation (Orion-style) */}
      <svg viewBox="0 0 140 160" className="absolute bottom-16 right-6 md:right-24 w-36 md:w-60 text-secondary/20">
        <path d="M30,30 L60,40 L110,35 M110,35 L90,80 L80,80 L70,80 M70,80 L40,130 L100,135 M100,135 L90,80 M30,30 L40,80 L70,80" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 2" />
        <circle cx="30" cy="30" r="3.5" fill="currentColor" className="animate-pulse-node" style={{ animationDelay: "0.5s" }} />
        <circle cx="60" cy="40" r="2" fill="currentColor" className="animate-pulse-node" style={{ animationDelay: "1s" }} />
        <circle cx="110" cy="35" r="3" fill="currentColor" className="animate-pulse-node" style={{ animationDelay: "1.5s" }} />
        {/* Belt */}
        <circle cx="90" cy="80" r="2" fill="currentColor" className="animate-pulse-node" style={{ animationDelay: "2s" }} />
        <circle cx="80" cy="80" r="2" fill="currentColor" className="animate-pulse-node" style={{ animationDelay: "2.5s" }} />
        <circle cx="70" cy="80" r="2" fill="currentColor" className="animate-pulse-node" style={{ animationDelay: "3s" }} />
        {/* Feet */}
        <circle cx="40" cy="130" r="3.5" fill="currentColor" className="animate-pulse-node" style={{ animationDelay: "3.5s" }} />
        <circle cx="100" cy="135" r="3" fill="currentColor" className="animate-pulse-node" style={{ animationDelay: "4s" }} />
        <circle cx="40" cy="80" r="2" fill="currentColor" className="animate-pulse-node" style={{ animationDelay: "4.5s" }} />
      </svg>
    </div>
  );
}
