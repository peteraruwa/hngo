import { useEffect, useRef } from "react";
function EmberCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    let W, H, parts = [], raf, resizeTimer;
    const DPR = window.devicePixelRatio || 1;
    const COLORS = ["255,154,60", "245,181,63", "255,106,24", "200,30,58"];

    function size() {
      const r = canvas.getBoundingClientRect();
      W = canvas.width = r.width * DPR;
      H = canvas.height = r.height * DPR;
    }
    function spawn() {
      return {
        x: Math.random() * W,
        y: H + Math.random() * 40 * DPR,
        r: (Math.random() * 2.2 + 0.6) * DPR,
        vy: -(Math.random() * 0.5 + 0.18) * DPR,
        vx: (Math.random() - 0.5) * 0.25 * DPR,
        life: 0,
        max: Math.random() * 260 + 160,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
        sway: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.02 + 0.005,
      };
    }
    function init() {
      size();
      const count = Math.min(80, Math.floor(W / (14 * DPR)));
      parts = Array.from({ length: count }, () => {
        const p = spawn();
        p.y = Math.random() * H;
        p.life = Math.random() * p.max;
        return p;
      });
    }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";
      for (const p of parts) {
        p.life++;
        p.sway += p.swaySpeed;
        p.x += p.vx + Math.sin(p.sway) * 0.3 * DPR;
        p.y += p.vy;
        const t = p.life / p.max;
        const alpha = t < 0.15 ? t / 0.15 : 1 - (t - 0.15) / 0.85;
        const a = Math.max(0, alpha) * 0.85;
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
        grd.addColorStop(0, `rgba(${p.c},${a})`);
        grd.addColorStop(1, `rgba(${p.c},0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fill();
        if (p.life >= p.max || p.y < -20 * DPR) Object.assign(p, spawn());
      }
      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(draw);
    }

    init();
    draw();
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(init, 200);
    };
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(draw);
    };
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="hn-ember-canvas" />;

export default EmberCanvas;
