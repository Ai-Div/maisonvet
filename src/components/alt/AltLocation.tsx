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

const fireMitigation = [
  "100 ft+ Defensible Space",
  "Class A Modular Construction",
  "On-site Water for Suppression",
  "Solar Off-Grid During Outages",
  "Two Egress Routes Required",
  "FAIR Plan + Surplus Lines Insurance",
];

export default function AltLocation() {
  return (
    <div id="location" className="bg-stone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            Location Strategy
          </h2>
          <p className="mt-6 text-lg text-stone-700">
            Natural beauty. Fire risk acknowledged. Engineered around.
          </p>
          <p className="mt-4 text-base text-stone-600">
            Pauma Valley and Valley Center offer everything this project demands. SoCal fire risk is real. It is not being ignored.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h3 className="text-base font-semibold text-stone-900">Site Requirements</h3>
            <ul className="mt-4 space-y-2 text-sm text-stone-600">
              {siteReqs.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-stone-900">What We Are Looking For</h3>
            <ul className="mt-4 space-y-2 text-sm text-stone-600">
              {lookingFor.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-stone-900">Fire Risk — Engineered Around</h3>
            <p className="mt-2 text-sm text-stone-600">
              Both target zip codes carry Cal Fire Very High to Extreme FHSZ designation.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-stone-600">
              {fireMitigation.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
