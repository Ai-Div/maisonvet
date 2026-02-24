const pillars = [
  {
    icon: "⚡",
    label: "Pillar One",
    title: "Energy Independence",
    body: "A 250kW bifacial solar microgrid paired with Sodium-Ion battery storage delivers full energy autonomy. Virtual Power Plant enrollment with SDG&E transforms excess generation into revenue. C-PACE financing means zero upfront capital and non-recourse, property-assessed repayment.",
    specs: ["250kW bifacial solar array", "Sodium-Ion battery storage", "VPP enrollment — SDG&E", "C-PACE financing — non-recourse"],
  },
  {
    icon: "💧",
    label: "Pillar Two",
    title: "Water Sovereignty",
    body: "Adjudicated well rights from the San Luis Rey basin provide senior-priority access to a proven aquifer. On-site storage tanks serve dual duty — daily operations and fire suppression — eliminating municipal dependency entirely.",
    specs: ["Adjudicated basin — San Luis Rey", "Senior rights — first priority", "50+ GPM — 4-hour drawdown tested", "On-site tanks — fire suppression rated"],
  },
  {
    icon: "🩺",
    label: "Pillar Three",
    title: "Destination Medicine",
    body: "CT and MRI capability unmatched within 20 miles. Senior RVTs compensated 20% above market to ensure retention. AI-powered triage and voice-to-chart documentation reduce overhead. Wellness subscription plans ($35–$85/mo) create predictable recurring revenue.",
    specs: ["CT + MRI — unmatched in radius", "Senior RVTs — +20% compensation", "AI triage — voice-to-chart", "Wellness plans — $35–$85/mo"],
  },
];

export default function Pillars() {
  return (
    <section
      data-agent-purpose="infrastructure-overview"
      itemScope
      itemType="https://schema.org/ItemList"
      className="bg-green-deep py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3 text-center">Infrastructure</p>
        <h2 itemProp="name" className="font-serif text-4xl sm:text-5xl font-light text-cream text-center mb-16">
          The Three Pillars
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <article
              key={i}
              itemScope
              itemType="https://schema.org/Service"
              data-agent-topic="infrastructure-pillar"
              itemProp="itemListElement"
              className="bg-green-mid/50 border border-white/5 rounded-2xl p-8 hover:border-gold/30 transition-colors duration-300"
            >
              <span className="text-4xl" aria-hidden="true">{p.icon}</span>
              <p className="text-xs tracking-[0.2em] uppercase text-gold/70 mt-4">{p.label}</p>
              <h3 itemProp="name" className="font-serif text-2xl text-cream mt-2 mb-4">{p.title}</h3>
              <p itemProp="description" className="text-sm text-cream/60 leading-relaxed mb-6">{p.body}</p>
              <ul className="space-y-2">
                {p.specs.map((s, j) => (
                  <li key={j} className="text-xs text-cream/40 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold/50" />
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
