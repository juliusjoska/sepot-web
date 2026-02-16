'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import Link from 'next/link'
import {
  Shield, Lock, Eye, EyeOff, Code2, Globe, Download,
  ArrowRight, Check, X, Minus, MessageSquareLock,
  Database, Server, KeyRound, Fingerprint, UserPlus,
  Send, Github, Terminal, Users, Zap,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Animace                                                            */
/* ------------------------------------------------------------------ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

/* ------------------------------------------------------------------ */
/*  Animated Counter                                                   */
/* ------------------------------------------------------------------ */

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, target])

  return <span ref={ref}>{count.toLocaleString('cs-CZ')}{suffix}</span>
}

/* ------------------------------------------------------------------ */
/*  Floating Particles                                                 */
/* ------------------------------------------------------------------ */

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Velké kruhy */}
      <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-accent/30 animate-particle-1" />
      <div className="absolute top-[60%] right-[15%] w-1.5 h-1.5 rounded-full bg-cyan/40 animate-particle-2" />
      <div className="absolute top-[40%] left-[60%] w-1 h-1 rounded-full bg-lime/30 animate-particle-3" />
      <div className="absolute top-[80%] left-[30%] w-2.5 h-2.5 rounded-full bg-accent/20 animate-particle-4" />
      <div className="absolute top-[15%] right-[30%] w-1 h-1 rounded-full bg-cyan/30 animate-particle-1" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[70%] left-[70%] w-1.5 h-1.5 rounded-full bg-accent-light/25 animate-particle-2" style={{ animationDelay: '5s' }} />
      {/* Linie */}
      <div className="absolute top-[35%] left-[25%] w-16 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent rotate-45 animate-particle-3" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[55%] right-[20%] w-20 h-[1px] bg-gradient-to-r from-transparent via-cyan/15 to-transparent -rotate-30 animate-particle-4" style={{ animationDelay: '7s' }} />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Typing Terminal                                                    */
/* ------------------------------------------------------------------ */

