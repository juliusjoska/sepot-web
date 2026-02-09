'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  Shield,
  Lock,
  Eye,
  EyeOff,
  Code2,
  Smartphone,
  Globe,
  Users,
  Download,
  ArrowRight,
  Check,
  X,
  Minus,
  MessageSquareLock,
  Database,
  GitBranch,
  Cpu,
  UserPlus,
  Send,
  Github,
  Terminal,
  Fingerprint,
  Server,
  KeyRound,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const stats = [
  { value: '5 500+', label: 'Potenciálních uživatelů' },
  { value: 'Zero', label: 'Metadata' },
  { value: 'Open', label: 'Source' },
  { value: 'GDPR', label: 'Kompatibilní' },
]

const problems = [
  {
    app: 'WhatsApp',
    problem: 'Sbírá metadata o tom, s kým, kdy a jak často komunikujete.',
    solution: 'Šepot nesbírá žádná metadata. Ani nemůže.',
  },
  {
    app: 'Telegram',
    problem: 'Zprávy nejsou E2E šifrované ve výchozím nastavení.',
    solution: 'Šepot šifruje vše end-to-end automaticky, vždy.',
  },
  {
    app: 'Signal',
    problem: 'Není český, vyžaduje telefonní číslo.',
    solution: 'Šepot je český a registrace bez telefonního čísla.',
  },
  {
    app: 'Threema',
    problem: 'Placená aplikace — 5 EUR jednorázově.',
    solution: 'Šepot je a vždy bude zdarma a open source.',
  },
  {
    app: 'iMessage',
    problem: 'Funguje jen na zařízeních Apple.',
    solution: 'Šepot běží na iOS, Android, Windows, macOS i Linuxu.',
  },
]

const features = [
  {
    icon: Lock,
    title: 'E2E šifrování',
    desc: 'XSalsa20-Poly1305 šifrování s X25519 výměnou klíčů. Žádný prostředník nemůže číst vaše zprávy.',
    gradient: 'from-accent to-accent-dark',
  },
  {
    icon: EyeOff,
    title: 'Zero metadata',
    desc: 'Nesbíráme žádná metadata. Nevíme, s kým, kdy ani jak často komunikujete.',
    gradient: 'from-cyan to-cyan-light',
  },
  {
    icon: Code2,
    title: 'Open source',
    desc: 'Celý kód je veřejný pod MIT licencí. Kdokoli může ověřit, že děláme, co říkáme.',
    gradient: 'from-lime to-lime-light',
  },
  {
    icon: Database,
    title: 'Lokální úložiště',
    desc: 'Veškerá data zůstávají na vašem zařízení. Žádný cloud, žádné servery třetích stran.',
    gradient: 'from-accent-light to-cyan',
  },
  {
    icon: Server,
    title: 'P2P architektura',
    desc: 'Přímá komunikace přes QUIC protokol. Žádný centrální server, který by mohl být kompromitován.',
    gradient: 'from-cyan-light to-accent',
  },
  {
    icon: Globe,
    title: 'Český produkt',
    desc: 'Vytvořeno v Česku, pod českým právem. Česká podpora, česká komunita.',
    gradient: 'from-accent to-lime',
  },
]

const cryptoAlgorithms = [
  { name: 'X25519', desc: 'Výměna klíčů (Diffie-Hellman)' },
  { name: 'XSalsa20-Poly1305', desc: 'Symetrické šifrování + MAC' },
  { name: 'Ed25519', desc: 'Digitální podpisy' },
  { name: 'Argon2id', desc: 'Derivace klíčů z hesla' },
  { name: 'libsodium', desc: 'Kryptografická knihovna' },
]

const securityFeatures = [
  'Perfect Forward Secrecy',
  'Zero-knowledge architektura',
  'Auditovatelný kód',
  'České právo (GDPR)',
]

const comparisonFeatures = [
  { label: 'E2E šifrování ve výchozím stavu' },
  { label: 'Zero metadata' },
  { label: '100% open source' },
  { label: 'Český produkt' },
  { label: 'Self-host možnost' },
  { label: 'Registrace bez telefonu' },
  { label: 'Cena' },
]

type CellValue = true | false | 'partial' | string

const comparisonData: Record<string, CellValue[]> = {
  'Šepot': [true, true, true, true, true, true, 'Zdarma'],
  'Signal': [true, 'partial', true, false, false, false, 'Zdarma'],
  'WhatsApp': [true, false, false, false, false, false, 'Zdarma'],
  'Telegram': [false, false, 'partial', false, false, false, 'Zdarma'],
  'Threema': [true, 'partial', true, false, false, true, '5 EUR'],
}

