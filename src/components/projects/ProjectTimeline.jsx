function projectId(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function MobileProjectNavigation({ activeIndex, onSelect, projectCount }) {
  return (
    <div className="project-mobile-navigation" aria-label="Project navigation">
      <p className="project-mobile-position" aria-live="polite">
        Project {activeIndex + 1} of {projectCount}
      </p>
      <div className="project-mobile-actions">
        <button
          type="button"
          className="project-mobile-button"
          onClick={() => onSelect(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous project"
        >
          Previous
        </button>
        <button
          type="button"
          className="project-mobile-button"
          onClick={() => onSelect(activeIndex + 1)}
          disabled={activeIndex === projectCount - 1}
          aria-label="Next project"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export function ProjectTimeline({ activeIndex, onKeyDown, onSelect, projects, tabRefs }) {
  function handlePointerEnter(index) {
    if (window.matchMedia("(min-width: 768px)").matches) {
      onSelect(index);
    }
  }

  function selectAndReveal(index) {
    onSelect(index);

    window.requestAnimationFrame(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      tabRefs.current[index]?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "nearest",
        inline: "center"
      });
    });
  }

  return (
    <div className="min-w-0">
      <MobileProjectNavigation activeIndex={activeIndex} onSelect={selectAndReveal} projectCount={projects.length} />

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
                onClick={() => selectAndReveal(index)}
                onFocus={() => onSelect(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
                onPointerEnter={() => handlePointerEnter(index)}
              >
                <span className="project-timeline-dot" aria-hidden="true" />
                <span className="project-timeline-name">{project.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
