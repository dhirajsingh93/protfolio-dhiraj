import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Download, ArrowDown, Sparkles } from "lucide-react";
import resume from "../assets/Dhiraj.pdf";
import { scrollToSection } from "../utils/scrollToSection";

/* ------------------------------------------------------------------
   Theme Configuration (Molten Ember Palette)
------------------------------------------------------------------- */
const C = {
  bg: "#0f0f0f",
  text: "#F5F1EC",
  mute: "#9A9088",
  amber: "#FF9A3D",
  orange: "#FF5722",
  yellow: "#FFC107",
  line: "rgba(255, 255, 255, 0.08)",
  glassBg: "rgba(20, 18, 17, 0.85)",
};

const CHIPS = [
  {
    t: "React",
    x: "7%",
    y: "22%",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    t: "Node.js",
    x: "82%",
    y: "20%",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    t: "MongoDB",
    x: "6%",
    y: "68%",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    t: "Express",
    x: "85%",
    y: "62%",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    invert: true,
  },
  {
    t: "Javascript",
    x: "72%",
    y: "82%",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    t: "Tailwind CSS",
    x: "16%",
    y: "84%",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
];

const css = `
.hero-interactive {
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  overflow: hidden;
  background-color: ${C.bg};
  color: ${C.text};
  font-family: 'Sora', system-ui, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 20px 80px;
  perspective: 1000px;
}
.hero-interactive canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.hero-interactive .name {
  position: relative;
  z-index: 2;
  font-weight: 800;
  font-size: clamp(52px, 12vw, 180px);
  line-height: 0.92;
  letter-spacing: -0.04em;
  transform-style: preserve-3d;
  user-select: none;
}
.hero-interactive .name .w {
  display: block;
}
.hero-interactive .name .w:last-child .ch {
  color: transparent;
  -webkit-text-stroke: 2px ${C.text};
  transition: -webkit-text-stroke 0.25s ease, text-shadow 0.25s ease;
}
.hero-interactive .name .w:last-child .ch:hover {
  -webkit-text-stroke: 2px ${C.amber};
  text-shadow: 0 0 20px rgba(255, 154, 61, 0.55);
}
.hero-interactive .tag {
  position: relative;
  z-index: 2;
  margin-top: 22px;
  font-size: 18px;
  color: ${C.mute};
  max-width: 48ch;
  line-height: 1.6;
}
.hero-interactive .cta {
  position: relative;
  z-index: 2;
  display: flex;
  gap: 16px;
  margin-top: 32px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.hero-interactive .btn {
  font-family: 'Sora', sans-serif;
  font-size: 15px;
  font-weight: 600;
  border-radius: 14px;
  padding: 13px 26px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  transition: all 0.25s ease;
  user-select: none;
}
.hero-interactive .btn:focus-visible {
  outline: 2px solid ${C.amber};
  outline-offset: 4px;
}
.hero-interactive .btn-primary {
  background: linear-gradient(120deg, ${C.yellow} 0%, ${C.orange} 100%);
  color: #0D0B0A;
  font-weight: 700;
  border: 1px solid rgba(255, 193, 7, 0.4);
  box-shadow: 0 4px 25px -2px rgba(255, 87, 34, 0.4), 0 0 15px rgba(255, 154, 61, 0.25);
}
.hero-interactive .btn-primary:hover {
  filter: brightness(1.08);
  box-shadow: 0 8px 32px -2px rgba(255, 87, 34, 0.65), 0 0 24px rgba(255, 154, 61, 0.4);
}
.hero-interactive .btn-secondary {
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: ${C.text};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 4px 20px -4px rgba(0, 0, 0, 0.5);
}
.hero-interactive .btn-secondary:hover {
  border-color: rgba(255, 154, 61, 0.5);
  color: ${C.amber};
  background: rgba(255, 154, 61, 0.08);
  box-shadow: 0 4px 25px -4px rgba(255, 154, 61, 0.25);
}
.hero-interactive .chip {
  position: absolute;
  z-index: 3;
  cursor: grab;
  touch-action: none;
}
.hero-interactive .chip .chip-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font: 500 13px 'Sora', sans-serif;
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: ${C.glassBg};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: ${C.text};
  box-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.6);
  transition: border-color 0.2s, box-shadow 0.2s, color 0.2s;
  user-select: none;
}
.hero-interactive .chip:hover .chip-pill {
  border-color: rgba(255, 154, 61, 0.5);
  box-shadow: 0 8px 25px -4px rgba(255, 154, 61, 0.3);
  color: ${C.amber};
}
.hero-interactive .chip:active {
  cursor: grabbing;
}
.hero-interactive .chip-icon {
  width: 16px;
  height: 16px;
  object-fit: contain;
  pointer-events: none;
  user-select: none;
  flex-shrink: 0;
}
.hero-interactive .foot {
  position: absolute;
  bottom: 24px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
  font-size: 12px;
  font-family: 'JetBrains Mono', monospace;
  color: ${C.mute};
  z-index: 2;
  pointer-events: none;
}
.hero-interactive .foot-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${C.amber};
  box-shadow: 0 0 10px ${C.amber};
  margin-right: 8px;
  animation: heroPulse 2s infinite ease-in-out;
}
@keyframes heroPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.45; transform: scale(0.85); }
}
@media (max-width: 768px) {
  .hero-interactive .chip { display: none; }
  .hero-interactive .foot {
    flex-direction: column;
    gap: 8px;
    align-items: center;
    text-align: center;
    bottom: 16px;
    padding: 0 16px;
    font-size: 11px;
  }
}
`;

/* ------------------------------------------------------------------
   Dot grid that reacts to cursor movement and click shockwaves
------------------------------------------------------------------- */
function DotField({ reduced }) {
  const ref = useRef(null);
  const mouse = useRef({ x: -999, y: -999 });
  const pulse = useRef(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    let dots = [], raf, w = 0, h = 0;
    const GAP = 32;

    const build = () => {
      if (!cv) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = cv.clientWidth;
      h = cv.clientHeight;
      if (!w || !h) return;
      cv.width = Math.floor(w * dpr);
      cv.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      for (let x = GAP / 2; x < w; x += GAP) {
        for (let y = GAP / 2; y < h; y += GAP) {
          dots.push({ hx: x, hy: y, x, y, vx: 0, vy: 0 });
        }
      }
    };
    build();
    const ro = new ResizeObserver(build);
    ro.observe(cv);

    const loop = (now) => {
      ctx.clearRect(0, 0, w, h);
      const m = mouse.current;
      const p = pulse.current;
      const pr = p ? (now - p.t) * 0.85 : 0;
      if (p && pr > Math.max(w, h) * 1.25) pulse.current = null;

      for (const d of dots) {
        let glow = 0;
        if (!reduced) {
          const dx = d.x - m.x;
          const dy = d.y - m.y;
          const dist = Math.hypot(dx, dy);

          // Push away on mouse hover
          if (dist < 140) {
            const f = (1 - dist / 140) * 2.2;
            d.vx += (dx / (dist || 1)) * f;
            d.vy += (dy / (dist || 1)) * f;
            glow = 1 - dist / 140;
          }

          // Shockwave ripple on click
          if (p) {
            const pd = Math.hypot(d.x - p.x, d.y - p.y);
            if (Math.abs(pd - pr) < 45) {
              const f = 4.2 * (1 - Math.abs(pd - pr) / 45);
              d.vx += ((d.x - p.x) / (pd || 1)) * f;
              d.vy += ((d.y - p.y) / (pd || 1)) * f;
              glow = Math.max(glow, 0.95);
            }
          }

          // Spring return to base position
          d.vx += (d.hx - d.x) * 0.06;
          d.vy += (d.hy - d.y) * 0.06;
          d.vx *= 0.86;
          d.vy *= 0.86;
          d.x += d.vx;
          d.y += d.vy;
        }

        ctx.beginPath();
        const radius = 1.3 + glow * 2.5;
        ctx.arc(d.x, d.y, radius, 0, 6.283);

        // Molten Amber & Gold Glow Colors
        if (glow > 0.55) {
          ctx.fillStyle = `rgba(255, 193, 7, ${0.75 + glow * 0.25})`;
        } else if (glow > 0.02) {
          ctx.fillStyle = `rgba(255, 154, 61, ${0.35 + glow * 0.65})`;
        } else {
          ctx.fillStyle = "rgba(255, 255, 255, 0.09)";
        }
        ctx.fill();
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const move = (e) => {
      const r = cv.getBoundingClientRect();
      mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const leave = () => {
      mouse.current = { x: -999, y: -999 };
    };
    const click = (e) => {
      if (e.target.closest("button, .chip, a, nav")) return;
      const r = cv.getBoundingClientRect();
      pulse.current = {
        x: e.clientX - r.left,
        y: e.clientY - r.top,
        t: performance.now(),
      };
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerleave", leave);
    window.addEventListener("pointerdown", click);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
      window.removeEventListener("pointerdown", click);
    };
  }, [reduced]);

  return <canvas ref={ref} aria-hidden="true" />;
}

/* ------------------------------------------------------------------
   Button that magnetically pulls toward cursor
------------------------------------------------------------------- */
function Magnetic({
  children,
  className,
  as = "button",
  onClick,
  href,
  download,
  target,
  rel,
  ...props
}) {
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 });
  const Component = as === "a" ? motion.a : motion.button;

  return (
    <Component
      data-hover="true"
      className={className}
      style={{ x, y }}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      href={href}
      download={download}
      target={target}
      rel={rel}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.32);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.42);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

/* ------------------------------------------------------------------
   Name: letters jump on hover, loaded with staggered spring
------------------------------------------------------------------- */
function Word({ text, base }) {
  return (
    <span className="w" aria-hidden="true">
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          className="ch inline-block cursor-default select-none"
          initial={{ y: 80, opacity: 0, rotateX: -70 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{
            delay: 0.15 + (base + i) * 0.045,
            type: "spring",
            stiffness: 150,
            damping: 14,
          }}
          whileHover={{
            y: -22,
            scale: 1.1,
            color: "#FF9A3D",
            transition: { type: "spring", stiffness: 400, damping: 12 },
          }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------
   Main Interactive Hero Component
------------------------------------------------------------------- */
export default function Hero() {
  const reduced = useReducedMotion();
  const box = useRef(null);

  // 3D tilt of the name
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const rx = useSpring(useTransform(ny, [-0.5, 0.5], [9, -9]), {
    stiffness: 120,
    damping: 18,
  });
  const ry = useSpring(useTransform(nx, [-0.5, 0.5], [-12, 12]), {
    stiffness: 120,
    damping: 18,
  });

  const onMove = (e) => {
    if (reduced) return;
    if (!box.current) return;
    const r = box.current.getBoundingClientRect();
    nx.set((e.clientX - r.left) / r.width - 0.5);
    ny.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="home"
      data-section="hero"
      ref={box}
      className="hero-interactive"
      onPointerMove={onMove}
      onPointerLeave={() => {
        nx.set(0);
        ny.set(0);
      }}
    >
      <style>{css}</style>
      <DotField reduced={reduced} />

      {/* Draggable Tech Chips */}
      {CHIPS.map((c, i) => (
        <motion.div
          key={c.t}
          className="chip"
          style={{ left: c.x, top: c.y }}
          drag
          dragConstraints={box}
          dragElastic={0.25}
          dragTransition={{ bounceStiffness: 200, bounceDamping: 14 }}
          whileDrag={{ scale: 1.12, rotate: i % 2 ? 4 : -4 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1 + i * 0.1, type: "spring" }}
        >
          <motion.div
            className="chip-pill"
            animate={reduced ? {} : { y: [0, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3 + (i % 3),
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          >
            {c.icon && (
              <img
                src={c.icon}
                alt={c.t}
                draggable={false}
                className={`chip-icon ${c.invert ? "brightness-0 invert" : ""}`}
              />
            )}
            <span>{c.t}</span>
          </motion.div>
        </motion.div>
      ))}

      {/* Role Badge */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative z-[2] mb-3"
      >
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF9A3D]/30 bg-[#FF9A3D]/10 text-xs font-mono uppercase tracking-widest text-[#FF9A3D] backdrop-blur-md shadow-[0_0_15px_rgba(255,154,61,0.15)]">
          <span className="w-2 h-2 rounded-full bg-[#FF9A3D] shadow-[0_0_8px_#FF9A3D] animate-pulse" />
          Full Stack Developer
        </span>
      </motion.div>

      {/* 3D Tilting Name */}
      <motion.h1
        className="name"
        aria-label="Dhiraj Singh"
        style={{ rotateX: rx, rotateY: ry }}
      >
        <Word text="DHIRAJ" base={0} />
        <Word text="SINGH" base={6} />
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="tag"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
       
I'm a curious and motivated developer who loves{" "}
<b className="text-[#FF9A3D] font-semibold">learning new technologies</b>,
solving problems, and turning ideas into real-world web applications. I'm always exploring better ways to build, improve, and grow as a developer.
      </motion.p>

      {/* Interactive Action Buttons */}
      <motion.div
        className="cta"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.15, duration: 0.6 }}
      >
        {/* Projects Scroll Button */}
        <Magnetic
          onClick={() => scrollToSection("projects")}
          className="btn btn-primary"
        >
          <span>See my projects</span>
          <ArrowDown className="w-4 h-4 ml-1" />
        </Magnetic>

        {/* Resume Download Button */}
        <Magnetic
          as="a"
          href={resume}
          download="Dhiraj-Singh-Resume.pdf"
          className="btn btn-secondary"
        >
          <Download className="w-4 h-4 mr-1 text-[#FF9A3D]" />
          <span>Download resume</span>
        </Magnetic>
      </motion.div>

      {/* Interactive Footer */}
      <div className="foot">
        <span className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#FF9A3D]" />
          Drag to explore my skills. Built with curiosity.
        </span>
        <span className="flex items-center">
          <i className="foot-dot" />
          Based in India, open to opportunities
        </span>
      </div>
      </section>
  );
}