"use client";
import { useEffect, useRef } from "react";

export default function SpherCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2, cy = H / 2, r = W * 0.365;

    function draw() {
      if (!ctx) return;
      const t = tRef.current;
      ctx.clearRect(0, 0, W, H);

      // Base sphere gradient
      const grad = ctx.createRadialGradient(cx - r * 0.27, cy - r * 0.27, r * 0.12, cx, cy, r);
      grad.addColorStop(0, "rgba(192,132,252,0.38)");
      grad.addColorStop(0.5, "rgba(124,58,237,0.2)");
      grad.addColorStop(1, "rgba(124,58,237,0.03)");
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Latitude lines
      ctx.lineWidth = 0.7;
      for (let i = 0; i < 10; i++) {
        const angle = (i / 10) * Math.PI;
        const rx = r * Math.abs(Math.cos(angle + t * 0.28));
        ctx.strokeStyle = `rgba(168,85,247,${0.08 + rx / r * 0.06})`;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, r, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Longitude lines
      for (let i = 0; i < 10; i++) {
        const angle = (i / 10) * Math.PI;
        const ry = r * Math.abs(Math.cos(angle + t * 0.19));
        ctx.strokeStyle = `rgba(168,85,247,${0.08 + ry / r * 0.06})`;
        ctx.beginPath();
        ctx.ellipse(cx, cy, r, ry, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Animated glow dot
      const dx = cx + r * 0.55 * Math.cos(t * 0.74);
      const dy = cy + r * 0.55 * Math.sin(t * 0.74 * 1.38);
      const dg = ctx.createRadialGradient(dx, dy, 0, dx, dy, 18);
      dg.addColorStop(0, "rgba(232,121,249,0.95)");
      dg.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(dx, dy, 18, 0, Math.PI * 2);
      ctx.fillStyle = dg;
      ctx.fill();

      // Second smaller dot
      const dx2 = cx + r * 0.45 * Math.cos(t * 0.5 + 2);
      const dy2 = cy + r * 0.45 * Math.sin(t * 0.6 + 1);
      const dg2 = ctx.createRadialGradient(dx2, dy2, 0, dx2, dy2, 10);
      dg2.addColorStop(0, "rgba(34,211,238,0.8)");
      dg2.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(dx2, dy2, 10, 0, Math.PI * 2);
      ctx.fillStyle = dg2;
      ctx.fill();

      // Surface particles
      for (let i = 0; i < 30; i++) {
        const a1 = ((i * 37.3 + t * 20) * Math.PI) / 180;
        const a2 = ((i * 53.1 + t * 14) * Math.PI) / 180;
        const px = cx + r * Math.cos(a2) * Math.sin(a1);
        const py = cy + r * Math.sin(a2) * Math.sin(a1);
        const pz = Math.cos(a1);
        if (pz > 0) {
          ctx.beginPath();
          ctx.arc(px, py, pz * 2.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(192,132,252,${pz * 0.65})`;
          ctx.fill();
        }
      }

      // Rim glow
      ctx.beginPath();
      ctx.arc(cx, cy, r + 3, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(168,85,247,0.32)";
      ctx.lineWidth = 5;
      ctx.stroke();

      tRef.current += 0.01;
      rafRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={300}
      className="rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ width: 300, height: 300 }}
    />
  );
}
