'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Heart, Users, Code, GitBranch, ArrowRight,
  Check, Clock, Terminal, Smartphone, Monitor,
  Shield, Zap, Globe, ExternalLink, Target, Eye
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
}

const phases = [
  {
    phase: 'Fáze 1',
    title: 'CLI klient',
    status: 'done' as const,
    items: [
      'Rust backend server',
      'CLI klient pro Linux/macOS/Windows',
      'E2E šifrování (X25519 + XSalsa20-Poly1305)',
      'Registrace a přihlášení',
      'Textové zprávy 1:1',
      'Double Ratchet protokol',
    ],
  },
  {
    phase: 'Fáze 2',
    title: 'Mobilní aplikace',
    status: 'active' as const,
    items: [
      'Flutter aplikace pro Android a iOS',
      'Skupinové chaty s E2E šifrováním',
      'Sdílení souborů a obrázků',
      'Hlasové zprávy',
      'Push notifikace',
      'Mizící zprávy',
    ],
  },
  {
    phase: 'Fáze 3',
    title: 'Desktop a ekosystém',
    status: 'planned' as const,
    items: [
      'Nativní desktop aplikace',
      'Synchronizace více zařízení',
      'Webová verze',
      'Self-hosting dokumentace',
      'API pro boty a integrace',
      'Bezpečnostní audit',
    ],
  },
  {
    phase: 'Fáze 4',
    title: 'Pokročilé funkce',
    status: 'planned' as const,
    items: [
      'Šifrované VoIP hovory',
      'Video hovory',
      'Federace serverů',
      'Decentralizovaná architektura',
      'Pluginový systém',
      'Lokalizace do dalších jazyků',
    ],
  },
]

const stats = [
  { label: 'Jazyk backendu', value: 'Rust', icon: Terminal },
  { label: 'Mobilní framework', value: 'Flutter', icon: Smartphone },
  { label: 'Transportní protokol', value: 'QUIC', icon: Zap },
  { label: 'Kryptografie', value: 'libsodium', icon: Shield },
  { label: 'Licence', value: 'AGPL-3.0', icon: Code },
  { label: 'Desktop', value: 'CLI (Rust)', icon: Monitor },
]

const values = [
  {
    icon: Shield,
    title: 'Soukromí na prvním místě',
    desc: 'Každé architektonické rozhodnutí děláme s ohledem na soukromí uživatele. Žádné kompromisy kvůli pohodlí nebo monetizaci.',
  },
  {
    icon: Code,
    title: 'Transparentnost',
    desc: 'Kompletně otevřený zdrojový kód. Klient i server. Kdokoliv může ověřit, že děláme to, co říkáme.',
  },
  {
    icon: Target,
    title: 'Bezpečnost ověřená praxí',
    desc: 'Používáme osvědčené kryptografické algoritmy. Žádné vlastní vynálezy, žádná security through obscurity.',
  },
  {
    icon: Heart,
    title: 'Komunita',
    desc: 'Šepot je projekt komunity. Vítáme příspěvky, nápady a konstruktivní kritiku od kohokoliv.',
  },
]

