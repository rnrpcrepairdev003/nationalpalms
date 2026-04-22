import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Nationwide palm tree delivery and professional crane installation. Residential and commercial.',
}

const services = [
  {
    n: '01',
    label: 'Delivery',
    title: 'Nationwide Delivery',
    description: 'We transport your palms in specialized flatbed and enclosed trailers, securing each tree to prevent root and canopy damage. Every delivery includes on-site unloading.',
    features: [
      'Climate-controlled flatbed transport',
      'Root ball protection & moisture management',
      'All 48 contiguous states',
      'On-site unloading and positioning',
      'Pre-delivery site assessment',
      'Scheduled windows with 24-hour notice',
    ],
    cta: 'Get a Delivery Quote',
    img: '/IMG_0373.webp',
    alt: 'Flatbed trailer loaded with palm trees for delivery',
  },
  {
    n: '02',
    label: 'Crane Installation',
    title: 'Crane Installation',
    description: 'Large specimen palms require professional lifting equipment. Our certified crane operators have placed thousands of trees in every site configuration — pools, slopes, rooftops, and tight passages.',
    features: [
      'Palms from 6 ft to 60 ft installed',
      'Certified, licensed crane operators',
      'Residential, commercial & high-rise',
      'Tight-access and slope installations',
      'Backfill, staking & initial watering',
      'Post-installation care guide',
    ],
    cta: 'Schedule Crane Service',
    img: '/IMG_0830.webp',
    alt: 'Crane installing large palm trees at a residential job site',
  },
]

const steps = [
  { n: '01', title: 'Request a Quote', body: 'Tell us your species, quantity, heights, and zip code. We respond within 24 hours with an all-inclusive price.' },
  { n: '02', title: 'Site Assessment', body: 'For crane jobs we review photos or visit the site to plan access and equipment. For delivery we confirm drop-zone access.' },
  { n: '03', title: 'Tree Approval', body: 'You approve photos and measurements of the exact trees being delivered — no surprises on delivery day.' },
  { n: '04', title: 'Delivery & Install', body: 'Our crew arrives on schedule. Large trees are craned into position, staked, and watered on the spot.' },
]

const stats = [
  { value: '5,000+', label: 'Trees Delivered' },
  { value: '15+', label: 'Years Experience' },
  { value: '48', label: 'States Served' },
  { value: '100%', label: 'Satisfaction Guarantee' },
]

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-14 border-b border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-[#444] text-xs uppercase tracking-widest mb-6">What We Offer</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-none">
              Complete palm<br />tree services.
            </h1>
            <p className="text-[#555] text-base leading-relaxed max-w-sm">
              From selection to installation, we handle everything. Residential, commercial, and everything in between — anywhere in the US.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#1c1c1c]">
            {stats.map((s) => (
              <div key={s.label} className="py-10 px-8 text-center">
                <p className="text-3xl font-bold text-white">{s.value}</p>
                <p className="text-[#444] text-xs mt-2 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-20 border-b border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.n} className="flex flex-col">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-7">
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <p className="text-[#3a3a3a] text-xs uppercase tracking-widest mb-3">
                  {s.n} — {s.label}
                </p>
                <h2 className="text-2xl font-bold text-white mb-3">{s.title}</h2>
                <p className="text-[#555] text-sm leading-relaxed mb-6">{s.description}</p>

                <ul className="space-y-2 mb-8 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[#666]">
                      <span className="text-[#52b788] shrink-0 mt-px">—</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="btn-green py-3.5 w-full">
                  {s.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-b border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <p className="text-[#444] text-xs uppercase tracking-widest mb-6">How It Works</p>
              <h2 className="text-4xl font-bold text-white mb-4">Simple process,<br />exceptional results.</h2>
              <p className="text-[#555] text-sm leading-relaxed max-w-sm">
                We&apos;ve refined our process over 15 years to make it as smooth as possible — from your first call to the last stake in the ground.
              </p>
            </div>

            <div>
              {steps.map((s, i) => (
                <div
                  key={s.n}
                  className={`flex gap-8 py-8 ${i < steps.length - 1 ? 'border-b border-[#1c1c1c]' : ''}`}
                >
                  <span className="text-[#252525] text-3xl font-bold tabular-nums shrink-0 w-10 leading-none mt-0.5">
                    {s.n}
                  </span>
                  <div>
                    <p className="text-white font-semibold mb-2">{s.title}</p>
                    <p className="text-[#555] text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-lg mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-[#555] text-sm mb-8 leading-relaxed">
            Fill out our quote form and we&apos;ll get back to you within 24 hours with a full price breakdown.
          </p>
          <Link href="/contact" className="btn-green px-10 py-4">
            Request a Free Quote
          </Link>
        </div>
      </section>
    </>
  )
}
