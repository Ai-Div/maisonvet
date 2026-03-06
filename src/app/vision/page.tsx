import Image from "next/image";

export const metadata = {
  title: "Vision — Maison Vet",
  description:
    "The Vet Center Enclave. A 15-acre sanctuary where Pioneertown meets Mid-Century Modern luxury.",
};

export default function VisionPage() {
  return (
    <main
      id="primary-content"
      role="main"
      tabIndex={-1}
      className="bg-stone-50 min-h-screen outline-none"
      itemScope
      itemType="https://schema.org/Article"
      data-agent-purpose="vision-narrative"
    >
      <article data-agent-focus="read-this">
        {/* Hero — full image, no overlay, text below */}
        <section
          aria-labelledby="vision-heading"
          className="bg-white"
        >
          <div className="relative w-full aspect-[3/2] bg-stone-100">
            <Image
              src="/images/vision/9GL0C.jpg"
              alt="Maison Vet Town Vision — Hillside Residences"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24 text-center">
            <p className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-6 text-stone-500" id="vision-eyebrow">
              Our Vision
            </p>
            <h1 id="vision-heading" className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-stone-900" itemProp="headline">
              The Vet Center Enclave
            </h1>
            <p className="text-lg md:text-xl font-medium text-stone-700 max-w-2xl mx-auto leading-relaxed" itemProp="description">
              A 15-acre sanctuary where the soul of Pioneertown meets sophisticated
              Mid-Century Modern luxury.
            </p>
          </div>
        </section>

        {/* Narrative Section */}
        <section
          className="bg-white py-24 sm:py-32 px-6 lg:px-8"
          aria-labelledby="vision-narrative-heading"
          data-agent-topic="vision-narrative"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 id="vision-narrative-heading" className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
                Pioneertown-Meets-MCM California Ranch Retreat
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-12">
                Nestled in the rolling foothills near Pauma Valley Country Club, this private
                development blends the iconic Old West main drag of Pioneertown with warm
                modern California ranch style. The result is an elegant, livable community
                that feels both timeless and contemporary.
              </p>
            </div>
          </div>
        </section>

        {/* The Campus — image 61.8%, text on right */}
        <section
          className="bg-stone-50 py-24 sm:py-32 px-6 lg:px-8"
          aria-label="The Campus"
          data-agent-topic="campus-vision"
        >
          <div className="mx-auto max-w-7xl space-y-24">
            {[
              { src: "/images/vision/Lsx7c.jpg", alt: "Wide Main Street", heading: "Wide Main Street", desc: "A generously proportioned 28-foot paved road lined with authentic Pioneertown-style wide wooden boardwalks, covered porches, and vintage lampposts." },
              { src: "/images/vision/h7QS5.jpg", alt: "Veterinary Clinic", heading: "The Clinic", desc: "Positioned for daily convenience. A clean, inviting MCM/ranch building with large glass entry, stone foundation, and wood accents." },
              { src: "/images/vision/9GL0C.jpg", alt: "Hillside Residences", heading: "Hillside Residences", desc: "Two-story SoCal masterpieces blending MCM horizontal emphasis with ranch warmth. Upper floors offer panoramic views of the valley." },
              { src: "/images/vision/dJZk1.jpg", alt: "Native Landscape", heading: "Native Setting", desc: "Mature native oaks, drought-tolerant gardens, agave accents, and lush lawns around the play field. Bordered by existing groves." },
            ].map((item) => (
              <div key={item.heading} className="grid grid-cols-1 lg:grid-cols-[61.8fr_38.2fr] gap-8 lg:gap-12 items-center">
                <div className="relative w-full aspect-[3/2] bg-stone-200 order-2 lg:order-1">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 61.8vw, 100vw"
                  />
                </div>
                <div className="order-1 lg:order-2 lg:min-w-0">
                  <h3 className="text-2xl font-bold text-stone-900 mb-4">{item.heading}</h3>
                  <p className="text-stone-700 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Details List */}
        <section
          className="bg-white py-24 sm:py-32 px-6 lg:px-8 border-t border-stone-200"
          aria-labelledby="amenities-heading"
        >
          <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 id="amenities-heading" className="text-2xl font-bold text-stone-900 mb-6">Core Amenities</h3>
              <ul className="space-y-4 text-stone-600" role="list">
                <li className="flex gap-4">
                  <span className="text-stone-900 font-bold">01</span>
                  <span><strong>The Saloon:</strong> 2,000+ sq ft event patio, fire pits, pergola sections.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-stone-900 font-bold">02</span>
                  <span><strong>General Store:</strong> Full false-front facade with broad display windows.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-stone-900 font-bold">03</span>
                  <span><strong>Kids' Play Field:</strong> Multi-purpose grass field for soccer/baseball.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-stone-900 font-bold">04</span>
                  <span><strong>Boathouse:</strong> Rustic wood detailing overlooking a serene pond.</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-stone-900 mb-6">Residential</h3>
              <ul className="space-y-4 text-stone-600" role="list">
                <li className="flex gap-4">
                  <span className="text-stone-900 font-bold">01</span>
                  <span><strong>Four Main Homes:</strong> 2-story MCM/Ranch fusion with expansive glass.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-stone-900 font-bold">02</span>
                  <span><strong>Guest ADA Unit:</strong> Single-story, fully accessible, matching style.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-stone-900 font-bold">03</span>
                  <span><strong>Private Access:</strong> Gentle winding driveways with private turnarounds.</span>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </section>

        {/* Footer Quote */}
        <section
          className="py-24 sm:py-32 px-6 lg:px-8 bg-stone-900 text-stone-100 text-center"
          aria-labelledby="vision-quote"
        >
          <div className="mx-auto max-w-2xl">
            <blockquote id="vision-quote" className="text-2xl md:text-3xl font-normal italic leading-relaxed">
              "A one-of-a-kind 15-acre sanctuary that feels like it has always belonged
              in Pauma Valley."
            </blockquote>
          </div>
        </section>
      </article>
    </main>
  );
}
