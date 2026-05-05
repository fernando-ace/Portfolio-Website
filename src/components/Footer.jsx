import { profile } from "../data/portfolioData";

export function Footer() {
  return (
    <footer className="border-t border-line px-3 py-6 md:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 text-sm text-muted md:flex-row md:items-center">
        <p>{"$ echo \"\u00A9 2026 Fernando Acevedo. All rights reserved.\""}</p>
        <div className="flex flex-wrap gap-4">
          <a className="nav-link" href={profile.githubHref} target="_blank" rel="noreferrer">GitHub</a>
          <a className="nav-link" href={profile.linkedinHref} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="nav-link" href={profile.resumeHref} target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>
    </footer>
  );
}
