import { Link } from "react-router-dom";
import { CalendarCheck, Clock, ShieldCheck, PhoneCall, Users, X, Check } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageFaq } from "@/components/PageFaq";
import { LeadConnectorForm } from "@/components/blog/LeadConnectorForm";
import {
  siteConfig,
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import { getPageFaq } from "@/data/pageFaqs.js";
import logo from "@/assets/marketing-edile-logo.png";

const PATH = "/fissa-appuntamento";

// Numero di aziende accettate ogni mese: è la stessa capienza dichiarata su
// /contattaci e nasce dal modello a provvigione (poche aziende seguite bene).
const POSTI_MESE = 3;

const MESI = [
  "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
  "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre",
];

// Blocco "dolore": situazioni che il titolare riconosce prima che si parli di noi.
const situazioni = [
  {
    title: "Hai già pagato un'agenzia",
    text: "Canone fisso, sei mesi, report pieni di grafici. Contratti firmati: due.",
  },
  {
    title: "I contatti arrivano, i clienti no",
    text: "Chiedono il prezzo, dicono che ci pensano, spariscono. Li richiami tre volte e basta.",
  },
  {
    title: "Il passaparola non basta più",
    text: "Ha retto per anni. Poi arriva il mese vuoto e non sai da dove far uscire il prossimo lavoro.",
  },
];

// Confronto sul modello di costo. Nessuna cifra e nessun competitor nominato:
// si mette a confronto la STRUTTURA del costo, che e' il vero differenziale.
const confronto = {
  altre: [
    "Canone fisso ogni mese, che tu venda o no",
    "Più il budget pubblicitario, a tuo carico",
    "Costo di setup iniziale",
    "Incassano lo stesso anche a zero contratti",
  ],
  noi: [
    "Zero canone fisso",
    "Solo il budget pubblicitario: è tuo e resta tuo",
    "Zero costi di setup",
    "Guadagniamo solo sulle vendite che chiudi",
  ],
};

const steps = [
  {
    icon: CalendarCheck,
    title: "1. Lasci i tuoi dati",
    text: "Azienda, settore, un numero. Due minuti, niente questionari.",
  },
  {
    icon: PhoneCall,
    title: "2. Ti richiamiamo",
    text: "Entro 24 ore. Fissiamo giorno e ora, anche fuori orario se sei in cantiere.",
  },
  {
    icon: Clock,
    title: "3. Venti minuti al telefono",
    text: "Guardiamo i tuoi numeri. Ti diciamo se possiamo aiutarti. O se non possiamo.",
  },
];

const FissaAppuntamento = () => {
  const faqData = getPageFaq(PATH);
  const meseCorrente = MESI[new Date().getMonth()];

  return (
    <>
      <SEOHead
        title="Fissa la Tua Consulenza | Marketing Edile"
        description={`Consulenza gratuita di 20 minuti con Marketing Edile®. Solo ${POSTI_MESE} nuove aziende edili al mese, una per provincia. Paghi solo sulle vendite chiuse.`}
        keywords={siteConfig.pageKeywords.fissaAppuntamento}
        url={`${siteConfig.url}${PATH}`}
        jsonLd={[
          generateLocalBusinessSchema(),
          ...(faqData?.faqs?.length ? [generateFAQSchema(faqData.faqs)] : []),
          generateBreadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Fissa la tua consulenza", url: `${siteConfig.url}${PATH}` },
          ]),
        ]}
      />

      {/* Header minimo: landing senza distrazioni, solo il marchio riporta alla home. */}
      <header className="border-b border-border bg-background">
        <div className="container-narrow py-4 flex justify-center">
          <Link to="/" aria-label="Marketing Edile® — home">
            <img
              src={logo}
              alt="Marketing Edile® — agenzia marketing per imprese edili"
              className="h-10 w-auto"
              width="160"
              height="40"
            />
          </Link>
        </div>
      </header>

      <main className="bg-background">
        <section className="pt-14 pb-10 px-6">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-gold font-medium mb-4 tracking-wider uppercase text-sm">
                  Call consulenza
                </p>

                <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-semibold uppercase tracking-wider">
                  <Users className="w-4 h-4" />
                  {POSTI_MESE} posti a {meseCorrente} · 1 azienda per provincia
                </span>

                <h1 className="text-4xl md:text-6xl font-black text-foreground mb-5">
                  FISSA LA TUA{" "}
                  <span className="text-gold">CONSULENZA</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                  Venti minuti al telefono con chi vende in edilizia tutti i giorni.
                  Guardiamo i tuoi numeri veri e ti diciamo se possiamo portarti clienti.
                </p>
                <p className="text-lg md:text-xl text-foreground font-semibold">
                  Se poi lavoriamo insieme, ci paghi solo sul venduto.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Dolore: il lettore deve riconoscersi prima che si parli di noi. */}
        <section className="px-6 pb-12">
          <div className="container-narrow">
            <AnimatedSection delay={0.1}>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
                Quando ha senso fissare la consulenza
              </h2>
              <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
                {situazioni.map((s) => (
                  <div
                    key={s.title}
                    className="bg-card border border-border rounded-xl p-6 border-l-4 border-l-gold/60"
                  >
                    <p className="font-semibold text-foreground mb-2">{s.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
                Il problema non sei tu. È il modo in cui ti hanno venduto il marketing:
                tu paghi prima, loro incassano comunque.{" "}
                <span className="text-foreground font-semibold">
                  Noi lo abbiamo girato al contrario.
                </span>
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Confronto modello di costo: e' il vero motivo per cui si prenota. */}
        <section className="px-6 pb-14">
          <div className="container-narrow">
            <AnimatedSection delay={0.12}>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
                Noi lavoriamo a provvigione
              </h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
                L'unica cosa che devi mettere è il budget pubblicitario. Nient'altro.
              </p>

              <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
                <div className="bg-card border border-border rounded-xl p-6">
                  <p className="font-semibold text-foreground mb-4">Le altre agenzie</p>
                  <ul className="space-y-3">
                    {confronto.altre.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-muted-foreground/70 shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card border border-gold/40 rounded-xl p-6">
                  <p className="font-semibold text-gold mb-4">Marketing Edile</p>
                  <ul className="space-y-3">
                    {confronto.noi.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto text-sm leading-relaxed">
                Con un canone fisso l'agenzia incassa comunque, quindi il rischio è tutto
                tuo. A provvigione il rischio ce lo prendiamo noi: se non vendi, non
                guadagniamo.{" "}
                <span className="text-foreground font-semibold">
                  Per questo ti diciamo subito se i numeri non ci sono.
                </span>
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Form */}
        <section id="form" className="px-6 pb-14">
          <div className="container-narrow">
            <AnimatedSection delay={0.15}>
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-6">
                  Prenota la tua consulenza
                </h2>
                <LeadConnectorForm />
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <ShieldCheck className="w-4 h-4 text-gold" />
                    Gratis, nessun impegno
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-gold" />
                    Ti richiamiamo entro 24 ore
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Scarsità: spiegata dalla causa, non asserita. */}
        <section className="px-6 pb-14">
          <div className="container-narrow">
            <AnimatedSection delay={0.2}>
              <div className="max-w-2xl mx-auto bg-card border border-gold/30 rounded-xl p-6 text-center">
                <p className="text-foreground font-semibold mb-2">
                  Perché i posti sono {POSTI_MESE} e non trenta
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Non incassiamo canoni. Guadagniamo solo quando tu vendi. Ogni azienda
                  che prendiamo ci costa mesi di lavoro prima di vedere un euro — quindi
                  ne seguiamo {POSTI_MESE} al mese, non trenta. Non è una tattica per
                  farti correre: è quante aziende riusciamo a seguire bene davvero.
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-foreground font-semibold mb-2">
                    E una sola azienda per provincia
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Se lavoriamo con un serramentista a Brescia, non lavoriamo con il suo
                    concorrente. Non ha senso far salire il costo dei lead facendo
                    competere due nostri clienti sullo stesso pubblico. Chi entra prima,
                    si prende la provincia. Quando la tua è occupata, non possiamo farci
                    niente.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Come funziona */}
        <section className="px-6 pb-16 border-t border-border pt-14">
          <div className="container-narrow">
            <AnimatedSection delay={0.25}>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
                Come funziona la consulenza
              </h2>
              <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
                {steps.map((step) => (
                  <div
                    key={step.title}
                    className="bg-card border border-border rounded-xl p-6 text-left"
                  >
                    <step.icon className="w-7 h-7 text-gold mb-4" />
                    <p className="font-semibold text-foreground mb-2">{step.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <PageFaq path={PATH} title="Domande sulla consulenza" />
      </main>

      {/* Footer minimo: solo gli obblighi legali, per non distrarre dalla conversione. */}
      <footer className="border-t border-border bg-background py-8 px-6">
        <div className="container-narrow text-center text-sm text-muted-foreground space-y-2">
          <p>
            {siteConfig.name} — {siteConfig.companyName} · P.IVA {siteConfig.vatNumber} ·{" "}
            {siteConfig.address.city}
          </p>
          <p className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookie-policy" className="hover:text-gold transition-colors">
              Cookie Policy
            </Link>
            <Link to="/contattaci" className="hover:text-gold transition-colors">
              Contatti
            </Link>
            <Link to="/" className="hover:text-gold transition-colors">
              Torna al sito
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default FissaAppuntamento;
