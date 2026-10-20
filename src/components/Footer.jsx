import { SITE } from "../data/site";

const EXPLORE = [
  ["Packages", "#packages"],
  ["Work", "#work"],
  ["Payment", "#pay"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <a className="foot-name" href="#top">
            {SITE.name}
          </a>
          <p>
            Fixed-price websites, built and deployed by one developer you can
            message directly.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="foot-title">Explore</h2>
          <ul>
            {EXPLORE.map(([label, href]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="foot-title">Get in touch</h2>
          <ul>
            <li>
              <a href={`mailto:${SITE.email}`}>Email</a>
            </li>
            <li>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={SITE.fiverr} target="_blank" rel="noopener noreferrer">
                Fiverr
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap foot-base">
        <span>
          © {new Date().getFullYear()} {SITE.name}
        </span>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}