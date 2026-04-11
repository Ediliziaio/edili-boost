import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  CloudRain,
  ShieldAlert,
  TrendingDown,
  EyeOff,
  Camera,
  CalendarClock,
  FileWarning,
  Target,
  Search,
  BarChart3,
  Handshake,
  HelpCircle,
  ArrowRight,
  Check,
  ChevronDown,
  Home,
  Droplets,
  Flame,
  Thermometer,
  Wrench,
  Star,
  Phone,
  TrendingUp,
  Users,
  Euro,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { siteConfig, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo";
import { useState } from "react";

/* ─── DATA ─── */

const problems = [
  {
    icon: CloudRain,
    title: "Stagionalit\u00e0 estrema",
    description:
      "Il lavoro sui tetti dipende dal meteo e dalle stagioni. D\u2019inverno i cantieri si fermano, d\u2019estate tutti vogliono rifare il tetto nello stesso momento. Senza un sistema che genera richieste costanti tutto l\u2019anno, il fatturato \u00e8 un\u2019altalena che mette a rischio la stabilit\u00e0 dell\u2019azienda e del tuo team.",
  },
  {
    icon: ShieldAlert,
    title: "Lavori urgenti vs pianificati",
    description:
      "Le infiltrazioni non aspettano. I clienti con urgenze cercano online e chiamano il primo risultato \u2014 se non sei tu, \u00e8 un concorrente. Allo stesso tempo, chi pianifica un rifacimento completo confronta 4-5 preventivi. Senza una doppia strategia (emergenza + pianificazione), perdi entrambi i tipi di cliente.",
  },
  {
    icon: TrendingDown,
    title: "Preventivi che non chiudi",
    description:
      "Vai a fare il sopralluogo, prepari il preventivo dettagliato, lo invii\u2026 e poi silenzio. Il cliente confronta, rimanda, sceglie chi costa meno. Il problema non \u00e8 il tuo prezzo: \u00e8 che il cliente non percepisce il valore del tuo lavoro prima ancora di ricevere il preventivo. E intanto hai perso ore e benzina.",
  },
  {
    icon: EyeOff,
    title: "Visibilit\u00e0 zero online",
    description:
      "Quando qualcuno cerca \u201Crifacimento tetto + citt\u00e0\u201D, non trova la tua azienda. Il tuo sito \u2014 se esiste \u2014 non compare. I social sono fermi a sei mesi fa. Il passaparola funziona, ma non scala. Intanto le aziende pi\u00f9 furbe investono in marketing e prendono tutti i clienti migliori della tua zona.",
  },
];

const solutions = [
  {
    icon: ShieldAlert,
    title: "Targeting emergenza + ristrutturazione pianificata",
    description:
      "Creiamo due linee parallele di acquisizione clienti. La prima intercetta chi ha un\u2019emergenza: infiltrazioni, danni da maltempo, tegole rotte. Campagne Google Ads con landing page dedicate che convertono in chiamata entro 24 ore. La seconda linea lavora su chi sta pianificando il rifacimento completo del tetto: campagne social con contenuti educativi, before/after dei tuoi cantieri e un percorso di nurturing che ti posiziona come la scelta ovvia quando il cliente \u00e8 pronto a decidere.",
  },
  {
    icon: Camera,
    title: "Strategia foto e video before/after",
    description:
      "Il tetto \u00e8 il lavoro edile con il maggiore impatto visivo. Un tetto vecchio, rovinato, con infiltrazioni \u2014 trasformato in una copertura nuova, isolata, perfetta. Documentiamo ogni cantiere con foto professionali e video con drone. Questi contenuti diventano le armi pi\u00f9 potenti per le tue campagne: il cliente vede con i propri occhi cosa sai fare, e il preventivo smette di essere \u201Ccaro\u201D.",
  },
  {
    icon: FileWarning,
    title: "Angolo assicurativo e danni atmosferici",
    description:
      "Molti proprietari non sanno che il rifacimento del tetto pu\u00f2 essere coperto da assicurazione in caso di danni atmosferici o grandine. Creiamo contenuti e campagne che educano il pubblico su questa possibilit\u00e0, posizionando la tua azienda come esperta anche nella gestione delle pratiche assicurative. Questo apre un mercato enorme di clienti che non avrebbero mai cercato \u201Crifacimento tetto\u201D spontaneamente.",
  },
  {
    icon: CalendarClock,
    title: "Pianificazione campagne stagionali",
    description:
      "Non aspettiamo che arrivi la pioggia per iniziare a fare marketing. Pianifichiamo le campagne in anticipo rispetto ai picchi stagionali: promozione rifacimento tetto in primavera, campagne anti-infiltrazione in autunno, offerte isolamento termico prima dell\u2019inverno. Quando i concorrenti si svegliano, tu hai gi\u00e0 l\u2019agenda piena per i prossimi tre mesi.",
  },
];

const stats = [
  {
    value: "+\u20AC600k",
    label: "Fatturato generato",
    detail: "Renova Tetto in 12 mesi",
    icon: Euro,
  },
  {
    value: "47+",
    label: "Aziende edili seguite",
    detail: "In tutta Italia",
    icon: Users,
  },
  {
    value: "72h",
    label: "Primi contatti",
    detail: "Dalla partenza delle campagne",
    icon: Clock,
  },
  {
    value: "8.2x",
    label: "ROI medio",
    detail: "Ritorno sull\u2019investimento",
    icon: TrendingUp,
  },
];

const roofingTypes = [
  {
    icon: Home,
    title: "Rifacimento completo del tetto",
    description:
      "La richiesta pi\u00f9 redditizia. Ticket medio elevato (dai 15.000\u20AC ai 60.000\u20AC+), clienti disposti a investire per un lavoro fatto bene. Il nostro sistema attira proprietari di case e amministratori di condominio che cercano un\u2019azienda affidabile, non il prezzo pi\u00f9 basso. Generiamo richieste di preventivo qualificate da persone che hanno gi\u00e0 visto i tuoi lavori e sanno quanto vali.",
  },
  {
    icon: Droplets,
    title: "Impermeabilizzazione",
    description:
      "Un mercato enorme e sottovalutato. Terrazzi, tetti piani, coperture industriali: le infiltrazioni sono il problema numero uno e i clienti cercano disperatamente una soluzione. Campagne mirate su Google intercettano chi ha gi\u00e0 l\u2019acqua in casa e vuole risolvere subito. I tuoi tecnici non perderanno pi\u00f9 tempo con curiosi: ogni contatto \u00e8 un\u2019emergenza reale o un progetto concreto.",
  },
  {
    icon: Flame,
    title: "Bonifica amianto",
    description:
      "Settore ad altissimo valore e barriera d\u2019ingresso. Se la tua azienda \u00e8 abilitata alla rimozione amianto, hai un vantaggio competitivo enorme. Le normative spingono sempre pi\u00f9 proprietari a bonificare, e gli incentivi fiscali rendono l\u2019investimento pi\u00f9 accessibile. Creiamo campagne informative che educano sul rischio amianto e posizionano la tua azienda come il partner certificato di riferimento nella zona.",
  },
  {
    icon: Thermometer,
    title: "Isolamento termico del tetto",
    description:
      "Con il Superbonus e le detrazioni fiscali, l\u2019isolamento termico del tetto \u00e8 diventato uno dei servizi pi\u00f9 richiesti. I proprietari cercano risparmio energetico e comfort abitativo. Le nostre campagne combinano l\u2019aspetto tecnico (classe energetica, risparmio in bolletta) con l\u2019aspetto emotivo (casa pi\u00f9 calda d\u2019inverno, pi\u00f9 fresca d\u2019estate), generando contatti pronti a investire.",
  },
  {
    icon: Wrench,
    title: "Grondaie e lattoneria",
    description:
      "Servizio complementare che pu\u00f2 diventare un\u2019importante fonte di fatturato ricorrente. Sostituzione grondaie, riparazione pluviali, lattoneria su misura: lavori con margini interessanti e clienti che tornano. Il nostro sistema genera richieste costanti per questi interventi \u201Cminori\u201D che insieme costruiscono una base solida di fatturato, soprattutto nei periodi di bassa stagione per i rifacimenti completi.",
  },
];

const processSteps = [
  {
    step: "01",
    icon: Search,
    title: "Analisi del tuo mercato locale",
    description:
      "Studiamo la tua zona, i tuoi concorrenti, i tuoi punti di forza e il tipo di lavori su cui vuoi concentrarti. Analizziamo le ricerche online nella tua area per capire esattamente cosa cercano i tuoi potenziali clienti e come intercettarli prima dei concorrenti. Questa fase dura 5-7 giorni e definisce tutta la strategia.",
  },
  {
    step: "02",
    icon: Target,
    title: "Costruzione del sistema di acquisizione",
    description:
      "Creiamo landing page dedicate per ogni tipo di servizio (rifacimento, impermeabilizzazione, bonifica, isolamento), prepariamo le campagne pubblicitarie su Google e social, e costruiamo il funnel di conversione. Tutto ottimizzato per generare richieste di preventivo da clienti qualificati, non curiosi.",
  },
  {
    step: "03",
    icon: BarChart3,
    title: "Lancio e ottimizzazione continua",
    description:
      "Attiviamo le campagne e monitoriamo ogni singolo contatto. Nelle prime 72 ore arrivano gi\u00e0 le prime richieste. Ogni settimana ottimizziamo: testiamo nuovi messaggi, aggiustiamo il targeting, miglioriamo le landing page. Il costo per contatto scende, la qualit\u00e0 dei lead sale. Report settimanale con numeri reali, non vanity metrics.",
  },
  {
    step: "04",
    icon: Handshake,
    title: "Crescita e scaling",
    description:
      "Quando il sistema funziona e il tuo team riesce a gestire il flusso di richieste, scaliamo. Pi\u00f9 budget, pi\u00f9 zone coperte, pi\u00f9 servizi pubblicizzati. Il bello del modello a percentuale: quando cresci tu, cresciamo noi. Non abbiamo interesse a farti spendere di pi\u00f9 \u2014 abbiamo interesse a farti fatturare di pi\u00f9.",
  },
];

const faqs = [
  {
    question: "Quanto tempo ci vuole per vedere i primi risultati con il marketing per tetti?",
    answer:
      "I primi contatti qualificati arrivano entro 72 ore dall\u2019attivazione delle campagne. Per\u00f2 un sistema di acquisizione clienti completo richiede 2-3 mesi per raggiungere la piena efficienza. In questo periodo ottimizziamo le campagne, testiamo diversi messaggi e costruiamo un flusso costante di richieste. Il caso Renova Tetto ha generato +\u20AC600.000 di fatturato nei primi 12 mesi, ma i primi cantieri chiusi sono arrivati gi\u00e0 nel primo mese.",
  },
  {
    question: "Come funziona il pagamento a percentuale per un\u2019azienda di coperture?",
    answer:
      "Non paghi nessun fisso mensile. Il nostro compenso \u00e8 una percentuale sulle vendite generate dal nostro sistema. Questo significa che se non vendi, non ci paghi. \u00c8 il modello pi\u00f9 equo possibile: il nostro guadagno \u00e8 direttamente legato al tuo. Per questo selezioniamo solo aziende che possono gestire un aumento di lavoro e che hanno un servizio di qualit\u00e0 \u2014 perch\u00e9 se il cliente \u00e8 soddisfatto, tutti vincono.",
  },
  {
    question: "Funziona anche per aziende di coperture che lavorano solo nella loro provincia?",
    answer:
      "Assolutamente s\u00ec, anzi \u00e8 il caso ideale. Il nostro sistema di geotargeting ci permette di mostrare le tue campagne solo a persone nella tua zona operativa \u2014 che sia un singolo comune, una provincia o una regione. Per le aziende di coperture il raggio d\u2019azione locale \u00e8 un vantaggio: il cliente vuole qualcuno vicino, che possa intervenire rapidamente. Sfruttiamo questo a tuo favore con campagne iper-localizzate.",
  },
  {
    question: "Quali tipi di lavori sui tetti generano pi\u00f9 richieste?",
    answer:
      "I rifacimenti completi del tetto generano i ticket pi\u00f9 alti (15.000-60.000\u20AC+), ma il volume maggiore di richieste arriva dalle impermeabilizzazioni e dalle riparazioni urgenti. La strategia vincente \u00e8 coprire tutti i servizi: le emergenze portano lavoro immediato e clienti che poi tornano per il rifacimento completo. La bonifica amianto e l\u2019isolamento termico sono nicchie ad altissimo valore che pochi pubblicizzano online, quindi la concorrenza \u00e8 bassa e i costi per contatto molto favorevoli.",
  },
  {
    question: "Il marketing funziona anche durante i mesi invernali quando i cantieri sono fermi?",
    answer:
      "I mesi invernali sono perfetti per il marketing, anche se i cantieri rallentano. In inverno le infiltrazioni aumentano e i proprietari cercano soluzioni urgenti. Inoltre, chi pianifica un rifacimento completo per la primavera inizia a informarsi e chiedere preventivi proprio nei mesi freddi. Il nostro sistema lavora tutto l\u2019anno: in inverno generiamo i contatti, in primavera hai gi\u00e0 l\u2019agenda piena. Le aziende che smettono di fare marketing in inverno si ritrovano a rincorrere il lavoro da marzo in poi.",
  },
];

/* ─── COMPONENT ─── */

const Tetti = () => {
  const navigate = useNavigate();
  const handleCTA = () => navigate("/#candidati");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Marketing Rifacimento Tetti"
        description="Lead generation per aziende di rifacimento tetti e coperture. Clienti qualificati, solo a percentuale. Caso studio: +€600k in 12 mesi."
        keywords={[
          "marketing tetti",
          "lead generation coperture",
          "clienti rifacimento tetti",
          "pubblicit\u00e0 lattoniere",
          "marketing coperture edili",
          "acquisizione clienti tetti",
        ]}
        url={`${siteConfig.url}/settori/tetti`}
        jsonLd={[
          generateBreadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Settori", url: `${siteConfig.url}/settori` },
            { name: "Tetti", url: `${siteConfig.url}/settori/tetti` },
          ]),
          generateFAQSchema(faqs),
        ]}
      />
      <Navbar />

      <main className="overflow-hidden">
        {/* ── HERO ── */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px]" />
          </div>

          <div className="container-narrow relative z-10 text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm font-medium mb-6 uppercase tracking-wider">
                Settore Tetti & Coperture
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                Marketing per Aziende di{" "}
                <span className="text-secondary">Rifacimento Tetti e Coperture</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4">
                Portiamo clienti qualificati alla tua azienda di coperture. Ogni settimana, tutto l'anno.
                Solo a percentuale sulle vendite generate.
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Niente fisso mensile, niente vincoli. Il nostro guadagno dipende dal tuo fatturato.
                Se non vendi, non ci devi nulla. Punto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 rounded-xl font-bold"
                  onClick={handleCTA}
                >
                  Candidati ora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground text-lg px-8 py-6 rounded-xl font-bold"
                  onClick={() => navigate("/casi-studio")}
                >
                  Vedi i risultati
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── PROBLEMS ── */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-4 uppercase tracking-wider">
                  I problemi
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Perch\u00e9 la tua azienda di coperture{" "}
                  <span className="text-red-400">non cresce</span> come dovrebbe
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Questi sono i quattro problemi che vediamo in quasi tutte le aziende di rifacimento tetti
                  che ci contattano. Se ti riconosci in almeno due, il nostro sistema fa al caso tuo.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {problems.map((problem, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    className="bg-background border border-border rounded-2xl p-8 h-full hover:border-red-500/30 transition-colors"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-14 h-14 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center justify-center mb-6">
                      <problem.icon className="w-7 h-7 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOLUTION ── */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm font-medium mb-4 uppercase tracking-wider">
                  La soluzione
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Come generiamo clienti per la tua azienda di{" "}
                  <span className="text-secondary">coperture</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Un sistema completo che lavora 24/7 per portarti richieste di preventivo da proprietari
                  di casa e amministratori che hanno bisogno di rifare il tetto. Non lead freddi: contatti
                  caldi, pronti a fissare il sopralluogo.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-secondary/10 border border-secondary/30 rounded-xl flex items-center justify-center">
                          <solution.icon className="w-7 h-7 text-secondary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Case study callout */}
            <AnimatedSection delay={0.4}>
              <div className="mt-12 bg-secondary/5 border border-secondary/20 rounded-2xl p-8 md:p-10 text-center">
                <Star className="w-10 h-10 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Caso studio: Renova Tetto
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                  Azienda di rifacimento tetti nel Nord Italia. In 12 mesi di collaborazione con Marketing
                  Edile hanno generato <span className="text-secondary font-bold">+€600.000 di fatturato</span> partendo
                  da zero presenza online. Oggi hanno 3 squadre operative e l'agenda piena per i prossimi
                  4 mesi. Il passaparola da solo non li avrebbe mai portati a questi numeri.
                </p>
                <Button
                  variant="outline"
                  className="border-secondary/30 text-secondary hover:bg-secondary/10"
                  onClick={() => navigate("/casi-studio")}
                >
                  Leggi il caso studio completo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
                  I numeri parlano <span className="text-secondary">pi\u00f9 forte</span> delle promesse
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Risultati reali, misurabili, verificabili. Non proiezioni, non stime \u2014 fatturato vero
                  generato per aziende edili come la tua.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-card border border-border rounded-2xl p-6 text-center">
                    <stat.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-black text-secondary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-bold text-foreground mb-1">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.detail}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── TYPES OF ROOFING WORK ── */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm font-medium mb-4 uppercase tracking-wider">
                  Specializzazioni
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Generiamo clienti per{" "}
                  <span className="text-secondary">ogni tipo</span> di lavoro sui tetti
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Non importa se fai rifacimenti completi, impermeabilizzazioni o bonifica amianto. Il nostro
                  sistema si adatta ai servizi che offri e genera richieste specifiche per ognuno. Ecco le
                  aree in cui i nostri clienti ottengono i migliori risultati.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-6">
              {roofingTypes.map((type, index) => (
                <AnimatedSection key={index} delay={index * 0.08}>
                  <div className="bg-card border border-border rounded-2xl p-8 hover:border-secondary/30 transition-colors">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-secondary/10 border border-secondary/30 rounded-xl flex items-center justify-center">
                          <type.icon className="w-7 h-7 text-secondary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{type.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm font-medium mb-4 uppercase tracking-wider">
                  Il processo
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Come funziona, <span className="text-secondary">passo dopo passo</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Dalla prima analisi al primo cantiere generato dal marketing: ecco cosa succede quando
                  inizi a lavorare con Marketing Edile. Nessuna sorpresa, nessun costo nascosto.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="flex gap-6 md:gap-8">
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-16 h-16 bg-secondary/10 border-2 border-secondary/30 rounded-2xl flex items-center justify-center">
                        <span className="text-secondary font-black text-lg">{step.step}</span>
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="w-0.5 h-full bg-border mt-4 min-h-[40px]" />
                      )}
                    </div>
                    <div className="pb-8">
                      <div className="flex items-center gap-3 mb-3">
                        <step.icon className="w-5 h-5 text-secondary" />
                        <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm font-medium mb-4 uppercase tracking-wider">
                  Domande frequenti
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Tutto quello che vuoi sapere sul{" "}
                  <span className="text-secondary">marketing per tetti</span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <AnimatedSection key={index} delay={index * 0.08}>
                  <div className="bg-card border border-border rounded-2xl overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-6 text-left"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      <div className="flex items-center gap-4 pr-4">
                        <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="font-bold text-foreground">{faq.question}</span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaq === index ? "auto" : 0,
                        opacity: openFaq === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-muted-foreground leading-relaxed pl-9">{faq.answer}</p>
                      </div>
                    </motion.div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTERNAL LINKS ── */}
        <section className="py-12 bg-card border-t border-border">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/servizi"
                  className="px-5 py-2.5 bg-background border border-border rounded-full text-sm font-medium text-foreground hover:border-secondary/30 hover:text-secondary transition-colors"
                >
                  Tutti i servizi
                </Link>
                <Link
                  to="/casi-studio"
                  className="px-5 py-2.5 bg-background border border-border rounded-full text-sm font-medium text-foreground hover:border-secondary/30 hover:text-secondary transition-colors"
                >
                  Casi studio
                </Link>
                <Link
                  to="/prezzi"
                  className="px-5 py-2.5 bg-background border border-border rounded-full text-sm font-medium text-foreground hover:border-secondary/30 hover:text-secondary transition-colors"
                >
                  Prezzi e modello
                </Link>
                <Link
                  to="/contattaci"
                  className="px-5 py-2.5 bg-background border border-border rounded-full text-sm font-medium text-foreground hover:border-secondary/30 hover:text-secondary transition-colors"
                >
                  Contattaci
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="bg-card border border-border rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-secondary/5 rounded-full blur-[100px]" />
                </div>
                <div className="relative z-10">
                  <Phone className="w-12 h-12 text-secondary mx-auto mb-6" />
                  <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                    Pronto a riempire l'agenda della tua{" "}
                    <span className="text-secondary">azienda di coperture</span>?
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
                    Selezioniamo solo un numero limitato di aziende per zona, per non creare concorrenza
                    tra i nostri stessi clienti. Verifica se la tua zona \u00e8 ancora disponibile.
                  </p>
                  <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                    La candidatura \u00e8 gratuita e senza impegno. Analizziamo il tuo mercato locale e ti
                    diciamo onestamente se possiamo aiutarti e quali risultati aspettarti. Se non siamo
                    il partner giusto, te lo diciamo subito.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-10 py-6 rounded-xl font-bold"
                      onClick={handleCTA}
                    >
                      Verifica disponibilit\u00e0 zona
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-6">
                    <Check className="w-4 h-4 inline mr-1 text-secondary" />
                    Nessun costo fisso &middot;{" "}
                    <Check className="w-4 h-4 inline mr-1 text-secondary" />
                    Solo a percentuale &middot;{" "}
                    <Check className="w-4 h-4 inline mr-1 text-secondary" />
                    Primi contatti in 72h
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Tetti;
