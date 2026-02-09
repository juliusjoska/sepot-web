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
  ],
  authors: [{ name: 'ajtak.it', url: 'https://ajtak.it' }],
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    siteName: 'Šepot',
    title: 'Šepot — Soukromý messenger s E2E šifrováním',
    description: 'Český messenger s end-to-end šifrováním. Žádná metadata, otevřený kód, zdarma.',
    images: [{ url: '/logo-128.png', width: 128, height: 128 }],
  },
  twitter: {
    card: 'summary',
    title: 'Šepot — Soukromý messenger z Česka',
    description: 'End-to-end šifrování, žádná metadata, open source.',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/logo-64.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Šepot',
  applicationCategory: 'CommunicationApplication',
  operatingSystem: 'iOS, Android, Windows, macOS, Linux',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CZK' },
  author: {
    '@type': 'Organization',
    name: 'ajtak.it',
    url: 'https://ajtak.it',
    taxID: '24409979',
  },
  description: 'Soukromý messenger s end-to-end šifrováním z Česka',
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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
