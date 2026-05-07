import { useEffect, useMemo, useState } from "react";
import { profile } from "../data/portfolioData";

const TYPE_SPEED_MS = 75;
const DELETE_SPEED_MS = 45;
const HOLD_MS = 1300;

function useTypewriter(options) {
  const safeOptions = useMemo(
    () => (options && options.length ? options : [profile.role]),
    [options]
  );
  const [optionIndex, setOptionIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setText(safeOptions[0]);
      setIsPausing(false);
      return;
    }

    const current = safeOptions[optionIndex];
    const complete = text === current;
    const empty = text.length === 0;

    let timeout = TYPE_SPEED_MS;
    if (isPausing) {
      timeout = HOLD_MS;
    } else if (isDeleting) {
      timeout = DELETE_SPEED_MS;
    }

    const id = window.setTimeout(() => {
      if (isPausing) {
        setIsPausing(false);
        setIsDeleting(true);
        return;
      }

      if (complete && !isDeleting) {
        setIsPausing(true);
        return;
      }

      if (isDeleting && empty) {
        setIsDeleting(false);
        setOptionIndex((prev) => (prev + 1) % safeOptions.length);
        return;
      }

      const nextLength = isDeleting ? text.length - 1 : text.length + 1;
      setText(current.slice(0, Math.max(0, nextLength)));
    }, timeout);

    return () => window.clearTimeout(id);
  }, [isDeleting, isPausing, optionIndex, safeOptions, text]);

  return { text, isPausing };
}

export function Hero() {
  const { text: typedRole, isPausing } = useTypewriter(profile.roleOptions);

  return (
    <section id="home" className="relative overflow-hidden px-3 pb-16 pt-14 md:px-6 md:pb-24 md:pt-20">
      <div className="hero-glow" aria-hidden="true" />
      <div className="mx-auto max-w-6xl rounded-2xl border border-line bg-surface/75 p-8 shadow-soft md:p-12">
        <div>
          <p className="hero-eyebrow mb-5 inline-flex whitespace-nowrap rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-semibold uppercase text-accent">
            Software Engineering Portfolio
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-text md:text-6xl">{profile.name}</h1>
          <p className="mt-4 min-h-[2.1rem] text-xl font-semibold text-accent md:min-h-[2.5rem] md:text-2xl" aria-live="polite">
            {typedRole}
            <span
              className={`ml-0 inline-block h-[1em] w-[0.1em] bg-accent align-[-0.1em] ${isPausing ? "type-cursor-blink" : "opacity-100"}`}
              aria-hidden="true"
            />
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{profile.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-primary" href="#experience">
              View Experience
            </a>
            <a className="btn-ghost" href="#projects">
              View Projects
            </a>
            <a className="btn-ghost" href={profile.resumeHref} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a className="text-accent underline-offset-4 hover:underline" href={profile.githubHref} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="text-accent underline-offset-4 hover:underline" href={profile.linkedinHref} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
