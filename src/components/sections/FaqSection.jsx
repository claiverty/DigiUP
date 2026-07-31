import { faqs } from "../../data/faqs";
import SectionLabel from "../ui/SectionLabel";

export default function FaqSection() {
  return (
    <section className="faq section" id="faq">
      <div className="section-container faq__grid">
        <div className="faq__heading">
          <SectionLabel label="F.A.Q" />
          <h2>
            Ainda tem
            <em>alguma dúvida?</em>
          </h2>
          <p>Respostas diretas para começar uma conversa com mais clareza.</p>
        </div>
        <div className="faq__items">
          {faqs.map((faq, index) => (
            <details key={faq.question}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {faq.question}
                <i aria-hidden="true">+</i>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
