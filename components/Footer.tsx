import Link from 'next/link'

const links = [
  { href: '/shop', label: 'Shop Palms' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Get a Quote' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#1c1c1c]">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <p className="text-white text-sm font-semibold mb-3">National Palm Trees</p>
          <p className="text-[#555] text-sm leading-relaxed max-w-xs">
            Premium palms delivered and installed nationwide. Residential, commercial, and everything in between.
          </p>
        </div>

        <div>
          <p className="text-[#444] text-xs uppercase tracking-widest mb-4">Pages</p>
          <ul className="space-y-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[#555] hover:text-white text-sm transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[#444] text-xs uppercase tracking-widest mb-4">Contact</p>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="tel:+18005556789" className="text-[#555] hover:text-white transition-colors">
                (800) 555-6789
              </a>
            </li>
            <li>
              <a href="mailto:info@nationalpalm.com" className="text-[#555] hover:text-white transition-colors">
                info@nationalpalm.com
              </a>
            </li>
            <li className="text-[#555]">Mon – Sat · 7AM – 6PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#3a3a3a]">
          <p>© {new Date().getFullYear()} National Palm Trees. All rights reserved.</p>
          <p>Licensed & Insured · Nationwide Delivery</p>
        </div>
      </div>
    </footer>
  )
}
