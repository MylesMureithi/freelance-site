import { STEPS } from "../data/site";

export default function Steps() {
  return (
    <section className="wrap block">
      <h2>How a project runs</h2>
      <ol className="steps">
        {STEPS.map(([title, text]) => (
          <li key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}