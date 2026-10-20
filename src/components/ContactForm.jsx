import { useState } from "react";
import { SITE, PACKAGES } from "../data/site";

export default function ContactForm({ selected, onSelect }) {
  const [status, setStatus] = useState("idle");

  async function send(e) {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");
    try {
      const res = await fetch(SITE.formspree, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        form.reset();
        setStatus("sent");
      } else {
        console.error(res.status, await res.text());
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="wrap block narrow">
      <h2>Tell me about your project</h2>
      <form onSubmit={send}>
        <label>
          Your name
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          Package
          <select
            name="package"
            value={selected}
            onChange={(e) => onSelect(e.target.value)}
          >
            {PACKAGES.map((p) => (
              <option key={p.title}>{p.title}</option>
            ))}
            <option>Something else</option>
          </select>
        </label>
        <label>
          What do you need?
          <textarea name="message" rows="5" required />
        </label>
        <button className="btn" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send request"}
        </button>
        <p role="status" className="note">
          {status === "sent" && "Request sent. I'll reply within 24 hours."}
          {status === "error" &&
            "Could not send. Email or WhatsApp me instead."}
        </p>
      </form>
      <p className="alt">
        Prefer to message? <a href={`mailto:${SITE.email}`}>Email</a>,{" "}
        <a
          href={`https://wa.me/${SITE.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        , or{" "}
        <a href={SITE.fiverr} target="_blank" rel="noopener noreferrer">
          hire me on Fiverr
        </a>
        .
      </p>
    </section>
  );
}