const siteReqs = [
  "15–22 acres, Ag-zoned (SD County A70/A72)",
  "Adjudicated water basin — CalWATRS senior rights verified",
  "Well production at or above 50 GPM via 4-hour drawdown test",
  "CUP feasibility pre-confirmed with SD County Planning",
  "Two independent egress routes off the property",
  "Outside perimeters of the 2003, 2007, and 2018 regional fires",
  "Cal Fire station within 15 minutes",
];

const lookingFor = [
  "Natural beauty — ridgeline, valley, or avocado grove setting",
  "Within 45 minutes of the Fallbrook corridor",
  "No advanced-diagnostic vet clinic within 15 miles",
  "Equestrian-friendly access — wide road, trailer clearance",
  "Existing structures preferred (reduces CUP complexity)",
  "Starlink line-of-sight clearance or fiber available",
];

const fireTags = [
  "100 ft+ Defensible Space",
  "Class A Modular Construction",
  "On-site Water for Suppression",
  "Solar Off-Grid During Outages",
  "Two Egress Routes Required",
  "FAIR Plan + Surplus Lines Insurance",
];

export default function Location() {
  return (
    <section
      id="location"
      data-agent-purpose="location-strategy"
      data-agent-topic="site-selection"
      className="bg-white py-24 sm:py-32"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-sm font-bold text-stone-600 mb-4 uppercase">
          Location Strategy
        </p>
        <h2
          id="location-heading"
          className="text-2xl md:text-4xl text-stone-900 mb-4 max-w-2xl"
        >
          Natural beauty. Fire risk acknowledged. Engineered around.
        </h2>
        <p className="text-stone-700 max-w-xl mb-12">
          Pauma Valley and Valley Center offer everything this project demands — land scale, water
          infrastructure, natural landscape, and the client base. SoCal fire risk is real. It is
          not being ignored.
        </p>
        <div className="grid md:grid-cols-2 gap-12 mb-10">
          <div>
            <p className="text-sm font-bold text-stone-600 mb-6 uppercase">
              Site Requirements
            </p>
            <ul className="space-y-4">
              {siteReqs.map((r, i) => (
                <li key={i} className="flex items-start gap-4 text-base text-stone-700">
                  <span className="text-stone-500 mt-0.5 font-semibold select-none" aria-hidden="true">
                    +
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold text-stone-600 mb-6 uppercase">
              What We Are Looking For
            </p>
            <ul className="space-y-4">
              {lookingFor.map((t, i) => (
                <li key={i} className="flex items-start gap-4 text-base text-stone-700">
                  <span className="text-stone-500 mt-0.5 font-semibold select-none" aria-hidden="true">
                    +
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <aside
          aria-labelledby="fire-risk-heading"
          data-agent-topic="risk-mitigation"
          className="border-l-4 border-stone-800 bg-stone-100 p-6"
        >
          <p
            id="fire-risk-heading"
            className="text-sm font-bold text-stone-700 mb-3 uppercase"
          >
            Fire Risk — Real. Engineered Around.
          </p>
          <p className="text-stone-800 mb-5">
            Both target zip codes (92061, 92082) carry Cal Fire&apos;s Very High to Extreme FHSZ
            designation. This is a known variable — not a disqualifier — addressed structurally at
            every layer of the project.
          </p>
          <div className="flex flex-wrap gap-2">
            {fireTags.map((tag, i) => (
              <span
                key={i}
                className="text-sm px-3 py-1.5 border border-stone-400 text-stone-800 bg-white font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
