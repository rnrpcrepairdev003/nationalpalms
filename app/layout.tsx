import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://nationalpalm.com'),
  title: {
    default: 'National Palm Trees | Premium Palms, Delivery & Crane Installation',
    template: '%s | National Palm Trees',
  },
  description:
    'Shop premium palm trees — Queen, King, Date, Bismarck and more. We offer professional delivery and crane installation throughout the US.',
  keywords: [
    'palm trees for sale', 'buy palm trees', 'queen palm', 'king palm', 'date palm',
    'bismarck palm', 'palm tree delivery', 'palm tree crane installation',
    'mexican fan palm', 'canary island palm',
  ],
  icons: { icon: '/favicon.ico' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'National Palm Trees',
    title: 'National Palm Trees | Premium Palms, Delivery & Crane Installation',
    description: 'Shop premium palm trees with professional delivery and crane installation.',
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'National Palm Trees',
  url: 'https://nationalpalm.com',
  description: 'Premium palm trees with delivery and crane installation.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
