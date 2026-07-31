import { services } from "../../data/services";
import Arrow from "../ui/Arrow";
import SectionLabel from "../ui/SectionLabel";

export default function ServicesSection() {
  return (
    <section className="services section" id="solucoes">
      <div className="section-container centered-heading">
        <SectionLabel label="Nossas soluções" />
        <h2>
          O que construímos
          <em>para colocar ideias em movimento.</em>
        </h2>
        <p>
          Três núcleos, uma lógica: transformar visão em valor real para pessoas,
          operações e negócios.
        </p>
      </div>

      <div className="section-container services__panel">
        {services.map((service) => (
          <article className="service-row" key={service.number}>
            <span className="service-row__number">{service.number}</span>
            <div className="service-row__title">
              <small>{service.eyebrow}</small>
              <h3>{service.title}</h3>
            </div>
            <div className="service-row__body">
              <p>{service.description}</p>
              <div>
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <span className="service-row__arrow" aria-hidden="true">
              ↗
            </span>
          </article>
        ))}
      </div>

      <div className="services__action">
        <a className="button button--light" href="#contato">
          Encontrar a solução certa <Arrow />
        </a>
      </div>
    </section>
  );
}
