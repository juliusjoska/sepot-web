import type { Metadata } from 'next'
import { Cookie, ShieldCheck, BarChart3, Settings, RefreshCw, Database, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Zásady cookies',
  description:
    'Zásady používání cookies na webu Šepot. Pouze technické cookies, žádné sledování, žádná analytika třetích stran.',
}

const cookieTypes = [
  {
    name: 'Cookie souhlas',
    technical: 'cookie-consent',
    purpose: 'Zapamatování vašeho rozhodnutí o cookies',
    duration: '12 měsíců',
    required: true,
  },
]

const localStorageItems = [
  {
    name: 'Téma vzhledu',
    technical: 'theme',
    purpose: 'Uložení preference tmavého/světlého režimu',
    duration: 'Trvalé (do smazání)',
  },
]

const sections = [
  {
    id: 'co-jsou-cookies',
    title: '1. Co jsou cookies',
    icon: Cookie,
    content: (
      <>
        <p>
          Cookies jsou malé textové soubory, které webové stránky ukládají
          ve vašem prohlížeči. Slouží k zapamatování vašich předvoleb
          a zajištění správného fungování webu.
        </p>
        <p>
          Na webu sepot.cz používáme{' '}
          <strong>pouze nezbytně nutné technické cookies</strong>. V souladu
          s naší filozofií minimálního sběru dat nepoužíváme žádné sledovací,
          marketingové ani analytické cookies třetích stran.
        </p>
        <p>
          Právní základ pro používání technických cookies: Oprávněný zájem
          správce dle čl. 6 odst. 1 písm. f) GDPR — zajištění správné funkce
          webových stránek. Technické cookies jsou rovněž vyňaty z povinnosti
          získat souhlas dle směrnice ePrivacy (čl. 5 odst. 3 směrnice
          2002/58/ES).
        </p>
      </>
    ),
  },
  {
    id: 'jake-cookies',
    title: '2. Jaké cookies používáme',
    icon: ShieldCheck,
    content: (
      <>
        <p>
          Používáme výhradně <strong>technické cookies</strong> nezbytné
          pro fungování webu:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-3 pr-4 text-foreground font-semibold">Cookie</th>
                <th className="py-3 pr-4 text-foreground font-semibold">Technický název</th>
                <th className="py-3 pr-4 text-foreground font-semibold">Účel</th>
                <th className="py-3 pr-4 text-foreground font-semibold">Platnost</th>
                <th className="py-3 text-foreground font-semibold">Nutné</th>
              </tr>
            </thead>
            <tbody>
              {cookieTypes.map((cookie) => (
                <tr key={cookie.name} className="border-b border-border/50">
                  <td className="py-3 pr-4 text-foreground">{cookie.name}</td>
                  <td className="py-3 pr-4 text-muted font-mono text-xs">{cookie.technical}</td>
                  <td className="py-3 pr-4 text-muted">{cookie.purpose}</td>
                  <td className="py-3 pr-4 text-muted">{cookie.duration}</td>
                  <td className="py-3">
                    {cookie.required ? (
                      <span className="text-accent text-xs font-medium px-2 py-0.5 rounded-full bg-accent/10">
                        Ano
                      </span>
                    ) : (
                      <span className="text-muted text-xs">Ne</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: 'local-storage',
    title: '3. Local Storage',
    icon: Database,
    content: (
      <>
        <p>
          Kromě cookies využíváme také <strong>Local Storage</strong>{' '}
          prohlížeče pro uložení uživatelských preferencí. Na rozdíl od
          cookies nejsou tato data odesílána na server — zůstávají výhradně
          ve vašem prohlížeči.
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-3 pr-4 text-foreground font-semibold">Položka</th>
                <th className="py-3 pr-4 text-foreground font-semibold">Klíč</th>
                <th className="py-3 pr-4 text-foreground font-semibold">Účel</th>
                <th className="py-3 text-foreground font-semibold">Platnost</th>
              </tr>
            </thead>
            <tbody>
              {localStorageItems.map((item) => (
                <tr key={item.name} className="border-b border-border/50">
                  <td className="py-3 pr-4 text-foreground">{item.name}</td>
                  <td className="py-3 pr-4 text-muted font-mono text-xs">{item.technical}</td>
                  <td className="py-3 pr-4 text-muted">{item.purpose}</td>
                  <td className="py-3 text-muted">{item.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          V aplikaci Šepot (ne na webu) se Local Storage využívá rovněž
          pro uložení zašifrovaných zpráv a šifrovacích klíčů. Tato data
          nikdy neopouštějí vaše zařízení.
        </p>
      </>
    ),
  },
  {
    id: 'zadne-sledovani',
    title: '4. Co nepoužíváme',
    icon: BarChart3,
    content: (
      <>
        <p>
          V souladu s naší filozofií minimálního sběru dat{' '}
          <strong>nepoužíváme</strong>:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 my-4">
          {[
            'Google Analytics',
            'Facebook Pixel',
            'Sledovací cookies třetích stran',
            'Marketingové cookies',
            'Cookies pro cílenou reklamu',
            'Fingerprinting prohlížeče',
            'Retargetingové skripty',
            'Hotjar, Clarity a podobné nástroje',
          ].map((item) => (
            <div key={item} className="card-glass flex items-center gap-3 py-3">
              <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                <span className="text-red-400 text-xs">&#x2717;</span>
              </div>
              <span className="text-sm text-muted">{item}</span>
            </div>
          ))}
        </div>
        <p>
          Nesledujeme vaše chování na webu, nesbíráme statistiky návštěvnosti
          od externích poskytovatelů a nesdílíme žádná data s reklamními
          sítěmi. Nepoužíváme ani vlastní analytiku — počet návštěv ani
          chování uživatelů na webu neměříme.
        </p>
      </>
    ),
  },
  {
    id: 'sprava-cookies',
    title: '5. Jak cookies spravovat',
    icon: Settings,
    content: (
      <>
        <p>
          Technické cookies můžete odmítnout nebo smazat v nastavení svého
          prohlížeče. Mějte však na paměti, že bez nich nemusí web fungovat
          správně.
        </p>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-accent mb-3">
            Nastavení v prohlížečích
          </h4>
          <ul>
            <li>
              <strong>Chrome:</strong> Nastavení &rarr; Soukromí a zabezpečení
              &rarr; Soubory cookie třetích stran
            </li>
            <li>
              <strong>Firefox:</strong> Nastavení &rarr; Soukromí
              a zabezpečení &rarr; Cookies a data stránek
            </li>
            <li>
              <strong>Safari:</strong> Předvolby &rarr; Soukromí &rarr;
              Spravovat data webových stránek
            </li>
            <li>
              <strong>Edge:</strong> Nastavení &rarr; Soukromí, hledání
              a služby &rarr; Soubory cookie
            </li>
          </ul>
        </div>
        <p>
          Můžete také využít režim &bdquo;anonymního prohlížení&ldquo;
          (inkognito), který cookies automaticky smaže po zavření okna
          prohlížeče.
        </p>
        <p>
          Pro smazání Local Storage dat: V prohlížeči otevřete Nástroje pro
          vývojáře (F12) &rarr; záložka Application/Úložiště &rarr;
          Local Storage &rarr; sepot.cz &rarr; smazat požadované položky.
        </p>
      </>
    ),
  },
  {
    id: 'aktualizace',
    title: '6. Aktualizace těchto zásad',
    icon: RefreshCw,
    content: (
      <>
        <p>
          Tyto zásady můžeme příležitostně aktualizovat. O případných změnách
          budeme informovat na této stránce. Doporučujeme tuto stránku
          občas navštívit.
        </p>
        <p>
          Pokud máte otázky ohledně cookies, kontaktujte nás na{' '}
          <a href="mailto:kontakt@sepot.cz" className="text-accent hover:underline">
            kontakt@sepot.cz
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'pravni-zaklad',
    title: '7. Právní základ',
    icon: Info,
    content: (
      <>
        <p>
          Zásady používání cookies se řídí následujícími právními předpisy:
        </p>
        <ul>
          <li>
            <strong>GDPR</strong> — Nařízení (EU) 2016/679 o ochraně fyzických
            osob v souvislosti se zpracováním osobních údajů
          </li>
          <li>
            <strong>Zákon č. 110/2019 Sb.</strong> — o zpracování osobních údajů
          </li>
          <li>
            <strong>Směrnice ePrivacy</strong> — Směrnice 2002/58/ES o soukromí
            a elektronických komunikacích
          </li>
          <li>
            <strong>Zákon č. 127/2005 Sb.</strong> — o elektronických komunikacích
          </li>
        </ul>
      </>
    ),
  },
]

export default function CookiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="mesh-gradient pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-white/[0.03] text-sm text-muted mb-6">
            <Cookie size={14} className="text-accent" />
            Minimální cookies
          </div>
          <h1 className="heading-2 mb-4">
            Zásady používání{' '}
            <span className="text-gradient">cookies</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            Šepot používá pouze nezbytné technické cookies. Žádné sledování,
            žádná analytika, žádné třetí strany.
          </p>
          <p className="text-sm text-muted/60 mt-6">
            Účinnost od: 1. března 2026 | Verze 2.0
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
              Na webu Šepot používáme pouze jedno technické cookie pro
              zapamatování vašeho souhlasu. Nepoužíváme Google Analytics,
              Facebook Pixel, Hotjar ani žádné jiné sledovací nástroje.
              Vaše soukromí respektujeme i na našem webu — neměříme
              návštěvnost, nesledujeme chování a nesdílíme data s nikým.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
