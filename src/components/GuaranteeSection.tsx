import { motion } from "framer-motion";
import { Shield, CheckCircle, XCircle, Zap, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const GuaranteeSection = () => {
  const guaranteePoints = [
    "5 richieste qualificate al mese dai lead che generiamo",
    "Una riduzione misurabile del tempo speso in trattativa",
    "Lead con budget superiore alla tua media attuale",
  ];

  const riskReversals = [
    {
      wrong: "Contratti annuali vincolanti",
      right: "Contratto senza clausole vincolanti",
    },
    {
      wrong: "Risultati vaghi e non misurabili",
      right: "Risultati verificabili e non manipolabili",
    },
    {
      wrong: "Canone fisso anche senza risultati",
      right: "Nessun canone fisso — paghi solo % sulle vendite",
    },
    {
      wrong: "KPI nascosti o inesistenti",
      right: "KPI chiari definiti insieme a te prima di iniziare",
    },
    {
      wrong: "Penali per uscire dal contratto",
      right: "Esci quando vuoi, zero penali",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-navy overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Shield className="w-10 h-10 text-gold" />
            <span className="text-gold font-bold text-lg tracking-wider uppercase">
              La Nostra Garanzia
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Se Non Funziona,{" "}
            <span className="text-gold">Non Paghi.</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Niente scuse. Niente "dipende". Niente "ci vuole tempo".
            <br />
            <span className="text-white font-semibold">
              Paghi solo una percentuale sulle vendite che generiamo. Se non vendi, non ci devi nulla.
            </span>
          </p>
        </motion.div>

        {/* Risk reversal comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            Zero Rischi. Zero Trappole.
          </h3>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {riskReversals.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10"
              >
                <div className="flex items-start gap-3 mb-4 pb-4 border-b border-white/10">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-400 line-through text-sm">{item.wrong}</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <p className="text-white font-semibold text-sm">{item.right}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">Il rischio è tutto nostro</span>
          </div>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Perché offriamo questa garanzia?{" "}
            <span className="text-white font-semibold">
              Perché sappiamo che funziona.
            </span>
            <br />
            47 aziende edili non mentono.
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
              Richiedi la Valutazione Gratuita
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <p className="text-gray-500 text-sm mt-4">
            Solo 3 posti disponibili al mese • Nessun impegno
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
