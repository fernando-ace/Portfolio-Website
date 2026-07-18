import { useRef, useState } from "react";
import { projects } from "../data/portfolioData";
import { ProjectDetailCard } from "./projects/ProjectDetailCard";
import { ProjectTimeline } from "./projects/ProjectTimeline";

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const activeProject = projects[activeIndex];

  function selectProject(index) {
    setActiveIndex(index);
  }

  function handleTimelineKeyDown(event, index) {
    const lastIndex = projects.length - 1;
    let nextIndex = index;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = index === lastIndex ? 0 : index + 1;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = index === 0 ? lastIndex : index - 1;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = lastIndex;
    } else {
      return;
    }

    event.preventDefault();
    selectProject(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section id="projects" className="scroll-mt-24 px-3 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h2 className="section-title">Projects</h2>
          <p className="section-copy">
            <span className="hidden md:inline">Hover, focus, or tap a project to explore it.</span>
            <span className="md:hidden">Swipe the timeline or use Previous and Next to explore each project.</span>
          </p>
        </div>

        <div className="grid items-start gap-6 md:grid-cols-[minmax(18rem,0.78fr)_minmax(0,1.42fr)] md:gap-8">
          <ProjectTimeline
            activeIndex={activeIndex}
            onKeyDown={handleTimelineKeyDown}
            onSelect={selectProject}
            projects={projects}
            tabRefs={tabRefs}
          />
          <ProjectDetailCard project={activeProject} />
        </div>
      </div>
    </section>
  );
}
