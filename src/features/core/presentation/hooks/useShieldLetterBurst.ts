import { useEffect, useRef } from 'react';

export function useShieldLetterBurst(word: string, onDone: () => void) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !word) return;

    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = word.split('').map((char, i) => {
      const spread = word.length * 30;
      return {
        char,
        x: canvas.width / 2 + (i - word.length / 2) * 42 + (Math.random() - 0.5) * 20,
        y: canvas.height / 2 + (Math.random() - 0.5) * 40,
        size: 80 + Math.random() * 20,
        targetSize: 280 + Math.random() * 200,
        opacity: 0,
        phase: 'grow' as 'grow' | 'hold' | 'fade',
        delay: i * 40,
        elapsed: 0,
        hue: Math.random() * 360,
        vx: (Math.random() - 0.5) * spread * 0.025,
        vy: -1 - Math.random() * 2.5,
      };
    });

    let startTime: number | null = null;
    let allDone = false;

    const draw = (ts: number) => {
      if (!startTime) startTime = ts;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let doneCount = 0;
      letters.forEach((l) => {
        const elapsed = ts - startTime! - l.delay;
        if (elapsed < 0) return;

        if (l.phase === 'grow') {
          l.size += (l.targetSize - l.size) * 0.12;
          l.opacity = Math.min(l.opacity + 0.06, 1);
          if (elapsed > 500) l.phase = 'hold';
        } else if (l.phase === 'hold') {
          l.elapsed += 16;
          if (l.elapsed > 400) l.phase = 'fade';
        } else {
          l.opacity = Math.max(l.opacity - 0.025, 0);
          l.size += 3;
          l.x += l.vx;
          l.y += l.vy;
          if (l.opacity <= 0) doneCount++;
        }

        ctx.save();
        ctx.globalAlpha = l.opacity;
        ctx.font = `bold ${Math.round(l.size)}px var(--font-mono, monospace)`;
        ctx.fillStyle = `hsl(${l.hue}, 80%, 65%)`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = `hsl(${l.hue}, 80%, 65%)`;
        ctx.shadowBlur = 40;
        ctx.fillText(l.char, l.x, l.y);
        ctx.restore();
      });

      if (doneCount >= letters.length && !allDone) {
        allDone = true;
        onDone();
        return;
      }
      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [word, onDone]);

  return { canvasRef };
}
