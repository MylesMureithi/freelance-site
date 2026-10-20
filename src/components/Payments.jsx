import { PAYMENTS } from "../data/site";

const CARD = (
  <>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </>
);

const ICONS = {
  "Card or mobile money": CARD,
  PayPal: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.5 17V7.5H13a2.75 2.75 0 0 1 0 5.5H9.5" />
    </>
  ),
  "International bank transfer": (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
  "Local bank transfer": (
    <>
      <path d="M3 10l9-6 9 6" />
      <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8" />
      <path d="M3 20h18" />
    </>
  ),
};

function Icon({ name }) {
  if (!ICONS[name]) return null;
  return (
    <svg
      className="pay-icon"
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

export default function Payments() {
  return (
    <section id="pay" className="wrap block">
      <h2>Ways to pay</h2>
      <p className="pay-intro">
        Every project is two payments: 50% to start and 50% before launch. Pay
        whichever way suits you.
      </p>
      <ul className="pay">
        {PAYMENTS.map((m) => (
          <li key={m.name}>
            <Icon name={m.name} />
            <strong>{m.name}</strong>
            <span>{m.note}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
