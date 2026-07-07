'use client';

import { useShieldEffects } from '../hooks/useShieldEffects';

export type EffectType = 'rain' | 'snow' | 'particles' | 'fireworks' | 'stars';

interface ShieldEffectsProps {
  effect: EffectType | null;
}

export function ShieldEffects({ effect }: ShieldEffectsProps) {
  const { canvasRef } = useShieldEffects(effect);

  if (!effect) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9990] pointer-events-none"
    />
  );
}

