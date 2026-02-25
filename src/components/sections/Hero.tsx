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
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <p className="text-sm font-bold text-stone-600 uppercase mb-4">
            Maison Vet Clinic
          </p>
          <h1
            id="hero-heading"
            itemProp="name"
            className="text-4xl font-bold tracking-tight text-stone-900 sm:text-6xl"
          >
            Medicine, Land,
            <br />
            Water &amp; Power.
          </h1>
          <p
            itemProp="description"
            className="mt-6 text-lg text-stone-700 max-w-xl"
          >
            A vertically integrated veterinary clinic and compound — built on land we
            own, powered by energy we generate, and watered by rights that cannot be
            taken away.
          </p>
          <div className="mt-10 flex items-center gap-6 text-sm font-bold text-stone-600 uppercase">
            <span>Medicine</span>
            <span className="w-8 h-px bg-stone-300" aria-hidden="true" />
            <span>Land</span>
            <span className="w-8 h-px bg-stone-300" aria-hidden="true" />
            <span>Water</span>
            <span className="w-8 h-px bg-stone-300" aria-hidden="true" />
            <span>Power</span>
          </div>
        </div>
      </div>
      <a
        href="#opportunity"
        aria-label="Scroll to opportunity section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-400 hover:text-stone-600 focus-visible:ring-2 focus-visible:ring-stone-900 rounded-sm animate-[bounce-slow_2s_ease-in-out_infinite]"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </section>
  );
}
