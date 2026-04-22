import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Shop Palm Trees',
  description: 'Browse our full collection of premium palm trees. Queen, King, Date, Bismarck, and more — with delivery and crane installation.',
}

const palms = [
  {
    name: 'Queen Palm',
    latin: 'Syagrus romanzoffiana',
    price: '$150 – $400',
    height: '10–25 ft',
    zone: '9–11',
    tag: 'Best Seller',
    img: '/IMG_2103.webp',
  },
  {
    name: 'King Palm',
    latin: 'Archontophoenix cunninghamiana',
    price: '$200 – $600',
    height: '15–35 ft',
    zone: '9–11',
    tag: 'Popular',
    img: '/IMG_2773.webp',
  },
  {
    name: 'Mexican Fan Palm',
    latin: 'Washingtonia robusta',
    price: '$100 – $350',
    height: '30–80 ft',
    zone: '9–11',
    tag: null,
    img: '/IMG_5909.webp',
  },
  {
    name: 'Date Palm',
    latin: 'Phoenix dactylifera',
    price: '$250 – $800',
    height: '15–50 ft',
    zone: '9–11',
    tag: null,
    img: '/DJI_0267.webp',
  },
  {
    name: 'Canary Island Date Palm',
    latin: 'Phoenix canariensis',
    price: '$400 – $1,200',
    height: '15–40 ft',
    zone: '9–11',
    tag: 'Premium',
    img: '/IMG_7408.webp',
  },
  {
    name: 'Bismarck Palm',
    latin: 'Bismarckia nobilis',
    price: '$500 – $1,500',
    height: '20–50 ft',
    zone: '9–11',
    tag: 'Rare Find',
    img: '/IMG_6710.webp',
  },
  {
    name: 'Mediterranean Fan Palm',
    latin: 'Chamaerops humilis',
    price: '$120 – $380',
    height: '6–15 ft',
    zone: '8–11',
    tag: 'Cold Hardy',
    img: '/IMG_0413.webp',
  },
  {
    name: 'Pindo Palm',
    latin: 'Butia capitata',
    price: '$150 – $450',
    height: '10–20 ft',
    zone: '8–11',
    tag: 'Cold Hardy',
    img: '/IMG_5808.webp',
  },
]

export default function ShopPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-14 border-b border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="text-[#444] text-xs uppercase tracking-widest mb-3">Our Collection</p>
            <h1 className="text-4xl font-bold text-white">Shop Palms</h1>
            <p className="text-[#555] text-sm mt-2">
              {palms.length} species available · All heights · Delivery & crane installation nationwide
            </p>
          </div>
          <Link href="/contact" className="btn-green shrink-0 px-6 py-3">
            Custom Order
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="py-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {palms.map((palm) => (
              <Link
                key={palm.name}
                href="/contact"
                className="group bg-[#0d0d0d] border border-[#1c1c1c] rounded-xl overflow-hidden hover:border-[#2e2e2e] transition-colors flex flex-col"
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
                  <div className="absolute inset-0 bg-[#080808]/0 group-hover:bg-[#080808]/20 transition-colors duration-300 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                    <span className="bg-[#3a7d44] text-white text-xs font-medium px-5 py-2.5 rounded-md">
                      Request Quote →
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-white text-xs font-medium leading-snug">{palm.name}</p>
                  <p className="text-[#3a3a3a] text-[10px] italic mt-0.5 truncate">{palm.latin}</p>
                  <div className="flex items-center justify-between mt-2 gap-1">
                    <p className="text-[#444] text-[10px]">Zone {palm.zone} · {palm.height}</p>
                    <p className="text-[#52b788] text-xs font-medium shrink-0">{palm.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="border-t border-[#1c1c1c] mt-px">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1c1c1c] text-sm">
            <div className="py-8 px-8">
              <p className="text-white font-medium mb-1.5">Every tree is hand-selected</p>
              <p className="text-[#555] leading-relaxed">We photograph and measure the exact specimen before delivery — no surprises.</p>
            </div>
            <div className="py-8 px-8">
              <p className="text-white font-medium mb-1.5">Delivery to all 48 states</p>
              <p className="text-[#555] leading-relaxed">Climate-controlled transport with root-ball protection. Most orders ship in 5–10 days.</p>
            </div>
            <div className="py-8 px-8">
              <p className="text-white font-medium mb-1.5">Don&apos;t see what you need?</p>
              <p className="text-[#555] leading-relaxed">
                We source specialty and rare palms on request.{' '}
                <Link href="/contact" className="text-[#52b788] hover:text-[#7fd4a8] transition-colors">
                  Contact us →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
