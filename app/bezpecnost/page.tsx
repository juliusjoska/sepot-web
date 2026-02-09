'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Shield, Lock, Key, Eye, EyeOff, AlertTriangle,
  CheckCircle2, ArrowRight, FileSearch, Server,
  RefreshCw, Fingerprint, ShieldCheck, Bug
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
}

const algorithms = [
  {
    name: 'X25519',
    category: 'Výměna klíčů',
    desc: 'Elliptic Curve Diffie-Hellman na Curve25519. Bezpečná výměna klíčů bez nutnosti sdílet tajemství předem.',
    strength: '128-bit security level',
    icon: Key,
  },
  {
    name: 'XSalsa20-Poly1305',
    category: 'Šifrování zpráv',
    desc: 'Streamová šifra XSalsa20 s autentikací Poly1305 MAC. Rychlá, bezpečná, odolná proti timing útokům.',
    strength: '256-bit klíč, 192-bit nonce',
    icon: Lock,
  },
  {
    name: 'Ed25519',
    category: 'Digitální podpisy',
    desc: 'EdDSA podpisy na Edwards Curve25519. Ověření identity odesílatele a integrity zprávy.',
    strength: '128-bit security level',
    icon: Fingerprint,
  },
  {
    name: 'Argon2id',
    category: 'Derivace klíčů',
    desc: 'Paměťově náročná funkce pro odvození šifrovacího klíče z hesla. Odolná proti GPU a ASIC útokům.',
    strength: '64 MB RAM, 3 iterace',
    icon: Shield,
  },
  {
    name: 'BLAKE2b',
    category: 'Hashování',
    desc: 'Kryptografická hash funkce. Rychlejší než SHA-3, používaná pro integrity kontrolu a key derivation.',
    strength: '256-bit výstup',
    icon: FileSearch,
  },
  {
    name: 'Double Ratchet',
    category: 'Správa klíčů',
    desc: 'Kombinace Diffie-Hellman ratchetu a symetrického ratchetu. Nový klíč pro každou zprávu.',
    strength: 'Perfect Forward Secrecy',
    icon: RefreshCw,
  },
]

const signalComparison = [
  { feature: 'E2E šifrování', sepot: true, signal: true },
  { feature: 'Open source klient', sepot: true, signal: true },
  { feature: 'Open source server', sepot: true, signal: false },
  { feature: 'Self-hosting', sepot: true, signal: false },
  { feature: 'Bez telefonního čísla', sepot: true, signal: false },
  { feature: 'Zero metadata', sepot: true, signal: false },
  { feature: 'Rust backend', sepot: true, signal: false },
  { feature: 'QUIC protokol', sepot: true, signal: false },
  { feature: 'Perfect Forward Secrecy', sepot: true, signal: true },
  { feature: 'Skupinové šifrování', sepot: true, signal: true },
]

const threats = [
  {
    title: 'Kompromitovaný server',
    icon: Server,
    desc: 'Server nikdy nevidí dešifrované zprávy. Útočník získá pouze šifrovaná data bez klíčů k dešifrování.',
    status: 'Ochráněno',
  },
  {
    title: 'Man-in-the-middle',
    icon: Eye,
    desc: 'Ověření identity přes QR kódy a bezpečnostní čísla. Jakýkoliv pokus o MITM je detekovatelný.',
    status: 'Ochráněno',
  },
  {
    title: 'Kompromitovaný klíč',
    icon: Key,
    desc: 'Díky PFS kompromitace jednoho klíče neohrozí minulé ani budoucí zprávy. Každá zpráva má unikátní klíč.',
    status: 'Ochráněno',
  },
  {
    title: 'Metadata analýza',
    icon: EyeOff,
    desc: 'Minimální metadata. Server neukládá kdo s kým komunikuje. IP adresy nejsou logovány.',
    status: 'Ochráněno',
  },
  {
    title: 'Brute-force hesla',
    icon: AlertTriangle,
    desc: 'Argon2id s vysokými parametry činí brute-force útoky na hesla prakticky nemožnými.',
    status: 'Ochráněno',
  },
  {
    title: 'Fyzický přístup k zařízení',
    icon: Bug,
    desc: 'Lokální data šifrována pomocí klíče odvozeného z hesla. Bez hesla není přístup k datům.',
    status: 'Částečně',
  },
]

