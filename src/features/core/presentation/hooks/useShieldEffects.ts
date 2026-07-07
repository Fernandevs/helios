import { useEffect, useRef } from 'react';
import type { EffectType } from '../components/ShieldEffects';

export function useShieldEffects(effect: EffectType | null) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !effect) return;

    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    if (effect === 'rain') runRain(ctx, canvas, animRef);
    else if (effect === 'snow') runSnow(ctx, canvas, animRef);
    else if (effect === 'particles') runParticles(ctx, canvas, animRef);
    else if (effect === 'fireworks') runFireworks(ctx, canvas, animRef);
    else if (effect === 'stars') runStars(ctx, canvas, animRef);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [effect]);

  return { canvasRef };
}

function runRain(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  animRef: React.MutableRefObject<number>
) {
  const drops = Array.from({ length: 200 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: 8 + Math.random() * 8,
    length: 15 + Math.random() * 20,
    opacity: 0.3 + Math.random() * 0.5,
  }));

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drops.forEach((d) => {
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x - 1, d.y + d.length);
      ctx.strokeStyle = `rgba(150,200,255,${d.opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      d.y += d.speed;
      if (d.y > canvas.height) {
        d.y = -d.length;
        d.x = Math.random() * canvas.width;
      }
    });
    animRef.current = requestAnimationFrame(draw);
  };
  draw();
}

function runSnow(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  animRef: React.MutableRefObject<number>
) {
  const flakes = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: 2 + Math.random() * 4,
    speed: 0.5 + Math.random() * 1.5,
    drift: (Math.random() - 0.5) * 0.5,
    opacity: 0.4 + Math.random() * 0.6,
  }));

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    flakes.forEach((f) => {
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${f.opacity})`;
      ctx.fill();
      f.y += f.speed;
      f.x += f.drift;
      if (f.y > canvas.height) {
        f.y = -f.r;
        f.x = Math.random() * canvas.width;
      }
    });
    animRef.current = requestAnimationFrame(draw);
  };
  draw();
}

function runParticles(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  animRef: React.MutableRefObject<number>
) {
  const COLORS = ['#a78bfa', '#60a5fa', '#34d399', '#f472b6', '#fb923c'];
  const pts = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 1.2,
    vy: (Math.random() - 0.5) * 1.2,
    r: 2 + Math.random() * 3,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  }));

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pts.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.7;
      ctx.fill();
      ctx.globalAlpha = 1;
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });
    animRef.current = requestAnimationFrame(draw);
  };
  draw();
}

function runFireworks(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  animRef: React.MutableRefObject<number>
) {
  type Spark = { x: number; y: number; vx: number; vy: number; life: number; color: string };
  const sparks: Spark[] = [];
  const COLORS = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff922b', '#cc5de8'];

  const burst = () => {
    const cx = 0.2 * canvas.width + Math.random() * 0.6 * canvas.width;
    const cy = 0.15 * canvas.height + Math.random() * 0.5 * canvas.height;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    for (let i = 0; i < 60; i++) {
      const angle = (i / 60) * Math.PI * 2;
      const speed = 2 + Math.random() * 4;
      sparks.push({
        x: cx, y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1, color,
      });
    }
  };

  let frame = 0;
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i];
      ctx.save();
      ctx.beginPath();
      ctx.arc(s.x, s.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.globalAlpha = s.life;
      ctx.shadowColor = s.color;
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();
      s.x += s.vx;
      s.y += s.vy;
      s.vy += 0.05;
      s.life -= 0.018;
      if (s.life <= 0) sparks.splice(i, 1);
    }
    frame++;
    if (frame % 80 === 0) burst();
    animRef.current = requestAnimationFrame(draw);
  };
  burst();
  draw();
}

function runStars(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  animRef: React.MutableRefObject<number>
) {
  const stars = Array.from({ length: 250 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: 0.5 + Math.random() * 2,
    twinkle: Math.random() * Math.PI * 2,
    speed: 0.02 + Math.random() * 0.04,
  }));

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((s) => {
      const brightness = 0.4 + 0.6 * Math.abs(Math.sin(s.twinkle));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${brightness})`;
      ctx.fill();
      s.twinkle += s.speed;
    });
    animRef.current = requestAnimationFrame(draw);
  };
  draw();
}
