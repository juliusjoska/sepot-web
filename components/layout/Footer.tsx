import Link from 'next/link'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'

const footerLinks = {
  product: [
    { href: '/funkce', label: 'Funkce' },
    { href: '/bezpecnost', label: 'Bezpečnost' },
    { href: '/srovnani', label: 'Srovnání' },
    { href: '/stahnout', label: 'Stáhnout' },
  ],
  info: [
    { href: '/o-projektu', label: 'O projektu' },
    { href: '/kontakt', label: 'Kontakt' },
    { href: 'https://github.com/juliusjoska/sepot', label: 'GitHub', external: true },
    { href: 'https://ajtak.it', label: 'ajtak.it', external: true },
  ],
  legal: [
    { href: '/ochrana-soukromi', label: 'Ochrana soukromí' },
    { href: '/podminky', label: 'Podmínky užití' },
    { href: '/cookies', label: 'Cookies' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary/30">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg overflow-hidden ring-1 ring-white/10">
                <Image src="/logo-64.png" alt="Šepot" width={32} height={32} />
              </div>
              <span className="text-lg font-bold">Šepot</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs mb-4">
              Soukromý messenger s end-to-end šifrováním. Vytvořeno v Česku, otevřený kód, navždy zdarma.
            </p>
            <p className="text-xs text-muted/60 italic">&bdquo;Soukromí není zločin.&ldquo;</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Produkt</h4>
            <ul className="space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Více</h4>
            <ul className="space-y-2.5">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  {'external' in link ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted hover:text-foreground transition-colors inline-flex items-center gap-1"
                    >
                      {link.label} <ExternalLink size={11} />
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-muted hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Právní</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted/60">
            &copy; {new Date().getFullYear()} Šepot. Vytvořil{' '}
            <a href="https://juliusjoska.cz" target="_blank" rel="noopener" className="hover:text-foreground transition-colors">
              Julius Joska
            </a>
            {' | '}
            <a href="https://ajtak.it" target="_blank" rel="noopener" className="hover:text-foreground transition-colors">
              ajtak.it
            </a>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/juliusjoska/sepot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted/60 hover:text-foreground transition-colors"
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
