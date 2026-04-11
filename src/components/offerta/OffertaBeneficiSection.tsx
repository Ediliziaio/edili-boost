import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import {
  Target,
  MessageSquare,
  Layout,
  FileText,
  Video,
  Megaphone,
  BarChart3,
  User,
  ArrowRight,
  Check,
  Zap,
} from "lucide-react";

const categories = [
  {
    title: "STRATEGIA",
    icon: Target,
    color: "gold",
    services: [
      { icon: Target, title: "Marketing Edile Specializzato", desc: "Affiliazione + Acquisizione + Piano editoriale calibrato sul tuo mercato" },
      { icon: MessageSquare, title: "Piano Comunicativo", desc: "Messaggi che i tuoi clienti capiscono, scritti come farebbe un artigiano che sa vendere" },
      { icon: Layout, title: "Landing Page", desc: "Non un sito vetrina. Una macchina che trasforma visitatori in appuntamenti" },
    ],
  },
  {
    title: "PRODUZIONE",
    icon: Video,
    color: "blue-400",
    services: [
      { icon: FileText, title: "Contenuti Video Scriptati", desc: "Sai cosa dire, come dirlo, quando dirlo. Tutto scritto e ottimizzato" },
      { icon: Video, title: "Editing Video", desc: "Professionali, veloci, ottimizzati per conversione" },
    ],
  },
  {
    title: "GESTIONE",
    icon: BarChart3,
    color: "emerald-400",
    services: [
      { icon: Megaphone, title: "Advertising Gestito", desc: "Campagne per clienti pronti a comprare, non per like e follower" },
      { icon: BarChart3, title: "Confronto Settimanale", desc: "Numeri reali, performance reali, decisioni reali" },
      { icon: User, title: "Un Unico Referente", desc: "Non passi da uno all'altro. Una persona conosce la tua azienda e la segue" },
    ],
  },
];

const timelineSteps = [
  { icon: Target, label: "STRATEGIA", color: "text-gold" },
  { icon: Video, label: "PRODUZIONE", color: "text-blue-400" },
  { icon: BarChart3, label: "GESTIONE", color: "text-emerald-400" },
  { icon: Zap, label: "RISULTATI", color: "text-gold" },
];

const results = [
  "Attrae clienti qualificati",
  "Li converte in appuntamenti",
  "Ti libera dalle attività ripetitive",
  "Scala con il tuo business",
];

const getColors = (color: string) => {
  switch (color) {
    case "blue-400":
      return { bg: "bg-blue-400/10", border: "border-blue-400/30", text: "text-blue-400", badge: "bg-blue-400/20 text-blue-400 border-blue-400/30" };
    case "emerald-400":
      return { bg: "bg-emerald-400/10", border: "border-emerald-400/30", text: "text-emerald-400", badge: "bg-emerald-400/20 text-emerald-400 border-emerald-400/30" };
    default:
      return { bg: "bg-gold/10", border: "border-gold/30", text: "text-gold", badge: "bg-gold/20 text-gold border-gold/30" };
  }
};

const OffertaBeneficiSection = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="container-narrow">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-14">
            <h2 className="heading-section text-foreground mb-4">
              COSA OTTIENI CON{" "}
              <span className="text-gold">MARKETING EDILE®</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Non un elenco di servizi. Un <span className="text-gold font-semibold">SISTEMA</span> completo che funziona.
            </p>
          </div>
        </AnimatedSection>

        {/* Pipeline */}
        <AnimatedSection delay={0.15}>
          <div className="mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
              {timelineSteps.map((step, i) => (
                <div key={step.label} className="flex items-center">
                  <div className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full">
                    <step.icon className={`w-5 h-5 ${step.color}`} />
                    <span className={`text-sm font-bold ${step.color}`}>{step.label}</span>
                  </div>
                  {i < timelineSteps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-muted-foreground mx-2 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* 3 Column Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-5 md:gap-6 mb-10 md:mb-14" staggerDelay={0.15}>
          {categories.map((cat) => {
            const c = getColors(cat.color);
            return (
              <StaggerItem key={cat.title}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className={`group h-full p-5 md:p-6 bg-background border ${c.border} rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-gold/10`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-11 h-11 ${c.bg} border ${c.border} rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <cat.icon className={`w-5 h-5 ${c.text}`} />
                    </div>
                    <div>
                      <h3 className={`text-base md:text-lg font-bold ${c.text}`}>{cat.title}</h3>
                      <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium border rounded-full ${c.badge}`}>
                        {cat.services.length} servizi
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {cat.services.map((s) => (
                      <div key={s.title} className="flex gap-3">
                        <div className={`flex-shrink-0 w-8 h-8 ${c.bg} rounded-lg flex items-center justify-center`}>
                          <s.icon className={`w-4 h-4 ${c.text}`} />
                        </div>
                        <div>
                          <h4 className="text-foreground font-semibold text-sm md:text-base">{s.title}</h4>
                          <p className="text-muted-foreground text-base leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Results Box */}
        <AnimatedSection delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative p-6 md:p-8 bg-gradient-to-br from-gold/10 via-background to-gold/5 border border-gold/30 rounded-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-gold rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-background" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">IL RISULTATO?</h3>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground mb-5">
                Un sistema che lavora per te <span className="text-gold font-semibold">24/7</span>:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                {results.map((r) => (
                  <div key={r} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gold/20 border border-gold/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-foreground font-medium text-lg">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OffertaBeneficiSection;
