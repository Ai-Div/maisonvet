export default function Footer() {
  return (
    <footer
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
      data-agent-purpose="site-metadata-and-legal"
      className="bg-[#080f0a] py-8 px-6 text-center"
    >
      <address className="not-italic">
        <small className="text-xs text-cream/30">
          © 2026 Maison Vet &nbsp;|&nbsp;{" "}
          <a
            href="mailto:tim@div.digital"
            itemProp="email"
            className="hover:text-gold transition-colors"
          >
            tim@div.digital
          </a>
        </small>
      </address>
    </footer>
  );
}
