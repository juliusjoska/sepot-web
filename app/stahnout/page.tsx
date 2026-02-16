'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  Download, Smartphone, Monitor, Terminal, Globe,
  ArrowRight, Shield, Clock, Github, Apple,
  CheckCircle2, AlertCircle
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
}

const platforms = [
  {
    name: 'Android',
    icon: Smartphone,
    status: 'soon' as const,
    desc: 'Flutter aplikace pro Android 8.0+',
    action: 'Brzy na Google Play',
    color: 'text-lime',
    bgColor: 'bg-lime/10',
    borderColor: 'border-lime/20',
  },
  {
    name: 'iOS',
    icon: Apple,
    status: 'soon' as const,
    desc: 'Flutter aplikace pro iOS 15+',
    action: 'Brzy na App Store',
    color: 'text-cyan',
    bgColor: 'bg-cyan/10',
    borderColor: 'border-cyan/20',
  },
  {
    name: 'Desktop CLI',
    icon: Terminal,
    status: 'available' as const,
    desc: 'Rust CLI klient pro Linux, macOS, Windows',
    action: 'Stáhnout z GitHubu',
    link: 'https://github.com/juliusjoska/sepot/releases',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    borderColor: 'border-accent/20',
  },
  {
    name: 'Web klient',
    icon: Globe,
    status: 'planned' as const,
    desc: 'Webový klient přímo v prohlížeči',
    action: 'Ve vývoji',
    link: '/app',
    color: 'text-violet-400',
    bgColor: 'bg-violet-400/10',
    borderColor: 'border-violet-400/20',
  },
]

const cliSteps = [
  { step: '1', cmd: 'cargo install sepot', desc: 'Instalace přes Cargo' },
  { step: '2', cmd: 'sepot init', desc: 'Inicializace a vytvoření klíčů' },
  { step: '3', cmd: 'sepot register --username alice', desc: 'Registrace na server' },
  { step: '4', cmd: 'sepot chat bob', desc: 'Začněte konverzaci' },
]

