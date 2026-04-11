import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Hammer,
  TrendingUp,
  Users,
  Target,
  Calendar,
  DollarSign,
  BarChart3,
  ArrowRight,
  Check,
  Search,
  Camera,
  MapPin,
  CalendarCheck,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Building2,
  ClipboardList,
  Handshake,
  Megaphone,
  Shield,
  Star,
  Clock,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { siteConfig, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo";
import { useState } from "react";

/* ───────────────────────── DATA ───────────────────────── */

const problems = [
  {
    icon: Users,
    title: "Clienti che confrontano 5+ preventivi",
    description:
      "Il proprietario di casa medio chiede almeno 5 preventivi prima di decidere. Risultato? Ore sprecate a fare sopralluoghi e preparare offerte che finiscono nel nulla. Il tuo tempo vale, ma lo stai regalando a chi cerca solo il prezzo piu basso.",
  },
  {
    icon: DollarSign,
    title: "Margini sempre piu bassi",
    description:
      "La guerra dei prezzi ti costringe a tagliare i margini per essere competitivo. Materiali che aumentano, manodopera specializzata introvabile, e clienti che vogliono pagare come 10 anni fa. Ogni cantiere diventa una scommessa sulla redditivita.",
  },
  {
    icon: Calendar,
    title: "Stagionalita che uccide la pianificazione",
    description:
      "Da aprile a ottobre non riesci a stare dietro alle richieste. Da novembre a marzo il telefono smette di squillare. Questa montagna russa rende impossibile pianificare assunzioni, investimenti e crescita strutturale dell'azienda.",
  },
  {
    icon: Megaphone,
    title: "Il passaparola non basta piu",
    description:
      "Per anni il passaparola ha funzionato. Ma oggi i tuoi clienti soddisfatti cercano su Google prima di raccomandare qualcuno. Se non sei visibile online, perdi commesse anche quando qualcuno ti ha consigliato. Il mondo e cambiato, il tuo marketing no.",
  },
];

const solutions = [
  {
    icon: Search,
    title: "Intercettiamo chi sta pianificando una ristrutturazione",
    description:
      "Non aspettiamo che il cliente arrivi: lo troviamo nel momento esatto in cui sta cercando un'impresa. Campagne mirate su Google, Facebook e Instagram raggiungono proprietari di casa che hanno gia deciso di ristrutturare e stanno scegliendo a chi affidarsi. Questo significa che ogni contatto che ricevi ha gia il budget e l'intenzione di procedere.",
    details: [
      "Targeting proprietari immobiliari nella tua zona",
      "Campagne su keyword ad alta intenzione d'acquisto",
      "Retargeting su chi ha visitato siti di ristrutturazione",
      "Segmentazione per tipo di intervento e budget",
    ],
  },
  {
    icon: Camera,
    title: "Strategia contenuti prima/dopo che converte",
    description:
      "Il prima/dopo e l'arma piu potente per un'impresa di ristrutturazione. Ma non basta postare foto: serve una strategia che trasformi ogni cantiere completato in una macchina per generare nuovi clienti. Creiamo contenuti video e fotografici professionali che mostrano la trasformazione e fanno dire al cliente 'lo voglio anch'io'.",
    details: [
      "Video trasformazione cantiere professionali",
      "Foto prima/dopo ottimizzate per social",
      "Testimonianze video dei clienti soddisfatti",
      "Contenuti che raccontano il processo, non solo il risultato",
    ],
  },
  {
    icon: MapPin,
    title: "Dominazione della tua area locale",
    description:
      "Quando qualcuno nella tua citta cerca 'impresa ristrutturazione' su Google, devi essere il primo risultato. Non il terzo, non il quinto: il primo. Costruiamo una presenza locale imbattibile attraverso Google Business Profile ottimizzato, recensioni strategiche e SEO locale che ti rende la scelta ovvia nella tua zona.",
    details: [
      "Google Business Profile ottimizzato al 100%",
      "Strategia recensioni per superare i concorrenti",
      "SEO locale per le keyword piu redditizie",
      "Presenza costante nelle mappe di Google",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Appuntamenti pre-qualificati, non semplici contatti",
    description:
      "Non ti mandiamo nomi e numeri di telefono. Ti mandiamo persone che hanno gia descritto il lavoro da fare, hanno confermato il budget e sono pronte a fissare un sopralluogo. Il nostro sistema di qualificazione filtra chi non e serio, cosi tu investi il tuo tempo solo con chi vuole davvero ristrutturare.",
    details: [
      "Questionario di pre-qualificazione automatico",
      "Verifica budget e tempistiche prima del contatto",
      "Appuntamento fissato direttamente in agenda",
      "Follow-up automatizzato per chi non e ancora pronto",
    ],
  },
];

const stats = [
  {
    value: "+€500k",
    label: "Fatturato generato per Renova Solution",
    description: "In 12 mesi di collaborazione",
  },
  {
    value: "+40%",
    label: "Aumento fatturato medio",
    description: "Dei nostri clienti nel settore ristrutturazioni",
  },
  {
    value: "15-20",
    label: "Lead qualificati al mese",
    description: "Media per impresa di ristrutturazione",
  },
  {
    value: "3:1",
    label: "Rapporto preventivi/chiusure",
    description: "Contro la media di settore di 8:1",
  },
];

const processSteps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Analisi del tuo mercato locale",
    description:
      "Studiamo la tua zona, i tuoi concorrenti, i tuoi punti di forza e il tipo di ristrutturazioni piu richieste. Mappiamo le opportunita che nessuno sta sfruttando e costruiamo un piano d'azione su misura. Non strategie generiche: un piano pensato per la tua impresa, nella tua citta.",
  },
  {
    step: "02",
    icon: Megaphone,
    title: "Lancio campagne e contenuti",
    description:
      "Attiviamo campagne pubblicitarie mirate e iniziamo a produrre contenuti che posizionano la tua impresa come il riferimento locale per le ristrutturazioni. Ogni euro investito e tracciato e ottimizzato per portare appuntamenti, non vanity metrics.",
  },
  {
    step: "03",
    icon: Handshake,
    title: "Gestione lead e appuntamenti",
    description:
      "I contatti che arrivano vengono qualificati automaticamente dal nostro sistema. Tu ricevi solo appuntamenti con persone serie, con budget confermato e lavoro definito. Il tuo unico compito: andare al sopralluogo e chiudere il preventivo.",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Ottimizzazione e scala",
    description:
      "Ogni settimana analizziamo i risultati e ottimizziamo le campagne. Quando il sistema funziona, lo scaliamo: piu budget, piu zone, piu servizi. La crescita della tua impresa diventa prevedibile e strutturata, non lasciata al caso.",
  },
];

