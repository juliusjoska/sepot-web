import type { Metadata } from 'next'
import {
  Shield,
  Bug,
  CheckCircle,
  XCircle,
  Clock,
  Award,
  Mail,
  Key,
  AlertTriangle,
  FileText,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Zodpovědné hlášení zranitelností',
  description:
    'Responsible disclosure politika projektu Šepot. Jak nahlásit bezpečnostní zranitelnost, pravidla, safe harbor, časové lhůty.',
}

const sections = [
  {
    id: 'uvod',
    title: '1. Úvod',
    icon: Shield,
    content: (
      <>
        <p>
          Bezpečnost Šepotu je pro nás prioritou. Vítáme a oceňujeme
          spolupráci bezpečnostní komunity při identifikaci zranitelností.
          Tento dokument popisuje proces zodpovědného hlášení (responsible
          disclosure) bezpečnostních zranitelností.
        </p>
        <p>
          Věříme, že spolupráce s bezpečnostními výzkumníky je klíčová
          pro udržení bezpečnosti naší služby a ochranu soukromí uživatelů.
        </p>
      </>
    ),
  },
  {
    id: 'jak-nahlasit',
    title: '2. Jak nahlásit zranitelnost',
    icon: Bug,
    content: (
      <>
        <p>
          Bezpečnostní zranitelnosti hlaste na:
        </p>
        <div className="card-glass my-4">
          <ul>
            <li>
              <strong>E-mail:</strong>{' '}
              <a href="mailto:security@sepot.cz" className="text-accent hover:underline">
                security@sepot.cz
              </a>
            </li>
            <li>
              <strong>PGP klíč:</strong> [PGP klíč bude publikován po spuštění]
            </li>
            <li>
              <strong>GitHub Security Advisories:</strong>{' '}
              <a
                href="https://github.com/juliusjoska/sepot/security/advisories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                github.com/juliusjoska/sepot
              </a>
            </li>
          </ul>
        </div>
        <p>
          Při hlášení prosíme uveďte:
        </p>
        <ul>
          <li>Popis zranitelnosti a její typ (např. XSS, SQLi, RCE)</li>
          <li>Postup reprodukce (krok po kroku)</li>
          <li>Dotčené verze a komponenty</li>
          <li>Potenciální dopad na uživatele</li>
          <li>Návrh opravy (pokud máte)</li>
          <li>Vaše kontaktní údaje (pro zpětnou vazbu)</li>
        </ul>
        <p>
          Pro šifrovanou komunikaci použijte náš PGP klíč. E-maily na
          adresu security@sepot.cz jsou monitorovány a na hlášení
          odpovídáme do 48 hodin.
        </p>
      </>
    ),
  },
  {
    id: 'co-hlasit',
    title: '3. Co hlásit',
    icon: CheckCircle,
    content: (
      <>
        <p>
          Hlašte prosím zranitelnosti, které mají reálný dopad na bezpečnost
          služby nebo soukromí uživatelů:
        </p>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-accent mb-3">
            V rozsahu (in scope)
          </h4>
          <ul>
            <li>Zranitelnosti v kryptografickém protokolu Šepotu</li>
            <li>Obcházení end-to-end šifrování</li>
            <li>Únik soukromých klíčů nebo metadat</li>
            <li>Neoprávněný přístup k účtům uživatelů</li>
            <li>Remote Code Execution (RCE) na serveru</li>
            <li>SQL Injection, XSS, CSRF</li>
            <li>Zranitelnosti v autentizaci a autorizaci</li>
            <li>Server-Side Request Forgery (SSRF)</li>
            <li>Zranitelnosti v API</li>
            <li>Únik citlivých dat (klíče, tokeny, konfigurace)</li>
          </ul>
        </div>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-red-400 mb-3">
            Mimo rozsah (out of scope)
          </h4>
          <ul>
            <li>Sociální inženýrství (phishing) zaměstnanců</li>
            <li>Fyzický přístup k zařízením</li>
            <li>Denial of Service (DoS/DDoS) útoky</li>
            <li>Spam a rate limiting</li>
            <li>Zranitelnosti v software třetích stran (pokud nesouvisejí přímo s naší integrací)</li>
            <li>Problémy, které vyžadují zastaralý prohlížeč nebo operační systém</li>
            <li>Chybějící bezpečnostní hlavičky bez prokázaného dopadu</li>
            <li>Automatizované skenery bez ověření výsledků</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 'pravidla',
    title: '4. Pravidla zodpovědného hlášení',
    icon: FileText,
    content: (
      <>
        <p>
          Při výzkumu a hlášení zranitelností dodržujte prosím tato pravidla:
        </p>
        <ul>
          <li>
            <strong>Nezdílejte veřejně</strong> — nezdílejte detaily
            zranitelnosti veřejně, dokud nebude opravena a koordinovaně
            zveřejněna
          </li>
          <li>
            <strong>Minimální dopad</strong> — nepokoušejte se přistupovat
            k datům jiných uživatelů, neprovádějte destruktivní testy
          </li>
          <li>
            <strong>Žádný spam</strong> — nezasílejte hromadné zprávy, nevytvářejte masově testovací účty
          </li>
          <li>
            <strong>Pouze testovací data</strong> — používejte vlastní
            testovací účty a data, ne účty skutečných uživatelů
          </li>
          <li>
            <strong>Dodržujte zákony</strong> — vaše testování musí být
            v souladu s platnými právními předpisy ČR a EU
          </li>
          <li>
            <strong>Spolupracujte</strong> — buďte připraveni spolupracovat
            na ověření a opravě zranitelnosti
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'safe-harbor',
    title: '5. Safe harbor',
    icon: Shield,
    content: (
      <>
        <p>
          Zavazujeme se, že pokud budete dodržovat pravidla zodpovědného
          hlášení uvedená v tomto dokumentu:
        </p>
        <ul>
          <li>
            <strong>Nebudeme podnikat právní kroky</strong> proti vám za
            bezpečnostní výzkum provedený v souladu s touto politikou
          </li>
          <li>
            <strong>Budeme s vámi spolupracovat</strong> na pochopení
            a ověření hlášené zranitelnosti
          </li>
          <li>
            <strong>Opravíme zranitelnost</strong> v co nejkratší době
            a budeme vás informovat o průběhu
          </li>
          <li>
            <strong>Uznáme vaši práci</strong> ve veřejném poděkování
            (pokud si to přejete)
          </li>
        </ul>
        <p>
          Safe harbor se vztahuje výhradně na bezpečnostní výzkum provedený
          v dobré víře a v souladu s touto politikou. Nevztahuje se na
          záměrně destruktivní chování, přístup k datům jiných uživatelů
          nebo porušení platných zákonů.
        </p>
      </>
    ),
  },
  {
    id: 'casove-lhuty',
    title: '6. Časové lhůty',
    icon: Clock,
    content: (
      <>
        <p>
          Zavazujeme se dodržovat následující časové lhůty:
        </p>
        <div className="card-glass my-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-3 pr-4 text-foreground font-semibold">Akce</th>
                <th className="py-3 text-foreground font-semibold">Lhůta</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 text-muted">Potvrzení přijetí hlášení</td>
                <td className="py-3 text-muted">Do 48 hodin</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 text-muted">Předběžné posouzení závažnosti</td>
                <td className="py-3 text-muted">Do 5 pracovních dnů</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 text-muted">Oprava kritických zranitelností</td>
                <td className="py-3 text-muted">Do 7 dnů</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 text-muted">Oprava ostatních zranitelností</td>
                <td className="py-3 text-muted">Do 30 dnů</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-muted">Koordinované zveřejnění</td>
                <td className="py-3 text-muted">Do 90 dnů od hlášení</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Lhůta pro koordinované zveřejnění (90 dnů) začíná běžet dnem
          přijetí hlášení. Po uplynutí této lhůty máte právo zranitelnost
          zveřejnit bez ohledu na stav opravy. V odůvodněných případech
          (například komplikovaná oprava) vás můžeme požádat o prodloužení
          lhůty — rozhodnutí je vždy na vás.
        </p>
      </>
    ),
  },
  {
    id: 'zavaznost',
    title: '7. Klasifikace závažnosti',
    icon: AlertTriangle,
    content: (
      <>
        <p>
          Závažnost zranitelností klasifikujeme dle CVSS (Common
          Vulnerability Scoring System):
        </p>
        <div className="grid sm:grid-cols-2 gap-3 my-4">
          <div className="card-glass">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-sm font-semibold text-foreground">Kritická (9.0–10.0)</span>
            </div>
            <p className="text-xs text-muted">
              Vzdálené spuštění kódu, obcházení E2E šifrování, únik soukromých klíčů
            </p>
          </div>
          <div className="card-glass">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-sm font-semibold text-foreground">Vysoká (7.0–8.9)</span>
            </div>
            <p className="text-xs text-muted">
              Převzetí účtu, SQL injection, SSRF s přístupem k interním službám
            </p>
          </div>
          <div className="card-glass">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="text-sm font-semibold text-foreground">Střední (4.0–6.9)</span>
            </div>
            <p className="text-xs text-muted">
              Stored XSS, CSRF s dopadem, únik neveřejných informací
            </p>
          </div>
          <div className="card-glass">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-sm font-semibold text-foreground">Nízká (0.1–3.9)</span>
            </div>
            <p className="text-xs text-muted">
              Reflected XSS, informační úniky s minimálním dopadem
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'hall-of-fame',
    title: '8. Hall of Fame',
    icon: Award,
    content: (
      <>
        <p>
          Výzkumníky, kteří zodpovědně nahlásili bezpečnostní zranitelnost,
          rádi uvedeme v naší síni slávy (s jejich souhlasem). Poděkování
          zahrnuje:
        </p>
        <ul>
          <li>Uvedení jména (nebo přezdívky) na této stránce</li>
          <li>Odkaz na váš profil nebo web</li>
          <li>Popis nahlášené zranitelnosti (po opravě)</li>
        </ul>
        <div className="card-glass my-4">
          <p className="text-sm text-muted italic">
            Zatím nebyly nahlášeny žádné zranitelnosti. Buďte první, kdo
            přispěje k bezpečnosti Šepotu!
          </p>
        </div>
        <p>
          V současné době nenabízíme finanční odměny (bug bounty). Jako
          open source projekt s omezeným rozpočtem nabízíme veřejné uznání
          a poděkování. V budoucnu plánujeme zavést formální bug bounty
          program.
        </p>
      </>
    ),
  },
  {
    id: 'pgp',
    title: '9. PGP klíč',
    icon: Key,
    content: (
      <>
        <p>
          Pro šifrovanou komunikaci s bezpečnostním týmem použijte
          následující PGP klíč:
        </p>
        <div className="card-glass my-4 font-mono text-xs">
          <p className="text-muted">
            [PGP veřejný klíč bude publikován po spuštění služby]
          </p>
          <p className="text-muted mt-2">
            Fingerprint: [bude doplněn]
          </p>
        </div>
        <p>
          PGP klíč je rovněž dostupný na veřejných keyserverech a na
          našem GitHubu.
        </p>
      </>
    ),
  },
  {
    id: 'kontakt',
    title: '10. Kontakt',
    icon: Mail,
    content: (
      <>
        <div className="card-glass my-4">
          <ul>
            <li>
              <strong>Bezpečnostní hlášení:</strong>{' '}
              <a href="mailto:security@sepot.cz" className="text-accent hover:underline">
                security@sepot.cz
              </a>
            </li>
            <li>
              <strong>Obecné dotazy:</strong>{' '}
              <a href="mailto:kontakt@sepot.cz" className="text-accent hover:underline">
                kontakt@sepot.cz
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/juliusjoska/sepot/security"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                github.com/juliusjoska/sepot
              </a>
            </li>
          </ul>
        </div>
        <p>
          Děkujeme za váš příspěvek k bezpečnosti Šepotu a ochraně
          soukromí našich uživatelů.
        </p>
      </>
    ),
  },
]

export default function ZodpovedneHlaseniPage() {
  return (
    <>
      {/* Hero */}
      <section className="mesh-gradient pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-white/[0.03] text-sm text-muted mb-6">
            <Bug size={14} className="text-accent" />
            Responsible Disclosure
          </div>
          <h1 className="heading-2 mb-4">
            Zodpovědné hlášení{' '}
            <span className="text-gradient">zranitelností</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            Pomáhejte nám udržet Šepot bezpečný. Nahlaste zranitelnost
            zodpovědně a budete uvedeni v naší síni slávy.
          </p>
          <p className="text-sm text-muted/60 mt-6">
            Účinnost od: 1. března 2026 | Verze 1.0
          </p>
        </div>
      </section>

      {/* Quick contact */}
      <section className="section pb-0">
        <div className="container max-w-3xl">
          <div className="gradient-border flex flex-col sm:flex-row items-center gap-4">
            <Mail size={24} className="text-accent shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                Rychlý kontakt na bezpečnostní tým
              </p>
              <p className="text-sm text-muted">
                <a href="mailto:security@sepot.cz" className="text-accent hover:underline">
                  security@sepot.cz
                </a>
                {' '}— odpovídáme do 48 hodin
              </p>
            </div>
          </div>
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
              Hlaste zranitelnosti na security@sepot.cz. Dodržujte pravidla
              zodpovědného hlášení — nezdílejte veřejně, nepoužívejte data
              jiných uživatelů, spolupracujte na opravě. Na oplátku
              garantujeme safe harbor, odpověď do 48 hodin a veřejné
              poděkování. Koordinované zveřejnění po 90 dnech.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
