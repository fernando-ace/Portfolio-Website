function projectId(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function ProjectDetailCard({ project }) {
  const id = projectId(project.name);

  return (
    <article
      key={project.name}
      id="project-detail-panel"
      className="project-detail-card rounded-xl border border-line bg-surface p-5 sm:p-6"
      role="tabpanel"
      aria-labelledby={`project-tab-${id}`}
      tabIndex={0}
    >
      <header>
        <h3 className="text-2xl font-semibold leading-tight text-text sm:text-3xl">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{project.description}</p>
      </header>

      <div className="mt-5 border-t border-line pt-5">
        <ul className="space-y-3 text-sm leading-relaxed text-text">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 border-t border-line pt-5">
        <p className="text-sm font-semibold text-muted">Stack</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted">
          {project.stack.map((item) => (
            <span key={item} className="rounded-md border border-line bg-page/50 px-2.5 py-1.5">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.githubHref ? (
          <a className="btn-ghost min-w-28 text-sm" href={project.githubHref} target="_blank" rel="noreferrer">
            GitHub
          </a>
        ) : null}
        {project.liveHref ? (
          <a className="btn-primary min-w-28 text-sm" href={project.liveHref} target="_blank" rel="noreferrer">
            {project.liveLabel}
          </a>
        ) : null}
      </div>
    </article>
  );
}
