import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import {
  ArrowRight,
  Check,
  AlertTriangle,
  Target,
  Users,
  Video,
  Search,
  BarChart3,
  TrendingUp,
  Eye,
  ShieldCheck,
  MessageSquare,
  DoorOpen,
  Zap,
  Clock,
  ChevronDown,
  Star,
  MapPin,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { siteConfig, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo";

// ─── FAQ Data ──────────────────────────────────────────
const faqs = [
  {
    question: "Quanto costa il marketing per serramentisti con Marketing Edile?",
    answer:
      "Marketing Edile lavora esclusivamente a percentuale sulle vendite generate. Non ci sono canoni fissi, abbonamenti o costi anticipati. Paghi solo quando chiudi una commessa grazie ai contatti che ti portiamo. Questo significa rischio zero per te: se non vendiamo, non guadagniamo nemmeno noi. Per i serramentisti questo modello è particolarmente vantaggioso perché il valore medio di una commessa infissi (tra i 5.000 e i 30.000 euro) permette margini che rendono sostenibile la collaborazione fin dal primo mese.",
  },
  {
    question: "Che tipo di clienti portate ai serramentisti?",
    answer:
      "Generiamo contatti di proprietari di immobili che stanno attivamente cercando di sostituire o installare infissi e serramenti. Non parliamo di curiosi o perditempo: attraverso campagne mirate su Facebook, Instagram e Google, intercettiamo persone che hanno un bisogno reale e urgente — ristrutturazioni in corso, bonus edilizi, problemi di isolamento termico o acustico. Ogni lead viene pre-qualificato prima di essere passato al tuo team commerciale, così il tuo tempo viene investito solo su trattative con alta probabilità di chiusura.",
  },
  {
    question: "In quanto tempo vedrò i primi risultati?",
    answer:
      "La maggior parte dei nostri partner nel settore serramenti vede i primi contatti qualificati entro 2-4 settimane dall'avvio delle campagne. I risultati in termini di fatturato dipendono dalla velocità del tuo ciclo di vendita: con infissi, il tempo medio dalla richiesta di preventivo alla chiusura è di 2-6 settimane. Aziende come Teda Infissi hanno raggiunto un flusso costante di 30-40 mila euro al mese di vendite generate dalle nostre campagne. Factory S.r.l.s ha generato +60.000 euro di venduto nel primo mese di collaborazione.",
  },
  {
    question: "Funziona anche per showroom piccoli o appena avviati?",
    answer:
      "Assolutamente sì. Il nostro sistema è pensato per scalare: funziona sia per il piccolo showroom locale che per l'azienda strutturata con più sedi. L'importante è che tu abbia un prodotto di qualità e la capacità di gestire i contatti che arrivano. Analizziamo la tua situazione specifica nella valutazione gratuita iniziale e ti diciamo onestamente se sei in target. Non lavoriamo con tutti: selezioniamo i partner con cui possiamo davvero generare risultati.",
  },
  {
    question: "Cosa vi distingue da una normale agenzia di marketing?",
    answer:
      "Tre cose fondamentali. Primo: lavoriamo SOLO a percentuale sulle vendite, quindi il nostro interesse è allineato al tuo — se non vendi, non guadagniamo. Secondo: siamo specializzati nel settore edile e serramenti, non siamo un'agenzia generalista che oggi fa marketing per il ristorante e domani per il dentista. Conosciamo il linguaggio, i tempi decisionali e le obiezioni tipiche del tuo mercato. Terzo: il nostro fondatore possiede un'azienda di serramenti con oltre 2 milioni di euro di vendite in 2 anni — sappiamo cosa significa vendere infissi perché lo facciamo in prima persona.",
  },
];

// ─── Problems Data ──────────────────────────────────────
const problems = [
  {
    icon: AlertTriangle,
    title: "Preventivi ignorati",
    description:
      "Passi ore a fare sopralluoghi e preventivi dettagliati, ma il 70% dei potenziali clienti sparisce senza darti una risposta. Tempo perso su persone che non erano realmente pronte ad acquistare.",
  },
  {
    icon: BarChart3,
    title: "Concorrenza sul prezzo",
    description:
      "Il cliente confronta 5-6 preventivi e sceglie il più economico, senza capire la differenza di qualità. Ti ritrovi a competere con chi monta infissi da discount, erodendo i tuoi margini.",
  },
  {
    icon: Users,
    title: "Dipendenza dal passaparola",
    description:
      "Il passaparola funziona, ma è imprevedibile. Un mese hai 10 richieste, il mese dopo zero. Non puoi pianificare fatturato e investimenti se il flusso clienti dipende dal caso.",
  },
  {
    icon: Target,
    title: "Lead non qualificati",
    description:
      "Hai provato qualche agenzia di marketing ma i contatti che arrivavano erano curiosi, perditempo o persone con budget ridicoli. Hai speso soldi senza vedere un ritorno concreto.",
  },
];

// ─── Solution Data ──────────────────────────────────────
const solutions = [
  {
    icon: Target,
    title: "Lead generation specifica per serramenti",
    description:
      "Campagne mirate su Facebook, Instagram e Google che intercettano proprietari di casa in fase di ristrutturazione o sostituzione infissi. Ogni contatto viene pre-qualificato: budget, tempistiche, tipo di intervento. Ricevi solo appuntamenti con persone pronte a comprare.",
    link: "/servizi",
    linkText: "Scopri i nostri servizi",
  },
  {
    icon: Search,
    title: "SEO locale e Google Business",
    description:
      "Quando un proprietario cerca \"serramenti vicino a me\" o \"showroom infissi [città]\", il tuo nome deve essere il primo che trova. Ottimizziamo la tua presenza su Google Maps, il tuo profilo Google Business e il posizionamento organico per le ricerche locali a più alta intenzione d'acquisto.",
    link: "/blog/marketing-locale-serramentisti-google-business-seo",
    linkText: "Leggi la guida SEO locale",
  },
  {
    icon: Video,
    title: "Strategia video per showroom",
    description:
      "I video sono lo strumento più potente per vendere infissi: mostrano la qualità del prodotto, il prima/dopo delle installazioni, le testimonianze dei clienti soddisfatti. Creiamo script professionali, editiamo i contenuti e li distribuiamo sulle piattaforme giuste per generare fiducia e richieste.",
    link: "/servizi",
    linkText: "Scopri la produzione video",
  },
  {
    icon: Eye,
    title: "Posizionamento premium del tuo brand",
    description:
      "Basta competere sul prezzo. Costruiamo un posizionamento che comunica il valore reale dei tuoi serramenti: isolamento termoacustico, risparmio energetico, estetica, durabilità. Il cliente arriva già convinto della tua qualità e disposto a pagare il giusto prezzo.",
    link: "/prezzi",
    linkText: "Vedi il nostro modello",
  },
];

// ─── Stats Data ──────────────────────────────────────
const stats = [
  {
    value: "€30-40k",
    label: "al mese",
    detail: "Teda Infissi: fatturato mensile costante da campagne",
  },
  {
    value: "+€100k",
    label: "in 3 mesi",
    detail: "S'infissi: venduto generato in Sardegna",
  },
  {
    value: "+€60k",
    label: "in 1 mese",
    detail: "Factory S.r.l.s: vendite nel primo mese",
  },
  {
    value: "47+",
    label: "aziende edili",
    detail: "Partner seguiti con risultati documentati",
  },
];

// ─── Process Steps ──────────────────────────────────────
const steps = [
  {
    number: "01",
    title: "Analisi",
    description:
      "Studiamo il tuo mercato locale, i concorrenti diretti, il tuo posizionamento attuale e il profilo del tuo cliente ideale. Identifichiamo le opportunità specifiche per il tuo showroom di serramenti e definiamo gli obiettivi di fatturato raggiungibili.",
    icon: Search,
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/30",
  },
  {
    number: "02",
    title: "Strategia",
    description:
      "Definiamo il piano d'azione: quali canali usare, che tipo di campagne lanciare, quale messaggio comunicare. Tutto calibrato sul settore serramenti e sulle caratteristiche specifiche del tuo territorio e della tua offerta. Creiamo landing page ottimizzate per la conversione.",
    icon: Target,
    color: "text-secondary",
    bg: "bg-secondary/10 border-secondary/30",
  },
  {
    number: "03",
    title: "Campagne",
    description:
      "Lanciamo le campagne pubblicitarie su Facebook, Instagram e Google. Ogni annuncio è testato e ottimizzato quotidianamente per massimizzare il ritorno. Produciamo contenuti video, gestiamo i social e ottimizziamo il tuo profilo Google Business per le ricerche locali.",
    icon: Zap,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/30",
  },
  {
    number: "04",
    title: "Risultati",
    description:
      "Ricevi contatti pre-qualificati pronti per il preventivo. Monitoriamo ogni metrica: costo per lead, tasso di conversione, fatturato generato. Confronto settimanale con il tuo referente dedicato per analizzare i dati e migliorare continuamente le performance.",
    icon: TrendingUp,
    color: "text-secondary",
    bg: "bg-secondary/10 border-secondary/30",
  },
];

// ─── Case Studies Preview ──────────────────────────────
const caseStudies = [
  {
    company: "Teda Infissi",
    highlight: "€30-40k/mese",
    description:
      "Da un investimento minimo in campagne a un flusso costante di 30-40 mila euro al mese. Dopo 2 anni di collaborazione, Teda Infissi ha trasformato completamente il proprio sistema di acquisizione clienti.",
    testimonial:
      "Con un investimento minimo in sponsorizzate, dopo 2 anni abbiamo un flusso costante di clienti da 30-40 mila euro al mese.",
    author: "Luana Agostini",
    role: "Titolare",
  },
  {
    company: "S'infissi",
    highlight: "+€100k in 3 mesi",
    description:
      "Showroom sardo che competeva in un mercato locale saturo. Con campagne geolocalizzate e un posizionamento come riferimento territoriale, ha generato oltre 100.000 euro di venduto in soli 3 mesi.",
    testimonial:
      "In soli 3 mesi di collaborazione abbiamo generato oltre 100.000 euro di venduto.",
    author: "Titolare S'infissi",
    role: "Titolare",
  },
  {
    company: "Factory S.r.l.s",
    highlight: "+€60k in 1 mese",
    description:
      "Servivano contatti pronti all'acquisto in tempi brevi. Con campagne ad alta conversione e targeting su proprietari in ristrutturazione, ha raggiunto 60.000 euro di vendite aggiuntive nel primo mese.",
    testimonial:
      "In un solo mese di collaborazione abbiamo generato 60.000 euro di venduto in più.",
    author: "Titolare Factory",
    role: "Titolare",
  },
];

// ─── FAQ Accordion Item ──────────────────────────────
const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <motion.div
    className="border border-border rounded-2xl overflow-hidden"
    initial={false}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-6 text-left hover:bg-card/50 transition-colors"
    >
      <span className="text-lg font-bold text-foreground pr-4">{question}</span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="shrink-0"
      >
        <ChevronDown className="w-5 h-5 text-secondary" />
      </motion.div>
    </button>
    <motion.div
      initial={false}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden"
    >
      <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
        {answer}
      </div>
    </motion.div>
  </motion.div>
);

// ─── Main Page ──────────────────────────────────────────
const Serramenti = () => {
  const navigate = useNavigate();
  const handleCTA = () => navigate("/#candidati");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Marketing per Serramentisti"
        description="Marketing per serramentisti e showroom infissi. Lead qualificati, campagne mirate, paghi solo a percentuale sulle vendite. Risultati documentati."
        keywords={[
          "marketing serramenti",
          "marketing infissi",
          "lead generation serramentisti",
          "pubblicità showroom infissi",
          "clienti per serramentisti",
          "vendere infissi online",
        ]}
        url={`${siteConfig.url}/settori/serramenti`}
        jsonLd={[
          generateBreadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Settori", url: `${siteConfig.url}/settori` },
            { name: "Serramenti", url: `${siteConfig.url}/settori/serramenti` },
          ]),
          generateFAQSchema(faqs),
        ]}
      />
      <Navbar />
      <main className="overflow-hidden">
        {/* ════════════════════════════════════════════════════
            HERO SECTION
        ════════════════════════════════════════════════════ */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          {/* Background gradient blobs */}
          <div className="absolute inset-0 bg-background">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-secondary/8 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[350px] bg-blue-500/5 rounded-full blur-[100px]" />
          </div>

          <div className="container-narrow relative z-10 text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm font-medium mb-6 uppercase tracking-wider">
                <DoorOpen className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                Settore Serramenti & Infissi
              </span>

              <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                CLIENTI QUALIFICATI PER IL TUO{" "}
                <span className="text-secondary">SHOWROOM DI SERRAMENTI</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
                Sei stanco di preventivi che finiscono nel nulla, clienti che scelgono
                solo in base al prezzo e mesi in cui il telefono non squilla? Marketing
                Edile porta al tuo showroom di infissi contatti{" "}
                <strong className="text-foreground">pre-qualificati e pronti ad acquistare</strong>.
                Paghi solo a percentuale sulle vendite chiuse.
              </p>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Nessun canone fisso. Nessun rischio. Solo risultati misurabili — come
                per le{" "}
                <Link
                  to="/casi-studio"
                  className="text-secondary underline underline-offset-4 hover:text-secondary/80 transition-colors"
                >
                  47+ aziende edili
                </Link>{" "}
                che ci hanno scelto.
              </p>

              <Button
                variant="gold"
                size="xl"
                className="glow-gold"
                onClick={handleCTA}
              >
                Richiedi Valutazione Gratuita
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              {/* Social proof mini */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-secondary" /> Zero costi
                  fissi
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-secondary" /> Primi lead in 2-4
                  settimane
                </span>
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-secondary" /> 4.9/5 dai partner
                </span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            PROBLEMS SECTION
        ════════════════════════════════════════════════════ */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
                  I problemi che conosci bene
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                  PERCHE IL TUO SHOWROOM{" "}
                  <span className="text-secondary">NON CRESCE</span> COME DOVREBBE
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Questi sono i problemi che sentiamo ogni giorno dai serramentisti
                  italiani. Se ti riconosci in almeno due di questi, il nostro sistema
                  e fatto apposta per te.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer
              className="grid md:grid-cols-2 gap-6"
              staggerDelay={0.1}
            >
              {problems.map((problem) => (
                <StaggerItem key={problem.title}>
                  <motion.div
                    whileHover={{
                      borderColor: "hsl(var(--secondary))",
                    }}
                    className="p-6 bg-background border border-border rounded-2xl h-full transition-shadow duration-300 hover:shadow-[0_8px_30px_-10px_hsl(var(--secondary)/0.15)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center shrink-0">
                        <problem.icon className="w-6 h-6 text-red-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {problem.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SOLUTION SECTION
        ════════════════════════════════════════════════════ */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
                  La soluzione
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                  COME{" "}
                  <span className="text-secondary">MARKETING EDILE</span>{" "}
                  RISOLVE QUESTI PROBLEMI
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Un sistema completo pensato specificamente per serramentisti e
                  showroom di infissi. Non strategie generiche: ogni azione e
                  calibrata sul tuo settore, il tuo territorio e i tuoi obiettivi
                  di fatturato.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer
              className="grid md:grid-cols-2 gap-8"
              staggerDelay={0.12}
            >
              {solutions.map((solution) => (
                <StaggerItem key={solution.title}>
                  <motion.div
                    whileHover={{
                      borderColor: "hsl(var(--secondary))",
                    }}
                    className="p-6 md:p-8 bg-card border border-border rounded-2xl h-full transition-shadow duration-300 hover:shadow-[0_8px_30px_-10px_hsl(var(--secondary)/0.15)]"
                  >
                    <div className="w-12 h-12 bg-secondary/10 border border-secondary/30 rounded-xl flex items-center justify-center mb-4">
                      <solution.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {solution.description}
                    </p>
                    <Link
                      to={solution.link}
                      className="inline-flex items-center gap-1 text-secondary text-sm font-semibold hover:underline underline-offset-4 transition-colors"
                    >
                      {solution.linkText}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Extra paragraph for SEO */}
            <AnimatedSection className="mt-12">
              <div className="p-6 md:p-8 bg-card border border-secondary/20 rounded-2xl">
                <p className="text-muted-foreground leading-relaxed">
                  Il settore dei serramenti in Italia vale oltre <strong className="text-foreground">15 miliardi di euro</strong> e
                  la domanda di sostituzione infissi e in costante crescita grazie agli
                  incentivi fiscali e alla crescente attenzione all'efficienza energetica.
                  Tuttavia, la maggior parte dei serramentisti fatica a intercettare questa
                  domanda online. Il <strong className="text-foreground">74% dei proprietari di casa</strong> inizia
                  la ricerca di un fornitore di infissi su Google o sui social media —
                  se il tuo showroom non e visibile dove cercano i tuoi potenziali clienti,
                  stai lasciando fatturato sul tavolo. Il nostro{" "}
                  <Link
                    to="/servizi"
                    className="text-secondary underline underline-offset-4 hover:text-secondary/80"
                  >
                    sistema di marketing integrato
                  </Link>{" "}
                  copre ogni fase del percorso d'acquisto: dalla prima ricerca su Google
                  fino all'appuntamento in showroom.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            STATS SECTION
        ════════════════════════════════════════════════════ */}
        <section className="py-16 px-6 bg-card border-y border-border">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
                  NUMERI <span className="text-secondary">REALI</span> NEL SETTORE
                  SERRAMENTI
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Risultati documentati dei nostri partner nel settore infissi e
                  serramenti. Non promesse: dati verificabili.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
              staggerDelay={0.08}
            >
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="text-center p-6 bg-background border border-border rounded-2xl hover:border-secondary/40 transition-colors">
                    <p className="text-3xl md:text-4xl font-black text-secondary mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm font-semibold text-foreground mb-2">
                      {stat.label}
                    </p>
                    <p className="text-xs text-muted-foreground">{stat.detail}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimatedSection className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Vuoi vedere tutti i casi studio?{" "}
                <Link
                  to="/casi-studio"
                  className="text-secondary font-semibold underline underline-offset-4 hover:text-secondary/80"
                >
                  Scopri i risultati completi
                </Link>
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            HOW IT WORKS
        ════════════════════════════════════════════════════ */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
                  Il processo
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                  COME FUNZIONA:{" "}
                  <span className="text-secondary">4 STEP</span> PER RIEMPIRE
                  IL TUO SHOWROOM
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Un percorso strutturato e testato su decine di aziende nel settore
                  serramenti. Dall'analisi iniziale ai primi contatti qualificati in
                  poche settimane.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer
              className="grid md:grid-cols-2 gap-6"
              staggerDelay={0.1}
            >
              {steps.map((step) => (
                <StaggerItem key={step.number}>
                  <div className="relative p-6 md:p-8 bg-card border border-border rounded-2xl h-full">
                    {/* Step number watermark */}
                    <span className="absolute top-4 right-6 text-6xl font-black text-border/50 select-none">
                      {step.number}
                    </span>
                    <div className="relative z-10">
                      <div
                        className={`w-12 h-12 ${step.bg} border rounded-xl flex items-center justify-center mb-4`}
                      >
                        <step.icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      <h3 className={`text-xl font-bold ${step.color} mb-3`}>
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Why it works for serramenti */}
            <AnimatedSection className="mt-12">
              <div className="p-6 md:p-8 bg-gradient-to-br from-secondary/10 via-background to-secondary/5 border border-secondary/30 rounded-2xl">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Perche questo processo funziona per i serramentisti?
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Il valore medio per commessa (5-30k euro) giustifica l'investimento in marketing",
                    "Il ciclo di vendita e tracciabile: dal click al preventivo firmato",
                    "Il targeting geografico permette di coprire esattamente il tuo raggio d'azione",
                    "I contenuti video in showroom convertono fino a 3x di piu delle sole foto",
                    "La SEO locale porta traffico organico gratuito e costante nel tempo",
                    "Il modello a percentuale allinea i nostri interessi ai tuoi risultati",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-secondary/20 border border-secondary/30 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-secondary" />
                      </div>
                      <span className="text-foreground/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            CASE STUDIES PREVIEW
        ════════════════════════════════════════════════════ */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
                  Risultati documentati
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                  SERRAMENTISTI CHE HANNO{" "}
                  <span className="text-secondary">GIA SCELTO</span> MARKETING
                  EDILE
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Non parliamo di teoria. Ecco cosa hanno ottenuto aziende reali nel
                  settore infissi e serramenti lavorando con noi.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer
              className="grid md:grid-cols-3 gap-6"
              staggerDelay={0.1}
            >
              {caseStudies.map((cs) => (
                <StaggerItem key={cs.company}>
                  <div className="bg-background border border-border rounded-2xl overflow-hidden h-full flex flex-col hover:border-secondary/40 transition-colors">
                    {/* Header */}
                    <div className="p-6 border-b border-border">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground">
                            {cs.company}
                          </h3>
                          <span className="text-xs text-muted-foreground">
                            Infissi e Serramenti
                          </span>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-black text-secondary">
                          {cs.highlight}
                        </p>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex-1">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {cs.description}
                      </p>
                      <div className="p-3 bg-secondary/5 border border-secondary/10 rounded-lg">
                        <p className="text-xs text-foreground/80 italic">
                          "{cs.testimonial}"
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          -- {cs.author}, {cs.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimatedSection className="mt-10 text-center">
              <Link to="/casi-studio">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-secondary/40 text-secondary hover:bg-secondary/10"
                >
                  Vedi tutti i casi studio
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            ADDITIONAL SEO CONTENT
        ════════════════════════════════════════════════════ */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
                  Marketing per Serramentisti:{" "}
                  <span className="text-secondary">
                    perche e diverso dal marketing generico
                  </span>
                </h2>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Vendere serramenti e infissi non e come vendere scarpe online. Il
                    cliente che deve sostituire le finestre di casa investe in media tra
                    i 5.000 e i 30.000 euro: una decisione importante che richiede
                    tempo, fiducia e competenza. Per questo il marketing per
                    serramentisti richiede un approccio completamente diverso da quello
                    che propongono le agenzie generaliste.
                  </p>
                  <p>
                    Il percorso d'acquisto di chi cerca infissi nuovi inizia quasi
                    sempre online: una ricerca su Google per confrontare materiali e
                    prezzi, un video su YouTube per capire le differenze tra PVC,
                    alluminio e legno, un post su Facebook che mostra il prima e dopo di
                    un'installazione. Se il tuo showroom non e presente in ognuno di
                    questi touchpoint, stai perdendo clienti ogni giorno.
                  </p>
                  <p>
                    Marketing Edile ha sviluppato un sistema specifico per il settore
                    serramenti che copre l'intero funnel di vendita:{" "}
                    <strong className="text-foreground">
                      campagne pubblicitarie mirate
                    </strong>{" "}
                    per intercettare proprietari in fase di ristrutturazione,{" "}
                    <strong className="text-foreground">
                      contenuti video professionali
                    </strong>{" "}
                    per mostrare la qualita dei tuoi prodotti,{" "}
                    <strong className="text-foreground">
                      landing page ottimizzate
                    </strong>{" "}
                    per convertire il traffico in appuntamenti, e{" "}
                    <strong className="text-foreground">SEO locale</strong> per
                    dominare le ricerche nella tua zona.
                  </p>
                  <p>
                    La differenza fondamentale? Lavoriamo{" "}
                    <Link
                      to="/prezzi"
                      className="text-secondary underline underline-offset-4 hover:text-secondary/80"
                    >
                      solo a percentuale sulle vendite
                    </Link>
                    . Non ti chiediamo un canone mensile fisso da pagare indipendentemente
                    dai risultati. Il nostro guadagno dipende interamente dalla tua
                    crescita, e questo cambia tutto: ogni euro che investiamo nelle tue
                    campagne e ottimizzato per generare il massimo ritorno, perche il
                    nostro compenso dipende dalle commesse che chiudi tu.
                  </p>
                  <p>
                    Il nostro fondatore, Florin Andriciuc, non e solo un esperto di
                    marketing: possiede un'azienda di serramenti che ha generato oltre 2
                    milioni di euro di vendite in 2 anni. Questa esperienza diretta nel
                    settore significa che capiamo le sfide che affronti quotidianamente
                    — dalla gestione dei sopralluoghi alla chiusura dei preventivi,
                    dalla scelta dei fornitori alla gestione delle posature.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "marketing serramenti",
                    "pubblicita showroom infissi",
                    "lead generation serramentisti",
                    "vendere infissi online",
                    "clienti per serramentisti",
                    "marketing infissi",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-card border border-border rounded-full text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            FAQ SECTION
        ════════════════════════════════════════════════════ */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
                  FAQ
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                  DOMANDE FREQUENTI SUL{" "}
                  <span className="text-secondary">MARKETING PER SERRAMENTISTI</span>
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Le risposte alle domande che ci fanno piu spesso i titolari di
                  showroom di infissi e serramenti.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="max-w-3xl mx-auto space-y-3">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFAQ === index}
                    onToggle={() =>
                      setOpenFAQ(openFAQ === index ? null : index)
                    }
                  />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection className="mt-10 text-center">
              <p className="text-muted-foreground">
                Hai altre domande?{" "}
                <Link
                  to="/contattaci"
                  className="text-secondary font-semibold underline underline-offset-4 hover:text-secondary/80"
                >
                  Contattaci direttamente
                </Link>
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            FINAL CTA
        ════════════════════════════════════════════════════ */}
        <section className="section-padding bg-background relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-secondary/5 rounded-full blur-[120px]" />
          </div>

          <div className="container-narrow relative z-10 text-center">
            <AnimatedSection>
              <div className="max-w-2xl mx-auto">
                <MessageSquare className="w-12 h-12 text-secondary mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  VUOI CLIENTI QUALIFICATI PER IL TUO{" "}
                  <span className="text-secondary">SHOWROOM?</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                  Scopri se il tuo showroom di serramenti e in target per il nostro
                  sistema di acquisizione clienti. La valutazione e gratuita e senza
                  impegno.
                </p>
                <p className="text-muted-foreground mb-10">
                  Analizziamo il tuo mercato locale, i tuoi concorrenti e il
                  potenziale di crescita. Ti diciamo onestamente se possiamo aiutarti
                  — e come.
                </p>
                <Button
                  variant="gold"
                  size="xl"
                  className="glow-gold"
                  onClick={handleCTA}
                >
                  Richiedi la Valutazione Gratuita
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                {/* Trust indicators */}
                <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-secondary" /> 47+ aziende edili
                    ci hanno scelto
                  </span>
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-secondary" /> Nessun
                    vincolo contrattuale
                  </span>
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-secondary" /> Risposta entro
                    24h
                  </span>
                </div>

                {/* Internal links footer */}
                <div className="mt-10 pt-8 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3">
                    Approfondisci:
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <Link
                      to="/servizi"
                      className="text-secondary hover:underline underline-offset-4"
                    >
                      I nostri servizi
                    </Link>
                    <Link
                      to="/casi-studio"
                      className="text-secondary hover:underline underline-offset-4"
                    >
                      Casi studio
                    </Link>
                    <Link
                      to="/prezzi"
                      className="text-secondary hover:underline underline-offset-4"
                    >
                      Come funzionano i prezzi
                    </Link>
                    <Link
                      to="/contattaci"
                      className="text-secondary hover:underline underline-offset-4"
                    >
                      Contattaci
                    </Link>
                    <Link
                      to="/blog/marketing-locale-serramentisti-google-business-seo"
                      className="text-secondary hover:underline underline-offset-4"
                    >
                      Guida SEO per serramentisti
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Serramenti;
