export default function Hero() {
  return (
    <section
      itemScope
      itemType="https://schema.org/WebPageElement"
      data-agent-purpose="hero-brand-statement"
      data-agent-topic="value-proposition"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-deep via-green-mid to-green-deep text-center px-6"
    >
      <p className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-6">
        Project Alpha — Confidential Investment Summary
      </p>
      <h1 itemProp="name" className="font-serif text-6xl sm:text-7xl lg:text-8xl font-light text-cream leading-tight">
        Maison{" "}
        <em className="text-gold-light">Vet</em>
      </h1>
      <p itemProp="description" className="mt-6 font-serif text-xl sm:text-2xl italic text-cream/70 max-w-2xl">
        A Sovereign Medical Compound in North San Diego County
      </p>
      <div className="mt-10 flex items-center gap-4 text-sm tracking-[0.15em] uppercase text-cream/50">
        <span>Energy</span>
        <span className="text-gold">×</span>
        <span>Water</span>
        <span className="text-gold">×</span>
        <span>Medicine</span>
      </div>
      <a
        href="#opportunity"
        aria-label="Scroll to opportunity section"
        className="absolute bottom-10 animate-[bounce-slow_2s_ease-in-out_infinite]"
      >
        <svg className="w-6 h-6 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
