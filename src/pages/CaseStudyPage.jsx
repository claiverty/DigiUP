import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ContactSection from "../components/sections/ContactSection";
import SectionLabel from "../components/ui/SectionLabel";
import Arrow from "../components/ui/Arrow";

export default function CaseStudyPage({ project }) {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />

      <main id="conteudo" className="project-page">
        <section className="project-page__hero">
          <div className="section-container">
            <nav className="project-page__breadcrumb" aria-label="Caminho da página">
              <a href="/">DigiUP</a>
              <span aria-hidden="true">/</span>
              <a href="/#case-study">Projetos</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{project.name}</span>
            </nav>

            <SectionLabel label="Projeto realizado" />
            <p className="project-page__eyebrow">{project.eyebrow}</p>
            <h1>{project.name}</h1>
            <p className="project-page__headline">{project.title}</p>
            <p className="project-page__lead">{project.description}</p>

            <div className="project-page__links">
              <a className="button button--light" href={project.siteUrl} target="_blank" rel="noopener noreferrer">
                Abrir projeto <Arrow />
              </a>
              <a className="project-page__text-link" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                Ver código no GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="project-page__visual" aria-label={`Imagem do projeto ${project.name}`}>
          <div className="section-container">
            <div className="project-page__image-frame">
              <img
                src={project.image}
                alt={project.imageAlt}
                width="1400"
                height="808"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section className="project-page__details section" aria-labelledby="project-details-title">
          <div className="section-container">
            <SectionLabel label="Como foi construído" />
            <h2 id="project-details-title">O projeto, em detalhes.</h2>
            <div className="project-page__story-grid">
              <div>
                <h3>O desafio</h3>
                <p>{project.challenge}</p>
              </div>
              <div>
                <h3>A solução</h3>
                <p>{project.solution}</p>
              </div>
            </div>

            <h3 className="project-page__features-title">O que a plataforma oferece</h3>
            <dl className="project-page__features">
              {project.metrics.map((feature) => (
                <div key={feature.value}>
                  <dt>{feature.value}</dt>
                  <dd>{feature.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="project-page__related section" aria-labelledby="project-related-title">
          <div className="section-container project-page__related-inner">
            <div>
              <SectionLabel label="O que fazemos" />
              <h2 id="project-related-title">Um projeto real. Uma solução para cada contexto.</h2>
            </div>
            <a className="project-page__text-link" href={project.relatedService.href}>
              Conhecer {project.relatedService.label} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
