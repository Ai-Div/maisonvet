const rows = [
  {
    use: "Land Acquisition",
    vehicle: "Ag Commercial Loan",
    range: "$1M – $3M",
    note: "Ag lenders understand rural land value; strong collateral basis",
  },
  {
    use: "Modular Clinic",
    vehicle: "SBA 504 via CDC",
    range: "Up to $5.5M",
    note: "20-year fixed rate; Rural Initiative pilot available",
  },
  {
    use: "Solar + Battery",
    vehicle: "C-PACE",
    range: "$412,500 gross / $288,750 net ITC",
    note: "Non-recourse; 100% financed; property-assessed; $60K/yr net benefit",
  },
  {
    use: "CT / MRI Equipment",
    vehicle: "Equipment Lease",
    range: "$500K – $2M",
    note: "Off-balance-sheet; or 100% bonus depreciation if purchased",
  },
  {
    use: "Working Capital",
    vehicle: "USDA B&I / SBA 7(a)",
    range: "$250K – $1M",
    note: "Rural business guarantee; lower rate; longer term",
  },
];

export default function Finance() {
  return (
    <section
      id="capital"
      data-agent-purpose="capital-architecture"
      data-agent-topic="financing-structure"
      className="py-20 md:py-24 px-6 bg-stone-50"
      aria-labelledby="capital-heading"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-stone-600 mb-4">
          Capital Architecture
        </p>
        <h2
          id="capital-heading"
          className="font-serif text-4xl md:text-5xl font-normal text-stone-900 leading-tight mb-4 max-w-2xl"
        >
          Multi-tranche. Each piece optimized independently.
        </h2>
        <p className="text-lg text-stone-700 max-w-xl leading-relaxed mb-16">
          The structure allows each major asset class to use its ideal financing vehicle. Senior ag
          lending, SBA 504, C-PACE, and equipment financing run in parallel — not in competition.
        </p>
        <div className="bg-white border border-stone-200 overflow-hidden mb-10">
          <div className="hidden md:grid grid-cols-4 text-xs font-semibold tracking-widest uppercase text-stone-600 border-b border-stone-200 px-6 py-4 bg-stone-100">
            <span>Component</span>
            <span>Vehicle</span>
            <span>Range</span>
            <span>Key Advantage</span>
          </div>
          <div className="divide-y divide-stone-100">
            {rows.map((r, i) => (
              <div
                key={i}
                className="grid md:grid-cols-4 gap-2 md:gap-0 px-6 py-5 hover:bg-stone-50 transition-colors"
              >
                <span className="text-base text-stone-900 font-semibold md:font-normal">{r.use}</span>
                <span className="text-base text-stone-700">{r.vehicle}</span>
                <span className="text-base text-stone-700">{r.range}</span>
                <span className="text-sm text-stone-600 leading-relaxed">{r.note}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-px bg-stone-200">
          <div className="bg-white px-8 py-8">
            <p className="font-serif text-4xl font-normal text-stone-900 mb-2">$5M – $15M</p>
            <p className="text-sm font-semibold tracking-widest uppercase text-stone-600">
              Total Structured Facility
            </p>
          </div>
          <div className="bg-white px-8 py-8">
            <p className="font-serif text-4xl font-normal text-stone-900 mb-2">100%</p>
            <p className="text-sm font-semibold tracking-widest uppercase text-stone-600">
              Section 179 on Modular Build
            </p>
          </div>
          <div className="bg-white px-8 py-8">
            <p className="font-serif text-4xl font-normal text-stone-900 mb-2">~25 mo</p>
            <p className="text-sm font-semibold tracking-widest uppercase text-stone-600">
              Projected Break-Even Post-Launch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
