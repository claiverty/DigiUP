import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ContactSection from "../components/sections/ContactSection";
import Arrow from "../components/ui/Arrow";
import SectionLabel from "../components/ui/SectionLabel";
import { siteConfig } from "../config/site";
import { servicePages } from "../data/servicePages";
import { trackLead } from "../utils/analytics";

const processSteps = [
  {
    number: "01",
    title: "Entender",
    text: "Mapeamos o contexto, os usuários, o objetivo e as restrições do projeto.",
  },
  {
    number: "02",
    title: "Direcionar",
    text: "Definimos prioridades, escopo e o caminho técnico mais coerente.",
  },
  {
    number: "03",
    title: "Construir",
    text: "Projetamos e desenvolvemos a solução com validações ao longo do processo.",
  },
  {
    number: "04",
    title: "Evoluir",
    text: "Publicamos, acompanhamos o uso e organizamos os próximos movimentos.",
  },
];

export default function ServicePage({ service }) {
  const relatedServices = servicePages.filter((item) => item.path !== service.path);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo" className="service-page">
        <section className="service-hero">
          <div className="service-hero__glow" aria-hidden="true" />
          <div className="section-container service-hero__inner">
            <p className="service-breadcrumb">
              <a href="/">DigiUP</a>
              <span aria-hidden="true">/</span>
              {service.label}
            </p>
            <h1>
              {service.title}
              <em>{service.titleAccent}</em>
            </h1>
            <p className="service-hero__lead">{service.lead}</p>
            <div className="service-hero__actions">
              <a
                className="button button--light"
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLead(`service_${service.path}_whatsapp`)}
              >
                Conversar sobre meu projeto <Arrow />
              </a>
              <a className="button button--glass" href="#entregas">
                Ver o que entregamos
                <span className="button__circle" aria-hidden="true">
                  ↓
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="service-overview section">
          <div className="section-container service-overview__grid">
            <div>
              <SectionLabel label="O que resolvemos" />
              <h2>{service.overviewTitle}</h2>
            </div>
            <div className="service-overview__copy">
              <p>{service.overview}</p>
              <ul>
                {service.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="service-deliverables section" id="entregas">
          <div className="section-container service-section-heading">
            <SectionLabel label="Entregas" />
            <h2>
              Uma solução completa,
              <em>sem excesso e sem atalhos.</em>
            </h2>
          </div>
          <div className="section-container service-deliverables__grid">
            {service.deliverables.map((deliverable, index) => (
              <article key={deliverable.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{deliverable.title}</h3>
                <p>{deliverable.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-fit section">
          <div className="section-container service-fit__grid">
            <div className="service-fit__panel">
              <SectionLabel label="Para quem faz sentido" />
              <h2>Um bom encaixe para empresas que precisam avançar.</h2>
              <ul>
                {service.idealFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="service-process">
              <SectionLabel label="Como conduzimos" />
              <ol>
                {processSteps.map((step) => (
                  <li key={step.number}>
                    <span>{step.number}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="service-faq section">
          <div className="section-container service-faq__grid">
            <div>
              <SectionLabel label="Dúvidas frequentes" />
              <h2>Antes de começarmos.</h2>
            </div>
            <div className="service-faq__items">
              {service.faqs.map((faq, index) => (
                <details key={faq.question}>
                  <summary>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {faq.question}
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="related-services">
          <div className="section-container related-services__inner">
            <span>Explore também</span>
            <div>
              {relatedServices.map((item) => (
                <a href={item.path} key={item.path}>
                  {item.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
