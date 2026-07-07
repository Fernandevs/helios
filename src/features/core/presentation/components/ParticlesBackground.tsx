"use client";

import { useParticlesBackground } from "@/features/core/presentation/hooks/useParticlesBackground";

export function ParticlesBackground() {
  const { canvasRef } = useParticlesBackground();

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}

