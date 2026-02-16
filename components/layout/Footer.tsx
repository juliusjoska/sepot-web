import Link from 'next/link'
import Image from 'next/image'
import { Github, ExternalLink, Shield, Heart } from 'lucide-react'

const footerLinks = {
  product: [
    { href: '/funkce', label: 'Funkce' },
    { href: '/bezpecnost', label: 'Bezpečnost' },
    { href: '/srovnani', label: 'Srovnání' },
    { href: '/stahnout', label: 'Stáhnout' },
    { href: '/demo', label: 'Čekací listina' },
  ],
  info: [
    { href: '/o-projektu', label: 'O projektu' },
    { href: '/kontakt', label: 'Kontakt' },
    { href: '/app', label: 'Web App' },
    { href: 'https://github.com/juliusjoska/sepot', label: 'GitHub', external: true },
    { href: 'https://ajtak.it', label: 'ajtak.it', external: true },
  ],
  legal: [
    { href: '/ochrana-soukromi', label: 'Ochrana soukromí' },
    { href: '/podminky', label: 'Obchodní podmínky' },
    { href: '/cookies', label: 'Cookies' },
    { href: '/bezpecnostni-politika', label: 'Bezpečnostní politika' },
    { href: '/zodpovedne-hlaseni', label: 'Zodpovědné hlášení' },
    { href: '/zpracovatelska-smlouva', label: 'Zpracovatelská smlouva' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-background-secondary/30">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />

      <div className="container relative py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-9 h-9 rounded-lg overflow-hidden ring-1 ring-white/10 group-hover:ring-accent/40 transition-all duration-300">
                <Image src="/logo-64.png" alt="Šepot" width={36} height={36} />
              </div>
              <span className="text-xl font-bold group-hover:text-accent-light transition-colors">Šepot</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs mb-5">
              Soukromý messenger s end-to-end šifrováním. Vytvořeno v Česku, otevřený kód, navždy zdarma.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent/5 border border-accent/10 text-xs text-accent">
                <Shield size={11} /> E2E šifrování
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan/5 border border-cyan/10 text-xs text-cyan">
                Open Source
              </span>
            </div>

            <p className="text-xs text-muted/50 italic">&bdquo;Soukromí není zločin.&ldquo;</p>
          </div>

          {/* Product */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-sm font-semibold text-foreground mb-4">Produkt</h4>
            <ul className="space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-accent-light transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-foreground mb-4">Více</h4>
            <ul className="space-y-2.5">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  {'external' in link ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted hover:text-accent-light transition-colors duration-300 inline-flex items-center gap-1"
                    >
                      {link.label} <ExternalLink size={11} />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-accent-light transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-foreground mb-4">Právní</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-accent-light transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-border/50">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted/50 flex items-center gap-1">
            &copy; {new Date().getFullYear()} Šepot. Vytvořeno s
            <Heart size={11} className="text-red-400/60 inline" />
            v Česku |{' '}
            <a href="https://juliusjoska.cz" target="_blank" rel="noopener" className="hover:text-accent-light transition-colors">
              Julius Joska
            </a>
            {' | '}
            <a href="https://ajtak.it" target="_blank" rel="noopener" className="hover:text-accent-light transition-colors">
              ajtak.it
            </a>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/juliusjoska/sepot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted/40 hover:text-accent-light transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
