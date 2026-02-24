const stats = [
  {
    value: "$0",
    title: "Advanced Diagnostic Facilities Within 20 Miles",
    desc: "No CT or MRI-capable vet clinic exists within a 20-mile radius of the target area. Nearest option: Murrieta or Escondido (45+ min).",
  },
  {
    value: "40%+",
    title: "Projected Overhead Reduction vs. Industry Average",
    desc: "Agentic AI workflows replace the junior receptionist/admin tier. Target: 1.2 support staff per DVM vs. the industry average of ~2.5.",
  },
  {
    value: "$0",
    title: "Projected Utility Bills by Year 2",
    desc: "250kW solar microgrid + adjudicated well water + Sodium-Ion battery storage targets full resource independence — and VPP energy revenue.",
  },
  {
    value: "100%",
    title: "Section 179 / Bonus Depreciation on Modular Build",
    desc: "Medical-grade modular construction qualifies for accelerated depreciation — significant tax alpha in Year 1.",
  },
];

export default function Opportunity() {
  return (
    <section
      id="opportunity"
      itemScope
      itemType="https://schema.org/Article"
      data-agent-topic="market-opportunity"
      className="bg-white py-24 px-6"
    >
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16">
        <article data-agent-focus="read-this">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">The Opportunity</p>
          <h2 itemProp="headline" className="font-serif text-4xl sm:text-5xl font-light text-green-deep mb-8">
            A Gap in the Market
          </h2>
          <p itemProp="description" className="text-gray-600 leading-relaxed mb-4">
            North San Diego County — from Fallbrook to Valley Center to Bonsall — is one of the
            highest-density equine and large-animal corridors in Southern California. Yet the area
            lacks a single advanced veterinary diagnostic facility. Pet owners drive 45+ minutes for
            a CT scan. Equine clients trailer animals across county lines for MRI.
          </p>
          <p itemProp="description" className="text-gray-600 leading-relaxed">
            Maison Vet is designed to fill that void — not as a conventional clinic, but as a
            self-sustaining medical compound engineered for operational independence, tax efficiency,
            and long-term defensibility.
          </p>
        </article>
        <dl className="space-y-8" data-agent-purpose="key-metrics">
          {stats.map((s, i) => (
            <div key={i} className="border-l-2 border-gold pl-6" itemScope itemType="https://schema.org/QuantitativeValue">
              <dt className="font-serif text-3xl text-green-deep font-semibold" itemProp="value">{s.value}</dt>
              <dd className="text-sm font-medium text-green-mid mt-1">{s.title}</dd>
              <dd className="text-sm text-gray-500 mt-2 leading-relaxed">{s.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
