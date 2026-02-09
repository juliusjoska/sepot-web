import type { Metadata } from 'next'
import { Shield, Lock, Eye, Server, Trash2, Download, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ochrana soukromí',
  description:
    'Zásady ochrany osobních údajů aplikace Šepot. Minimální sběr dat, E2E šifrování, zero-knowledge architektura.',
}

const sections = [
  {
    id: 'spravce',
    title: '1. Správce osobních údajů',
    icon: Shield,
    content: (
      <>
        <p>
          Správcem osobních údajů je <strong>Julius Joska</strong>, podnikající pod značkou{' '}
          <strong>ajtak.it</strong>.
        </p>
        <ul>
          <li>IČO: 24409979</li>
          <li>
            E-mail:{' '}
            <a href="mailto:info@sepot.cz" className="text-accent hover:underline">
              info@sepot.cz
            </a>
          </li>
          <li>
            Web:{' '}
            <a
              href="https://ajtak.it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              ajtak.it
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'jake-udaje',
    title: '2. Jaké údaje zpracováváme',
    icon: Eye,
    content: (
      <>
        <p>
          Šepot je navržen s principem <strong>minimálního sběru dat</strong>. Zpracováváme
          pouze údaje nezbytné pro fungování služby:
        </p>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-accent mb-3">Registrační údaje</h4>
          <ul>
            <li>Uživatelské jméno (pseudonym)</li>
            <li>E-mailová adresa (volitelně, pro obnovení účtu)</li>
            <li>Veřejný šifrovací klíč</li>
          </ul>
        </div>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-cyan mb-3">Co NEzpracováváme</h4>
          <ul>
            <li>Obsah zpráv (E2E šifrování, nemůžeme je číst)</li>
            <li>Metadata konverzací (kdo s kým komunikuje)</li>
            <li>IP adresy (nelogujeme)</li>
            <li>Telefonní čísla</li>
            <li>Kontakty z vašeho telefonu</li>
            <li>Polohu ani údaje o zařízení</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 'sifrovani',
    title: '3. End-to-end šifrování',
    icon: Lock,
    content: (
      <>
        <p>
          Veškerá komunikace v Šepotu je chráněna <strong>end-to-end šifrováním</strong>
          . To znamená, že:
        </p>
        <ul>
          <li>Zprávy jsou šifrovány na vašem zařízení před odesláním</li>
          <li>Dešifrovat je může pouze zamýšlený příjemce</li>
          <li>
            Ani my jako provozovatel <strong>nemáme možnost zprávy číst</strong>
          </li>
          <li>Šifrovací klíče nikdy neopouštějí vaše zařízení</li>
        </ul>
        <p>
          Používáme protokol založený na moderních kryptografických standardech
          (X25519, AES-256-GCM, HMAC-SHA256). Celý kód je open source a kdokoliv si může
          šifrování ověřit.
        </p>
      </>
    ),
  },
  {
    id: 'zero-knowledge',
    title: '4. Zero-knowledge architektura',
    icon: Server,
    content: (
      <>
        <p>
          Šepot využívá <strong>zero-knowledge architekturu</strong>. Server slouží pouze
          jako zprostředkovatel doručení zašifrovaných zpráv. Nemáme přístup k:
        </p>
        <ul>
          <li>Obsahu vašich zpráv</li>
          <li>Vašim soukromým klíčům</li>
          <li>Historii konverzací</li>
          <li>Seznamu vašich kontaktů</li>
        </ul>
        <p>
          I v případě kompromitace serveru zůstávají vaše zprávy v bezpečí, protože
          server nikdy nedisponuje daty potřebnými k jejich dešifrování.
        </p>
      </>
    ),
  },
  {
    id: 'lokalni-uloziste',
    title: '5. Lokální úložiště zpráv',
    icon: Download,
    content: (
      <>
        <p>
          Vaše zprávy jsou uloženy <strong>výhradně na vašem zařízení</strong> v šifrované
          lokální databázi. Šepot neuchovává zprávy na serverech déle, než je nutné pro
          jejich doručení.
        </p>
        <ul>
          <li>Nedoručené zprávy jsou na serveru uloženy v zašifrované podobě maximálně 30 dní</li>
          <li>Po doručení jsou ze serveru okamžitě smazány</li>
          <li>Zálohy zpráv vytváříte a spravujete výhradně vy na svém zařízení</li>
        </ul>
      </>
    ),
  },
  {
    id: 'gdpr',
    title: '6. Vaše práva (GDPR)',
    icon: Trash2,
    content: (
      <>
        <p>
          V souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR) máte
          následující práva:
        </p>
        <ul>
          <li>
            <strong>Právo na přístup</strong> — můžete si vyžádat informace o údajích, které
            o vás zpracováváme
          </li>
          <li>
            <strong>Právo na opravu</strong> — můžete požádat o opravu nepřesných údajů
          </li>
          <li>
            <strong>Právo na výmaz</strong> — můžete požádat o smazání svého účtu a všech
            souvisejících dat
          </li>
          <li>
            <strong>Právo na přenositelnost</strong> — můžete si vyexportovat svá data
            ve strojově čitelném formátu
          </li>
          <li>
            <strong>Právo vznést námitku</strong> — můžete vznést námitku proti zpracování
            údajů
          </li>
          <li>
            <strong>Právo podat stížnost</strong> — u Úřadu pro ochranu osobních údajů
            (ÚOOÚ), <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.uoou.cz</a>
          </li>
        </ul>
        <p>
          Smazání účtu lze provést přímo v aplikaci. Veškerá data na serveru budou
          nenávratně odstraněna do 48 hodin.
        </p>
      </>
    ),
  },
  {
    id: 'kontakt',
    title: '7. Kontakt',
    icon: Mail,
    content: (
      <>
        <p>
          S dotazy ohledně ochrany osobních údajů se na nás můžete obrátit:
        </p>
        <ul>
          <li>
            E-mail:{' '}
            <a href="mailto:info@sepot.cz" className="text-accent hover:underline">
              info@sepot.cz
            </a>
          </li>
        </ul>
        <p>Na vaši žádost odpovíme nejpozději do 30 dnů.</p>
      </>
    ),
  },
]

export default function OchranaSoukromiPage() {
  return (
    <>
      {/* Hero */}
      <section className="mesh-gradient pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-white/[0.03] text-sm text-muted mb-6">
            <Shield size={14} className="text-accent" />
            Ochrana vašich dat
          </div>
          <h1 className="heading-2 mb-4">
            Zásady ochrany{' '}
            <span className="text-gradient">osobních údajů</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            Šepot je navržen tak, aby o vás věděl co nejméně. Vaše soukromí je
            naše nejvyšší priorita.
          </p>
          <p className="text-sm text-muted/60 mt-6">
            Poslední aktualizace: Únor 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container max-w-3xl">
          <div className="space-y-12">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <div key={section.id} id={section.id}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <h2 className="heading-3">{section.title}</h2>
                  </div>
                  <div className="prose prose-invert prose-sm max-w-none text-muted leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:text-muted [&_strong]:text-foreground [&_p]:mb-3">
                    {section.content}
                  </div>
                  <div className="border-b border-border mt-10" />
                </div>
              )
            })}
          </div>

          {/* Summary box */}
          <div className="gradient-border mt-16">
            <h3 className="heading-3 mb-3">Shrnutí</h3>
            <p className="text-sm text-muted leading-relaxed">
              Šepot sbírá pouze minimální registrační údaje. Vaše zprávy jsou šifrovány
              end-to-end a uloženy výhradně na vašem zařízení. Nemůžeme je číst, analyzovat
              ani sdílet s třetími stranami. Máte plnou kontrolu nad svými daty včetně
              práva na jejich úplný výmaz.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