const steps = [
  { icon: Download, title: 'Stáhněte aplikaci', desc: 'Dostupná pro iOS, Android, Windows, macOS a Linux.' },
  { icon: Fingerprint, title: 'Vytvořte účet', desc: 'Žádné telefonní číslo. Stačí uživatelské jméno a heslo.' },
  { icon: UserPlus, title: 'Pozvěte přátele', desc: 'Sdílejte svůj kontakt přes QR kód nebo odkaz.' },
  { icon: Send, title: 'Pište bezpečně', desc: 'Veškerá komunikace je automaticky E2E šifrovaná.' },
]

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function ComparisonCell({ value }: { value: CellValue }) {
  if (value === true) return <Check className="text-accent mx-auto" size={18} />
  if (value === false) return <X className="text-red-500/70 mx-auto" size={18} />
  if (value === 'partial') return <Minus className="text-yellow-500/70 mx-auto" size={18} />
  return <span className="text-sm text-muted">{value}</span>
}

/* ------------------------------------------------------------------ */
/*  Chat mockup messages                                               */
/* ------------------------------------------------------------------ */

const chatMessages = [
  { from: 'them', text: 'Ahoj! Už jsi slyšel o Šepotu?', time: '10:42' },
  { from: 'me', text: 'Jo, ten český šifrovaný messenger?', time: '10:43' },
  { from: 'them', text: 'Přesně! E2E šifrování, žádná metadata.', time: '10:43' },
  { from: 'me', text: 'Super, přecházím na něj.', time: '10:44' },
]

/* ================================================================== */
/*  PAGE COMPONENT                                                     */
/* ================================================================== */

