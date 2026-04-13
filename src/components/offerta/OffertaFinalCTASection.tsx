import { AnimatedSection } from "@/components/AnimatedSection";
import { LeadConnectorForm } from "@/components/blog/LeadConnectorForm";
import { AlertTriangle } from "lucide-react";
import heroWindowsImage from "@/assets/hero-windows.jpg";
import { meseAnnoCorrenteLower, postiDisponibili } from "@/lib/dynamic-date";

const OffertaFinalCTASection = () => {
  return (
    <section id="candidati" className="section-padding-sm relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroWindowsImage} alt="Infissi moderni — Marketing Edile" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-navy-light/95" />
      </div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/10 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs sm:text-sm font-medium mb-4 uppercase tracking-wider">
            Conclusione
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Marketing Edile® non è una promessa.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="heading-sub text-gold mb-2">È un metodo costruito sul campo.</p>
          <p className="text-muted-foreground mb-6 text-lg md:text-xl max-w-2xl mx-auto">
            Se vuoi capire se è applicabile alla tua azienda, compila il modulo.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="max-w-xl mx-auto">
            <LeadConnectorForm />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="mt-6 bg-gold/10 border border-gold/30 rounded-xl p-3 inline-flex items-center gap-3 max-w-lg">
            <AlertTriangle className="w-5 h-5 text-gold shrink-0" />
            <p className="text-foreground font-semibold text-base sm:text-lg text-left">
              Solo {postiDisponibili} posti disponibili per {meseAnnoCorrenteLower}.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OffertaFinalCTASection;
