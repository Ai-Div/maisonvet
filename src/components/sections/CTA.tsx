export default function CTA() {
  return (
    <section
      id="contact"
      itemScope
      itemType="https://schema.org/ContactPage"
      data-agent-purpose="investor-contact-section"
      className="py-16 md:py-20 px-6 bg-stone-900"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-bold text-stone-400 mb-6 uppercase">
          Contact
        </p>
        <h2
          id="contact-heading"
          className="text-3xl md:text-5xl text-white mb-6"
        >
          Interested in this project?
        </h2>
        <p className="text-stone-300 max-w-md mx-auto mb-8">
          We are structuring the capital facility now. Conversations with lenders, partners, and the
          equestrian community are welcome.
        </p>
        <a
          href="mailto:hello@maisonvet.com"
          itemProp="email"
          data-agent-action="contact-project-team"
          className="inline-block bg-white text-stone-900 px-8 py-3 text-sm font-bold uppercase hover:bg-stone-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-900"
        >
          hello@maisonvet.com
        </a>
      </div>
    </section>
  );
}
