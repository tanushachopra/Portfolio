import { PERSON } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="px-[6%] py-7 border-t border-violet/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.82rem] text-muted">
      <span>
        © {new Date().getFullYear()}{" "}
        <strong className="text-white">{PERSON.name}</strong>. Crafted with ❤️ &amp; caffeine.
      </span>
      <div className="flex gap-6">
        {["#hero", "#projects", "#contact"].map((href) => (
          <a
            key={href}
            href={href}
            className="hover:text-neon transition-colors capitalize"
          >
            {href.replace("#", "")}
          </a>
        ))}
      </div>
    </footer>
  );
}
