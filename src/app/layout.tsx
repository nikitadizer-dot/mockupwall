import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const oswald = Oswald({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-oswald' })

const APP_STORE_URL = 'https://apps.apple.com/us/app/wallapp-gallery-wall-designer/id6800613900'
const SITE_URL = 'https://www.mockupwall.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'MockupWall – Wall Art & Gallery Wall Mockup Generator',
  description:
    'Free AI wall art mockup generator for iOS. Place your art, prints, and posters in realistic room scenes with true scale, frames, and shadows — in seconds. Free to download.',
  authors: [{ name: 'Nikita Cheremisinov' }],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'MockupWall – Wall Art & Gallery Wall Mockup Generator',
    description:
      'AI wall art mockup generator for iOS. Place your art in realistic interior scenes with accurate frames, lighting, and scale — in seconds.',
    url: SITE_URL,
    siteName: 'MockupWall',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'MockupWall – Wall Art Mockup Generator',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MockupWall – Wall Art & Gallery Wall Mockup Generator',
    description:
      'AI wall art mockup generator for iOS. Place your art in realistic interior scenes with accurate frames, lighting, and scale — in seconds.',
    images: ['/og-image.png'],
  },
}

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  // Matches the App Store listing name (app.md) so Google can tie the two together
  name: 'Wallapp: Gallery Wall Designer',
  alternateName: 'MockupWall',
  operatingSystem: 'iOS',
  applicationCategory: 'DesignApplication',
  url: SITE_URL,
  downloadUrl: APP_STORE_URL,
  installUrl: APP_STORE_URL,
  image: `${SITE_URL}/assets/app-icon.png`,
  sameAs: [APP_STORE_URL],
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description:
    'AI wall art mockup generator. Place your artwork, prints, and posters in realistic interior scenes with accurate frames, lighting, shadows, and scale.',
  publisher: {
    '@type': 'Organization',
    name: 'MockupWall',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/app-icon.png` },
  },
}

// Standalone brand-entity node — strengthens entity recognition / knowledge-panel eligibility.
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MockupWall',
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/app-icon.png` },
  sameAs: [APP_STORE_URL],
}

// WebSite node names the site entity and enables the sitelinks searchbox treatment.
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MockupWall',
  url: SITE_URL,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${oswald.variable}`}>{children}</body>
    </html>
  )
}
