'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  Lock, Smartphone, QrCode, ArrowRight, Shield,
  Monitor, Globe, AlertCircle, Bell, MessageSquare,
  Fingerprint, Wifi, Send
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
}

const webFeatures = [
  {
    icon: Lock,
    title: 'Stejné E2E šifrování',
    desc: 'Webový klient používá identický kryptografický protokol jako mobilní aplikace.',
    color: 'text-accent',
  },
  {
    icon: Fingerprint,
    title: 'Lokální dešifrování',
    desc: 'Vaše zprávy jsou dešifrovány pouze ve vašem prohlížeči. Server nikdy nevidí obsah.',
    color: 'text-cyan',
  },
  {
    icon: QrCode,
    title: 'Propojení přes QR kód',
    desc: 'Naskenujte QR kód z telefonu a okamžitě přistupte ke konverzacím na počítači.',
    color: 'text-lime',
  },
  {
    icon: Wifi,
    title: 'Synchronizace v reálném čase',
    desc: 'Zprávy se automaticky synchronizují mezi všemi propojenými zařízeními.',
    color: 'text-violet-400',
  },
]

export default function WebAppPage() {
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
              <strong className="text-cyan">Připravujeme</strong> — Webový klient Šepotu je ve vývoji. Přidejte se na čekací listinu a budete první, kdo se dozví o spuštění.
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
                Přistupujte ke konverzacím z prohlížeče — se stejným end-to-end šifrováním jako v mobilní aplikaci.
              </p>
            </motion.div>

            {/* Mockup ukázka */}
            <motion.div
              className="card-hover border-accent/10 border"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
            >
              <div className="text-center py-6">
                {/* Animovaný mockup */}
                <div className="w-full max-w-sm mx-auto mb-6">
                  <div className="terminal overflow-hidden">
                    <div className="terminal-header">
                      <div className="terminal-dot bg-red-500" />
                      <div className="terminal-dot bg-yellow-500" />
                      <div className="terminal-dot bg-green-500" />
                      <span className="ml-2 text-xs text-muted flex items-center gap-1.5">
                        <Lock size={10} className="text-accent" />
                        Šepot Web — E2E šifrováno
                      </span>
                    </div>
                    <div className="p-4 space-y-2.5">
                      {[
                        { from: 'alice', text: 'Ahoj, píšu ti z prohlížeče!', time: '14:22' },
                        { from: 'bob', text: 'Super, jak to funguje?', time: '14:22' },
                        { from: 'alice', text: 'Naskenovala jsem QR z telefonu. Hotovo za 3 vteřiny.', time: '14:23' },
                      ].map((msg, i) => (
                        <motion.div
                          key={i}
                          className={`flex ${msg.from === 'bob' ? 'justify-end' : 'justify-start'}`}
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ delay: i * 0.4 + 0.5, duration: 0.3 }}
                        >
                          <div className={`max-w-[80%] rounded-2xl px-3 py-1.5 ${
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
                    <div className="border-t border-border p-3 flex items-center gap-2">
                      <div className="flex-1 px-3 py-1.5 rounded-xl bg-background border border-border text-xs text-muted/40">
                        Napište zprávu...
                      </div>
                      <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center">
                        <Send size={12} className="text-accent" />
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[10px] text-muted/40 mb-6">Ukázka rozhraní — webový klient bude dostupný po spuštění mobilní aplikace</p>

                <Link href="/demo" className="btn-primary inline-flex">
                  <Bell size={16} /> Přidat se na čekací listinu <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>

            {/* Jak to bude fungovat */}
            <motion.div
              className="mt-8"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
            >
              <h3 className="heading-3 mb-4 text-center">Jak to bude fungovat</h3>
              <div className="space-y-3 text-sm text-left max-w-sm mx-auto">
                {[
                  { step: '1', icon: Smartphone, text: 'Nainstalujte si Šepot na telefon a vytvořte účet' },
                  { step: '2', icon: Monitor, text: 'Otevřete web.sepot.cz v prohlížeči na počítači' },
                  { step: '3', icon: QrCode, text: 'V aplikaci přejděte do Nastavení → Propojená zařízení' },
                  { step: '4', icon: MessageSquare, text: 'Naskenujte QR kód a okamžitě komunikujte z prohlížeče' },
                ].map((item, i) => (
                  <motion.div
                    key={item.step}
                    className="flex items-start gap-3 group"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 + 0.8 }}
                  >
                    <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent/20 transition-colors">
                      {item.step}
                    </span>
                    <div className="flex items-center gap-2">
                      <item.icon size={14} className="text-muted shrink-0" />
                      <p className="text-foreground/70">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Funkce webového klienta */}
      <section className="py-12 md:py-16 bg-background-secondary/30">
        <div className="container">
          <motion.div className="text-center mb-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="heading-2 mb-4">Plánované <span className="text-gradient">funkce</span></h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {webFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="gradient-border"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <feature.icon size={24} className={`${feature.color} mb-3`} />
                <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-muted">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security note + CTA */}
      <section className="section aurora-bg">
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <Shield size={32} className="text-accent mx-auto mb-4" />
            <h2 className="heading-2 mb-4">Bezpečnost na prvním místě</h2>
            <p className="text-muted mb-8 max-w-lg mx-auto">
              Webový klient bude používat stejné kryptografické protokoly jako mobilní aplikace — X25519, XSalsa20-Poly1305, Double Ratchet. Žádné kompromisy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="btn-primary">
                Přidat se na čekací listinu <ArrowRight size={16} />
              </Link>
              <Link href="/bezpecnost" className="btn-outline">
                <Shield size={16} /> Více o bezpečnosti
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
