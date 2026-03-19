"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { PERSON, TYPING_PHRASES } from "@/data/portfolio";
import { useTypingAnimation, useMouseParallax } from "@/lib/hooks";
import dynamic from "next/dynamic";

const SphereCanvas = dynamic(() => import("@/components/three/SphereCanvas"), { ssr: false });

const FLOAT_TAGS = [
  { label: "⚛️ React",   cls: "top-3 -right-4 text-[#61dafb]", delay: 0    },
  { label: "🎨 Figma",   cls: "bottom-16 -right-6 text-neon",   delay: 0.5  },
  { label: "🟢 Node.js", cls: "bottom-4 -left-4 text-[#68d391]", delay: 0.25 },
];

export default function Hero() {
  const typed = useTypingAnimation(TYPING_PHRASES);
  const mouse = useMouseParallax();

  return (
    <section
      id="hero"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-12 section-pad pt-[130px] relative overflow-hidden"
    >
      {/* Background orbs */}
      <motion.div
        animate={{ x: mouse.x, y: mouse.y }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
        className="pointer-events-none absolute -top-36 -right-36 w-[580px] h-[580px] rounded-full animate-orb-drift"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.21) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      <motion.div
        animate={{ x: -mouse.x * 0.4, y: -mouse.y * 0.4 }}
        transition={{ type: "spring", stiffness: 20, damping: 20 }}
        className="pointer-events-none absolute bottom-0 left-[5%] w-[320px] h-[320px] rounded-full animate-orb-drift2"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.09) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* LEFT — text */}
      <div className="relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet/30 bg-violet/8 text-neon text-[0.77rem] font-semibold mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse-dot" />
          {PERSON.available ? "Available for Work" : "Open to Opportunities"}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.45, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="font-syne font-extrabold leading-[1.05] tracking-[-1.5px] mb-3"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}
        >
          A Developer who
          <br />
          <span className="gradient-text">Builds the Future</span>
        </motion.h1>

        {/* Typed subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.65 }}
          className="font-syne font-semibold text-muted mb-4 min-h-[2.1rem]"
          style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.55rem)" }}
        >
          I&apos;m a{" "}
          <span className="text-neon">{typed}</span>
          <span className="cursor-blink ml-0.5">|</span>
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
          className="text-muted text-[1rem] leading-[1.85] max-w-[480px] mb-8"
        >
          {PERSON.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.95 }}
          className="flex flex-wrap gap-3 mb-9"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet to-violet-light text-white font-semibold text-[0.93rem] hover:-translate-y-0.5 hover:shadow-glow-violet transition-all duration-200"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
              <polyline points="13 2 13 9 20 9" />
            </svg>
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur text-white font-semibold text-[0.93rem] hover:border-violet hover:shadow-glow hover:-translate-y-0.5 transition-all duration-200"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,12 2,6" />
            </svg>
            Contact Me
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.1 }}
          className="flex gap-8"
        >
          {PERSON.stats.map((s, i) => (
            <div key={i}>
              <div
                className="font-syne font-extrabold gradient-text"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)" }}
              >
                {s.num}
              </div>
              <div className="text-[0.74rem] text-muted tracking-[0.06em] mt-0.5 uppercase">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* RIGHT — 3D Sphere */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:flex items-center justify-center relative z-10"
      >
        <div className="relative w-[360px] h-[360px]">
          {/* Glow backdrop */}
          <div
            className="absolute inset-[60px] rounded-full animate-float"
            style={{
              background: "radial-gradient(circle, rgba(124,58,237,0.3), transparent 70%)",
              filter: "blur(20px)",
            }}
          />

          {/* Spinning rings */}
          <div
            className="absolute inset-0 rounded-full border border-violet/20 animate-spin-slow"
            style={{ contain: "layout" }}
          >
            <span className="absolute top-[-5px] left-1/2 w-2.5 h-2.5 rounded-full bg-neon shadow-[0_0_14px_theme(colors.neon.DEFAULT)] -translate-x-1/2" />
          </div>
          <div className="absolute inset-7 rounded-full border border-dashed border-cyan/12 animate-spin-reverse" />

          {/* Canvas sphere */}
          <SphereCanvas />

          {/* Floating tags */}
          {FLOAT_TAGS.map((tag, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3 + i * 0.15 }}
              className={`absolute ${tag.cls} flex items-center gap-1.5 px-3 py-2 rounded-xl glass text-[0.75rem] font-semibold whitespace-nowrap`}
              style={{
                animation: `float-tag 4s ease-in-out infinite ${-i * 1.3}s`,
              }}
            >
              {tag.label}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
