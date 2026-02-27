const stats = [
  { id: 1, name: "Acres, Ag-Zoned", value: "15–22" },
  { id: 2, name: "DC Solar + Na-Ion Storage", value: "75kW / 300kWh" },
  { id: 3, name: "Adjudicated Well", value: "50+ GPM" },
  { id: 4, name: "Utility Bills by Year 2", value: "$0" },
];

export default function AltStats() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
              Key project metrics
            </h2>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-stone-400/5 p-8">
                <dt className="text-sm font-semibold text-stone-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-stone-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
