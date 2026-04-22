'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'How far do you deliver?',
    a: 'All 48 contiguous US states. Delivery cost is based on distance and tree size — your quote includes a full breakdown.',
  },
  {
    q: 'How quickly can you deliver?',
    a: 'Most orders ship within 5–10 business days. Rush delivery is available for an additional fee.',
  },
  {
    q: 'Do I need a crane for my palm?',
    a: 'Palms under 10 ft can often be installed by hand or skid steer. Trees 10 ft and taller typically require crane service for safe placement.',
  },
  {
    q: 'Will the palm survive transplanting?',
    a: 'Yes — when properly root-pruned, packaged, and planted in the right conditions. Our team prepares every tree for a successful transplant.',
  },
  {
    q: 'Can I see the actual tree before purchase?',
    a: "Absolutely. For specimen palms we photograph and measure the exact tree being delivered so you know what you're getting.",
  },
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 border-t border-[#1c1c1c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — heading */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-[#444] text-xs uppercase tracking-widest mb-5">FAQ</p>
            <h2 className="text-3xl font-bold text-white mb-4">Common questions.</h2>
            <p className="text-[#555] text-sm leading-relaxed max-w-sm">
              Everything you need to know about ordering, delivery, and installation. Can't find your answer?{' '}
              <a href="tel:+18005556789" className="text-[#52b788] hover:text-[#7fd4a8] transition-colors">
                Call us directly.
              </a>
            </p>
          </div>

          {/* Right — accordion */}
          <div>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.q} className={`border-b border-[#1c1c1c] ${i === 0 ? 'border-t' : ''}`}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                >
                  <span className={`text-sm font-medium transition-colors ${isOpen ? 'text-white' : 'text-[#aaa] group-hover:text-white'}`}>
                    {faq.q}
                  </span>
                  <span className={`shrink-0 text-[#444] transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-48 pb-5' : 'max-h-0'}`}>
                  <p className="text-[#555] text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            )
          })}
          </div>

        </div>
      </div>
    </section>
  )
}
