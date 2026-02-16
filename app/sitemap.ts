import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sepot.cz'
  const pages = [
    '', '/funkce', '/bezpecnost', '/srovnani', '/o-projektu',
    '/stahnout', '/demo', '/kontakt', '/app',
    '/ochrana-soukromi', '/podminky', '/cookies',
    '/bezpecnostni-politika', '/zodpovedne-hlaseni',
    '/zpracovatelska-smlouva',
  ]
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: p === '' ? 'weekly' : 'monthly',
    priority: p === '' ? 1.0 : p === '/app' ? 0.9 : 0.8,
  }))
}
