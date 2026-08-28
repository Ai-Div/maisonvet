const stats = [
  { value: "15–22", label: "Acres, Ag-Zoned" },
  { value: "75kW / 300kWh", label: "DC Solar + Na-Ion Storage" },
  { value: "50+ GPM", label: "Adjudicated Well" },
  { value: "$0", label: "Utility Bills by Year 2" },
];

export default function StatsBar() {
  return (
    <section
      className="bg-white py-16 md:py-20 px-6 lg:px-8"
      data-agent-purpose="key-metrics"
      itemScope
      itemType="https://schema.org/ItemList"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="stats-heading" className="sr-only">
          Key project metrics
        </h2>
        <dl className="grid grid-cols-1 gap-px overflow-hidden border border-stone-200 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col bg-stone-50 p-8 text-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/QuantitativeValue"
            >
              <dt className="text-xs font-medium tracking-widest text-stone-500 uppercase" itemProp="name">
                {s.label}
              </dt>
              <dd className="order-first font-serif text-3xl font-normal tabular-nums text-stone-900 sm:text-4xl" itemProp="value">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
