'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const leftLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/services', label: 'Services' },
]

const rightLinks = [
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-[#080808]/95 backdrop-blur-sm border-b border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">

          {/* Logo — desktop */}
          <Link href="/" className="shrink-0 flex items-center gap-2.5">
            <Image
              src="/logo.webp"
              alt="National Palms logo"
              width={36}
              height={36}
              className="invert"
            />
            <span className="text-white text-sm font-semibold tracking-tight">National Palms</span>
          </Link>

          {/* Center nav — desktop */}
          <nav className="hidden md:flex items-center gap-8 mx-auto">
            {[...leftLinks, ...rightLinks].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors ${
                  pathname === l.href ? 'text-white' : 'text-[#666] hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right actions — desktop */}
          <div className="hidden md:flex items-center gap-5 shrink-0">
            <a href="tel:+18005556789" className="text-[#555] hover:text-white text-sm transition-colors">
              (800) 555-6789
            </a>
            <Link href="/contact" className="btn-green px-4 py-2">
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-auto text-[#666] hover:text-white p-1 transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile slide-in drawer */}
      <div className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>

        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Drawer panel */}
        <div className={`absolute top-0 right-0 h-full w-72 bg-[#0a0a0a] border-l border-[#1c1c1c] flex flex-col transition-transform duration-300 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}>

          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-[#1c1c1c] shrink-0">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.webp" alt="National Palms logo" width={28} height={28} className="invert" />
              <span className="text-white text-sm font-semibold">National Palms</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-[#666] hover:text-white transition-colors p-1"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col px-6 pt-2 flex-1 overflow-y-auto">
            {[...leftLinks, ...rightLinks].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-4 text-base border-b border-[#141414] transition-colors ${
                  pathname === l.href ? 'text-white font-medium' : 'text-[#777] hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="px-6 py-8 border-t border-[#1c1c1c] space-y-4 shrink-0">
            <a href="tel:+18005556789" className="block text-sm text-[#555] hover:text-white transition-colors">
              (800) 555-6789
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-green py-3 w-full block text-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
