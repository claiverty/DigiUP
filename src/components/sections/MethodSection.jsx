import { processSteps } from "../../data/process";
import SectionLabel from "../ui/SectionLabel";

export default function MethodSection() {
  return (
    <section className="method section" id="metodo">
      <div className="section-container method__heading">
        <SectionLabel label="Como fazemos" />
        <h2>Um processo claro para projetos que precisam avançar.</h2>
        <p>
          Chamamos de Fluxo UP: uma sequência integrada para reduzir incerteza,
          acelerar decisões e proteger a qualidade.
        </p>
      </div>

      <ol className="section-container process-list">
        {processSteps.map((item) => (
          <li key={item.number}>
            <span>{item.number}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <i aria-hidden="true">→</i>
          </li>
        ))}
      </ol>
    </section>
  );
}
