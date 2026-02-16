'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Shield, Check, X, Minus, ArrowRight,
  Lock, Eye, Code, Server, UserCircle,
  DollarSign, Globe, Smartphone, Monitor, Crown
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
}

type CellValue = true | false | 'partial' | string

const messengers = ['Šepot', 'Signal', 'WhatsApp', 'Telegram', 'Threema', 'iMessage'] as const

const categories: {
  icon: typeof Shield
  title: string
  features: { name: string; values: CellValue[] }[]
}[] = [
  {
    icon: Lock,
    title: 'Šifrování',
    features: [
      { name: 'E2E šifrování (výchozí)', values: [true, true, true, false, true, true] },
      { name: 'E2E skupinové chaty', values: [true, true, true, false, true, true] },
      { name: 'Perfect Forward Secrecy', values: [true, true, true, false, true, true] },
      { name: 'Post-compromise Security', values: [true, true, true, false, false, false] },
      { name: 'Šifrování metadat', values: [true, 'partial', false, false, false, false] },
      { name: 'Sealed Sender', values: [true, true, false, false, false, false] },
    ],
  },
  {
    icon: Eye,
    title: 'Metadata a soukromí',
    features: [
      { name: 'Bez telefonního čísla', values: [true, false, false, false, true, false] },
      { name: 'Bez nahrávání kontaktů', values: [true, true, false, false, true, true] },
      { name: 'Minimální metadata na serveru', values: [true, 'partial', false, false, 'partial', false] },
      { name: 'Bez profilování uživatelů', values: [true, true, false, false, true, false] },
      { name: 'Mizící zprávy', values: [true, true, true, true, false, false] },
      { name: 'Bez reklam / sledování', values: [true, true, false, true, true, true] },
    ],
  },
  {
    icon: Code,
    title: 'Open source',
    features: [
      { name: 'Open source klient', values: [true, true, false, true, false, false] },
      { name: 'Open source server', values: [true, false, false, true, false, false] },
      { name: 'Reprodukovatelné buildy', values: [true, true, false, false, true, false] },
      { name: 'Veřejný audit', values: ['Plánován', true, false, false, true, false] },
    ],
  },
  {
    icon: Server,
    title: 'Self-hosting a infrastruktura',
    features: [
      { name: 'Self-hosting serveru', values: [true, false, false, false, false, false] },
      { name: 'Federace', values: ['Plánována', false, false, false, false, false] },
      { name: 'Decentralizace', values: ['Plánována', false, false, false, false, false] },
      { name: 'QUIC protokol', values: [true, false, false, false, false, false] },
    ],
  },
  {
    icon: UserCircle,
    title: 'Registrace',
    features: [
      { name: 'Bez osobních údajů', values: [true, false, false, false, 'partial', false] },
      { name: 'Anonymní účet', values: [true, false, false, false, 'partial', false] },
      { name: 'Více zařízení', values: [true, true, true, true, true, true] },
    ],
  },
  {
    icon: DollarSign,
    title: 'Cena',
    features: [
      { name: 'Zdarma', values: [true, true, true, true, false, true] },
      { name: 'Bez předplatného', values: [true, true, true, 'partial', false, true] },
      { name: 'Bez In-App nákupů', values: [true, true, true, false, true, true] },
    ],
  },
  {
    icon: Globe,
    title: 'České prostředí',
    features: [
      { name: 'Český překlad', values: [true, true, true, true, false, true] },
      { name: 'Vytvořeno v ČR', values: [true, false, false, false, false, false] },
      { name: 'GDPR compliance', values: [true, 'partial', 'partial', 'partial', true, 'partial'] },
      { name: 'Data mimo USA', values: [true, false, false, false, true, false] },
    ],
  },
  {
    icon: Smartphone,
    title: 'Platformy',
    features: [
      { name: 'Android', values: ['Brzy', true, true, true, true, false] },
      { name: 'iOS', values: ['Brzy', true, true, true, true, true] },
      { name: 'Desktop', values: [true, true, true, true, false, true] },
      { name: 'Web', values: ['Plánován', false, true, true, false, false] },
      { name: 'CLI', values: [true, false, false, false, false, false] },
    ],
  },
]

const competitorDetails: {
  name: string
  color: string
  pros: string[]
  cons: string[]
}[] = [
  {
    name: 'Signal',
    color: 'text-blue-400',
    pros: [
      'Zlatý standard E2E šifrování',
      'Otevřený klient, pravidelné audity',
      'Nezisková organizace',
    ],
    cons: [
      'Vyžaduje telefonní číslo',
      'Uzavřený serverový kód',
      'Nelze self-hostovat',
      'Centralizovaná infrastruktura v USA',
    ],
  },
  {
    name: 'WhatsApp',
    color: 'text-green-400',
    pros: [
      'E2E šifrování (Signal Protocol)',
      'Obrovská uživatelská základna',
      'Multi-device podpora',
    ],
    cons: [
      'Vlastněn Metou -- sdílení metadat s Facebookem',
      'Uzavřený zdrojový kód',
      'Rozsáhlý sběr metadat',
      'Vyžaduje telefonní číslo',
    ],
  },
  {
    name: 'Telegram',
    color: 'text-sky-400',
    pros: [
      'Bohaté funkce, skupiny, kanály, boti',
      'Rychlost a spolehlivost',
      'Otevřený klientský kód',
    ],
    cons: [
      'E2E šifrování jen v "tajných chatech"',
      'Běžné chaty šifrovány jen na serveru',
      'Vlastní MTProto protokol (neprověřený)',
      'Centralizované v SAE (Dubaj)',
    ],
  },
  {
    name: 'Threema',
    color: 'text-emerald-300',
    pros: [
      'Švýcarská jurisdikce, silné GDPR',
      'Bez telefonního čísla',
      'Pravidelné audity',
    ],
    cons: [
      'Placená aplikace (jednorázově)',
      'Částečně uzavřený kód (klient od 2020 otevřený)',
      'Nelze self-hostovat',
      'Menší uživatelská základna',
    ],
  },
  {
    name: 'iMessage',
    color: 'text-blue-300',
    pros: [
      'E2E šifrování mezi Apple zařízeními',
      'Hluboká integrace s iOS/macOS',
      'Snadné použití',
    ],
    cons: [
      'Pouze Apple ekosystém',
      'Uzavřený zdrojový kód',
      'iCloud zálohy (výchozí) obcházejí E2E',
      'Apple může být donucen poskytnout data',
    ],
  },
]

