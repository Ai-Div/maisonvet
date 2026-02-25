const sections = [
  { label: "Opportunity", href: "#opportunity" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Capital", href: "#capital" },
  { label: "Location", href: "#location" },
  { label: "Timeline", href: "#timeline" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

/**
 * Secondary navigation bar — homepage anchor links only.
 * Sits sticky below the primary fixed header (top-16).
 * Renders server-side, zero JS.
 */
export default function SectionNav() {
  return (
    <nav
      aria-label="Page Section Navigation"
      data-agent-purpose="page-section-anchors"
      data-agent-interactive="anchor-navigation"
      className="sticky top-16 z-40 bg-green-deep/80 backdrop-blur-md border-b border-white/5 overflow-x-auto"
    >
      <div className="mx-auto max-w-[1100px] px-6">
        <ul className="flex items-center gap-6 h-10 whitespace-nowrap">
          {sections.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className="text-[10px] tracking-[0.2em] uppercase text-cream/40 hover:text-gold focus-visible:ring-2 focus-visible:ring-gold rounded-sm transition-colors duration-200"
                itemProp="url"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
