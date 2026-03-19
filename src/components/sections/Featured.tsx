import Reveal from "@/components/ui/Reveal";
import { FEATURED } from "@/data/portfolio";

export default function Featured() {
  return (
    <section id="featured" className="section-pad bg-surface">
      <Reveal>
        <div
          className="relative rounded-[28px] border border-violet/15 overflow-hidden p-10 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.07) 0%, rgba(34,211,238,0.04) 100%)",
          }}
        >
          {/* Background orb */}
          <div
            className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(124,58,237,0.18), transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          {/* Top border line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet to-transparent" />

          {/* Text */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-bright/10 border border-neon-bright/25 text-neon-bright text-[0.73rem] font-bold tracking-[0.1em] uppercase mb-4">
              ★ Featured Project
            </div>

            <h2
              className="font-syne font-extrabold leading-[1.1] mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}
            >
              {FEATURED.title}
            </h2>

            <p className="text-muted leading-[1.85] mb-7">{FEATURED.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {FEATURED.stack.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg bg-violet/12 border border-violet/22 text-neon text-[0.72rem] font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={FEATURED.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet to-violet-light text-white font-semibold text-[0.92rem] hover:-translate-y-0.5 hover:shadow-glow-violet transition-all duration-200"
              >
                ↗ View Live
              </a>
              <a
                href={FEATURED.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white font-semibold text-[0.92rem] hover:border-violet hover:shadow-glow hover:-translate-y-0.5 transition-all duration-200"
              >
                ⌥ GitHub
              </a>
            </div>
          </div>

          {/* Mock browser window */}
          <div className="relative z-10">
            <div
              className="relative rounded-2xl border border-violet/18 overflow-hidden aspect-[16/10] flex items-center justify-center text-[3rem]"
              style={{
                background: "linear-gradient(135deg, #1a0a2e, #0d0520, #001a2e)",
              }}
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet to-transparent" />
              {/* dots */}
              <div className="absolute top-3 left-4 flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              🖥️
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
