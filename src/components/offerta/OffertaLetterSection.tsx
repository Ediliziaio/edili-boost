import { AnimatedSection } from "@/components/AnimatedSection";
import { PhoneOff, TrendingDown, TrendingUp } from "lucide-react";
import { meseCorrente, meseProssimo, meseAnnoCorrenteLower } from "@/lib/dynamic-date";

const categories = [
  {
    number: "01",
    title: "Quella in crisi.",
    subtitle: "Il telefono non squilla.",
    icon: PhoneOff,
    borderClass: "border-destructive/40",
    numberClass: "text-destructive",
    lines: [
      "Il telefono non squilla. La cassa non regge i costi fissi. I cantieri si svuotano uno dopo l'altro.",
      "Lavori di più ma guadagni di meno. Tagli i prezzi per prendere qualsiasi lavoro — e ogni mese è una roulette.",
    ],
  },
  {
    number: "02",
    title: "Quella apparentemente buona.",
    subtitle: "L'agenda sembra piena.",
    icon: TrendingDown,
    borderClass: "border-yellow-500/40",
    numberClass: "text-yellow-500",
    lines: [
      "L'agenda sembra piena. Arrivano preventivi. Ma quei contatti spariscono — probabilmente stanno trattando col concorrente.",
      "Quei preventivi preparati con cura? Persi sul prezzo. \"Ci pensiamo\" e non li senti più.",
    ],
  },
  {
    number: "03",
    title: "Quella che cresce.",
    subtitle: "In modo sistematico.",
    icon: TrendingUp,
    borderClass: "border-gold/60",
    numberClass: "text-gold",
    lines: [
      `Chiudono ${meseCorrente} sapendo già che ${meseProssimo} è pieno. Guadagnano di più da ogni preventivo — stesse ore, migliaia di euro in più, senza sconti.`,
      "Hanno un sistema che porta clienti qualificati ogni settimana. Quando guardano i numeri: \"Finalmente sto costruendo qualcosa che dura.\"",
    ],
  },
];

const OffertaLetterSection = () => {
  return (
    <section className="section-padding-sm bg-background relative overflow-hidden">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="mb-8">
            <p className="text-gold font-medium mb-3 tracking-wider uppercase text-sm">Una lettera diretta</p>
            <h2 className="heading-section text-foreground mb-4">Caro imprenditore edile,</h2>
            <p className="text-muted-foreground body-large leading-relaxed">
              A {meseAnnoCorrenteLower} ci sono <strong className="text-foreground">3 grandi categorie</strong> di aziende nel settore edile.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <AnimatedSection key={cat.number} delay={0.1 + i * 0.15}>
                <div className={`border-l-4 ${cat.borderClass} bg-card rounded-xl p-5 h-full flex flex-col`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-2xl font-bold ${cat.numberClass} font-outfit`}>{cat.number}</span>
                    <Icon className={`w-5 h-5 ${cat.numberClass}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 italic">{cat.subtitle}</p>
                  <div className="space-y-2 text-muted-foreground text-[15px] leading-relaxed">
                    {cat.lines.map((line, j) => (
                      <p key={j}>{line}</p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.6}>
          <div className="border-l-4 border-gold pl-5 py-3">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              La differenza? Non è la qualità dei lavori, la zona o il budget pubblicitario.{" "}
              <strong className="text-foreground">Spesso chi cresce di più spende meno</strong> — perché usa un sistema che ottimizza ogni euro.
            </p>
            <p className="text-lg text-muted-foreground mt-2">Devi sapere che ci sono…</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OffertaLetterSection;
