import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import {
  ArrowRight,
  Check,
  X,
  AlertTriangle,
  Target,
  Search,
  BarChart3,
  Handshake,
  Phone,
  TrendingUp,
  Users,
  Euro,
  Clock,
  ChevronDown,
  Star,
  ShieldAlert,
  CloudRain,
  Flame,
  Droplets,
  Wrench,
  ThumbsDown,
  Ban,
  Eye,
  CalendarClock,
  Zap,
  FileWarning,
  Camera,
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import tettiHero from "@/assets/tetti-hero.jpg";
import floPortrait from "@/assets/flo-portrait.jpg";
import teamImage from "@/assets/team.jpg";
import logoRenovaTetto from "@/assets/renova_tetto.png";

/* ══════════════════════════════════════════════════════════
   DATA
   ══════════════════════════════════════════════════════════ */

const truthCards = [
  {
    icon: Ban,
    title: "Non sanno cos'è un colmo",
    description:
      "La tua agenzia attuale non ha mai messo piede su un tetto. Non sa la differenza tra una tegola portoghese e una marsigliese. Ti chiede 3.000-5.000 euro al mese per mostrarti report pieni di click, impression e \"brand awareness\" — mentre i tuoi cantieri restano vuoti e i tuoi operai stanno a casa.",
  },
  {
    icon: ThumbsDown,
    title: "Lead spazzatura",
    description:
      "Ti mandano contatti che chiedono preventivi per \"riparare una tegola\" o gente che vuole solo il prezzo al metro quadro per confrontarlo con altri 10 concorrenti. Non sono lead — sono perditempo. Non hanno la minima idea di come qualificare un contatto che ha bisogno di un rifacimento completo da 15.000-40.000 euro.",
  },
  {
    icon: CloudRain,
    title: "Ti lasciano solo d'inverno",
    description:
      "Quando piove, tutti cercano chi ripara il tetto. Quando c'è il sole, nessuno ci pensa. La tua agenzia non ha un piano per generare lavoro tutto l'anno. Risultato? 4 mesi di picco, 4 mesi di vuoto totale, 4 mesi di agonia. E il canone mensile lo paghi sempre — 12 mesi su 12.",
  },
  {
    icon: FileWarning,
    title: "Zero strategia amianto",
    description:
      "Le bonifica amianto sono le commesse più redditizie del settore tetti: ticket medio 25.000-60.000 euro. Ma la tua agenzia generalista non sa nemmeno che esistono. Non ha mai creato una campagna per intercettare proprietari con coperture in eternit. Ti sta lasciando sul tavolo le commesse migliori.",
  },
];

const systemSteps = [
  {
    icon: Search,
    step: "01",
    title: "Analisi e posizionamento",
    description:
      "Studiamo la tua zona, i tuoi concorrenti, i tuoi margini. Identifichiamo le commesse più redditizie per la tua azienda — rifacimenti completi, bonifica amianto, coibentazione, lattoneria. Costruiamo un posizionamento che ti separa dalla guerra dei preventivi al ribasso.",
  },
  {
    icon: Target,
    step: "02",
    title: "Campagne chirurgiche",
    description:
      "Lanciamo campagne su Google e Meta che intercettano chi ha BISOGNO di rifare il tetto — non curiosi. Doppia linea: emergenze (infiltrazioni, danni maltempo) e lavori pianificati (ristrutturazioni, efficientamento energetico). Ogni euro di spesa pubblicitaria è tracciato fino alla commessa chiusa.",
  },
  {
    icon: Handshake,
    step: "03",
    title: "Lead pre-qualificati",
    description:
      "Ogni contatto passa un processo di qualificazione prima di arrivare a te. Sappiamo già budget, tipo di intervento, tempistica e indirizzo. Tu ricevi solo persone pronte a far partire il cantiere — non perditempo che vogliono \"un'idea di prezzo\". Il tuo tempo vale troppo per sprecarlo.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Ottimizzazione continua",
    description:
      "Ogni settimana analizziamo i numeri: costo per lead, tasso di chiusura, valore medio commessa, ROI. Tagliamo ciò che non funziona, raddoppiamo ciò che porta cantieri. Il sistema migliora ogni mese — e con esso il tuo fatturato. Confronto settimanale con il tuo referente dedicato.",
  },
];

const stats = [
  {
    value: "+€600K",
    label: "Fatturato generato",
    detail: "Renova Tetto in 12 mesi",
    icon: Euro,
  },
  {
    value: "47+",
    label: "Aziende edili partner",
    detail: "In tutta Italia",
    icon: Users,
  },
  {
    value: "€60M+",
    label: "Volume totale generato",
    detail: "Per i nostri partner",
    icon: TrendingUp,
  },
  {
    value: "0€",
    label: "Canone fisso",
    detail: "Solo provvigione su chiuso",
    icon: Star,
  },
];

const comparisonRows = [
  {
    feature: "Modello di pagamento",
    traditional: "3.000-5.000 €/mese fissi",
    us: "Solo provvigione su commesse chiuse",
  },
  {
    feature: "Conoscenza del settore tetti",
    traditional: "Zero — oggi tetti, domani pizzerie",
    us: "Specializzati nell'edilizia dal 2018",
  },
  {
    feature: "Qualità dei lead",
    traditional: "Contatti freddi, curiosi, perditempo",
    us: "Pre-qualificati con budget e tempistica",
  },
  {
    feature: "Strategia amianto",
    traditional: "Non sanno cos'è l'eternit",
    us: "Campagne dedicate bonifica amianto",
  },
  {
    feature: "Lavoro stagionale",
    traditional: "Nessun piano anti-stagionalità",
    us: "Sistema per generare lead 12 mesi/anno",
  },
  {
    feature: "Reportistica",
    traditional: "Report di vanità: click e impression",
    us: "Report reali: lead, preventivi, commesse chiuse, €",
  },
  {
    feature: "Allineamento interessi",
    traditional: "Ti fatturano anche se non vendi nulla",
    us: "Se non chiudi commesse, non guadagniamo",
  },
  {
    feature: "Risultato medio",
    traditional: "\"Ci vuole tempo\" (= non funziona)",
    us: "+€600K per Renova Tetto in 12 mesi",
  },
];

const faqs = [
  {
    question: "Quanto costa lavorare con Marketing Edile per il settore tetti?",
    answer:
      "Zero euro fissi. Marketing Edile lavora esclusivamente a provvigione sulle commesse che chiudi grazie ai nostri lead. Non ci sono canoni mensili, setup fee o costi nascosti. L'unico costo a tuo carico è la spesa pubblicitaria (budget per le campagne su Google e Meta), che viene gestita in totale trasparenza. Se non chiudi commesse, non ci devi nulla. Questo modello funziona particolarmente bene per il settore tetti perché il valore medio di una commessa (€15.000-€40.000) genera margini sufficienti a rendere sostenibile la collaborazione fin dal primo cantiere chiuso.",
  },
  {
    question: "Che tipo di lavori sui tetti riuscite a generare?",
    answer:
      "Generiamo lead per tutte le tipologie di intervento su coperture: rifacimenti completi del tetto, bonifica e smaltimento amianto, coibentazione e isolamento termico, riparazione infiltrazioni, installazione linee vita, lattoneria, posa pannelli fotovoltaici su tetto. Creiamo campagne specifiche per ogni tipo di intervento, perché chi cerca una riparazione urgente per infiltrazione ha un percorso decisionale completamente diverso da chi pianifica un rifacimento completo. Questa segmentazione è ciò che rende i nostri lead molto più chiudibili rispetto a quelli generici.",
  },
  {
    question: "Come gestite la stagionalità del lavoro sui tetti?",
    answer:
      "La stagionalità è il problema numero uno delle aziende di coperture — e il motivo per cui il marketing generico fallisce nel vostro settore. Il nostro sistema prevede campagne diverse per ogni periodo dell'anno: in primavera e estate spingiamo rifacimenti completi e bonus edilizi, in autunno intercettiamo chi ha subito danni da maltempo e infiltrazioni, in inverno lavoriamo su coibentazione e isolamento termico. Il risultato è un flusso di lead costante 12 mesi all'anno. Renova Tetto, nostro partner, non ha mai avuto un mese senza cantieri da quando lavora con noi.",
  },
  {
    question: "In quanto tempo vedrò i primi cantieri dai vostri lead?",
    answer:
      "I primi lead qualificati arrivano entro 2-3 settimane dall'avvio delle campagne. Il tempo per trasformarli in cantieri aperti dipende dal tuo ciclo di vendita: per interventi urgenti (infiltrazioni, danni) il ciclo è di 1-2 settimane, per rifacimenti pianificati è di 4-8 settimane. La maggior parte dei nostri partner nel settore coperture chiude il primo cantiere entro 30-45 giorni dall'avvio. Il nostro obiettivo è portarti almeno 1-2 commesse chiuse al mese nel primo trimestre, per poi scalare.",
  },
  {
    question: "Lavorate anche con aziende che fanno bonifica amianto?",
    answer:
      "Assolutamente sì — ed è uno dei settori dove i nostri risultati sono più impressionanti. La bonifica amianto ha ticket medi tra €25.000 e €60.000, il che significa che anche una sola commessa chiusa al mese cambia completamente il fatturato. Creiamo campagne specifiche per intercettare proprietari di immobili con coperture in eternit che devono adeguarsi alla normativa o che vogliono riqualificare l'edificio. Il tasso di chiusura su questi lead è molto alto perché c'è un obbligo normativo e un'urgenza reale.",
  },
  {
    question: "Come fate a generare lead di qualità e non perditempo?",
    answer:
      "Il segreto è nel processo di qualificazione a monte. Non ci limitiamo a raccogliere nomi e numeri di telefono. Ogni lead passa attraverso un funnel che filtra: tipo di intervento richiesto, metratura indicativa, tempistica desiderata, budget disponibile, indirizzo dell'immobile. Solo chi supera tutti i criteri viene passato a te. In più, le nostre campagne sono costruite per attrarre chi ha un bisogno reale e urgente — non curiosi. Questo è possibile perché conosciamo il settore: sappiamo quali angoli di comunicazione attraggono clienti pronti a firmare e quali attirano solo perditempo.",
  },
  {
    question: "Cosa succede se i lead non chiudono?",
    answer:
      "Se non chiudi commesse, non ci devi nulla — lavoriamo a provvigione, ricordalo. Ma il punto è un altro: il nostro sistema è costruito per farti chiudere. Oltre a generare lead qualificati, ti affianchiamo nella gestione commerciale: script per le chiamate, template per i preventivi, strategie di follow-up. Se un lead non chiude, analizziamo il motivo e ottimizziamo. Ogni settimana rivediamo i numeri insieme: quanti lead, quanti preventivi inviati, quanti chiusi, a che valore. Se qualcosa non funziona, lo correggiamo in tempo reale.",
  },
  {
    question: "Lavorate con altre aziende di tetti nella mia zona?",
    answer:
      "No. Garantiamo esclusività territoriale ai nostri partner. Se lavoriamo con te nella tua provincia, non lavoriamo con un tuo concorrente diretto. Questo è fondamentale per il settore tetti dove le zone operative sono ben definite. L'esclusività territoriale è parte del nostro accordo — i lead della tua zona arrivano solo a te. Questo è anche il motivo per cui selezioniamo con attenzione i partner: lavoriamo con un numero limitato di aziende per garantire risultati reali a ciascuna.",
  },
];

const crossLinks = [
  {
    title: "Ristrutturazioni",
    href: "/settori/ristrutturazioni",
    description: "Lead per imprese di ristrutturazione edile",
  },
  {
    title: "Serramenti",
    href: "/settori/serramenti",
    description: "Clienti per showroom e posatori di infissi",
  },
  {
    title: "Fotovoltaico",
    href: "/settori/fotovoltaico",
    description: "Contatti per installatori di impianti solari",
  },
  {
    title: "Impiantisti",
    href: "/settori/impiantisti",
    description: "Lead per idraulici, elettricisti e climatizzazione",
  },
];

/* ══════════════════════════════════════════════════════════
   COMPONENT
   ══════════════════════════════════════════════════════════ */

export default function Tetti() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<string | undefined>(undefined);

  /* ── JSON-LD ─────────────────────────────────────────── */
  const serviceSchema = generateServiceSchema({
    name: "Marketing Rifacimento Tetti — Lead Generation Coperture",
    description:
      "Marketing Edile® genera lead qualificati per aziende di rifacimento tetti, bonifica amianto e coperture edili. Solo a provvigione sulle commesse chiuse.",
    url: `${siteConfig.url}/settori/tetti`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Settori", url: `${siteConfig.url}/settori` },
    { name: "Tetti", url: `${siteConfig.url}/settori/tetti` },
  ]);

  const faqSchema = generateFAQSchema(
    faqs.map((f) => ({ question: f.question, answer: f.answer }))
  );

  return (
    <>
      <SEOHead
        title="Marketing Tetti — Lead per Rifacimento Coperture"
        description="Lead qualificati per aziende di tetti e coperture. Solo a provvigione. Renova Tetto: +€600K in 12 mesi. Scopri il sistema."
        keywords={siteConfig.pageKeywords.tetti}
        url={`${siteConfig.url}/settori/tetti`}
        jsonLd={[serviceSchema, breadcrumbSchema, faqSchema]}
      />

      <Navbar />

      <main className="bg-background min-h-screen">
        {/* ═══════════════════════════════════════════════
            1. HERO
            ═══════════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={tettiHero}
              alt="Rifacimento tetto e coperture edili — lead generation per aziende di tetti"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/95" />
          </div>

          <div className="relative z-10 section-padding w-full">
            <div className="container-narrow">
              {/* Badge provvigione */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2 mb-8"
              >
                <Euro className="w-4 h-4 text-gold" />
                <span className="text-gold font-semibold text-sm tracking-wide uppercase">
                  Lavoriamo solo a provvigione — Zero fisso
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-[1.08] mb-6 max-w-4xl"
              >
                Marketing Rifacimento Tetti:{" "}
                <span className="text-gold">
                  Cantieri Pieni 12 Mesi l'Anno
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-lg sm:text-xl text-foreground/80 max-w-2xl mb-8 leading-relaxed"
              >
                Basta dipendere dalle piogge autunnali per riempire l'agenda.
                Il nostro sistema genera lead qualificati per rifacimenti tetti,
                bonifica amianto e coperture edili —{" "}
                <strong className="text-foreground">
                  e paghi solo sulle commesse che chiudi.
                </strong>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/#candidati">
                  <Button variant="gold" size="xl" className="glow-gold group">
                    Riempi i tuoi cantieri
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/casi-studio">
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-foreground/20 text-foreground hover:bg-foreground/10"
                  >
                    Vedi i risultati
                  </Button>
                </Link>
              </motion.div>

              {/* Social proof strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-12 flex flex-wrap items-center gap-6 text-sm text-foreground/80"
              >
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold" />
                  <span>Renova Tetto: +€600K in 12 mesi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold" />
                  <span>47+ aziende edili partner</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold" />
                  <span>€60M+ generati in totale</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            2. "LA VERITA'" — Why agencies fail roofers
            ═══════════════════════════════════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection className="text-center mb-16">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-4 block">
                La verità che nessuno ti dice
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-6">
                Ecco perché la tua agenzia{" "}
                <span className="text-gold">sta bruciando i tuoi soldi</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Le agenzie generaliste trattano la tua azienda di coperture come
                se fosse una pizzeria. Non capiscono il tuo settore, non
                conoscono i tuoi margini, non sanno come funziona una commessa
                da 20.000 euro. Ecco cosa ti stanno facendo.
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {truthCards.map((card) => (
                <StaggerItem key={card.title}>
                  <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-gold/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-5">
                      <card.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimatedSection delay={0.3} className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-6">
                Se ti riconosci in anche solo uno di questi punti, stai
                lasciando{" "}
                <strong className="text-foreground">
                  decine di migliaia di euro
                </strong>{" "}
                sul tavolo ogni mese.
              </p>
              <Link to="/#candidati">
                <Button variant="gold" size="xl" className="glow-gold group">
                  Smetti di buttare soldi
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            3. RENOVA TETTO — Case study
            ═══════════════════════════════════════════════ */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left — image + logo */}
              <AnimatedSection direction="left">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={teamImage}
                    alt="Team Marketing Edile — lead generation per aziende di coperture e rifacimento tetti"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/90 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <img
                      src={logoRenovaTetto}
                      alt="Renova Tetto — caso studio marketing rifacimento tetti"
                      className="h-12 mb-3 brightness-0 invert"
                    />
                    <p className="text-foreground/80 text-sm">
                      Partner dal 2023 — Settore coperture e bonifica amianto
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Right — results */}
              <AnimatedSection direction="right">
                <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-4 block">
                  Caso studio reale
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-6">
                  Renova Tetto:{" "}
                  <span className="text-gold">+€600.000</span> in 12 mesi
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Renova Tetto era un'azienda di coperture con lavoro
                  stagionale. Quattro mesi pieni, otto mesi di sofferenza. Hanno
                  provato due agenzie — soldi buttati. Poi sono arrivati da noi.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Da lavoro stagionale a cantieri 12 mesi/anno",
                    "+€600.000 di fatturato generato in 12 mesi",
                    "Commessa media passata da €12.000 a €22.000",
                    "Nuova linea bonifica amianto: +€180.000",
                    "Zero euro di canone fisso pagato a noi",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                      <span className="text-foreground font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <Link to="/casi-studio">
                  <Button variant="gold" size="xl" className="glow-gold group">
                    Leggi il caso studio completo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            4. IL NOSTRO SISTEMA — 4 steps
            ═══════════════════════════════════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection className="text-center mb-16">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-4 block">
                Il nostro sistema
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-6">
                Come riempiamo i cantieri delle aziende di{" "}
                <span className="text-gold">coperture e tetti</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Non vendiamo click. Non vendiamo "visibilità". Vendiamo
                commesse chiuse. Ecco come funziona il sistema che ha generato
                +€600K per Renova Tetto e milioni per le nostre 47+ aziende
                partner.
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 gap-8">
              {systemSteps.map((step) => (
                <StaggerItem key={step.step}>
                  <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-gold/30 transition-colors relative overflow-hidden">
                    <span className="absolute top-4 right-4 text-6xl font-black text-gold/10">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                      <step.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            5. STATS
            ═══════════════════════════════════════════════ */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-foreground leading-tight">
                I numeri parlano.{" "}
                <span className="text-gold">Le chiacchiere stanno a zero.</span>
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="bg-card border border-border rounded-2xl p-6 text-center hover:border-gold/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-gold mb-1">
                      {stat.value}
                    </div>
                    <div className="text-foreground font-semibold mb-1">
                      {stat.label}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {stat.detail}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            6. FOUNDER SECTION
            ═══════════════════════════════════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <div className="relative">
                  <img
                    src={floPortrait}
                    alt="Florin Andriciuc — fondatore Marketing Edile, esperto marketing rifacimento tetti e coperture"
                    className="rounded-2xl w-full max-w-md mx-auto"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-gold text-black rounded-xl px-5 py-3 font-bold text-sm shadow-lg">
                    Fondatore & CEO
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-4 block">
                  Chi c'è dietro il sistema
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-6">
                  Non sono un marketer che{" "}
                  <span className="text-gold">gioca a fare l'imprenditore</span>
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Mi chiamo <strong className="text-foreground">Florin Andriciuc</strong>.
                    Possiedo un'azienda di serramenti che ha generato oltre{" "}
                    <strong className="text-foreground">2 milioni di euro di vendite in 2 anni</strong>{" "}
                    — con lo stesso sistema che oggi applico alle aziende di
                    tetti e coperture.
                  </p>
                  <p>
                    Non ti parlo di teoria. Parlo di cantieri, di preventivi, di
                    clienti difficili, di margini reali. So cosa significa avere
                    gli operai a casa perché non ci sono commesse. So cosa
                    significa chiudere un lavoro da 30.000 euro con un cliente
                    che tre settimane prima non sapeva nemmeno che esistevi.
                  </p>
                  <p>
                    Per questo{" "}
                    <strong className="text-foreground">
                      lavoriamo solo a provvigione
                    </strong>
                    : perché so che il sistema funziona. Se non ti porto
                    commesse, non guadagno. Punto. Nessuna agenzia che "ci
                    crede davvero" ti chiederebbe 4.000 euro al mese fissi.
                  </p>
                </div>
                <div className="mt-8">
                  <Link to="/#candidati">
                    <Button
                      variant="gold"
                      size="xl"
                      className="glow-gold group"
                    >
                      Parla con me direttamente
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            7. COMPARISON TABLE
            ═══════════════════════════════════════════════ */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection className="text-center mb-12">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-4 block">
                Il confronto
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-6">
                Agenzia tradizionale vs{" "}
                <span className="text-gold">Marketing Edile</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left p-4 text-muted-foreground font-medium text-sm border-b border-border">
                        Caratteristica
                      </th>
                      <th className="text-left p-4 text-red-400 font-bold text-sm border-b border-border">
                        <div className="flex items-center gap-2">
                          <X className="w-4 h-4" />
                          Agenzia Tradizionale
                        </div>
                      </th>
                      <th className="text-left p-4 text-gold font-bold text-sm border-b border-border">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4" />
                          Marketing Edile
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr
                        key={row.feature}
                        className={
                          i % 2 === 0 ? "bg-card/50" : "bg-transparent"
                        }
                      >
                        <td className="p-4 text-foreground font-semibold text-sm border-b border-border/50">
                          {row.feature}
                        </td>
                        <td className="p-4 text-muted-foreground text-sm border-b border-border/50">
                          {row.traditional}
                        </td>
                        <td className="p-4 text-foreground font-medium text-sm border-b border-border/50">
                          {row.us}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="text-center mt-10">
              <Link to="/prezzi">
                <Button
                  variant="outline"
                  size="xl"
                  className="border-gold/30 text-gold hover:bg-gold/10 group"
                >
                  Scopri come funziona il modello a provvigione
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            8. FAQ
            ═══════════════════════════════════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow max-w-3xl">
            <AnimatedSection className="text-center mb-12">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-4 block">
                Domande frequenti
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-6">
                Tutto quello che devi sapere sul{" "}
                <span className="text-gold">
                  marketing per aziende di tetti
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection>
              <Accordion
                type="single"
                collapsible
                value={openFaq}
                onValueChange={setOpenFaq}
                className="space-y-4"
              >
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-card border border-border rounded-2xl px-6 overflow-hidden"
                  >
                    <AccordionTrigger className="text-foreground font-semibold text-left py-5 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            9. FINAL CTA
            ═══════════════════════════════════════════════ */}
        <section className="section-padding bg-background relative overflow-hidden">
          {/* Glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container-narrow relative z-10 text-center">
            <AnimatedSection>
              <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-4 block">
                Basta aspettare le piogge
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-6 max-w-3xl mx-auto">
                La tua azienda di coperture merita{" "}
                <span className="text-gold">cantieri pieni tutto l'anno</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
                Ogni mese che passa senza un sistema di lead generation è un
                mese di commesse perse — commesse da 15.000, 25.000, 40.000
                euro che vanno ai tuoi concorrenti. Non ti chiediamo un centesimo
                di fisso. Paghi solo quando chiudi.
              </p>
              <p className="text-foreground font-semibold text-lg mb-8">
                Una sola commessa chiusa al mese cambia tutto. E il sistema ne
                genera molte di più.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#candidati">
                  <Button variant="gold" size="xl" className="glow-gold group">
                    Candidati ora — Zero rischio
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/servizi">
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-gold/30 text-gold hover:bg-gold/10"
                  >
                    Scopri i servizi
                  </Button>
                </Link>
              </div>

              <p className="text-muted-foreground text-sm mt-6">
                Selezioniamo massimo 3 nuove aziende di coperture al mese.
                Esclusività territoriale garantita.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            10. CROSS-LINKS
            ═══════════════════════════════════════════════ */}
        <section className="section-padding bg-navy-light border-t border-border">
          <div className="container-narrow">
            <AnimatedSection className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-foreground">
                Lavoriamo anche con altri settori dell'edilizia
              </h2>
              <p className="text-muted-foreground mt-3">
                Scopri come portiamo clienti qualificati a{" "}
                <Link
                  to="/servizi"
                  className="text-gold hover:underline"
                >
                  tutti i settori
                </Link>{" "}
                dell'edilizia.
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {crossLinks.map((link) => (
                <StaggerItem key={link.href}>
                  <Link
                    to={link.href}
                    className="block bg-card border border-border rounded-2xl p-6 hover:border-gold/30 transition-colors group"
                  >
                    <h3 className="text-foreground font-bold mb-2 group-hover:text-gold transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {link.description}
                    </p>
                    <ArrowRight className="w-4 h-4 text-gold mt-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Internal SEO links */}
            <div className="mt-10 text-center text-sm text-muted-foreground space-x-4">
              <Link to="/blog" className="hover:text-gold transition-colors">
                Blog
              </Link>
              <span>|</span>
              <Link
                to="/casi-studio"
                className="hover:text-gold transition-colors"
              >
                Casi Studio
              </Link>
              <span>|</span>
              <Link
                to="/servizi"
                className="hover:text-gold transition-colors"
              >
                Servizi
              </Link>
              <span>|</span>
              <Link to="/prezzi" className="hover:text-gold transition-colors">
                Prezzi
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
