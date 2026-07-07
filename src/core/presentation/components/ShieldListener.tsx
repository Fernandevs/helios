'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldEffects, EffectType } from '@/core/presentation/components/ShieldEffects';
import { ShieldLetterBurst } from '@/core/presentation/components/ShieldLetterBurst';

const VISUAL_EFFECTS: EffectType[] = ['rain', 'snow', 'particles', 'fireworks', 'stars'];

export function ShieldListener() {
  const [isOpen, setIsOpen] = useState(false);
  const [secret, setSecret] = useState('');
  const [activeEffect, setActiveEffect] = useState<EffectType | null>(null);
  const [burstWord, setBurstWord] = useState<string | null>(null);
  const lastDoubleClick = React.useRef<number>(0);
  const tapTimes = React.useRef<number[]>([]);
  const router = useRouter();

  const closeInput = useCallback(() => {
    setIsOpen(false);
    setSecret('');
  }, []);

  const triggerPanel = useCallback(() => {
    const lockUntil = localStorage.getItem('_h_shield_lock');
    if (lockUntil && Date.now() < parseInt(lockUntil, 10)) return;

    // If an effect is active, kill it and open the input
    if (activeEffect) setActiveEffect(null);

    setIsOpen((prev) => !prev);
    setSecret('');
  }, [activeEffect]);

  useEffect(() => {
    const handleDoubleClick = () => {
      lastDoubleClick.current = Date.now();
    };

    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.code === 'Space' && Date.now() - lastDoubleClick.current < 2000) {
        e.preventDefault();
        lastDoubleClick.current = 0;
        triggerPanel();
      }
      if (e.key === 'Escape' && isOpen) closeInput();
    };

    // Mobile: 5 rapid taps anywhere within 1.5 s
    const handleTouchEnd = () => {
      const now = Date.now();
      tapTimes.current = [...tapTimes.current.filter((t) => now - t < 1500), now];
      if (tapTimes.current.length >= 5) {
        tapTimes.current = [];
        triggerPanel();
      }
    };

    window.addEventListener('dblclick', handleDoubleClick);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('dblclick', handleDoubleClick);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isOpen, closeInput, triggerPanel]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = secret.trim().toLowerCase();
    if (!value) { closeInput(); return; }

    // Toggle visual effect
    if (VISUAL_EFFECTS.includes(value as EffectType)) {
      const typed = value as EffectType;
      setActiveEffect((prev) => (prev === typed ? null : typed));
      closeInput();
      return;
    }

    // Try shield secret
    try {
      const response = await fetch('/api/shield/unlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret: secret.trim() }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.redirectUrl) {
          closeInput();
          router.push(data.redirectUrl);
          router.refresh();
          return;
        }
      }
    } catch {
      // silently fail
    }

    // Invalid: show letter burst and close
    setBurstWord(value);
    closeInput();
  };

  return (
    <>
      <ShieldEffects effect={activeEffect} />

      {burstWord && (
        <ShieldLetterBurst
          word={burstWord}
          onDone={() => setBurstWord(null)}
        />
      )}

      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-3 px-8 py-6 rounded-xl bg-black/70 border border-white/10 shadow-2xl"
          >
            <input
              type="text"
              autoFocus
              autoComplete="off"
              spellCheck={false}
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="rain · snow · particles · fireworks · stars"
              className="w-72 bg-transparent border-b border-white/20 focus:border-white/50 outline-none px-2 py-1 font-mono text-sm text-center text-white/70 placeholder:text-white/25 transition-colors"
            />
            <button type="submit" className="hidden">Go</button>
          </form>
        </div>
      )}
    </>
  );
}
