import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import {
  Sun, Zap, TrendingUp, Users, ShieldCheck, Target, BarChart3,
  ArrowRight, Check, AlertTriangle, Home, Leaf, BadgeEuro,
  PhoneCall, ClipboardCheck, Megaphone, HandCoins, ChevronRight,
  MapPin, FileText, MessageSquare, BatteryCharging
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { siteConfig, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo";

const faqs = [
  {
    question: "Quanto costa il servizio di marketing per aziende fotovoltaico?",
    answer:
      "Marketing Edile lavora esclusivamente a percentuale sulle vendite generate. Nessun canone fisso, nessun anticipo, nessun abbonamento mensile. Paghi solo quando chiudi un contratto di installazione grazie ai lead che ti portiamo. Il rischio è interamente nostro: se non vendi, non ci devi nulla.",
  },
  {
    question: "Che tipo di lead generate per il fotovoltaico?",
    answer:
      "Generiamo lead pre-qualificati: proprietari di immobili con tetto idoneo, che hanno già espresso interesse concreto per l'installazione di pannelli solari. Ogni contatto viene filtrato in base a proprietà dell'immobile, tipo di copertura, consumo energetico medio e zona geografica. Non riceverai mai elenchi freddi comprati online.",
  },
  {
    question: "Funziona anche per aziende di fotovoltaico appena avviate?",
    answer:
      "Sì, a condizione che l'azienda abbia la capacità operativa di gestire le installazioni. Non serve un brand già affermato: il nostro sistema di marketing costruisce autorità e fiducia da zero, educando il potenziale cliente sugli incentivi e sui vantaggi economici del fotovoltaico prima ancora che ti contatti.",
  },
  {
    question: "In quanto tempo arrivano i primi risultati?",
    answer:
      "I primi lead qualificati arrivano generalmente entro 7-14 giorni dall'attivazione delle campagne. Il ciclo di vendita nel fotovoltaico è più lungo rispetto ad altri settori edili (30-60 giorni in media), quindi i primi contratti chiusi si vedono tipicamente entro 45-60 giorni. Il caso Green Energy Group ha generato +€300.000 nei primi 2 mesi.",
  },
  {
    question: "Lavorate su tutto il territorio italiano?",
    answer:
      "Sì, operiamo su tutta Italia con campagne geo-targettizzate. Analizziamo le zone con maggiore irradiazione solare, densità di proprietari di villette e disponibilità di incentivi regionali per massimizzare il ritorno delle campagne. Le aree del Centro-Sud e le isole spesso offrono le migliori opportunità per il fotovoltaico residenziale.",
  },
];

const problems = [
  {
    icon: AlertTriangle,
    title: "Lead freddi e non qualificati",
    description:
      "Compri liste di contatti o ricevi richieste da portali generalisti. Il 90% non ha un tetto di proprietà, non sa cosa siano le Comunità Energetiche e non ha budget. Il tuo commerciale perde ore a chiamare persone che non compreranno mai.",
  },
  {
    icon: Users,
    title: "Concorrenza aggressiva sul prezzo",
    description:
      "Decine di installatori nella tua zona fanno la guerra al ribasso. Senza un posizionamento chiaro, sei percepito come uno dei tanti. Il cliente sceglie chi costa meno, e tu erodi i margini fino a lavorare quasi gratis.",
  },
  {
    icon: FileText,
    title: "Clienti confusi sugli incentivi",
    description:
      "Superbonus ridimensionato, detrazioni fiscali al 50%, Comunità Energetiche Rinnovabili, Reddito Energetico: il cliente medio è sommerso da informazioni contrastanti. Non capisce cosa gli spetta, non si fida e rimanda la decisione all'infinito.",
  },
  {
    icon: BarChart3,
    title: "Ciclo di vendita troppo lungo",
    description:
      "Dalla prima richiesta alla firma del contratto passano mesi. Il cliente vuole più preventivi, ci pensa, aspetta. Senza un sistema di nurturing strutturato, lo perdi per strada. E il tuo fatturato resta ostaggio dell'incertezza.",
  },
];

const processSteps = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Analisi e Strategia",
    description:
      "Studiamo il tuo mercato locale, la concorrenza nella tua zona, il tipo di impianti che installi e il tuo cliente ideale. Definiamo il posizionamento che ti differenzia: non sei 'un installatore', sei l'esperto di risparmio energetico della tua area.",
  },
  {
    icon: Megaphone,
    number: "02",
    title: "Campagne Educative + Lead Generation",
    description:
      "Creiamo contenuti che educano il cliente sugli incentivi vigenti, sul risparmio reale in bolletta e sui tempi di rientro dell'investimento. Chi ti contatta ha già capito il valore del fotovoltaico e vuole procedere.",
  },
  {
    icon: Target,
    number: "03",
    title: "Pre-qualifica e Consegna Lead",
    description:
      "Ogni lead viene filtrato: proprietà dell'immobile, tipo di tetto, esposizione, consumo annuo, budget indicativo. Ti consegniamo solo contatti pronti per il sopralluogo. Niente perditempo, niente curiosi.",
  },
  {
    icon: HandCoins,
    number: "04",
    title: "Ottimizzazione e Scaling",
    description:
      "Monitoriamo ogni settimana: tasso di conversione, costo per lead, costo per contratto chiuso, fatturato generato. Ottimizziamo le campagne in tempo reale e scaliamo il budget sulle zone e i segmenti più profittevoli.",
  },
];

