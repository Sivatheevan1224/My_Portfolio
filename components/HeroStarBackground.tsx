"use client";
import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  type: "dot" | "sparkle";
  color: string;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  rotation: number;
  rotationSpeed: number;
}

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  speed: number;
  alpha: number;
  maxAlpha: number;
  life: number;
  maxLife: number;
  color: string;
  headSize: number;
}

const HeroStarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    const shootingStars: ShootingStar[] = [];
    let width = 0;
    let height = 0;

    let lastMouse = { x: -1000, y: -1000 };
    const mouse = { x: -1000, y: -1000, active: false };
    let lastSpawnTime = 0;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const darkColors = [
      "rgba(96, 165, 250, ",  // blue-400
      "rgba(192, 132, 252, ", // purple-400
      "rgba(34, 211, 238, ",  // cyan-400
      "rgba(254, 240, 138, ", // soft gold sparkle
      "rgba(255, 255, 255, ", // crisp white
    ];

    const lightColors = [
      "rgba(37, 99, 235, ",   // blue-600
      "rgba(124, 58, 237, ",  // purple-600
      "rgba(6, 182, 212, ",   // cyan-600
      "rgba(219, 39, 119, ",  // pink-600
      "rgba(67, 56, 202, ",   // indigo-700
    ];

    const initStars = () => {
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 35 : 75;
      const isDark = document.documentElement.classList.contains("dark");
      const activeColors = isDark ? darkColors : lightColors;
      stars = [];

      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const isSparkle = Math.random() > 0.65; // ~35% 4-point cross sparkles

        stars.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: isSparkle ? Math.random() * 2.5 + 2.2 : Math.random() * 1.6 + 0.9,
          type: isSparkle ? "sparkle" : "dot",
          color: activeColors[Math.floor(Math.random() * activeColors.length)],
          baseAlpha: isDark ? (Math.random() * 0.45 + 0.2) : (Math.random() * 0.4 + 0.55),
          twinkleSpeed: Math.random() * 0.02 + 0.008,
          twinklePhase: Math.random() * Math.PI * 2,
          rotation: Math.random() * Math.PI,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
        });
      }
    };

    const resizeCanvas = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      initStars();
    };

    const spawnShootingStar = (startX: number, startY: number, vx?: number, vy?: number) => {
      // Default to top-left to bottom-right diagonal if no velocity given
      const angle = vx !== undefined && vy !== undefined 
        ? Math.atan2(vy, vx) 
        : (Math.PI / 4) + (Math.random() - 0.5) * 0.2;
        
      const speed = Math.random() * 6 + 10;
      const normVx = Math.cos(angle);
      const normVy = Math.sin(angle);

      const colorPalette = [
        "rgba(59, 130, 246, ",  // blue
        "rgba(168, 85, 247, ",  // purple
        "rgba(6, 182, 212, ",   // cyan
        "rgba(255, 255, 255, ", // white
      ];

      shootingStars.push({
        id: Math.random(),
        x: startX,
        y: startY,
        vx: normVx * speed,
        vy: normVy * speed,
        length: Math.random() * 60 + 80, // length of trail
        speed,
        alpha: 1,
        maxAlpha: Math.random() * 0.4 + 0.6,
        life: 0,
        maxLife: Math.random() * 25 + 30, // frames alive
        color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
        headSize: Math.random() * 1.5 + 2.0,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768 || prefersReducedMotion) return;
      const rect = canvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      mouse.x = currentX;
      mouse.y = currentY;
      mouse.active = true;

      // Calculate mouse velocity vector
      if (lastMouse.x > 0 && lastMouse.y > 0) {
        const dx = currentX - lastMouse.x;
        const dy = currentY - lastMouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const now = Date.now();

        // Spawn shooting star on purposeful mouse drag
        if (dist > 18 && now - lastSpawnTime > 120) {
          spawnShootingStar(currentX, currentY, dx, dy);
          lastSpawnTime = now;
        }
      }

      lastMouse.x = currentX;
      lastMouse.y = currentY;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
      lastMouse = { x: -1000, y: -1000 };
    };

    // Draw 4-point diamond cross star
    const drawSparkle = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      alpha: number,
      color: string,
      rotation: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.fillStyle = color + alpha + ")";
      ctx.shadowColor = color + "0.4)";
      ctx.shadowBlur = size * 1.5;

      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        ctx.rotate(Math.PI / 2);
        ctx.lineTo(0, size);
        ctx.quadraticCurveTo(0, 0, size * 0.22, 0);
      }
      ctx.fill();
      ctx.restore();
    };

    // Draw circular dot star
    const drawDot = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      alpha: number,
      color: string
    ) => {
      ctx.save();
      ctx.fillStyle = color + alpha + ")";
      ctx.shadowColor = color + "0.3)";
      ctx.shadowBlur = size * 2;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    // Draw a Shooting Star Comet with gradient tail
    const drawShootingStar = (ctx: CanvasRenderingContext2D, star: ShootingStar) => {
      const { x, y, vx, vy, length, alpha, color, headSize } = star;
      const isDark = document.documentElement.classList.contains("dark");
      
      // Calculate tail end point
      const angle = Math.atan2(vy, vx);
      const tailX = x - Math.cos(angle) * length;
      const tailY = y - Math.sin(angle) * length;

      ctx.save();
      
      const headColor = isDark ? "#ffffff" : "#2563eb";
      const shadowColor = isDark ? "rgba(255, 255, 255, 0.8)" : "rgba(37, 99, 235, 0.7)";

      // Tapered gradient streak line
      const gradient = ctx.createLinearGradient(tailX, tailY, x, y);
      gradient.addColorStop(0, color + "0)");
      gradient.addColorStop(0.7, color + (alpha * (isDark ? 0.5 : 0.85)) + ")");
      gradient.addColorStop(1, isDark ? ("rgba(255, 255, 255, " + alpha + ")") : ("rgba(37, 99, 235, " + alpha + ")"));

      ctx.strokeStyle = gradient;
      ctx.lineWidth = headSize;
      ctx.lineCap = "round";
      ctx.shadowColor = shadowColor;
      ctx.shadowBlur = 8;

      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(x, y);
      ctx.stroke();

      // Bright glowing comet head
      ctx.fillStyle = headColor;
      ctx.beginPath();
      ctx.arc(x, y, headSize * 1.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Random background shooting star generator (every ~3-4 seconds)
      if (!prefersReducedMotion && Math.random() < 0.012 && shootingStars.length < 5) {
        const startX = Math.random() * (width * 0.8);
        const startY = Math.random() * (height * 0.4);
        spawnShootingStar(startX, startY);
      }

      // 1. Render Background Twinkling Stars
      stars.forEach((p) => {
        if (!prefersReducedMotion) {
          p.twinklePhase += p.twinkleSpeed;
          p.rotation += p.rotationSpeed;
        }
        const currentAlpha = Math.min(
          0.9,
          Math.max(0.1, p.baseAlpha * (0.55 + 0.45 * Math.sin(p.twinklePhase)))
        );

        // Soft mouse repulsion/parallax
        if (mouse.active && window.innerWidth >= 768) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 130;

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            const targetX = p.baseX + (dx / dist) * force * 18;
            const targetY = p.baseY + (dy / dist) * force * 18;
            p.x += (targetX - p.x) * 0.08;
            p.y += (targetY - p.y) * 0.08;
          } else {
            p.x += (p.baseX - p.x) * 0.04;
            p.y += (p.baseY - p.y) * 0.04;
          }
        } else {
          p.x += (p.baseX - p.x) * 0.04;
          p.y += (p.baseY - p.y) * 0.04;
        }

        if (p.type === "sparkle") {
          drawSparkle(ctx, p.x, p.y, p.size, currentAlpha, p.color, p.rotation);
        } else {
          drawDot(ctx, p.x, p.y, p.size, currentAlpha, p.color);
        }
      });

      // 2. Update & Render Shooting Stars
      shootingStars.forEach((s, index) => {
        s.x += s.vx;
        s.y += s.vy;
        s.life++;

        // Fade out as it nears end of life
        const progress = s.life / s.maxLife;
        s.alpha = s.maxAlpha * (1 - progress);

        drawShootingStar(ctx, s);

        // Remove dead shooting stars
        if (s.life >= s.maxLife || s.x > width + 100 || s.y > height + 100) {
          shootingStars.splice(index, 1);
        }
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
    />
  );
};

export default HeroStarBackground;
