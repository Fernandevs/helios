import React from "react";
import { ParticlesBackground } from "@/features/core/presentation/components/ParticlesBackground";
import { Constellations } from "@/features/core/presentation/components/Constellations";
import { SpotlightEffect } from "@/features/core/presentation/components/SpotlightEffect";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background text-on-background bg-star-map bg-noise overflow-hidden px-margin-mobile">
      <ParticlesBackground />
      <Constellations />
      <SpotlightEffect />
      <div className="relative z-10 w-full max-w-[440px] py-12">
        {children}
      </div>
    </div>
  );
}