export default function HomePage() {
  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-40" />

        {/* Radial glow behind phone */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />

        <div className="container relative z-10 pt-28 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent-light text-xs font-medium">
                  <Shield size={14} />
                  End-to-end šifrovaný messenger z Česka
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="heading-1 mb-6">
                Vaše zprávy.{' '}
                <span className="text-gradient">Vaše soukromí.</span>{' '}
                <br className="hidden sm:block" />
                Žádné kompromisy.
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg text-muted max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                Šepot je český open-source messenger s end-to-end šifrováním.
                Žádná metadata, žádné sledování — jen vy a vaše konverzace.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/stahnout" className="btn-primary">
                  <Download size={16} />
                  Stáhnout zdarma
                </Link>
                <Link href="/bezpecnost" className="btn-outline">
                  Jak to funguje
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — phone mockup */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={scaleIn}
              className="flex justify-center lg:justify-end"
            >
              <div className="phone-frame glow-green w-[280px] sm:w-[300px]">
                <div className="phone-screen">
                  {/* Phone status bar */}
                  <div className="flex items-center justify-between px-5 py-2 bg-background-secondary">
                    <span className="text-[10px] text-muted">10:44</span>
                    <div className="flex items-center gap-1">
                      <div className="w-3.5 h-2 rounded-sm border border-muted/40 relative">
                        <div className="absolute inset-0.5 bg-accent rounded-[1px]" />
                      </div>
                    </div>
                  </div>

                  {/* Chat header */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-background-secondary/50">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <MessageSquareLock size={14} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-foreground">Petr</p>
                      <p className="text-[10px] text-accent flex items-center gap-1">
                        <Lock size={8} />
                        Šifrováno
                      </p>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="p-3 space-y-2 min-h-[260px] bg-background">
                    {chatMessages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + i * 0.3, duration: 0.4, ease: 'easeOut' as const }}
                        className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                            msg.from === 'me'
                              ? 'bg-accent/20 rounded-br-md'
                              : 'bg-background-tertiary rounded-bl-md'
                          }`}
                        >
                          <p className="text-[11px] text-foreground leading-snug">{msg.text}</p>
                          <p className="text-[9px] text-muted/60 text-right mt-0.5">{msg.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Encrypted badge */}
                  <div className="px-4 py-2 bg-background-secondary/50 border-t border-border">
                    <div className="flex items-center justify-center gap-1.5 text-[9px] text-accent/80">
                      <Lock size={8} />
                      End-to-end šifrováno &middot; XSalsa20-Poly1305
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            className="mt-16 lg:mt-20"
          >
            <div className="gradient-border">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-xs text-muted mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PROBLEMS                                                     */}
      {/* ============================================================ */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeUp} className="heading-2 mb-4">
              Víte, kdo všechno čte{' '}
              <span className="text-gradient-warm">vaše zprávy</span>?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted max-w-2xl mx-auto">
              Většina messengerů sbírá vaše data, metadata nebo nešifruje zprávy ve výchozím nastavení.
              Šepot dělá věci jinak.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {problems.map((p) => (
              <motion.div key={p.app} variants={fadeUp} className="card-hover group">
                <div className="flex items-center gap-2 mb-3">
                  <Eye size={16} className="text-red-500/60" />
                  <h3 className="heading-3 text-foreground">{p.app}</h3>
                </div>
                <p className="text-sm text-muted mb-4 leading-relaxed">{p.problem}</p>
                <div className="pt-3 border-t border-border">
                  <div className="flex items-start gap-2">
                    <Shield size={14} className="text-accent mt-0.5 shrink-0" />
                    <p className="text-sm text-accent-light leading-relaxed">{p.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FEATURES                                                     */}
      {/* ============================================================ */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeUp} className="heading-2 mb-4">
              Bezpečnost{' '}
              <span className="text-gradient">bez kompromisů</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted max-w-2xl mx-auto">
              Každý aspekt Šepotu je navržen s ohledem na vaše soukromí a bezpečnost.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeUp} className="card-hover group">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-105 transition-transform`}>
                  <f.icon size={20} className="text-white" />
                </div>
                <h3 className="heading-3 text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CRYPTO / TERMINAL                                            */}
      {/* ============================================================ */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="heading-2 mb-4">
                Kryptografie na{' '}
                <span className="text-gradient-cool">nejvyšší úrovni</span>
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                Používáme prověřené kryptografické algoritmy. Žádné vlastní vynálezy, žádné zadní vrátka.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="max-w-3xl mx-auto">
              <div className="terminal glow-cyan">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500/80" />
                  <div className="terminal-dot bg-yellow-500/80" />
                  <div className="terminal-dot bg-green-500/80" />
                  <span className="ml-3 text-xs text-muted">sepot-crypto — algoritmy</span>
                </div>

                <div className="p-5 md:p-6 space-y-4">
                  {/* Algorithms */}
                  <div className="space-y-2.5">
                    <p className="text-xs text-muted">
                      <span className="text-cyan">$</span> sepot --list-algorithms
                    </p>
                    {cryptoAlgorithms.map((algo) => (
                      <div key={algo.name} className="flex items-start gap-3 pl-4">
                        <span className="text-accent font-mono text-sm font-semibold shrink-0 min-w-[180px]">
                          {algo.name}
                        </span>
                        <span className="text-muted text-sm">{algo.desc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Separator */}
                  <div className="border-t border-border" />

                  {/* Security features */}
                  <div className="space-y-2">
                    <p className="text-xs text-muted">
                      <span className="text-cyan">$</span> sepot --security-features
                    </p>
                    {securityFeatures.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 pl-4">
                        <Check size={14} className="text-accent shrink-0" />
                        <span className="text-sm text-foreground">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Status */}
                  <div className="pt-2">
                    <p className="text-xs text-accent">
                      <span className="text-cyan">$</span>{' '}
                      <span className="text-muted">status:</span> Všechny kontroly prošly{' '}
                      <span className="text-accent">&#x2714;</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  COMPARISON TABLE                                             */}
      {/* ============================================================ */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="heading-2 mb-4">
                Jak si stojíme oproti{' '}
                <span className="text-gradient-warm">konkurenci</span>
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                Detailní srovnání s nejpoužívanějšími messengery na trhu.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="max-w-4xl mx-auto overflow-x-auto">
              <div className="min-w-[640px]">
                <div className="terminal">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500/80" />
                    <div className="terminal-dot bg-yellow-500/80" />
                    <div className="terminal-dot bg-green-500/80" />
                    <span className="ml-3 text-xs text-muted">srovnání messengerů</span>
                  </div>

                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 text-muted font-medium w-[200px]">Funkce</th>
                        {Object.keys(comparisonData).map((app) => (
                          <th
                            key={app}
                            className={`p-4 font-semibold text-center ${
                              app === 'Šepot' ? 'text-accent' : 'text-foreground'
                            }`}
                          >
                            {app}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonFeatures.map((feat, i) => (
                        <tr key={feat.label} className={i < comparisonFeatures.length - 1 ? 'border-b border-border/50' : ''}>
                          <td className="p-4 text-muted">{feat.label}</td>
                          {Object.values(comparisonData).map((vals, j) => (
                            <td key={j} className="p-4 text-center">
                              <ComparisonCell value={vals[i]} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HOW IT WORKS                                                 */}
      {/* ============================================================ */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="heading-2 mb-4">
                Začněte za{' '}
                <span className="text-gradient">pár minut</span>
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                Žádné složité nastavování. Stáhněte, vytvořte účet a začněte bezpečně komunikovat.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  className="card-glass text-center relative"
                >
                  {/* Step number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent text-white text-xs font-bold">
                      {i + 1}
                    </span>
                  </div>

                  <div className="pt-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <step.icon size={22} className="text-accent" />
                    </div>
                    <h3 className="heading-3 text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FINAL CTA                                                    */}
      {/* ============================================================ */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/8 rounded-full blur-[150px]" />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto glow-green">
                <Shield size={28} className="text-accent" />
              </div>
            </motion.div>

            <motion.h2 variants={fadeUp} className="heading-2 mb-4">
              Začněte chránit{' '}
              <span className="text-gradient">své soukromí</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-muted mb-8 text-lg leading-relaxed">
              Stáhněte si Šepot a přidejte se k lidem, kteří berou soukromí vážně.
              Zdarma, open source, navždy.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="/stahnout" className="btn-primary text-base px-8 py-4">
                <Download size={18} />
                Stáhnout Šepot zdarma
              </Link>
              <a
                href="https://github.com/juliusjoska/sepot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-base px-8 py-4"
              >
                <Github size={18} />
                GitHub
              </a>
            </motion.div>

            <motion.p variants={fadeIn} className="mt-10 text-muted/60 text-sm italic">
              &bdquo;Soukromí není zločin.&ldquo;
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
