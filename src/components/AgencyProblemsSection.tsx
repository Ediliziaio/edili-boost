import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const AgencyProblemsSection = () => {
  const falsePromises = [
    {
      promise: '"Avrai un consulente dedicato."',
      leadIn: "Poi inizi a lavorare e scopri che",
      reality: "il tuo 'consulente' non ha mai venduto un infisso, non sa cos'è una trattativa edile, non conosce i tuoi margini. È un ragazzo di 25 anni con un laptop.",
    },
    {
      promise: '"Costruiremo una strategia su misura."',
      leadIn: "Poi scopri che",
      reality: "ti hanno dato lo stesso sito che hanno dato ai tuoi 50 concorrenti. Logo diverso, colori diversi. Il resto? Copia-incolla.",
    },
    {
      promise: '"Ti porteremo X clienti al mese."',
      leadIn: "",
      reality: "Poi i clienti non arrivano. E la risposta è sempre la stessa: 'Serve tempo.' 'Il problema è il prodotto.' 'Il mercato è cambiato.' Intanto, continui a pagare.",
    },
  ];

  return (
    <section id="problema" className="section-padding bg-card relative overflow-hidden">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 uppercase font-bold tracking-wide">
            PER ANNI LE AGENZIE TI HANNO DETTO:
          </p>
        </AnimatedSection>

        <StaggerContainer className="space-y-6 mb-16" staggerDelay={0.15}>
          {falsePromises.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ x: 10 }}
                className="p-6 md:p-8 bg-background border border-border rounded-xl"
              >
                <p className="text-xl md:text-2xl font-semibold text-foreground mb-4 line-through decoration-destructive/50 decoration-2">
                  {item.promise}
                </p>
                <p className="text-muted-foreground text-lg">
                  {item.leadIn ? (
                    <>{item.leadIn}{" "}<span className="text-foreground">{item.reality}</span></>
                  ) : (
                    <span className="text-foreground">{item.reality}</span>
                  )}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default AgencyProblemsSection;