export default function StahnoutPage() {
  return (
    <div className="mesh-gradient grid-pattern min-h-screen">
      {/* Banner */}
      <section className="pt-24 pb-4">
        <div className="container">
          <motion.div
            className="rounded-xl bg-cyan/10 border border-cyan/20 px-5 py-3 flex items-center gap-3 text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' as const }}
          >
            <AlertCircle size={18} className="text-cyan shrink-0" />
            <p className="text-foreground/80">
              <strong className="text-cyan">Ve vývoji</strong> -- Šepot je aktivně vyvíjen. Mobilní aplikace budou brzy dostupné.
              CLI klient je k dispozici pro testování.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero */}
      <section className="section pb-12 aurora-bg">
        <div className="container text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <Download size={14} /> Stáhnout Šepot
            </span>
          </motion.div>
          <motion.h1 className="heading-1 mb-6" initial="hidden" animate="visible" variants={fadeUp} custom={1}>
            Získejte <span className="text-shimmer">Šepot</span>
          </motion.h1>
          <motion.p className="text-lg text-muted max-w-2xl mx-auto" initial="hidden" animate="visible" variants={fadeUp} custom={2}>
            Vyberte si svou platformu. Šepot je zdarma, open source a navždy bez reklam.
          </motion.p>
        </div>
      </section>

      {/* Platforms */}
      <section className="pb-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {platforms.map((platform, i) => (
              <motion.div
                key={platform.name}
                className={`card-hover group ${platform.borderColor} border relative ${
                  platform.status === 'available' ? 'ring-1 ring-accent/30' : ''
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                {platform.status === 'available' && (
                  <div className="absolute -top-2.5 left-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-accent text-white text-xs font-medium shadow-lg shadow-accent/30">
                      Dostupné
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl ${platform.bgColor} ${platform.borderColor} border flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <platform.icon size={28} className={platform.color} />
                  </div>
                  <div>
                    <h3 className="heading-3 group-hover:text-accent transition-colors">{platform.name}</h3>
                    <p className="text-xs text-muted">{platform.desc}</p>
                  </div>
                </div>

                {platform.status === 'available' && platform.link ? (
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center text-sm"
                  >
                    {platform.action} <ArrowRight size={14} />
                  </a>
                ) : platform.status === 'planned' && platform.link ? (
                  <Link
                    href={platform.link}
                    className="flex items-center gap-2 justify-center py-2.5 rounded-xl bg-white/[0.03] border border-border text-sm text-muted hover:text-accent hover:border-accent/30 transition-all"
                  >
                    <Globe size={14} /> {platform.action} -- Náhled
                  </Link>
                ) : platform.status === 'soon' ? (
                  <div className="flex items-center gap-2 justify-center py-2.5 rounded-xl bg-white/[0.03] border border-border text-sm text-muted">
                    <Clock size={14} /> {platform.action}
                  </div>
                ) : (
                  <div className="flex items-center gap-2 justify-center py-2.5 rounded-xl bg-white/[0.03] border border-border text-sm text-muted/60">
                    <Clock size={14} /> {platform.action}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="py-12 md:py-16 bg-background-secondary/30">
        <div className="container">
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="heading-2 mb-4">Jak to <span className="text-gradient">vypadá</span></h2>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <div className="phone-frame mx-auto max-w-[300px]">
              <div className="phone-screen relative aspect-[9/19]">
                <Image
                  src="/screenshots/sepot-screen1.png"
                  alt="Šepot -- ukázka aplikace"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CLI Install */}
      <section className="section">
        <div className="container">
          <motion.div className="text-center mb-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="heading-2 mb-4">Instalace <span className="text-gradient">CLI klienta</span></h2>
            <p className="text-muted max-w-xl mx-auto">
              Pro nadšence a vývojáře. CLI klient funguje v terminálu na všech hlavních platformách.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-4">
            {cliSteps.map((step, i) => (
              <motion.div
                key={step.step}
                className="flex items-start gap-4 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0 text-accent font-mono text-sm font-bold group-hover:bg-accent/30 transition-colors">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="terminal group-hover:border-accent/30 transition-colors">
                    <div className="px-4 py-2.5 text-sm font-mono">
                      <span className="text-accent">$</span> <span className="text-foreground/90">{step.cmd}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted mt-1.5 ml-1">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 md:py-16 bg-background-secondary/30">
        <div className="container">
          <motion.div
            className="max-w-2xl mx-auto card-hover"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h3 className="heading-3 mb-4">Systémové požadavky</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted text-xs uppercase tracking-wide mb-2">CLI klient</p>
                <ul className="space-y-1.5">
                  {['Linux (x64, ARM64)', 'macOS 12+ (Intel, Apple Silicon)', 'Windows 10/11 (x64)', 'Rust 1.75+ (pro kompilaci ze zdrojů)'].map((req) => (
                    <li key={req} className="flex items-center gap-2 text-foreground/70">
                      <CheckCircle2 size={13} className="text-accent shrink-0" /> {req}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-muted text-xs uppercase tracking-wide mb-2">Mobilní (připravuje se)</p>
                <ul className="space-y-1.5">
                  {['Android 8.0+ (API 26)', 'iOS 15+', 'Min. 100 MB volného místa', 'Internetové připojení'].map((req) => (
                    <li key={req} className="flex items-center gap-2 text-foreground/70">
                      <CheckCircle2 size={13} className="text-accent shrink-0" /> {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section aurora-bg">
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="heading-2 mb-4">Nechcete čekat?</h2>
            <p className="text-muted mb-8 max-w-lg mx-auto">
              Přidejte se k čekací listině a budeme vás informovat ihned po vydání mobilní aplikace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="btn-primary">
                Přidat se na čekací listinu <ArrowRight size={16} />
              </Link>
              <a
                href="https://github.com/juliusjoska/sepot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Github size={16} /> Zdrojový kód
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
