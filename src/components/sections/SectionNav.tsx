const sections = [
  { label: "Opportunity", href: "#opportunity" },
  { label: "The Compound", href: "#pillars" },
  { label: "Capital", href: "#capital" },
  { label: "Location", href: "#location" },
  { label: "Financials", href: "#financials" },
  { label: "Timeline", href: "#timeline" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

/**
 * In-page section navigation — anchor links for the current page.
 * Renders only on homepage (sections with these anchors). Stone styling.
 */
export default function SectionNav() {
  return (
    <nav
      aria-label="Page Section Navigation"
      data-agent-purpose="page-section-anchors"
      data-agent-interactive="anchor-navigation"
      className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 overflow-x-auto"
    >
      <div className="mx-auto max-w-[1100px] px-6">
        <ul className="flex items-center gap-6 h-10 whitespace-nowrap">
          {sections.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className="text-[10px] font-semibold tracking-[0.2em] uppercase text-stone-500 hover:text-stone-900 focus-visible:ring-2 focus-visible:ring-stone-900 rounded-sm transition-colors duration-200"
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
