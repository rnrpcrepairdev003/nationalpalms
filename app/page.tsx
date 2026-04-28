import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'National Palm Trees | Premium Palms, Delivery & Crane Installation',
  description: 'Shop premium palm trees with nationwide delivery and professional crane installation. Queen, King, Bismarck, Date palms and more.',
}

const palms = [
  { name: 'Queen Palm', price: 'From $150', tag: 'Best Seller', img: '/IMG_2102.webp' },
  { name: 'Canary Island Date Palm', price: 'From $400', tag: 'Premium', img: '/IMG_7408.webp' },
  { name: 'Bismarck Palm', price: 'From $500', tag: 'Rare Find', img: '/IMG_6710.webp' },
  { name: 'Date Palm', price: 'From $250', tag: null, img: '/DJI_0267.webp' },
]

const stats = [
  { value: '48', label: 'States Served' },
  { value: '5,000+', label: 'Trees Delivered' },
  { value: '15+', label: 'Years Experience' },
  { value: '100%', label: 'Satisfaction Guarantee' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-14 relative min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/IMG_2146.webp"
            alt="Palm trees illuminated at night"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#080808]/75" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 flex flex-col items-center">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/logo.webp"
              alt="National Palms"
              width={100}
              height={100}
              className="invert"
            />
          </div>

          <p className="text-[#52b788] text-xs tracking-[0.25em] uppercase mb-5">
            Delivering Nationwide · All 48 States
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none tracking-tight mb-6">
            Premium Palm Trees<br />
            <span className="text-[#52b788]">Delivered to Your Door.</span>
          </h1>
          <p className="text-[#999] text-base leading-relaxed mb-10 max-w-lg">
            Hand-selected specimen palms shipped anywhere in the United States — with professional crane installation available at your site.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/shop" className="btn-green px-8 py-4 text-sm">
              Shop Palm Trees
            </Link>
            <Link href="/contact" className="btn-outline px-8 py-4 text-sm">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-b border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#1c1c1c]">
            {stats.map((s) => (
              <div key={s.label} className="py-8 px-6 text-center">
                <p className="text-3xl font-bold text-white">{s.value}</p>
                <p className="text-[#444] text-xs mt-1.5 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 border-b border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#444] text-xs uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-3xl font-bold text-white mb-10">Services</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

            {/* Delivery */}
            <Link href="/services" className="group relative overflow-hidden rounded-xl aspect-[16/9]">
              <Image
                src="/IMG_0373.webp"
                alt="Nationwide palm tree delivery"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[#52b788] text-xs uppercase tracking-widest mb-2">Service 01</p>
                <h3 className="text-2xl font-bold text-white mb-2">Nationwide Delivery</h3>
                <p className="text-[#888] text-sm leading-relaxed max-w-sm">
                  Climate-controlled transport to all 48 contiguous states. Every tree is root-protected and unloaded on-site.
                </p>
                <span className="inline-block mt-4 text-[#52b788] text-sm">Learn more →</span>
              </div>
            </Link>

            {/* Crane Installation */}
            <Link href="/services" className="group relative overflow-hidden rounded-xl aspect-[16/9]">
              <Image
                src="/IMG_0830.webp"
                alt="Professional crane installation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[#52b788] text-xs uppercase tracking-widest mb-2">Service 02</p>
                <h3 className="text-2xl font-bold text-white mb-2">Crane Installation</h3>
                <p className="text-[#888] text-sm leading-relaxed max-w-sm">
                  Certified crane operators for palms up to 60 ft. Residential, commercial, pools, slopes — we handle it all.
                </p>
                <span className="inline-block mt-4 text-[#52b788] text-sm">Learn more →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── NATIONWIDE BANNER ── */}
      <section className="py-16 border-b border-[#1c1c1c] bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="text-[#52b788] text-xs uppercase tracking-widest mb-3">Nationwide Coverage</p>
            <h2 className="text-3xl font-bold text-white">We deliver to all 48 contiguous states.</h2>
            <p className="text-[#555] text-sm mt-3 max-w-lg leading-relaxed">
              From California to Florida, Texas to New York — our fleet delivers premium specimen palms directly to your property, anywhere in the continental US.
            </p>
          </div>
          <Link href="/contact" className="btn-green shrink-0 px-8 py-4">
            Get a Delivery Quote
          </Link>
        </div>
      </section>

      {/* ── SHOP / PALMS ── */}
      <section className="py-20 border-b border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-baseline justify-between mb-10">
            <div>
              <p className="text-[#444] text-xs uppercase tracking-widest mb-3">Our Collection</p>
              <h2 className="text-3xl font-bold text-white">Shop Palm Trees</h2>
            </div>
            <Link href="/shop" className="text-[#52b788] text-sm hover:text-[#7fd4a8] transition-colors shrink-0">
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {palms.map((palm) => (
              <Link
                key={palm.name}
                href="/shop"
                className="group bg-[#0d0d0d] border border-[#1c1c1c] rounded-xl overflow-hidden hover:border-[#2e2e2e] transition-colors"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={palm.img}
                    alt={palm.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {palm.tag && (
                    <span className="absolute top-3 left-3 bg-[#080808]/80 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-1 rounded-md tracking-wide">
                      {palm.tag}
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <p className="text-white text-xs font-medium leading-snug">{palm.name}</p>
                  <p className="text-[#52b788] text-xs mt-1.5 font-medium">{palm.price}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link href="/shop" className="btn-outline px-8 py-3">
              Browse All Species
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24">
        <div className="max-w-lg mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-[#555] text-sm mb-8 leading-relaxed">
            Tell us your species, quantity, and zip code. We respond within 24 hours with a full price breakdown — delivery included.
          </p>
          <Link href="/contact" className="btn-green px-9 py-4">
            Request a Free Quote
          </Link>
        </div>
      </section>
    </>
  )
}
