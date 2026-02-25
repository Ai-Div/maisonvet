const items = [
  {
    label: "Medical Clinic",
    title: "3,500–4,000 sq ft",
    desc: "Medical-grade modular construction. Multiple exam rooms, surgery suite, imaging bay (CT/MRI-ready), pharmacy, recovery ward. Class A fire rating. Qualifies for 100% Section 179 bonus depreciation in year one.",
  },
  {
    label: "Energy Infrastructure",
    title: "75kW DC Solar + 300kWh Na-Ion Storage",
    desc: "Right-sized for the compound footprint. 75kW DC qualifies as \"Small Commercial\" — simplified permitting, no Rule 21 utility-scale studies. Annual production ~135,000 kWh vs. ~95,000 kWh consumed, leaving 40,000 kWh surplus for VPP peak dispatch. The 4:1 battery-to-solar ratio is the key: the 300kWh tank fills during off-peak and sells back during SDG&E's 4–9 PM peak window. Gross project cost $412,500 — 30% ITC ($123,750) = $288,750 net. Financed 100% via C-PACE, non-recourse, property-assessed.",
  },
  {
    label: "Staff Housing",
    title: "Residence + Vet Cottage",
    desc: "Primary residence and on-site Vet Cottage for a senior RVT or resident DVM. On-site housing is a business expense for on-call medical personnel — and enables 24/7 emergency care capability that competitors cannot match.",
  },
  {
    label: "Agricultural Operations",
    title: "Food Forest + Aquaculture",
    desc: "Working agriculture using adjudicated well water. Generates ag income for favorable tax treatment of land. Supports the Ag-zoned classification and strengthens the Conditional Use Permit application for the medical use.",
  },
  {
    label: "AI Clinical Systems",
    title: "Agentic Workflows",
    desc: "AI triage, voice-to-chart documentation, automated inventory, and appointment management replace the junior admin tier. Target staffing ratio: 1.2 support staff per DVM versus the industry average of 2.5.",
  },
  {
    label: "Connectivity",
    title: "Starlink 4.0 + Edge Compute",
    desc: "Starlink 4.0 primary with local fiber backhaul. On-premise edge compute for low-latency AI clinical workflows. Fully operational during grid outages — the solar and battery system keeps everything running when the surrounding area cannot.",
  },
];

export default function Compound() {
  return (
    <section
      id="compound"
      data-agent-purpose="compound-specifications"
      itemScope
      itemType="https://schema.org/RealEstateListing"
      className="py-20 md:py-24 px-6 bg-white"
      aria-labelledby="compound-heading"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-stone-600 mb-4">
          The Compound
        </p>
        <h2
          id="compound-heading"
          itemProp="name"
          className="font-serif text-4xl md:text-5xl font-normal text-stone-900 leading-tight mb-16 max-w-xl"
        >
          15–22 acres.
          <br />
          A complete operating system.
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {items.map((item, i) => (
            <article
              key={i}
              data-agent-topic="compound-component"
              itemScope
              itemType="https://schema.org/Service"
              className="border-t-2 border-stone-200 pt-8"
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-stone-600 mb-2">
                {item.label}
              </p>
              <h3 itemProp="name" className="font-serif text-2xl font-normal text-stone-900 mb-3">
                {item.title}
              </h3>
              <p itemProp="description" className="text-base text-stone-700 leading-relaxed">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
