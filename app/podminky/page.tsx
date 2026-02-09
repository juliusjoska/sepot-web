import type { Metadata } from 'next'
import { FileText, User, Shield, AlertTriangle, Code, Scale, XCircle, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Podmínky užití',
  description:
    'Podmínky užití služby Šepot — českého messengeru s end-to-end šifrováním. Provozovatel ajtak.it.',
}

const sections = [
  {
    id: 'provozovatel',
    title: '1. Provozovatel',
    icon: FileText,
    content: (
      <>
        <p>
          Provozovatelem služby Šepot (dále jen &bdquo;Služba&ldquo;) je:
        </p>
        <div className="card-glass my-4">
          <ul>
            <li>
              <strong>Obchodní značka:</strong> ajtak.it
            </li>
            <li>
              <strong>Jméno:</strong> Julius Joska
            </li>
            <li>
              <strong>IČO:</strong> 24409979
            </li>
            <li>
              <strong>E-mail:</strong>{' '}
              <a href="mailto:info@sepot.cz" className="text-accent hover:underline">
                info@sepot.cz
              </a>
            </li>
            <li>
              <strong>Web:</strong>{' '}
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
        </div>
      </>
    ),
  },
  {
    id: 'popis-sluzby',
    title: '2. Popis služby',
    icon: Shield,
    content: (
      <>
        <p>
          Šepot je <strong>messenger s end-to-end šifrováním</strong>, který umožňuje
          bezpečnou komunikaci mezi uživateli. Služba zahrnuje:
        </p>
        <ul>
          <li>Zasílání textových zpráv šifrovaných end-to-end</li>
          <li>Přenos souborů s end-to-end šifrováním</li>
          <li>Hlasové a video hovory (šifrované)</li>
          <li>Skupinové konverzace</li>
          <li>Synchronizaci mezi zařízeními</li>
        </ul>
        <p>
          Služba je poskytována <strong>zdarma</strong> pro osobní i komerční použití.
          Provozovatel si vyhrazuje právo v budoucnu zavést prémiové funkce za úplatu,
          přičemž základní komunikace zůstane vždy bezplatná.
        </p>
      </>
    ),
  },
  {
    id: 'registrace',
    title: '3. Registrace a účet',
    icon: User,
    content: (
      <>
        <p>Pro využívání Služby je nutná registrace. Při registraci:</p>
        <ul>
          <li>Zvolíte si uživatelské jméno a heslo</li>
          <li>Volitelně zadáte e-mailovou adresu pro obnovení účtu</li>
          <li>
            Na vašem zařízení se automaticky vygeneruje pár šifrovacích klíčů
          </li>
        </ul>
        <p>
          Jste odpovědní za <strong>bezpečné uchování přístupových údajů</strong> k vašemu
          účtu. Vzhledem k zero-knowledge architektuře nemůžeme obnovit ztracené heslo
          bez záložního e-mailu.
        </p>
        <p>
          Na jeden účet smí být registrována pouze jedna osoba. Sdílení účtu s třetími
          osobami není dovoleno.
        </p>
      </>
    ),
  },
  {
    id: 'pravidla-uzivani',
    title: '4. Pravidla užívání',
    icon: AlertTriangle,
    content: (
      <>
        <p>Při užívání Služby se zavazujete, že nebudete:</p>
        <ul>
          <li>Rozesílat nevyžádaná sdělení (spam)</li>
          <li>Šířit malware, viry nebo škodlivý software</li>
          <li>
            Sdílet obsah porušující zákony České republiky nebo Evropské unie
            (dětská pornografie, podněcování k násilí, terorismus)
          </li>
          <li>Pokoušet se o neoprávněný přístup k účtům jiných uživatelů</li>
          <li>Zneužívat infrastrukturu Služby k útokům na třetí strany</li>
          <li>Obcházet bezpečnostní opatření nebo technická omezení Služby</li>
          <li>Vydávat se za jinou osobu či organizaci</li>
        </ul>
        <p>
          Porušení těchto pravidel může vést k <strong>okamžitému zrušení účtu</strong>{' '}
          bez předchozího upozornění.
        </p>
      </>
    ),
  },
  {
    id: 'open-source',
    title: '5. Open source a licence',
    icon: Code,
    content: (
      <>
        <p>
          Zdrojový kód Šepotu je dostupný pod <strong>licencí MIT</strong> na platformě
          GitHub. To znamená, že:
        </p>
        <ul>
          <li>Kdokoliv si může kód prostudovat a ověřit bezpečnost</li>
          <li>Kód je možné volně kopírovat, upravovat a distribuovat</li>
          <li>Přispěvatelé jsou vítáni prostřednictvím pull requestů</li>
        </ul>
        <p>
          Licence MIT se vztahuje na zdrojový kód. Ochranná známka &bdquo;Šepot&ldquo;
          a logo zůstávají majetkem provozovatele. Použití názvu a loga pro odvozené
          projekty vyžaduje písemný souhlas.
        </p>
      </>
    ),
  },
  {
    id: 'omezeni-odpovednosti',
    title: '6. Omezení odpovědnosti',
    icon: Scale,
    content: (
      <>
        <p>Služba je poskytována &bdquo;tak, jak je&ldquo; (as is). Provozovatel:</p>
        <ul>
          <li>Negarantuje nepřetržitou dostupnost Služby</li>
          <li>
            Neodpovídá za obsah zpráv zasílaných uživateli (nemá k nim přístup
            z důvodu E2E šifrování)
          </li>
          <li>
            Neodpovídá za ztrátu dat způsobenou ztrátou zařízení nebo zapomenutím
            přístupových údajů
          </li>
          <li>
            Neodpovídá za škody vzniklé v důsledku výpadku Služby nebo zneužití
            třetí stranou
          </li>
        </ul>
        <p>
          Provozovatel vyvíjí maximální úsilí k zajištění bezpečnosti a dostupnosti
          Služby, ale nemůže zaručit její absolutní bezchybnost.
        </p>
      </>
    ),
  },
  {
    id: 'ukonceni',
    title: '7. Ukončení účtu',
    icon: XCircle,
    content: (
      <>
        <p>Svůj účet můžete kdykoli zrušit:</p>
        <ul>
          <li>
            <strong>V aplikaci</strong> — v nastavení zvolte &bdquo;Smazat účet&ldquo;
          </li>
          <li>
            <strong>E-mailem</strong> — napište na{' '}
            <a href="mailto:info@sepot.cz" className="text-accent hover:underline">
              info@sepot.cz
            </a>
          </li>
        </ul>
        <p>
          Po zrušení účtu budou veškeré údaje na serveru nenávratně smazány do 48 hodin.
          Zprávy uložené na zařízeních ostatních uživatelů tím nejsou dotčeny (jsou
          šifrovány a uloženy lokálně).
        </p>
        <p>
          Provozovatel si vyhrazuje právo zrušit účet uživatele, který opakovaně nebo
          závažně porušuje tyto podmínky.
        </p>
      </>
    ),
  },
  {
    id: 'zaverecna-ustanoveni',
    title: '8. Závěrečná ustanovení',
    icon: Calendar,
    content: (
      <>
        <p>
          Tyto podmínky se řídí právním řádem <strong>České republiky</strong>. Případné
          spory budou řešeny příslušnými českými soudy.
        </p>
        <p>
          Provozovatel si vyhrazuje právo tyto podmínky upravit. O podstatných změnách
          budou uživatelé informováni prostřednictvím aplikace nebo e-mailu alespoň
          30 dní předem.
        </p>
        <p>
          Pokud by některé ustanovení těchto podmínek bylo shledáno neplatným, ostatní
          ustanovení zůstávají v platnosti.
        </p>
      </>
    ),
  },
]

export default function PodminkyPage() {
  return (
    <>
      {/* Hero */}
      <section className="mesh-gradient pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-white/[0.03] text-sm text-muted mb-6">
            <FileText size={14} className="text-accent" />
            Právní dokument
          </div>
          <h1 className="heading-2 mb-4">
            Podmínky{' '}
            <span className="text-gradient">užití služby</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            Přehledné podmínky bez skrytých klauzulí. Šepot je transparentní
            a férový ke svým uživatelům.
          </p>
          <p className="text-sm text-muted/60 mt-6">
            Platné od: Únor 2026
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
            <h3 className="heading-3 mb-3">Stručně</h3>
            <p className="text-sm text-muted leading-relaxed">
              Šepot je bezplatný, open source messenger s E2E šifrováním. Používejte ho
              zodpovědně, nešiřte nelegální obsah a respektujte ostatní uživatele. Svůj
              účet můžete kdykoli smazat. Podmínky se řídí českým právem.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
