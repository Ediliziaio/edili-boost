import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Check, X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  { num: "01", text: "Vogliono trasformare ogni sopralluogo in commesse chiuse a prezzo pieno." },
  { num: "02", text: "Sanno di offrire qualità eccellente, ma non riescono a comunicarla al mercato." },
  { num: "03", text: "Vogliono un sistema per chiudere il 40–60% dei preventivi presentati." },
  { num: "04", text: "Sono stufi di dipendere dal passaparola e vogliono un flusso prevedibile ogni mese." },
  { num: "05", text: "Hanno già provato agenzie generaliste che non capivano il settore." },
];

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

const OffertaPerChiSection = () => {
  const scrollToCandidati = () => {
    document.getElementById("candidati")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding-sm bg-navy-light relative overflow-hidden">
      <div className="container-narrow">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-6 md:mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-gold" />
              <p className="text-gold font-medium tracking-wider uppercase text-sm">Selezione</p>
            </div>
            <h2 className="heading-section text-foreground">NON TUTTI POSSONO ENTRARE</h2>
            <p className="text-xl text-muted-foreground mt-3 max-w-2xl mx-auto">Per quegli imprenditori che…</p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto relative mb-8 md:mb-12">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/50 to-transparent" />
          <div className="space-y-4">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 pl-1"
              >
                <div className="w-10 h-10 bg-gold/10 border-2 border-gold rounded-full flex items-center justify-center shrink-0 relative z-10">
                  <span className="text-gold font-black text-xs">{r.num}</span>
                </div>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed pt-2">{r.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Griglia requisiti */}
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

        {/* CTA */}
        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <Button variant="gold" size="xl" onClick={scrollToCandidati} className="w-full sm:w-auto">
              <span className="sm:hidden">CANDIDATI ORA</span>
              <span className="hidden sm:inline">CANDIDATI ORA — Scopri se la tua azienda è idonea</span>
            </Button>
            <p className="text-xs text-muted-foreground mt-2">Tasso di accettazione: ~40%</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OffertaPerChiSection;
