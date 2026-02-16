import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/layout/CookieBanner'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://sepot.cz'),
  title: {
    default: 'Šepot — Soukromý messenger s E2E šifrováním z Česka',
    template: '%s | Šepot',
  },
  description:
    'Šepot je český messenger s end-to-end šifrováním. Žádná metadata, žádné sledování, plná kontrola nad vašimi zprávami. Open source, zdarma.',
  keywords: [
    'messenger', 'šifrování', 'e2e', 'end-to-end', 'soukromí', 'privacy',
    'český messenger', 'bezpečný chat', 'open source', 'rust', 'šepot',
    'šifrovaný messenger', 'soukromá komunikace', 'zero metadata',
    'GDPR', 'česká republika',
  ],
  authors: [{ name: 'ajtak.it', url: 'https://ajtak.it' }],
  creator: 'Julius Joska',
  publisher: 'ajtak.it',
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    siteName: 'Šepot',
    title: 'Šepot — Soukromý messenger s E2E šifrováním',
    description: 'Český messenger s end-to-end šifrováním. Žádná metadata, otevřený kód, zdarma.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Šepot — Soukromý messenger z Česka',
    description: 'End-to-end šifrování, žádná metadata, open source.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/logo-64.png',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Šepot',
  alternateName: 'Sepot',
  applicationCategory: 'CommunicationApplication',
  applicationSubCategory: 'Messenger',
  operatingSystem: 'iOS, Android, Windows, macOS, Linux',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'CZK',
    availability: 'https://schema.org/PreOrder',
  },
  author: {
    '@type': 'Organization',
    name: 'ajtak.it',
    url: 'https://ajtak.it',
    taxID: '24409979',
    founder: {
      '@type': 'Person',
      name: 'Julius Joska',
      url: 'https://juliusjoska.cz',
    },
  },
  description: 'Soukromý messenger s end-to-end šifrováním z Česka. Open source, bez metadat, zdarma.',
  license: 'https://www.gnu.org/licenses/agpl-3.0.html',
  url: 'https://sepot.cz',
  downloadUrl: 'https://github.com/juliusjoska/sepot/releases',
  softwareVersion: '0.1.0',
  featureList: [
    'End-to-end šifrování (XSalsa20-Poly1305)',
    'Zero metadata',
    'Open source (AGPL-3.0)',
    'Registrace bez telefonního čísla',
    'Self-hosting',
    'Perfect Forward Secrecy',
    'QUIC protokol',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="noise-overlay">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
