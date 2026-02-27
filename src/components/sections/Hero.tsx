export default function Hero() {
  return (
    <section
      itemScope
      itemType="https://schema.org/WebPageElement"
      data-agent-purpose="hero-brand-statement"
      data-agent-topic="value-proposition"
      aria-labelledby="hero-heading"
      className="relative bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
        <p className="text-sm font-bold text-stone-600 uppercase mb-4">
          Maison Vet Clinic
        </p>
        <h1
          id="hero-heading"
          itemProp="name"
          className="font-serif text-5xl font-normal tracking-tight text-stone-900 sm:text-7xl leading-tight"
        >
          Medicine, Land,
          <br />
          Water &amp; Power.
        </h1>
        <p
          itemProp="description"
          className="mt-6 text-lg text-stone-700 max-w-xl"
        >
          A vertically integrated veterinary clinic and campus — built on land we
          own, powered by energy we generate, and watered by rights that cannot be
          taken away.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-6 text-sm font-bold text-stone-600 uppercase">
          <span>Medicine</span>
          <span className="w-8 h-px bg-stone-300" aria-hidden="true" />
          <span>Land</span>
          <span className="w-8 h-px bg-stone-300" aria-hidden="true" />
          <span>Water</span>
          <span className="w-8 h-px bg-stone-300" aria-hidden="true" />
          <span>Power</span>
        </div>
      </div>
    </section>
  );
}
