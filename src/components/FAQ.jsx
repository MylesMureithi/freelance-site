import { FAQ } from "../data/site";

export default function Faq() {
  return (
    <section className="wrap block narrow">
      <h2>Questions</h2>
      <div className="faq-list">
        {FAQ.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
      <p className="faq-note">
        Can't find your answer? <a href="#contact">Send me a message</a>.
      </p>
    </section>
  );
}