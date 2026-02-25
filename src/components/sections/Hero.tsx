export default function Hero() {
  return (
    <section
      itemScope
      itemType="https://schema.org/WebPageElement"
      data-agent-purpose="hero-brand-statement"
      data-agent-topic="value-proposition"
      className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-6 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-bold text-stone-600 mb-4 uppercase">
          Maison Vet Clinic
        </p>
        <h1
          itemProp="name"
          className="text-4xl md:text-6xl text-stone-900 mb-6"
        >
          Medicine, Land,
          <br />
          Water &amp; Power.
        </h1>
        <p
          itemProp="description"
          className="text-lg md:text-xl text-stone-700 max-w-xl mb-8"
        >
          A vertically integrated veterinary clinic and compound — built on land we
          own, powered by energy we generate, and watered by rights that cannot be
          taken away.
        </p>
        <div className="flex items-center gap-6 text-sm font-bold text-stone-600 uppercase">
          <span>Medicine</span>
          <span className="w-8 h-px bg-stone-300" aria-hidden="true" />
          <span>Land</span>
          <span className="w-8 h-px bg-stone-300" aria-hidden="true" />
          <span>Water</span>
          <span className="w-8 h-px bg-stone-300" aria-hidden="true" />
          <span>Power</span>
        </div>
      </div>
      <a
        href="#opportunity"
        aria-label="Scroll to opportunity section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-[bounce-slow_2s_ease-in-out_infinite] text-stone-400 hover:text-stone-600 focus-visible:ring-2 focus-visible:ring-stone-900 rounded-sm"
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
