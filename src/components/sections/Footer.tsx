export default function Footer() {
  return (
    <footer
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
      data-agent-purpose="site-metadata-and-legal"
      className="bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-16 lg:px-8 lg:pt-24">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <a
            href="/"
            className="font-bold text-stone-900 hover:text-stone-700 transition-colors"
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
        <div className="mt-12 border-t border-stone-900/10 pt-8">
          <p className="text-sm text-stone-600">
            &copy; {new Date().getFullYear()} Maison Vet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
