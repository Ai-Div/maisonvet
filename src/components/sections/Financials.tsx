const equityRows = [
  {
    entity: "Maison Vet, PC",
    purpose: "Veterinary practice license and operations",
    emily: "100%",
    tim: "—",
    rachael: "—",
  },
  {
    entity: "Land Holding LLC",
    purpose: "Owns property; charges rent to PC",
    emily: "30%",
    tim: "50%",
    rachael: "20%",
  },
  {
    entity: "Management LLC",
    purpose: "AI systems, ops, infrastructure; charges mgmt fee to PC",
    emily: "35%",
    tim: "45%",
    rachael: "20%",
  },
];

export default function Financials() {
  return (
    <section
      id="financials"
      data-agent-purpose="financial-model"
      data-agent-topic="financial-projections"
      className="py-20 md:py-24 px-6 bg-stone-50"
      aria-labelledby="financials-heading"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-stone-600 mb-4">
          Financial Model
        </p>
        <h2
          id="financials-heading"
          className="font-serif text-4xl md:text-5xl font-normal text-stone-900 leading-tight mb-4 max-w-2xl"
        >
          Financial Projections
        </h2>
        <p className="text-lg text-stone-700 max-w-xl leading-relaxed mb-16">
          Built from current market data. Conservative in year one, realistic from year two onward.
          Verified assumptions listed below each table.
        </p>

        {/* Use of Funds — Total Capital Required */}
        <div className="mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-stone-600 mb-6">
            Use of Funds — Total Capital Required
          </p>
          <div className="overflow-x-auto">
            <table
              className="w-full min-w-[640px] border-collapse text-base"
              aria-label="Use of funds and total capital required"
            >
              <thead>
                <tr className="bg-stone-900 text-left">
                  <th className="px-5 py-3 text-xs font-semibold tracking-widest uppercase text-stone-300">
                    Item
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold tracking-widest uppercase text-stone-300">
                    Amount
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold tracking-widest uppercase text-stone-300">
                    Source
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold tracking-widest uppercase text-stone-300">
                    Rate / Term
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr className="hover:bg-stone-50">
                  <td className="px-5 py-4 text-stone-800 font-medium">Land Acquisition (15–22 ac)</td>
                  <td className="px-5 py-4 text-stone-700">$2,000,000</td>
                  <td className="px-5 py-4 text-stone-700">Ag Commercial Loan</td>
                  <td className="px-5 py-4 text-stone-600">7.0% / 20 yr</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="px-5 py-4 text-stone-800 font-medium">Modular Clinic (3,500 sq ft)</td>
                  <td className="px-5 py-4 text-stone-700">$1,750,000</td>
                  <td className="px-5 py-4 text-stone-700">SBA 504</td>
                  <td className="px-5 py-4 text-stone-600">5.8% / 20 yr (fixed)</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="px-5 py-4 text-stone-800 font-medium">Staff Housing (2 units, modular)</td>
                  <td className="px-5 py-4 text-stone-700">$400,000</td>
                  <td className="px-5 py-4 text-stone-700">SBA 504 (combined)</td>
                  <td className="px-5 py-4 text-stone-600">5.8% / 20 yr (fixed)</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="px-5 py-4 text-stone-800 font-medium">Solar + Battery (75kW / 300kWh)</td>
                  <td className="px-5 py-4 text-stone-700">$412,500 gross</td>
                  <td className="px-5 py-4 text-stone-700">C-PACE (post-ITC: $288,750)</td>
                  <td className="px-5 py-4 text-stone-600">7.5% / 20 yr</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="px-5 py-4 text-stone-800 font-medium">CT Scanner (16-slice, new)</td>
                  <td className="px-5 py-4 text-stone-700">$210,000</td>
                  <td className="px-5 py-4 text-stone-700">Equipment Lease</td>
                  <td className="px-5 py-4 text-stone-600">7.0% / 5 yr</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="px-5 py-4 text-stone-800 font-medium">General Medical Equipment</td>
                  <td className="px-5 py-4 text-stone-700">$140,000</td>
                  <td className="px-5 py-4 text-stone-700">Equipment Lease</td>
                  <td className="px-5 py-4 text-stone-600">7.0% / 5 yr</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="px-5 py-4 text-stone-800 font-medium">Site Prep, CUP, Permitting</td>
                  <td className="px-5 py-4 text-stone-700">$150,000</td>
                  <td className="px-5 py-4 text-stone-700">Working Capital</td>
                  <td className="px-5 py-4 text-stone-600">6.0% / 10 yr</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="px-5 py-4 text-stone-800 font-medium">Operating Reserve</td>
                  <td className="px-5 py-4 text-stone-700">$300,000</td>
                  <td className="px-5 py-4 text-stone-700">USDA B&I / Cash</td>
                  <td className="px-5 py-4 text-stone-600">6.0% / 10 yr</td>
                </tr>
                <tr className="bg-stone-100">
                  <td className="px-5 py-4 text-stone-900 font-semibold">Total Project</td>
                  <td className="px-5 py-4 text-stone-900 font-semibold">$5,362,500</td>
                  <td className="px-5 py-4 text-stone-600 text-sm" colSpan={2}>
                    100% debt-financed across five vehicles. No equity dilution required at project
                    inception.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-stone-500 mt-3">
            MRI added in Year 3 via equipment lease ($250K). Not included in initial capital stack.
          </p>
        </div>

        <div className="mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-stone-600 mb-6">
            Equity Structure
          </p>
          <div className="overflow-x-auto mb-6">
            <table
              className="w-full min-w-[560px] border-collapse text-base"
              aria-label="Equity structure by entity and person"
            >
              <thead>
                <tr className="bg-stone-100 text-left">
                  <th className="px-5 py-3 text-xs font-semibold tracking-widest uppercase text-stone-600">
                    Entity
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold tracking-widest uppercase text-stone-600">
                    Purpose
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold tracking-widest uppercase text-stone-600">
                    Emily Gray
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold tracking-widest uppercase text-stone-600">
                    Tim Hobert
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold tracking-widest uppercase text-stone-600">
                    Rachael Gray
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {equityRows.map((r, i) => (
                  <tr key={i} className="hover:bg-stone-50">
                    <td className="px-5 py-4 text-stone-800 font-medium">{r.entity}</td>
                    <td className="px-5 py-4 text-stone-700">{r.purpose}</td>
                    <td className="px-5 py-4 text-stone-900 font-semibold">{r.emily}</td>
                    <td className="px-5 py-4 text-stone-700">{r.tim}</td>
                    <td className="px-5 py-4 text-stone-700">{r.rachael}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-stone-600 max-w-2xl">
            California law requires a veterinary Professional Corporation to be owned exclusively by
            licensed DVMs. The dual-entity structure (PC + affiliated LLCs) is the standard
            mechanism for non-licensed partners to participate in economics via management fees and
            land lease income. Equity percentages are proposed and subject to negotiation and legal
            review.
          </p>
        </div>
      </div>
    </section>
  );
}