const faqs = [
  {
    question: "Quanto tempo ci vuole per vedere i primi risultati nel settore ristrutturazioni?",
    answer:
      "Nelle prime 2-4 settimane attiviamo le campagne e iniziamo a generare i primi contatti. Entro 60-90 giorni il sistema e a pieno regime con un flusso costante di appuntamenti qualificati. Il settore ristrutturazioni ha cicli di vendita piu lunghi rispetto ad altri settori edili (il cliente medio impiega 2-6 settimane per decidere dopo il primo contatto), quindi i risultati pieni si vedono tipicamente dal terzo mese. Tuttavia, i primi sopralluoghi li fai gia dalla seconda settimana.",
  },
  {
    question: "Come fate a generare lead specifici per ristrutturazioni e non contatti generici?",
    answer:
      "Utilizziamo un sistema di targeting multi-livello. Prima di tutto, le campagne sono costruite su keyword e interessi specifici per chi sta pianificando una ristrutturazione (non generici 'lavori edili'). Poi, ogni contatto passa attraverso un questionario che raccoglie tipo di intervento, budget previsto, tempistiche e indirizzo dell'immobile. Solo chi supera tutti i criteri diventa un appuntamento nel tuo calendario. Questo sistema filtra circa il 70% dei contatti non qualificati prima che arrivino a te.",
  },
  {
    question: "Lavorate solo a percentuale anche per le ristrutturazioni?",
    answer:
      "Si, il nostro modello e sempre a percentuale sulle vendite chiuse grazie ai lead che generiamo. Questo significa che il nostro interesse e identico al tuo: chiudere commesse importanti. Se non generiamo risultati, non guadagniamo. E il motivo per cui selezioniamo con cura le imprese con cui collaborare: lavoriamo solo con chi ha la capacita di gestire i lead e chiudere i preventivi.",
  },
  {
    question: "Come gestite la stagionalita tipica delle ristrutturazioni?",
    answer:
      "La stagionalita e uno dei problemi principali che risolviamo. Nei mesi 'caldi' (primavera-estate) ottimizziamo le campagne per massimizzare il volume di lead. Nei mesi invernali, cambiamo strategia: puntiamo su ristrutturazioni interne (bagni, cucine, impianti) che non dipendono dal meteo, e lavoriamo sulla programmazione per la primavera successiva. Inoltre, nei periodi di bassa stagione intensifichiamo i contenuti e il posizionamento SEO, cosi quando la domanda riparte sei gia in prima posizione.",
  },
  {
    question: "Che tipo di ristrutturazioni funzionano meglio con il vostro sistema?",
    answer:
      "Il nostro sistema funziona per qualsiasi tipo di ristrutturazione, ma i risultati migliori li otteniamo con interventi di valore medio-alto: ristrutturazioni complete di appartamenti (€30k-€150k), rifacimento bagni e cucine premium, ristrutturazioni con efficientamento energetico (che beneficiano dei bonus fiscali), e ristrutturazioni di ville e case indipendenti. Il motivo e semplice: il costo per lead e simile indipendentemente dal valore del lavoro, quindi il ritorno sull'investimento e proporzionalmente piu alto su commesse importanti.",
  },
];

