import { useEffect, useRef } from "react";
import { services } from "../../data/services";
import Arrow from "../ui/Arrow";
import ButtonWords from "../ui/ButtonWords";
import SectionLabel from "../ui/SectionLabel";

const serviceShapes = [
  <>
    <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
    <path d="M3.5 9h17M7 6.8h.01M9.5 6.8h.01M7 13h4m-4 3h10" />
  </>,
  <>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M3 8h18M9 8v13" />
    <rect x="12" y="11" width="6" height="3" rx="0.8" />
    <path d="M12 17h6M6 11h.01M6 14h.01M6 17h.01" />
  </>,
  <>
    <rect x="5" y="7" width="14" height="14" rx="4" />
    <path d="M12 7V4M2 12v4m20-4v4M9 17h6" />
    <circle cx="12" cy="3" r="1" />
    <circle cx="9" cy="12" r="1" />
    <circle cx="15" cy="12" r="1" />
  </>,
  <>
    <g strokeWidth="2.6">
      <path d="m10 7 2.5-2.5a5 5 0 0 1 7 7L17 14M14 17l-2.5 2.5a5 5 0 0 1-7-7L7 10M8.5 15.5l7-7" />
    </g>
  </>,
  <>
    <path d="M18.01 9.51L18.36 10.65L20.31 10.23L20.31 13.77L18.36 13.35L18.01 14.49L17.45 15.54L19.13 16.63L16.63 19.13L15.54 17.45L14.49 18.01L13.35 18.36L13.77 20.31L10.23 20.31L10.65 18.36L9.51 18.01L8.46 17.45L7.37 19.13L4.87 16.63L6.55 15.54L5.99 14.49L5.64 13.35L3.69 13.77L3.69 10.23L5.64 10.65L5.99 9.51L6.55 8.46L4.87 7.37L7.37 4.87L8.46 6.55L9.51 5.99L10.65 5.64L10.23 3.69L13.77 3.69L13.35 5.64L14.49 5.99L15.54 6.55L16.63 4.87L19.13 7.37L17.45 8.46Z" />
    <circle cx="12" cy="12" r="3" />
  </>,
];

export default function ServicesSection() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return undefined;
    const rows = [...timeline.querySelectorAll(".service-row")];
    let frame = 0;
    function update() {
      frame = 0;
      const bounds = timeline.getBoundingClientRect();
      const first = rows[0].offsetTop + rows[0].offsetHeight / 2;
      const last = rows.at(-1).offsetTop + rows.at(-1).offsetHeight / 2;
      const length = Math.max(1, last - first);
      const cursor = window.innerHeight * 0.58 - bounds.top;
      const progress = Math.max(0, Math.min(1, (cursor - first) / length));
      timeline.style.setProperty("--track-top", `${first}px`);
      timeline.style.setProperty("--track-length", `${length}px`);
      timeline.style.setProperty("--service-progress", String(progress));
      rows.forEach((row) => {
        row.dataset.reached = String(cursor >= row.offsetTop + row.offsetHeight / 2);
      });
    }
    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }
    const resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(schedule) : null;
    resizeObserver?.observe(timeline);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      resizeObserver?.disconnect();
    };
  }, []);

  return (
    <section className="services section" id="solucoes">
      <div className="section-container centered-heading">
        <SectionLabel label="Nossas soluções" />
        <h2>
          O que construímos
          <em>para colocar ideias em movimento.</em>
        </h2>
        <p>
          Da presença digital à evolução da operação: soluções para cada etapa
          do seu negócio.
        </p>
      </div>

      <div
        className="section-container services__panel"
        ref={timelineRef}
      >
        <span className="services__track" aria-hidden="true"><span /></span>
        {services.map((service, index) => (
          <article
            className={`service-row ${index % 2 === 0 ? "service-row--right" : "service-row--left"}`}
            key={service.number}
            data-step={index}
            data-reached="false"
          >
            <div className="service-row__visual" aria-hidden="true">
              <span className="service-row__icon">
                <svg viewBox="0 0 24 24" fill="none">{serviceShapes[index]}</svg>
              </span>
              <span className="service-row__number">{service.number}</span>
            </div>
            <span className="service-row__marker" aria-hidden="true"><i /></span>
            <div className="service-row__content">
              <h3>
                <a href={service.href}>{service.title}</a>
              </h3>
              <p>{service.description}</p>

            </div>
          </article>
        ))}
      </div>

      <div className="services__action">
        <a className="button button--light hero-button" href="/#contato" aria-label="Encontrar a solução certa">
          <ButtonWords text="Encontrar a solução certa" /> <Arrow />
        </a>
      </div>
    </section>
  );
}
