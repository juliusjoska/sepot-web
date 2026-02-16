'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Lock, MessageSquare, Users, FileUp, Mic, RefreshCw,
  Shield, Zap, Eye, Key, Server,
  ArrowRight, CheckCircle2, Terminal, Smartphone
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

const modules = [
  {
    icon: Lock,
    title: 'E2E šifrování',
    subtitle: 'End-to-end, zero knowledge',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    borderColor: 'border-accent/20',
    glowColor: 'shadow-accent/10',
    features: [
      'X25519 Diffie-Hellman pro výměnu klíčů',
      'XSalsa20-Poly1305 pro šifrování zpráv',
      'Ed25519 digitální podpisy',
      'Argon2id pro derivaci klíčů z hesla',
      'Perfect Forward Secrecy (PFS)',
      'Double Ratchet protokol',
      'Automatická rotace klíčů po každé zprávě',
      'Zero-knowledge architektura serveru',
    ],
    mockup: (
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-dot bg-red-500" />
          <div className="terminal-dot bg-yellow-500" />
          <div className="terminal-dot bg-green-500" />
          <span className="ml-2 text-xs text-muted">crypto_handshake.rs</span>
        </div>
        <div className="p-4 text-xs leading-relaxed">
          <p><span className="text-cyan">let</span> <span className="text-accent-light">keypair</span> = X25519::generate();</p>
          <p><span className="text-cyan">let</span> <span className="text-accent-light">shared</span> = keypair.diffie_hellman(&peer_pub);</p>
          <p><span className="text-cyan">let</span> <span className="text-accent-light">cipher</span> = XSalsa20Poly1305::new(&shared);</p>
          <p className="text-muted mt-2">// Zpráva zašifrována. Server vidí jen metadata.</p>
          <p className="text-muted">// A ani ta ne -- jsou zahashovaná.</p>
        </div>
      </div>
    ),
  },
  {
    icon: MessageSquare,
    title: 'Zprávy',
    subtitle: 'Rychlé, bezpečné, efemérní',
    color: 'text-cyan',
    bgColor: 'bg-cyan/10',
    borderColor: 'border-cyan/20',
    glowColor: 'shadow-cyan/10',
    features: [
      'Textové zprávy se šifrováním v reálném čase',
      'Mizící zprávy s nastavitelným časovačem',
      'Potvrzení o přečtení (volitelné)',
      'Formátování textu (Markdown)',
      'Odpovědi a vlákna konverzací',
      'Reakce pomocí emoji',
      'Offline fronta zpráv',
      'Indikátor psaní v reálném čase',
    ],
    mockup: (
      <div className="phone-frame max-w-[220px] mx-auto">
        <div className="phone-screen">
          <div className="bg-background-secondary p-3 border-b border-border flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center">
              <Lock size={12} className="text-accent" />
            </div>
            <div>
              <p className="text-xs font-medium">Alice</p>
              <p className="text-[10px] text-accent">Šifrováno</p>
            </div>
          </div>
          <div className="p-3 space-y-2 min-h-[120px] bg-background">
            <div className="flex justify-end">
              <div className="bg-accent/20 rounded-xl rounded-br-sm px-3 py-1.5 max-w-[75%]">
                <p className="text-[10px]">Ahoj, jak se máš?</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-background-secondary rounded-xl rounded-bl-sm px-3 py-1.5 max-w-[75%]">
                <p className="text-[10px]">Skvěle! Šepot funguje parádně.</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-accent/20 rounded-xl rounded-br-sm px-3 py-1.5 max-w-[75%]">
                <p className="text-[10px]">Nikdo nás neslyší.</p>
                <p className="text-[8px] text-muted mt-0.5">Mizí za 5 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Users,
    title: 'Skupiny',
    subtitle: 'Skupinové chaty bez kompromisů',
    color: 'text-lime',
    bgColor: 'bg-lime/10',
    borderColor: 'border-lime/20',
    glowColor: 'shadow-lime/10',
    features: [
      'Skupinové E2E šifrování (Sender Keys)',
      'Až 256 členů ve skupině',
      'Role: admin, moderátor, člen',
      'Sdílené skupinové klíče s rotací',
      'Pozvánky přes jednorázové kódy',
      'Ztlumení notifikací pro skupinu',
      'Připnuté zprávy',
      'Ankety a hlasování',
    ],
    mockup: (
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-dot bg-red-500" />
          <div className="terminal-dot bg-yellow-500" />
          <div className="terminal-dot bg-green-500" />
          <span className="ml-2 text-xs text-muted">Vývojáři Šepotu (5)</span>
        </div>
        <div className="p-4 text-xs space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-lime font-medium">Julius:</span>
            <span className="text-foreground/80">Nová verze je venku!</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-cyan font-medium">Alice:</span>
            <span className="text-foreground/80">Konečně PFS ve skupinách</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-accent font-medium">Bob:</span>
            <span className="text-foreground/80">Testuju -- vše šlape</span>
          </div>
          <div className="text-muted text-[10px] mt-2 flex items-center gap-1">
            <Lock size={10} /> Všech 5 členů ověřeno
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: FileUp,
    title: 'Soubory',
    subtitle: 'Bezpečné sdílení souborů',
    color: 'text-accent-light',
    bgColor: 'bg-accent-light/10',
    borderColor: 'border-accent-light/20',
    glowColor: 'shadow-accent-light/10',
    features: [
      'Sdílení souborů až do 100 MB',
      'Šifrování souborů na straně klienta',
      'Fotky, videa, dokumenty, archivy',
      'Náhled obrázků v chatu',
      'Komprese před odesláním (volitelná)',
      'Automatické mazání po stažení',
      'Přenos přes QUIC protokol',
      'Pokračování přerušeného stahování',
    ],
    mockup: null,
  },
  {
    icon: Mic,
    title: 'Hlasové zprávy',
    subtitle: 'Šifrovaný hlas v reálném čase',
    color: 'text-cyan-light',
    bgColor: 'bg-cyan-light/10',
    borderColor: 'border-cyan-light/20',
    glowColor: 'shadow-cyan-light/10',
    features: [
      'Nahrávání hlasových zpráv s E2E šifrováním',
      'Opus kodek pro kvalitní zvuk',
      'Přehrávání s proměnnou rychlostí',
      'Transkripce (volitelná, lokální)',
      'Vizualizace zvukové vlny',
      'Push-to-talk režim',
      'Nízká latence díky QUIC',
      'Šifrované VoIP hovory (plánováno)',
    ],
    mockup: null,
  },
  {
    icon: RefreshCw,
    title: 'Synchronizace',
    subtitle: 'Více zařízení, jedna identita',
    color: 'text-lime-light',
    bgColor: 'bg-lime-light/10',
    borderColor: 'border-lime-light/20',
    glowColor: 'shadow-lime-light/10',
    features: [
      'Synchronizace přes šifrovaný kanál',
      'Propojení až 5 zařízení',
      'QR kód pro párování zařízení',
      'Každé zařízení má vlastní klíče',
      'Selektivní synchronizace konverzací',
      'Offline podpora s automatickým sync',
      'Export a import šifrovaných záloh',
      'Bez ukládání na serveru',
    ],
    mockup: null,
  },
]

const techStack = [
  { name: 'Rust', desc: 'Backend a CLI klient', icon: Terminal },
  { name: 'Flutter', desc: 'Mobilní aplikace (iOS + Android)', icon: Smartphone },
  { name: 'QUIC', desc: 'Transportní protokol nové generace', icon: Zap },
  { name: 'libsodium', desc: 'Kryptografická knihovna', icon: Key },
  { name: 'Argon2id', desc: 'Derivace klíčů z hesla', icon: Shield },
  { name: 'SQLCipher', desc: 'Šifrovaná lokální databáze', icon: Server },
]

export default function FunkcePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section pb-12 relative overflow-hidden aurora-bg">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6 backdrop-blur-sm">
              <Shield size={14} /> Kompletní přehled funkcí
            </span>
          </motion.div>
          <motion.h1 className="heading-1 mb-6" initial="hidden" animate="visible" variants={fadeUp} custom={1}>
            Vše, co <span className="text-shimmer">Šepot</span> umí
          </motion.h1>
          <motion.p className="text-lg text-muted max-w-2xl mx-auto" initial="hidden" animate="visible" variants={fadeUp} custom={2}>
            Šest klíčových modulů pro skutečně soukromou komunikaci.
            Každý navržen s důrazem na bezpečnost, výkon a uživatelský komfort.
          </motion.p>
        </div>
      </section>

      {/* Modules */}
      {modules.map((mod, idx) => (
        <section key={mod.title} className={`py-12 md:py-20 ${idx % 2 === 1 ? 'bg-background-secondary/30' : ''}`}>
          <div className="container">
            <motion.div
              className="grid md:grid-cols-2 gap-10 md:gap-14 items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Content */}
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <motion.div variants={fadeUp} custom={0} className="mb-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${mod.bgColor} ${mod.borderColor} border mb-4 shadow-lg ${mod.glowColor}`}>
                    <mod.icon size={26} className={mod.color} />
                  </div>
                  <h2 className="heading-2 mb-2">{mod.title}</h2>
                  <p className="text-muted">{mod.subtitle}</p>
                </motion.div>
                <motion.ul className="space-y-3" variants={fadeUp} custom={1}>
                  {mod.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 group">
                      <CheckCircle2 size={18} className={`${mod.color} mt-0.5 shrink-0 group-hover:scale-110 transition-transform`} />
                      <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">{feature}</span>
                    </li>
                  ))}
                </motion.ul>
              </div>

              {/* Mockup */}
              <motion.div
                className={idx % 2 === 1 ? 'md:order-1' : ''}
                variants={fadeUp}
                custom={2}
              >
                {mod.mockup ? (
                  mod.mockup
                ) : (
                  <div className={`card-hover ${mod.borderColor} border flex flex-col items-center justify-center min-h-[250px] text-center`}>
                    <div className={`w-16 h-16 rounded-2xl ${mod.bgColor} flex items-center justify-center mb-4`}>
                      <mod.icon size={32} className={`${mod.color} opacity-60`} />
                    </div>
                    <p className="text-muted text-sm">Vizuální ukázka připravována</p>
                    <p className="text-[10px] text-muted/50 mt-1">Dostupné v beta verzi</p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Tech Stack */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="container relative z-10">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="heading-2 mb-4">
              Postaveno na <span className="text-gradient">moderních technologiích</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Žádné kompromisy. Každá součást je vybrána s ohledem na výkon, bezpečnost a spolehlivost.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="card-hover text-center group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <tech.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-semibold mb-1">{tech.name}</h3>
                <p className="text-xs text-muted">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section relative overflow-hidden aurora-bg">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="heading-2 mb-6">
              Připraveni na <span className="text-shimmer">soukromí</span>?
            </h2>
            <p className="text-muted mb-8 max-w-lg mx-auto">
              Šepot je ve vývoji. Přidejte se k čekací listině nebo se podívejte na zdrojový kód.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/stahnout" className="btn-primary">
                Stáhnout <ArrowRight size={16} />
              </Link>
              <Link href="/bezpecnost" className="btn-outline">
                <Eye size={16} /> Detaily šifrování
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
