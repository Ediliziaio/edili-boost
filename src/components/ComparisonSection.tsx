import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const ComparisonSection = () => {
  const comparisons = [
    {
      category: "Acquisizione Clienti",
      without: "Passaparola casuale, dipendi da altri",
      with: "Sistema automatico che genera lead qualificati ogni mese",
    },
    {
      category: "Tipo di Clienti",
      without: "Chi capita. Spesso cacciatori di sconto",
      with: "Pre-qualificati, con budget adeguato, pronti a comprare",
    },
    {
      category: "Preventivi",
      without: "20+ preventivi al mese, chiudi il 10%",
      with: "5-8 mirati, chiudi il 40-60%",
    },
    {
      category: "Tempo in Trattative",
      without: "15-20 ore/settimana a rincorrere",
      with: "5 ore/settimana. I clienti arrivano già convinti",
    },
    {
      category: "Margini",
      without: "Compressi, sempre in negoziazione",
      with: "+30-40% perché il cliente percepisce il valore",
    },
    {
      category: "Stress",
      without: "Alto. Non sai da dove arriverà il prossimo lavoro",
      with: "Controllato. Hai un flusso costante e prevedibile",
    },
    {
      category: "Posizionamento",
      without: "Uno dei tanti, competi sul prezzo",
      with: "Specialista riconosciuto. Competi sul valore",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-bold text-sm tracking-wider uppercase mb-4 block">
            La Differenza È Nei Numeri
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Con vs Senza{" "}
            <span className="text-gold">Marketing Edile®</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ecco cosa cambia quando smetti di improvvisare e inizi a usare un sistema.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="hidden md:block" />
            <div className="col-span-3 md:col-span-1 grid grid-cols-2 gap-4 md:contents">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center"
              >
                <X className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <h3 className="font-bold text-red-600 text-lg">SENZA</h3>
                <p className="text-sm text-muted-foreground">Come lavori oggi</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center"
              >
                <Check className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                <h3 className="font-bold text-emerald-600 text-lg">CON</h3>
                <p className="text-sm text-muted-foreground">Come potresti lavorare</p>
              </motion.div>
            </div>
          </div>

          {/* Table Rows */}
          <div className="space-y-3">
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 bg-card rounded-xl border border-border/50 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Category */}
                <div className="bg-muted/50 p-4 flex items-center">
                  <span className="font-bold text-foreground text-sm md:text-base">
                    {item.category}
                  </span>
                </div>

                {/* Without */}
                <div className="px-4 py-3 md:p-4 flex items-center gap-3 border-l-4 border-red-500/50 bg-red-500/10">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 hidden md:block" />
                  <span className="text-muted-foreground text-sm md:text-base">{item.without}</span>
                </div>

                {/* With */}
                <div className="px-4 py-3 md:p-4 flex items-center gap-3 border-l-4 border-emerald-500 bg-emerald-500/10">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 hidden md:block" />
                  <span className="text-foreground font-medium text-sm md:text-base">{item.with}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gold/10 border border-gold/30 rounded-2xl p-8 md:p-10">
            <p className="text-xl md:text-2xl text-foreground font-bold mb-4">
              Quanto ti sta costando continuare così?
            </p>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Ogni mese senza un sistema è un mese di clienti persi, margini compressi e stress inutile.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="gold" 
                size="xl" 
                className="group"
                onClick={() => {
                  const element = document.getElementById("candidati");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Scopri Come Cambiare — Candidati Ora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
