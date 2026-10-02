import ButtonWords from "../ui/ButtonWords";
import Arrow from "../ui/Arrow";
import ArrowIcon from "../ui/ArrowIcon";
import { trackLead } from "../../utils/analytics";

export default function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__aurora" aria-hidden="true" />
      <div className="hero__motion" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="hero__grain" aria-hidden="true" />
      <div className="hero__rings" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>

      <div className="hero__content">
        <h1 className="reveal reveal--1">
          <span>
            Sites e Tecnologia
            <br />
            para Negócios
          </span>
          <em>que querem ir além.</em>
        </h1>

        <p className="hero__lead reveal reveal--2">
          Construímos a presença digital de empresas com sites profissionais e
          evoluímos negócios com sistemas, plataformas e automações.
        </p>

        <div className="hero__actions reveal reveal--3">
          <a
            className="button button--light hero-button"
            aria-label="Quero tirar meu projeto do papel"
            href="#contato"
            onClick={() => trackLead("home_hero")}
          >
            <ButtonWords text="Quero tirar meu projeto do papel" /> <Arrow />
          </a>
          <a className="button button--glass hero-button" href="#solucoes" aria-label="Ver como fazemos">
            <ButtonWords text="Ver como fazemos" />
            <span className="button__circle" aria-hidden="true">
              <ArrowIcon direction="down" />
            </span>
          </a>
        </div>
      </div>

      <div className="hero__meta reveal reveal--4">
        <span>Sites</span>
        <i>•</i>
        <span>Sistemas</span>
        <i>•</i>
        <span>Plataformas</span>
        <i>•</i>
        <span>IA & Automação</span>
      </div>

      <a className="scroll-cue" href="#desafio" aria-label="Ir para a próxima seção">
        <span>Explore</span>
        <ArrowIcon direction="down" className="scroll-cue__icon" />
      </a>
    </section>
  );
}
