const useOfFunds = [
  { item: "Land Acquisition (15–22 ac)", amount: "$2,000,000", source: "Ag Commercial Loan", rate: "7.0% / 20 yr" },
  { item: "Modular Clinic (3,500 sq ft)", amount: "$1,750,000", source: "SBA 504", rate: "5.8% / 20 yr (fixed)" },
  { item: "Staff Housing (2 units, modular)", amount: "$400,000", source: "SBA 504 (combined)", rate: "5.8% / 20 yr (fixed)" },
  { item: "Solar + Battery (75kW / 300kWh)", amount: "$412,500 gross", source: "C-PACE (post-ITC: $288,750)", rate: "7.5% / 20 yr" },
  { item: "CT Scanner (16-slice, new)", amount: "$210,000", source: "Equipment Lease", rate: "7.0% / 5 yr" },
  { item: "General Medical Equipment", amount: "$140,000", source: "Equipment Lease", rate: "7.0% / 5 yr" },
  { item: "Site Prep, CUP, Permitting", amount: "$150,000", source: "Working Capital", rate: "6.0% / 10 yr" },
  { item: "Operating Reserve", amount: "$300,000", source: "USDA B&I / Cash", rate: "6.0% / 10 yr" },
];

const equityRows = [
  { entity: "Maison Vet, PC", purpose: "Veterinary practice license and operations", emily: "100%", tim: "—", rachael: "—" },
  { entity: "Land Holding LLC", purpose: "Owns property; charges rent to PC", emily: "30%", tim: "50%", rachael: "20%" },
  { entity: "Management LLC", purpose: "AI systems, ops, infrastructure; charges mgmt fee to PC", emily: "35%", tim: "45%", rachael: "20%" },
];

export default function AltFinancials() {
  return (
    <div id="financials" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
          Financial Model
        </h2>
        <p className="mt-4 text-lg text-stone-600">Financial Projections</p>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-stone-900">Use of Funds — Total Capital Required</h3>
          <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200">
            <table className="min-w-full divide-y divide-stone-200">
              <thead className="bg-stone-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-stone-900">Item</th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-stone-900">Amount</th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-stone-900">Source</th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-stone-900">Rate / Term</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white">
                {useOfFunds.map((row) => (
                  <tr key={row.item}>
                    <td className="px-6 py-4 text-sm text-stone-900">{row.item}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-stone-600">{row.amount}</td>
                    <td className="px-6 py-4 text-sm text-stone-600">{row.source}</td>
                    <td className="px-6 py-4 text-sm text-stone-600">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-stone-600">
            Total Project $5,362,500 — 100% debt-financed across five vehicles. No equity dilution required at project inception.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-stone-900">Equity Structure</h3>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-stone-200">
            <table className="min-w-full divide-y divide-stone-200">
              <thead className="bg-stone-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-stone-900">Entity</th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-stone-900">Purpose</th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-stone-900">Emily Gray</th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-stone-900">Tim Hobert</th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-stone-900">Rachael Gray</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white">
                {equityRows.map((row) => (
                  <tr key={row.entity}>
                    <td className="px-6 py-4 text-sm font-medium text-stone-900">{row.entity}</td>
                    <td className="px-6 py-4 text-sm text-stone-600">{row.purpose}</td>
                    <td className="px-6 py-4 text-sm text-stone-600">{row.emily}</td>
                    <td className="px-6 py-4 text-sm text-stone-600">{row.tim}</td>
                    <td className="px-6 py-4 text-sm text-stone-600">{row.rachael}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-stone-600">
            California law requires a veterinary Professional Corporation to be owned exclusively by licensed DVMs.
          </p>
        </div>
      </div>
    </div>
  );
}
