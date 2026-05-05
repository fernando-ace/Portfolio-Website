import { profile } from "../data/portfolioData";

export function ContactSection() {
  return (
    <section id="contact" className="px-3 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <article className="reveal rounded-2xl border border-line bg-card p-8 shadow-soft" data-reveal>
          <h2 className="section-title">Contact</h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="btn-ghost" href={profile.githubHref} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn-ghost" href={profile.linkedinHref} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn-ghost" href={profile.resumeHref} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
