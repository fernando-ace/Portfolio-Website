import { experience } from "../data/portfolioData";

function ExperienceCard({ item, featured = false }) {
  const hasMetrics = item.metrics?.length > 0;
  const hasHighlights = item.highlights?.length > 0;
  const hasTech = item.tech?.length > 0;

  return (
    <article
      className={`reveal rounded-xl border p-6 shadow-soft transition duration-300 hover:-translate-y-1 ${
        featured ? "border-accent/50 bg-card" : "border-line bg-surface"
      }`}
      data-reveal
    >
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-xl font-semibold text-text">{item.role} - {item.company}</h3>
        {featured && (
          <span className="rounded-full border border-accent/45 bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent">
            Priority Experience
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-muted">{item.period} | {item.location}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted">{item.summary}</p>

      {hasMetrics ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.metrics.map((metric) => (
            <span key={metric} className="rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
              {metric}
            </span>
          ))}
        </div>
      ) : null}

      {hasHighlights ? (
        <ul className="mt-5 space-y-2 text-sm text-text">
          {item.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {hasTech ? (
        <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted">
          {item.tech.map((tech) => (
            <span key={tech} className="rounded-md border border-line bg-page/50 px-2 py-1">
              {tech}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="px-3 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="space-y-5">
          <ExperienceCard item={experience[0]} featured />
          {experience.slice(1).map((item) => (
            <ExperienceCard key={`${item.company}-${item.period}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
