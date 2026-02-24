export default function CTA() {
  return (
    <section
      id="contact"
      itemScope
      itemType="https://schema.org/ContactPage"
      data-agent-purpose="investor-contact-section"
      className="bg-green-deep py-24 px-6 text-center"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-8">
          Interested in participating in this project?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:tim@div.digital"
            itemProp="email"
            data-agent-action="contact-project-team"
            className="px-8 py-3 bg-gold text-green-deep text-sm font-medium tracking-wide rounded-lg hover:bg-gold-light transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="/deck.pdf"
            data-agent-action="download-pitch-deck"
            className="px-8 py-3 border border-cream/20 text-cream text-sm tracking-wide rounded-lg hover:border-gold/50 hover:text-gold transition-colors"
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}
