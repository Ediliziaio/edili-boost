import { Link } from "react-router-dom";
import { CalendarCheck, Clock, ShieldCheck, PhoneCall, Users } from "lucide-react";
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

const steps = [
  {
    icon: CalendarCheck,
    title: "1. Lasci i tuoi dati",
    text: "Compili il modulo con azienda, settore e recapito. Bastano due minuti.",
  },
  {
    icon: PhoneCall,
    title: "2. Ti richiamiamo",
    text: "Un consulente ti contatta nelle ore successive e fissate insieme giorno e ora.",
  },
  {
    icon: Clock,
    title: "3. Call da 15-20 minuti",
    text: "Guardiamo i tuoi numeri e ti diciamo con onestà se possiamo aiutarti.",
  },
];

const FissaAppuntamento = () => {
  const faqData = getPageFaq(PATH);
  const meseCorrente = MESI[new Date().getMonth()];

  return (
    <>
      <SEOHead
        title="Fissa il Tuo Appuntamento | Marketing Edile"
        description={`Prenota una call gratuita di 15-20 minuti con Marketing Edile®. Accettiamo solo ${POSTI_MESE} nuove aziende edili al mese. Nessun impegno.`}
        keywords={siteConfig.pageKeywords.fissaAppuntamento}
        url={`${siteConfig.url}${PATH}`}
        jsonLd={[
          generateLocalBusinessSchema(),
          ...(faqData?.faqs?.length ? [generateFAQSchema(faqData.faqs)] : []),
          generateBreadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Fissa il tuo appuntamento", url: `${siteConfig.url}${PATH}` },
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
                <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-semibold uppercase tracking-wider">
                  <Users className="w-4 h-4" />
                  Solo {POSTI_MESE} posti a {meseCorrente}
                </span>

                <h1 className="text-4xl md:text-6xl font-black text-foreground mb-5">
                  FISSA IL TUO{" "}
                  <span className="text-gold">APPUNTAMENTO</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Una call conoscitiva gratuita di 15-20 minuti con un consulente
                  specializzato in acquisizione clienti per aziende edili. Capiamo i tuoi
                  numeri e ti diciamo se possiamo farti vendere di più. Senza impegno.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Perché i posti sono limitati: la scarsità è una conseguenza del modello, va spiegata. */}
        <section className="px-6 pb-10">
          <div className="container-narrow">
            <AnimatedSection delay={0.1}>
              <div className="max-w-2xl mx-auto bg-card border border-gold/30 rounded-xl p-6 text-center">
                <p className="text-foreground font-semibold mb-1">
                  Gli appuntamenti sono limitati
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Lavoriamo solo a provvigione sulle vendite chiuse: nessun canone fisso.
                  Per questo seguiamo al massimo {POSTI_MESE} nuove aziende al mese,
                  quelle in cui crediamo davvero. Quando i posti finiscono, si passa al mese
                  successivo.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Form */}
        <section id="form" className="px-6 pb-14">
          <div className="container-narrow">
            <AnimatedSection delay={0.15}>
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-6">
                  Richiedi il tuo appuntamento
                </h2>
                <LeadConnectorForm />
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <ShieldCheck className="w-4 h-4 text-gold" />
                    Gratuito e senza impegno
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

        {/* Come funziona */}
        <section className="px-6 pb-16 border-t border-border pt-14">
          <div className="container-narrow">
            <AnimatedSection delay={0.2}>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
                Come funziona l'appuntamento
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

        <PageFaq path={PATH} title="Domande sull'appuntamento" />
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
