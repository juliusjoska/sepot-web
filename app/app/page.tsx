'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  Lock, Smartphone, QrCode, ArrowRight, Shield,
  Monitor, Globe, AlertCircle, Loader2
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
}

export default function WebAppPage() {
  const [tab, setTab] = useState<'login' | 'qr'>('login')

  return (
    <div className="mesh-gradient grid-pattern min-h-screen">
      {/* Banner */}
      <section className="pt-24 pb-4">
        <div className="container">
          <motion.div
            className="rounded-xl bg-cyan/10 border border-cyan/20 px-5 py-3 flex items-center gap-3 text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <AlertCircle size={18} className="text-cyan shrink-0" />
            <p className="text-foreground/80">
              <strong className="text-cyan">Připravujeme</strong> -- Webový klient Šepotu je ve vývoji. Zatím se můžete podívat, jak bude vypadat.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section pb-12">
        <div className="container">
          <div className="max-w-lg mx-auto">
            {/* Logo + heading */}
            <motion.div
              className="text-center mb-10"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
            >
              <div className="w-16 h-16 rounded-2xl overflow-hidden ring-1 ring-white/10 mx-auto mb-6 shadow-lg shadow-accent/10">
                <Image src="/logo-128.png" alt="Šepot" width={64} height={64} />
              </div>
              <h1 className="heading-2 mb-3">Šepot <span className="text-gradient">Web</span></h1>
              <p className="text-muted text-sm">
                Přistupte ke svým konverzacím přímo z prohlížeče.
                Všechny zprávy jsou šifrovány end-to-end.
              </p>
            </motion.div>

            {/* Tab switcher */}
            <motion.div
              className="flex gap-1 p-1 rounded-xl bg-background-secondary border border-border mb-6"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
            >
              <button
                onClick={() => setTab('login')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  tab === 'login'
                    ? 'bg-accent/10 text-accent border border-accent/20'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                <Monitor size={15} />
                Přihlášení
              </button>
              <button
                onClick={() => setTab('qr')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  tab === 'qr'
                    ? 'bg-accent/10 text-accent border border-accent/20'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                <QrCode size={15} />
                Připojit telefon
              </button>
            </motion.div>

            {/* Content */}
            <motion.div
              className="card-hover border-accent/10 border"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
            >
              {tab === 'login' ? (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs text-muted mb-1.5">Uživatelské jméno</label>
                    <input
                      type="text"
                      placeholder="vaše_jméno"
                      disabled
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm text-foreground placeholder:text-muted/40 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted mb-1.5">Heslo</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      disabled
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm text-foreground placeholder:text-muted/40 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <button
                    disabled
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Lock size={16} />
                    Přihlásit se (brzy)
                  </button>
                  <p className="text-[10px] text-muted/50 text-center">
                    Vaše přihlašovací údaje nikdy neopouštějí vaše zařízení.
                    Klíče jsou derivovány lokálně pomocí Argon2id.
                  </p>
                </div>
              ) : (
                <div className="text-center py-6">
                  {/* QR placeholder */}
                  <div className="w-48 h-48 mx-auto mb-6 rounded-xl bg-background border-2 border-dashed border-border flex items-center justify-center">
                    <div className="text-center">
                      <QrCode size={48} className="text-muted/30 mx-auto mb-2" />
                      <p className="text-[10px] text-muted/40">QR kód bude zde</p>
                    </div>
                  </div>

                  <h3 className="heading-3 mb-2">Připojte telefon</h3>
                  <div className="space-y-3 text-sm text-muted text-left max-w-xs mx-auto">
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                      <p>Otevřete Šepot na telefonu</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                      <p>Přejděte do Nastavení &gt; Propojená zařízení</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                      <p>Naskenujte QR kód na této obrazovce</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Security note */}
            <motion.div
              className="mt-6 gradient-border text-center"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
            >
              <Shield size={24} className="text-accent mx-auto mb-2" />
              <p className="text-xs text-muted leading-relaxed">
                Webový klient používá stejné E2E šifrování jako mobilní aplikace.
                Vaše zprávy jsou dešifrovány pouze ve vašem prohlížeči.
                Server nikdy nevidí obsah zpráv.
              </p>
            </motion.div>

            {/* Links */}
            <motion.div
              className="mt-8 text-center space-y-3"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={4}
            >
              <p className="text-sm text-muted">
                Nemáte účet?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/stahnout" className="btn-outline text-sm">
                  <Smartphone size={15} />
                  Stáhnout aplikaci
                </Link>
                <Link href="/demo" className="btn-ghost text-sm text-accent">
                  Přidat se na čekací listinu <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
