import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { Building2, Users, FileCheck, TrendingUp } from "lucide-react";
import showroomImage from "@/assets/showroom.jpg";
import floPortrait from "@/assets/flo-portrait.jpg";
const DifferentialSection = () => {
  const realityPoints = [{
    icon: Building2,
    text: "Showroom reale."
  }, {
    icon: Users,
    text: "Clienti veri."
  }, {
    icon: FileCheck,
    text: "Preventivi veri."
  }, {
    icon: TrendingUp,
    text: "Bilancio vero."
  }];
  return <section id="differenza" className="section-padding bg-background relative">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-8 uppercase tracking-wider">
                La differenza
              </span>
              <h2 className="heading-section text-foreground mb-6">
                MARKETING EDILE È <span className="text-gold">DIVERSO</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Per un motivo molto chiaro:
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-6 md:p-8 bg-card border border-border rounded-2xl">
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  👉 Noi abbiamo{" "}
                  <span className="text-gold font-bold">
                    un'azienda edile che vende infissi e serramenti.
                  </span>
                </p>
                <div className="mt-4 space-y-1 text-muted-foreground">
                  <p>Non un progetto teorico.</p>
                  <p>Non un caso studio inventato.</p>
                  <p className="text-foreground font-medium">
                    Un'azienda reale, in Italia.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3} direction="right">
            <motion.div whileHover={{
            scale: 1.02
          }} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={showroomImage} alt="Showroom infissi e serramenti moderni" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm text-foreground/80 font-medium">
              </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {realityPoints.map((point, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.05,
            borderColor: "hsl(var(--gold))"
          }} className="p-6 bg-navy-light border border-border rounded-xl text-center transition-colors duration-300">
                <point.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-foreground font-semibold">{point.text}</p>
              </motion.div>)}
          </div>
        </AnimatedSection>

        {/* Storia del fondatore */}
        <div className="mt-20">
          <AnimatedSection delay={0.1}>
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-8 uppercase tracking-wider">
              La nostra storia
            </span>
          </AnimatedSection>

          <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-14 items-start">
            {/* Foto Florin */}
            <AnimatedSection delay={0.2} direction="left">
              <div className="relative mx-auto lg:mx-0 w-64 lg:w-full lg:sticky lg:top-24">
                <div className="rounded-2xl overflow-hidden border-2 border-gold/20 aspect-[3/4]">
                  <img src={floPortrait} alt="Florin Andriciuc, fondatore di Marketing Edile" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="mt-4 text-center lg:text-left">
                  <p className="text-foreground font-bold text-lg">Florin Andriciuc</p>
                  <p className="text-muted-foreground text-sm">Fondatore, Marketing Edile®</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Testo lineare */}
            <AnimatedSection delay={0.3}>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  Perché ho creato Marketing Edile — e perché lavoriamo solo a provvigione
                </h3>

                <p className="text-lg text-foreground leading-relaxed">
                  Mi chiamo <span className="text-gold font-bold">Florin Andriciuc</span>. Non sono nato serramentista — sono nato nel marketing e nella vendita.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Mio padre ha un'azienda edile, e da <span className="text-gold font-bold">8 anni</span> mi sono specializzato in un'unica cosa: portare clienti qualificati alle aziende del settore edile. Serramentisti, imprese di ristrutturazione, fotovoltaico, pergole, pavimentazioni. Solo edilizia. Nient'altro.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Da subito ho scelto un modello che nessuno vuole sentirti dire quando apri un'agenzia: <span className="text-gold font-bold">lavoriamo solo a provvigione</span>. Nessun fisso mensile. Nessun anticipo. Guadagniamo solo quando tu chiudi una commessa grazie ai lead che ti portiamo.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Perché l'ho fatto? Perché dopo anni passati a generare contatti per aziende edili, ho capito che l'unico numero che conta non sono i click, non sono le impression, non sono i lead. Sono le commesse firmate. E volevo che il nostro incentivo fosse allineato esattamente a quello.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  A fine 2023 ho aperto una mia azienda di serramenti — per testare sul campo lo stesso sistema che costruivo per i nostri partner. Nei primi 3 mesi, senza esperienza tecnica e senza sconto in fattura, abbiamo fatto <span className="text-gold font-bold">€400.000 di vendite</span>. E in due anni abbiamo superato i <span className="text-gold font-bold">2 milioni di vendite</span>.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Poi, vedendo quante aziende ricevevano lead di qualità e li perdevano in trattativa, ho creato <span className="text-gold font-bold">Vendita Edile®</span> — un programma di affiancamento alla vendita per chiudere quello che il marketing apre.
                </p>

                <div className="pt-4 mt-4 border-t border-border">
                  <p className="text-xl text-foreground font-bold leading-relaxed">
                    Oggi non portiamo solo clienti. <span className="text-gold">Portiamo clienti e il sistema per chiuderli.</span>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>;
};
export default DifferentialSection;