import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import {
  ArrowRight,
  Check,
  X,
  AlertTriangle,
  Target,
  Users,
  Search,
  BarChart3,
  TrendingUp,
  ShieldCheck,
  Zap,
  Clock,
  ChevronDown,
  Star,
  Building2,
  Hammer,
  DollarSign,
  Phone,
  FileText,
  Eye,
  BadgeEuro,
  HardHat,
  Handshake,
  Shield,
  Flame,
  CircleDollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import {
  siteConfig,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
} from "@/lib/seo";

import cantiereImage from "@/assets/cantiere.jpg";
import heroWindowsImage from "@/assets/hero-windows.jpg";
import floPortrait from "@/assets/flo-portrait.jpg";
import teamImage from "@/assets/team.jpg";

/* ───────────────────────── FAQ DATA ───────────────────────── */

const faqs = [
  {
    question: "Quanto costa lavorare con Marketing Edile?",
    answer:
      "Zero canone fisso. Zero anticipo. Lavoriamo esclusivamente a provvigione sulle commesse che chiudi grazie ai nostri contatti. L'unica spesa a tuo carico e il budget pubblicitario (Meta, Google), che gestisci direttamente tu dal tuo account. Se non chiudi, non ci devi nulla. Questo modello ci rende l'unica agenzia in Italia che ha lo stesso identico interesse del tuo: fatturare.",
  },
  {
    question: "Come fate a portare clienti per ristrutturazioni?",
    answer:
      "Utilizziamo un sistema proprietario testato su 47+ imprese edili. Campagne Facebook, Instagram e Google Ads iper-targetizzate su proprietari di immobili nella tua zona che stanno attivamente cercando un'impresa di ristrutturazione. Ogni lead viene pre-qualificato: verifichiamo budget, tempistiche e tipo di intervento PRIMA di passartelo. Non ricevi curiosi. Ricevi persone pronte a firmare.",
  },
  {
    question: "In quanto tempo vedo i primi risultati?",
    answer:
      "I primi contatti qualificati arrivano in 7-14 giorni dall'avvio delle campagne. I primi preventivi firmati dipendono dalla tua velocita commerciale, ma la maggior parte dei nostri partner chiude la prima commessa entro 30-45 giorni. Renova Solution ha generato +500.000 euro di commesse in 12 mesi. Non parliamo di 'brand awareness' o 'engagement': parliamo di cantieri aperti e fatture emesse.",
  },
  {
    question: "Funziona anche per imprese piccole o appena avviate?",
    answer:
      "Si, a patto che tu abbia la capacita di gestire i lavori che arrivano. Non ci interessa la dimensione della tua impresa: ci interessa che tu sappia fare bene il tuo mestiere e che abbia la struttura per gestire almeno 3-5 cantieri in contemporanea. Facciamo una valutazione gratuita iniziale proprio per capire se sei in target. Non lavoriamo con tutti: selezioniamo i partner con cui possiamo generare risultati reali.",
  },
  {
    question: "Perche dovrei fidarmi di voi e non di un'altra agenzia?",
    answer:
      "Perche noi NON siamo un'agenzia tradizionale. Non ti chiediamo 3.000 euro al mese per fare 'social media management'. Non ti facciamo belle presentazioni PowerPoint. Il padre del nostro fondatore ha un'impresa edile. Noi stessi abbiamo un'azienda di serramenti con oltre 2 milioni di venduto. Conosciamo i capitolati, i SAL, le varianti in corso d'opera. E soprattutto: lavoriamo a provvigione. Se non guadagni tu, non guadagniamo noi. Quale altra agenzia ti offre questo?",
  },
  {
    question: "Che zona coprite?",
    answer:
      "Tutta Italia. Il nostro sistema funziona su base locale: creiamo campagne geo-targetizzate sulla tua area operativa, che sia una singola provincia o un'intera regione. Abbiamo partner attivi dal Trentino alla Sicilia. La chiave non e la zona: e la qualita del tuo lavoro e la tua capacita di convertire i contatti in commesse.",
  },
  {
    question: "Devo avere un sito web per iniziare?",
    answer:
      "No. Creiamo noi landing page ad alta conversione specifiche per il settore ristrutturazioni. Sono pagine progettate con un unico obiettivo: trasformare il visitatore in un contatto qualificato. Se hai gia un sito, lo integriamo nel sistema. Ma non e un requisito. Abbiamo partner che hanno iniziato senza nemmeno un sito e oggi fatturano centinaia di migliaia di euro grazie ai nostri lead.",
  },
  {
    question: "Come gestite la spesa pubblicitaria?",
    answer:
      "Il budget pubblicitario e tuo: lo gestisci direttamente dal tuo account Meta Business e Google Ads. Tu decidi quanto investire, tu vedi esattamente dove va ogni centesimo. Noi ci occupiamo di creare, ottimizzare e gestire le campagne. Non tocchiamo i tuoi soldi. Questo e fondamentale: molte agenzie gestiscono il budget dei clienti e non rendicontano. Noi crediamo nella trasparenza totale.",
  },
];

/* ───────────────────────── TRUTH BOMBS ───────────────────────── */

const truthBombs = [
  {
    icon: DollarSign,
    title: "Ti spillano 3-5.000 euro al mese",
    description:
      "Canone fisso. Ogni mese. Che tu abbia risultati o no. Il loro conto in banca cresce, il tuo resta uguale. Ti dicono che 'serve tempo', che 'i risultati arrivano'. Intanto i mesi passano. E i soldi pure.",
  },
  {
    icon: FileText,
    title: "Ti fanno bei report, ma il telefono non squilla",
    description:
      "Impressions. Reach. Engagement rate. Click-through rate. Ti mandano PDF colorati pieni di numeri che non significano NULLA. Sai cosa manca sempre in quei report? Il fatturato generato. Perche e zero.",
  },
  {
    icon: Building2,
    title: "Non sanno cos'e un capitolato",
    description:
      "Ieri facevano marketing per il ristorante, oggi per te, domani per il dentista. Non hanno mai visto un cantiere. Non sanno la differenza tra un SAL e un computo metrico. Come possono vendere il TUO servizio se non lo capiscono?",
  },
  {
    icon: Users,
    title: "Ti portano lead spazzatura",
    description:
      "Curiosi. Perditempo. Gente che vuole 'solo un'idea di prezzo'. Anziani che cliccano per sbaglio. E tu perdi ore a richiamare persone che non compreranno MAI. Ogni lead spazzatura ti costa tempo, benzina e frustrazione.",
  },
];

/* ───────────────────────── PROCESS STEPS ───────────────────────── */

const processSteps = [
  {
    number: "01",
    title: "Analisi Spietata",
    description:
      "Studiamo il tuo mercato locale come un cecchino studia il bersaglio. Concorrenti, prezzi medi, domanda reale, keyword. Identifichiamo ESATTAMENTE dove si nascondono i tuoi prossimi clienti e come strapparli alla concorrenza.",
    icon: Search,
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/30",
  },
  {
    number: "02",
    title: "Macchina di Acquisizione",
    description:
      "Costruiamo landing page che convertono, campagne chirurgiche su Facebook/Instagram/Google, e un sistema di pre-qualificazione automatico. Ogni contatto che arriva ha budget, tempistica e intenzione reale di ristrutturare.",
    icon: Target,
    color: "text-secondary",
    bg: "bg-secondary/10 border-secondary/30",
  },
  {
    number: "03",
    title: "Lead Caldi Sul Tuo Telefono",
    description:
      "Ricevi direttamente sul telefono contatti di proprietari di casa nella tua zona che vogliono ristrutturare ORA. Non tra sei mesi. ORA. Pre-qualificati, con budget confermato, pronti per il sopralluogo.",
    icon: Phone,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/30",
  },
  {
    number: "04",
    title: "Tu Chiudi, Noi Cresciamo Insieme",
    description:
      "Fai il sopralluogo, presenti il preventivo, chiudi la commessa. Paghi la nostra provvigione SOLO sulla commessa firmata. Poi il sistema ricomincia. Piu chiudi, piu cresci. Piu cresci, piu vinciamo entrambi.",
    icon: Handshake,
    color: "text-secondary",
    bg: "bg-secondary/10 border-secondary/30",
  },
];

/* ───────────────────────── STATS ───────────────────────── */

const stats = [
  { value: "€60M+", label: "Generati", detail: "Fatturato totale generato per i nostri partner" },
  { value: "47+", label: "Imprese Edili", detail: "Aziende che ci hanno scelto con risultati documentati" },
  { value: "+€500K", label: "Renova Solution", detail: "Commesse generate in 12 mesi di collaborazione" },
  { value: "€0", label: "Canone Fisso", detail: "Paghi solo a provvigione sulle commesse chiuse" },
];

/* ───────────────────────── COMPARISON ───────────────────────── */

const comparisonRows = [
  { feature: "Modello di pagamento", traditional: "Canone fisso 3-5K/mese", us: "Solo provvigione sulle vendite" },
  { feature: "Rischio per te", traditional: "ALTO - paghi anche se non vendi", us: "ZERO - se non chiudi, non paghi" },
  { feature: "Conoscenza del settore edile", traditional: "Generalisti, nessuna esperienza", us: "Fondatore figlio di impresario edile" },
  { feature: "Tipo di lead", traditional: "Curiosi, perditempo, clic a caso", us: "Pre-qualificati con budget confermato" },
  { feature: "Report mensile", traditional: "PDF di vanity metrics inutili", us: "Fatturato generato, commesse chiuse" },
  { feature: "Tempo per i primi risultati", traditional: "'Ci vuole tempo' (6-12 mesi)", us: "Primi lead in 7-14 giorni" },
  { feature: "Se non funziona", traditional: "Continui a pagare il canone", us: "Non ci devi un centesimo" },
  { feature: "Allineamento interessi", traditional: "Loro guadagnano comunque", us: "Guadagniamo solo se guadagni tu" },
];

/* ───────────────────────── CROSS LINKS ───────────────────────── */

const crossLinks = [
  {
    title: "Serramenti & Infissi",
    description: "Lead qualificati per showroom e posatori di serramenti.",
    href: "/settori/serramenti",
    icon: Eye,
  },
  {
    title: "Fotovoltaico",
    description: "Contatti di proprietari pronti a installare impianti fotovoltaici.",
    href: "/settori/fotovoltaico",
    icon: Zap,
  },
  {
    title: "Coperture e Tetti",
    description: "Commesse per imprese specializzate in tetti e coperture.",
    href: "/settori/tetti",
    icon: Shield,
  },
  {
    title: "Impiantisti",
    description: "Lead generation per impiantisti termoidraulici ed elettrici.",
    href: "/settori/impiantisti",
    icon: Flame,
  },
];

/* ───────────────────────── FAQ ACCORDION ───────────────────────── */

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

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
═══════════════════════════════════════════════════════════════ */

const Ristrutturazioni = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Marketing Ristrutturazioni | Clienti"
        description="Lead generation per imprese di ristrutturazione. Paghi solo a provvigione. 47+ aziende, 60M+ generati. Zero canone fisso."
        keywords={[
          "marketing ristrutturazioni",
          "lead generation ristrutturazioni",
          "clienti impresa ristrutturazione",
          "marketing imprese edili",
          "trovare clienti ristrutturazione",
          "pubblicita impresa edile",
        ]}
        url={`${siteConfig.url}/settori/ristrutturazioni`}
        jsonLd={[
          generateBreadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Settori", url: `${siteConfig.url}/settori` },
            { name: "Ristrutturazioni", url: `${siteConfig.url}/settori/ristrutturazioni` },
          ]),
          generateFAQSchema(faqs),
          generateServiceSchema({
            name: "Lead Generation per Imprese di Ristrutturazione",
            description:
              "Sistema di acquisizione clienti a provvigione per imprese di ristrutturazione italiane. Lead pre-qualificati, zero canone fisso, paghi solo sulle commesse chiuse.",
            url: `${siteConfig.url}/settori/ristrutturazioni`,
          }),
        ]}
      />

      <Navbar />

      <main className="overflow-hidden">
        {/* ════════════════════════════════════════════════════════
            1. HERO - cantiere.jpg background
        ════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={cantiereImage}
              alt="Cantiere di ristrutturazione edile - Marketing Edile porta clienti qualificati alle imprese di ristrutturazione"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-background" />
          </div>

          <div className="container-narrow relative z-10 text-center pt-32 pb-20 px-6">
            <AnimatedSection>
              {/* Badge provvigione */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary/20 border-2 border-secondary rounded-full text-secondary text-sm font-black mb-8 uppercase tracking-widest backdrop-blur-sm"
              >
                <CircleDollarSign className="w-5 h-5" />
                LAVORIAMO A PROVVIGIONE
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                BASTA BUTTARE SOLDI IN{" "}
                <span className="text-secondary">AGENZIE CHE NON CAPISCONO</span>{" "}
                LE RISTRUTTURAZIONI
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-4 leading-relaxed font-medium">
                Mentre la tua agenzia "creativa" brucia i tuoi soldi in post su Instagram
                che non generano una singola telefonata, i tuoi concorrenti stanno chiudendo
                le commesse che dovevano essere TUE.
              </p>

              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
                Marketing Edile e l'unica agenzia in Italia specializzata nell'edilizia
                che lavora{" "}
                <strong className="text-secondary">SOLO a provvigione sulle commesse chiuse</strong>.
                Zero canone fisso. Zero anticipo. Spesa pubblicitaria tua, risultati nostri.{" "}
                <Link
                  to="/casi-studio"
                  className="text-secondary underline underline-offset-4 hover:text-secondary/80 transition-colors"
                >
                  47+ imprese edili
                </Link>{" "}
                lo confermano.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link to="/#candidati">
                  <Button variant="gold" size="xl" className="glow-gold text-lg">
                    Candidati Ora - E Gratis
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Social proof badges */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
                <span className="flex items-center gap-2 backdrop-blur-sm bg-white/5 px-3 py-1.5 rounded-full">
                  <ShieldCheck className="w-4 h-4 text-secondary" /> Zero canone fisso
                </span>
                <span className="flex items-center gap-2 backdrop-blur-sm bg-white/5 px-3 py-1.5 rounded-full">
                  <Clock className="w-4 h-4 text-secondary" /> Primi lead in 7-14 giorni
                </span>
                <span className="flex items-center gap-2 backdrop-blur-sm bg-white/5 px-3 py-1.5 rounded-full">
                  <Star className="w-4 h-4 text-secondary" /> €60M+ generati
                </span>
                <span className="flex items-center gap-2 backdrop-blur-sm bg-white/5 px-3 py-1.5 rounded-full">
                  <HardHat className="w-4 h-4 text-secondary" /> Specializzati in edilizia
                </span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            2. LA VERITA SCOMODA - Perche le agenzie falliscono
        ════════════════════════════════════════════════════════ */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-xs font-black uppercase tracking-widest mb-4">
                  <AlertTriangle className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                  La Verita Scomoda
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                  LA TUA AGENZIA TI STA{" "}
                  <span className="text-red-400">RUBANDO</span> SOLDI.
                  <br />
                  E LO SAI.
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Paghi 3.000, 4.000, 5.000 euro al mese. Ti mandano report pieni di numeri
                  incomprensibili. Ma il telefono non squilla. Le commesse non arrivano.
                  E quando chiedi spiegazioni, ti dicono che "ci vuole tempo".
                  Ecco cosa sta REALMENTE succedendo.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.12}>
              {truthBombs.map((bomb) => (
                <StaggerItem key={bomb.title}>
                  <motion.div
                    whileHover={{
                      borderColor: "hsl(0, 70%, 50%)",
                      scale: 1.02,
                    }}
                    transition={{ duration: 0.2 }}
                    className="p-7 bg-background border border-border rounded-2xl h-full hover:shadow-[0_8px_30px_-10px_rgba(239,68,68,0.15)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center shrink-0">
                        <bomb.icon className="w-7 h-7 text-red-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-foreground mb-2">
                          {bomb.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {bomb.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimatedSection delay={0.3}>
              <div className="mt-12 p-8 bg-red-500/5 border border-red-500/20 rounded-2xl text-center">
                <p className="text-xl md:text-2xl font-black text-foreground mb-2">
                  Quanti altri mesi vuoi buttare nel water?
                </p>
                <p className="text-muted-foreground text-lg">
                  Ogni mese che passa con un'agenzia che non produce risultati e un mese di commesse
                  perse, fatturato bruciato, e concorrenti che ti sorpassano.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            3. PHOTO SECTION - "Noi il cantiere lo conosciamo"
        ════════════════════════════════════════════════════════ */}
        <section className="relative py-0 overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            {/* Image half */}
            <div className="relative h-[400px] lg:h-auto">
              <img
                src={cantiereImage}
                alt="Cantiere di ristrutturazione - Marketing Edile conosce il settore edile dall'interno"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/30 lg:to-background/80" />
            </div>

            {/* Content half */}
            <div className="flex items-center px-6 lg:px-16 py-16 lg:py-20 bg-background">
              <AnimatedSection direction="right">
                <span className="inline-block px-4 py-1.5 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-xs font-black uppercase tracking-widest mb-6">
                  <HardHat className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                  Non siamo un'agenzia qualunque
                </span>

                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                  NOI IL CANTIERE{" "}
                  <span className="text-secondary">LO CONOSCIAMO</span>
                </h2>

                <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Il padre del nostro fondatore ha un'impresa edile. Noi stessi gestiamo
                    un'azienda di serramenti con{" "}
                    <strong className="text-foreground">oltre 2 milioni di euro di venduto</strong>.
                    Non siamo markettari improvvisati che hanno letto due libri sul digital marketing.
                  </p>
                  <p>
                    Sappiamo cosa significa gestire un cantiere che va lungo. Sappiamo cosa sono
                    i SAL, i capitolati, le varianti in corso d'opera. Sappiamo che il sabato
                    mattina a volte sei in cantiere a risolvere problemi mentre l'agenzia "creativa"
                    e in vacanza.
                  </p>
                  <p className="text-foreground font-bold text-xl">
                    Ecco perche il nostro marketing funziona: parliamo la stessa lingua.
                    E soprattutto, mettiamo la nostra pelle nel gioco.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-card border border-border rounded-xl text-center">
                    <p className="text-2xl font-black text-secondary">€60M+</p>
                    <p className="text-sm text-muted-foreground">fatturato generato</p>
                  </div>
                  <div className="p-4 bg-card border border-border rounded-xl text-center">
                    <p className="text-2xl font-black text-secondary">47+</p>
                    <p className="text-sm text-muted-foreground">imprese edili partner</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            4. IL NOSTRO SISTEMA - 4 steps
        ════════════════════════════════════════════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-xs font-black uppercase tracking-widest mb-4">
                  <Target className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                  Il Sistema
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                  COME PORTIAMO{" "}
                  <span className="text-secondary">CANTIERI REALI</span>{" "}
                  ALLA TUA IMPRESA
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Niente magie, niente trucchi. Un sistema collaudato su 47+ imprese edili
                  che trasforma la spesa pubblicitaria in commesse firmate. Ecco come funziona,
                  passo per passo.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <AnimatedSection key={step.number} delay={index * 0.15}>
                  <motion.div
                    whileHover={{ scale: 1.03, borderColor: "hsl(var(--secondary))" }}
                    transition={{ duration: 0.2 }}
                    className="relative p-8 bg-card border border-border rounded-2xl h-full"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className={`w-14 h-14 ${step.bg} border rounded-xl flex items-center justify-center`}
                      >
                        <step.icon className={`w-7 h-7 ${step.color}`} />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                          Step {step.number}
                        </span>
                        <h3 className="text-xl font-black text-foreground">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {step.description}
                    </p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.5}>
              <div className="mt-12 text-center">
                <Link to="/servizi">
                  <Button variant="gold" size="xl" className="glow-gold">
                    Scopri Tutti i Nostri Servizi
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            5. STATS SECTION - hero-windows.jpg background
        ════════════════════════════════════════════════════════ */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroWindowsImage}
              alt="Edificio moderno - risultati marketing ristrutturazioni imprese edili"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>

          <div className="container-narrow relative z-10 px-6">
            <AnimatedSection>
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                  I NUMERI NON MENTONO.{" "}
                  <span className="text-secondary">LE AGENZIE SI.</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Questi sono risultati REALI, documentati e verificabili.
                  Non vanity metrics. Non impressions. Fatturato vero generato per imprese edili vere.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.1}>
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <p className="text-3xl md:text-4xl font-black text-secondary mb-1">
                      {stat.value}
                    </p>
                    <p className="text-white font-bold text-sm uppercase tracking-wider mb-2">
                      {stat.label}
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {stat.detail}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimatedSection delay={0.4}>
              <div className="mt-12 text-center">
                <Link
                  to="/casi-studio"
                  className="inline-flex items-center gap-2 text-secondary font-bold hover:underline underline-offset-4 transition-colors text-lg"
                >
                  Leggi i Casi Studio Completi
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            6. FOUNDER SECTION - flo-portrait.jpg
        ════════════════════════════════════════════════════════ */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Portrait */}
              <AnimatedSection direction="left" className="lg:col-span-2">
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-secondary/30 shadow-[0_20px_60px_-15px_hsl(var(--secondary)/0.2)]">
                    <img
                      src={floPortrait}
                      alt="Florin Andriciuc - Fondatore Marketing Edile, esperto marketing ristrutturazioni e imprese edili"
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Floating card */}
                  <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-xl">
                    <p className="text-sm font-bold text-foreground">Florin Andriciuc</p>
                    <p className="text-xs text-muted-foreground">Fondatore, Marketing Edile</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Content */}
              <AnimatedSection direction="right" className="lg:col-span-3">
                <span className="inline-block px-4 py-1.5 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-xs font-black uppercase tracking-widest mb-6">
                  Chi c'e Dietro
                </span>

                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 leading-tight">
                  "LE AGENZIE TRADIZIONALI{" "}
                  <span className="text-secondary">MI FACEVANO SCHIFO</span>.
                  <br />
                  COSI HO CREATO QUELLA CHE AVREI VOLUTO AVERE."
                </h2>

                <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                  <p>
                    Mio padre ha un'impresa edile. Ho visto con i miei occhi cosa significa
                    lavorare 12 ore al giorno in cantiere e poi tornare a casa senza sapere
                    da dove arrivera la prossima commessa.
                  </p>
                  <p>
                    Ho visto mio padre pagare agenzie che non capivano nulla di edilizia.
                    Che facevano campagne generiche. Che parlavano di "brand awareness"
                    mentre lui aveva bisogno di CANTIERI.
                  </p>
                  <p>
                    Cosi ho costruito Marketing Edile con una regola semplice:{" "}
                    <strong className="text-foreground">
                      lavoriamo solo a provvigione sulle commesse chiuse
                    </strong>.
                    Se non ti portiamo lavoro, non ti costa un centesimo.
                    Questo ci ha costretto a diventare BRAVI.
                    Non a fare bei post. A portare risultati.
                  </p>
                  <p className="text-foreground font-bold text-lg">
                    Oggi gestiamo anche un'azienda di serramenti con 2M+ di venduto.
                    Non siamo markettari che giocano con i tuoi soldi.
                    Siamo imprenditori edili che fanno marketing.
                  </p>
                </div>

                <div className="mt-8">
                  <Link to="/#candidati">
                    <Button variant="gold" size="xl" className="glow-gold">
                      Parla Direttamente con Noi
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            7. TEAM PHOTO BANNER
        ════════════════════════════════════════════════════════ */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={teamImage}
              alt="Team Marketing Edile - specialisti in lead generation per ristrutturazioni e imprese edili"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="container-narrow relative z-10 text-center px-6">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                UN TEAM CHE PARLA LA TUA LINGUA
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
                Non assumiamo neolaureati in comunicazione.
                Il nostro team conosce il settore edile, ha visitato cantieri, sa leggere un computo metrico.
                Quando parli con noi, non devi spiegare cosa fai.{" "}
                <strong className="text-white">Lo sappiamo gia.</strong>
              </p>
              <Link to="/contattaci">
                <Button variant="gold" size="xl" className="glow-gold">
                  Contattaci Ora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            8. COMPARISON TABLE
        ════════════════════════════════════════════════════════ */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-14">
                <span className="inline-block px-4 py-1.5 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-xs font-black uppercase tracking-widest mb-4">
                  <BarChart3 className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                  Il Confronto
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                  AGENZIA TRADIZIONALE vs{" "}
                  <span className="text-secondary">MARKETING EDILE</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Metti a confronto quello che paghi oggi con quello che potresti avere.
                  Poi deciditi tu.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              {/* Desktop table */}
              <div className="hidden md:block overflow-hidden rounded-2xl border border-border">
                <table className="w-full">
                  <thead>
                    <tr className="bg-background">
                      <th className="text-left p-5 text-foreground font-bold text-sm uppercase tracking-wider w-1/3">
                        Caratteristica
                      </th>
                      <th className="text-center p-5 text-red-400 font-black text-sm uppercase tracking-wider w-1/3 bg-red-500/5">
                        <X className="w-5 h-5 inline-block mr-1 -mt-0.5" />
                        Agenzia Tradizionale
                      </th>
                      <th className="text-center p-5 text-secondary font-black text-sm uppercase tracking-wider w-1/3 bg-secondary/5">
                        <Check className="w-5 h-5 inline-block mr-1 -mt-0.5" />
                        Marketing Edile
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, index) => (
                      <tr
                        key={row.feature}
                        className={index % 2 === 0 ? "bg-card" : "bg-background/50"}
                      >
                        <td className="p-5 text-foreground font-semibold text-sm">
                          {row.feature}
                        </td>
                        <td className="p-5 text-center text-red-400/80 text-sm bg-red-500/5">
                          {row.traditional}
                        </td>
                        <td className="p-5 text-center text-secondary font-semibold text-sm bg-secondary/5">
                          {row.us}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden space-y-4">
                {comparisonRows.map((row) => (
                  <div
                    key={row.feature}
                    className="p-5 bg-background border border-border rounded-2xl"
                  >
                    <p className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
                      {row.feature}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                        <p className="text-sm text-red-400/80">{row.traditional}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                        <p className="text-sm text-secondary font-semibold">{row.us}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="mt-12 text-center">
                <p className="text-xl font-black text-foreground mb-6">
                  La scelta e ovvia. L'unica domanda e:{" "}
                  <span className="text-secondary">quanto tempo vuoi ancora aspettare?</span>
                </p>
                <Link to="/prezzi">
                  <Button variant="gold" size="xl" className="glow-gold">
                    Scopri il Nostro Modello
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            9. FAQ SECTION
        ════════════════════════════════════════════════════════ */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-14">
                <span className="inline-block px-4 py-1.5 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-xs font-black uppercase tracking-widest mb-4">
                  Domande Frequenti
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 leading-tight">
                  LE DOMANDE CHE CI FANNO{" "}
                  <span className="text-secondary">TUTTI</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Risposte dirette, senza giri di parole. Come facciamo tutto.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
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
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            10. FINAL CTA - URGENCY
        ════════════════════════════════════════════════════════ */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-background to-background" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[400px] bg-secondary/8 rounded-full blur-[120px]" />

          <div className="container-narrow relative z-10 text-center px-6">
            <AnimatedSection>
              <BadgeEuro className="w-16 h-16 text-secondary mx-auto mb-6" />

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
                OGNI GIORNO CHE ASPETTI,
                <br />
                <span className="text-secondary">UN TUO CONCORRENTE CHIUDE</span>
                <br />
                LA COMMESSA CHE ERA TUA.
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
                Non lavoriamo con tutti. Accettiamo massimo 3 nuove imprese di ristrutturazione
                al mese per garantire risultati a ogni partner. La valutazione e gratuita
                e senza impegno. Ma i posti no.
              </p>

              <p className="text-foreground font-bold text-xl mb-10">
                Zero canone fisso. Zero anticipo. Paghi SOLO a provvigione sulle commesse chiuse.
                <br />
                <span className="text-muted-foreground font-normal text-base">
                  Spesa pubblicitaria esclusa (e tua, la gestisci tu).
                </span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link to="/#candidati">
                  <Button variant="gold" size="xl" className="glow-gold text-lg px-10 py-5">
                    Candidati Ora - Valutazione Gratuita
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-secondary" /> Nessun vincolo contrattuale
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-secondary" /> Risposta entro 24h
                </span>
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-secondary" /> Valutazione 100% gratuita
                </span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            11. CROSS-LINKS TO OTHER SECTORS
        ════════════════════════════════════════════════════════ */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                  ALTRI SETTORI CHE SERVIAMO
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Marketing Edile e specializzato in tutto il mondo dell'edilizia.
                  Scopri come aiutiamo anche questi settori.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
              {crossLinks.map((link) => (
                <StaggerItem key={link.href}>
                  <Link to={link.href} className="block h-full">
                    <motion.div
                      whileHover={{
                        borderColor: "hsl(var(--secondary))",
                        y: -4,
                      }}
                      transition={{ duration: 0.2 }}
                      className="p-6 bg-background border border-border rounded-2xl h-full hover:shadow-[0_8px_30px_-10px_hsl(var(--secondary)/0.15)] transition-shadow"
                    >
                      <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center mb-4">
                        <link.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {link.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {link.description}
                      </p>
                      <span className="text-secondary text-sm font-semibold flex items-center gap-1">
                        Scopri di piu <ArrowRight className="w-4 h-4" />
                      </span>
                    </motion.div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Internal links for SEO */}
            <AnimatedSection delay={0.3}>
              <div className="mt-12 pt-8 border-t border-border flex flex-wrap justify-center gap-6 text-sm">
                <Link
                  to="/servizi"
                  className="text-muted-foreground hover:text-secondary transition-colors underline-offset-4 hover:underline"
                >
                  I Nostri Servizi
                </Link>
                <Link
                  to="/prezzi"
                  className="text-muted-foreground hover:text-secondary transition-colors underline-offset-4 hover:underline"
                >
                  Modello a Provvigione
                </Link>
                <Link
                  to="/casi-studio"
                  className="text-muted-foreground hover:text-secondary transition-colors underline-offset-4 hover:underline"
                >
                  Casi Studio
                </Link>
                <Link
                  to="/blog"
                  className="text-muted-foreground hover:text-secondary transition-colors underline-offset-4 hover:underline"
                >
                  Blog Marketing Edile
                </Link>
                <Link
                  to="/contattaci"
                  className="text-muted-foreground hover:text-secondary transition-colors underline-offset-4 hover:underline"
                >
                  Contattaci
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Ristrutturazioni;
