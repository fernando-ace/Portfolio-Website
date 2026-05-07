import { useEffect, useState } from "react";
import { profile } from "../data/portfolioData";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#leadership", label: "Leadership & Awards" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-6">
      <nav
        aria-label="Primary"
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-xl border px-4 py-3 backdrop-blur transition-all duration-300 md:px-5 ${
          scrolled
            ? "border-line bg-surface/95 shadow-soft"
            : "border-transparent bg-surface/70"
        }`}
      >
        <a href="#home" className="text-sm font-semibold tracking-wide text-text md:text-base">
          {profile.name}
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-text lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-text" />
            <span className="block h-0.5 w-5 bg-text" />
            <span className="block h-0.5 w-5 bg-text" />
          </div>
        </button>

        <div className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center gap-5 text-sm font-medium text-muted">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="nav-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a className="btn-ghost" href={profile.githubHref} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn-ghost" href={profile.linkedinHref} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn-primary" href={profile.resumeHref} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`mx-auto mt-2 w-full max-w-6xl overflow-hidden rounded-xl border border-line bg-surface/95 px-4 py-4 shadow-soft transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 border-transparent p-0 opacity-0"
        }`}
      >
        <ul className="space-y-3 text-sm font-medium text-muted">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="nav-link block" href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-4 grid grid-cols-1 gap-2">
          <a className="btn-ghost text-center" href={profile.githubHref} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn-ghost text-center" href={profile.linkedinHref} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn-primary text-center" href={profile.resumeHref} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
