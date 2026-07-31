import SectionLabel from "../ui/SectionLabel";

export default function ChallengeSection() {
  return (
    <section className="challenge section" id="desafio">
      <div className="section-container challenge__intro">
        <SectionLabel label="O desafio" />
        <h2>
          Sua empresa evoluiu.
          <em>Sua tecnologia acompanhou?</em>
        </h2>
      </div>

      <div className="section-container challenge__grid">
        <p className="challenge__lead">
          Empresas competentes perdem oportunidades quando ainda não têm uma
          presença digital própria, clara e confiável.
        </p>
        <div className="challenge__copy">
          <p>
            Sem um site profissional, clientes dependem de indicações, redes
            sociais ou mensagens soltas para entender o negócio. Isso reduz
            confiança e dificulta transformar interesse em contato.
          </p>
          <p>
            A DigiUP cria essa base digital e, quando a operação avança, conecta
            sistemas, plataformas e automações para a tecnologia acompanhar o
            crescimento da empresa.
          </p>
        </div>
      </div>

      <div className="section-container statement">
        <p>
          Antes de ampliar seu alcance,
          <strong> construa uma presença que represente o seu negócio.</strong>
        </p>
        <span aria-hidden="true">UP</span>
      </div>
    </section>
  );
}
