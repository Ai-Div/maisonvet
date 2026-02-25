const stats = [
  {
    value: "0",
    title: "Advanced Diagnostic Vets Within 20 Miles",
    desc: "Nearest CT/MRI-capable vet facility is 45+ minutes from the target area. First mover wins this market permanently.",
  },
  {
    value: "40%+",
    title: "Overhead Reduction vs. Industry Average",
    desc: "AI workflows replace the junior receptionist and admin tier. Target: 1.2 support staff per DVM vs. the industry average of 2.5.",
  },
  {
    value: "100%",
    title: "Section 179 on Modular Construction",
    desc: "Medical-grade modular structures qualify for full bonus depreciation. Significant tax alpha in year one of operations.",
  },
];

export default function Opportunity() {
  return (
    <section
      id="opportunity"
      itemScope
      itemType="https://schema.org/Article"
      data-agent-purpose="market-opportunity"
      data-agent-topic="market-opportunity"
      aria-labelledby="opportunity-heading"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div data-agent-focus="read-this">
          <p className="text-sm font-bold text-stone-600 mb-4 uppercase">
            The Opportunity
          </p>
          <h2
            id="opportunity-heading"
            itemProp="headline"
            className="text-2xl md:text-4xl text-stone-900 mb-6"
          >
            A market with no modern option.
          </h2>
          <p itemProp="description" className="text-stone-700 mb-6">
            North San Diego County — Pauma Valley, Valley Center, Fallbrook — is home to one of
            California&apos;s largest concentrations of equestrian estates, avocado farms, and
            high-net-worth rural households. The nearest advanced veterinary diagnostics are 45
            minutes away.
          </p>
          <p itemProp="description" className="text-stone-700 mb-6">
            No CT. No MRI. No after-hours emergency. No destination clinic. The new Fallbrook
            Costco and Whole Foods corridor signals the gravity shift — high-income households are
            moving in. Their animals need care that does not exist yet.
          </p>
          <p itemProp="description" className="text-stone-700">
            This is not a standard vet clinic startup. It is a compound — owned land, sovereign
            energy, senior water rights — with a high-margin medical anchor. The moat is the
            infrastructure, not just the medicine.
          </p>
        </div>
        <div className="flex flex-col gap-10 pt-2" data-agent-purpose="key-metrics">
          {stats.map((s, i) => (
            <div
              key={i}
              className="border-l-2 border-stone-300 pl-6"
              itemScope
              itemType="https://schema.org/QuantitativeValue"
            >
              <p className="text-3xl font-bold text-stone-900 mb-2" itemProp="value">
                {s.value}
              </p>
              <p className="text-sm font-bold text-stone-600 mb-3 uppercase" itemProp="name">
                {s.title}
              </p>
              <p className="text-stone-700">{s.desc}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
