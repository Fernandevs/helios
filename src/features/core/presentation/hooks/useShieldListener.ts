import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import type { EffectType } from '@/features/core/presentation/components/ShieldEffects';

const VISUAL_EFFECTS: EffectType[] = ['rain', 'snow', 'particles', 'fireworks', 'stars'];

export function useShieldListener() {
  const [isOpen, setIsOpen] = useState(false);
  const [secret, setSecret] = useState('');
  const [activeEffect, setActiveEffect] = useState<EffectType | null>(null);
  const [burstWord, setBurstWord] = useState<string | null>(null);
  const lastDoubleClick = useRef<number>(0);
  const tapTimes = useRef<number[]>([]);
  const router = useRouter();

  const closeInput = useCallback(() => {
    setIsOpen(false);
    setSecret('');
  }, []);

  const triggerPanel = useCallback(() => {
    const lockUntil = localStorage.getItem('_h_shield_lock');
    if (lockUntil && Date.now() < parseInt(lockUntil, 10)) return;

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

    if (VISUAL_EFFECTS.includes(value as EffectType)) {
      const typed = value as EffectType;
      setActiveEffect((prev) => (prev === typed ? null : typed));
      closeInput();
      return;
    }

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

    setBurstWord(value);
    closeInput();
  };

  return {
    isOpen,
    secret,
    setSecret,
    activeEffect,
    burstWord,
    setBurstWord,
    handleSubmit,
  };
}
