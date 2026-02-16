import type { Metadata } from 'next'
import {
  FileText,
  User,
  Shield,
  AlertTriangle,
  Code,
  Scale,
  XCircle,
  Calendar,
  BookOpen,
  Lock,
  Headphones,
  Gavel,
  Settings,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Obchodní podmínky',
  description:
    'Obchodní podmínky služby Šepot — českého messengeru s end-to-end šifrováním. Provozovatel ajtak.it.',
}

const sections = [
  {
    id: 'uvodni-ustanoveni',
    title: '1. Úvodní ustanovení',
    icon: FileText,
    content: (
      <>
        <p>
          Tyto obchodní podmínky (dále jen &bdquo;Podmínky&ldquo;) upravují
          práva a povinnosti mezi poskytovatelem služby Šepot a jejími
          uživateli.
        </p>
        <p>
          Provozovatelem a poskytovatelem služby Šepot (dále jen
          &bdquo;Služba&ldquo; nebo &bdquo;Šepot&ldquo;) je:
        </p>
        <div className="card-glass my-4">
          <ul>
            <li>
              <strong>Jméno:</strong> Julius Joska
            </li>
            <li>
              <strong>Podnikající pod značkou:</strong> ajtak.it
            </li>
            <li>
              <strong>IČO:</strong> [IČO]
            </li>
            <li>
              <strong>E-mail:</strong>{' '}
              <a href="mailto:kontakt@sepot.cz" className="text-accent hover:underline">
                kontakt@sepot.cz
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
        <p>
          Používáním Služby, stažením aplikace nebo registrací účtu vyjadřujete
          souhlas s těmito Podmínkami. Pokud s nimi nesouhlasíte, Službu
          nepoužívejte.
        </p>
      </>
    ),
  },
  {
    id: 'definice',
    title: '2. Definice pojmů',
    icon: BookOpen,
    content: (
      <>
        <p>Pro účely těchto Podmínek se rozumí:</p>
        <ul>
          <li>
            <strong>Poskytovatel</strong> — Julius Joska, podnikající pod
            značkou ajtak.it
          </li>
          <li>
            <strong>Uživatel</strong> — fyzická nebo právnická osoba, která
            využívá Službu
          </li>
          <li>
            <strong>Služba</strong> — komunikační platforma Šepot včetně
            webové stránky, mobilních a desktopových aplikací
          </li>
          <li>
            <strong>Účet</strong> — uživatelský profil vytvořený registrací
            do Služby
          </li>
          <li>
            <strong>E2E šifrování</strong> — end-to-end šifrování, při kterém
            jsou zprávy šifrovány na zařízení odesílatele a dešifrovány
            výhradně na zařízení příjemce
          </li>
          <li>
            <strong>Zero-knowledge</strong> — architektura, při které
            Poskytovatel nemá technický přístup k obsahu komunikace uživatelů
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'registrace',
    title: '3. Registrace a uživatelský účet',
    icon: User,
    content: (
      <>
        <p>
          Šepot umožňuje <strong>anonymní registraci</strong>. Pro vytvoření
          účtu:
        </p>
        <ul>
          <li>
            Zvolíte si uživatelské jméno (pseudonym) — nemusí obsahovat vaše
            skutečné jméno
          </li>
          <li>Zvolíte si heslo</li>
          <li>
            Volitelně zadáte e-mailovou adresu pro obnovení účtu (není povinné)
          </li>
          <li>
            Na vašem zařízení se automaticky vygeneruje pár šifrovacích klíčů
          </li>
        </ul>
        <p>
          <strong>Nevyžadujeme</strong> telefonní číslo, skutečné jméno,
          přístup ke kontaktům ani žádné jiné identifikační údaje.
        </p>
        <p>
          Jste odpovědní za bezpečné uchování přístupových údajů ke svému
          účtu. Vzhledem k zero-knowledge architektuře <strong>nemůžeme
          obnovit ztracené heslo</strong> bez záložního e-mailu. Ztráta hesla
          bez nastaveného záložního e-mailu znamená nevratnou ztrátu přístupu
          k účtu.
        </p>
        <p>
          Jeden účet smí používat pouze jedna osoba. Sdílení přihlašovacích
          údajů s třetími osobami není dovoleno.
        </p>
      </>
    ),
  },
  {
    id: 'popis-sluzby',
    title: '4. Popis služby',
    icon: Shield,
    content: (
      <>
        <p>
          Šepot je <strong>messenger s end-to-end šifrováním</strong>, který
          umožňuje bezpečnou komunikaci. Služba zahrnuje:
        </p>
        <ul>
          <li>Zasílání textových zpráv šifrovaných end-to-end</li>
          <li>Přenos souborů s end-to-end šifrováním</li>
          <li>Hlasové a video hovory (šifrované)</li>
          <li>Skupinové konverzace</li>
          <li>Synchronizaci mezi zařízeními</li>
        </ul>
        <p>
          Služba je poskytována <strong>zdarma</strong> pro osobní i komerční
          použití. Poskytovatel si vyhrazuje právo v budoucnu zavést prémiové
          funkce za úplatu, přičemž základní komunikace zůstane vždy bezplatná.
        </p>
      </>
    ),
  },
  {
    id: 'pravidla-uzivani',
    title: '5. Pravidla užívání služby',
    icon: AlertTriangle,
    content: (
      <>
        <p>Při užívání Služby se zavazujete, že nebudete:</p>
        <ul>
          <li>Rozesílat nevyžádaná sdělení (spam)</li>
          <li>Šířit malware, viry nebo škodlivý software</li>
          <li>
            Sdílet obsah porušující zákony České republiky nebo Evropské unie
            (zejména dětská pornografie, podněcování k násilí, terorismus,
            nenávistné projevy)
          </li>
          <li>Pokoušet se o neoprávněný přístup k účtům jiných uživatelů</li>
          <li>Zneužívat infrastrukturu Služby k útokům na třetí strany</li>
          <li>Obcházet bezpečnostní opatření nebo technická omezení Služby</li>
          <li>Vydávat se za jinou osobu či organizaci</li>
          <li>
            Provádět reverzní inženýring za účelem nalezení zranitelností
            bez koordinovaného hlášení (viz{' '}
            <a href="/zodpovedne-hlaseni" className="text-accent hover:underline">
              Zodpovědné hlášení
            </a>
            )
          </li>
        </ul>
        <p>
          Porušení těchto pravidel může vést k <strong>okamžitému zrušení
          účtu</strong> bez předchozího upozornění a bez nároku na náhradu.
        </p>
      </>
    ),
  },
  {
    id: 'prava-povinnosti-uzivatele',
    title: '6. Práva a povinnosti uživatele',
    icon: User,
    content: (
      <>
        <p>Uživatel má právo:</p>
        <ul>
          <li>Bezplatně využívat Službu v souladu s těmito Podmínkami</li>
          <li>Kdykoli smazat svůj účet a všechna související data</li>
          <li>Exportovat svá data ve strojově čitelném formátu</li>
          <li>
            Uplatnit svá práva dle GDPR (viz{' '}
            <a href="/ochrana-soukromi" className="text-accent hover:underline">
              Ochrana osobních údajů
            </a>
            )
          </li>
          <li>
            Nahlásit bezpečnostní zranitelnost v rámci zodpovědného hlášení
          </li>
        </ul>
        <p>Uživatel je povinen:</p>
        <ul>
          <li>Dodržovat tyto Podmínky a platné právní předpisy ČR a EU</li>
          <li>Chránit své přihlašovací údaje a šifrovací klíče</li>
          <li>
            Nést odpovědnost za veškerou aktivitu provedenou pod svým účtem
          </li>
          <li>
            Neprodleně oznámit Poskytovateli podezření na neoprávněný přístup
            ke svému účtu
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'prava-povinnosti-poskytovatele',
    title: '7. Práva a povinnosti poskytovatele',
    icon: Settings,
    content: (
      <>
        <p>Poskytovatel se zavazuje:</p>
        <ul>
          <li>
            Vyvíjet maximální úsilí k zajištění dostupnosti a bezpečnosti
            Služby
          </li>
          <li>
            Respektovat soukromí uživatelů a zpracovávat pouze minimální
            nezbytné údaje
          </li>
          <li>
            Udržovat end-to-end šifrování a zero-knowledge architekturu
          </li>
          <li>Transparentně informovat o změnách Služby a těchto Podmínek</li>
          <li>
            Reagovat na bezpečnostní incidenty v souladu s platnými předpisy
          </li>
        </ul>
        <p>Poskytovatel má právo:</p>
        <ul>
          <li>
            Zrušit nebo pozastavit účet uživatele porušujícího tyto Podmínky
          </li>
          <li>
            Provádět údržbu Služby (s minimalizací dopadů na uživatele)
          </li>
          <li>Aktualizovat funkce a vlastnosti Služby</li>
          <li>Upravit tyto Podmínky s předchozím oznámením</li>
        </ul>
      </>
    ),
  },
  {
    id: 'e2e-disclaimer',
    title: '8. E2E šifrování — prohlášení',
    icon: Lock,
    content: (
      <>
        <p>
          Uživatel bere na vědomí a souhlasí s následujícím:
        </p>
        <ul>
          <li>
            Veškerá komunikace prostřednictvím Šepotu je šifrována end-to-end.
            Poskytovatel <strong>nemá technickou možnost</strong> přistupovat
            k obsahu zpráv, souborů ani hovorů.
          </li>
          <li>
            Poskytovatel <strong>nemůže vyhovět</strong> žádostem o předání
            obsahu komunikace (ani od orgánů veřejné moci), protože takovým
            obsahem nedisponuje.
          </li>
          <li>
            Uživatel nese výhradní odpovědnost za obsah své komunikace.
            Poskytovatel nemá možnost obsah monitorovat, filtrovat ani
            moderovat.
          </li>
          <li>
            Ztráta šifrovacích klíčů (např. ztrátou zařízení bez zálohy)
            znamená nevratnou ztrátu přístupu ke zprávám. Poskytovatel
            nemůže klíče obnovit.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'omezeni-odpovednosti',
    title: '9. Odpovědnost a omezení',
    icon: Scale,
    content: (
      <>
        <p>
          Služba je poskytována &bdquo;tak, jak je&ldquo; (<em>as is</em>) a
          &bdquo;jak je dostupná&ldquo; (<em>as available</em>). Poskytovatel:
        </p>
        <ul>
          <li>Negarantuje nepřetržitou dostupnost Služby</li>
          <li>
            Neodpovídá za obsah zpráv zasílaných uživateli (nemá k nim
            přístup z důvodu E2E šifrování)
          </li>
          <li>
            Neodpovídá za ztrátu dat způsobenou ztrátou zařízení nebo
            zapomenutím přístupových údajů
          </li>
          <li>
            Neodpovídá za škody vzniklé v důsledku výpadku Služby, zásahu
            vyšší moci nebo zneužití třetí stranou
          </li>
          <li>
            Neodpovídá za jednání uživatelů prostřednictvím Služby
          </li>
        </ul>
        <p>
          Celková odpovědnost Poskytovatele vůči Uživateli je omezena na
          výši částky, kterou Uživatel zaplatil za využívání Služby za
          posledních 12 měsíců (v případě bezplatného využívání je tato
          částka nulová).
        </p>
        <p>
          Poskytovatel vyvíjí maximální úsilí k zajištění bezpečnosti
          a dostupnosti Služby, ale nemůže zaručit její absolutní bezchybnost.
        </p>
      </>
    ),
  },
  {
    id: 'open-source',
    title: '10. Open source a licence',
    icon: Code,
    content: (
      <>
        <p>
          Zdrojový kód Šepotu je dostupný pod <strong>licencí MIT</strong>{' '}
          na platformě GitHub (
          <a
            href="https://github.com/juliusjoska/sepot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            github.com/juliusjoska/sepot
          </a>
          ). To znamená:
        </p>
        <ul>
          <li>Kdokoliv si může kód prostudovat a ověřit bezpečnost</li>
          <li>Kód je možné volně kopírovat, upravovat a distribuovat</li>
          <li>Přispěvatelé jsou vítáni prostřednictvím pull requestů</li>
        </ul>
        <p>
          Licence MIT se vztahuje na zdrojový kód. Ochranná známka
          &bdquo;Šepot&ldquo; a logo zůstávají majetkem Poskytovatele.
          Použití názvu a loga pro odvozené projekty vyžaduje písemný
          souhlas.
        </p>
      </>
    ),
  },
  {
    id: 'reklamace-podpora',
    title: '11. Reklamace a podpora',
    icon: Headphones,
    content: (
      <>
        <p>
          Dotazy, podněty a reklamace týkající se Služby zasílejte na:
        </p>
        <ul>
          <li>
            <strong>E-mail:</strong>{' '}
            <a href="mailto:kontakt@sepot.cz" className="text-accent hover:underline">
              kontakt@sepot.cz
            </a>
          </li>
          <li>
            <strong>Kontaktní formulář:</strong>{' '}
            <a href="/kontakt" className="text-accent hover:underline">
              sepot.cz/kontakt
            </a>
          </li>
        </ul>
        <p>
          Na vaše podněty odpovíme bez zbytečného odkladu, nejpozději do
          30 dnů.
        </p>
        <p>
          Bezpečnostní zranitelnosti hlaste prostřednictvím procesu{' '}
          <a href="/zodpovedne-hlaseni" className="text-accent hover:underline">
            zodpovědného hlášení
          </a>{' '}
          na adresu{' '}
          <a href="mailto:security@sepot.cz" className="text-accent hover:underline">
            security@sepot.cz
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'ochrana-udaju',
    title: '12. Ochrana osobních údajů',
    icon: Shield,
    content: (
      <>
        <p>
          Informace o zpracování osobních údajů naleznete v samostatném
          dokumentu{' '}
          <a href="/ochrana-soukromi" className="text-accent hover:underline">
            Zásady ochrany osobních údajů
          </a>
          , který je nedílnou součástí těchto Podmínek.
        </p>
      </>
    ),
  },
  {
    id: 'zmeny-podminek',
    title: '13. Změny podmínek',
    icon: Calendar,
    content: (
      <>
        <p>
          Poskytovatel si vyhrazuje právo tyto Podmínky upravit. O podstatných
          změnách budou uživatelé informováni prostřednictvím:
        </p>
        <ul>
          <li>Oznámení v aplikaci</li>
          <li>Informace na webových stránkách</li>
          <li>E-mailu (pokud je k dispozici)</li>
        </ul>
        <p>
          Změny budou oznámeny alespoň <strong>30 dní</strong> před nabytím
          účinnosti. Pokud s novými Podmínkami nesouhlasíte, máte právo
          Službu přestat používat a svůj účet smazat.
        </p>
        <p>
          Pokračováním v užívání Služby po datu účinnosti nových Podmínek
          vyjadřujete souhlas s jejich zněním.
        </p>
      </>
    ),
  },
  {
    id: 'rozhodne-pravo',
    title: '14. Rozhodné právo a řešení sporů',
    icon: Gavel,
    content: (
      <>
        <p>
          Tyto Podmínky se řídí právním řádem <strong>České republiky</strong>.
          Případné spory budou řešeny příslušnými českými soudy.
        </p>
        <p>
          Pro mimosoudní řešení spotřebitelských sporů je příslušná Česká
          obchodní inspekce (
          <a
            href="https://www.coi.cz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            www.coi.cz
          </a>
          ). Pro online řešení sporů můžete využít platformu ODR (
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            ec.europa.eu/consumers/odr
          </a>
          ).
        </p>
      </>
    ),
  },
  {
    id: 'zaverecna-ustanoveni',
    title: '15. Závěrečná ustanovení',
    icon: FileText,
    content: (
      <>
        <p>
          Pokud by některé ustanovení těchto Podmínek bylo shledáno neplatným
          nebo nevymahatelným, ostatní ustanovení zůstávají v platnosti
          a účinnosti. Neplatné ustanovení bude nahrazeno ustanovením, které
          se svým účelem nejvíce blíží původnímu záměru.
        </p>
        <p>
          Tyto Podmínky představují úplnou dohodu mezi Poskytovatelem
          a Uživatelem ohledně užívání Služby a nahrazují všechna předchozí
          ujednání.
        </p>
        <p>
          Nedílnou součástí těchto Podmínek jsou:
        </p>
        <ul>
          <li>
            <a href="/ochrana-soukromi" className="text-accent hover:underline">
              Zásady ochrany osobních údajů
            </a>
          </li>
          <li>
            <a href="/cookies" className="text-accent hover:underline">
              Zásady používání cookies
            </a>
          </li>
          <li>
            <a href="/bezpecnostni-politika" className="text-accent hover:underline">
              Bezpečnostní politika
            </a>
          </li>
        </ul>
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
            Obchodní{' '}
            <span className="text-gradient">podmínky</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            Přehledné podmínky bez skrytých klauzulí. Šepot je transparentní
            a férový ke svým uživatelům.
          </p>
          <p className="text-sm text-muted/60 mt-6">
            Účinnost od: 1. března 2026 | Verze 2.0
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
              Šepot je bezplatný, open source messenger s E2E šifrováním.
              Registrace je anonymní — nevyžadujeme telefon ani skutečné jméno.
              Používejte ho zodpovědně, nešiřte nelegální obsah a respektujte
              ostatní uživatele. Svůj účet můžete kdykoli smazat. Nemáme
              přístup k obsahu vašich zpráv. Podmínky se řídí českým právem.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
