import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, AlertTriangle, TrendingUp } from "lucide-react";
const HeroSection = () => {
  return <section className="min-h-screen flex flex-col justify-center section-padding bg-background relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-navy-light/30 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px"
      }} />
      </div>

      <div className="container-narrow relative z-10">
        {/* Warning Badge */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="mb-6">
          <div className="inline-flex items-start gap-2 px-3 py-2 sm:px-4 sm:py-3 bg-destructive/10 border border-destructive/30 rounded-xl text-xs sm:text-sm text-destructive font-medium max-w-2xl">
            <AlertTriangle size={14} className="animate-pulse flex-shrink-0 mt-0.5 sm:w-4 sm:h-4" />
            <span className="sm:hidden">ATTENZIONE: ogni mese senza un sistema stai regalando commesse ai concorrenti</span>
            <span className="hidden sm:inline">ATTENZIONE IMPRENDITORI EDILI: ogni mese senza un sistema di acquisizione stai regalando €30.000-50.000 di commesse ai tuoi concorrenti. Marzo 2026: rimasti 2 posti su 3 disponibili</span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1 initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }} className="heading-hero text-foreground mb-6">
          STANCO DI
          <br />
          <span className="text-gold">AGENZIE</span> CHE NON
          <br />
          HANNO MAI VISTO UN
          <br />
          <span className="text-gold">CANTIERE</span> IN VITA LORO?
        </motion.h1>

        {/* LAVORIAMO A % badge */}
        <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.45
        }} className="mb-6">
          <div className="flex flex-col items-start gap-1">
            <span className="inline-block px-5 py-2 text-lg sm:text-xl md:text-2xl font-black tracking-wide bg-secondary/15 border-2 border-secondary rounded-lg text-secondary uppercase">
              LAVORIAMO A PERCENTUALE
            </span>
            <span className="text-xs sm:text-sm text-muted-foreground ml-1">
              nessun fisso mensile (l'unico investimento è quello pubblicitario)
            </span>
          </div>
        </motion.div>

        {/* Subheadline */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.5
      }} className="mb-6 space-y-3">
           <p className="heading-sub text-foreground/80 font-normal">
            Mentre tu sei sul cantiere alle 7 di mattina, loro sono in ufficio a fare slide. E ti addebitano{" "}
            <span className="text-gold font-bold">€3.000-5.000 al mese</span> di canone fisso — anche quando i risultati non arrivano.
          </p>
          <p className="text-xl md:text-2xl text-foreground font-semibold">
            I nostri partner aggiungono in media:{" "}
            <span className="text-gold font-bold">€30.000–€50.000 di commesse in più al mese.</span>
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm md:text-base">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400">
              <TrendingUp size={18} />
              +40% fatturato medio
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400">
              -70% tempo trattative
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400">
              0€ canone fisso
            </span>
          </div>
        </motion.div>

        {/* Differentiator */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.7
      }} className="mb-4">
          <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Non siamo consulenti.{" "}
            <span className="text-foreground font-semibold">
              Abbiamo un'azienda di serramenti e ristrutturazioni che fattura ogni anno.
            </span>{" "}
            Ogni strategia che proponiamo funziona{" "}
            <span className="text-gold font-semibold">prima su di noi</span>, poi la portiamo da te.
          </p>
        </motion.div>

        {/* Urgency element */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.85
      }} className="mb-6">
          <p className="text-sm text-muted-foreground">
            ⚡ Solo <span className="text-gold font-bold">3 posti</span>{" "}
            disponibili questo mese — lavoriamo con poche aziende alla volta.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 1
      }} className="flex flex-col sm:flex-row items-start gap-4">
          <Button 
            variant="gold" 
            size="xl" 
            className="glow-gold group"
            onClick={() => {
              const element = document.getElementById("candidati");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span className="hidden sm:inline">CANDIDATI ORA — Scopri se puoi accedere al programma</span>
              <span className="sm:hidden">CANDIDATI ORA</span>
            <motion.span className="inline-block ml-2" animate={{
            x: [0, 5, 0]
          }} transition={{
            repeat: Infinity,
            duration: 1.5
          }}>
              →
            </motion.span>
          </Button>
          <p className="text-xs text-muted-foreground max-w-[250px]">
            Se non rispondiamo ai requisiti minimi, ti diciamo subito perché — senza perdere il tuo tempo.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5,
      duration: 1
    }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut"
      }} className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scopri</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>;
};
export default HeroSection;
