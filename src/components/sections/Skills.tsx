import Reveal from "@/components/ui/Reveal";
import { SKILLS } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-surface">
      <Reveal>
        <p className="text-[0.72rem] tracking-[0.22em] uppercase text-neon font-bold mb-3 text-center">
          What I Work With
        </p>
        <h2
          className="font-syne font-extrabold leading-[1.1] text-center mb-14"
          style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
        >
          Skills &amp; Tools
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {SKILLS.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 0.12}>
            <div className="relative group glass rounded-2xl p-8 glow-on-hover top-bar overflow-hidden h-full">
              <div className="text-[2rem] mb-3">{cat.icon}</div>
              <h3 className="font-syne font-bold text-[1rem] mb-5">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.pills.map((pill) => (
                  <span
                    key={pill}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[0.75rem] text-muted cursor-default transition-all duration-200 hover:bg-violet/15 hover:text-neon hover:border-violet/35"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
