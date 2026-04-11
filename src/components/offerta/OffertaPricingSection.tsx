import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Check, X, Target, Shield, Zap, Users, ArrowRight, TrendingUp, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";

const OffertaPricingSection = () => {
  const valueStack = [
    { service: "Strategia Marketing Personalizzata", value: 3000 },
    { service: "Piano Comunicativo Mensile", value: 1500 },
    { service: "Contenuti Video Scriptati (4/mese)", value: 2000 },
    { service: "Editing e Post-Produzione", value: 1200 },
    { service: "Landing Page Ottimizzata", value: 2500 },
    { service: "Gestione Advertising", value: 1800 },
    { service: "Report Settimanali + Call", value: 800 },
    { service: "Referente Dedicato", value: 1000 },
  ];

  const totalValue = valueStack.reduce((acc, item) => acc + item.value, 0);

  const alternatives = [
    { name: "Dipendente Marketing", cost: "€3.500+/mese fisso", problem: "Paghi anche se non porta risultati" },
    { name: "Agenzia Generalista", cost: "€2.000–5.000/mese fisso", problem: "Lavora anche per i tuoi concorrenti" },
    { name: "Fai da te", cost: "20+ ore/settimana", problem: "Tempo tolto alla tua azienda" },
  ];

  const { ref: totalRef, formattedValue: animatedTotal } = useCountUp({
    end: totalValue,
    duration: 2000,
    prefix: "€"
  });

  const scrollToCandidati = () => {
    document.getElementById("candidati")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[200px]" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-4">QUANTO COSTA?</h2>
            <p className="text-2xl md:text-3xl font-bold text-gold mb-4">
              Noi guadagniamo solo se TU guadagni
            </p>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dimentica i canoni fissi. Dimentica di pagare €3.000-5.000 al mese a un'agenzia che non ha nessuna responsabilità sui tuoi risultati.
            </p>
          </div>
        </AnimatedSection>

        {/* Confronto Alternative */}
        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl mx-auto mb-12 p-6 md:p-8 bg-card border border-border rounded-2xl">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-gold" />
              Confronto Rapido
            </h3>
            <div className="space-y-3">
              {alternatives.map((alt, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-destructive/5 border border-destructive/20 rounded-xl gap-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <span className="font-medium text-foreground">{alt.name}</span>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-6 pl-11 sm:pl-0">
                    <span className="text-muted-foreground text-sm font-semibold">{alt.cost}</span>
                    <span className="text-destructive text-sm">{alt.problem}</span>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gold/10 border-2 border-gold rounded-xl gap-2 mt-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <span className="font-bold text-foreground">Marketing Edile®</span>
                </div>
                <div className="flex items-center gap-4 sm:gap-6 pl-11 sm:pl-0">
                  <span className="font-bold text-gold">% sulle vendite che generiamo</span>
                  <span className="text-emerald-500 text-sm font-medium bg-emerald-500/10 px-3 py-1 rounded-full">Se non vendiamo, non ci devi nulla</span>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Value Stack + Price Card */}
        <AnimatedSection delay={0.2}>
          <motion.div className="max-w-3xl mx-auto p-6 md:p-10 bg-card border-2 border-gold rounded-3xl glow-gold relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Cosa Ricevi Ogni Mese</h3>
              <div className="space-y-2 mb-6">
                {valueStack.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-2.5 bg-background/50 rounded-lg border border-border/50"
                  >
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-foreground">{item.service}</span>
                    </div>
                    <span className="text-muted-foreground font-medium">€{item.value.toLocaleString()}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                ref={totalRef}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-4 bg-muted/50 rounded-xl border border-border mb-8"
              >
                <span className="text-lg font-bold text-foreground">VALORE TOTALE:</span>
                <span className="text-2xl font-black text-muted-foreground line-through">{animatedTotal}/mese</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl border border-gold relative"
              >
                <motion.div
                  initial={{ rotate: -12, scale: 0 }}
                  whileInView={{ rotate: -12, scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  viewport={{ once: true }}
                  className="absolute -top-4 -right-4 md:right-8 bg-gold text-background font-black text-xs px-4 py-2 rounded-full shadow-lg"
                >
                  UNICI NEL SETTORE
                </motion.div>

                <p className="text-lg text-muted-foreground mb-4">PAGHI SOLO</p>
                <div className="flex flex-col items-center justify-center gap-2 mb-4">
                  <span className="text-4xl md:text-6xl font-black text-gold flex items-center gap-3">
                    <TrendingUp className="w-10 h-10 md:w-14 md:h-14" />
                    UNA %
                  </span>
                  <span className="text-xl md:text-2xl text-foreground font-bold">sulle vendite che generiamo per te</span>
                </div>
                <p className="text-foreground/80 mb-6 max-w-md mx-auto text-lg">
                  Non paghi canoni fissi. La nostra percentuale si applica solo sulle commesse che chiudi grazie al nostro lavoro.
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 border border-destructive/30 rounded-full mb-6">
                  <Users className="w-4 h-4 text-destructive" />
                  <span className="text-sm font-bold text-destructive">Solo 3 posti disponibili questo mese</span>
                </div>

                <div>
                  <Button variant="gold" size="xl" className="glow-gold text-lg px-10" onClick={scrollToCandidati}>
                    Richiedi la Valutazione Gratuita
                    <motion.span className="inline-block ml-2" animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* L'Unico Tuo Investimento */}
        <AnimatedSection delay={0.3}>
          <div className="max-w-3xl mx-auto mt-10 p-6 md:p-8 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 border border-blue-500/30 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">L'UNICO TUO INVESTIMENTO</h3>
                <p className="text-foreground/80 mb-4 text-xl">
                  <span className="font-bold text-blue-500">Il budget pubblicitario è a tuo carico.</span>
                </p>
                <p className="text-foreground/80 mb-4 text-lg">Perché? Perché la pubblicità fa crescere il <strong>TUO</strong> brand:</p>
                <ul className="space-y-3 mb-6">
                  {["Aumenta la **TUA visibilità** online", "Costruisce la **TUA reputazione** nel territorio", "Resta **patrimonio della TUA azienda**", "**Tu decidi** quanto investire in base ai tuoi obiettivi"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/80">
                      <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                  <p className="text-lg font-bold text-foreground">
                    <span className="text-blue-500">Noi gestiamo tutto.</span> Tu decidi quanto investire. Noi lo ottimizziamo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Perché Lo Facciamo Così */}
        <AnimatedSection delay={0.4}>
          <div className="max-w-3xl mx-auto mt-8 p-6 md:p-8 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <Handshake className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">PERCHÉ LO FACCIAMO COSÌ?</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-foreground/80">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Se non vendi, <strong>non guadagniamo nemmeno noi</strong></span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/80">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>I nostri interessi sono <strong>allineati con i tuoi</strong> — non con quelli del tuo concorrente</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/80">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Lavoriamo <strong>come partner</strong>, non come fornitori. La differenza non è filosofica — è nei risultati</span>
                  </li>
                </ul>
                <div className="p-4 bg-gold/10 border border-gold/30 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-gold flex-shrink-0" />
                    <p className="text-lg font-bold text-foreground">
                      <span className="text-gold">Zero rischio per te.</span> Tutto il rischio è sulle nostre spalle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Vincoli? No. */}
        <AnimatedSection delay={0.5}>
          <div className="max-w-3xl mx-auto mt-8 p-6 md:p-8 bg-card border border-border rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              VINCOLI? <span className="text-gold">No.</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {["Rescindi quando vuoi", "Zero penali", "Zero trappole", "Paghi solo sui risultati"].map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-foreground"
                >
                  <Check className="w-5 h-5 text-emerald-500" />
                  {item}
                </motion.span>
              ))}
            </div>
            <p className="text-center text-muted-foreground italic text-xl">
              "Se non portiamo vendite, non ci devi nulla."
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OffertaPricingSection;
