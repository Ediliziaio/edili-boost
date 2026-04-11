import { AnimatedSection } from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    question: "Come funziona esattamente il modello a percentuale?",
    answer: "Definiamo insieme un sistema di tracking preciso — numero unico, form tracciato, CRM integrato. La percentuale si applica solo sulle commesse chiuse che provengono direttamente dai lead che abbiamo generato. Trasparenza totale: ogni settimana vedi i numeri."
  },
  {
    question: "Quanto costa lavorare con voi?",
    answer: "Zero canone fisso. Paghi solo una % sulle vendite che generiamo. Il budget pubblicitario è tuo — è un investimento che costruisce il patrimonio della tua azienda, non il nostro. Ti diciamo prima esattamente quanto serve per il tuo mercato e il tuo obiettivo."
  },
  {
    question: "Come calcolate le vendite generate da voi?",
    answer: "Con un sistema di attribuzione chiaro e verificabile: numero dedicato, landing page tracciata, CRM con sorgente. Ogni lead ha una fonte tracciata. Niente stime, niente discussioni. Solo dati."
  },
  {
    question: "Quando pago la percentuale?",
    answer: "Quando la commessa è firmata e confermata — non quando ricevi il preventivo, non quando il cliente esprime interesse. Solo quando incassi (o è contrattualmente definito che incasserai)."
  },
  {
    question: "Perché nessun altro lavora così?",
    answer: "Perché la maggior parte delle agenzie non è abbastanza sicura dei propri risultati per rischiare. Noi sì. Lavoriamo a percentuale perché sappiamo che funziona — lo vediamo sulla nostra azienda prima che sui clienti."
  },
  {
    question: "Chi paga la pubblicità?",
    answer: "Tu. Perché quella pubblicità costruisce la TUA visibilità e la TUA reputazione — non la nostra. Noi gestiamo tutto. Tu non devi sapere nulla di Meta Ads o Google Ads. Decidi solo quanto investire in base ai tuoi obiettivi."
  },
  {
    question: "Quanto tempo ci vuole per vedere i primi risultati?",
    answer: "I primi lead qualificati arrivano tipicamente entro 3-4 settimane dall'avvio. Risultati misurabili sul fatturato entro 60-90 giorni. Se entro 60 giorni non vedi almeno 5 richieste qualificate, non ci devi nulla."
  },
  {
    question: "Lavorate solo con aziende del settore edile?",
    answer: "Sì. Solo edilizia, serramenti, ristrutturazioni, pavimentazioni, infissi, coperture. Non lavoriamo con altri settori. Questa specializzazione è il motivo per cui i nostri risultati sono superiori a quelli di qualsiasi agenzia generalista."
  },
  {
    question: "Cosa vi differenzia dalle altre agenzie?",
    answer: "Abbiamo un'azienda di serramenti e ristrutturazioni attiva. Non siamo consulenti. Ogni strategia che ti proponiamo è stata testata sulla nostra pelle, con i nostri soldi, sul nostro mercato. E lavoriamo a percentuale: guadagniamo solo se guadagni tu."
  },
  {
    question: "Devo già avere un sito web per lavorare con voi?",
    answer: "No. Se non ce l'hai, lo costruiamo noi — ottimizzato per la conversione, non per fare bella figura. Se ce l'hai già, lo analizziamo e vediamo se serve aggiornarlo."
  },
  {
    question: "Come funziona il processo di candidatura?",
    answer: "Compili il modulo (5 minuti). Entro 48 ore ti diciamo se la tua azienda ha i requisiti. Se sì, fissiamo una call conoscitiva per capire obiettivi, mercato e margini. Se no, ti spieghiamo perché — e ti diciamo cosa fare prima di tornare."
  },
  {
    question: "Posso uscire in qualsiasi momento?",
    answer: "Sì. Nessun contratto a lungo termine con penali nascoste. Se non sei soddisfatto, esci. Preferiamo lavorare con chi vuole stare, non con chi è costretto."
  },
  {
    question: "Gestite anche i social media?",
    answer: "Sì, ma con un approccio completamente diverso dalle agenzie tradizionali. Non facciamo post per fare numeri. Ogni contenuto è pensato per generare richieste di preventivo e rafforzare il tuo posizionamento come specialista."
  }
];

// Generate JSON-LD schema for FAQ
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const FAQSection = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <section id="faq" className="section-padding bg-muted/30 relative overflow-hidden">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-gold font-medium mb-3 tracking-wider uppercase text-sm">
                Domande Frequenti
              </p>
              <h2 className="heading-section text-foreground mb-4">
                Hai dubbi? Ecco le risposte
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Le domande che ci fanno più spesso i potenziali clienti prima di iniziare a lavorare con noi.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-gold/50 transition-colors"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:text-gold hover:no-underline py-5 text-base md:text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
