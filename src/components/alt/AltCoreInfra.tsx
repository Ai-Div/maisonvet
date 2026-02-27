const features = [
  {
    name: "Veterinary Clinic",
    title: "Pillar One",
    description:
      "A 3,500–4,000 sq ft medical-grade modular clinic. CT and MRI capability that does not exist within 20 miles. Senior RVTs. AI-assisted triage and documentation.",
    items: [
      "CT + MRI — first in the valley",
      "Senior RVTs at +20% market rate",
      "AI triage + voice-to-chart",
      "Wellness plan subscription model",
    ],
  },
  {
    name: "Energy Independence",
    title: "Pillar Two",
    description:
      "A 75kW DC bifacial solar array paired with 300kWh Sodium-Ion battery storage. No utility bills. No grid fragility. When wildfire events knock out regional power, the campus stays fully operational.",
    items: [
      "75kW DC ground-mount, bifacial solar",
      "Sodium-Ion battery storage",
      "VPP dispatch: $15–22K/year peak arbitrage",
      "C-PACE financed (non-recourse)",
    ],
  },
  {
    name: "Water Rights",
    title: "Pillar Three",
    description:
      "Senior rights in an adjudicated basin. Legally quantified, first-priority, drought-protected. A 50+ GPM well that also serves as a fire suppression asset.",
    items: [
      "Adjudicated San Luis Rey watershed",
      "Senior rights — first priority, drought-proof",
      "50+ GPM verified by drawdown test",
      "On-site storage for fire suppression",
    ],
  },
];

function CheckSvg() {
  return (
    <svg aria-hidden="true" className="absolute left-0 top-1 size-5 text-stone-600" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  );
}

export default function AltCoreInfra() {
  return (
    <div id="core-infra" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold text-stone-600">Three owned assets underpin the entire operation.</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            Core Infrastructure
          </p>
          <p className="mt-6 text-base text-stone-700">
            Most businesses rent their land, buy power from the grid, and draw water from municipal sources. We own all three inputs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.name} className="flex flex-col">
                <dt className="text-base font-semibold text-stone-900">
                  <span className="text-sm font-semibold text-stone-600">{f.title}</span>
                  <br />
                  {f.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base text-stone-600">
                  <p className="flex-auto">{f.description}</p>
                  <ul className="mt-6 space-y-2">
                    {f.items.map((item) => (
                      <li key={item} className="relative pl-9">
                        <CheckSvg />
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
