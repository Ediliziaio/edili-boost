import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const rows = [
  { label: "Acquisizione Clienti", without: "Passaparola casuale", withME: "Lead qualificati ogni mese" },
  { label: "Tipo di Clienti", without: "Cacciatori di sconto", withME: "Pre-qualificati, budget adeguato" },
  { label: "Preventivi", without: "20+ preventivi, chiudi il 10%", withME: "5–8 mirati, chiudi il 40–60%" },
  { label: "Dipendenza", without: "Mesi buoni e mesi di panico", withME: "Flusso prevedibile ogni mese" },
];

const OffertaComparisonSection = () => {
  return (
    <section className="section-padding-sm bg-background relative overflow-hidden">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center mb-6 md:mb-10">
            <h2 className="heading-section text-foreground">
              <span className="text-gold">Con vs Senza</span> Marketing Edile®
            </h2>
          </div>
        </AnimatedSection>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {rows.map((row, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="bg-card border border-border rounded-xl p-3 space-y-2">
                <p className="font-bold text-foreground text-base">{row.label}</p>
                <div className="flex items-start gap-2 bg-destructive/5 rounded-lg p-2">
                  <X className="w-3.5 h-3.5 text-destructive mt-0.5 shrink-0" />
                  <p className="text-muted-foreground text-base">{row.without}</p>
                </div>
                <div className="flex items-start gap-2 bg-gold/5 rounded-lg p-2">
                  <Check className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                  <p className="text-foreground text-base">{row.withME}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Desktop table */}
        <AnimatedSection delay={0.2}>
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-3 text-left text-foreground font-bold"></th>
                  <th className="p-3 text-left bg-gradient-to-b from-destructive/15 to-destructive/5 rounded-tl-xl">
                    <div className="flex items-center gap-2 text-destructive font-bold">
                      <X className="w-5 h-5" /> SENZA
                    </div>
                  </th>
                  <th className="p-3 text-left bg-gradient-to-b from-gold/15 to-gold/5 rounded-tr-xl">
                    <div className="flex items-center gap-2 text-gold font-bold">
                      <Check className="w-5 h-5" /> CON
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="border-t border-border"
                  >
                    <td className="p-3 font-bold text-foreground text-lg">{row.label}</td>
                    <td className="p-3 bg-destructive/5">
                      <div className="flex items-start gap-2 text-muted-foreground text-lg">
                        <X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                        {row.without}
                      </div>
                    </td>
                    <td className="p-3 bg-gold/5">
                      <div className="flex items-start gap-2 text-foreground text-lg">
                        <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                        {row.withME}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OffertaComparisonSection;
