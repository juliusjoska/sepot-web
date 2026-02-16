import type { Metadata } from 'next'
import {
  Shield,
  Lock,
  Eye,
  Server,
  Trash2,
  Download,
  Mail,
  Scale,
  Globe,
  Clock,
  UserCheck,
  Database,
  FileSearch,
  AlertCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ochrana osobních údajů',
  description:
    'Zásady ochrany osobních údajů služby Šepot dle GDPR a zákona č. 110/2019 Sb. Minimální sběr dat, E2E šifrování, zero-knowledge architektura.',
}

const sections = [
  {
    id: 'spravce',
    title: '1. Správce osobních údajů',
    icon: Shield,
    content: (
      <>
        <p>
          Správcem osobních údajů ve smyslu čl. 4 odst. 7 Nařízení Evropského
          parlamentu a Rady (EU) 2016/679, o ochraně fyzických osob v souvislosti
          se zpracováním osobních údajů (dále jen <strong>&bdquo;GDPR&ldquo;</strong>), je:
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
          Správce nejmenoval pověřence pro ochranu osobních údajů, neboť mu
          tato povinnost nevzniká dle čl. 37 GDPR. Pro veškeré dotazy
          týkající se ochrany osobních údajů využijte výše uvedený e-mail.
        </p>
      </>
    ),
  },
  {
    id: 'ucely-zpracovani',
    title: '2. Účely a právní základy zpracování',
    icon: Scale,
    content: (
      <>
        <p>
          Osobní údaje zpracováváme pouze pro následující účely a na
          základě uvedených právních základů:
        </p>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-accent mb-3">
            a) Provoz služby Šepot (messenger)
          </h4>
          <ul>
            <li>
              <strong>Účel:</strong> Zajištění fungování komunikační služby,
              doručování zašifrovaných zpráv, správa uživatelského účtu
            </li>
            <li>
              <strong>Právní základ:</strong> Plnění smlouvy (čl. 6 odst. 1
              písm. b) GDPR) — zpracování je nezbytné pro poskytování služby,
              kterou jste si aktivně zvolili
            </li>
            <li>
              <strong>Údaje:</strong> Uživatelské jméno (pseudonym), veřejný
              šifrovací klíč, volitelně e-mailová adresa pro obnovení účtu
            </li>
          </ul>
        </div>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-accent mb-3">
            b) Kontaktní formulář na webu
          </h4>
          <ul>
            <li>
              <strong>Účel:</strong> Zodpovězení vašich dotazů, zpětná vazba
            </li>
            <li>
              <strong>Právní základ:</strong> Oprávněný zájem správce (čl. 6
              odst. 1 písm. f) GDPR) — komunikace s uživateli a zájemci o službu
            </li>
            <li>
              <strong>Údaje:</strong> Jméno, e-mailová adresa, obsah zprávy
            </li>
          </ul>
        </div>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-accent mb-3">
            c) Waitlist (seznam zájemců)
          </h4>
          <ul>
            <li>
              <strong>Účel:</strong> Informování o dostupnosti služby, zasílání
              novinek o vývoji
            </li>
            <li>
              <strong>Právní základ:</strong> Souhlas (čl. 6 odst. 1 písm. a)
              GDPR) — aktivním přihlášením do waitlistu udělujete souhlas
            </li>
            <li>
              <strong>Údaje:</strong> E-mailová adresa
            </li>
          </ul>
        </div>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-accent mb-3">
            d) Zajištění bezpečnosti a prevence zneužití
          </h4>
          <ul>
            <li>
              <strong>Účel:</strong> Ochrana před útoky, spam, zneužitím služby
            </li>
            <li>
              <strong>Právní základ:</strong> Oprávněný zájem správce (čl. 6
              odst. 1 písm. f) GDPR)
            </li>
            <li>
              <strong>Údaje:</strong> Technické logy serveru (bez IP adres
              uživatelů, pouze agregované metriky)
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 'kategorie-udaju',
    title: '3. Kategorie osobních údajů',
    icon: Eye,
    content: (
      <>
        <p>
          Šepot je navržen s principem <strong>minimalizace dat</strong> (čl. 5
          odst. 1 písm. c) GDPR) a <strong>zero-knowledge architekturou</strong>.
          Zpracováváme pouze absolutní minimum údajů nezbytných pro fungování
          služby.
        </p>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-accent mb-3">
            Zpracovávané údaje
          </h4>
          <ul>
            <li>Uživatelské jméno (pseudonym — nemusí obsahovat skutečné jméno)</li>
            <li>E-mailová adresa (volitelně, pouze pro obnovení účtu)</li>
            <li>Veřejný šifrovací klíč (kryptografický identifikátor)</li>
            <li>Časové razítko registrace</li>
            <li>Hash hesla (Argon2id, heslo samotné neukládáme)</li>
          </ul>
        </div>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-cyan mb-3">
            Údaje, které NEZPRACOVÁVÁME (zero-knowledge)
          </h4>
          <ul>
            <li>
              <strong>Obsah zpráv</strong> — E2E šifrování, nemáme technickou
              možnost zprávy číst
            </li>
            <li>
              <strong>Metadata konverzací</strong> — nezaznamenáváme, kdo s kým
              komunikuje
            </li>
            <li>
              <strong>IP adresy uživatelů</strong> — nelogujeme
            </li>
            <li>
              <strong>Telefonní čísla</strong> — pro registraci nevyžadujeme
            </li>
            <li>
              <strong>Kontakty z telefonu</strong> — k nim nepřistupujeme
            </li>
            <li>
              <strong>Poloha a údaje o zařízení</strong> — nesbíráme
            </li>
            <li>
              <strong>Soukromé šifrovací klíče</strong> — nikdy neopouštějí
              vaše zařízení
            </li>
          </ul>
        </div>
        <p>
          Díky E2E šifrování a zero-knowledge architektuře je rozsah
          zpracovávaných osobních údajů výrazně menší než u běžných komunikačních
          služeb. Ani v případě kompromitace serveru nemáme přístup k obsahu
          vaší komunikace.
        </p>
      </>
    ),
  },
  {
    id: 'sifrovani',
    title: '4. End-to-end šifrování a ochrana dat',
    icon: Lock,
    content: (
      <>
        <p>
          Veškerá komunikace v Šepotu je chráněna <strong>end-to-end
          šifrováním</strong> založeným na moderních kryptografických standardech:
        </p>
        <ul>
          <li>
            <strong>X25519</strong> — výměna klíčů (Diffie-Hellman na eliptické
            křivce Curve25519)
          </li>
          <li>
            <strong>XSalsa20-Poly1305</strong> — symetrické šifrování zpráv
            s autentizací
          </li>
          <li>
            <strong>Ed25519</strong> — digitální podpisy pro ověření identity
          </li>
          <li>
            <strong>Argon2id</strong> — hashování hesel (odolné vůči GPU a ASIC
            útokům)
          </li>
        </ul>
        <p>To v praxi znamená:</p>
        <ul>
          <li>Zprávy jsou šifrovány na vašem zařízení před odesláním</li>
          <li>Dešifrovat je může pouze zamýšlený příjemce</li>
          <li>
            Ani provozovatel <strong>nemá technickou možnost</strong> zprávy
            číst
          </li>
          <li>Šifrovací klíče nikdy neopouštějí vaše zařízení</li>
        </ul>
        <p>
          Celý zdrojový kód je open source (licence MIT) a kdokoliv si může
          implementaci šifrování nezávisle ověřit.
        </p>
      </>
    ),
  },
  {
    id: 'prijemci',
    title: '5. Příjemci osobních údajů',
    icon: UserCheck,
    content: (
      <>
        <p>
          Vaše osobní údaje <strong>nepředáváme třetím stranám</strong> za
          účelem marketingu, profilování ani jiného komerčního využití.
        </p>
        <p>
          K údajům mohou mít přístup pouze následující kategorie příjemců,
          a to výhradně v rozsahu nezbytném pro provoz služby:
        </p>
        <ul>
          <li>
            <strong>Poskytovatel hostingu</strong> — serverová infrastruktura
            (self-hosted v Česku, bez třetích stran)
          </li>
          <li>
            <strong>Orgány veřejné moci</strong> — pouze na základě platného
            soudního příkazu nebo zákonné povinnosti. Vzhledem k zero-knowledge
            architektuře nemáme přístup k obsahu komunikace, a proto nemůžeme
            vyhovět žádostem o jeho předání.
          </li>
        </ul>
        <p>
          V případě jakékoliv žádosti orgánů veřejné moci o předání údajů
          posoudíme její zákonnost a rozsah. O takovém předání budeme
          informovat dotčené uživatele, pokud nám v tom zákon výslovně nebrání.
        </p>
      </>
    ),
  },
  {
    id: 'predani-do-tretich-zemi',
    title: '6. Předání do třetích zemí',
    icon: Globe,
    content: (
      <>
        <p>
          Serverová infrastruktura Šepotu je provozována <strong>výhradně
          na území České republiky</strong> (Evropský hospodářský prostor).
        </p>
        <p>
          Vaše osobní údaje <strong>nepředáváme</strong> do třetích zemí mimo
          EHP. V případě, že by v budoucnu bylo nezbytné využít služby
          poskytovatelů se sídlem mimo EHP, zajistíme odpovídající záruky dle
          kapitoly V GDPR (standardní smluvní doložky, rozhodnutí o přiměřenosti
          apod.) a budeme vás o tom informovat aktualizací tohoto dokumentu.
        </p>
      </>
    ),
  },
  {
    id: 'doba-uchovani',
    title: '7. Doba uchování údajů',
    icon: Clock,
    content: (
      <>
        <p>
          Osobní údaje uchováváme pouze po dobu nezbytnou k naplnění účelu
          zpracování:
        </p>
        <div className="card-glass my-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-3 pr-4 text-foreground font-semibold">Údaj</th>
                <th className="py-3 text-foreground font-semibold">Doba uchování</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 text-muted">Uživatelský účet</td>
                <td className="py-3 text-muted">Po dobu existence účtu + 48 hodin po smazání</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 text-muted">Nedoručené zprávy (šifrované)</td>
                <td className="py-3 text-muted">Max. 30 dní, po doručení okamžitě smazány</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 text-muted">Kontaktní formulář</td>
                <td className="py-3 text-muted">12 měsíců od zodpovězení dotazu</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 text-muted">Waitlist e-mail</td>
                <td className="py-3 text-muted">Do odvolání souhlasu nebo spuštění služby</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-muted">Serverové logy (agregované)</td>
                <td className="py-3 text-muted">30 dní</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Po uplynutí doby uchování jsou údaje nenávratně smazány nebo
          anonymizovány.
        </p>
      </>
    ),
  },
  {
    id: 'lokalni-uloziste',
    title: '8. Lokální úložiště zpráv',
    icon: Download,
    content: (
      <>
        <p>
          Vaše zprávy jsou uloženy <strong>výhradně na vašem zařízení</strong>{' '}
          v šifrované lokální databázi. Šepot neuchovává zprávy na serverech
          déle, než je nutné pro jejich doručení.
        </p>
        <ul>
          <li>
            Nedoručené zprávy jsou na serveru uloženy v zašifrované podobě
            maximálně 30 dní
          </li>
          <li>Po doručení jsou ze serveru okamžitě smazány</li>
          <li>
            Zálohy zpráv vytváříte a spravujete výhradně vy na svém zařízení
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'prava-subjektu',
    title: '9. Vaše práva',
    icon: FileSearch,
    content: (
      <>
        <p>
          V souladu s GDPR a zákonem č. 110/2019 Sb. máte následující práva:
        </p>
        <ul>
          <li>
            <strong>Právo na přístup</strong> (čl. 15 GDPR) — můžete si
            vyžádat informace o údajích, které o vás zpracováváme, a získat
            jejich kopii
          </li>
          <li>
            <strong>Právo na opravu</strong> (čl. 16 GDPR) — můžete požádat
            o opravu nepřesných nebo neúplných údajů
          </li>
          <li>
            <strong>Právo na výmaz</strong> (čl. 17 GDPR) — můžete požádat
            o smazání svého účtu a všech souvisejících dat (&bdquo;právo být
            zapomenut&ldquo;)
          </li>
          <li>
            <strong>Právo na omezení zpracování</strong> (čl. 18 GDPR) —
            můžete požádat o dočasné omezení zpracování vašich údajů
          </li>
          <li>
            <strong>Právo na přenositelnost</strong> (čl. 20 GDPR) — můžete
            si vyexportovat svá data ve strojově čitelném formátu
          </li>
          <li>
            <strong>Právo vznést námitku</strong> (čl. 21 GDPR) — můžete
            vznést námitku proti zpracování založenému na oprávněném zájmu
          </li>
          <li>
            <strong>Právo odvolat souhlas</strong> (čl. 7 odst. 3 GDPR) —
            souhlas (např. s waitlistem) můžete kdykoli odvolat, aniž by tím
            byla dotčena zákonnost dřívějšího zpracování
          </li>
          <li>
            <strong>Právo podat stížnost</strong> — u dozorového úřadu, kterým je
            Úřad pro ochranu osobních údajů (ÚOOÚ)
          </li>
        </ul>
        <div className="card-glass my-4">
          <h4 className="text-sm font-semibold text-accent mb-3">
            Úřad pro ochranu osobních údajů (ÚOOÚ)
          </h4>
          <ul>
            <li>Pplk. Sochora 27, 170 00 Praha 7</li>
            <li>
              Web:{' '}
              <a
                href="https://www.uoou.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                www.uoou.cz
              </a>
            </li>
            <li>
              E-mail:{' '}
              <a href="mailto:posta@uoou.cz" className="text-accent hover:underline">
                posta@uoou.cz
              </a>
            </li>
          </ul>
        </div>
        <p>
          Pro uplatnění svých práv nás kontaktujte na{' '}
          <a href="mailto:kontakt@sepot.cz" className="text-accent hover:underline">
            kontakt@sepot.cz
          </a>
          . Na vaši žádost odpovíme bez zbytečného odkladu, nejpozději do
          30 dnů. V odůvodněných případech lze lhůtu prodloužit o další
          2 měsíce dle čl. 12 odst. 3 GDPR.
        </p>
      </>
    ),
  },
  {
    id: 'automatizovane-rozhodovani',
    title: '10. Automatizované rozhodování a profilování',
    icon: Database,
    content: (
      <>
        <p>
          Při zpracování osobních údajů <strong>neprovádíme automatizované
          rozhodování</strong> ani <strong>profilování</strong> ve smyslu
          čl. 22 GDPR. Žádné rozhodnutí s právními účinky pro uživatele
          není přijímáno výlučně na základě automatizovaného zpracování.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: '11. Cookies a sledovací technologie',
    icon: Server,
    content: (
      <>
        <p>
          Na webu sepot.cz používáme <strong>pouze nezbytné technické
          cookies</strong>. Nepoužíváme žádné analytické, marketingové ani
          sledovací cookies. Podrobné informace naleznete v našich{' '}
          <a href="/cookies" className="text-accent hover:underline">
            Zásadách používání cookies
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'bezpecnostni-opatreni',
    title: '12. Bezpečnostní opatření',
    icon: AlertCircle,
    content: (
      <>
        <p>
          Přijímáme přiměřená technická a organizační opatření k ochraně
          osobních údajů dle čl. 32 GDPR, zejména:
        </p>
        <ul>
          <li>End-to-end šifrování veškeré komunikace</li>
          <li>Zero-knowledge architektura serveru</li>
          <li>Hashování hesel algoritmem Argon2id</li>
          <li>Šifrování dat při přenosu (TLS 1.3)</li>
          <li>Pravidelné bezpečnostní audity a penetrační testy</li>
          <li>Řízení přístupu k serverové infrastruktuře</li>
          <li>Open source kód umožňující nezávislý audit</li>
        </ul>
        <p>
          Podrobnosti o bezpečnostních opatřeních naleznete v naší{' '}
          <a href="/bezpecnostni-politika" className="text-accent hover:underline">
            Bezpečnostní politice
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'zmeny',
    title: '13. Změny zásad ochrany osobních údajů',
    icon: Trash2,
    content: (
      <>
        <p>
          Tyto zásady můžeme příležitostně aktualizovat v reakci na změny
          legislativy, naší služby nebo technologií. O podstatných změnách
          budeme informovat prostřednictvím webu, aplikace nebo e-mailu
          alespoň 30 dní předem.
        </p>
        <p>
          Aktuální verze těchto zásad je vždy dostupná na této stránce.
        </p>
      </>
    ),
  },
  {
    id: 'kontakt',
    title: '14. Kontakt',
    icon: Mail,
    content: (
      <>
        <p>
          S dotazy ohledně ochrany osobních údajů se na nás můžete obrátit:
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
              <strong>Kontaktní formulář:</strong>{' '}
              <a href="/kontakt" className="text-accent hover:underline">
                sepot.cz/kontakt
              </a>
            </li>
          </ul>
        </div>
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
            GDPR &amp; Zákon č. 110/2019 Sb.
          </div>
          <h1 className="heading-2 mb-4">
            Zásady ochrany{' '}
            <span className="text-gradient">osobních údajů</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            Šepot je navržen tak, aby o vás věděl co nejméně. Zero-knowledge
            architektura a E2E šifrování zajišťují, že vaše soukromí je
            chráněno na technické úrovni, nejen sliby.
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
                  <div className="prose prose-invert prose-sm max-w-none text-muted leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:text-muted [&_strong]:text-foreground [&_p]:mb-3 [&_table]:w-full">
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
              Šepot sbírá pouze minimální registrační údaje (pseudonym a
              volitelný e-mail). Vaše zprávy jsou šifrovány end-to-end a uloženy
              výhradně na vašem zařízení. Nemůžeme je číst, analyzovat ani
              sdílet s třetími stranami. Nemáme přístup k vašim soukromým
              klíčům, metadatům konverzací ani IP adresám. Máte plnou kontrolu
              nad svými daty včetně práva na jejich úplný výmaz.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
