export default function Footer() {
  return (
    <footer
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
      data-agent-purpose="site-metadata-and-legal"
      className="border-t border-stone-200 bg-white px-6 py-8 md:py-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <a
          href="/"
          className="font-bold text-stone-700 text-base hover:text-stone-900 transition-colors"
          itemProp="url"
        >
          <span itemProp="name">Maison Vet</span>
        </a>
        <span className="text-sm text-stone-600">North San Diego County</span>
        <a
          href="mailto:hello@maisonvet.com"
          className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
        >
          hello@maisonvet.com
        </a>
      </div>
    </footer>
  );
}
