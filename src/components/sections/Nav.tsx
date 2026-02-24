const links = [
  { label: "Opportunity", href: "#opportunity" },
  { label: "The Compound", href: "#compound" },
  { label: "Capital Structure", href: "#capital" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header
      itemScope
      itemType="https://schema.org/WPHeader"
      data-agent-purpose="site-branding-and-navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-green-deep/95 backdrop-blur-md border-b border-white/5"
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
        <a
          href="#"
          rel="home"
          aria-label="Maison Vet - Return to top"
          itemProp="url"
          className="font-serif text-2xl text-gold tracking-wide"
        >
          Maison Vet
        </a>
        <nav
          aria-label="Primary Site Navigation"
          itemScope
          itemType="https://schema.org/SiteNavigationElement"
          data-agent-interactive="routing"
          className="hidden md:flex items-center gap-8"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              itemProp="url"
              className="text-xs tracking-[0.2em] uppercase text-cream/70 hover:text-gold transition-colors duration-200"
            >
              <span itemProp="name">{l.label}</span>
            </a>
          ))}
        </nav>
        <details className="md:hidden relative">
          <summary
            aria-label="Toggle navigation menu"
            className="list-none cursor-pointer text-cream/70 hover:text-gold transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </summary>
          <nav
            aria-label="Mobile Navigation"
            className="absolute top-8 right-0 bg-green-deep/95 backdrop-blur-md border border-white/5 rounded-lg px-6 py-4 min-w-[200px] z-50"
          >
            <ul className="flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    itemProp="url"
                    className="text-xs tracking-[0.2em] uppercase text-cream/70 hover:text-gold transition-colors duration-200"
                  >
                    <span itemProp="name">{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
