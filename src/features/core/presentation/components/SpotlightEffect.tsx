"use client";

import { useSpotlightEffect } from "@/features/core/presentation/hooks/useSpotlightEffect";

export function SpotlightEffect() {
  const { position } = useSpotlightEffect();

  return (
    <div
      className="pointer-events-none fixed z-50 transition-opacity duration-300 rounded-full"
      style={{
        width: "600px",
        height: "600px",
        top: 0,
        left: 0,
        background: "radial-gradient(circle, rgba(192, 193, 255, 0.08) 0%, transparent 70%)",
        transform: `translate3d(${position.x - 300}px, ${position.y - 300}px, 0)`,
        willChange: "transform",
      }}
    />
  );
}

