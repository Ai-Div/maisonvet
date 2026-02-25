export default function CTA() {
  return (
    <section
      id="contact"
      itemScope
      itemType="https://schema.org/ContactPage"
      data-agent-purpose="investor-contact-section"
      className="py-20 md:py-24 px-6 bg-stone-900"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-stone-400 mb-6">
          Contact
        </p>
        <h2
          id="contact-heading"
          className="font-serif text-5xl md:text-6xl font-normal text-white leading-tight mb-6"
        >
          Interested in this project?
        </h2>
        <p className="text-xl text-stone-300 font-light max-w-md mx-auto mb-10 leading-relaxed">
          We are structuring the capital facility now. Conversations with lenders, partners, and the
          equestrian community are welcome.
        </p>
        <a
          href="mailto:hello@maisonvet.com"
          itemProp="email"
          data-agent-action="contact-project-team"
          className="inline-block bg-white text-stone-900 px-10 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-stone-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-900"
        >
          hello@maisonvet.com
        </a>
      </div>
    </section>
  );
}
