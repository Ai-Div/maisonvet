export default function CTA() {
  return (
    <section
      id="contact"
      itemScope
      itemType="https://schema.org/ContactPage"
      data-agent-purpose="investor-contact-section"
      aria-labelledby="contact-heading"
      className="bg-stone-900 px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold text-stone-400 uppercase mb-4">
          Contact
        </p>
        <h2
          id="contact-heading"
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          Interested in this project?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-stone-300">
          We are structuring the capital facility now. Conversations with lenders, partners, and the
          equestrian community are welcome.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <a
            href="mailto:hello@maisonvet.com"
            itemProp="email"
            data-agent-action="contact-project-team"
            className="rounded-md bg-white px-6 py-3 text-sm font-bold text-stone-900 shadow-sm hover:bg-stone-100 focus-visible:outline focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900 transition-colors"
          >
            hello@maisonvet.com
          </a>
        </div>
      </div>
    </section>
  );
}
