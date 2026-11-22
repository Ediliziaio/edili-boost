import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { BarChart3, FlaskConical, Store, Wrench } from "lucide-react";
import teamImage from "@/assets/team.jpg";
import FlussoVivo from "@/components/vivo/FlussoVivo";
const MethodSection = () => {
  return <section id="metodo" className="section-padding bg-navy-light relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection direction="left">
            <motion.div whileHover={{
            scale: 1.02
          }} className="relative rounded-2xl overflow-hidden aspect-square">
              <img src={teamImage} alt="Il nostro team di professionisti" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-light/90 via-transparent to-transparent" />
            </motion.div>
          </AnimatedSection>

          <div>
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-6">
                <FlaskConical className="w-10 h-10 text-gold" />
                <span className="text-lg text-gold font-medium uppercase tracking-wider">
                  Il nostro metodo
                </span>
              </div>
              <h2 className="heading-section text-foreground mb-6">
                PRIMA FUNZIONA PER NOI.
              </h2>
              <p className="heading-sub text-gold mb-8">
                POI LO APPLICHIAMO PER TE.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-xl text-foreground/80 mb-6">
                Ogni strategia che proponiamo:
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <FlussoVivo
                colonne="sm:grid-cols-2"
                steps={[
                  { etichetta: "Testata", title: "Sulla nostra azienda di serramenti", icon: FlaskConical },
                  { etichetta: "Provata", title: "Nel nostro showroom, con clienti reali", icon: Store },
                  { etichetta: "Misurata", title: "Sugli incassi veri, non sui like", icon: BarChart3 },
                  { etichetta: "Corretta", title: "Sugli errori, pagati da noi e non da te", icon: Wrench },
                ]}
              />
            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection delay={0.5}>
          <div className="p-8 md:p-12 bg-background rounded-2xl">
            <p className="text-xl md:text-2xl text-foreground mb-4">
              👉 Se non funziona nella nostra azienda, non ti proponiamo nulla.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Se funziona, ti diciamo esattamente come replicarla.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-gold">
              👉 Non vendiamo promesse. Vendiamo processi già validati sul campo.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>;
};
export default MethodSection;
