import { siteConfig } from "../../config/site";
import Arrow from "../ui/Arrow";
import ButtonWords from "../ui/ButtonWords";
import SectionLabel from "../ui/SectionLabel";
import { trackLead } from "../../utils/analytics";

export default function ContactSection() {
  return (
    <section className="contact section" id="contato">
      <div className="section-container contact__inner">
        <div className="contact__halo" aria-hidden="true" />
        <SectionLabel label="Seu projeto começa aqui" />
        <h2>
          Vamos construir
          <em>a solução certa para o seu negócio?</em>
        </h2>
        <p>
          Precisa criar sua presença digital, organizar uma operação ou automatizar
          processos? Conte seu momento e nós indicamos o próximo passo.
        </p>
        <a
          className="button button--light button--large hero-button"
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com um especialista da DigiUP pelo WhatsApp"
          onClick={() => trackLead("contact_whatsapp")}
        >
          <ButtonWords text="Falar com um especialista" /> <Arrow />
        </a>
        <small>Sites • Sistemas • Plataformas • IA & Automação</small>
      </div>
    </section>
  );
}
