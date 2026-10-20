import PackagePicker from "./PackagePicker";

export default function Hero({ selected, onSelect }) {
  return (
    <section className="hero wrap">
      <div>
        <h1>Websites from one developer you can message directly.</h1>
        <p className="lede">
          Fixed prices, a clear process, and no marketplace account required.
          Pick a package and see what it costs and how to pay.
        </p>
        <div className="actions">
          <a className="btn" href="#contact">
            Start a project
          </a>
        </div>
      </div>
      <PackagePicker selected={selected} onSelect={onSelect} />
    </section>
  );
}