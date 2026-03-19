import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "Syne", "sans-serif"],
        dm: ["var(--font-dm)", "DM Sans", "sans-serif"],
      },
      colors: {
        bg: "#050508",
        surface: "#0d0d18",
        surface2: "#13131f",
        violet: {
          DEFAULT: "#7c3aed",
          light: "#a855f7",
        },
        neon: {
          DEFAULT: "#c084fc",
          bright: "#e879f9",
        },
        cyan: "#22d3ee",
        muted: "#8b8aa8",
      },
      boxShadow: {
        glow: "0 0 40px rgba(168,85,247,0.25)",
        "glow-strong": "0 0 80px rgba(168,85,247,0.45)",
        "glow-violet": "0 0 50px rgba(124,58,237,0.6)",
        "card-hover": "0 20px 60px rgba(124,58,237,0.22)",
      },
      animation: {
        "spin-slow": "spin 22s linear infinite",
        "spin-reverse": "spinReverse 15s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out infinite -3s",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        shimmer: "shimmer 4s linear infinite",
        "orb-drift": "orbDrift 8s ease-in-out infinite",
        "orb-drift2": "orbDrift 8s ease-in-out infinite -4s",
      },
      keyframes: {
        spinReverse: { to: { transform: "rotate(-360deg)" } },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-22px)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.25", transform: "scale(0.65)" },
        },
        shimmer: { to: { backgroundPosition: "200% center" } },
        orbDrift: {
          "0%,100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-30px) scale(1.06)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
