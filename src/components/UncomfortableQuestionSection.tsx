import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { HelpCircle, Check, X } from "lucide-react";
import cantiereImage from "@/assets/cantiere.jpg";

const UncomfortableQuestionSection = () => {
  const weHave = [
    "Il nostro showroom aperto al pubblico — con clienti reali che entrano ogni settimana",
    "I nostri preventivi — sappiamo cosa funziona e cosa no nella trattativa edile",
    "Il nostro bilancio — conosciamo margini, costi di posa, gestione post-vendita",
    "I nostri cantieri — ogni giorno affrontiamo gli stessi problemi che hai tu",
  ];

  const theyHave = [
    "Teorie da aula",
    "Case study di altri settori",
    "Nessuna responsabilità sui risultati",
    "Un canone fisso — vendano o no",
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-4 mb-12">
            <HelpCircle className="w-10 h-10 text-gold" />
            <h2 className="heading-section text-foreground text-center">
              FACCIAMOCI UNA DOMANDA SCOMODA
            </h2>
          </div>
        </AnimatedSection>

        {/* Image banner */}
        <AnimatedSection delay={0.1}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative rounded-2xl overflow-hidden aspect-[21/9] mb-12"
          >
            <img
              src={cantiereImage}
              alt="Team al lavoro su un cantiere"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-center p-8 md:p-12">
              <p className="text-xl md:text-2xl text-foreground font-medium max-w-md">
                Noi installiamo infissi{" "}
                <span className="text-gold">ogni giorno</span>. Le agenzie no.
              </p>
            </div>
          </motion.div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <AnimatedSection delay={0.2}>
            <div className="p-8 bg-card border border-emerald-500/30 rounded-2xl h-full">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Noi abbiamo:
              </h3>
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {weHave.map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.p
                      whileHover={{ x: 10 }}
                      className="text-lg text-muted-foreground flex items-start gap-3 transition-colors"
                    >
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                      {item}
                    </motion.p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="p-8 bg-card border border-destructive/30 rounded-2xl h-full">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Le agenzie generaliste hanno:
              </h3>
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {theyHave.map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.p
                      whileHover={{ x: 10 }}
                      className="text-lg text-muted-foreground flex items-start gap-3 transition-colors"
                    >
                      <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                      {item}
                    </motion.p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.6}>
          <motion.div
            className="text-center mt-16 space-y-2"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-2xl md:text-3xl font-bold text-gold">
              Ecco perché Marketing Edile è diverso.
            </p>
            <p className="text-xl text-muted-foreground">
              Non abbiamo un'idea teorica dell'edilizia. Ci lavoriamo sopra ogni mattina.
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default UncomfortableQuestionSection;
