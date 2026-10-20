import { PACKAGES } from "../data/site";

export default function PackagePicker({ selected, onSelect }) {
  const pkg = PACKAGES.find((p) => p.title === selected);

  return (
    <aside className="quote" id="packages" aria-label="Package picker">
      <h2>Choose a package</h2>
      <div role="radiogroup">
        {PACKAGES.map((p) => (
          <label
            key={p.title}
            className={p.title === selected ? "row on" : "row"}
          >
            <input
              type="radio"
              name="pkg"
              checked={p.title === selected}
              onChange={() => onSelect(p.title)}
            />
            <span>
              <strong>{p.title}</strong>
              <small>{p.text}</small>
            </span>
            <em>${p.price}</em>
          </label>
        ))}
      </div>

      {pkg ? (
        <>
          <dl className="sum">
            <div>
              <dt>Delivery</dt>
              <dd>{pkg.time}</dd>
            </div>
            <div>
              <dt>Revision rounds</dt>
              <dd>{pkg.revisions}</dd>
            </div>
            <div>
              <dt>Deposit to start (50%)</dt>
              <dd>${pkg.price / 2}</dd>
            </div>
            <div>
              <dt>Starting price</dt>
              <dd>${pkg.price}</dd>
            </div>
          </dl>
          <a className="btn full" href="#contact">
            Request the {pkg.title.toLowerCase()}
          </a>
        </>
      ) : (
        <>
          <p className="custom">
            Need something different? Tell me what you have in mind and I'll
            quote it separately.
          </p>
          <a className="btn full" href="#contact">
            Tell me about your project
          </a>
        </>
      )}
    </aside>
  );
}