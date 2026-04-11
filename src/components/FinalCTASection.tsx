import { AnimatedSection } from "./AnimatedSection";
import { LeadConnectorForm } from "@/components/blog/LeadConnectorForm";

const FinalCTASection = () => {
  return (
    <section id="candidati" className="section-padding bg-navy-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/10 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-8 uppercase tracking-wider">
            Conclusione
          </span>
          <h2 className="heading-section text-foreground mb-6">
            Marketing Edile non è una promessa.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="heading-sub text-gold mb-4">
            È un metodo costruito sul campo.
          </p>
          <p className="text-xl text-muted-foreground mb-8">
            Dalla nostra azienda. Per la tua.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Se vuoi capire se è applicabile alla tua azienda, compila il modulo:
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="max-w-xl mx-auto">
            <LeadConnectorForm />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-full" />
              Solo 3 posti disponibili al mese
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-full" />
              Nessun impegno
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-full" />
              Risposta entro 24h
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FinalCTASection;
