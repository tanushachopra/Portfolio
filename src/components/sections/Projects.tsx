"use client";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { PROJECTS } from "@/data/portfolio";

const CARD_GRADIENTS = [
  { from: "#1a0a2e", to: "#0a0a1f" },
  { from: "#0d1a1f", to: "#0a1a0d" },
  { from: "#1a0a1a", to: "#0f0a1f" },
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <Reveal>
        <p className="text-[0.72rem] tracking-[0.22em] uppercase text-neon font-bold mb-3">
          What I&apos;ve Built
        </p>
        <h2
          className="font-syne font-extrabold leading-[1.1] mb-14"
          style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
        >
          Projects
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {PROJECTS.map((p, i) => {
          const grad = CARD_GRADIENTS[i % CARD_GRADIENTS.length];
          return (
            <Reveal key={p.id} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -7 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group glass rounded-2xl overflow-hidden border border-violet/15 hover:border-violet/40 hover:shadow-card-hover transition-[border-color,box-shadow] duration-300 flex flex-col h-full"
              >
                {/* Image area */}
                <div
                  className="h-[170px] flex items-center justify-center text-[2.6rem] relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${grad.from}, ${grad.to})` }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.12), transparent 70%)",
                    }}
                  />
                  <span className="relative z-10">{p.emoji}</span>
                  <span className="absolute bottom-[-12px] right-3 font-syne font-extrabold text-[4.5rem] text-white/[0.05] select-none">
                    0{p.id}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-syne font-bold text-[1.08rem] mb-2">{p.title}</h3>
                  <p className="text-muted text-[0.86rem] leading-[1.72] mb-4 flex-1">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-violet/12 border border-violet/22 text-neon text-[0.7rem] font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 rounded-lg bg-violet/18 border border-violet/30 text-neon text-[0.8rem] font-semibold hover:bg-violet/35 hover:shadow-glow transition-all duration-200"
                    >
                      ↗ Live
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-muted text-[0.8rem] font-semibold hover:text-white hover:border-white/20 transition-all duration-200"
                    >
                      ⌥ Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