/* ───────────────────────── COMPONENT ───────────────────────── */

const Ristrutturazioni = () => {
  const navigate = useNavigate();
  const handleCTA = () => navigate("/#candidati");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Marketing per Ristrutturazioni"
        description="Lead qualificati per imprese di ristrutturazione. Marketing Edile genera appuntamenti con clienti pronti a ristrutturare. Solo a percentuale."
        keywords={[
          "marketing ristrutturazioni",
          "lead generation ristrutturazione",
          "clienti per imprese ristrutturazione",
          "pubblicita ristrutturazioni casa",
          "marketing impresa edile",
        ]}
        url={`${siteConfig.url}/settori/ristrutturazioni`}
        jsonLd={[
          generateBreadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Settori", url: `${siteConfig.url}/settori` },
            { name: "Ristrutturazioni", url: `${siteConfig.url}/settori/ristrutturazioni` },
          ]),
          generateFAQSchema(faqs),
        ]}
      />
      <Navbar />

      <main className="overflow-hidden">
        {/* ═══════════════════ HERO ═══════════════════ */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px]" />
          </div>

          <div className="container-narrow relative z-10">
            <AnimatedSection>
              <div className="text-center max-w-4xl mx-auto">
                <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm font-medium mb-6 uppercase tracking-wider">
                  Settore Ristrutturazioni
                </span>

                <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                  Marketing per Imprese di{" "}
                  <span className="text-gold">Ristrutturazione</span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  Troppi preventivi non chiusi. Dipendenza da subappalti e passaparola.
                  Concorrenza locale che gioca solo sul prezzo. Il problema non e la qualita
                  del tuo lavoro — e che i clienti giusti non ti trovano.
                </p>

                <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                  <strong className="text-foreground">Marketing Edile</strong> porta alla tua
                  impresa di ristrutturazione clienti qualificati, pronti a firmare. Lavoriamo{" "}
                  <span className="text-secondary font-semibold">solo a percentuale sulle vendite</span>{" "}
                  — se non chiudi commesse, non ci devi nulla.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={handleCTA}
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 rounded-xl font-bold"
                  >
                    Candidati ora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => navigate("/casi-studio")}
                    className="text-lg px-8 py-6 rounded-xl border-gold/30 text-gold hover:bg-gold/10"
                  >
                    Vedi i risultati
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════ PROBLEMS ═══════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-4 uppercase tracking-wider">
                  I problemi che conosci
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Perche la tua impresa di ristrutturazione{" "}
                  <span className="text-red-400">non cresce</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Se gestisci un'impresa di ristrutturazione, almeno uno di questi problemi
                  ti tiene sveglio la notte. Non sei solo — e la realta del 90% delle imprese
                  del settore.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {problems.map((problem, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-card rounded-2xl p-8 border border-red-500/10 hover:border-red-500/30 transition-all duration-300 h-full"
                  >
                    <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                      <problem.icon className="h-7 w-7 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ SOLUTION ═══════════════════ */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm font-medium mb-4 uppercase tracking-wider">
                  La soluzione
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Come <span className="text-gold">Marketing Edile</span> genera clienti
                  per la tua impresa di ristrutturazione
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Non siamo un'agenzia di marketing generica che oggi segue ristrutturazioni e domani
                  ristoranti. Siamo specializzati nel settore edile e abbiamo sviluppato un sistema
                  specifico per le imprese di ristrutturazione che funziona in qualsiasi citta d'Italia.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-12">
              {solutions.map((solution, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="bg-card rounded-2xl p-8 md:p-10 border border-secondary/10 hover:border-secondary/30 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                          <solution.icon className="h-8 w-8 text-secondary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                          {solution.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {solution.description}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {solution.details.map((detail, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ STATS ═══════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-4 uppercase tracking-wider">
                  Risultati reali
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Numeri che parlano, non{" "}
                  <span className="text-gold">promesse vuote</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Questi sono i risultati concreti ottenuti dalle imprese di ristrutturazione
                  che collaborano con Marketing Edile. Non proiezioni, non stime: dati reali
                  verificabili.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="bg-card rounded-2xl p-8 text-center border border-gold/10 hover:border-gold/30 transition-all duration-300"
                  >
                    <div className="text-4xl md:text-5xl font-black text-gold mb-3">
                      {stat.value}
                    </div>
                    <div className="text-foreground font-semibold mb-2">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ PROCESS ═══════════════════ */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm font-medium mb-4 uppercase tracking-wider">
                  Come funziona
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Da zero a{" "}
                  <span className="text-secondary">flusso costante di clienti</span>{" "}
                  in 4 step
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Il nostro processo e collaudato su decine di imprese edili. Ogni fase e
                  progettata per portarti risultati il piu velocemente possibile, senza
                  rischi e senza canoni fissi.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <AnimatedSection key={index} delay={index * 0.15}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-card rounded-2xl p-8 border border-secondary/10 hover:border-secondary/30 transition-all duration-300 relative h-full"
                  >
                    <div className="absolute top-6 right-6 text-6xl font-black text-secondary/10">
                      {step.step}
                    </div>
                    <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                      <step.icon className="h-7 w-7 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ PERCHE MARKETING EDILE ═══════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-4 uppercase tracking-wider">
                  Perche noi
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Perche le imprese di ristrutturazione scelgono{" "}
                  <span className="text-gold">Marketing Edile</span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Zero rischio",
                  description:
                    "Lavoriamo solo a percentuale sulle vendite. Se non generiamo commesse chiuse per la tua impresa, non ci devi un centesimo. Il rischio e tutto dalla nostra parte — ed e per questo che selezioniamo con cura i partner con cui collaborare.",
                },
                {
                  icon: Building2,
                  title: "Specialisti del settore edile",
                  description:
                    "Non siamo un'agenzia generica. Il nostro fondatore ha un'azienda di serramenti da oltre €2M di vendite. Conosciamo il settore dall'interno: sappiamo cosa funziona, cosa no, e come parla un cliente che vuole ristrutturare casa.",
                },
                {
                  icon: Star,
                  title: "47+ aziende, €60M+ generati",
                  description:
                    "Non siamo al nostro primo esperimento. Abbiamo gia generato oltre 60 milioni di euro di fatturato per le imprese edili che seguiamo. Il nostro sistema e testato, perfezionato e ottimizzato per il mercato italiano delle ristrutturazioni.",
                },
              ].map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-card rounded-2xl p-8 border border-gold/10 hover:border-gold/30 transition-all duration-300 h-full"
                  >
                    <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                      <item.icon className="h-7 w-7 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ FAQ ═══════════════════ */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm font-medium mb-4 uppercase tracking-wider">
                  Domande frequenti
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Tutto quello che vuoi sapere sul{" "}
                  <span className="text-secondary">marketing per ristrutturazioni</span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <AnimatedSection key={index} delay={index * 0.05}>
                  <motion.div
                    className="bg-card rounded-2xl border border-secondary/10 overflow-hidden"
                    whileHover={{ y: -1 }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="text-lg font-semibold text-foreground pr-4">
                        {faq.question}
                      </span>
                      {openFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-secondary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ CTA ═══════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="bg-card rounded-2xl p-10 md:p-16 text-center border border-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0">
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px]" />
                  <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-gold/5 rounded-full blur-[80px]" />
                </div>

                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                    Pronto a riempire il tuo calendario di{" "}
                    <span className="text-gold">cantieri redditizi</span>?
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
                    Ogni mese che passa senza un sistema di acquisizione clienti strutturato,
                    la tua impresa perde decine di migliaia di euro in commesse che vanno ai concorrenti.
                    Non devi continuare a sperare nel passaparola o a fare la guerra dei prezzi.
                  </p>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                    Candidati oggi per una valutazione gratuita. Analizzeremo il tuo mercato locale,
                    i tuoi concorrenti e ti diremo esattamente quanti clienti possiamo portarti ogni mese.
                    <strong className="text-foreground"> Se non sei adatto al nostro sistema, te lo diciamo subito</strong> —
                    non facciamo perdere tempo a nessuno.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      onClick={handleCTA}
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-10 py-6 rounded-xl font-bold"
                    >
                      Candidati per una valutazione gratuita
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground mt-6">
                    Solo a percentuale sulle vendite — zero canoni fissi, zero rischi.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════ INTERNAL LINKS ═══════════════════ */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Approfondisci il sistema Marketing Edile
                </h2>
                <p className="text-muted-foreground">
                  Scopri come lavoriamo, i risultati ottenuti e le risorse gratuite per la tua impresa.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "I nostri servizi",
                  description:
                    "Strategia, contenuti video, advertising gestito e referente dedicato. Tutto incluso nel sistema Marketing Edile.",
                  to: "/servizi",
                  icon: Target,
                },
                {
                  title: "Casi studio reali",
                  description:
                    "Guarda i risultati ottenuti da altre imprese edili. Numeri verificabili, non promesse.",
                  to: "/casi-studio",
                  icon: BarChart3,
                },
                {
                  title: "Come funzionano i prezzi",
                  description:
                    "Solo a percentuale sulle vendite. Scopri come funziona il nostro modello senza rischi.",
                  to: "/prezzi",
                  icon: DollarSign,
                },
                {
                  title: "Contattaci",
                  description:
                    "Hai domande? Vuoi saperne di piu? Parla direttamente con il nostro team.",
                  to: "/contattaci",
                  icon: Handshake,
                },
                {
                  title: "Blog: strategie per imprese edili",
                  description:
                    "Guide pratiche, consigli e strategie testate per far crescere la tua impresa di ristrutturazione.",
                  to: "/blog",
                  icon: ClipboardList,
                },
                {
                  title: "Chi siamo",
                  description:
                    "La storia di Marketing Edile, il team e perche siamo diversi da qualsiasi altra agenzia.",
                  to: "/chi-siamo",
                  icon: Users,
                },
              ].map((link, index) => (
                <AnimatedSection key={index} delay={index * 0.05}>
                  <Link to={link.to} className="block h-full">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="bg-card rounded-2xl p-6 border border-secondary/10 hover:border-secondary/30 transition-all duration-300 h-full flex flex-col"
                    >
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                        <link.icon className="h-5 w-5 text-secondary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{link.title}</h3>
                      <p className="text-sm text-muted-foreground flex-1">{link.description}</p>
                      <div className="flex items-center text-secondary text-sm font-medium mt-4">
                        Scopri di piu
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </motion.div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Ristrutturazioni;
