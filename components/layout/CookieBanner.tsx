'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, Shield } from 'lucide-react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('cookie-consent')) setVisible(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="rounded-2xl border border-border bg-background-secondary/95 backdrop-blur-xl p-5 shadow-2xl shadow-black/40">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                <Cookie size={18} className="text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium mb-1">Cookies</p>
                <p className="text-xs text-muted leading-relaxed">
                  Používáme pouze technické cookies nezbytné pro fungování webu. Žádné sledovací cookies, žádná analytika třetích stran.{' '}
                  <Link href="/cookies" className="text-accent hover:text-accent-light transition-colors underline underline-offset-2">
                    Více informací
                  </Link>
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <button onClick={accept} className="btn-primary text-xs px-4 py-2">
                    Rozumím
                  </button>
                  <span className="flex items-center gap-1 text-[10px] text-muted/50">
                    <Shield size={10} /> Žádné sledování
                  </span>
                </div>
              </div>
              <button onClick={accept} className="text-muted hover:text-foreground transition-colors shrink-0 p-1 rounded-lg hover:bg-white/5">
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
