const capitalRows = [
  { component: "Land Acquisition", vehicle: "Ag Commercial Loan", range: "$1M – $3M", advantage: "Ag lenders understand rural land value; strong collateral basis" },
  { component: "Modular Clinic", vehicle: "SBA 504 via CDC", range: "Up to $5.5M", advantage: "20-year fixed rate; Rural Initiative pilot available" },
  { component: "Solar + Battery", vehicle: "C-PACE", range: "$412,500 gross / $288,750 net ITC", advantage: "Non-recourse; 100% financed; property-assessed; $60K/yr net benefit" },
  { component: "CT / MRI Equipment", vehicle: "Equipment Lease", range: "$500K – $2M", advantage: "Off-balance-sheet; or 100% bonus depreciation if purchased" },
  { component: "Working Capital", vehicle: "USDA B&I / SBA 7(a)", range: "$250K – $1M", advantage: "Rural business guarantee; lower rate; longer term" },
];

export default function AltCapital() {
  return (
    <div id="capital" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            Capital Architecture
          </h2>
          <p className="mt-6 text-lg text-stone-700">
            Multi-tranche. Each piece optimized independently.
          </p>
          <p className="mt-2 text-base text-stone-600">
            The structure allows each major asset class to use its ideal financing vehicle.
          </p>
        </div>
        <div className="mt-16 overflow-hidden rounded-2xl border border-stone-200">
          <table className="min-w-full divide-y divide-stone-200">
            <thead className="bg-stone-50">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-stone-900">
                  Component
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-stone-900">
                  Vehicle
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-stone-900">
                  Range
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-stone-900">
                  Key Advantage
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 bg-white">
              {capitalRows.map((row) => (
                <tr key={row.component}>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-stone-900">{row.component}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-stone-600">{row.vehicle}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-stone-600">{row.range}</td>
                  <td className="px-6 py-4 text-sm text-stone-600">{row.advantage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-12 flex items-baseline gap-4">
          <span className="text-3xl font-semibold tracking-tight text-stone-900">$5M – $15M</span>
          <span className="text-lg text-stone-600">Total Structured Facility</span>
        </div>
        <div className="mt-8 flex flex-wrap gap-8 text-sm">
          <span className="font-semibold text-stone-900">100%</span>
          <span className="text-stone-600">Section 179 on Modular Build</span>
          <span className="font-semibold text-stone-900">~25 mo</span>
          <span className="text-stone-600">Projected Break-Even Post-Launch</span>
        </div>
      </div>
    </div>
  );
}
