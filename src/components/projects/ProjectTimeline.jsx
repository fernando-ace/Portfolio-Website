function projectId(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function ProjectTimeline({ activeIndex, onKeyDown, onSelect, projects, tabRefs }) {
  return (
    <div className="project-timeline-scroll">
      <div className="project-timeline-track" role="tablist" aria-label="Project timeline">
        {projects.map((project, index) => {
          const isActive = index === activeIndex;
          const id = projectId(project.name);

          return (
            <button
              key={project.name}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              id={`project-tab-${id}`}
              type="button"
              role="tab"
              className={`project-timeline-item ${isActive ? "project-timeline-item-active" : ""}`}
              aria-controls="project-detail-panel"
              aria-selected={isActive}
              data-project-name={project.name}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelect(index)}
              onFocus={() => onSelect(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              onPointerEnter={() => onSelect(index)}
            >
              <span className="project-timeline-dot" aria-hidden="true" />
              <span className="project-timeline-name">{project.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
