import { siteConfig } from "../../config/site";
import SectionLabel from "../ui/SectionLabel";

export default function AboutSection() {
  return (
    <section className="about section" id="sobre">
      <div className="about__glow" aria-hidden="true" />
      <div className="section-container about__content">
        <SectionLabel label="Sobre a DigiUP" />
        <h2>
          Clareza para pensar.
          <em>Tecnologia para evoluir.</em>
        </h2>
        <p className="about__lead">
          Começamos pela presença digital que apresenta sua empresa e evoluímos
          até a tecnologia que sustenta sua operação.
        </p>
        <div className="about__lower">
          <article className="founder-card" aria-label="Fundador da DigiUP">
            <img
              className="founder-card__avatar"
              src="/claiverty-avatar.webp"
              alt="Claiverty Rodrigues"
              width="48"
              height="48"
              loading="lazy"
              decoding="async"
            />
            <div className="founder-card__content">
              <h3>Claiverty Rodrigues</h3>
              <p>Fundador</p>
            </div>
            <a
              className="founder-card__link"
              href={siteConfig.founderLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver o perfil de Claiverty Rodrigues no LinkedIn"
            >
              <strong aria-hidden="true">in</strong>
            </a>
          </article>
          <div className="about__body">
            <p>
              Somos uma empresa de desenvolvimento web e software que cresceu
              com projetos e conexões em Formosa e Brasília. Hoje, trabalhamos
              online com empresas de todo o Brasil, criando sites, sistemas sob
              medida, automações com IA e integrações, com evolução e suporte
              para acompanhar cada operação.
            </p>
            <p>
              Sem camadas desnecessárias. Sem tecnologia por vaidade. Com clareza
              para escolher, excelência para executar e visão para evoluir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
