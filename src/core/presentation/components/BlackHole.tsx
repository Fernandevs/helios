import React from "react";
import { Helios } from "./Helios";

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
        @keyframes spaghettify {
          0%, 100% { transform: scale(0.85) rotate(0deg) skew(0deg); filter: blur(0.5px); opacity: 0.7; }
          25% { transform: scale(0.88, 0.82) rotate(3deg) skew(3deg, 1deg); filter: blur(1px); opacity: 0.5; }
          50% { transform: scale(0.82, 0.88) rotate(-2deg) skew(-2deg, -3deg); filter: blur(1.5px); opacity: 0.6; }
          75% { transform: scale(0.86, 0.84) rotate(1deg) skew(1deg, -1deg); filter: blur(0.8px); opacity: 0.5; }
        }
        .animate-spaghettify { animation: spaghettify 12s ease-in-out infinite; }
      ` }} />

      {/* Warped Gravitational Field Rings */}
      <div className="absolute inset-0 rounded-full border border-primary/20 animate-warp-pulse" />
      <div className="absolute inset-4 rounded-full border border-accent/20 animate-warp-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute inset-8 rounded-full border border-secondary/20 animate-warp-pulse" style={{ animationDelay: "4s" }} />

      {/* Glowing Accretion Disk */}
      <div className="absolute w-[90%] h-[90%] rounded-full bg-gradient-to-r from-primary/30 via-accent/40 to-secondary/30 blur-xl animate-spin-slow" />
      <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-l from-secondary/20 via-accent/30 to-primary/40 blur-lg animate-spin-reverse" />

      {/* Event Horizon & Singularity */}
      <div className="absolute w-28 h-28 rounded-full bg-black shadow-[0_0_40px_rgba(0,0,0,0.9),0_0_20px_var(--color-primary)] flex items-center justify-center overflow-hidden">
        {/* Deep black core */}
        <div className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-black z-0" />
        
        {/* Distorted Helios Component */}
        <div className="absolute inset-0 z-10 flex items-center justify-center animate-spaghettify pointer-events-none text-primary">
          <Helios className="w-20 h-20 mix-blend-screen drop-shadow-[0_0_15px_var(--color-primary)]" />
        </div>
      </div>

      {/* Sucked Star Particles */}
      <div className="absolute w-2 h-2 rounded-full bg-white blur-[1px] animate-pull-1" />
      <div className="absolute w-1.5 h-1.5 rounded-full bg-accent blur-[1px] animate-pull-2" />
      <div className="absolute w-2 h-2 rounded-full bg-secondary blur-[1px] animate-pull-3" />
    </div>
  );
}
