import Reveal from "@/components/ui/Reveal";
import { PERSON, ABOUT } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-pad grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Image placeholder */}
      <Reveal direction="left">
        <div className="relative hidden lg:block">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-violet/15 bg-gradient-to-br from-surface2 to-surface flex items-center justify-center text-8xl select-none">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(124,58,237,0.22), transparent 60%)",
              }}
            />
            <span className="relative z-10">👨‍💻</span>
          </div>
          {/* Corner accents */}
          <span className="absolute top-[-1px] left-[-1px] w-14 h-14 border-t-2 border-l-2 border-neon rounded-tl-3xl" />
          <span className="absolute bottom-[-1px] right-[-1px] w-14 h-14 border-b-2 border-r-2 border-neon rounded-br-3xl" />
        </div>
      </Reveal>

      {/* Text */}
      <Reveal direction="right">
        <p className="text-[0.72rem] tracking-[0.22em] uppercase text-neon font-bold mb-3">
          About Me
        </p>
        <h2
          className="font-syne font-extrabold leading-[1.1] mb-6"
          style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
        >
          I Craft Digital Experiences that{" "}
          <span className="text-neon">Matter</span>
        </h2>

        <p className="text-muted leading-[1.9] text-[1rem] mb-7">
          Hey, I&apos;m <strong className="text-white">{PERSON.name}</strong> — a passionate{" "}
          <strong className="text-white">{PERSON.title}</strong> who loves turning complex problems
          into elegant digital solutions.
          <br />
          <br />
          I live at the intersection of design and engineering. Whether architecting scalable backends
          or crafting pixel-perfect interfaces, I bring precision and creativity to every project.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {ABOUT.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full bg-violet/10 border border-violet/25 text-neon text-[0.8rem] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet to-violet-light text-white font-semibold text-[0.93rem] hover:-translate-y-0.5 hover:shadow-glow-violet transition-all duration-200"
        >
          Let&apos;s Talk →
        </a>
      </Reveal>
    </section>
  );
}