export default function BezpecnostPage() {
  return (
    <div className="mesh-gradient grid-pattern min-h-screen">
      {/* Hero */}
      <section className="section pb-12">
        <div className="container text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <ShieldCheck size={14} /> Bezpečnost do detailu
            </span>
          </motion.div>
          <motion.h1 className="heading-1 mb-6" initial="hidden" animate="visible" variants={fadeUp} custom={1}>
            Kryptografie <span className="text-gradient">bez kompromisů</span>
          </motion.h1>
          <motion.p className="text-lg text-muted max-w-2xl mx-auto" initial="hidden" animate="visible" variants={fadeUp} custom={2}>
            Šepot používá nejmodernější kryptografické algoritmy. Každý detail je navržen tak,
            aby vaše zprávy zůstaly jen vaše.
          </motion.p>
        </div>
      </section>

      {/* Crypto Flow */}
      <section className="py-12 md:py-16">
        <div className="container">
          <motion.div
            className="terminal max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-2 text-xs text-muted">sepot_crypto_flow.rs</span>
            </div>
            <div className="p-5 text-xs md:text-sm leading-relaxed font-mono overflow-x-auto">
              <p className="text-muted">/// Šepot -- Průběh šifrované komunikace</p>
              <p className="text-muted">/// ======================================</p>
              <p className="mt-3"><span className="text-cyan">// 1. Registrace</span></p>
              <p><span className="text-lime">let</span> identity = Ed25519::generate_keypair();</p>
              <p><span className="text-lime">let</span> prekeys = (<span className="text-accent-light">0</span>..<span className="text-accent-light">100</span>).map(|_| X25519::generate());</p>
              <p>server.upload(identity.public, prekeys.public_parts());</p>
              <p className="mt-3"><span className="text-cyan">// 2. Navázání konverzace (X3DH)</span></p>
              <p><span className="text-lime">let</span> peer_bundle = server.fetch_prekey_bundle(&peer_id);</p>
              <p><span className="text-lime">let</span> shared_secret = x3dh::initiate(</p>
              <p>    &identity, &peer_bundle</p>
              <p>);</p>
              <p className="mt-3"><span className="text-cyan">// 3. Double Ratchet</span></p>
              <p><span className="text-lime">let</span> <span className="text-accent-light">mut</span> ratchet = DoubleRatchet::init(shared_secret);</p>
              <p className="mt-3"><span className="text-cyan">// 4. Šifrování zprávy</span></p>
              <p><span className="text-lime">let</span> (header, ciphertext) = ratchet.encrypt(</p>
              <p>    <span className="text-accent-light">&quot;Ahoj, tohle je tajné!&quot;</span>.as_bytes()</p>
              <p>);</p>
              <p className="mt-3"><span className="text-cyan">// 5. Dešifrování na straně příjemce</span></p>
              <p><span className="text-lime">let</span> plaintext = peer_ratchet.decrypt(&header, &ciphertext)?;</p>
              <p>assert_eq!(plaintext, <span className="text-accent-light">&quot;Ahoj, tohle je tajné!&quot;</span>);</p>
              <p className="mt-3 text-muted">// Server nikdy neviděl obsah zprávy.</p>
              <p className="text-muted">// Klíč byl použit jednou a zahozen.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Algorithms */}
      <section className="section">
        <div className="container">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="heading-2 mb-4">Použité <span className="text-gradient">algoritmy</span></h2>
            <p className="text-muted max-w-xl mx-auto">
              Osvědčené kryptografické primitiva. Žádné vlastní vynálezy, žádná security through obscurity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {algorithms.map((algo, i) => (
              <motion.div
                key={algo.name}
                className="card-hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <algo.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{algo.name}</h3>
                    <p className="text-xs text-muted">{algo.category}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/70 mb-3">{algo.desc}</p>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent/5 border border-accent/10 text-xs text-accent">
                  <Shield size={11} /> {algo.strength}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PFS Explanation */}
      <section className="py-12 md:py-16 bg-background-secondary/30">
        <div className="container">
          <motion.div className="grid md:grid-cols-2 gap-10 items-center" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} custom={0}>
              <h2 className="heading-2 mb-4">
                Perfect Forward <span className="text-gradient">Secrecy</span>
              </h2>
              <p className="text-muted mb-4">
                Každá zpráva je šifrována unikátním klíčem, který je po použití okamžitě zahozen.
                I pokud útočník získá váš aktuální klíč, nemůže dešifrovat žádnou předchozí zprávu.
              </p>
              <ul className="space-y-3">
                {[
                  'Nový klíč pro každou zprávu díky Double Ratchet',
                  'Kompromitace jednoho klíče neohrozí ostatní',
                  'Zpětně nelze dešifrovat starší konverzace',
                  'Automatická rotace bez zásahu uživatele',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} custom={1}>
              <div className="terminal">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-green-500" />
                  <span className="ml-2 text-xs text-muted">pfs_demo</span>
                </div>
                <div className="p-4 text-xs font-mono space-y-1">
                  <p className="text-muted"># Každá zpráva = nový klíč</p>
                  <p><span className="text-cyan">Zpráva 1:</span> key_a1b2c3... <span className="text-red-400">[zahozen]</span></p>
                  <p><span className="text-cyan">Zpráva 2:</span> key_d4e5f6... <span className="text-red-400">[zahozen]</span></p>
                  <p><span className="text-cyan">Zpráva 3:</span> key_g7h8i9... <span className="text-red-400">[zahozen]</span></p>
                  <p><span className="text-cyan">Zpráva 4:</span> key_j0k1l2... <span className="text-accent">[aktivní]</span></p>
                  <p className="mt-2 text-muted"># Útočník získal key_j0k1l2</p>
                  <p className="text-accent">→ Zprávy 1-3 zůstávají bezpečné!</p>
                  <p className="text-accent">→ Budoucí zprávy budou mít nové klíče.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Signal Comparison */}
      <section className="section">
        <div className="container">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="heading-2 mb-4">Šepot vs <span className="text-gradient">Signal</span></h2>
            <p className="text-muted max-w-xl mx-auto">
              Signal nastavil standard. Šepot jde dál -- otevřený server, žádné telefonní číslo, zero metadata.
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto terminal"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-2 text-xs text-muted">srovnani_signal.md</span>
            </div>
            <div className="p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-muted font-medium text-xs">Vlastnost</th>
                    <th className="text-center py-2 text-accent font-medium text-xs">Šepot</th>
                    <th className="text-center py-2 text-muted font-medium text-xs">Signal</th>
                  </tr>
                </thead>
                <tbody>
                  {signalComparison.map((row) => (
                    <tr key={row.feature} className="border-b border-border/50">
                      <td className="py-2 text-xs text-foreground/80">{row.feature}</td>
                      <td className="text-center py-2">
                        {row.sepot ? (
                          <span className="text-accent">&#10003;</span>
                        ) : (
                          <span className="text-red-400">&#10005;</span>
                        )}
                      </td>
                      <td className="text-center py-2">
                        {row.signal ? (
                          <span className="text-accent">&#10003;</span>
                        ) : (
                          <span className="text-red-400">&#10005;</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Threat Model */}
      <section className="py-12 md:py-16 bg-background-secondary/30">
        <div className="container">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="heading-2 mb-4">Model <span className="text-gradient">hrozeb</span></h2>
            <p className="text-muted max-w-xl mx-auto">
              Transparentně ukazujeme, proti čemu Šepot chrání a kde jsou limity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {threats.map((threat, i) => (
              <motion.div
                key={threat.title}
                className="card-hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <threat.icon size={20} className="text-cyan" />
                    <h3 className="font-semibold text-sm">{threat.title}</h3>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    threat.status === 'Ochráněno'
                      ? 'bg-accent/10 text-accent border border-accent/20'
                      : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                  }`}>
                    {threat.status}
                  </span>
                </div>
                <p className="text-sm text-foreground/70">{threat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Status */}
      <section className="section">
        <div className="container">
          <motion.div
            className="gradient-border text-center max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <FileSearch size={40} className="text-accent mx-auto mb-4" />
            <h2 className="heading-3 mb-3">Bezpečnostní audit</h2>
            <p className="text-sm text-muted mb-4">
              Šepot je aktuálně ve fázi vývoje. Plánujeme nezávislý bezpečnostní audit
              před vydáním stabilní verze. Zdrojový kód je otevřený -- můžete ho zkontrolovat sami.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://github.com/juliusjoska/sepot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Zdrojový kód na GitHubu <ArrowRight size={14} />
              </a>
              <Link href="/o-projektu" className="btn-outline text-sm">
                Roadmapa projektu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
