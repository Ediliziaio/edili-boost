import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const OffertaErroriSection = () => {
  return (
    <section className="section-padding-sm bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-destructive/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center mb-6 md:mb-10">
            <h2 className="heading-section text-foreground mb-3">
              <span className="text-gold">4 Errori Madornali</span> Che Costano Commesse Ogni Mese
            </h2>
            <p className="text-lg text-muted-foreground">(perdendo €50.000–100.000 l'anno)</p>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4 md:gap-6">
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ borderColor: "hsl(var(--gold))" }}
              className="bg-card border border-border rounded-2xl p-5 md:p-6 transition-colors h-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-destructive/10 rounded-xl flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-foreground">ERRORE N.1 — Nessun follow-up strutturato</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Ti arrivano richieste, fai sopralluoghi, presenti preventivi. Il cliente dice "ci penso" e sparisce. Senza un sistema di follow-up, quei contatti comprano dal concorrente.
              </p>
              <div className="bg-gold/5 border border-gold/20 rounded-xl p-3 text-center">
                <p className="text-3xl md:text-4xl font-black text-gold mb-1">&lt;10%</p>
                <p className="text-xs text-muted-foreground">tasso conversione tipico</p>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <motion.div
              whileHover={{ borderColor: "hsl(var(--gold))" }}
              className="bg-card border border-border rounded-2xl p-5 md:p-6 transition-colors h-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-destructive/10 rounded-xl flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-foreground">ERRORE N.2 — Agenzia che non conosce il settore</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Paghi €3.000–5.000/mese per siti e post uguali a quelli dei tuoi 50 concorrenti. Report pieni di like e impression, zero tracciamento sui margini.
              </p>
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-3 text-center">
                <p className="text-3xl md:text-4xl font-black text-destructive">€5k</p>
                <p className="text-xs text-muted-foreground">sprecati ogni mese senza risultati</p>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <motion.div
              whileHover={{ borderColor: "hsl(var(--gold))" }}
              className="bg-card border border-border rounded-2xl p-5 md:p-6 transition-colors h-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-foreground">ERRORE N.3 — Nessun posizionamento differenziante</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Il tuo sito, i tuoi post, la tua comunicazione sono identici a quelli dei tuoi 50 concorrenti. Il cliente non percepisce differenze — e sceglie solo sul prezzo più basso.
              </p>
              <div className="bg-gold/5 border border-gold/20 rounded-xl p-3 text-center">
                <p className="text-3xl md:text-4xl font-black text-gold">0%</p>
                <p className="text-xs text-muted-foreground">differenziazione percepita</p>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <motion.div
              whileHover={{ borderColor: "hsl(var(--gold))" }}
              className="bg-card border border-border rounded-2xl p-5 md:p-6 transition-colors h-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-destructive/10 rounded-xl flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-foreground">ERRORE N.4 — Zero controllo sui numeri</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Non sai quanto ti costa acquisire un cliente, quali sono i margini reali per commessa, né quali canali funzionano. Ogni decisione è "a sensazione".
              </p>
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-3 text-center">
                <p className="text-3xl md:text-4xl font-black text-destructive">???</p>
                <p className="text-xs text-muted-foreground">margini reali sconosciuti</p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.5}>
          <div className="border-l-4 border-gold pl-5 py-3 mt-6 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              La differenza tra chi cresce e chi resta fermo? <strong className="text-foreground">Le strategie giuste per il settore edile — applicate in modo sistematico.</strong>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OffertaErroriSection;
