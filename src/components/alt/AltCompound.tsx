const campusItems = [
  {
    name: "Medical Clinic",
    value: "3,500–4,000 sq ft",
    description:
      "Medical-grade modular construction. Multiple exam rooms, surgery suite, imaging bay (CT/MRI-ready), pharmacy, recovery ward. Class A fire rating. Qualifies for 100% Section 179 bonus depreciation in year one.",
  },
  {
    name: "Energy Infrastructure",
    value: "75kW DC Solar + 300kWh Na-Ion Storage",
    description:
      'Right-sized for the campus footprint. 75kW DC qualifies as "Small Commercial" — simplified permitting, no Rule 21 utility-scale studies. Annual production ~135,000 kWh vs. ~95,000 kWh consumed, leaving 40,000 kWh surplus for VPP peak dispatch. The 4:1 battery-to-solar ratio is the key: the 300kWh tank fills during off-peak and sells back during SDG&E\'s 4–9 PM peak window. Gross project cost $412,500 — 30% ITC ($123,750) = $288,750 net. Financed 100% via C-PACE, non-recourse, property-assessed.',
  },
  {
    name: "Staff Housing",
    value: "Residence + Vet Cottage",
    description:
      "Primary residence and on-site Vet Cottage for a senior RVT or resident DVM. On-site housing is a business expense for on-call medical personnel — and enables 24/7 emergency care capability that competitors cannot match.",
  },
  {
    name: "Agricultural Operations",
    value: "Food Forest + Aquaculture",
    description:
      "Working agriculture using adjudicated well water. Generates ag income for favorable tax treatment of land. Supports the Ag-zoned classification and strengthens the Conditional Use Permit application for the medical use.",
  },
  {
    name: "AI Clinical Systems",
    value: "Agentic Workflows",
    description:
      "AI triage, voice-to-chart documentation, automated inventory, and appointment management replace the junior admin tier. Target staffing ratio: 1.2 support staff per DVM versus the industry average of 2.5.",
  },
  {
    name: "Connectivity",
    value: "Starlink 4.0 + Edge Compute",
    description:
      "Starlink 4.0 primary with local fiber backhaul. On-premise edge compute for low-latency AI clinical workflows. Fully operational during grid outages — the solar and battery system keeps everything running when the surrounding area cannot.",
  },
];

export default function AltCompound() {
  return (
    <div id="campus" className="bg-stone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            The Campus
          </h2>
          <p className="mt-4 text-2xl font-semibold tracking-tight text-stone-900">15–22 acres.</p>
          <p className="mt-2 text-lg text-stone-700">A complete operating system.</p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {campusItems.map((item) => (
            <div key={item.name}>
              <dt className="font-semibold text-stone-900">
                {item.name}
                <br />
                <span className="font-normal text-stone-600">{item.value}</span>
              </dt>
              <dd className="mt-2 text-stone-600">{item.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
