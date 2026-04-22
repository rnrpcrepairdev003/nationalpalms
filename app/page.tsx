import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'National Palm Trees | Premium Palms, Delivery & Crane Installation',
  description: 'Shop premium palm trees with nationwide delivery and professional crane installation. Queen, King, Bismarck, Date palms and more.',
}

const featured = [
  {
    name: 'Queen Palm',
    latin: 'Syagrus romanzoffiana',
    price: 'From $150',
    tag: 'Best Seller',
    img: '/IMG_2102.webp',
  },
  {
    name: 'Canary Island Date Palm',
    latin: 'Phoenix canariensis',
    price: 'From $400',
    tag: 'Premium',
    img: '/IMG_7408.webp',
  },
  {
    name: 'Bismarck Palm',
    latin: 'Bismarckia nobilis',
    price: 'From $500',
    tag: 'Rare Find',
    img: '/IMG_6710.webp',
  },
]

const services = [
  {
    title: 'Nationwide Delivery',
    body: 'Climate-controlled transport to all 48 contiguous states. Root-safe handling, on-site unloading included.',
  },
  {
    title: 'Crane Installation',
    body: 'Certified crane operators for palms up to 60 ft. Residential, commercial, and tight-access sites.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─── */}
      <section className="pt-14 min-h-[88vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-20">

          <div>
            <p className="text-[#52b788] text-xs tracking-[0.2em] uppercase mb-7">
              Delivery · Crane Installation
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-none mb-7">
              Premium<br />Palm Trees.
            </h1>
            <p className="text-[#666] text-base leading-relaxed mb-10 max-w-sm">
              Hand-selected specimen palms shipped anywhere in the US, with professional crane installation available nationwide.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/shop" className="btn-green px-7 py-3.5">
                Shop Palms
              </Link>
              <Link href="/contact" className="btn-outline px-7 py-3.5">
                Request a Quote
              </Link>
            </div>
          </div>

          <div className="relative h-[300px] sm:h-[380px] lg:h-[460px] overflow-hidden rounded-xl">
            <Image
              src="/DJI_0280.webp"
              alt="Canary Island Date Palms installed at luxury home"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── SERVICES STRIP ─── */}
      <section className="border-y border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1c1c1c]">
            {services.map((s) => (
              <div key={s.title} className="px-8 py-8">
                <p className="text-white text-sm font-medium mb-2">{s.title}</p>
                <p className="text-[#555] text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PALMS ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="text-xl font-semibold text-white">Featured Palms</h2>
            <Link href="/shop" className="text-[#52b788] text-sm hover:text-[#7fd4a8] transition-colors">
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {featured.map((palm) => (
              <Link
                key={palm.name}
                href="/shop"
                className="group bg-[#0d0d0d] border border-[#1c1c1c] rounded-xl overflow-hidden hover:border-[#2e2e2e] transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden">

                  <Image
                    src={palm.img}
                    alt={palm.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-white text-sm font-medium">{palm.name}</p>
                    <p className="text-[#444] text-xs italic mt-0.5">{palm.latin}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[#52b788] text-sm font-medium">{palm.price}</p>
                    <p className="text-[#3a3a3a] text-xs mt-0.5">{palm.tag}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERY + CRANE CALLOUT ─── */}
      <section className="border-t border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#1c1c1c]">

            <div className="bg-[#080808] py-16 px-10 flex flex-col justify-between gap-10">
              <div>
                <p className="text-[#3a3a3a] text-xs uppercase tracking-widest mb-5">Delivery</p>
                <h3 className="text-3xl font-bold text-white mb-4">We ship to all<br />48 states.</h3>
                <p className="text-[#555] text-sm leading-relaxed max-w-sm">
                  Every tree is secured, root-protected, and transported in climate-controlled vehicles. We unload on-site and position the tree exactly where you want it.
                </p>
              </div>
              <Link href="/services" className="btn-outline self-start px-6 py-3">
                Learn about delivery →
              </Link>
            </div>

            <div className="relative bg-[#080808] py-16 px-10 flex flex-col justify-between gap-10 overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/IMG_0830.webp"
                  alt="Crane installing a large palm tree"
                  fill
                  sizes="50vw"
                  className="object-cover opacity-15"
                />
              </div>
              <div className="relative">
                <p className="text-[#3a3a3a] text-xs uppercase tracking-widest mb-5">Crane Installation</p>
                <h3 className="text-3xl font-bold text-white mb-4">Large trees,<br />no problem.</h3>
                <p className="text-[#555] text-sm leading-relaxed max-w-sm">
                  Our certified crane operators handle palms up to 60 ft tall. Pools, slopes, rooftops — we place them precisely, every time.
                </p>
              </div>
              <Link href="/services" className="btn-outline relative self-start px-6 py-3">
                Learn about installation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─── */}
      <section className="py-24 border-t border-[#1c1c1c]">
        <div className="max-w-lg mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your landscape?</h2>
          <p className="text-[#555] text-sm mb-8 leading-relaxed">
            Get a free quote on palms, delivery, and crane installation. We respond within 24 hours.
          </p>
          <Link href="/contact" className="btn-green px-9 py-3.5">
            Request a Free Quote
          </Link>
        </div>
      </section>
    </>
  )
}
