import { Footer } from "../../components/Footer";
import { ScrollTop } from "../../components/ScrollTop";

export const metadata = {
  title: "Zásady ochrany osobních údajů | Psycholog FM"
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative overflow-hidden">
      <header className="border-b border-borderLight bg-lightBlueBackground/90">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primaryBlue transition hover:text-textDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warmAmber"
            aria-label="Zpět na hlavní stránku"
          >
            <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
            Zpět
          </a>
          <div className="flex flex-1 justify-center">
            <div className="flex items-center gap-4 text-2xl font-semibold tracking-tight text-primaryBlue">
              <img src="/Menu_Logo.svg" alt="Psycholog FM" className="h-12 w-12" loading="lazy" />
              <span>Psycholog FM</span>
            </div>
          </div>
          <div className="w-16" aria-hidden="true"></div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="space-y-10">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold text-textDark md:text-4xl">Zásady ochrany osobních údajů (GDPR)</h1>
            <p className="text-base text-textMuted">účinné od: 1.3.2026</p>
          </div>

          <section className="space-y-6 text-base leading-relaxed text-textMuted">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-textDark">1. Úvod</h2>
              <p>
                Tyto Zásady ochrany osobních údajů popisují, jakým způsobem na webu psychologfm.cz chráníme vaše osobní
                údaje a jak s nimi nakládáme v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR).
              </p>
              <p>
                Respektujeme vaše soukromí a zavazujeme se nakládat s osobními údaji bezpečně a transparentně.
              </p>
            </div>

            <hr className="border-borderLight" />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-textDark">2. Správce osobních údajů</h2>
              <p>Služby Psycholog FM poskytují dva samostatní správci osobních údajů:</p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-textDark">2.1 Mgr. Karel Černín</p>
                  <p>IČO: 63693011</p>
                  <p>Sídlo ordinace: Hlavní třída 15, 738 01 Frýdek-Místek</p>
                  <p>E-mail: cernin@psychologfm.cz</p>
                  <p>Telefon: +420 603 500 580</p>
                </div>
                <div>
                  <p className="font-semibold text-textDark">2.2 Mgr. Nikol Filipová</p>
                  <p>IČO: 24088625</p>
                  <p>Sídlo ordinace: Hlavní třída 15, 738 01 Frýdek-Místek</p>
                  <p>E-mail: filipova@psychologfm.cz</p>
                  <p>Telefon: +420 792 362 269</p>
                </div>
              </div>
              <p>Každý správce odpovídá za zpracování osobních údajů v rámci služeb, které poskytuje.</p>
            </div>

            <hr className="border-borderLight" />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-textDark">3. Jaké osobní údaje zpracováváme</h2>
              <div className="space-y-2">
                <p className="font-semibold text-textDark">3.1 Údaje poskytnuté přímo vámi</p>
                <p>Typicky zpracováváme tyto osobní údaje:</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Jméno a příjmení</li>
                  <li>E-mailová adresa</li>
                  <li>Telefonní číslo</li>
                  <li>Informace uvedené v kontaktním nebo objednávkovém formuláři</li>
                  <li>Údaje potřebné pro psychologické služby</li>
                  <li>Fakturační údaje, pokud využíváte placené služby</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-textDark">3.2 Údaje získané automaticky při návštěvě webu</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>IP adresa</li>
                  <li>Cookies a další identifikátory</li>
                  <li>Technické údaje o zařízení a prohlížeči</li>
                  <li>Analytická data o používání webu (např. Google Analytics nebo jiný analytický nástroj)</li>
                </ul>
              </div>
            </div>

            <hr className="border-borderLight" />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-textDark">4. Účely a právní důvody zpracování</h2>
              <div className="space-y-2">
                <p className="font-semibold text-textDark">4.1 Poskytování psychologických služeb (plnění smlouvy)</p>
                <p>
                  Zpracování osobních údajů je nezbytné pro poskytování konzultací, vedení komunikace, objednávání a
                  administrativu.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-textDark">4.2 Komunikace s klienty</p>
                <p>
                  Abychom mohli odpovědět na vaše dotazy, domluvit termín nebo vás kontaktovat v souvislosti s
                  poskytovanou službou.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-textDark">4.3 Oprávněné zájmy správce</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Zajištění bezpečnosti a funkčnosti webu</li>
                  <li>Ochrana právních nároků</li>
                  <li>Zlepšování kvality služeb a webu</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-textDark">4.4 Splnění zákonných povinností</p>
                <p>Např. povinnost uchovávat účetní doklady.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-textDark">4.5 Souhlas (u vybraných marketingových či analytických cookies)</p>
                <p>Pokud je vyžadován, máte právo jej kdykoliv odvolat.</p>
              </div>
            </div>

            <hr className="border-borderLight" />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-textDark">5. Doba uchování osobních údajů</h2>
              <p>Osobní údaje uchováváme pouze po dobu nezbytně nutnou:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>pro plnění služby – po dobu trvání spolupráce,</li>
                <li>pro splnění zákonných povinností – obvykle 5–10 let (účetní doklady),</li>
                <li>na základě vašeho souhlasu – do odvolání,</li>
                <li>technické a analytické údaje – dle nastavení cookies a analytických nástrojů.</li>
              </ul>
            </div>

            <hr className="border-borderLight" />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-textDark">6. Příjemci osobních údajů</h2>
              <p>Osobní údaje mohou být sdíleny s těmito subjekty:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>poskytovatelé IT a hostingových služeb,</li>
                <li>externí účetní,</li>
                <li>poskytovatelé rezervačních nebo komunikačních nástrojů (pokud jsou použity),</li>
                <li>osoby, kterým to ukládá zákon (např. orgány veřejné moci).</li>
              </ul>
              <p>Se všemi externími zpracovateli máme uzavřené odpovídající smlouvy.</p>
            </div>

            <hr className="border-borderLight" />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-textDark">7. Předávání údajů mimo EU</h2>
              <p>Osobní údaje běžně nepředáváme mimo Evropskou unii.</p>
              <p>Pokud by k tomu mělo dojít (např. při využití zahraničních IT služeb), předávání vždy probíhá:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>do zemí s odpovídající úrovní ochrany, nebo</li>
                <li>na základě standardních smluvních doložek (SCC).</li>
              </ul>
            </div>

            <hr className="border-borderLight" />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-textDark">8. Zabezpečení osobních údajů</h2>
              <p>Vaše data chráníme pomocí moderních technických a organizačních opatření:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>šifrování komunikace (HTTPS),</li>
                <li>zabezpečení služeb a pracovních zařízení,</li>
                <li>omezení přístupů jen na oprávněné osoby,</li>
                <li>pravidelné aktualizace systémů.</li>
              </ul>
              <p>Dbáme na nejvyšší možnou míru ochrany citlivých údajů vzhledem k povaze poskytovaných služeb.</p>
            </div>

            <hr className="border-borderLight" />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-textDark">9. Vaše práva podle GDPR</h2>
              <p>Máte právo:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>požádat o přístup ke svým osobním údajům,</li>
                <li>požádat o opravu nepřesných údajů,</li>
                <li>požádat o výmaz vašich údajů (právo „být zapomenut“),</li>
                <li>požadovat omezení zpracování,</li>
                <li>vznést námitku proti zpracování na základě oprávněného zájmu,</li>
                <li>požadovat přenositelnost údajů,</li>
                <li>kdykoliv odvolat svůj souhlas,</li>
                <li>podat stížnost u dozorového orgánu:</li>
              </ul>
              <p>Úřad pro ochranu osobních údajů (www.uoou.cz).</p>
              <p>Práva uplatníte prostřednictvím kontaktů uvedených v kapitole 2.</p>
            </div>

            <hr className="border-borderLight" />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-textDark">10. Cookies a analytické nástroje</h2>
              <p>Web psychologfm.cz používá cookies pro:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>technické a bezpečnostní účely (nezbytné),</li>
                <li>statistické a analytické údaje (např. návštěvnost webu),</li>
                <li>případnou personalizaci (pouze se souhlasem).</li>
              </ul>
              <p>
                Při první návštěvě vás informujeme o možnostech nastavení cookies. Pokud cookies odmítnete, analytika
                bude omezena.
              </p>
            </div>

            <hr className="border-borderLight" />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-textDark">11. Marketing, newslettery a rezervační systémy</h2>
              <p>
                Pokud využíváme newsletter nebo rezervační systémy, vaše údaje jsou zpracovávány pouze za účelem
                poskytování těchto služeb.
              </p>
              <p>Souhlas můžete kdykoliv odvolat, typicky prostřednictvím odkazu v e-mailu.</p>
            </div>

            <hr className="border-borderLight" />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-textDark">12. Automatizované rozhodování a profilování</h2>
              <p>
                Neprovádíme žádné automatizované rozhodování ani profilování, které by pro vás mělo právní či obdobně
                závažné účinky.
              </p>
            </div>

            <hr className="border-borderLight" />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-textDark">13. Změny zásad</h2>
              <p>Zásady můžeme čas od času aktualizovat.</p>
              <p>Aktuální verze bude vždy zveřejněna na stránce psychologfm.cz.</p>
            </div>

            <hr className="border-borderLight" />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-textDark">14. Kontakty na správce osobních údajů</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-textDark">Mgr. Karel Černín</p>
                  <p>E-mail: cernin@psychologfm.cz</p>
                  <p>Telefon: +420 603 500 580</p>
                  <p>Sídlo: Hlavní třída 15, 738 01 Frýdek-Místek</p>
                  <p>IČO: 63693011</p>
                </div>
                <div>
                  <p className="font-semibold text-textDark">Mgr. Nikol Filipová</p>
                  <p>E-mail: filipova@psychologfm.cz</p>
                  <p>Telefon: +420 792 362 269</p>
                  <p>Sídlo: Hlavní třída 15, 738 01 Frýdek-Místek</p>
                  <p>IČO: 24088625</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <ScrollTop />
      <Footer />
    </div>
  );
}
