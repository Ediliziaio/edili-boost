import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import floPortrait from "@/assets/flo-portrait.jpg";
import showroomImage from "@/assets/showroom.jpg";

const bullets = [
  "Titolare di un'azienda di serramenti e ristrutturazioni che fattura ogni anno — showroom, clienti e bilancio reali.",
  "Ha costruito il sistema testando ogni strategia prima sulla propria azienda — pagando gli errori di tasca propria.",
  "Ha seguito oltre 47 aziende edili, generando collettivamente oltre €60 milioni di fatturato.",
];

const OffertaFounderSection = () => {
  return (
    <section className="section-padding-sm bg-navy-light relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center mb-6 md:mb-10">
            <p className="text-gold font-medium mb-2 tracking-wider uppercase text-sm">Chi Ha Creato Marketing Edile®</p>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Ora che conosci il sistema, scopri chi l'ha costruito — e perché funziona.</p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-14 items-start">
          {/* Foto sticky */}
          <AnimatedSection delay={0.2}>
            <div className="relative mx-auto lg:mx-0 w-64 lg:w-full lg:sticky lg:top-24">
              <motion.div whileHover={{ scale: 1.02 }}>
                <div className="rounded-2xl overflow-hidden border-2 border-gold/20 aspect-[3/4]">
                  <img src={floPortrait} alt="Florin — Fondatore Marketing Edile" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <div className="mt-4 text-center lg:text-left">
                <p className="text-foreground font-bold text-lg">Flo</p>
                <p className="text-muted-foreground text-sm">Fondatore, Marketing Edile®</p>
              </div>
              <img src={showroomImage} alt="Showroom aziendale" loading="lazy" decoding="async" className="rounded-xl w-full h-32 object-cover opacity-80 mt-4" />
            </div>
          </AnimatedSection>

          {/* Storia completa */}
          <AnimatedSection delay={0.3}>
            <div className="space-y-5">
              <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                Perché ho creato Marketing Edile — e perché lavoriamo solo a provvigione
              </h3>

              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Mi chiamo <span className="text-gold font-bold">Flo</span>. Non sono nato serramentista — sono nato nel marketing e nella vendita.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Mio padre ha un'azienda edile, e da <span className="text-gold font-bold">8 anni</span> mi sono specializzato in un'unica cosa: portare clienti qualificati alle aziende del settore edile. Serramentisti, imprese di ristrutturazione, fotovoltaico, pergole, pavimentazioni. Solo edilizia. Nient'altro.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Da subito ho scelto un modello che nessuno vuole sentirti dire quando apri un'agenzia: <span className="text-gold font-bold">lavoriamo solo a provvigione</span>. Nessun fisso mensile. Nessun anticipo. Guadagniamo solo quando tu chiudi una commessa grazie ai lead che ti portiamo.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Perché l'ho fatto? Perché dopo anni passati a generare contatti per aziende edili, ho capito che l'unico numero che conta non sono i click, non sono le impression, non sono i lead. Sono le commesse firmate. E volevo che il nostro incentivo fosse allineato esattamente a quello.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                A fine 2023 ho aperto una mia azienda di serramenti — per testare sul campo lo stesso sistema che costruivo per i nostri partner. Nei primi 3 mesi, senza esperienza tecnica e senza sconto in fattura, abbiamo fatto <span className="text-gold font-bold">€400.000 di vendite</span>. E in due anni abbiamo superato i <span className="text-gold font-bold">2 milioni di vendite</span>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Poi, vedendo quante aziende ricevevano lead di qualità e li perdevano in trattativa, ho creato <span className="text-gold font-bold">Vendita Edile®</span> — un programma di affiancamento alla vendita per chiudere quello che il marketing apre.
              </p>

              {/* Bullets */}
              <div className="space-y-3 pt-2">
                {bullets.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <p className="text-muted-foreground text-lg leading-relaxed">{b}</p>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4 mt-4 border-t border-border">
                <p className="text-lg md:text-xl text-foreground font-bold leading-relaxed">
                  Oggi non portiamo solo clienti. <span className="text-gold">Portiamo clienti e il sistema per chiuderli.</span>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default OffertaFounderSection;
