'use client';

import { useShieldLetterBurst } from '../hooks/useShieldLetterBurst';

interface ShieldLetterBurstProps {
  word: string;
  onDone: () => void;
}

export function ShieldLetterBurst({ word, onDone }: ShieldLetterBurstProps) {
  const { canvasRef } = useShieldLetterBurst(word, onDone);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9992] pointer-events-none"
    />
  );
}

