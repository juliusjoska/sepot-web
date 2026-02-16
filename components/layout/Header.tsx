'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Shield, Github, Globe } from 'lucide-react'

const navLinks = [
  { href: '/funkce', label: 'Funkce' },
  { href: '/bezpecnost', label: 'Bezpečnost' },
  { href: '/srovnani', label: 'Srovnání' },
  { href: '/o-projektu', label: 'O projektu' },
  { href: '/stahnout', label: 'Stáhnout' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Zamknout scroll při otevřeném mobilním menu
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/70 backdrop-blur-2xl border-b border-border/50 shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group relative z-10">
          <div className="w-8 h-8 rounded-lg overflow-hidden ring-1 ring-white/10 group-hover:ring-accent/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/20">
            <Image src="/logo-64.png" alt="Šepot" width={32} height={32} />
          </div>
          <span className="text-lg font-bold text-foreground group-hover:text-accent-light transition-colors duration-300">Šepot</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm text-muted hover:text-foreground transition-colors duration-300 rounded-lg group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full group-hover:w-6 transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://github.com/juliusjoska/sepot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 text-sm text-muted hover:text-foreground transition-colors duration-300 rounded-lg"
          >
            <Github size={15} />
            GitHub
          </a>
          <Link href="/app" className="flex items-center gap-1.5 px-3 py-2 text-sm text-muted hover:text-foreground transition-colors duration-300 rounded-lg">
            <Globe size={15} />
            Web App
          </Link>
          <Link href="/stahnout" className="btn-primary text-sm px-5 py-2.5 gap-1.5">
            Stáhnout <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative z-10 p-2 text-muted hover:text-foreground transition-colors"
          aria-label="Menu"
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu - fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-0 bg-background/95 backdrop-blur-2xl z-40"
          >
            <div className="flex flex-col justify-center items-center h-full gap-2 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-2xl font-semibold text-foreground/80 hover:text-accent transition-colors text-center"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                className="flex flex-col gap-3 mt-8 w-full max-w-xs"
              >
                <Link
                  href="/app"
                  onClick={() => setMobileOpen(false)}
                  className="btn-outline text-center"
                >
                  <Globe size={16} />
                  Web App
                </Link>
                <Link
                  href="/stahnout"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary text-center"
                >
                  <Shield size={16} />
                  Stáhnout zdarma
                </Link>
              </motion.div>

              {/* Mobile footer links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="absolute bottom-8 flex items-center gap-4 text-sm text-muted/60"
              >
                <a
                  href="https://github.com/juliusjoska/sepot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                >
                  <Github size={14} /> GitHub
                </a>
                <span>|</span>
                <a
                  href="https://ajtak.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  ajtak.it
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
