import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Check, X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const workWith = [
  "Margini sani (almeno 20%)",
  "Visione a 1–3 anni",
  "Team strutturato (3+ persone)",
  "Lavoro stabile da gestire",
  "Voglia di costruire un sistema",
];

const dontWorkWith = [
  "Cerca il preventivo più basso",
  "Vuole risultati in 2 settimane",
  "Ditta individuale senza struttura",
  "Difficoltà finanziarie gravi",
  "Non testa sistemi nuovi",
];

const OffertaForWhoSection = () => {
  const scrollToCandidati = () => {
    document.getElementById("candidati")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding-sm bg-navy-light relative overflow-hidden">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center mb-6 md:mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-gold" />
              <p className="text-gold font-medium tracking-wider uppercase text-sm">Selezione</p>
            </div>
            <h2 className="heading-section text-foreground">NON TUTTI POSSONO ENTRARE</h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-8">
          <AnimatedSection delay={0.2}>
            <div className="bg-card border border-border rounded-2xl overflow-hidden h-full">
              <div className="h-1 bg-gradient-to-r from-gold to-gold-glow" />
              <div className="p-4 md:p-5">
                <h3 className="text-base font-bold text-gold mb-3 flex items-center gap-2">
                  <Check className="w-4 h-4" /> LAVORIAMO CON CHI HA:
                </h3>
                <div className="space-y-2">
                  {workWith.map((w, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                      <p className="text-muted-foreground text-lg">{w}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-card border border-border rounded-2xl overflow-hidden h-full">
              <div className="h-1 bg-gradient-to-r from-destructive to-destructive/70" />
              <div className="p-4 md:p-5">
                <h3 className="text-base font-bold text-destructive mb-3 flex items-center gap-2">
                  <X className="w-4 h-4" /> NON LAVORIAMO CON CHI:
                </h3>
                <div className="space-y-2">
                  {dontWorkWith.map((d, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex items-center gap-2">
                      <X className="w-3.5 h-3.5 text-destructive shrink-0" />
                      <p className="text-muted-foreground text-lg">{d}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <Button variant="gold" size="xl" onClick={scrollToCandidati} className="w-full sm:w-auto">
              Candidami adesso
            </Button>
            <p className="text-xs text-muted-foreground mt-2">Tasso di accettazione: ~40%</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OffertaForWhoSection;
