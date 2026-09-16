import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export const ConstellationBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracker for cursor interaction
    const mouse = {
      x: -2000,
      y: -2000,
      targetX: -2000,
      targetY: -2000,
      isActive: false,
      radius: 180,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initConstellation();
    };

    const handlePointerMove = (e: PointerEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isActive = true;
    };

    const handlePointerLeave = () => {
      mouse.isActive = false;
      mouse.targetX = -2000;
      mouse.targetY = -2000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('mouseleave', handlePointerLeave);

    // Constellation Particles
    interface ConstellationParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      pulseSpeed: number;
      pulseVal: number;
    }

    let particles: ConstellationParticle[] = [];

    const initConstellation = () => {
      const area = width * height;
      const count = width < 768 
        ? Math.floor(Math.min(38, Math.max(22, area / 24000)))
        : Math.floor(Math.min(75, Math.max(45, area / 20000)));
      
      const parts: ConstellationParticle[] = [];
      for (let i = 0; i < count; i++) {
        parts.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.65,
          vy: (Math.random() - 0.5) * 0.65,
          radius: Math.random() * 1.8 + 1.2,
          baseAlpha: Math.random() * 0.4 + 0.4,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseVal: Math.random() * Math.PI * 2,
        });
      }
      particles = parts;
    };

    initConstellation();

    const maxDistance = width < 768 ? 120 : 160;
    const maxDistanceSq = maxDistance * maxDistance;
    const mouseRadiusSq = mouse.radius * mouse.radius;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      if (mouse.isActive) {
        mouse.x += (mouse.targetX - mouse.x) * 0.15;
        mouse.y += (mouse.targetY - mouse.y) * 0.15;
      } else {
        mouse.x += (-2000 - mouse.x) * 0.1;
        mouse.y += (-2000 - mouse.y) * 0.1;
      }

      const isDark = theme === 'dark' || document.documentElement.classList.contains('dark');
      const primaryBlue = isDark ? '59, 130, 246' : '37, 99, 235';
      const brightBlue = isDark ? '96, 165, 250' : '29, 78, 216';
      const neonAccent = isDark ? '56, 189, 248' : '2, 132, 199';

      const triangleFillAlpha = isDark ? 0.04 : 0.025;
      const len = particles.length;

      // Update positions
      for (let i = 0; i < len; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        else if (p.x > width) { p.x = width; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        else if (p.y > height) { p.y = height; p.vy *= -1; }

        if (mouse.isActive) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < mouseRadiusSq && distSq > 1) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / mouse.radius) * 0.8;
            p.x -= (dx / dist) * force;
            p.y -= (dy / dist) * force;
          }
        }
        p.pulseVal += p.pulseSpeed;
      }

      // Polygonal faceted triangles
      for (let i = 0; i < len; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < len; j++) {
          const p2 = particles[j];
          const d12Sq = (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;
          if (d12Sq > maxDistanceSq * 0.6) continue;

          for (let k = j + 1; k < len; k++) {
            const p3 = particles[k];
            const d13Sq = (p1.x - p3.x) ** 2 + (p1.y - p3.y) ** 2;
            const d23Sq = (p2.x - p3.x) ** 2 + (p2.y - p3.y) ** 2;

            if (d13Sq < maxDistanceSq * 0.6 && d23Sq < maxDistanceSq * 0.6) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.lineTo(p3.x, p3.y);
              ctx.closePath();
              ctx.fillStyle = `rgba(${neonAccent}, ${triangleFillAlpha})`;
              ctx.fill();
            }
          }
        }
      }

      // Connection lines between nearby nodes
      ctx.lineWidth = 1;
      for (let i = 0; i < len; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < len; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistanceSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / maxDistance) * (isDark ? 0.35 : 0.25);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${primaryBlue}, ${alpha})`;
            ctx.stroke();
          }
        }

        // Connection to cursor
        if (mouse.isActive) {
          const dx = mouse.x - p1.x;
          const dy = mouse.y - p1.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < mouseRadiusSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / mouse.radius) * (isDark ? 0.7 : 0.5);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${neonAccent}, ${alpha})`;
            ctx.lineWidth = 1.3;
            ctx.stroke();
            ctx.lineWidth = 1;
          }
        }
      }

      // Glowing Node particles
      for (let i = 0; i < len; i++) {
        const p = particles[i];
        const pulse = Math.sin(p.pulseVal) * 0.2 + 0.8;
        const currentAlpha = p.baseAlpha * pulse * (isDark ? 0.95 : 0.75);

        ctx.shadowBlur = isDark ? 10 : 6;
        ctx.shadowColor = `rgba(${neonAccent}, ${isDark ? 0.85 : 0.45})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${primaryBlue}, ${currentAlpha})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.95)' : `rgba(${brightBlue}, 0.95)`;
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      style={{ opacity: 0.85 }}
    />
  );
};
