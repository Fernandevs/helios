"use client";

import React, { useEffect, useState } from "react";

export function SpotlightEffect() {
  const [coords, setCoords] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="spotlight"
      style={{
        left: `${coords.x}px`,
        top: `${coords.y}px`,
      }}
    />
  );
}
