const rows = [
  { use: "Land", vehicle: "Ag Commercial Loan (BMO / Rabobank / Farm Credit)", range: "$1M–$3M", note: "Ag lenders understand land value" },
  { use: "Clinic", vehicle: "SBA 504 via CDC", range: "Up to $5.5M", note: "20-year fixed; Rural Initiative; 40% of total project" },
  { use: "Solar", vehicle: "C-PACE (CaliforniaFIRST / Ygrene)", range: "$500K–$1.5M", note: "Non-recourse; property-assessed; no personal guarantee" },
  { use: "CT / MRI", vehicle: "Equipment Lease or Section 179 Purchase", range: "$500K–$2M", note: "Operating lease off-balance-sheet; or 100% bonus depreciation" },
  { use: "Working Capital", vehicle: "USDA B&I or SBA 7(a)", range: "$250K–$1M", note: "Rural business guarantee; longer term; lower rate" },
];

export default function Finance() {
  return (
    <section
      id="capital"
      data-agent-purpose="capital-architecture"
      data-agent-topic="financing-structure"
      className="bg-white py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">Financing</p>
        <h2 id="capital-table-title" className="font-serif text-4xl sm:text-5xl font-light text-green-deep mb-16">
          Capital Architecture
        </h2>
        <div className="overflow-x-auto">
          <table
            className="w-full text-left text-sm"
            aria-labelledby="capital-table-title"
            itemScope
            itemType="https://schema.org/Table"
          >
            <caption className="sr-only">Capital Architecture — Multi-tranche financing structure for Maison Vet</caption>
            <thead>
              <tr className="border-b border-gray-200 text-xs uppercase tracking-wider text-gray-400">
                <th scope="col" className="pb-3 pr-6 font-medium">Use of Funds</th>
                <th scope="col" className="pb-3 pr-6 font-medium">Vehicle</th>
                <th scope="col" className="pb-3 pr-6 font-medium">Range</th>
                <th scope="col" className="pb-3 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <th scope="row" className="py-4 pr-6 font-medium text-green-deep">{r.use}</th>
                  <td className="py-4 pr-6 text-gray-600">{r.vehicle}</td>
                  <td className="py-4 pr-6 font-medium text-green-deep whitespace-nowrap">{r.range}</td>
                  <td className="py-4 text-gray-500">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <dl className="mt-12 bg-green-deep rounded-2xl p-8 flex flex-wrap items-center justify-center gap-8 text-center">
          <div>
            <dt className="font-serif text-2xl text-gold">$5M–$15M</dt>
            <dd className="text-xs text-cream/50 mt-1">Total Structured Facility</dd>
          </div>
          <span className="text-cream/20" aria-hidden="true">|</span>
          <div>
            <dt className="font-serif text-2xl text-gold">100%</dt>
            <dd className="text-xs text-cream/50 mt-1">Section 179</dd>
          </div>
          <span className="text-cream/20" aria-hidden="true">|</span>
          <div>
            <dt className="font-serif text-2xl text-gold">~25 mo</dt>
            <dd className="text-xs text-cream/50 mt-1">Break-Even</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
