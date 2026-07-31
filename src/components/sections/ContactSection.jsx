import { siteConfig } from "../../config/site";
import Arrow from "../ui/Arrow";
import SectionLabel from "../ui/SectionLabel";

export default function ContactSection() {
  return (
    <section className="contact section" id="contato">
      <div className="section-container contact__inner">
        <div className="contact__halo" aria-hidden="true" />
        <SectionLabel label="Seu projeto começa aqui" />
        <h2>
          Vamos colocar seu
          <em>próximo movimento no mundo?</em>
        </h2>
        <p>
          Sua empresa ainda não tem site ou precisa evoluir sua presença digital?
          Conte seu momento e nós indicamos o próximo passo.
        </p>
        <a
          className="button button--light button--large"
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Falar com um especialista da DigiUP pelo WhatsApp"
        >
          Falar com um especialista <Arrow />
        </a>
        <small>Sites • Sistemas • Plataformas • IA & Automação</small>
      </div>
    </section>
  );
}
