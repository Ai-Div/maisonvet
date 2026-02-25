import Image from "next/image";

export default function VisionPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/vision/maisonvet-town.jpg"
            alt="Maison Vet Town Vision"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
          <p className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-6 text-gold-light">
            Our Vision
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-8">
            The Pauma Valley Enclave
          </h1>
          <p className="text-lg md:text-xl font-light text-cream/90 max-w-2xl mx-auto leading-relaxed">
            A 15-acre sanctuary where the soul of Pioneertown meets sophisticated
            Mid-Century Modern luxury.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-green-deep mb-8">
            Pioneertown-Meets-MCM California Ranch Retreat
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-12">
            Nestled in the rolling foothills near Pauma Valley Country Club, this private
            development blends the iconic Old West main drag of Pioneertown with warm
            modern California ranch style. The result is an elegant, livable community
            that feels both timeless and contemporary.
          </p>
        </div>
      </section>

      {/* The Compound Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: The Main Street */}
          <div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-200">
            <Image
              src="/images/vision/Lsx7c.jpg"
              alt="Wide Main Street"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="font-serif text-2xl mb-2">Wide Main Street</h3>
              <p className="text-sm text-cream/80 leading-relaxed line-clamp-3">
                A generously proportioned 28-foot paved road lined with authentic
                Pioneertown-style wide wooden boardwalks, covered porches, and vintage
                lampposts.
              </p>
            </div>
          </div>

          {/* Card 2: The Saloon */}
          <div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-200 lg:translate-y-12">
            <Image
              src="/images/vision/QLGAY.jpg"
              alt="The Saloon"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="font-serif text-2xl mb-2">The Saloon</h3>
              <p className="text-sm text-cream/80 leading-relaxed line-clamp-3">
                The centerpiece with deep wooden porches and swinging doors, opening
                onto a 2,000 sq ft outdoor beer garden with fire pits and string lights.
              </p>
            </div>
          </div>

          {/* Card 3: The Clinic */}
          <div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-200">
            <Image
              src="/images/vision/h7QS5.jpg"
              alt="Veterinary Clinic"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="font-serif text-2xl mb-2">The Clinic</h3>
              <p className="text-sm text-cream/80 leading-relaxed line-clamp-3">
                Positioned for daily convenience. A clean, inviting MCM/ranch building
                with large glass entry, stone foundation, and wood accents.
              </p>
            </div>
          </div>

          {/* Card 4: The Residences */}
          <div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-200">
            <Image
              src="/images/vision/9GL0C.jpg"
              alt="Hillside Residences"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="font-serif text-2xl mb-2">Hillside Residences</h3>
              <p className="text-sm text-cream/80 leading-relaxed line-clamp-3">
                Two-story SoCal masterpieces blending MCM horizontal emphasis with
                ranch warmth. Upper floors offer panoramic views of the valley.
              </p>
            </div>
          </div>

          {/* Card 5: Interiors */}
          <div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-200 lg:translate-y-12">
            <Image
              src="/images/vision/X6pTw.jpg"
              alt="MCM Interiors"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="font-serif text-2xl mb-2">Elevated Living</h3>
              <p className="text-sm text-cream/80 leading-relaxed line-clamp-3">
                Open living/kitchen great rooms with floor-to-ceiling glass and large
                terraces overlooking the avocado groves and Palomar Mountains.
              </p>
            </div>
          </div>

          {/* Card 6: Landscape */}
          <div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-200">
            <Image
              src="/images/vision/dJZk1.jpg"
              alt="Native Landscape"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="font-serif text-2xl mb-2">Native Setting</h3>
              <p className="text-sm text-cream/80 leading-relaxed line-clamp-3">
                Mature native oaks, drought-tolerant gardens, agave accents, and lush
                lawns around the play field. Bordered by existing groves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details List */}
      <section className="bg-white py-24 px-6 border-t border-stone-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-serif text-2xl text-green-deep mb-6">Core Amenities</h3>
              <ul className="space-y-4 text-stone-600">
                <li className="flex gap-4">
                  <span className="text-gold font-bold">01</span>
                  <span><strong>The Saloon:</strong> 2,000+ sq ft event patio, fire pits, pergola sections.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-bold">02</span>
                  <span><strong>General Store:</strong> Full false-front facade with broad display windows.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-bold">03</span>
                  <span><strong>Kids' Play Field:</strong> Multi-purpose grass field for soccer/baseball.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-bold">04</span>
                  <span><strong>Boathouse:</strong> Rustic wood detailing overlooking a serene pond.</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-green-deep mb-6">Residential</h3>
              <ul className="space-y-4 text-stone-600">
                <li className="flex gap-4">
                  <span className="text-gold font-bold">01</span>
                  <span><strong>Four Main Homes:</strong> 2-story MCM/Ranch fusion with expansive glass.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-bold">02</span>
                  <span><strong>Guest ADA Unit:</strong> Single-story, fully accessible, matching style.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-bold">03</span>
                  <span><strong>Private Access:</strong> Gentle winding driveways with private turnarounds.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="py-24 px-6 bg-stone-900 text-cream text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl italic leading-relaxed">
            "A one-of-a-kind 15-acre sanctuary that feels like it has always belonged
            in Pauma Valley."
          </p>
        </div>
      </section>
    </div>
  );
}
