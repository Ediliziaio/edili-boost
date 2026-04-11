import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import greenEnergyLogo from "@/assets/green_energy.png";
import factoryLogo from "@/assets/factory.png";

const testimonials = [
  {
    name: "Green Energy Group",
    role: "Fotovoltaico",
    quote: "In due mesi abbiamo generato oltre 300.000€ di vendite. I contatti arrivano già informati e pronti a comprare.",
    result: "+€300k in 2 mesi",
    logo: greenEnergyLogo,
  },
  {
    name: "Andrea T.",
    role: "Serramenti Lombardia",
    quote: "Nel primo mese ho chiuso 3 cantieri nuovi senza abbassare il preventivo di un euro.",
    result: "+€30–40k primo mese",
    logo: null,
  },
  {
    name: "S'Infissi",
    role: "Infissi, Veneto",
    quote: "In 3 mesi oltre 100.000€ di venduto. Il marketing mirato ha fatto la differenza.",
    result: "+€100k in 3 mesi",
    logo: null,
  },
  {
    name: "Factory S.r.l.s",
    role: "Infissi e Serramenti",
    quote: "60.000€ di vendite in più nel primo mese. Velocità e qualità dei contatti sorprendenti.",
    result: "+€60k primo mese",
    logo: factoryLogo,
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-2">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
    ))}
  </div>
);

const OffertaTestimonialsSection = () => {
  return (
    <section className="section-padding-sm bg-muted/30 relative overflow-hidden">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center mb-6 md:mb-10">
            <p className="text-gold font-medium mb-2 tracking-wider uppercase text-sm">Risultati Reali</p>
            <h2 className="heading-section text-foreground">Fatturato, non vanity metrics</h2>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-3 md:gap-4" staggerDelay={0.1}>
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -4, borderColor: "hsl(var(--gold))" }}
                className="bg-card border border-border rounded-2xl p-4 md:p-5 h-full flex flex-col transition-colors duration-300"
              >
                <Stars />
                <blockquote className="text-muted-foreground italic leading-relaxed flex-1 mb-3 text-base md:text-lg">
                  "{t.quote}"
                </blockquote>
                <div className="bg-gold/10 text-gold text-base md:text-lg font-black px-3 py-2 rounded-lg mb-3 text-center">
                  {t.result}
                </div>
                <div className="flex items-center gap-3">
                  {t.logo && (
                    <img src={t.logo} alt={t.name} className="w-10 h-10 rounded-full object-contain bg-white p-1" />
                  )}
                  <div>
                    <p className="font-bold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default OffertaTestimonialsSection;
