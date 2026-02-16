import type { Metadata } from 'next'
import {
  Shield,
  Lock,
  Key,
  Server,
  Users,
  AlertTriangle,
  RefreshCw,
  Link2,
  GraduationCap,
  Search,
  Mail,
  Building,
  FileCheck,
  Zap,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bezpečnostní politika',
  description:
    'Bezpečnostní politika služby Šepot dle principů NIS2 a ISO 27001. E2E šifrování, zero-knowledge, řízení incidentů.',
}

const sections = [
  {
    id: 'zavazek',
    title: '1. Závazek k bezpečnosti',
    icon: Shield,
    content: (
      <>
        <p>
          Bezpečnost a ochrana soukromí uživatelů je základním pilířem projektu
          Šepot. Tento dokument popisuje bezpečnostní opatření, která přijímáme
          k ochraně služby, dat a infrastruktury.
        </p>
        <p>
          Naše bezpečnostní opatření vycházejí z principů:
        </p>
        <ul>
          <li>
            <strong>NIS2</strong> — Směrnice (EU) 2022/2555 o opatřeních
            k zajištění vysoké společné úrovně kybernetické bezpečnosti,
            transponovaná zákonem o kybernetické bezpečnosti (nZKB, účinný
            od 1. 11. 2025)
          </li>
          <li>
            <strong>ISO/IEC 27001</strong> — Mezinárodní standard pro systémy
            řízení bezpečnosti informací (ISMS)
          </li>
          <li>
            <strong>GDPR</strong> — Nařízení (EU) 2016/679, zejména čl. 25
            (ochrana osobních údajů záměrnou a standardní ochranou) a čl. 32
            (zabezpečení zpracování)
          </li>
        </ul>
        <p>
          Jako open source projekt umožňujeme komunitě nezávisle ověřovat
          naše bezpečnostní tvrzení.
        </p>
      </>
    ),
  },
  {
    id: 'organizacni-opatreni',
    title: '2. Organizační opatření',
    icon: Building,
    content: (
      <>
        <p>
          Na organizační úrovni přijímáme následující opatření k zajištění
          bezpečnosti:
        </p>
        <ul>
          <li>
            <strong>Bezpečnostní politika</strong> — tento dokument je
            závazný pro všechny osoby podílející se na vývoji a provozu
            služby
          </li>
          <li>
            <strong>Princip minimálních oprávnění</strong> — přístup
            k systémům je omezen na nezbytné minimum
          </li>
          <li>
            <strong>Oddělení prostředí</strong> — vývojové, testovací
            a produkční prostředí jsou striktně oddělena
          </li>
          <li>
            <strong>Code review</strong> — veškeré změny kódu procházejí
            recenzí před začleněním
          </li>
          <li>
            <strong>Řízení změn</strong> — nasazení nových verzí probíhá
            kontrolovaným procesem s možností rollbacku
          </li>
          <li>
            <strong>Dokumentace</strong> — bezpečnostní postupy jsou
            zdokumentovány a pravidelně přezkoumávány
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'technicka-opatreni',
    title: '3. Technická opatření',
    icon: Server,
    content: (
      <>
        <p>
          Technická bezpečnostní opatření jsou jádrem ochrany služby Šepot:
        </p>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-accent mb-3">
            End-to-end šifrování
          </h4>
          <ul>
            <li>
              Veškerá komunikace je šifrována na zařízení odesílatele
              a dešifrována výhradně na zařízení příjemce
            </li>
            <li>
              Server slouží pouze jako zprostředkovatel doručení zašifrovaných
              dat
            </li>
            <li>
              Ani provozovatel nemá technickou možnost obsah komunikace číst
            </li>
          </ul>
        </div>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-accent mb-3">
            Zero-knowledge architektura
          </h4>
          <ul>
            <li>Server nikdy nedisponuje soukromými klíči uživatelů</li>
            <li>Metadata konverzací (kdo s kým komunikuje) se neukládají</li>
            <li>IP adresy uživatelů se nelogují</li>
            <li>
              I v případě kompromitace serveru zůstává obsah komunikace
              v bezpečí
            </li>
          </ul>
        </div>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-accent mb-3">
            Síťová bezpečnost
          </h4>
          <ul>
            <li>TLS 1.3 pro veškerý síťový provoz</li>
            <li>HSTS (HTTP Strict Transport Security) s preloadem</li>
            <li>Certificate pinning v mobilních aplikacích</li>
            <li>Firewall s pravidly whitelistu</li>
            <li>DDoS ochrana</li>
            <li>Rate limiting API požadavků</li>
          </ul>
        </div>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-accent mb-3">
            Bezpečnost aplikace
          </h4>
          <ul>
            <li>Ochrana proti OWASP Top 10 zranitelnostem</li>
            <li>Content Security Policy (CSP)</li>
            <li>CSRF ochrana</li>
            <li>Input validace a sanitizace</li>
            <li>Dependency scanning (automatická kontrola závislostí)</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 'kryptograficke-standardy',
    title: '4. Kryptografické standardy',
    icon: Key,
    content: (
      <>
        <p>
          Šepot využívá následující kryptografické algoritmy a protokoly,
          které splňují doporučení NÚKIB a odpovídají aktuálním mezinárodním
          standardům:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-3 pr-4 text-foreground font-semibold">Účel</th>
                <th className="py-3 pr-4 text-foreground font-semibold">Algoritmus</th>
                <th className="py-3 text-foreground font-semibold">Specifikace</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 text-muted">Výměna klíčů</td>
                <td className="py-3 pr-4 text-foreground font-mono text-xs">X25519</td>
                <td className="py-3 text-muted">Diffie-Hellman na Curve25519 (RFC 7748)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 text-muted">Šifrování zpráv</td>
                <td className="py-3 pr-4 text-foreground font-mono text-xs">XSalsa20-Poly1305</td>
                <td className="py-3 text-muted">AEAD šifrování s autentizací (NaCl/libsodium)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 text-muted">Digitální podpisy</td>
                <td className="py-3 pr-4 text-foreground font-mono text-xs">Ed25519</td>
                <td className="py-3 text-muted">EdDSA na Curve25519 (RFC 8032)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 text-muted">Hashování hesel</td>
                <td className="py-3 pr-4 text-foreground font-mono text-xs">Argon2id</td>
                <td className="py-3 text-muted">Paměťově náročný KDF (RFC 9106), odolný vůči GPU/ASIC</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 text-muted">Přenos dat</td>
                <td className="py-3 pr-4 text-foreground font-mono text-xs">TLS 1.3</td>
                <td className="py-3 text-muted">Transport Layer Security (RFC 8446)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-muted">Generátor náhodnosti</td>
                <td className="py-3 pr-4 text-foreground font-mono text-xs">CSPRNG</td>
                <td className="py-3 text-muted">Kryptograficky bezpečný PRNG operačního systému</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Veškeré kryptografické operace jsou implementovány pomocí
          auditovaných knihoven (NaCl/libsodium). Vlastní kryptografické
          algoritmy nepoužíváme.
        </p>
      </>
    ),
  },
  {
    id: 'rizeni-pristupu',
    title: '5. Řízení přístupů',
    icon: Lock,
    content: (
      <>
        <p>
          Přístup k serverové infrastruktuře a produkčním systémům je řízený
          následujícími opatřeními:
        </p>
        <ul>
          <li>
            <strong>Vícefaktorová autentizace (MFA)</strong> — povinná pro
            přístup k produkčním systémům
          </li>
          <li>
            <strong>SSH klíče</strong> — přístup výhradně prostřednictvím
            SSH klíčů, přihlášení heslem je zakázáno
          </li>
          <li>
            <strong>Princip nejmenšího oprávnění</strong> — každý přístup
            je omezen na minimum nezbytné pro danou roli
          </li>
          <li>
            <strong>Audit log</strong> — veškeré přístupy k infrastruktuře
            jsou zaznamenávány
          </li>
          <li>
            <strong>Pravidelná revize</strong> — přístupová oprávnění jsou
            pravidelně přezkoumávána a nepotřebná revokována
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'sprava-incidentu',
    title: '6. Správa bezpečnostních incidentů',
    icon: AlertTriangle,
    content: (
      <>
        <p>
          V souladu s požadavky NIS2 (směrnice 2022/2555) a nového zákona
          o kybernetické bezpečnosti (nZKB) máme zaveden proces řízení
          bezpečnostních incidentů:
        </p>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-accent mb-3">
            Časové lhůty hlášení dle NIS2
          </h4>
          <ul>
            <li>
              <strong>Do 24 hodin</strong> — předběžné hlášení významného
              incidentu národnímu CSIRT týmu (NÚKIB)
            </li>
            <li>
              <strong>Do 72 hodin</strong> — podrobné hlášení s posouzením
              závažnosti, dopadu a přijatých opatření
            </li>
            <li>
              <strong>Do 1 měsíce</strong> — závěrečná zpráva s analýzou
              příčin, přijatými opatřeními a poučením
            </li>
          </ul>
        </div>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-accent mb-3">
            Proces reakce na incident
          </h4>
          <ol className="list-decimal list-inside space-y-1.5">
            <li>
              <strong>Detekce</strong> — identifikace a potvrzení incidentu
            </li>
            <li>
              <strong>Klasifikace</strong> — posouzení závažnosti a dopadu
            </li>
            <li>
              <strong>Izolace</strong> — omezení šíření incidentu
            </li>
            <li>
              <strong>Oznámení</strong> — informování NÚKIB a dotčených
              uživatelů
            </li>
            <li>
              <strong>Náprava</strong> — odstranění příčiny a obnovení služby
            </li>
            <li>
              <strong>Analýza</strong> — vyhodnocení příčin a poučení
            </li>
          </ol>
        </div>
        <p>
          V případě porušení zabezpečení osobních údajů budou dotčení
          uživatelé informováni bez zbytečného odkladu dle čl. 34 GDPR.
          Vzhledem k zero-knowledge architektuře je dopad na obsah
          komunikace minimální i v případě kompromitace serveru.
        </p>
      </>
    ),
  },
  {
    id: 'business-continuity',
    title: '7. Kontinuita činností',
    icon: RefreshCw,
    content: (
      <>
        <p>
          Pro zajištění dostupnosti služby a odolnosti vůči výpadkům
          přijímáme následující opatření:
        </p>
        <ul>
          <li>
            <strong>Zálohování</strong> — pravidelné automatizované zálohy
            serverové konfigurace a metadat (obsah zpráv na serveru
            neuchováváme)
          </li>
          <li>
            <strong>Disaster recovery</strong> — dokumentované postupy
            pro obnovu služby z zálohy
          </li>
          <li>
            <strong>Monitoring</strong> — nepřetržitý monitoring dostupnosti
            a výkonu služby
          </li>
          <li>
            <strong>Geografická redundance</strong> — infrastruktura
            s možností přepnutí na záložní lokaci
          </li>
          <li>
            <strong>Testování obnovy</strong> — pravidelné testování
            postupů disaster recovery
          </li>
        </ul>
        <p>
          Díky decentralizované povaze E2E šifrování jsou zprávy uloženy
          primárně na zařízeních uživatelů. Výpadek serveru tedy neznamená
          ztrátu historických zpráv.
        </p>
      </>
    ),
  },
  {
    id: 'dodavatelsky-retezec',
    title: '8. Řízení dodavatelského řetězce',
    icon: Link2,
    content: (
      <>
        <p>
          V souladu s požadavky NIS2 na řízení bezpečnosti dodavatelského
          řetězce:
        </p>
        <ul>
          <li>
            <strong>Závislosti</strong> — pravidelný audit a aktualizace
            softwarových závislostí (automatizované nástroje pro detekci
            zranitelností)
          </li>
          <li>
            <strong>Open source</strong> — preferujeme auditované open source
            knihovny s aktivní komunitou
          </li>
          <li>
            <strong>SBOM</strong> — udržujeme Software Bill of Materials
            pro transparentní přehled o všech komponentách
          </li>
          <li>
            <strong>Hosting</strong> — serverová infrastruktura provozovaná
            v České republice pod vlastní správou
          </li>
          <li>
            <strong>Minimalizace závislostí</strong> — používáme co nejmenší
            počet externích služeb a závislostí
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'skoleni',
    title: '9. Školení a awareness',
    icon: GraduationCap,
    content: (
      <>
        <p>
          Všechny osoby podílející se na vývoji a provozu Šepotu procházejí:
        </p>
        <ul>
          <li>
            <strong>Bezpečnostní školení</strong> — základy kybernetické
            bezpečnosti, bezpečný vývoj software
          </li>
          <li>
            <strong>OWASP awareness</strong> — znalost nejčastějších
            zranitelností webových aplikací
          </li>
          <li>
            <strong>Kryptografické minimum</strong> — principy šifrování,
            správa klíčů, bezpečné protokoly
          </li>
          <li>
            <strong>Incident response</strong> — znalost postupů při
            bezpečnostním incidentu
          </li>
          <li>
            <strong>GDPR a ochrana dat</strong> — principy zpracování
            osobních údajů
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'audit',
    title: '10. Audit a přezkoumání',
    icon: Search,
    content: (
      <>
        <p>
          Bezpečnostní opatření podléhají pravidelnému přezkoumání:
        </p>
        <ul>
          <li>
            <strong>Interní audit</strong> — pravidelné přezkoumání
            bezpečnostních opatření a jejich účinnosti
          </li>
          <li>
            <strong>Penetrační testy</strong> — pravidelné testování odolnosti
            služby vůči útokům
          </li>
          <li>
            <strong>Code audit</strong> — bezpečnostní revize zdrojového kódu,
            usnadněná open source povahou projektu
          </li>
          <li>
            <strong>Vulnerability scanning</strong> — automatizované skenování
            zranitelností infrastruktury
          </li>
          <li>
            <strong>Aktualizace politiky</strong> — tento dokument je
            přezkoumáván a aktualizován minimálně jednou ročně
          </li>
        </ul>
        <p>
          Výsledky bezpečnostních auditů relevantní pro uživatele budou
          zveřejňovány na webu.
        </p>
      </>
    ),
  },
  {
    id: 'nukib',
    title: '11. Spolupráce s NÚKIB',
    icon: FileCheck,
    content: (
      <>
        <p>
          Národní úřad pro kybernetickou a informační bezpečnost (NÚKIB) je
          regulátorem kybernetické bezpečnosti v České republice. V souladu
          s požadavky NIS2 a nZKB:
        </p>
        <ul>
          <li>
            Hlásíme významné bezpečnostní incidenty v zákonem stanovených
            lhůtách
          </li>
          <li>
            Spolupracujeme při řešení kybernetických hrozeb a incidentů
          </li>
          <li>
            Dodržujeme vyhlášky a doporučení NÚKIB v oblasti kybernetické
            bezpečnosti
          </li>
        </ul>
        <div className="card-glass my-4">
          <ul>
            <li>
              <strong>NÚKIB:</strong>{' '}
              <a
                href="https://www.nukib.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                www.nukib.cz
              </a>
            </li>
            <li>
              <strong>GovCERT.CZ:</strong>{' '}
              <a
                href="https://www.govcert.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                www.govcert.cz
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 'zranitelnosti',
    title: '12. Hlášení zranitelností',
    icon: Zap,
    content: (
      <>
        <p>
          Pokud jste objevili bezpečnostní zranitelnost v Šepotu, prosíme
          o její zodpovědné nahlášení. Podrobné informace naleznete v naší{' '}
          <a href="/zodpovedne-hlaseni" className="text-accent hover:underline">
            politice zodpovědného hlášení
          </a>
          .
        </p>
        <p>
          Bezpečnostní záležitosti hlaste na:{' '}
          <a href="mailto:security@sepot.cz" className="text-accent hover:underline">
            security@sepot.cz
          </a>
        </p>
      </>
    ),
  },
  {
    id: 'kontakt',
    title: '13. Kontakt na bezpečnostní tým',
    icon: Mail,
    content: (
      <>
        <div className="card-glass my-4">
          <ul>
            <li>
              <strong>Bezpečnostní záležitosti:</strong>{' '}
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
              <strong>Zodpovědné hlášení:</strong>{' '}
              <a href="/zodpovedne-hlaseni" className="text-accent hover:underline">
                sepot.cz/zodpovedne-hlaseni
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
  },
]

export default function BezpecnostniPolitikaPage() {
  return (
    <>
      {/* Hero */}
      <section className="mesh-gradient pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-white/[0.03] text-sm text-muted mb-6">
            <Shield size={14} className="text-accent" />
            NIS2 &amp; ISO 27001
          </div>
          <h1 className="heading-2 mb-4">
            Bezpečnostní{' '}
            <span className="text-gradient">politika</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            Přehled bezpečnostních opatření, kryptografických standardů
            a procesů, které chráníme váš soukromý messenger.
          </p>
          <p className="text-sm text-muted/60 mt-6">
            Účinnost od: 1. března 2026 | Verze 1.0
          </p>
        </div>
      </section>

      {/* Table of contents */}
      <section className="section pb-0">
        <div className="container max-w-3xl">
          <div className="card-glass">
            <h3 className="text-sm font-semibold text-foreground mb-3">Obsah dokumentu</h3>
            <ol className="grid sm:grid-cols-2 gap-1.5 text-sm text-muted list-decimal list-inside">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="hover:text-accent transition-colors">
                    {s.title.replace(/^\d+\.\s/, '')}
                  </a>
                </li>
              ))}
            </ol>
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
                  <div className="prose prose-invert prose-sm max-w-none text-muted leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:text-muted [&_strong]:text-foreground [&_p]:mb-3 [&_ol]:pl-5 [&_ol]:space-y-1.5">
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
              Šepot implementuje vícevrstvou bezpečnostní architekturu
              založenou na E2E šifrování, zero-knowledge principech
              a moderních kryptografických standardech. Dodržujeme principy
              NIS2 a ISO 27001 včetně řízení incidentů, kontinuity činností
              a řízení dodavatelského řetězce. Celý zdrojový kód je open
              source a otevřený nezávislému auditu.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
