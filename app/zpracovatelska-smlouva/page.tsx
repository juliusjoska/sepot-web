import type { Metadata } from 'next'
import {
  FileText,
  Shield,
  Users,
  Lock,
  Globe,
  Search,
  Trash2,
  AlertTriangle,
  Mail,
  Scale,
  Building,
  Clock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Zpracovatelská smlouva (DPA)',
  description:
    'Šablona zpracovatelské smlouvy (Data Processing Agreement) pro enterprise zákazníky služby Šepot dle GDPR.',
}

const sections = [
  {
    id: 'predmet',
    title: '1. Předmět a účel zpracování',
    icon: FileText,
    content: (
      <>
        <p>
          Tato zpracovatelská smlouva (dále jen &bdquo;DPA&ldquo;) upravuje
          podmínky zpracování osobních údajů mezi:
        </p>
        <div className="card-glass my-4">
          <ul>
            <li>
              <strong>Správce:</strong> Organizace využívající službu Šepot
              pro své zaměstnance nebo členy (dále jen &bdquo;Správce&ldquo;)
            </li>
            <li>
              <strong>Zpracovatel:</strong> Julius Joska, podnikající pod
              značkou ajtak.it, IČO: [IČO] (dále jen &bdquo;Zpracovatel&ldquo;)
            </li>
          </ul>
        </div>
        <p>
          Zpracovatel poskytuje Správci komunikační službu Šepot s end-to-end
          šifrováním. V rámci poskytování služby Zpracovatel zpracovává
          osobní údaje jménem Správce v rozsahu nezbytném pro provoz služby.
        </p>
        <p>
          <strong>Účel zpracování:</strong> Provoz komunikační platformy
          s E2E šifrováním, správa uživatelských účtů, doručování zašifrovaných
          zpráv.
        </p>
        <p>
          <strong>Důležité upozornění:</strong> Vzhledem k zero-knowledge
          architektuře a end-to-end šifrování Zpracovatel nemá technickou
          možnost přistupovat k obsahu komunikace uživatelů. Obsah zpráv
          proto nelze považovat za osobní údaje zpracovávané Zpracovatelem.
        </p>
      </>
    ),
  },
  {
    id: 'kategorie',
    title: '2. Kategorie subjektů a údajů',
    icon: Users,
    content: (
      <>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-accent mb-3">
            Kategorie subjektů údajů
          </h4>
          <ul>
            <li>Zaměstnanci a spolupracovníci Správce</li>
            <li>Členové organizace Správce</li>
            <li>Další osoby, kterým Správce přidělí přístup ke Službě</li>
          </ul>
        </div>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-accent mb-3">
            Kategorie osobních údajů
          </h4>
          <ul>
            <li>Uživatelské jméno (pseudonym)</li>
            <li>E-mailová adresa (pokud je poskytnuta)</li>
            <li>Veřejný šifrovací klíč</li>
            <li>Časové razítko registrace a poslední aktivity</li>
            <li>Hash hesla (Argon2id)</li>
            <li>Organizační příslušnost (přiřazení ke Správci)</li>
          </ul>
        </div>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-cyan mb-3">
            Údaje MIMO rozsah zpracování
          </h4>
          <ul>
            <li>Obsah zpráv (E2E šifrování — Zpracovatel nemá přístup)</li>
            <li>Metadata konverzací</li>
            <li>IP adresy uživatelů</li>
            <li>Soukromé šifrovací klíče</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 'povinnosti-zpracovatele',
    title: '3. Povinnosti zpracovatele',
    icon: Shield,
    content: (
      <>
        <p>
          Zpracovatel se zavazuje:
        </p>
        <ul>
          <li>
            Zpracovávat osobní údaje <strong>pouze na základě
            doložených pokynů Správce</strong>, a to i pokud jde o předání
            osobních údajů do třetí země (čl. 28 odst. 3 písm. a) GDPR)
          </li>
          <li>
            Zajistit, aby se osoby oprávněné zpracovávat osobní údaje
            <strong> zavázaly k mlčenlivosti</strong> nebo aby se na ně
            vztahovala zákonná povinnost mlčenlivosti (čl. 28 odst. 3
            písm. b) GDPR)
          </li>
          <li>
            Přijmout veškerá opatření požadovaná dle <strong>čl. 32
            GDPR</strong> (zabezpečení zpracování)
          </li>
          <li>
            Dodržovat podmínky pro zapojení dalšího zpracovatele
            (sub-zpracovatele) stanovené v čl. 28 odst. 2 a 4 GDPR
          </li>
          <li>
            Být Správci nápomocen při <strong>plnění povinnosti
            reagovat na žádosti subjektů údajů</strong> o výkon jejich
            práv dle kapitoly III GDPR
          </li>
          <li>
            Být Správci nápomocen při zajištění souladu s povinnostmi
            dle čl. 32 až 36 GDPR (zabezpečení, hlášení porušení,
            posouzení vlivu)
          </li>
          <li>
            Po ukončení poskytování služby <strong>vymazat nebo vrátit
            všechny osobní údaje</strong> dle rozhodnutí Správce a vymazat
            existující kopie (čl. 28 odst. 3 písm. g) GDPR)
          </li>
          <li>
            Poskytnout Správci veškeré informace potřebné k <strong>doložení
            plnění povinností</strong> a umožnit audity a inspekce (čl. 28
            odst. 3 písm. h) GDPR)
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'sub-zpracovatele',
    title: '4. Sub-zpracovatelé',
    icon: Building,
    content: (
      <>
        <p>
          Zpracovatel v současnosti nevyužívá žádné sub-zpracovatele.
          Veškerá infrastruktura je provozována pod vlastní správou na
          území České republiky.
        </p>
        <p>
          V případě záměru zapojit sub-zpracovatele Zpracovatel:
        </p>
        <ul>
          <li>
            Předem písemně informuje Správce o zamýšleném zapojení nebo
            nahrazení sub-zpracovatele
          </li>
          <li>
            Poskytne Správci možnost <strong>vznést námitku</strong> proti
            změnám do 30 dnů od oznámení
          </li>
          <li>
            Zajistí, aby na sub-zpracovatele byly uloženy <strong>stejné
            povinnosti</strong> ohledně ochrany údajů jako na Zpracovatele
          </li>
          <li>
            Ponese plnou odpovědnost za plnění povinností sub-zpracovatele
          </li>
        </ul>
        <p>
          Aktuální seznam sub-zpracovatelů (pokud existují) je dostupný
          na vyžádání.
        </p>
      </>
    ),
  },
  {
    id: 'bezpecnostni-opatreni',
    title: '5. Bezpečnostní opatření',
    icon: Lock,
    content: (
      <>
        <p>
          Zpracovatel přijímá následující technická a organizační opatření
          dle čl. 32 GDPR:
        </p>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-accent mb-3">
            Technická opatření
          </h4>
          <ul>
            <li>End-to-end šifrování veškeré komunikace (X25519, XSalsa20-Poly1305)</li>
            <li>Zero-knowledge architektura serveru</li>
            <li>Hashování hesel algoritmem Argon2id</li>
            <li>TLS 1.3 pro veškerý síťový provoz</li>
            <li>Šifrování dat v klidu na serverových discích</li>
            <li>Automatizovaný monitoring a detekce anomálií</li>
            <li>Pravidelné bezpečnostní audity a penetrační testy</li>
            <li>Automatizovaná aktualizace bezpečnostních záplat</li>
          </ul>
        </div>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-accent mb-3">
            Organizační opatření
          </h4>
          <ul>
            <li>Princip minimálních oprávnění pro přístup k infrastruktuře</li>
            <li>Vícefaktorová autentizace pro administrátorský přístup</li>
            <li>Pravidelné školení bezpečnosti pro všechny osoby s přístupem</li>
            <li>Dokumentovaný proces řízení incidentů</li>
            <li>Plán kontinuity činností a obnovy po havárii</li>
          </ul>
        </div>
        <p>
          Podrobný popis bezpečnostních opatření je dostupný v{' '}
          <a href="/bezpecnostni-politika" className="text-accent hover:underline">
            Bezpečnostní politice
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'preshranicni-prenosy',
    title: '6. Přeshraniční přenosy',
    icon: Globe,
    content: (
      <>
        <p>
          Osobní údaje jsou zpracovávány <strong>výhradně na území České
          republiky</strong> (Evropský hospodářský prostor).
        </p>
        <p>
          Zpracovatel nepředává osobní údaje do třetích zemí mimo EHP.
          V případě, že by takový přenos byl v budoucnu nezbytný,
          Zpracovatel:
        </p>
        <ul>
          <li>Předem získá písemný souhlas Správce</li>
          <li>
            Zajistí odpovídající záruky dle kapitoly V GDPR (standardní
            smluvní doložky schválené Evropskou komisí, rozhodnutí
            o přiměřenosti apod.)
          </li>
          <li>
            Provede posouzení vlivu přenosu (Transfer Impact Assessment)
          </li>
          <li>
            Poskytne Správci dokumentaci k přijatým zárukám
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'audit',
    title: '7. Audit a kontrola',
    icon: Search,
    content: (
      <>
        <p>
          Správce má právo provádět audity souladu zpracování s touto
          DPA:
        </p>
        <ul>
          <li>
            <strong>Audit na místě</strong> — po předchozím písemném
            oznámení alespoň 30 dní předem, v pracovní době, maximálně
            jednou ročně (pokud není odůvodněno incidentem)
          </li>
          <li>
            <strong>Dokumentační audit</strong> — Zpracovatel poskytne
            na vyžádání relevantní dokumentaci, certifikáty a zprávy
            z auditů
          </li>
          <li>
            <strong>Třetí strana</strong> — audit může provádět nezávislý
            auditor pověřený Správcem, za předpokladu podpisu dohody
            o mlčenlivosti
          </li>
        </ul>
        <p>
          Zpracovatel neprodleně informuje Správce, pokud se dle jeho
          názoru pokyn Správce porušuje GDPR nebo jiné právní předpisy
          v oblasti ochrany údajů (čl. 28 odst. 3 GDPR).
        </p>
        <p>
          Náklady auditu nese Správce, pokud audit neprokáže porušení
          povinností Zpracovatele — v takovém případě náklady nese
          Zpracovatel.
        </p>
      </>
    ),
  },
  {
    id: 'hlaseni-incidentu',
    title: '8. Hlášení porušení zabezpečení',
    icon: AlertTriangle,
    content: (
      <>
        <p>
          V případě porušení zabezpečení osobních údajů (data breach)
          Zpracovatel:
        </p>
        <ul>
          <li>
            <strong>Bez zbytečného odkladu</strong> (nejpozději do 24
            hodin od zjištění) oznámí porušení Správci
          </li>
          <li>
            Poskytne Správci veškeré dostupné informace potřebné pro
            <strong> oznámení dozorovému úřadu</strong> dle čl. 33 GDPR,
            zejména:
            <ul className="mt-2">
              <li>Povahu porušení včetně kategorií a přibližného počtu dotčených subjektů</li>
              <li>Pravděpodobné důsledky porušení</li>
              <li>Opatření přijatá nebo navrhovaná k řešení porušení</li>
              <li>Kontaktní údaje na osobu odpovědnou za řešení</li>
            </ul>
          </li>
          <li>
            Spolupracuje se Správcem při <strong>zmírnění následků</strong>{' '}
            a dokumentaci incidentu
          </li>
        </ul>
        <p>
          Vzhledem k zero-knowledge architektuře je dopad porušení
          zabezpečení na obsah komunikace uživatelů minimální, protože
          Zpracovatel nemá přístup k soukromým klíčům ani obsahu zpráv.
        </p>
      </>
    ),
  },
  {
    id: 'ukonceni',
    title: '9. Ukončení a výmaz údajů',
    icon: Trash2,
    content: (
      <>
        <p>
          Po ukončení poskytování služby (ať již výpovědí smlouvy, uplynutím
          doby nebo jiným způsobem) Zpracovatel:
        </p>
        <ul>
          <li>
            Dle rozhodnutí Správce buď <strong>vymaže, nebo vrátí</strong>{' '}
            všechny osobní údaje zpracovávané jménem Správce
          </li>
          <li>
            Vymaže veškeré existující kopie, pokud právní předpisy
            nevyžadují jejich uchování
          </li>
          <li>
            <strong>Lhůta pro výmaz:</strong> 30 dnů od ukončení poskytování služby
          </li>
          <li>
            Na vyžádání poskytne Správci písemné potvrzení o provedení výmazu
          </li>
        </ul>
        <p>
          Správce má možnost před ukončením exportovat data svých uživatelů
          prostřednictvím administrátorského rozhraní.
        </p>
      </>
    ),
  },
  {
    id: 'doba-trvani',
    title: '10. Doba trvání',
    icon: Clock,
    content: (
      <>
        <p>
          Tato DPA nabývá účinnosti dnem podpisu oběma stranami a zůstává
          v platnosti po celou dobu poskytování Služby Zpracovatelem
          Správci.
        </p>
        <p>
          Ustanovení týkající se mlčenlivosti, výmazu údajů a odpovědnosti
          přetrvávají i po ukončení platnosti této DPA.
        </p>
      </>
    ),
  },
  {
    id: 'rozhodne-pravo',
    title: '11. Rozhodné právo',
    icon: Scale,
    content: (
      <>
        <p>
          Tato DPA se řídí právním řádem <strong>České republiky</strong>{' '}
          a GDPR. V případě rozporu mezi touto DPA a hlavní smlouvou
          o poskytování služby mají přednost ustanovení této DPA týkající
          se ochrany osobních údajů.
        </p>
        <p>
          Případné spory budou řešeny příslušnými českými soudy.
        </p>
      </>
    ),
  },
  {
    id: 'kontakt',
    title: '12. Kontakt',
    icon: Mail,
    content: (
      <>
        <p>
          Pro uzavření zpracovatelské smlouvy nebo dotazy k této šabloně
          kontaktujte:
        </p>
        <div className="card-glass my-4">
          <ul>
            <li>
              <strong>E-mail:</strong>{' '}
              <a href="mailto:kontakt@sepot.cz" className="text-accent hover:underline">
                kontakt@sepot.cz
              </a>
            </li>
            <li>
              <strong>Předmět:</strong> DPA / Zpracovatelská smlouva
            </li>
          </ul>
        </div>
        <p>
          Tuto šablonu DPA je možné uzavřít elektronicky. Pro individuální
          úpravy nás kontaktujte.
        </p>
      </>
    ),
  },
]

export default function ZpracovatelskaSmlouvaPage() {
  return (
    <>
      {/* Hero */}
      <section className="mesh-gradient pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-white/[0.03] text-sm text-muted mb-6">
            <FileText size={14} className="text-accent" />
            Data Processing Agreement
          </div>
          <h1 className="heading-2 mb-4">
            Zpracovatelská{' '}
            <span className="text-gradient">smlouva (DPA)</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            Šablona zpracovatelské smlouvy dle čl. 28 GDPR pro organizace
            využívající Šepot pro svou interní komunikaci.
          </p>
          <p className="text-sm text-muted/60 mt-6">
            Účinnost od: 1. března 2026 | Verze 1.0
          </p>
        </div>
      </section>

      {/* Notice */}
      <section className="section pb-0">
        <div className="container max-w-3xl">
          <div className="gradient-border">
            <div className="flex gap-3">
              <AlertTriangle size={20} className="text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">
                  Informace k tomuto dokumentu
                </p>
                <p className="text-sm text-muted">
                  Tento dokument je šablonou zpracovatelské smlouvy. Pro její
                  uzavření je nutný podpis obou stran. Kontaktujte nás na{' '}
                  <a href="mailto:kontakt@sepot.cz" className="text-accent hover:underline">
                    kontakt@sepot.cz
                  </a>{' '}
                  pro individuální uzavření DPA.
                </p>
              </div>
            </div>
          </div>
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
            <h3 className="heading-3 mb-3">Shrnutí</h3>
            <p className="text-sm text-muted leading-relaxed">
              Tato zpracovatelská smlouva definuje povinnosti Zpracovatele
              (ajtak.it) při zpracování osobních údajů jménem Správce
              (organizace). Díky zero-knowledge architektuře je rozsah
              zpracovávaných údajů minimální a obsah komunikace je mimo
              dosah Zpracovatele. Data jsou zpracovávána výhradně na území
              ČR. Pro uzavření DPA kontaktujte kontakt@sepot.cz.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
