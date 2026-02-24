const items = [
  { title: "Medical Clinic", desc: "3,500–4,000 sq ft modular construction. CT, MRI, surgical suite, recovery.", phase: "Phase 2" },
  { title: "Solar Microgrid", desc: "250kW+ bifacial array with Sodium-Ion storage and VPP integration.", phase: "Phase 2" },
  { title: "Primary Residence", desc: "Owner&apos;s residence on-site. Central to compound operations.", phase: "Phase 2" },
  { title: "Vet Cottage — Staff Housing", desc: "On-site RVT/DVM housing. Reduces commute friction, improves retention.", phase: "Phase 2" },
  { title: "Agricultural Operations", desc: "Food forest, aquaculture, and regenerative agriculture program.", phase: "Phase 3" },
  { title: "Edge Compute Hub", desc: "Starlink 4.0 + fiber backhaul. AI inference, telemedicine, data sovereignty.", phase: "Phase 2" },
];

export default function Compound() {
  return (
    <section
      id="compound"
      data-agent-purpose="compound-specifications"
      itemScope
      itemType="https://schema.org/RealEstateListing"
      className="bg-cream-dark py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">The Build</p>
        <h2 itemProp="name" className="font-serif text-4xl sm:text-5xl font-light text-green-deep mb-3">
          What We&apos;re Building
        </h2>
        <p className="text-gray-500 mb-16">15–22 acres. A complete operating system.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <article
              key={i}
              data-agent-topic="compound-component"
              itemScope
              itemType="https://schema.org/Service"
              className="border-l-2 border-gold pl-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <h3 itemProp="name" className="font-semibold text-green-deep">{item.title}</h3>
                <span
                  aria-label={"Development phase: " + item.phase}
                  className="text-[10px] tracking-wider uppercase bg-green-deep/10 text-green-deep px-2 py-0.5 rounded-full"
                >
                  {item.phase}
                </span>
              </div>
              <p itemProp="description" className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