const stats = [
  { value: "+€300k", label: "Fatturato generato in 2 mesi", sublabel: "Green Energy Group" },
  { value: "47+", label: "Aziende edili in portfolio", sublabel: "In tutta Italia" },
  { value: "€0", label: "Costi fissi per te", sublabel: "Solo percentuale sulle vendite" },
  { value: "7-14gg", label: "Primi lead qualificati", sublabel: "Dall'attivazione campagne" },
];

const marketData = [
  {
    icon: TrendingUp,
    title: "Mercato in forte crescita",
    stat: "+27%",
    description:
      "Il mercato fotovoltaico residenziale italiano è cresciuto del 27% nel 2025. Le previsioni per il 2026 confermano il trend grazie alle nuove direttive europee sull'efficienza energetica e al caro bollette strutturale.",
  },
  {
    icon: BadgeEuro,
    title: "Incentivi ancora disponibili",
    stat: "50%",
    description:
      "La detrazione fiscale al 50% per impianti fotovoltaici è confermata per il 2026. A questo si aggiungono il contributo GSE per le Comunità Energetiche Rinnovabili e incentivi regionali specifici che possono coprire fino al 40% aggiuntivo.",
  },
  {
    icon: BatteryCharging,
    title: "Comunità Energetiche Rinnovabili",
    stat: "CER",
    description:
      "Le CER rappresentano la più grande opportunità del settore. Con incentivi da 100-120 €/MWh per 20 anni, il fotovoltaico diventa un investimento a rendimento garantito. Chi si posiziona ora come esperto CER domina il mercato locale.",
  },
  {
    icon: Leaf,
    title: "Costo energia in crescita",
    stat: "+35%",
    description:
      "Il costo dell'energia elettrica in Italia è aumentato del 35% negli ultimi 3 anni. Ogni aumento rende il fotovoltaico più attrattivo: il tempo di rientro dell'investimento si accorcia e la domanda cresce automaticamente.",
  },
];

