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
      className="py-20 md:py-24 px-6 bg-white"
      aria-labelledby="opportunity-heading"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        <div data-agent-focus="read-this">
          <p className="text-sm font-semibold tracking-widest uppercase text-stone-600 mb-4">
            The Opportunity
          </p>
          <h2
            id="opportunity-heading"
            itemProp="headline"
            className="font-serif text-4xl md:text-5xl font-normal text-stone-900 leading-tight mb-8"
          >
            A market with no modern option.
          </h2>
          <p itemProp="description" className="text-lg text-stone-700 leading-relaxed mb-6">
            North San Diego County — Pauma Valley, Valley Center, Fallbrook — is home to one of
            California&apos;s largest concentrations of equestrian estates, avocado farms, and
            high-net-worth rural households. The nearest advanced veterinary diagnostics are 45
            minutes away.
          </p>
          <p itemProp="description" className="text-lg text-stone-700 leading-relaxed mb-6">
            No CT. No MRI. No after-hours emergency. No destination clinic. The new Fallbrook
            Costco and Whole Foods corridor signals the gravity shift — high-income households are
            moving in. Their animals need care that does not exist yet.
          </p>
          <p itemProp="description" className="text-lg text-stone-700 leading-relaxed">
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
              <p className="font-serif text-4xl font-normal text-stone-900 mb-2" itemProp="value">
                {s.value}
              </p>
              <p className="text-sm font-semibold tracking-widest uppercase text-stone-600 mb-3" itemProp="name">
                {s.title}
              </p>
              <p className="text-base text-stone-700 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
