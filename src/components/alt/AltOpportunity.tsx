const opportunityStats = [
  {
    value: "0",
    name: "Advanced Diagnostic Vets Within 20 Miles",
    description:
      "Nearest CT/MRI-capable vet facility is 45+ minutes from the target area. First mover wins this market permanently.",
  },
  {
    value: "40%+",
    name: "Overhead Reduction vs. Industry Average",
    description:
      "AI workflows replace the junior receptionist and admin tier. Target: 1.2 support staff per DVM vs. the industry average of 2.5.",
  },
  {
    value: "100%",
    name: "Section 179 on Modular Construction",
    description:
      "Medical-grade modular structures qualify for full bonus depreciation. Significant tax alpha in year one of operations.",
  },
];

export default function AltOpportunity() {
  return (
    <div id="opportunity" className="bg-stone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            The Opportunity
          </h2>
          <p className="mt-4 text-2xl font-semibold tracking-tight text-stone-900">
            A market with no modern option.
          </p>
          <p className="mt-6 text-lg text-stone-700">
            North San Diego County — Pauma Valley, Valley Center, Fallbrook — is home to one of California&apos;s largest concentrations of equestrian estates, avocado farms, and high-net-worth rural households. The nearest advanced veterinary diagnostics are 45 minutes away.
          </p>
          <p className="mt-4 text-lg text-stone-700">
            No CT. No MRI. No after-hours emergency. No destination clinic. The new Fallbrook Costco and Whole Foods corridor signals the gravity shift — high-income households are moving in. Their animals need care that does not exist yet.
          </p>
          <p className="mt-4 text-lg text-stone-700">
            This is not a standard vet clinic startup. It is a campus — owned land, sovereign energy, senior water rights — with a high-margin medical anchor. The moat is the infrastructure, not just the medicine.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base sm:grid-cols-3 lg:mx-0 lg:max-w-none">
          {opportunityStats.map((stat) => (
            <div key={stat.name} className="flex flex-col">
              <dt className="text-3xl font-semibold tracking-tight text-stone-900">{stat.value}</dt>
              <dd className="mt-2">
                <p className="font-semibold text-stone-900">{stat.name}</p>
                <p className="mt-1 text-stone-600">{stat.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
