import { Handshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";

const points = [
  "0€ di canone fisso",
  "% solo sulle vendite generate",
  "I nostri interessi = i tuoi interessi",
];

const PerformanceBanner = () => {
  const navigate = useNavigate();
  const handleCTA = () => navigate("/#candidati");

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-secondary/15 via-secondary/5 to-background border border-secondary/30 rounded-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Handshake className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-foreground">
                    Noi guadagniamo solo se{" "}
                    <span className="text-secondary">TU</span> guadagni
                  </h3>
                </div>
                <ul className="space-y-3 mt-6">
                  {points.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-secondary/20 border border-secondary/30 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-secondary text-sm font-bold">✓</span>
                      </div>
                      <span className="text-foreground font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4 text-sm">
                  L'unico investimento richiesto è il budget pubblicitario, pagato direttamente alle piattaforme.
                </p>
              </div>

              <div className="shrink-0">
                <Button variant="gold" size="xl" className="glow-gold" onClick={handleCTA}>
                  Scopri come funziona
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PerformanceBanner;
