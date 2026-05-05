import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { LeadershipSection } from "./components/LeadershipSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const showAll = () => {
      nodes.forEach((node) => node.classList.add("reveal-visible"));
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      showAll();
      return;
    }

    if (!("IntersectionObserver" in window)) {
      showAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-page text-text">
      <Navbar />
      <main id="main-content">
        <Hero />
        <section className="px-3 pb-4 md:px-6 md:pb-8">
          <div className="mx-auto max-w-6xl rounded-xl border border-line bg-surface/60 px-5 py-4 text-center shadow-soft">
            <blockquote className="text-base italic text-muted md:text-lg">
              "You get what you repeat." — James Clear.
            </blockquote>
          </div>
        </section>
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <LeadershipSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
