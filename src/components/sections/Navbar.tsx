"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PERSON } from "@/data/portfolio";

const NAV_LINKS = [
  { label: "Home",       href: "#hero"       },
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const cb = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", cb);
    return () => window.removeEventListener("scroll", cb);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 px-[6%] h-[68px] flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-2xl border-b border-violet/10"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a href="#hero" className="font-syne text-xl font-extrabold gradient-text select-none">
        {PERSON.name}
      </a>

      {/* Desktop */}
      <ul className="hidden md:flex items-center gap-7 list-none">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="relative text-muted text-[0.87rem] font-medium tracking-wide hover:text-white transition-colors duration-200 group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-neon origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg border border-violet text-neon text-[0.87rem] font-semibold hover:bg-violet/15 hover:shadow-glow transition-all duration-200"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-1"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`block w-6 h-0.5 bg-muted rounded transition-all duration-300 ${
              open && i === 0 ? "rotate-45 translate-y-[7px]"
              : open && i === 1 ? "opacity-0 scale-x-0"
              : open && i === 2 ? "-rotate-45 -translate-y-[7px]"
              : ""
            }`}
          />
        ))}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="absolute top-[68px] inset-x-0 bg-bg/97 backdrop-blur-xl border-b border-violet/15 px-8 py-6 flex flex-col gap-5 md:hidden"
          >
            {[...NAV_LINKS, { label: "Contact", href: "#contact" }].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-muted hover:text-neon font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
