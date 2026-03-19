# 🚀 Portfolio — Next.js + Tailwind + Framer Motion

A dark futuristic, production-ready portfolio built with:
- **Next.js 14** (App Router)
- **Tailwind CSS** (utility-first styling)
- **Framer Motion** (smooth animations)
- **Canvas 2D** (animated 3D-like sphere in hero)
- **TypeScript** throughout

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── globals.css        ← global styles + font imports
│   ├── layout.tsx         ← root layout
│   └── page.tsx           ← assembles all sections
├── components/
│   ├── ui/
│   │   ├── LoadingScreen.tsx
│   │   ├── CursorGlow.tsx
│   │   └── Reveal.tsx     ← scroll animation wrapper
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Featured.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── three/
│       └── SphereCanvas.tsx  ← animated canvas sphere
├── data/
│   └── portfolio.ts       ← ⭐ ALL YOUR CONTENT LIVES HERE
└── lib/
    ├── hooks.ts           ← typing animation + mouse parallax
    └── utils.ts           ← cn() helper
```

---

## ✏️ How to Customize

Open **`src/data/portfolio.ts`** and replace every `{{PLACEHOLDER}}`:

| Placeholder | Example Value |
|---|---|
| `{{NAME}}` | `Ibrahim Memon` |
| `{{TITLE}}` | `UI/UX Designer & Software Engineer` |
| `{{BIO}}` | `A self-taught designer with 3+ years...` |
| `{{EMAIL}}` | `ibrahim@example.com` |
| `{{GITHUB_URL}}` | `https://github.com/ibrahim` |
| `{{LINKEDIN_URL}}` | `https://linkedin.com/in/ibrahim` |
| `{{PROJECT_1_TITLE}}` | `TaskFlow — Project Manager` |
| `{{PROJECT_1_DESC}}` | `A real-time collaborative tool...` |
| `{{PROJECT_1_LIVE}}` | `https://taskflow.vercel.app` |
| `{{JOB_1_ROLE}}` | `Software Engineer` |
| `{{JOB_1_COMPANY}}` | `WebHR` |
| ... | ... |

Also update `src/app/layout.tsx` to set the page title/description.

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 🌐 Deploy to Vercel (Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and connect at vercel.com — it auto-deploys on every push.

---

## 🎨 Customizing Colors

All design tokens are in `tailwind.config.ts`:

```ts
colors: {
  bg:      "#050508",   // page background
  surface: "#0d0d18",   // card/section background
  violet:  "#7c3aed",   // primary accent
  neon:    "#c084fc",   // neon purple
  cyan:    "#22d3ee",   // cyan accent
  muted:   "#8b8aa8",   // muted text
}
```

---

## ✨ Features

- ⚡ Loading screen with progress bar
- 🖱️ Cursor glow that follows mouse
- 🔤 Typing animation cycling through roles
- 🌐 Animated Canvas 2D sphere in hero
- 🎯 Scroll-triggered reveal animations (Framer Motion)
- 🃏 Glassmorphism project cards with hover effects
- 📱 Fully responsive (mobile hamburger nav)
- 🌗 Sticky blurred navbar on scroll
- 🖱️ Mouse parallax on hero background orbs
- ⏱️ Experience timeline with hover glow
