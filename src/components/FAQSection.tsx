import { AnimatedSection } from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homeFaqs as faqs } from "@/data/homeFaqs.js";

// Lo schema FAQPage della homepage è emesso da Index.tsx via SEOHead (jsonLd),
// così resta un'unica fonte per l'head. Qui rendiamo solo la FAQ visibile.
const FAQSection = () => {
  return (
    <>
      <section id="faq" className="section-padding bg-muted/30 relative overflow-hidden">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-gold font-medium mb-3 tracking-wider uppercase text-sm">
                Domande Frequenti
              </p>
              <h2 className="heading-section text-foreground mb-4">
                Hai dubbi? Ecco le risposte
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Le domande che ci fanno più spesso i potenziali clienti prima di iniziare a lavorare con noi.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-gold/50 transition-colors"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:text-gold hover:no-underline py-5 text-base md:text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                      {faq.answer}
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

export default FAQSection;
