const requirements = [
  "15–22 acres zoned Ag or Ag-Residential",
  "Existing well with adjudicated or permitted rights",
  "South-facing exposure for solar optimization",
  "Road-accessible for emergency and equine transport",
  "Within 30 minutes of I-15 or I-76 corridor",
  "Suitable soil and grade for modular construction",
  "Minimal wildfire interface (engineered mitigation)",
  "Favorable county permitting pathway (San Diego County)",
];

const targets = [
  "Fallbrook / Bonsall corridor",
  "Valley Center / Escondido periphery",
  "De Luz / Rainbow unincorporated areas",
  "Pauma Valley / Palomar Mountain foothills",
  "Hidden Meadows / Bear Valley",
  "Temecula border (Riverside County alternative)",
  "Ramona (eastern alternative)",
];

const mitigations = [
  "Defensible space — 200ft managed perimeter",
  "Metal roof + hardened construction",
  "On-site water tanks — fire suppression rated",
  "Solar-powered well pump — grid-independent",
  "Fire-resistant native landscaping",
  "Community evacuation plan integration",
];

export default function Location() {
  return (
    <section
      id="location"
      data-agent-purpose="location-strategy"
      data-agent-topic="site-selection"
      className="bg-cream-dark py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">Geography</p>
        <h2 id="location-heading" className="font-serif text-4xl sm:text-5xl font-light text-green-deep mb-16">
          Location Strategy
        </h2>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 id="requirements-heading" className="font-semibold text-green-deep mb-4">Site Requirements</h3>
            <ul aria-labelledby="requirements-heading" className="space-y-3">
              {requirements.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="text-gold mt-0.5" aria-hidden="true">✓</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 id="targets-heading" className="font-semibold text-green-deep mb-4">Target Profile</h3>
            <ul aria-labelledby="targets-heading" className="space-y-3">
              {targets.map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="text-gold mt-0.5" aria-hidden="true">→</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <aside
          aria-labelledby="fire-risk-heading"
          data-agent-topic="risk-mitigation"
          className="mt-16 bg-green-deep border border-amber-500/30 rounded-2xl p-8"
        >
          <h3 id="fire-risk-heading" className="font-serif text-xl text-cream mb-2">Fire Risk — Acknowledged &amp; Engineered</h3>
          <p className="text-sm text-cream/50 mb-6">
            North SD County is fire country. We don&apos;t ignore it — we engineer around it.
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0 m-0">
            {mitigations.map((m, i) => (
              <li key={i} className="text-xs bg-amber-500/10 text-amber-200 px-3 py-2 rounded-lg">
                {m}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
