import { useState } from "react";
import { projects } from "../data/portfolioData";

export function ProjectsSection() {
  const [expanded, setExpanded] = useState({});

  return (
    <section id="projects" className="px-3 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const isExpanded = Boolean(expanded[project.name]);
            return (
              <article key={project.name} className="reveal overflow-hidden rounded-xl border border-line bg-surface shadow-soft" data-reveal>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-text">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-md border border-line bg-page/50 px-2 py-1">{item}</span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="mt-4 text-sm font-semibold text-accent underline-offset-4 hover:underline"
                    onClick={() => setExpanded((prev) => ({ ...prev, [project.name]: !isExpanded }))}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? "Hide details" : "Show details"}
                  </button>

                  {isExpanded && (
                    <ul className="mt-3 space-y-2 text-sm text-text">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-5 flex gap-2">
                    <a className="btn-ghost text-sm" href={project.githubHref} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
