import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Browse our gallery of installed palm trees — residential pools, commercial properties, driveways, and large specimen placements.',
}

const photos = [
  { src: '/DJI_0280.webp', alt: 'Two large Canary Island Date Palms at luxury home', caption: 'Canary Island Date Palm installation — Luxury residence', span: 'col-span-2 row-span-2' },
  { src: '/IMG_2146.webp', alt: 'Illuminated palms at resort-style pool at night', caption: 'Night-lit palm row — Residential pool project', span: '' },
  { src: '/IMG_0413.webp', alt: 'Mature palms at luxury residential street', caption: 'Specimen palms — Upscale residential community', span: '' },
  { src: '/IMG_2317.webp', alt: 'Night crane installation of tall palms', caption: 'After-hours crane installation — Luxury estate', span: '' },
  { src: '/IMG_0830.webp', alt: 'Yellow crane lifting palm trees at job site', caption: 'Crane placement of large palms — Residential project', span: 'col-span-2' },
  { src: '/IMG_6515.webp', alt: 'Newly planted palms along desert home driveway', caption: 'Driveway palms — Desert modern home', span: '' },
  { src: '/IMG_5808.webp', alt: 'Rows of date palms at nursery', caption: 'Premium Date Palm stock — Our nursery', span: '' },
  { src: '/IMG_2103.webp', alt: 'Canary Island Date Palm by resort pool', caption: 'Pool installation — Southern California', span: '' },
  { src: '/IMG_2102.webp', alt: 'Date Palm by tropical poolscape', caption: 'Tropical poolscape — South Florida', span: '' },
  { src: '/240786F9-58EA-4A4F-BCDB-BFAD0D959D27.webp', alt: 'Two tall palms flanking modern home entrance', caption: 'Entryway palms — Modern estate', span: '' },
]

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-14 border-b border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="text-[#444] text-xs uppercase tracking-widest mb-3">Our Work</p>
            <h1 className="text-4xl font-bold text-white">Gallery</h1>
            <p className="text-[#555] text-sm mt-2">Real projects. Real results. Coast to coast.</p>
          </div>
          <Link href="/contact" className="btn-green shrink-0 px-6 py-3">
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 auto-rows-[240px]">
            {photos.map((photo) => (
              <div
                key={photo.alt}
                className={`relative overflow-hidden rounded-lg group ${photo.span}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-0 left-0 right-0 p-4 text-white text-xs font-medium translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-[#1c1c1c] mt-2">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want results like these?</h2>
          <p className="text-[#555] text-sm mb-8">Get a free quote and let our team transform your landscape.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-green px-8 py-3.5">Get a Free Quote</Link>
            <Link href="/shop" className="btn-outline px-8 py-3.5">Browse Palms</Link>
          </div>
        </div>
      </section>
    </>
  )
}
