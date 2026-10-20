import { FAQ } from "../data/site";

export default function Faq() {
  return (
    <section className="wrap block narrow">
      <h2>Questions</h2>
      {FAQ.map(([q, a]) => (
        <details key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </section>
  );
}