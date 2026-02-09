'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'

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
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="rounded-2xl border border-border bg-background-secondary/95 backdrop-blur-xl p-5 shadow-2xl shadow-black/40">
            <div className="flex items-start gap-3">
              <Cookie size={20} className="text-accent mt-0.5 shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-muted leading-relaxed">
                  Používáme pouze technické cookies nezbytné pro fungování webu. Žádné sledovací cookies, žádná analytika třetích stran.{' '}
                  <Link href="/cookies" className="text-accent hover:text-accent-light transition-colors underline underline-offset-2">
                    Více informací
                  </Link>
                </p>
                <div className="flex gap-2 mt-3">
                  <button onClick={accept} className="btn-primary text-xs px-4 py-2">
                    Rozumím
                  </button>
                </div>
              </div>
              <button onClick={accept} className="text-muted hover:text-foreground transition-colors shrink-0">
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
