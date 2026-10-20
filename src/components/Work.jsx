import { WORK } from "../data/site";

export default function Work() {
  return (
    <section id="work" className="wrap block">
      <h2>Recent work</h2>
      <div className="projects">
        {WORK.map((w) => (
          <article key={w.title} className="project">
            {w.image && (
              <img className="shot" src={w.image} alt={w.alt || ""} loading="lazy" />
            )}
            <div className="info">
              <p className="kind">{w.kind}</p>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
              <ul className="tags">
                {w.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {w.links && (
                <div className="links">
                  {w.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}

        <article className="project cta">
          <h3>Your project here</h3>
          <p>Tell me what you need and I'll quote a fixed price.</p>
          <a className="btn" href="#contact">
            Start a project
          </a>
        </article>
      </div>
    </section>
  );
}