import { useState } from "react";
import { SITE } from "../data/site";

const LINKS = [
  ["Packages", "#packages"],
  ["Work", "#work"],
  ["Payment", "#pay"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bar">
      <div className="bar-inner wrap">
        <a className="brand" href="#top">
          <img src="/favicon.svg" alt="" width="32" height="32" />
          {SITE.name}
        </a>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className={open ? "open" : ""}>
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}