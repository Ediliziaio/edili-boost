import { motion } from "framer-motion";
import { ArrowDown, TrendingUp, ChevronDown, Hammer, HardHat, Ruler, Home, Wrench, Building2, Fence, PaintBucket } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingIcons = [
  { Icon: Hammer, size: 32, top: "8%", left: "5%", delay: 0, rotate: -15 },
  { Icon: HardHat, size: 40, top: "15%", right: "8%", delay: 0.5, rotate: 10 },
  { Icon: Ruler, size: 28, top: "60%", left: "3%", delay: 1, rotate: 25 },
  { Icon: Home, size: 36, top: "75%", right: "6%", delay: 1.5, rotate: -8 },
  { Icon: Wrench, size: 30, top: "40%", left: "8%", delay: 2, rotate: 20 },
  { Icon: Building2, size: 44, top: "30%", right: "4%", delay: 0.8, rotate: -12 },
  { Icon: Fence, size: 34, top: "85%", left: "15%", delay: 1.2, rotate: 5 },
  { Icon: PaintBucket, size: 26, top: "50%", right: "12%", delay: 1.8, rotate: -20 },
  { Icon: Hammer, size: 24, top: "20%", left: "20%", delay: 2.2, rotate: 30 },
  { Icon: Building2, size: 30, top: "70%", right: "18%", delay: 0.3, rotate: -5 },
];

const OffertaHero = () => {
  const scrollToCandidati = () => {
    document.getElementById("candidati")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[70vh] flex items-center justify-center py-10 md:py-16 relative overflow-hidden" style={{ backgroundColor: "hsl(213 65% 4%)" }}>
      {/* Gold gradient blobs — reduced blur on mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[600px] h-[500px] rounded-full blur-[80px] md:blur-[180px]" style={{ backgroundColor: "hsl(var(--gold) / 0.08)" }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full blur-[60px] md:blur-[150px]" style={{ backgroundColor: "hsl(var(--gold) / 0.05)" }} />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[80px] md:blur-[200px]" style={{ backgroundColor: "hsl(var(--gold) / 0.04)" }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[80px] md:blur-[250px]" style={{ backgroundColor: "hsl(var(--gold) / 0.14)" }} />
      </div>

      {/* Grid pattern overlay — hidden on mobile */}
      <div className="absolute inset-0 opacity-[0.03] hidden md:block" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Floating construction icons — hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {floatingIcons.map(({ Icon, size, delay, rotate, ...pos }, i) => (
          <motion.div
            key={i}
            className="absolute text-secondary"
            style={{ ...pos, opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.07, y: [0, -12, 0] }}
            transition={{
              opacity: { duration: 1, delay: delay },
              y: { repeat: Infinity, duration: 4 + (i % 3), ease: "easeInOut", delay },
            }}
          >
            <Icon size={size} style={{ transform: `rotate(${rotate}deg)` }} strokeWidth={1.5} />
          </motion.div>
        ))}
      </div>

      <div className="container-narrow text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-destructive/10 border border-destructive/30 rounded-full text-destructive text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
            <span className="sm:hidden">Solo 3 posti</span>
            <span className="hidden sm:inline">Ogni mese il 73% delle aziende edili perde commesse per mancanza di un sistema</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-xs sm:text-sm font-bold mb-4 uppercase tracking-wider">
            LAVORIAMO A PERCENTUALE
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] text-foreground mb-6"
        >
          STANCO DI AGENZIE CHE NON HANNO MAI VISTO UN{" "}
          <span className="text-secondary">CANTIERE</span> IN VITA LORO?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-3"
        >
          Trasforma il 2026 in un record di commesse.{" "}
          <strong className="text-foreground">Senza canoni fissi da €3.000–5.000/mese</strong>, senza guerra dei prezzi.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-base text-muted-foreground max-w-2xl mx-auto mb-6"
        >
          L'unico investimento è il budget pubblicitario.{" "}
          <strong className="text-secondary">Se non vendi, non ci devi nulla.</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap justify-center gap-3 mb-6"
        >
          {[
            { icon: TrendingUp, label: "+40% fatturato medio" },
            { icon: TrendingUp, label: "-70% tempo perso" },
            { icon: TrendingUp, label: "0€ canone fisso" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-card/80 border border-border rounded-full text-xs sm:text-sm text-muted-foreground">
              <stat.icon className="w-3.5 h-3.5 text-secondary" />
              <span>{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-6"
        >
          <div className="inline-flex flex-col items-center gap-2 px-4 py-3 bg-card/50 border border-secondary/20 rounded-lg">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary/10 border border-secondary/40 rounded-full">
              <TrendingUp className="w-4 h-4 text-secondary" />
              <span className="text-base sm:text-lg font-bold text-secondary">+100.000€ al mese</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground text-center">
              I nostri partner aggiungono in media: <strong className="text-foreground">€30.000–€50.000</strong> di commesse in più al mese.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col items-center gap-3"
        >
          <Button variant="gold" size="xl" onClick={scrollToCandidati} className="w-full sm:w-auto">
            <span className="sm:hidden">CANDIDATI ORA</span>
            <span className="hidden sm:inline">CANDIDATI ORA — Scopri se puoi accedere al programma</span>
          </Button>
          <p className="text-xs text-muted-foreground">
            Solo 3 posti disponibili questo mese
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 flex flex-col items-center gap-1"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scopri</span>
          <ChevronDown className="w-5 h-5 text-secondary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default OffertaHero;