function TypingTerminal() {
  const [lines, setLines] = useState<string[]>([])
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const allLines = [
    { text: '$ sepot --list-algorithms', color: 'text-muted', delay: 0 },
    { text: '  X25519            Výměna klíčů (Diffie-Hellman)', color: 'text-foreground/80', delay: 400 },
    { text: '  XSalsa20-Poly1305 Symetrické šifrování + MAC', color: 'text-foreground/80', delay: 600 },
    { text: '  Ed25519           Digitální podpisy', color: 'text-foreground/80', delay: 800 },
    { text: '  Argon2id          Derivace klíčů z hesla', color: 'text-foreground/80', delay: 1000 },
    { text: '  BLAKE2b           Kryptografické hashování', color: 'text-foreground/80', delay: 1200 },
    { text: '', color: '', delay: 1400 },
    { text: '$ sepot --security-check', color: 'text-muted', delay: 1600 },
    { text: '  [OK] Perfect Forward Secrecy', color: 'text-accent', delay: 2000 },
    { text: '  [OK] Zero-knowledge architektura', color: 'text-accent', delay: 2200 },
    { text: '  [OK] Auditovatelný kód (AGPL-3.0)', color: 'text-accent', delay: 2400 },
    { text: '  [OK] GDPR kompatibilní', color: 'text-accent', delay: 2600 },
    { text: '', color: '', delay: 2800 },
    { text: '  Všechny kontroly prošly.', color: 'text-accent-light', delay: 3000 },
  ]

  useEffect(() => {
    if (!isInView) return
    const timers: NodeJS.Timeout[] = []
    allLines.forEach((line, i) => {
      timers.push(setTimeout(() => {
        setLines(prev => [...prev, line.text])
      }, line.delay))
    })
    return () => timers.forEach(clearTimeout)
  }, [isInView])

  return (
    <div ref={ref} className="terminal glow-cyan">
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500/80" />
        <div className="terminal-dot bg-yellow-500/80" />
        <div className="terminal-dot bg-green-500/80" />
        <span className="ml-3 text-xs text-muted">sepot-crypto -- algoritmy</span>
      </div>
      <div className="p-5 md:p-6 min-h-[300px]">
        <div className="space-y-1 text-xs md:text-sm font-mono">
          {lines.map((line, i) => {
            const config = allLines[i]
            if (!line) return <div key={i} className="h-3" />
            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={config?.color || 'text-foreground/80'}
              >
                {line.startsWith('$') ? (
                  <>
                    <span className="text-cyan">$</span>
                    {line.slice(1)}
                  </>
                ) : line.startsWith('  [OK]') ? (
                  <>
                    <span className="text-accent">  [OK]</span>
                    <span className="text-foreground/80">{line.slice(6)}</span>
                  </>
                ) : line.startsWith('  ') && !line.startsWith('  V') ? (
                  <>
                    <span className="text-accent font-semibold">{line.slice(0, 22)}</span>
                    <span className="text-muted">{line.slice(22)}</span>
                  </>
                ) : (
                  line
                )}
              </motion.p>
            )
          })}
          {lines.length < allLines.length && isInView && (
            <span className="inline-block w-2 h-4 bg-accent/70 animate-blink" />
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const stats = [
  { value: 5500, suffix: '+', label: 'Potenciálních uživatelů' },
  { value: 0, label: 'Metadata', display: 'Zero' },
  { value: 0, label: 'Source', display: 'Open' },
  { value: 0, label: 'Kompatibilní', display: 'GDPR' },
]

const problems = [
  { app: 'WhatsApp', problem: 'Sbírá metadata o tom, s kým, kdy a jak často komunikujete.', solution: 'Šepot nesbírá žádná metadata. Ani nemůže.' },
  { app: 'Telegram', problem: 'Zprávy nejsou E2E šifrované ve výchozím nastavení.', solution: 'Šepot šifruje vše end-to-end automaticky, vždy.' },
  { app: 'Signal', problem: 'Není český, vyžaduje telefonní číslo.', solution: 'Šepot je český a registrace bez telefonního čísla.' },
  { app: 'Threema', problem: 'Placená aplikace -- 5 EUR jednorázově.', solution: 'Šepot je a vždy bude zdarma a open source.' },
  { app: 'iMessage', problem: 'Funguje jen na zařízeních Apple.', solution: 'Šepot běží na iOS, Android, Windows, macOS i Linuxu.' },
  { app: 'Messenger', problem: 'Vlastněn Metou, žádné výchozí šifrování, profilování.', solution: 'Šepot neví, kdo jste. Vaše data jsou jen vaše.' },
]

const features = [
  { icon: Lock, title: 'E2E šifrování', desc: 'XSalsa20-Poly1305 šifrování s X25519 výměnou klíčů. Žádný prostředník nemůže číst vaše zprávy.', gradient: 'from-accent to-accent-dark' },
  { icon: EyeOff, title: 'Zero metadata', desc: 'Nesbíráme žádná metadata. Nevíme, s kým, kdy ani jak často komunikujete.', gradient: 'from-cyan to-cyan-light' },
  { icon: Code2, title: 'Open source', desc: 'Celý kód je veřejný pod AGPL-3.0 licencí. Kdokoli může ověřit, že děláme, co říkáme.', gradient: 'from-lime to-lime-light' },
  { icon: Database, title: 'Lokální úložiště', desc: 'Veškerá data zůstávají na vašem zařízení. Žádný cloud, žádné servery třetích stran.', gradient: 'from-accent-light to-cyan' },
  { icon: Server, title: 'P2P architektura', desc: 'Přímá komunikace přes QUIC protokol. Žádný centrální server, který by mohl být kompromitován.', gradient: 'from-cyan-light to-accent' },
  { icon: Globe, title: 'Český produkt', desc: 'Vytvořeno v Česku, pod českým právem. Česká podpora, česká komunita, GDPR nativně.', gradient: 'from-accent to-lime' },
]

type CellValue = true | false | 'partial' | string

const comparisonFeatures = [
  { label: 'E2E šifrování ve výchozím stavu' },
  { label: 'Zero metadata' },
  { label: '100% open source' },
  { label: 'Český produkt' },
  { label: 'Self-host možnost' },
  { label: 'Registrace bez telefonu' },
  { label: 'Cena' },
]

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

const chatMessages = [
  { from: 'them', text: 'Ahoj! Už jsi slyšel o Šepotu?', time: '10:42' },
  { from: 'me', text: 'Jo, ten český šifrovaný messenger?', time: '10:43' },
  { from: 'them', text: 'Přesně! E2E šifrování, žádná metadata.', time: '10:43' },
  { from: 'me', text: 'Super, přecházím na něj. 🔒', time: '10:44' },
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

/* ================================================================== */
/*  PAGE                                                               */
/* ================================================================== */

export default function HomePage() {
  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden aurora-bg">
        {/* Background effects */}
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <FloatingParticles />

        {/* Radial glow behind phone */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[120px]" />

        <div className="container relative z-10 pt-28 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left -- text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent-light text-xs font-medium backdrop-blur-sm">
                  <Shield size={14} />
                  End-to-end šifrovaný messenger z Česka
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="heading-1 mb-6">
                Vaše zprávy.{' '}
                <span className="text-shimmer">Vaše soukromí.</span>{' '}
                <br className="hidden sm:block" />
                Žádné kompromisy.
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg text-muted max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                Šepot je český open-source messenger s end-to-end šifrováním.
                Žádná metadata, žádné sledování -- jen vy a vaše konverzace.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/stahnout" className="btn-primary text-base px-8 py-4">
                  <Download size={18} />
                  Stáhnout zdarma
                </Link>
                <Link href="/bezpecnost" className="btn-outline text-base px-8 py-4">
                  Jak to funguje
                  <ArrowRight size={16} />
                </Link>
              </motion.div>

              {/* Trust signals */}
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
                {['Open Source', 'E2E šifrování', 'Bez reklam', 'GDPR'].map((badge) => (
                  <span key={badge} className="flex items-center gap-1.5 text-xs text-muted/60">
                    <Check size={12} className="text-accent/60" />
                    {badge}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right -- phone mockup */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={scaleIn}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow za telefonem */}
                <div className="absolute -inset-8 bg-accent/10 rounded-full blur-[60px] animate-pulse-glow" />

                <div className="phone-frame glow-green w-[280px] sm:w-[300px] relative animate-float-slow">
                  <div className="phone-screen">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-10" />

                    {/* Phone status bar */}
                    <div className="flex items-center justify-between px-5 py-2.5 bg-background-secondary">
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
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ delay: 1 + i * 0.4, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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

                {/* Floating message bubbles */}
                <motion.div
                  className="absolute -left-16 top-1/4 card-glass px-3 py-2 text-[10px] text-accent max-w-[140px]"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Lock size={10} className="inline mr-1" />
                  Šifrováno end-to-end
                </motion.div>

                <motion.div
                  className="absolute -right-12 bottom-1/3 card-glass px-3 py-2 text-[10px] text-cyan max-w-[130px]"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <EyeOff size={10} className="inline mr-1" />
                  Zero metadata
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            className="mt-16 lg:mt-24"
          >
            <div className="gradient-border">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-gradient">
                      {stat.display || <AnimatedCounter target={stat.value} suffix={stat.suffix} />}
                    </p>
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
                  <Eye size={16} className="text-red-500/60 group-hover:text-red-400 transition-colors" />
                  <h3 className="heading-3 text-foreground">{p.app}</h3>
                </div>
                <p className="text-sm text-muted mb-4 leading-relaxed">{p.problem}</p>
                <div className="pt-3 border-t border-border group-hover:border-accent/20 transition-colors">
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
        <FloatingParticles />
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
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                  <f.icon size={22} className="text-white" />
                </div>
                <h3 className="heading-3 text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CRYPTO / TYPING TERMINAL                                    */}
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
              <TypingTerminal />
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
                        <tr key={feat.label} className={`${i < comparisonFeatures.length - 1 ? 'border-b border-border/50' : ''} hover:bg-white/[0.02] transition-colors`}>
                          <td className="p-4 text-muted">{feat.label}</td>
                          {Object.values(comparisonData).map((vals, j) => (
                            <td key={j} className={`p-4 text-center ${j === 0 ? 'bg-accent/[0.03]' : ''}`}>
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

            <motion.div variants={fadeIn} className="text-center mt-8">
              <Link href="/srovnani" className="btn-ghost text-accent hover:text-accent-light">
                Podrobné srovnání s 6 messengery <ArrowRight size={14} />
              </Link>
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
                  className="card-glass text-center relative group"
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                >
                  {/* Step number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent text-white text-xs font-bold shadow-lg shadow-accent/30 group-hover:scale-110 transition-transform">
                      {i + 1}
                    </span>
                  </div>

                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 -right-3 w-6 h-[1px] bg-gradient-to-r from-accent/30 to-transparent" />
                  )}

                  <div className="pt-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
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
      {/*  TESTIMONIALS / TRUST                                        */}
      {/* ============================================================ */}
      <section className="py-16 relative overflow-hidden bg-background-secondary/30">
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { quote: 'Konečně messenger, kde vím, že moje zprávy jsou opravdu soukromé.', author: 'Beta tester', role: 'IT profesionál' },
              { quote: 'Žádné telefonní číslo, žádná metadata. Přesně to, co jsem hledal.', author: 'Raný uživatel', role: 'Novinář' },
              { quote: 'Open source klient i server -- to je u messengerů vzácné. Šepot to dělá správně.', author: 'Přispěvatel', role: 'Security researcher' },
            ].map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="card-glass">
                <p className="text-sm text-foreground/80 leading-relaxed mb-4 italic">
                  &bdquo;{t.quote}&ldquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users size={14} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">{t.author}</p>
                    <p className="text-[10px] text-muted">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FINAL CTA                                                    */}
      {/* ============================================================ */}
      <section className="section relative overflow-hidden aurora-bg">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <FloatingParticles />

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/8 rounded-full blur-[180px]" />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <div className="w-20 h-20 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto glow-accent-strong">
                <Shield size={36} className="text-accent" />
              </div>
            </motion.div>

            <motion.h2 variants={fadeUp} className="heading-2 mb-4">
              Začněte chránit{' '}
              <span className="text-shimmer">své soukromí</span>
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

            <motion.p variants={fadeIn} className="mt-10 text-muted/50 text-sm italic">
              &bdquo;Soukromí není zločin.&ldquo;
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
