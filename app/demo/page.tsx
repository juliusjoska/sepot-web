'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Bell, Shield, Lock, ArrowRight, CheckCircle2,
  Loader2, AlertCircle, Mail, User, Sparkles,
  MessageSquare, Send
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
}

const benefits = [
  'Přednostní přístup k beta verzi',
  'Informace o novinkách a pokroku',
  'Žádný spam -- maximálně 1 e-mail měsíčně',
  'Možnost ovlivnit vývoj zpětnou vazbou',
]

/* Interaktivní chat mockup */
const mockMessages = [
  { from: 'alice', text: 'Ahoj! Zkoušíš Šepot?', time: '14:22' },
  { from: 'bob', text: 'Jo, právě jsem se zaregistroval. Bez telefonního čísla!', time: '14:22' },
  { from: 'alice', text: 'Přesně. A všechno je šifrované end-to-end.', time: '14:23' },
  { from: 'bob', text: 'Vidím ten Double Ratchet v akci. Nový klíč pro každou zprávu.', time: '14:23' },
  { from: 'alice', text: 'A server nikdy nevidí obsah. Zero knowledge.', time: '14:24' },
]

export default function DemoPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Něco se pokazilo.')
      }

      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Nepodařilo se odeslat.')
    }
  }

  return (
    <div className="mesh-gradient grid-pattern min-h-screen">
      {/* Hero */}
      <section className="section pb-12 aurora-bg">
        <div className="container text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <Bell size={14} /> Čekací listina
            </span>
          </motion.div>
          <motion.h1 className="heading-1 mb-6" initial="hidden" animate="visible" variants={fadeUp} custom={1}>
            Buďte <span className="text-shimmer">první</span>
          </motion.h1>
          <motion.p className="text-lg text-muted max-w-2xl mx-auto" initial="hidden" animate="visible" variants={fadeUp} custom={2}>
            Šepot je ve vývoji. Přidejte se k čekací listině a budeme vás informovat o spuštění.
          </motion.p>
        </div>
      </section>

      {/* Interactive Preview Mockup */}
      <section className="pb-12">
        <div className="container">
          <motion.div
            className="max-w-md mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="terminal overflow-hidden">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-2 text-xs text-muted flex items-center gap-1.5">
                  <Lock size={10} className="text-accent" />
                  Šepot -- E2E šifrováno
                </span>
              </div>
              <div className="p-4 space-y-3 max-h-[320px] overflow-y-auto">
                {mockMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    className={`flex ${msg.from === 'bob' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.3 + 0.2, duration: 0.3 }}
                  >
                    <div className={`max-w-[80%] rounded-2xl px-3.5 py-2 ${
                      msg.from === 'bob'
                        ? 'bg-accent/20 border border-accent/30 rounded-br-md'
                        : 'bg-white/[0.05] border border-border rounded-bl-md'
                    }`}>
                      <p className="text-xs text-foreground/90">{msg.text}</p>
                      <p className="text-[9px] text-muted/50 text-right mt-0.5 flex items-center justify-end gap-1">
                        {msg.time}
                        <Lock size={7} className="text-accent/60" />
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Input bar mockup */}
              <div className="border-t border-border p-3 flex items-center gap-2">
                <div className="flex-1 px-3 py-1.5 rounded-xl bg-background border border-border text-xs text-muted/40">
                  Napište zprávu...
                </div>
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <Send size={14} className="text-accent" />
                </div>
              </div>
            </div>
            <p className="text-[10px] text-muted/40 text-center mt-2">
              Ukázka rozhraní -- skutečná komunikace bude dostupná po spuštění
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Benefits */}
      <section className="pb-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto items-start">
            {/* Form */}
            <motion.div
              className="card-hover border-accent/20 border"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
            >
              {status === 'success' ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', bounce: 0.5 }}
                  >
                    <CheckCircle2 size={56} className="text-accent mx-auto mb-4" />
                  </motion.div>
                  <h3 className="heading-3 mb-2">Děkujeme!</h3>
                  <p className="text-sm text-muted mb-6">
                    Budeme vás informovat o spuštění Šepotu.
                    Žádný spam, slibujeme.
                  </p>
                  <Link href="/" className="btn-outline text-sm">
                    Zpět na hlavní stránku
                  </Link>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shadow-lg shadow-accent/5">
                      <Sparkles size={20} className="text-accent" />
                    </div>
                    <div>
                      <h2 className="font-semibold">Přidejte se</h2>
                      <p className="text-xs text-muted">Stačí váš e-mail</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-xs text-muted mb-1.5">
                        Jméno <span className="text-muted/50">(volitelné)</span>
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                        <input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Jan Novák"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-background border border-border text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs text-muted mb-1.5">
                        E-mail <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="jan@email.cz"
                          required
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-background border border-border text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                        />
                      </div>
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">
                        <AlertCircle size={15} />
                        {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading' || !email.trim()}
                      className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Odesílám...
                        </>
                      ) : (
                        <>
                          Přidat se na čekací listinu <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-[10px] text-muted/50 mt-4 text-center">
                    Vaše data jsou v bezpečí. Žádné sdílení s třetími stranami.
                  </p>
                </>
              )}
            </motion.div>

            {/* Benefits */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={4}>
              <h3 className="heading-3 mb-6">Co získáte</h3>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, i) => (
                  <motion.li
                    key={benefit}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                  >
                    <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/80">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Animated visuals */}
              <div className="space-y-4">
                <motion.div
                  className="gradient-border flex items-center gap-4"
                  animate={{ boxShadow: ['0 0 0 rgba(16,185,129,0)', '0 0 20px rgba(16,185,129,0.1)', '0 0 0 rgba(16,185,129,0)'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Shield size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Šifrováno od prvního dne</p>
                    <p className="text-xs text-muted">Ani my nemůžeme číst vaše zprávy</p>
                  </div>
                </motion.div>

                <motion.div
                  className="gradient-border flex items-center gap-4"
                  animate={{ boxShadow: ['0 0 0 rgba(6,182,212,0)', '0 0 20px rgba(6,182,212,0.1)', '0 0 0 rgba(6,182,212,0)'] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center shrink-0">
                    <Lock size={20} className="text-cyan" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Open source</p>
                    <p className="text-xs text-muted">Vše transparentní a ověřitelné</p>
                  </div>
                </motion.div>

                <motion.div
                  className="gradient-border flex items-center gap-4"
                  animate={{ boxShadow: ['0 0 0 rgba(132,204,22,0)', '0 0 20px rgba(132,204,22,0.1)', '0 0 0 rgba(132,204,22,0)'] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-lime/10 border border-lime/20 flex items-center justify-center shrink-0">
                    <MessageSquare size={20} className="text-lime" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Vytvořeno v Česku</p>
                    <p className="text-xs text-muted">Vaše data mimo dosah USA</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
