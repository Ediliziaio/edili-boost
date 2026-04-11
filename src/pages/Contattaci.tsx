import { AnimatedSection } from "@/components/AnimatedSection";
import PerformanceBanner from "@/components/PerformanceBanner";
import { Mail, MapPin, Clock, Shield, Users, Zap } from "lucide-react";
import { LeadConnectorForm } from "@/components/blog/LeadConnectorForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { siteConfig, generateLocalBusinessSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import teamImage from "@/assets/team.jpg";

const trustBadges = [
  { icon: Users, label: "Solo 3 posti al mese" },
  { icon: Clock, label: "Risposta entro 24h" },
  { icon: Shield, label: "Nessun impegno" },
];

const faqs = [
  { q: "Come funziona il primo contatto?", a: "Compili il form, ti contattiamo entro 24h per una call conoscitiva di 15-20 minuti. Capiamo il tuo business, i tuoi numeri e se possiamo aiutarti." },
  { q: "Devo pagare per la valutazione?", a: "No, la valutazione iniziale è completamente gratuita e senza impegno. Vogliamo capire se siamo il partner giusto per te." },
  { q: "Quanto tempo serve per iniziare?", a: "Dopo la call, se c'è fit reciproco, in 7-10 giorni siamo operativi con strategia, contenuti e campagne." },
  { q: "Lavorate con qualsiasi azienda edile?", a: "No. Accettiamo solo aziende con cui possiamo generare risultati concreti. Per questo la call iniziale è fondamentale." },
];

const Contattaci = () => {
  return (
    <>
      <SEOHead
        title="Contattaci — Valutazione Gratuita"
        description="Valutazione gratuita per la tua azienda edile. Risposta entro 24h, nessun impegno. Solo 3 posti al mese. Milano."
        keywords={siteConfig.pageKeywords.contattaci}
        url={`${siteConfig.url}/contattaci`}
        jsonLd={[
          generateLocalBusinessSchema(),
          generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a }))),
          generateBreadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Contattaci", url: `${siteConfig.url}/contattaci` }
          ])
        ]}
      />
      <Navbar />
      <main className="overflow-hidden">
        {/* Hero con immagine */}
        <section className="pt-32 pb-12 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={teamImage} alt="Team Marketing Edile — contattaci per una valutazione gratuita" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-background/85" />
          </div>
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-secondary/10 rounded-full blur-[100px] md:blur-[150px]" />
          </div>
          <div className="container-narrow relative z-10 text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm font-medium mb-6 uppercase tracking-wider">
                Contattaci
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
                PARLIAMO DEL TUO{" "}
                <span className="text-secondary">BUSINESS</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Compila il form per richiedere la valutazione gratuita. Ti contatteremo entro 24 ore.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-6 bg-card border-y border-border">
          <div className="container-narrow">
            <div className="flex flex-wrap justify-center gap-6">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full">
                  <badge.icon className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-foreground">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Contact Info */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="grid lg:grid-cols-[1fr_380px] gap-10">
              {/* Form */}
              <AnimatedSection>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Richiedi la Valutazione Gratuita</h2>
                  <LeadConnectorForm />
                </div>
              </AnimatedSection>

              {/* Contact Info */}
              <AnimatedSection delay={0.2} direction="right">
                <div className="space-y-6">
                  <div className="p-6 bg-card border border-border rounded-2xl">
                    <h3 className="text-lg font-bold text-foreground mb-4">Informazioni di contatto</h3>
                    <div className="space-y-4">
                      <a href="mailto:Amministrazione@domusgroupitalia.it" className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors">
                        <Mail className="w-5 h-5 text-secondary" />
                        <span className="text-sm">Amministrazione@domusgroupitalia.it</span>
                      </a>
                      <div className="flex items-start gap-3 text-muted-foreground">
                        <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                        <span className="text-sm">Via Aurelio Saffi 29, 20123 Milano</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock className="w-5 h-5 text-secondary" />
                        <span className="text-sm">Lun-Ven: 9:00 - 18:00</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-card border border-border rounded-2xl">
                    <h3 className="text-lg font-bold text-foreground mb-3">Domus Group S.r.l.</h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>P.IVA: 13132010961</p>
                      <p>Capitale Sociale: 20.000,00€</p>
                      <p>PEC: domusgroupsrl@legalmail.it</p>
                      <p>SDI: USAL8PV</p>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30 rounded-2xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-secondary" />
                      <h3 className="font-bold text-foreground">Cosa succede dopo?</h3>
                    </div>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2"><span className="text-secondary font-bold">1.</span> Ricevi la nostra chiamata entro 24h</li>
                      <li className="flex gap-2"><span className="text-secondary font-bold">2.</span> Call conoscitiva di 15-20 min</li>
                      <li className="flex gap-2"><span className="text-secondary font-bold">3.</span> Se c'è fit, partiamo in 7-10 giorni</li>
                    </ol>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-card">
          <div className="container-narrow max-w-3xl">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                DOMANDE <span className="text-secondary">FREQUENTI</span>
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-xl px-6">
                    <AccordionTrigger className="text-foreground font-semibold text-left">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          </div>
        </section>

        <PerformanceBanner />
        <Footer />
      </main>
    </>
  );
};

export default Contattaci;
