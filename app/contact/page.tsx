import type { Metadata } from 'next'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Request a Quote',
  description: 'Get a free quote for palm tree purchase, delivery, or crane installation. We respond within 24 hours.',
}

const services = [
  'Purchase Palm Trees',
  'Delivery Only',
  'Crane Installation',
  'Delivery + Installation',

  'Commercial / Large Project',
]

const palmTypes = [
  'Queen Palm',
  'King Palm',
  'Mexican Fan Palm',
  'Date Palm',
  'Canary Island Date Palm',
  'Bismarck Palm',
  'Mediterranean Fan Palm',
  'Pindo Palm',
  'Not Sure – Need Advice',
  'Other',
]


const inputClass = 'w-full bg-[#080808] border border-[#2a2a2a] text-white placeholder-[#444] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#3a7d44] transition-colors'
const labelClass = 'block text-xs text-[#777] mb-2 uppercase tracking-wider'

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-14 border-b border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-[#444] text-xs uppercase tracking-widest mb-4">Free Quote</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">Get a Quote</h1>
          <p className="text-[#555] text-sm max-w-md leading-relaxed">
            Tell us about your project and we&apos;ll respond within 24 hours with a detailed, all-inclusive price.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Form */}
            <div className="lg:col-span-3">
              <form className="space-y-5 bg-[#111] border border-[#222] rounded-2xl p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>First Name</label>
                    <input type="text" placeholder="John" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Last Name</label>
                    <input type="text" placeholder="Smith" className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Email</label>
                    <input type="email" placeholder="john@example.com" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input type="tel" placeholder="(555) 000-0000" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Delivery ZIP / City</label>
                  <input type="text" placeholder="e.g. Scottsdale, AZ 85251" className={inputClass} />
                </div>

                <div>
                  <label className={labelClass}>Service Needed</label>
                  <select className={inputClass + ' appearance-none text-[#888]'}>
                    <option value="">Select a service…</option>
                    {services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Palm Species (if known)</label>
                  <select className={inputClass + ' appearance-none text-[#888]'}>
                    <option value="">Select species…</option>
                    {palmTypes.map((p) => <option key={p}>{p}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Quantity</label>
                    <input type="number" min="1" placeholder="e.g. 3" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Desired Height</label>
                    <input type="text" placeholder="e.g. 15–20 ft" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Project Details</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project — site conditions, access constraints, timeline, or anything else we should know…"
                    className={inputClass + ' resize-none'}
                  />
                </div>

                <button type="submit" className="btn-green w-full py-4">
                  Submit Quote Request
                </button>
                <p className="text-[#555] text-xs text-center">We respond within 24 hours · No spam, ever</p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-10">

              <div>
                <p className="text-[#444] text-xs uppercase tracking-widest mb-5">Contact Directly</p>
                <ul className="space-y-4 text-sm">
                  <li>
                    <p className="text-[#444] text-xs mb-1">Phone</p>
                    <a href="tel:+18005556789" className="text-white hover:text-[#52b788] transition-colors">
                      (800) 555-6789
                    </a>
                  </li>
                  <li>
                    <p className="text-[#444] text-xs mb-1">Email</p>
                    <a href="mailto:info@nationalpalm.com" className="text-white hover:text-[#52b788] transition-colors">
                      info@nationalpalm.com
                    </a>
                  </li>
                  <li>
                    <p className="text-[#444] text-xs mb-1">Hours</p>
                    <span className="text-white">Mon – Sat · 7AM – 6PM</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-[#1c1c1c] pt-10">
                <p className="text-[#444] text-xs uppercase tracking-widest mb-5">Why Choose Us</p>
                <ul className="space-y-2.5">
                  {[
                    'Licensed & fully insured',
                    'Nationwide delivery fleet',
                    'Certified crane operators',
                    '15+ years in the industry',
                    '100% satisfaction guarantee',
                    'Free quotes, no obligation',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#666]">
                      <span className="text-[#52b788] shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion />
    </>
  )
}
