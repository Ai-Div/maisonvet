const stats = [
  { value: "15–22", label: "Acres, Ag-Zoned" },
  { value: "75kW / 300kWh", label: "DC Solar + Na-Ion Storage" },
  { value: "50+ GPM", label: "Adjudicated Well" },
  { value: "$0", label: "Utility Bills by Year 2" },
];

export default function StatsBar() {
  return (
    <section
      className="border-y border-stone-200 bg-stone-50 py-12 px-6"
      data-agent-purpose="key-metrics"
      itemScope
      itemType="https://schema.org/ItemList"
      aria-label="Key project metrics"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} itemProp="itemListElement" itemScope itemType="https://schema.org/QuantitativeValue">
            <p className="font-serif text-4xl md:text-5xl font-normal text-stone-900 mb-2" itemProp="value">
              {s.value}
            </p>
            <p className="text-sm font-semibold tracking-widest uppercase text-stone-600" itemProp="name">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
