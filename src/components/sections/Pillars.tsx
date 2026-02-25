const pillars = [
  {
    label: "Pillar One",
    title: "Energy Independence",
    body: "A 75kW DC bifacial solar array paired with 300kWh Sodium-Ion battery storage. No utility bills. No grid fragility. When wildfire events knock out regional power, the compound stays fully operational — a critical advantage for a medical facility.",
    specs: [
      "75kW DC ground-mount, bifacial solar",
      "Sodium-Ion battery storage",
      "VPP dispatch: $15–22K/year peak arbitrage",
      "C-PACE financed (non-recourse)",
    ],
  },
  {
    label: "Pillar Two",
    title: "Water Rights",
    body: "Senior rights in an adjudicated basin. Legally quantified, first-priority, drought-protected. A 50+ GPM well that also serves as a fire suppression asset — a meaningful consideration for both insurers and lenders in a SoCal fire environment.",
    specs: [
      "Adjudicated San Luis Rey watershed",
      "Senior rights — first priority, drought-proof",
      "50+ GPM verified by drawdown test",
      "On-site storage for fire suppression",
    ],
  },
  {
    label: "Pillar Three",
    title: "Veterinary Clinic",
    body: "A 3,500–4,000 sq ft medical-grade modular clinic. CT and MRI capability that does not exist within 20 miles. Senior RVTs. AI-assisted triage and documentation. Designed for the equestrian and high-net-worth community of North San Diego County.",
    specs: [
      "CT + MRI — first in the valley",
      "Senior RVTs at +20% market rate",
      "AI triage + voice-to-chart",
      "Wellness plan subscription model",
    ],
  },
];

export default function Pillars() {
  return (
    <section
      id="pillars"
      data-agent-purpose="infrastructure-overview"
      itemScope
      itemType="https://schema.org/ItemList"
      className="py-16 md:py-20 px-6 bg-stone-50"
      aria-labelledby="pillars-heading"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-bold text-stone-600 mb-4 uppercase">
          Core Infrastructure
        </p>
        <h2
          id="pillars-heading"
          itemProp="name"
          className="text-2xl md:text-4xl text-stone-900 mb-4 max-w-2xl"
        >
          Three owned assets underpin the entire operation.
        </h2>
        <p className="text-stone-700 max-w-xl mb-12">
          Most businesses rent their land, buy power from the grid, and draw water from municipal
          sources. We own all three inputs.
        </p>
        <div className="grid md:grid-cols-3 gap-px bg-stone-200">
          {pillars.map((p, i) => (
            <article
              key={i}
              itemScope
              itemType="https://schema.org/Service"
              data-agent-topic="infrastructure-pillar"
              itemProp="itemListElement"
              className="bg-white p-8"
            >
              <p className="text-xs font-bold text-stone-600 mb-2 uppercase">
                {p.label}
              </p>
              <h3 itemProp="name" className="text-xl font-bold text-stone-900 mb-4">
                {p.title}
              </h3>
              <p itemProp="description" className="text-stone-700 mb-6">
                {p.body}
              </p>
              <ul className="text-sm text-stone-600 space-y-2">
                {p.specs.map((s, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="text-stone-400 select-none" aria-hidden="true">
                      —
                    </span>
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
