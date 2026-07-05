import React from "react";

export function BlackHole() {
  return (
    <div className="relative w-72 h-72 mx-auto flex items-center justify-center">
      {/* Styles for the custom animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes warp-pulse {
          0%, 100% { transform: scale(1); opacity: 0.25; }
          50% { transform: scale(1.08); opacity: 0.45; }
        }
        @keyframes pull-particle-1 {
          0% { transform: translate(120px, -80px) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translate(0px, 0px) scale(0.1); opacity: 0; }
        }
        @keyframes pull-particle-2 {
          0% { transform: translate(-100px, 100px) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translate(0px, 0px) scale(0.1); opacity: 0; }
        }
        @keyframes pull-particle-3 {
          0% { transform: translate(60px, 140px) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translate(0px, 0px) scale(0.1); opacity: 0; }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
        .animate-warp-pulse { animation: warp-pulse 6s ease-in-out infinite; }
        .animate-pull-1 { animation: pull-particle-1 4s linear infinite; }
        .animate-pull-2 { animation: pull-particle-2 5s linear infinite 1.5s; }
        .animate-pull-3 { animation: pull-particle-3 6s linear infinite 3s; }
      ` }} />

      {/* Warped Gravitational Field Rings */}
      <div className="absolute inset-0 rounded-full border border-primary/20 animate-warp-pulse" />
      <div className="absolute inset-4 rounded-full border border-accent/20 animate-warp-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute inset-8 rounded-full border border-secondary/20 animate-warp-pulse" style={{ animationDelay: "4s" }} />

      {/* Glowing Accretion Disk */}
      <div className="absolute w-[90%] h-[90%] rounded-full bg-gradient-to-r from-primary/30 via-accent/40 to-secondary/30 blur-xl animate-spin-slow" />
      <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-l from-secondary/20 via-accent/30 to-primary/40 blur-lg animate-spin-reverse" />

      {/* Event Horizon & Singularity */}
      <div className="absolute w-28 h-28 rounded-full bg-black shadow-[0_0_40px_rgba(0,0,0,0.9),0_0_20px_var(--color-primary)] flex items-center justify-center">
        {/* Deep black core */}
        <div className="w-24 h-24 rounded-full bg-black" />
      </div>

      {/* Sucked Star Particles */}
      <div className="absolute w-2 h-2 rounded-full bg-white blur-[1px] animate-pull-1" />
      <div className="absolute w-1.5 h-1.5 rounded-full bg-accent blur-[1px] animate-pull-2" />
      <div className="absolute w-2 h-2 rounded-full bg-secondary blur-[1px] animate-pull-3" />
    </div>
  );
}
