import { useEffect } from "react";

const revealSelectors = [
  ".challenge__intro > *",
  ".challenge__grid > *",
  ".statement",
  ".centered-heading > *",
  ".services__panel > .service-row",
  ".services__action",
  ".showcase__heading > *",
  ".showcase__grid > .showcase-card",
  ".concept-cases__panel > .concept-case",
  ".method__heading > *",
  ".process-list > li",
  ".about__content > .section-label",
  ".about__content > h2",
  ".about__content > .about__lead",
  ".about__lower > *",
  ".faq__heading > *",
  ".faq__items > details",
  ".contact__inner > *:not(.contact__halo)",
  ".service-overview__grid > *",
  ".service-section-heading > *",
  ".service-deliverables__grid > article",
  ".service-fit__panel > *",
  ".service-process > .section-label",
  ".service-process ol > li",
  ".service-faq__grid > div:first-child > *",
  ".service-faq__items > details",
  ".footer__top > *",
  ".footer__bottom > *",
].join(",");

export default function useScrollReveal(path) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(revealSelectors));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const sectionCounters = new Map();

    elements.forEach((element) => {
      const section = element.closest("section, footer") || document.body;
      const position = sectionCounters.get(section) || 0;

      element.classList.add("scroll-reveal");
      element.style.setProperty("--scroll-reveal-delay", `${Math.min(position, 4) * 75}ms`);
      sectionCounters.set(section, position + 1);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("scroll-reveal--visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.08,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      elements.forEach((element) => {
        element.classList.remove("scroll-reveal", "scroll-reveal--visible");
        element.style.removeProperty("--scroll-reveal-delay");
      });
    };
  }, [path]);
}
