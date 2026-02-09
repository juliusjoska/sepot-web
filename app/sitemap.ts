import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sepot.cz'
  const pages = [
    '', '/funkce', '/bezpecnost', '/srovnani', '/o-projektu',
    '/stahnout', '/kontakt', '/ochrana-soukromi', '/podminky', '/cookies',
  ]
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: p === '' ? 'weekly' : 'monthly',
    priority: p === '' ? 1.0 : 0.8,
  }))
}
