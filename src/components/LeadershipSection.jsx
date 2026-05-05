import { leadership } from "../data/portfolioData";

export function LeadershipSection() {
  return (
    <section id="leadership" className="px-3 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <h2 className="section-title">Leadership and Awards</h2>
        </div>

        <article className="reveal rounded-xl border border-line bg-surface p-6 shadow-soft" data-reveal>
          <ul className="space-y-3 text-sm text-muted">
            {leadership.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
