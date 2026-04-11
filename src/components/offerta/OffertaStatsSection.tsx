import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";
import heroWindowsImage from "@/assets/hero-windows.jpg";

interface StatCardProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

const StatCard = ({ end, suffix = "", prefix = "", label, decimals = 0 }: StatCardProps) => {
  const { ref, formattedValue } = useCountUp({ end, suffix, prefix, decimals });

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05, borderColor: "hsl(var(--gold))" }}
      className="p-4 md:p-6 bg-background/80 backdrop-blur-sm border border-border rounded-2xl text-center transition-colors duration-300"
    >
      <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gold mb-1">
        {formattedValue}
      </div>
      <p className="text-muted-foreground text-base">{label}</p>
    </motion.div>
  );
};

const OffertaStatsSection = () => {
  const stats = [
    { end: 8, label: "Anni nel settore edile" },
    { end: 60, prefix: "€", suffix: "M+", label: "Fatturato generato per i partner" },
    { end: 2, prefix: "+€", suffix: "MLN", label: "Venduto dalla nostra azienda" },
    { end: 47, suffix: "+", label: "Aziende edili seguite in Italia" },
    { end: 40, prefix: "+", suffix: "%", label: "Fatturato medio rispetto a prima" },
    { end: 15, prefix: "-", suffix: "%", label: "Tempo perso con clienti non in target" },
  ];

  return (
    <section className="section-padding-sm relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroWindowsImage} alt="Villa moderna con infissi" loading="lazy" decoding="async" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-light/90" />
      </div>

      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="text-center mb-6 md:mb-10">
            <h2 className="heading-section text-foreground mb-2">
              I <span className="text-gold">NUMERI</span> PARLANO
            </h2>
            <p className="text-muted-foreground text-lg">Dati aggregati 2018–2025</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffertaStatsSection;
