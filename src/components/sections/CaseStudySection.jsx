import { useState } from "react";
import SectionLabel from "../ui/SectionLabel";
import CaseStudyCard from "../ui/CaseStudyCard";
import { caseStudies } from "../../data/caseStudies";

export default function CaseStudySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCaseStudy = caseStudies[activeIndex];

  function showCaseStudy(direction) {
    setActiveIndex((currentIndex) =>
      (currentIndex + direction + caseStudies.length) % caseStudies.length
    );
  }

  return (
    <section
      id="case-study"
      className="case-study section"
      aria-labelledby="case-study-title"
    >
      <div className="section-container centered-heading case-study__heading">
        <SectionLabel label="Projetos em destaque" />
        <h2 id="case-study-title">
          Cada desafio pede
          <em>uma solução própria.</em>
        </h2>
      </div>

      <div className="section-container case-study__content">
        <div className="case-study__carousel" aria-label="Projetos em destaque">
          <CaseStudyCard key={activeCaseStudy.id} {...activeCaseStudy} />
          <button
            className="case-study__nav case-study__nav--previous"
            type="button"
            aria-label="Projeto anterior"
            onClick={() => showCaseStudy(-1)}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m14.5 5-7 7 7 7" />
            </svg>
          </button>
          <button
            className="case-study__nav case-study__nav--next"
            type="button"
            aria-label="Próximo projeto"
            onClick={() => showCaseStudy(1)}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m9.5 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
