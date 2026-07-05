"use client";

import React, { useEffect, useState } from "react";

export function SpotlightEffect() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
