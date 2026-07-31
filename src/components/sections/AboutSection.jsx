import { siteConfig } from "../../config/site";
import SectionLabel from "../ui/SectionLabel";

export default function AboutSection() {
  return (
    <section className="about section" id="sobre">
      <div className="about__glow" aria-hidden="true" />
      <div className="section-container about__content">
        <SectionLabel label="Sobre a DigiUP" />
        <h2>
          Uma equipe inteira.
          <em>Uma única direção.</em>
        </h2>
        <p className="about__lead">
          Começamos pela presença digital que apresenta sua empresa e evoluímos
          até a tecnologia que sustenta sua operação.
        </p>
        <div className="about__lower">
          <article className="founder-card" aria-label="Fundador da DigiUP">
            <img
              className="founder-card__avatar"
              src="/claiverty-avatar.png"
              alt="Claiverty Rodrigues"
              width="48"
              height="48"
              loading="lazy"
            />
            <div className="founder-card__content">
              <h3>Claiverty Rodrigues</h3>
              <p>Fundador</p>
            </div>
            <a
              className="founder-card__link"
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Ver o perfil de Claiverty Rodrigues no LinkedIn"
            >
              <strong aria-hidden="true">in</strong>
            </a>
          </article>
          <div className="about__body">
            <p>
              Reunimos desenvolvimento web, software, inteligência artificial,
              automação e infraestrutura em torno do mesmo objetivo: fazer a
              solução funcionar de verdade.
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