function CellIcon({ value }: { value: CellValue }) {
  if (value === true) return <Check size={16} className="text-accent" />
  if (value === false) return <X size={16} className="text-red-400/60" />
  if (value === 'partial') return <Minus size={16} className="text-yellow-400" />
  return <span className="text-xs text-cyan font-medium">{value}</span>
}

export default function SrovnaniPage() {
  return (
    <div className="mesh-gradient grid-pattern min-h-screen">
      {/* Hero */}
      <section className="section pb-12 aurora-bg">
        <div className="container text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <Crown size={14} /> Podrobné srovnání
            </span>
          </motion.div>
          <motion.h1 className="heading-1 mb-6" initial="hidden" animate="visible" variants={fadeUp} custom={1}>
            Šepot vs <span className="text-shimmer">ostatní</span>
          </motion.h1>
          <motion.p className="text-lg text-muted max-w-2xl mx-auto" initial="hidden" animate="visible" variants={fadeUp} custom={2}>
            Detailní srovnání Šepotu s nejpopulárnějšími messengery.
            Kde vynikáme a kde máme prostor pro zlepšení.
          </motion.p>
        </div>
      </section>

      {/* Score summary */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
            {messengers.map((m, i) => {
              const total = categories.reduce((acc, cat) => {
                return acc + cat.features.reduce((fAcc, f) => {
                  const val = f.values[i]
                  return fAcc + (val === true ? 1 : val === 'partial' ? 0.5 : 0)
                }, 0)
              }, 0)
              const max = categories.reduce((acc, cat) => acc + cat.features.length, 0)
              const pct = Math.round((total / max) * 100)
              return (
                <motion.div
                  key={m}
                  className={`card-hover text-center ${i === 0 ? 'border-accent/30 border ring-1 ring-accent/20' : ''}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                >
                  <p className={`text-2xl font-bold ${i === 0 ? 'text-accent' : 'text-foreground'}`}>{pct}%</p>
                  <p className={`text-xs ${i === 0 ? 'text-accent' : 'text-muted'} mt-1`}>{m}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      {categories.map((cat, catIdx) => (
        <section
          key={cat.title}
          className={`py-8 md:py-12 ${catIdx % 2 === 1 ? 'bg-background-secondary/30' : ''}`}
        >
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <cat.icon size={20} className="text-accent" />
                </div>
                <h2 className="heading-3">{cat.title}</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[700px]">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 text-muted font-medium text-xs w-[200px]">Vlastnost</th>
                      {messengers.map((m, i) => (
                        <th key={m} className={`text-center py-3 px-2 font-medium text-xs ${i === 0 ? 'text-accent' : 'text-muted'}`}>
                          {m}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {cat.features.map((feature) => (
                      <tr key={feature.name} className="border-b border-border/30 hover:bg-white/[0.02] transition-colors">
                        <td className="py-2.5 pr-4 text-xs text-foreground/80">{feature.name}</td>
                        {feature.values.map((val, i) => (
                          <td key={i} className={`text-center py-2.5 px-2 ${i === 0 ? 'bg-accent/[0.03]' : ''}`}>
                            <div className="flex justify-center">
                              <CellIcon value={val} />
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Competitor Analysis */}
      <section className="section">
        <div className="container">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="heading-2 mb-4">Detailní <span className="text-gradient">analýza</span></h2>
            <p className="text-muted max-w-xl mx-auto">
              Co dělají konkurenti dobře a kde mají slabiny.
            </p>
          </motion.div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {competitorDetails.map((comp, i) => (
              <motion.div
                key={comp.name}
                className="card-hover group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <h3 className={`heading-3 mb-4 ${comp.color} group-hover:brightness-125 transition-all`}>{comp.name}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-medium text-accent mb-2 uppercase tracking-wide">Silné stránky</p>
                    <ul className="space-y-1.5">
                      {comp.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm text-foreground/70">
                          <Check size={14} className="text-accent mt-0.5 shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-red-400 mb-2 uppercase tracking-wide">Slabé stránky</p>
                    <ul className="space-y-1.5">
                      {comp.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm text-foreground/70">
                          <X size={14} className="text-red-400/60 mt-0.5 shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section aurora-bg">
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="heading-2 mb-4">Šepot nabízí <span className="text-shimmer">víc</span></h2>
            <p className="text-muted mb-8 max-w-lg mx-auto">
              Open source server, self-hosting, žádné telefonní číslo, zero metadata.
              Soukromí, jak má být.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/stahnout" className="btn-primary">
                Vyzkoušet Šepot <ArrowRight size={16} />
              </Link>
              <Link href="/bezpecnost" className="btn-outline">
                <Shield size={16} /> Technické detaily
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
