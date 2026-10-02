import SectionLabel from "../ui/SectionLabel";
import ArrowIcon from "../ui/ArrowIcon";

export default function ShowcaseSection() {
  return (
    <section className="showcase section">
      <div className="section-container showcase__heading">
        <SectionLabel label="Em movimento" />
        <h2>
          Da estratégia ao produto.
          <em>Sem perder a essência no caminho.</em>
        </h2>
      </div>

      <div className="section-container showcase__grid">
        <article className="showcase-card showcase-card--product">
          <div className="showcase-card__head">
            <div>
              <span>01 / Sites & presença digital</span>
              <h3>Sua empresa encontrada, compreendida e lembrada.</h3>
            </div>
            <span className="showcase-card__arrow" aria-hidden="true">
              <ArrowIcon />
            </span>
          </div>
          <div className="product-window" aria-hidden="true">
            <div className="window__bar">
              <span />
              <span />
              <span />
              <p>digiup / product</p>
            </div>
            <div className="window__body">
              <div className="window__side">
                <b>DU</b>
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="window__dashboard">
                <div className="dashboard__top">
                  <span>Visão geral</span>
                  <i>Live</i>
                </div>
                <div className="dashboard__hero">
                  <small>PROGRESSO DO PRODUTO</small>
                  <strong><ArrowIcon direction="up" className="dashboard__arrow" /> Próxima escala</strong>
                </div>
                <div className="dashboard__cards">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="showcase-card showcase-card--ai">
          <div className="showcase-card__head">
            <div>
              <span>02 / Inteligência aplicada</span>
              <h3>Automação que trabalha com o seu time.</h3>
            </div>
            <span className="showcase-card__arrow" aria-hidden="true">
              <ArrowIcon />
            </span>
          </div>
          <div className="ai-map" aria-hidden="true">
            <div className="ai-map__core">
              <img src="/digiup-symbol.svg" alt="" width="58" height="58" />
            </div>
            <span className="ai-node ai-node--one">ENTRADA</span>
            <span className="ai-node ai-node--two">ANÁLISE</span>
            <span className="ai-node ai-node--three">DECISÃO</span>
            <span className="ai-node ai-node--four">AÇÃO</span>
            <i className="ai-line ai-line--one" />
            <i className="ai-line ai-line--two" />
            <i className="ai-line ai-line--three" />
            <i className="ai-line ai-line--four" />
          </div>
        </article>

        <article className="showcase-card showcase-card--brand">
          <div className="showcase-card__head">
            <div>
              <span>03 / Experiência digital</span>
              <h3>Interfaces claras para pessoas usarem sem fricção.</h3>
            </div>
            <span className="showcase-card__arrow" aria-hidden="true">
              <ArrowIcon />
            </span>
          </div>
          <div className="brand-stage" aria-hidden="true">
            <p>FLUIDEZ</p>
            <em>experiência</em>
            <strong><ArrowIcon direction="up" className="brand-stage__arrow" /></strong>
            <span>DigiUP® / USER FIRST</span>
          </div>
        </article>
      </div>
    </section>
  );
}
