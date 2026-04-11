import { AnimatedSection } from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

const faqs = [
  { q: "Come funziona il modello a percentuale?", a: "Definiamo un sistema di tracciamento delle vendite. Su quel volume concordiamo una percentuale. Se il mese è a zero vendite generate da noi, non fatturiamo nulla." },
  { q: "Quanto costa lavorare con voi?", a: "Non c'è canone fisso. Il costo è una percentuale sulle commesse generate e verificate." },
  { q: "Come calcolate le vendite generate?", a: "Link dedicati, numeri tracciati, form con sorgente, codici CRM. Ogni contatto è registrato e attribuito in modo verificabile." },
  { q: "Chi paga la pubblicità?", a: "Il budget pubblicitario è a carico tuo, gestito da noi. Non guadagniamo sulla spesa — il nostro interesse è ottimizzarla." },
  { q: "Quanto tempo per i primi risultati?", a: "Primi contatti in 2–4 settimane. Primi preventivi chiusi entro il primo mese. I risultati scalano nei mesi successivi." },
  { q: "Lavorate solo con aziende edili?", a: "Sì. Solo infissi, serramenti, ristrutturazioni, fotovoltaico, coperture, pavimenti, impianti." },
  { q: "Posso uscire quando voglio?", a: "Sì. Senza penali, senza preavvisi minimi vincolanti." },
  { q: "Gestite i social media?", a: "Sì, come strumento di acquisizione e social proof — non di intrattenimento. Ogni post serve a generare autorevolezza locale e contatti." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const OffertaFAQSection = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <section id="faq" className="section-padding-sm bg-background relative overflow-hidden">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center mb-6 md:mb-10">
              <p className="text-gold font-medium mb-2 tracking-wider uppercase text-sm">FAQ</p>
              <h2 className="heading-section text-foreground">Hai dubbi? Ecco le risposte</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-xl px-4 md:px-5 data-[state=open]:border-gold/50 transition-colors">
                    <AccordionTrigger className="text-left text-foreground hover:text-gold hover:no-underline py-3 md:py-4 text-base font-medium">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-3 md:pb-4 text-lg leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default OffertaFAQSection;
