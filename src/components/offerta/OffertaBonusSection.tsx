import { useState, useEffect } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { meseAnnoCorrente, meseAnnoCorrenteLower } from "@/lib/dynamic-date";

const checkpoints = [
  "Posizionamento e canali di acquisizione più efficaci per il tuo settore",
  "Tasso di conversione reale dei preventivi — e dove perdi commesse",
  "Piano d'azione 30 giorni — portalo via gratis",
];

const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};

const OffertaBonusSection = () => {
  const countdown = useCountdown(new Date("2026-03-31T23:59:59"));

  const scrollToCandidati = () => {
    document.getElementById("candidati")?.scrollIntoView({ behavior: "smooth" });
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="section-padding-sm bg-navy-light relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[200px]" />
      </div>

      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs sm:text-sm font-bold mb-4 uppercase tracking-wider">
              Offerta Speciale {meseAnnoCorrente}
            </span>
            <h2 className="heading-section text-foreground mb-3">
              In Regalo L'<span className="text-gold">Analisi Strategica</span> della Tua Azienda
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex justify-center gap-3 sm:gap-4 mb-6">
            {[
              { val: countdown.days, label: "Giorni" },
              { val: countdown.hours, label: "Ore" },
              { val: countdown.minutes, label: "Min" },
              { val: countdown.seconds, label: "Sec" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-border rounded-xl p-2 sm:p-3 text-center min-w-[55px] sm:min-w-[70px]" style={{ willChange: 'contents' }}
              >
                <div className="text-lg sm:text-xl md:text-2xl font-black text-gold">{pad(item.val)}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="max-w-lg mx-auto">
            <div className="space-y-2 mb-5">
              {checkpoints.map((cp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  <p className="text-foreground text-lg">{cp}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 text-center mb-5">
              <p className="text-muted-foreground text-base mb-1">Valore: <span className="line-through">€500</span></p>
              <p className="text-lg md:text-xl font-black text-gold">Per {meseAnnoCorrenteLower}: GRATUITA.</p>
            </div>

            <div className="text-center">
              <Button variant="gold" size="xl" onClick={scrollToCandidati} className="w-full sm:w-auto">
                <span className="sm:hidden">CANDIDATI ORA</span>
                <span className="hidden sm:inline">CANDIDATI ORA — Richiedi l'Analisi Gratuita</span>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OffertaBonusSection;
