'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Download, Smartphone, Terminal, Globe,
  ArrowRight, Shield, Clock, Github, Apple,
  CheckCircle2, AlertCircle, Bell, Code2
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
    status: 'source' as const,
    desc: 'Rust CLI klient pro Linux, macOS, Windows',
    action: 'Zdrojový kód na GitHubu',
    link: 'https://github.com/juliusjoska/sepot',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    borderColor: 'border-accent/20',
  },
  {
    name: 'Web klient',
    icon: Globe,
    status: 'soon' as const,
    desc: 'Webový klient přímo v prohlížeči',
    action: 'Ve vývoji',
    color: 'text-violet-400',
    bgColor: 'bg-violet-400/10',
    borderColor: 'border-violet-400/20',
  },
]

const cliSteps = [
  { step: '1', cmd: 'git clone https://github.com/juliusjoska/sepot.git', desc: 'Stáhněte zdrojový kód' },
  { step: '2', cmd: 'cd sepot && cargo build --release', desc: 'Zkompilujte pomocí Rust toolchainu' },
  { step: '3', cmd: './target/release/sepot init', desc: 'Inicializace a vytvoření klíčů' },
  { step: '4', cmd: './target/release/sepot register --username alice', desc: 'Registrace a začněte komunikovat' },
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
              <strong className="text-cyan">Ve vývoji</strong> — Šepot je aktivně vyvíjen. Mobilní aplikace a předkompilované binárky budou brzy dostupné.
              Prozatím je k dispozici zdrojový kód CLI klienta.
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
                className={`card-hover group ${platform.borderColor} border relative`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl ${platform.bgColor} ${platform.borderColor} border flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <platform.icon size={28} className={platform.color} />
                  </div>
                  <div>
                    <h3 className="heading-3 group-hover:text-accent transition-colors">{platform.name}</h3>
                    <p className="text-xs text-muted">{platform.desc}</p>
                  </div>
                </div>

                {platform.status === 'source' && platform.link ? (
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 justify-center py-2.5 rounded-xl bg-accent/10 border border-accent/30 text-sm text-accent hover:bg-accent/20 transition-all"
                  >
                    <Code2 size={14} /> {platform.action} <ArrowRight size={14} />
                  </a>
                ) : platform.status === 'soon' ? (
                  <Link
                    href="/demo"
                    className="flex items-center gap-2 justify-center py-2.5 rounded-xl bg-white/[0.03] border border-border text-sm text-muted hover:text-accent hover:border-accent/30 transition-all"
                  >
                    <Bell size={14} /> Zapsat se na čekací listinu
                  </Link>
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

      {/* CLI Install */}
      <section className="section">
        <div className="container">
          <motion.div className="text-center mb-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="heading-2 mb-4">Kompilace <span className="text-gradient">ze zdrojového kódu</span></h2>
            <p className="text-muted max-w-xl mx-auto">
              Pro nadšence a vývojáře. CLI klient funguje v terminálu na všech hlavních platformách.
              Potřebujete <a href="https://rustup.rs" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Rust toolchain</a>.
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
                <p className="text-muted text-xs uppercase tracking-wide mb-2">CLI klient (kompilace ze zdrojů)</p>
                <ul className="space-y-1.5">
                  {['Linux (x64, ARM64)', 'macOS 12+ (Intel, Apple Silicon)', 'Windows 10/11 (x64)', 'Rust 1.75+ (rustup.rs)'].map((req) => (
                    <li key={req} className="flex items-center gap-2 text-foreground/70">
                      <CheckCircle2 size={13} className="text-accent shrink-0" /> {req}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-muted text-xs uppercase tracking-wide mb-2">Mobilní aplikace (připravuje se)</p>
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