export default function OProjektuPage() {
  return (
    <div className="mesh-gradient grid-pattern min-h-screen">
      {/* Hero */}
      <section className="section pb-12">
        <div className="container text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <Heart size={14} /> O projektu Šepot
            </span>
          </motion.div>
          <motion.h1 className="heading-1 mb-6" initial="hidden" animate="visible" variants={fadeUp} custom={1}>
            Soukromí <span className="text-gradient">pro každého</span>
          </motion.h1>
          <motion.p className="text-lg text-muted max-w-2xl mx-auto" initial="hidden" animate="visible" variants={fadeUp} custom={2}>
            Šepot vznikl z přesvědčení, že soukromá komunikace je základní lidské právo.
            Ne luxus, ne funkce navíc -- základ.
          </motion.p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-12 md:py-16 bg-background-secondary/30">
        <div className="container">
          <motion.div className="grid md:grid-cols-2 gap-10 items-center" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} custom={0}>
              <h2 className="heading-2 mb-4">Proč <span className="text-gradient">Šepot</span>?</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  V době, kdy velké technologické firmy sbírají a prodávají naše data,
                  jsme se rozhodli vytvořit alternativu. Messenger, který respektuje vaše soukromí
                  a kde vy máte plnou kontrolu.
                </p>
                <p>
                  Signal ukázal, že E2E šifrování může být uživatelsky přívětivé.
                  My jdeme dál: otevřený server, self-hosting, registrace bez telefonního čísla
                  a minimální metadata.
                </p>
                <p>
                  Šepot není jen aplikace. Je to manifest. Říkáme, že soukromí
                  není zločin a komunikace patří jen vám.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} custom={1}>
              <div className="terminal">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-green-500" />
                  <span className="ml-2 text-xs text-muted">manifest.txt</span>
                </div>
                <div className="p-5 text-sm font-mono space-y-2">
                  <p className="text-accent">Věříme, že:</p>
                  <p className="text-foreground/80">1. Soukromí je právo, ne produkt.</p>
                  <p className="text-foreground/80">2. Kód musí být otevřený a ověřitelný.</p>
                  <p className="text-foreground/80">3. Server nesmí vidět vaše zprávy.</p>
                  <p className="text-foreground/80">4. Anonymita je legitimní potřeba.</p>
                  <p className="text-foreground/80">5. Technologie má sloužit lidem.</p>
                  <p className="mt-3 text-muted">-- Tým Šepotu</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="heading-2 mb-4">Naše <span className="text-gradient">hodnoty</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                className="card-hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <val.icon size={24} className="text-accent mb-3" />
                <h3 className="heading-3 mb-2">{val.title}</h3>
                <p className="text-sm text-muted">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 md:py-16 bg-background-secondary/30">
        <div className="container">
          <motion.div className="grid md:grid-cols-2 gap-10 items-center" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} custom={0}>
              <h2 className="heading-2 mb-4">Kdo za tím <span className="text-gradient">stojí</span></h2>
              <div className="space-y-4">
                <div className="card-hover">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <Users size={22} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Julius Joska</h3>
                      <p className="text-sm text-muted">Zakladatel a hlavní vývojář</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70">
                    Vývojář a IT nadšenec z Česka. Stojí za projektem ajtak.it a dalšími open-source nástroji.
                    Věří, že technologie má sloužit lidem, ne naopak.
                  </p>
                </div>

                <div className="card-hover">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-cyan/20 flex items-center justify-center">
                      <Globe size={22} className="text-cyan" />
                    </div>
                    <div>
                      <h3 className="font-semibold">ajtak.it</h3>
                      <p className="text-sm text-muted">Vývojová firma</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70">
                    Česká firma zaměřená na vývoj softwaru, webových aplikací a mobilních řešení.
                    Šepot je náš open-source projekt pro komunitu.
                  </p>
                  <a
                    href="https://ajtak.it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-light transition-colors mt-2"
                  >
                    ajtak.it <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} custom={1}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="card-hover text-center">
                    <stat.icon size={24} className="text-accent mx-auto mb-2" />
                    <p className="font-semibold text-sm">{stat.value}</p>
                    <p className="text-xs text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section">
        <div className="container">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="heading-2 mb-4">Roadmapa <span className="text-gradient">vývoje</span></h2>
            <p className="text-muted max-w-xl mx-auto">
              Kam směřujeme a co nás čeká. Transparentní plán bez marketingových slibů.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                className={`card-hover relative ${
                  phase.status === 'active' ? 'border-accent/40' : ''
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-2.5 py-0.5 rounded-md text-xs font-medium ${
                    phase.status === 'done'
                      ? 'bg-accent/10 text-accent border border-accent/20'
                      : phase.status === 'active'
                      ? 'bg-cyan/10 text-cyan border border-cyan/20'
                      : 'bg-white/5 text-muted border border-border'
                  }`}>
                    {phase.phase}
                  </span>
                  <h3 className="heading-3">{phase.title}</h3>
                  {phase.status === 'done' && (
                    <span className="ml-auto flex items-center gap-1 text-xs text-accent">
                      <Check size={14} /> Hotovo
                    </span>
                  )}
                  {phase.status === 'active' && (
                    <span className="ml-auto flex items-center gap-1 text-xs text-cyan">
                      <Clock size={14} /> Probíhá
                    </span>
                  )}
                  {phase.status === 'planned' && (
                    <span className="ml-auto flex items-center gap-1 text-xs text-muted">
                      <Clock size={14} /> Plánováno
                    </span>
                  )}
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                      {phase.status === 'done' ? (
                        <Check size={14} className="text-accent mt-0.5 shrink-0" />
                      ) : (
                        <div className="w-3.5 h-3.5 rounded-full border border-border mt-0.5 shrink-0" />
                      )}
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute */}
      <section className="py-12 md:py-16 bg-background-secondary/30">
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <GitBranch size={40} className="text-accent mx-auto mb-4" />
            <h2 className="heading-2 mb-4">Přispějte k <span className="text-gradient">Šepotu</span></h2>
            <p className="text-muted max-w-lg mx-auto mb-8">
              Šepot je open source. Můžete přispět kódem, nahlásit chyby,
              navrhnout funkce nebo pomoci s překladem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/juliusjoska/sepot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                GitHub repozitář <ArrowRight size={16} />
              </a>
              <Link href="/kontakt" className="btn-outline">
                <Eye size={16} /> Kontaktujte nás
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
