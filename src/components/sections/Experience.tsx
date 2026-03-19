"use client";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { EXPERIENCE } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <Reveal>
        <p className="text-[0.72rem] tracking-[0.22em] uppercase text-neon font-bold mb-3">
          Where I&apos;ve Worked
        </p>
        <h2
          className="font-syne font-extrabold leading-[1.1] mb-14"
          style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
        >
          Experience
        </h2>
      </Reveal>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet via-violet/30 to-transparent" />

        <div className="flex flex-col gap-8">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <motion.div
                className="grid gap-5 pl-0"
                style={{ gridTemplateColumns: "50px 1fr" }}
                whileHover="hover"
              >
                {/* Dot */}
                <motion.div
                  variants={{
                    hover: { borderColor: "rgba(124,58,237,0.8)", boxShadow: "0 0 40px rgba(168,85,247,0.25)" },
                  }}
                  transition={{ duration: 0.25 }}
                  className="w-[50px] h-[50px] rounded-full bg-surface2 border-2 border-violet/18 flex items-center justify-center text-[1.2rem] relative z-10 flex-shrink-0"
                >
                  {job.icon}
                </motion.div>

                {/* Card */}
                <motion.div
                  variants={{
                    hover: { borderColor: "rgba(168,85,247,0.32)" },
                  }}
                  transition={{ duration: 0.25 }}
                  className="glass rounded-2xl p-6 border border-violet/15"
                >
                  <h3 className="font-syne font-bold text-[1.04rem] mb-1">{job.role}</h3>
                  <p className="text-neon text-[0.88rem] font-semibold mb-1">{job.company}</p>
                  <p className="text-muted text-[0.77rem] mb-3 tracking-wide">{job.period}</p>
                  <p className="text-muted text-[0.87rem] leading-[1.75]">{job.description}</p>
                </motion.div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