const Fotovoltaico = () => {
  const navigate = useNavigate();
  const handleCTA = () => navigate("/#candidati");

  return (
    <>
      <SEOHead
        title="Marketing per Fotovoltaico"
        description="Lead qualificati per aziende di fotovoltaico. Marketing a percentuale: paghi solo sulle vendite. +€300k generati in 2 mesi per Green Energy Group."
        keywords={[
          "marketing fotovoltaico",
          "lead generation fotovoltaico",
          "clienti fotovoltaico",
          "vendere pannelli solari",
          "acquisizione clienti energia solare",
          "pubblicità fotovoltaico",
        ]}
        url={`${siteConfig.url}/settori/fotovoltaico`}
        jsonLd={[
          generateBreadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Settori", url: `${siteConfig.url}/settori` },
            { name: "Fotovoltaico", url: `${siteConfig.url}/settori/fotovoltaico` },
          ]),
          generateFAQSchema(faqs),
        ]}
      />
      <Navbar />
      <main className="overflow-hidden">
        {/* ═══════════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════════ */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[100px]" />
          </div>

          <div className="container-narrow relative z-10 text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium mb-6 uppercase tracking-wider">
                <Sun className="inline w-4 h-4 mr-2 -mt-0.5" />
                Settore Fotovoltaico & Energie Rinnovabili
              </span>

              <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
                Marketing per Aziende di{" "}
                <span className="text-secondary">Fotovoltaico</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
                Il mercato fotovoltaico italiano esplode nel 2026: incentivi statali, Comunità Energetiche
                e bollette alle stelle creano una domanda senza precedenti.{" "}
                <span className="text-foreground font-semibold">
                  Il problema non è la domanda. È intercettarla prima della concorrenza.
                </span>
              </p>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Marketing Edile porta clienti pre-qualificati alla tua azienda di fotovoltaico.
                Solo a percentuale sulle vendite chiuse. Se non vendi, non ci devi nulla.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-8 py-6"
                  onClick={handleCTA}
                >
                  Candidati ora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-card font-semibold text-lg px-8 py-6"
                  onClick={() => navigate("/casi-studio")}
                >
                  Vedi i risultati
                  <ChevronRight className="ml-1 w-5 h-5" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            OPPORTUNITÀ DI MERCATO
        ═══════════════════════════════════════════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
                  Opportunità di Mercato
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Perché il 2026 è l'anno giusto per investire nel{" "}
                  <span className="text-secondary">marketing fotovoltaico</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  L'Italia è il terzo mercato fotovoltaico europeo. La combinazione di incentivi governativi,
                  costo dell'energia in aumento e la nuova normativa sulle Comunità Energetiche Rinnovabili
                  crea un'opportunità storica per gli installatori che sanno posizionarsi. Chi investe ora in
                  marketing strutturato cattura la domanda che esplode. Chi aspetta, raccoglie gli scarti.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {marketData.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="bg-card rounded-2xl p-8 border border-border h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <span className="text-3xl font-black text-secondary">{item.stat}</span>
                        <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimatedSection delay={0.3}>
              <div className="mt-12 text-center">
                <p className="text-muted-foreground">
                  Vuoi approfondire le strategie di acquisizione clienti nel fotovoltaico?{" "}
                  <Link
                    to="/blog/acquisire-clienti-fotovoltaico-lead-generation-2026"
                    className="text-secondary hover:text-secondary/80 font-semibold underline underline-offset-4"
                  >
                    Leggi la nostra guida completa
                  </Link>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            PROBLEMI
        ═══════════════════════════════════════════════════════ */}
        <section className="section-padding">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
                  I problemi
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  4 problemi che le aziende di fotovoltaico{" "}
                  <span className="text-red-400">affrontano ogni giorno</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Il mercato è in crescita, ma la maggior parte degli installatori non riesce a sfruttare
                  l'opportunità. Non perché manchino i clienti, ma perché il loro sistema di acquisizione
                  è rotto. Ecco cosa vediamo in quasi tutte le aziende fotovoltaico che ci contattano.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {problems.map((problem, index) => (
                <StaggerItem key={index}>
                  <div className="bg-card rounded-2xl p-8 border border-border h-full">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-4">
                      <problem.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SOLUZIONE — L'APPROCCIO MARKETING EDILE
        ═══════════════════════════════════════════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
                  La Soluzione
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Come Marketing Edile porta clienti alle{" "}
                  <span className="text-secondary">aziende di fotovoltaico</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Non facciamo pubblicità generica. Abbiamo costruito un sistema specifico per il settore
                  fotovoltaico che educa il cliente, lo pre-qualifica e te lo consegna pronto per il sopralluogo.
                  Il risultato? Lead che convertono, non che fanno perdere tempo.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <AnimatedSection direction="left">
                <div className="bg-card rounded-2xl p-8 border border-border h-full">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Contenuti educativi sugli incentivi
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Il cliente del fotovoltaico ha bisogno di capire prima di comprare. Creiamo contenuti
                    che spiegano chiaramente detrazioni fiscali al 50%, Comunità Energetiche Rinnovabili,
                    Reddito Energetico e risparmio reale in bolletta. Quando il cliente ti contatta, ha già
                    superato le obiezioni principali e vuole solo sapere i dettagli dell'installazione.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Guide su detrazioni e incentivi aggiornati al 2026",
                      "Calcolatori di risparmio energetico personalizzati",
                      "Video educativi su CER e autoconsumo",
                      "Contenuti che posizionano la tua azienda come esperta",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="bg-card rounded-2xl p-8 border border-border h-full">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Pre-qualifica basata su dati reali
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Non tutti i contatti sono uguali. Il nostro sistema filtra ogni lead in base a criteri
                    specifici per il fotovoltaico, così il tuo commerciale parla solo con persone che possono
                    effettivamente installare un impianto e hanno il budget per farlo. Risultato: tasso di
                    conversione da sopralluogo a contratto fino al 40%.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Verifica proprietà dell'immobile",
                      "Tipo di tetto e orientamento",
                      "Consumo energetico annuo",
                      "Budget disponibile e interesse per finanziamento",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="left">
                <div className="bg-card rounded-2xl p-8 border border-border h-full">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Campagne geo-targettizzate
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Il fotovoltaico ha una componente geografica fortissima: irradiazione solare, incentivi
                    regionali, tipologia edilizia prevalente. Le nostre campagne sono calibrate zona per zona.
                    Concentriamo il budget dove il potenziale è più alto e dove la concorrenza è meno aggressiva,
                    massimizzando il ritorno su ogni euro investito in pubblicità.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Mappatura zone ad alta irradiazione solare",
                      "Analisi incentivi regionali e comunali",
                      "Targeting su proprietari di villette e bifamiliari",
                      "Esclusione zone con bassa propensione all'acquisto",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="bg-card rounded-2xl p-8 border border-border h-full">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Nurturing automatizzato
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Il ciclo di vendita nel fotovoltaico è lungo: 30-60 giorni in media. Il cliente ha bisogno
                    di tempo per decidere. Il nostro sistema di nurturing mantiene il contatto caldo con
                    sequenze email, messaggi WhatsApp e retargeting personalizzato. Quando è pronto a procedere,
                    chiama te, non il concorrente.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Sequenze email educative automatizzate",
                      "Follow-up WhatsApp personalizzati",
                      "Retargeting su chi ha visitato la landing page",
                      "Contenuti di social proof (recensioni e casi studio)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Case Study Highlight */}
            <AnimatedSection>
              <div className="bg-card rounded-2xl p-8 md:p-12 border border-secondary/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-secondary/5 rounded-full blur-[80px]" />
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
                    Caso Studio Reale
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                    Green Energy Group: +€300.000 in 2 mesi
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                    Green Energy Group, azienda di installazione fotovoltaica del Centro Italia, si affidava
                    a portali di lead sharing e passaparola. I lead erano freddi, i commerciali frustrati e
                    il fatturato stagnante. In 2 mesi con Marketing Edile: campagne educative sugli incentivi
                    2025, pre-qualifica su proprietà e tetto, nurturing automatizzato. Risultato: oltre
                    €300.000 di contratti chiusi, con un costo per acquisizione cliente inferiore del 60%
                    rispetto ai canali precedenti.
                  </p>
                  <div className="flex flex-wrap gap-6 mb-8">
                    <div>
                      <p className="text-3xl font-black text-secondary">+€300k</p>
                      <p className="text-sm text-muted-foreground">Fatturato in 2 mesi</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-secondary">-60%</p>
                      <p className="text-sm text-muted-foreground">Costo acquisizione cliente</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-secondary">40%</p>
                      <p className="text-sm text-muted-foreground">Conversione sopralluogo → contratto</p>
                    </div>
                  </div>
                  <Link
                    to="/casi-studio"
                    className="inline-flex items-center text-secondary hover:text-secondary/80 font-semibold"
                  >
                    Scopri tutti i casi studio
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            STATISTICHE
        ═══════════════════════════════════════════════════════ */}
        <section className="section-padding">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
                  I numeri parlano <span className="text-secondary">chiaro</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Risultati misurabili, non promesse vaghe. Ecco cosa ottengono le aziende di fotovoltaico
                  che lavorano con Marketing Edile.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <StaggerItem key={index}>
                  <div className="bg-card rounded-2xl p-6 border border-border text-center">
                    <p className="text-3xl md:text-4xl font-black text-secondary mb-2">{stat.value}</p>
                    <p className="text-sm font-semibold text-foreground mb-1">{stat.label}</p>
                    <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            PROCESSO — 4 STEP
        ═══════════════════════════════════════════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
                  Il Processo
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Come funziona: <span className="text-secondary">4 step</span> per riempire
                  la tua agenda di sopralluoghi
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Un sistema collaudato su oltre 47 aziende edili italiane, adattato alle specificità
                  del settore fotovoltaico. Tu pensi a installare impianti, noi pensiamo a portarti
                  i clienti giusti.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-card rounded-2xl p-8 border border-border flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span className="text-4xl font-black text-secondary/30">{step.number}</span>
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.5}>
              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-6">
                  Vuoi scoprire tutti i{" "}
                  <Link
                    to="/servizi"
                    className="text-secondary hover:text-secondary/80 font-semibold underline underline-offset-4"
                  >
                    servizi inclusi nel sistema Marketing Edile
                  </Link>
                  ?
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            PERCHÉ MARKETING EDILE
        ═══════════════════════════════════════════════════════ */}
        <section className="section-padding">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Perché scegliere Marketing Edile per il{" "}
                  <span className="text-secondary">fotovoltaico</span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: HandCoins,
                  title: "Solo a percentuale",
                  description:
                    "Nessun canone fisso, nessun anticipo, nessun vincolo. Paghi esclusivamente una percentuale sulle vendite che chiudi grazie ai nostri lead. Il rischio è tutto nostro: se non generiamo risultati, non guadagniamo nulla. Questo ci allinea completamente ai tuoi obiettivi di fatturato.",
                },
                {
                  icon: Sun,
                  title: "Specialisti del settore edile",
                  description:
                    "Non siamo un'agenzia generalista che oggi fa marketing per ristoranti e domani per il fotovoltaico. Lavoriamo SOLO con aziende del settore edile da oltre 6 anni. Conosciamo le obiezioni dei clienti, i margini del settore, i tempi di decisione e le leve che funzionano davvero per vendere impianti fotovoltaici.",
                },
                {
                  icon: BarChart3,
                  title: "Risultati misurabili",
                  description:
                    "Report settimanali con numeri chiari: lead generati, costo per lead, sopralluoghi fissati, contratti chiusi, fatturato attribuibile. Nessuna metrica vanity come like e impression. Solo i numeri che contano per il tuo conto in banca.",
                },
              ].map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-card rounded-2xl p-8 border border-border h-full text-center">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            FAQ
        ═══════════════════════════════════════════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
                  FAQ
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Domande frequenti sul{" "}
                  <span className="text-secondary">marketing fotovoltaico</span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <AnimatedSection key={index} delay={index * 0.08}>
                  <details className="group bg-card rounded-2xl border border-border overflow-hidden">
                    <summary className="flex items-center justify-between cursor-pointer p-6 text-left">
                      <h3 className="text-lg font-bold text-foreground pr-4">{faq.question}</h3>
                      <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            CTA FINALE
        ═══════════════════════════════════════════════════════ */}
        <section className="section-padding">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="bg-card rounded-2xl p-8 md:p-16 border border-secondary/30 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-secondary/10 rounded-full blur-[100px]" />
                <div className="relative z-10">
                  <Sun className="w-12 h-12 text-secondary mx-auto mb-6" />
                  <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                    Pronto a riempire la tua agenda di{" "}
                    <span className="text-secondary">installazioni fotovoltaiche</span>?
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
                    Il mercato fotovoltaico italiano cresce ogni mese. I tuoi concorrenti stanno investendo
                    in marketing strutturato proprio ora. Ogni giorno che aspetti, i lead migliori della
                    tua zona vanno a qualcun altro.
                  </p>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                    Marketing Edile lavora solo a percentuale sulle vendite chiuse. Nessun costo fisso,
                    nessun rischio per te. Se non generiamo contratti, non ci devi nulla.{" "}
                    <span className="text-foreground font-semibold">
                      Accettiamo solo 3 nuove aziende fotovoltaico al mese
                    </span>{" "}
                    per garantire risultati a ogni partner.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Button
                      size="lg"
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-10 py-6"
                      onClick={handleCTA}
                    >
                      Candidati ora — è gratuito
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-border text-foreground hover:bg-navy-light font-semibold text-lg px-8 py-6"
                      onClick={() => navigate("/contattaci")}
                    >
                      <PhoneCall className="mr-2 w-5 h-5" />
                      Contattaci
                    </Button>
                  </div>

                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Check className="w-4 h-4 text-secondary" /> Zero costi fissi
                    </span>
                    <span className="flex items-center gap-1">
                      <Check className="w-4 h-4 text-secondary" /> Solo a percentuale
                    </span>
                    <span className="flex items-center gap-1">
                      <Check className="w-4 h-4 text-secondary" /> Primi lead in 7-14 giorni
                    </span>
                    <span className="flex items-center gap-1">
                      <Check className="w-4 h-4 text-secondary" /> 47+ aziende edili servite
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Internal Links */}
            <AnimatedSection delay={0.2}>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  { label: "I nostri servizi", to: "/servizi" },
                  { label: "Casi studio", to: "/casi-studio" },
                  { label: "Contattaci", to: "/contattaci" },
                  { label: "Guida Fotovoltaico 2026", to: "/blog/acquisire-clienti-fotovoltaico-lead-generation-2026" },
                ].map((link, i) => (
                  <Link
                    key={i}
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-secondary transition-colors underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Fotovoltaico;
