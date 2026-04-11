import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, BarChart3 } from "lucide-react";
import showroomImage from "@/assets/showroom.jpg";
import teamImage from "@/assets/team.jpg";

const steps = [
  { icon: Search, label: "Analisi", desc: "Studiamo il tuo mercato e i competitor" },
  { icon: Lightbulb, label: "Strategia", desc: "Piano su misura per il tuo settore" },
  { icon: Rocket, label: "Esecuzione", desc: "Lanciamo campagne e sistemi di vendita" },
  { icon: BarChart3, label: "Risultati", desc: "Misuriamo e ottimizziamo ogni euro" },
];

const OffertaSistemaSection = () => {
  return (
    <section className="section-padding-sm bg-navy-light relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center mb-6 md:mb-10">
            <h2 className="heading-section text-foreground mb-3">
              MARKETING EDILE<span className="text-gold">®</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Il sistema che ha generato <strong className="text-gold">€60 milioni di commesse</strong> per aziende edili in Italia.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline orizzontale */}
        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gold/10 border border-gold/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <step.icon className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                </div>
                <p className="text-foreground font-bold text-base mb-1">{step.label}</p>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-px bg-gradient-to-r from-gold/40 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center">
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-3">
              <img src={showroomImage} alt="Showroom Marketing Edile" loading="lazy" decoding="async" className="w-full h-40 md:h-52 object-cover rounded-xl" />
              <img src={teamImage} alt="Team Marketing Edile" loading="lazy" decoding="async" className="w-full h-40 md:h-52 object-cover rounded-xl" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="space-y-3">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Non un elenco di servizi. Un <strong className="text-foreground">SISTEMA COMPLETO</strong> costruito sul campo — dalla nostra azienda di serramenti, testato su incassi reali.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ogni strategia è stata testata prima su di noi, misurata sui preventivi, corretta sui nostri errori — <strong className="text-foreground">pagati da noi, non da te.</strong>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default OffertaSistemaSection;
