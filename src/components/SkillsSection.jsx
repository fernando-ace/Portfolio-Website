import { skillGroups } from "../data/portfolioData";

export function SkillsSection() {
  return (
    <section id="skills" className="px-3 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {skillGroups.map((group) => (
            <article key={group.label} className="reveal rounded-xl border border-line bg-surface p-4 shadow-soft" data-reveal>
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-accent">{group.label}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {group.items.map((item) => (
                  <li key={item} className="rounded-md border border-line bg-page/50 px-2 py-1">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
