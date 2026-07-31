import { conceptCases } from "../../data/conceptCases";
import SectionLabel from "../ui/SectionLabel";

export default function ConceptCasesSection() {
  return (
    <section className="concept-cases section" aria-labelledby="concept-cases-title">
      <div className="section-container centered-heading concept-cases__heading">
        <SectionLabel label="Cenários demonstrativos" />
        <h2 id="concept-cases-title">
          Como a tecnologia
          <em>entra no negócio.</em>
        </h2>
        <p>
          Três exemplos conceituais para visualizar possibilidades de aplicação. Não
          representam clientes ou resultados já realizados.
        </p>
      </div>

      <div className="section-container concept-cases__panel">
        {conceptCases.map((item) => (
          <article className="concept-case" key={item.number}>
            <div className="concept-case__meta">
              <span>{item.number}</span>
              <small>{item.category}</small>
            </div>
            <h3>{item.title}</h3>
            <div className="concept-case__content">
              <div>
                <strong>O cenário</strong>
                <p>{item.challenge}</p>
              </div>
              <div>
                <strong>O caminho</strong>
                <p>{item.solution}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
