import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getPageFaq } from "@/data/pageFaqs.js";

interface PageFaqProps {
  /** Percorso della pagina, es. "/prezzi" o "/settori/tetti" */
  path: string;
  title?: string;
}

/**
 * FAQ visibile per una pagina, alimentata dalla fonte condivisa src/data/pageFaqs.js
 * (le stesse Q&A che il prerender inietta come FAQPage JSON-LD nell'HTML servito).
 * Rende solo la parte visibile: lo schema è gestito dal prerender e da SEOHead.
 */
export function PageFaq({ path, title = "Domande frequenti" }: PageFaqProps) {
  const data = getPageFaq(path);
  if (!data || !data.faqs?.length) return null;

  return (
    <section id="faq" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-gold font-medium mb-3 tracking-wider uppercase text-sm">
              Domande Frequenti
            </p>
            <h2 className="heading-section text-foreground mb-4">{title}</h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {data.faqs.map((faq, index) => (
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
  );
}

export default PageFaq;
