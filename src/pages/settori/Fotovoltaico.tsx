import { useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import {
  Sun, Zap, TrendingUp, Users, ShieldCheck, Target, BarChart3,
  ArrowRight, Check, X, AlertTriangle, Leaf, BadgeEuro,
  PhoneCall, ClipboardCheck, Megaphone, HandCoins, ChevronRight,
  Eye, DollarSign, BatteryCharging, Award, Flame, XCircle,
  ThumbsDown, Building2, Clock, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { siteConfig, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import fotovoltaicoHero from "@/assets/fotovoltaico-hero.jpg";
import floPortrait from "@/assets/flo-portrait.jpg";
import cantiereImage from "@/assets/cantiere.jpg";
import teamImage from "@/assets/team.jpg";
import logoGreenEnergy from "@/assets/green_energy.png";

/* ────────────────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────────────────── */

const faqs = [
  {
    question: "Quanto costa il servizio di marketing fotovoltaico di Marketing Edile?",
    answer:
      "Zero. Fisso. Niente. Noi lavoriamo esclusivamente a provvigione sugli impianti venduti grazie ai lead che ti portiamo. Se non chiudi contratti con i nostri contatti, non ci devi un centesimo. La spesa pubblicitaria (Meta Ads, Google Ads) e a carico tuo, ma la gestiamo noi e parliamo di budget ragionevoli, non dei 3-5.000 euro al mese che le agenzie tradizionali ti chiedono prima ancora di alzare un dito.",
  },
  {
    question: "In cosa vi differenziate dai portali di lead come ProntoPro, Edilnet, SolarQuotes?",
    answer:
      "Differenza abissale. I portali vendono lo STESSO lead a 3, 5, anche 7 installatori contemporaneamente. Tu paghi per un contatto che sta gia parlando con i tuoi concorrenti e che scegliera chi fa il prezzo piu basso. I nostri lead sono ESCLUSIVI: generati dalle TUE campagne, con il TUO brand, consegnati SOLO a te. Il cliente ti percepisce come l'esperto, non come uno dei tanti preventivatori. Il tasso di conversione e 3-5 volte superiore.",
  },
  {
    question: "Che tipo di lead generate per il fotovoltaico?",
    answer:
      "Lead pre-qualificati e pronti per il sopralluogo. Ogni contatto viene filtrato su: proprieta dell'immobile (niente affittuari), tipo di tetto e orientamento, consumo energetico annuo, budget indicativo, interesse reale e urgenza. Non riceverai mai elenchi freddi o curiosi che 'volevano solo informazioni'. Il tuo commerciale chiama persone che hanno gia capito il valore del fotovoltaico e vogliono procedere.",
  },
  {
    question: "Perche non dovrei semplicemente comprare lead dai portali? Costa meno.",
    answer:
      "Costa meno A LEAD, ma costa MOLTO DI PIU a contratto chiuso. Facciamo due conti: un lead da portale costa 20-40 euro, ma ne devi comprare 15-20 per chiudere un impianto (tasso di conversione 5-7%). Totale: 300-800 euro per contratto. Con il nostro sistema, il tasso di conversione e del 25-40% perche i lead sono esclusivi e pre-qualificati. Il costo per contratto crolla. E in piu non paghi fisso: paghi solo a risultato. Quale scenario preferisci?",
  },
  {
    question: "Funziona per aziende di fotovoltaico appena avviate?",
    answer:
      "Si, a patto che tu abbia la capacita operativa di gestire le installazioni. Non serve un brand affermato: il nostro sistema costruisce autorita e fiducia da zero. Creiamo contenuti educativi che posizionano la tua azienda come l'esperto locale di fotovoltaico. Il caso Green Energy Group e partito praticamente da zero e ha generato +300.000 euro nei primi 2 mesi.",
  },
  {
    question: "In quanto tempo vedo i primi risultati?",
    answer:
      "I primi lead qualificati arrivano in 7-14 giorni dall'attivazione delle campagne. Il ciclo di vendita nel fotovoltaico e di 30-60 giorni (sopralluogo, preventivo, decisione, firma). Quindi i primi contratti chiusi si vedono tipicamente entro 45-60 giorni. Ma gia dopo 2 settimane hai appuntamenti in agenda. Green Energy Group ha chiuso +300K nei primi 2 mesi.",
  },
  {
    question: "Lavorate su tutto il territorio italiano?",
    answer:
      "Si, operiamo su tutta Italia con campagne geo-targettizzate. Analizziamo le zone con maggiore irradiazione solare, densita di villette, disponibilita di incentivi regionali e saturazione competitiva per massimizzare il ritorno. Centro-Sud e isole spesso offrono le migliori opportunita, ma abbiamo risultati eccellenti anche al Nord.",
  },
  {
    question: "Come fate a conoscere cosi bene il settore edile e fotovoltaico?",
    answer:
      "Perche NON siamo un'agenzia di marketing generalista che ieri faceva campagne per ristoranti e oggi prova col fotovoltaico. Siamo nel settore edile da 8 anni. Il nostro fondatore ha un'azienda di serramenti. Conosciamo la differenza tra monocristallino e policristallino, sappiamo cosa sono le CER, conosciamo i margini reali su un impianto da 6kW. Parliamo la tua lingua, non il 'marketese'.",
  },
];

const portalProblems = [
  {
    icon: Users,
    title: "Lead venduti a 5 installatori",
    description:
      "I portali vendono lo stesso contatto a 3-7 aziende. Tu paghi, ma il cliente sta gia confrontando 5 preventivi. Vince chi fa il prezzo piu basso. I tuoi margini? Evaporati.",
  },
  {
    icon: ThumbsDown,
    title: "Lead freddi, non qualificati",
    description:
      "Affittuari che sognano. Curiosi che 'volevano solo informazioni'. Gente col tetto in eternit. Il tuo commerciale perde 4 ore al giorno a chiamare gente che non comprera mai.",
  },
  {
    icon: DollarSign,
    title: "Agenzie a 3-5K al mese di fisso",
    description:
      "Ti chiedono 3.000-5.000 euro al mese di fee, piu budget pubblicitario. Per 'brand awareness'. Per 'crescita organica'. Intanto il tuo conto corrente si svuota e i contratti non arrivano.",
  },
  {
    icon: XCircle,
    title: "Zero competenza nel fotovoltaico",
    description:
      "L'agenzia che ieri faceva campagne per un parrucchiere oggi 'gestisce' il tuo marketing fotovoltaico. Non sanno la differenza tra monocristallino e policristallino. E tu paghi per la loro ignoranza.",
  },
];

const processSteps = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Analisi Mercato Locale + Posizionamento",
    description:
      "Studiamo la tua zona: quanti installatori ci sono, come si posizionano, dove sono i buchi. Identifichiamo il tuo angolo d'attacco — il motivo specifico per cui un proprietario di villetta DEVE scegliere te e non il concorrente. Non sarai mai piu 'uno dei tanti installatori'.",
  },
  {
    icon: Megaphone,
    number: "02",
    title: "Campagne Educative + Lead Generation",
    description:
      "Creiamo campagne che EDUCANO prima di vendere. Il proprietario scopre quanto risparmia in bolletta, come funzionano le detrazioni al 50%, cosa sono le CER — e lo impara dalla TUA azienda. Quando ti contatta ha gia deciso di installare. Deve solo scegliere te.",
  },
  {
    icon: Target,
    number: "03",
    title: "Pre-qualifica Brutale dei Lead",
    description:
      "Ogni contatto viene filtrato prima di arrivarti: proprieta dell'immobile, tipo di tetto, esposizione, consumo annuo, budget. Il tuo commerciale riceve SOLO appuntamenti con persone pronte per il sopralluogo. Niente perditempo, niente curiosi, niente affittuari.",
  },
  {
    icon: HandCoins,
    number: "04",
    title: "Ottimizzazione e Scaling Aggressivo",
    description:
      "Ogni settimana analizziamo: costo per lead, tasso di conversione, costo per contratto, fatturato. Tagliamo quello che non funziona, raddoppiamo quello che funziona. Scaliamo sulle zone e i segmenti piu profittevoli. Il tuo fatturato cresce, i costi unitari scendono.",
  },
];

const stats = [
  { value: "+€300K", label: "in 2 mesi", sublabel: "Green Energy Group" },
  { value: "€60M+", label: "fatturato generato", sublabel: "Per i nostri clienti" },
  { value: "47+", label: "aziende edili", sublabel: "In tutta Italia" },
  { value: "€0", label: "di costi fissi", sublabel: "Solo provvigione" },
];

/* ────────────────────────────────────────────────────────────
   COMPARISON TABLE DATA
   ──────────────────────────────────────────────────────────── */

const comparisonRows = [
  {
    feature: "Costo mensile fisso",
    portale: "€200-500/mese + costo per lead",
    agenzia: "€3.000-5.000/mese di fee",
    edile: "€0 — solo provvigione su venduto",
  },
  {
    feature: "Esclusivita del lead",
    portale: "NO — venduto a 3-7 aziende",
    agenzia: "Si, ma lead di bassa qualita",
    edile: "SI — 100% esclusivo, solo tuo",
  },
  {
    feature: "Pre-qualifica contatti",
    portale: "Minima o assente",
    agenzia: "Generica, non settoriale",
    edile: "Filtro su immobile, tetto, budget, urgenza",
  },
  {
    feature: "Competenza fotovoltaico",
    portale: "Zero — piattaforma generalista",
    agenzia: "Zero — ieri facevano campagne per ristoranti",
    edile: "8 anni nel settore edile, azienda propria",
  },
  {
    feature: "Tasso conversione medio",
    portale: "5-7% (troppi concorrenti)",
    agenzia: "10-15% (lead tiepidi)",
    edile: "25-40% (lead pre-qualificati esclusivi)",
  },
  {
    feature: "Rischio per te",
    portale: "Alto — paghi a prescindere",
    agenzia: "Altissimo — fee fisso garantito a loro",
    edile: "Zero — se non vendi, non paghi",
  },
  {
    feature: "Risultati documentati nel solare",
    portale: "Nessuno",
    agenzia: "Generici, non verificabili",
    edile: "+€300K in 2 mesi (Green Energy Group)",
  },
];

/* ────────────────────────────────────────────────────────────
   JSON-LD SCHEMAS
   ──────────────────────────────────────────────────────────── */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Marketing Fotovoltaico — Lead Generation per Aziende Solari",
  description:
    "Servizio di lead generation e marketing a provvigione per aziende di fotovoltaico e installatori di pannelli solari. Zero costi fissi, paghi solo su impianti venduti.",
  provider: {
    "@type": "Organization",
    name: "Marketing Edile",
    url: siteConfig.url,
  },
  serviceType: "Lead Generation Fotovoltaico",
  areaServed: {
    "@type": "Country",
    name: "Italia",
  },
  offers: {
    "@type": "Offer",
    description: "Marketing a provvigione per aziende fotovoltaico — zero costi fissi",
    price: "0",
    priceCurrency: "EUR",
  },
};

/* ────────────────────────────────────────────────────────────
   COMPONENT
   ──────────────────────────────────────────────────────────── */

const Fotovoltaico = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Marketing Fotovoltaico — Lead a Provvigione"
        description="Lead qualificati per aziende fotovoltaico. Zero fisso, solo provvigione. +€300K in 2 mesi per Green Energy Group. 47+ aziende edili."
        keywords={[
          "marketing fotovoltaico",
          "lead generation fotovoltaico",
          "clienti fotovoltaico",
          "pubblicita pannelli solari",
          "acquisizione clienti energia solare",
          "lead fotovoltaico esclusivi",
          "marketing installatori fotovoltaico",
        ]}
        url={`${siteConfig.url}/settori/fotovoltaico`}
        jsonLd={[
          serviceSchema,
          generateBreadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Settori", url: `${siteConfig.url}/settori` },
            { name: "Marketing Fotovoltaico", url: `${siteConfig.url}/settori/fotovoltaico` },
          ]),
          generateFAQSchema(faqs),
        ]}
      />
      <Navbar />
      <main className="overflow-hidden">

        {/* ═══════════════════════════════════════════════════════
            SECTION 1 — HERO
        ═══════════════════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={fotovoltaicoHero}
              alt="Installazione pannelli solari fotovoltaico — marketing e lead generation per installatori"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
          </div>

          <div className="container-narrow relative z-10 pt-32 pb-20 px-6">
            <AnimatedSection>
              <div className="max-w-4xl">
                {/* PROVVIGIONE Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold/10 border-2 border-gold/40 rounded-full mb-8"
                >
                  <Flame className="w-5 h-5 text-gold" />
                  <span className="text-gold font-black text-sm uppercase tracking-widest">
                    Lavoriamo solo a provvigione
                  </span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-[1.1]">
                  Il <span className="text-gold">marketing fotovoltaico</span> che ti porta clienti.{" "}
                  <span className="text-foreground/80">Non scuse.</span>
                </h1>

                <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mb-4 leading-relaxed">
                  Il mercato solare italiano esplode: incentivi al 50%, Comunita Energetiche, bollette alle stelle.{" "}
                  <span className="text-foreground font-bold">
                    Ma tu stai ancora comprando lead dai portali che li vendono a 5 installatori?
                  </span>
                </p>

                <p className="text-lg text-foreground/80 max-w-2xl mb-4">
                  Oppure paghi 3-5.000 euro al mese a un'agenzia che non sa la differenza tra
                  monocristallino e policristallino?
                </p>

                <p className="text-lg text-foreground font-bold max-w-2xl mb-10">
                  Basta. Marketing Edile lavora a provvigione sugli impianti venduti.
                  Zero fisso. Zero rischio. Se non vendi, non ci devi nulla.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/#candidati">
                    <Button variant="gold" size="xl" className="glow-gold w-full sm:w-auto">
                      Candidati ora — zero rischio
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/casi-studio">
                    <Button
                      variant="goldOutline"
                      size="xl"
                      className="w-full sm:w-auto"
                    >
                      Vedi i risultati
                      <ChevronRight className="ml-1 w-5 h-5" />
                    </Button>
                  </Link>
                </div>

                {/* Trust signals */}
                <div className="flex flex-wrap gap-6 mt-10 text-sm text-foreground/80">
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-gold" /> Zero costi fissi
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-gold" /> Lead 100% esclusivi
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-gold" /> +€300K in 2 mesi (caso reale)
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 2 — BASTA PORTALI, BASTA AGENZIE
        ═══════════════════════════════════════════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-xs font-black uppercase tracking-widest mb-4">
                  <AlertTriangle className="inline w-4 h-4 mr-2 -mt-0.5" />
                  Basta buttare soldi
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  I portali di lead e le agenzie tradizionali{" "}
                  <span className="text-red-400">ti stanno dissanguando</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Il tuo fatturato potrebbe essere il doppio. Ma invece di investire in un sistema che funziona,
                  stai regalando soldi a chi non ha MAI installato un pannello in vita sua. Ecco come
                  portali e agenzie ti stanno fregando — e perche devi smettere. Adesso.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {portalProblems.map((problem, index) => (
                <StaggerItem key={index}>
                  <div className="bg-card rounded-2xl p-8 border border-red-500/20 h-full hover:border-red-500/40 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-5">
                      <problem.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="text-xl font-black text-foreground mb-3">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimatedSection delay={0.3}>
              <div className="mt-12 bg-card rounded-2xl p-8 border border-border text-center">
                <p className="text-lg text-muted-foreground">
                  <span className="text-foreground font-bold">La verita scomoda:</span>{" "}
                  ai portali e alle agenzie tradizionali non importa se tu vendi impianti.
                  Loro guadagnano a prescindere: tu paghi il lead, tu paghi il fee mensile.{" "}
                  <span className="text-gold font-bold">
                    Noi guadagniamo SOLO se tu chiudi contratti.
                  </span>{" "}
                  Chi pensi che si impegnera di piu per portarti clienti veri?
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 3 — GREEN ENERGY CASE STUDY
        ═══════════════════════════════════════════════════════ */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={cantiereImage}
              alt="Cantiere di installazione fotovoltaico — caso studio Green Energy Group lead generation"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/95" />
          </div>

          <div className="container-narrow relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs font-black uppercase tracking-widest mb-6">
                  <Award className="inline w-4 h-4 mr-2 -mt-0.5" />
                  Caso Studio Reale
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Green Energy Group:{" "}
                  <span className="text-gold">+€300.000 in 2 mesi</span>
                </h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  Green Energy Group ci ha contattato dopo aver bruciato migliaia di euro
                  con un portale di lead che gli vendeva contatti condivisi con altri 4 installatori.
                  Tasso di conversione: meno del 5%. Frustrazione: alle stelle.
                </p>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  In 60 giorni abbiamo attivato il nostro sistema di lead generation esclusiva
                  per il fotovoltaico. Risultato? <span className="text-foreground font-bold">+€300.000 di impianti venduti</span>,
                  lead pre-qualificati che arrivavano gia pronti per il sopralluogo,
                  e un tasso di conversione 5 volte superiore a quello dei portali.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-card/80 backdrop-blur rounded-xl p-4 border border-gold/20 text-center">
                    <div className="text-2xl md:text-3xl font-black text-gold">+€300K</div>
                    <div className="text-xs text-foreground/80 mt-1">Fatturato generato</div>
                  </div>
                  <div className="bg-card/80 backdrop-blur rounded-xl p-4 border border-gold/20 text-center">
                    <div className="text-2xl md:text-3xl font-black text-gold">60gg</div>
                    <div className="text-xs text-foreground/80 mt-1">Tempo risultato</div>
                  </div>
                  <div className="bg-card/80 backdrop-blur rounded-xl p-4 border border-gold/20 text-center">
                    <div className="text-2xl md:text-3xl font-black text-gold">5x</div>
                    <div className="text-xs text-foreground/80 mt-1">Conv. vs portali</div>
                  </div>
                </div>

                <Link to="/casi-studio">
                  <Button variant="gold" size="xl" className="glow-gold">
                    Leggi il caso studio completo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="bg-card/90 backdrop-blur rounded-2xl p-10 border border-gold/20 flex flex-col items-center text-center">
                  <img
                    src={logoGreenEnergy}
                    alt="Logo Green Energy Group — caso studio marketing fotovoltaico con +300K in 2 mesi"
                    className="w-48 h-auto mb-8 opacity-90"
                    loading="lazy"
                  />
                  <blockquote className="text-lg text-foreground/80 italic leading-relaxed mb-6">
                    "Avevamo provato portali e agenzie. Con Marketing Edile abbiamo finalmente
                    un sistema che ci porta clienti veri, pre-qualificati, esclusivi. In due mesi
                    abbiamo generato piu fatturato che nei sei mesi precedenti."
                  </blockquote>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/80">Green Energy Group — Fotovoltaico</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 4 — IL NOSTRO SISTEMA
        ═══════════════════════════════════════════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs font-black uppercase tracking-widest mb-4">
                  <Zap className="inline w-4 h-4 mr-2 -mt-0.5" />
                  Il Sistema
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Ecco come portiamo clienti alla tua azienda{" "}
                  <span className="text-gold">fotovoltaica</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Non facciamo "brand awareness". Non facciamo "crescita organica". Non facciamo
                  cose carine per i social. Facciamo UNA cosa: portiamo proprietari di immobili
                  pre-qualificati che vogliono installare un impianto fotovoltaico. E lo facciamo
                  con un sistema testato su 47+ aziende edili.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <AnimatedSection key={index} delay={index * 0.15}>
                  <div className="bg-card rounded-2xl p-8 border border-border h-full relative overflow-hidden group hover:border-gold/30 transition-colors">
                    {/* Step number background */}
                    <div className="absolute top-4 right-4 text-6xl font-black text-gold/5 group-hover:text-gold/10 transition-colors">
                      {step.number}
                    </div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-5">
                        <step.icon className="w-6 h-6 text-gold" />
                      </div>
                      <div className="text-xs font-black text-gold uppercase tracking-widest mb-2">
                        Step {step.number}
                      </div>
                      <h3 className="text-xl font-black text-foreground mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.4}>
              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-6">
                  Vuoi capire nel dettaglio come funziona la nostra lead generation per il fotovoltaico?
                </p>
                <Link to="/servizi">
                  <Button variant="goldOutline" size="xl">
                    Scopri tutti i servizi
                    <ChevronRight className="ml-1 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 5 — STATS
        ═══════════════════════════════════════════════════════ */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={teamImage}
              alt="Team Marketing Edile — agenzia specializzata marketing fotovoltaico e lead generation solare"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95 backdrop-blur-sm" />
          </div>

          <div className="container-narrow relative z-10 px-6">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                  I numeri parlano. Non le slide di PowerPoint.
                </h2>
                <p className="text-foreground/80 max-w-2xl mx-auto">
                  Mentre le agenzie tradizionali ti mostrano "impression" e "reach",
                  noi ti mostriamo fatturato generato e contratti chiusi.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <StaggerItem key={index}>
                  <div className="bg-card/80 backdrop-blur rounded-2xl p-6 border border-gold/20 text-center">
                    <div className="text-3xl md:text-4xl font-black text-gold mb-2">{stat.value}</div>
                    <div className="text-foreground font-bold text-sm mb-1">{stat.label}</div>
                    <div className="text-xs text-foreground/80">{stat.sublabel}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 6 — FONDATORE
        ═══════════════════════════════════════════════════════ */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <div className="relative">
                  <img
                    src={floPortrait}
                    alt="Florian Andriciuc — fondatore Marketing Edile, esperto marketing fotovoltaico e lead generation edile"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-gold text-navy font-black text-sm px-4 py-2 rounded-xl shadow-lg">
                    8 anni nel settore edile
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs font-black uppercase tracking-widest mb-6">
                  <Building2 className="inline w-4 h-4 mr-2 -mt-0.5" />
                  Chi siamo davvero
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                  Non siamo un'agenzia di marketing.{" "}
                  <span className="text-gold">Siamo imprenditori edili</span>{" "}
                  che fanno marketing per il fotovoltaico.
                </h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Mi chiamo Florian Andriciuc. Ho un'azienda di serramenti. Sono nel settore
                  edile da 8 anni. So cosa vuol dire aspettare che il telefono suoni.
                  So cosa vuol dire perdere un preventivo perche il cliente ha trovato
                  chi costa 500 euro in meno.
                </p>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Per questo ho fondato Marketing Edile. Non per fare il "guru del marketing".
                  Ma perche le agenzie generaliste non capiscono NIENTE del nostro settore.
                  Non sanno cos'e un impianto da 6kW, non conoscono le CER, non sanno
                  che nel fotovoltaico il sopralluogo e il momento cruciale della vendita.
                </p>
                <p className="text-lg text-foreground font-bold mb-8 leading-relaxed">
                  Noi lo sappiamo. E per questo i nostri lead convertono 3-5 volte di piu
                  rispetto a quelli dei portali e delle agenzie tradizionali. Perche chi
                  costruisce le campagne CONOSCE il prodotto.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-gold" />
                    Imprenditore edile, non marketer
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-gold" />
                    47+ aziende in portfolio
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-gold" />
                    €60M+ generati per i clienti
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 7 — TABELLA COMPARATIVA
        ═══════════════════════════════════════════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs font-black uppercase tracking-widest mb-4">
                  <Eye className="inline w-4 h-4 mr-2 -mt-0.5" />
                  Confronto Diretto
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Portale Lead vs Agenzia vs{" "}
                  <span className="text-gold">Marketing Edile</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Smetti di indovinare. Guarda i fatti. Poi decidi dove mettere i tuoi soldi.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              {/* Desktop table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="p-4 text-left text-sm font-bold text-muted-foreground border-b border-border w-1/4">
                        Caratteristica
                      </th>
                      <th className="p-4 text-center text-sm font-bold text-red-400 border-b border-border w-1/4">
                        <div className="flex flex-col items-center gap-1">
                          <ThumbsDown className="w-5 h-5" />
                          Portale Lead
                        </div>
                      </th>
                      <th className="p-4 text-center text-sm font-bold text-red-400 border-b border-border w-1/4">
                        <div className="flex flex-col items-center gap-1">
                          <XCircle className="w-5 h-5" />
                          Agenzia Tradizionale
                        </div>
                      </th>
                      <th className="p-4 text-center text-sm font-bold text-gold border-b border-gold/30 w-1/4 bg-gold/5 rounded-t-xl">
                        <div className="flex flex-col items-center gap-1">
                          <Award className="w-5 h-5" />
                          Marketing Edile
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, index) => (
                      <tr key={index} className="border-b border-border/50 hover:bg-card/50 transition-colors">
                        <td className="p-4 text-sm font-bold text-foreground">{row.feature}</td>
                        <td className="p-4 text-sm text-center text-muted-foreground">{row.portale}</td>
                        <td className="p-4 text-sm text-center text-muted-foreground">{row.agenzia}</td>
                        <td className="p-4 text-sm text-center text-gold font-bold bg-gold/5">
                          {row.edile}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="lg:hidden space-y-6">
                {comparisonRows.map((row, index) => (
                  <div key={index} className="bg-card rounded-2xl p-6 border border-border">
                    <h4 className="font-black text-foreground mb-4 text-lg">{row.feature}</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-red-400 uppercase">Portale</span>
                          <p className="text-sm text-muted-foreground">{row.portale}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-red-400 uppercase">Agenzia</span>
                          <p className="text-sm text-muted-foreground">{row.agenzia}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 bg-gold/5 -mx-2 px-2 py-2 rounded-lg">
                        <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-black text-gold uppercase">Marketing Edile</span>
                          <p className="text-sm text-gold font-bold">{row.edile}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-12 text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  La scelta e chiara. L'unica domanda e:{" "}
                  <span className="text-foreground font-bold">quanto fatturato vuoi perdere prima di decidere?</span>
                </p>
                <Link to="/#candidati">
                  <Button variant="gold" size="xl" className="glow-gold">
                    Candidati ora — zero costi fissi
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 8 — FAQ
        ═══════════════════════════════════════════════════════ */}
        <section className="section-padding">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs font-black uppercase tracking-widest mb-4">
                  Domande Frequenti
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Tutto quello che devi sapere sul{" "}
                  <span className="text-gold">marketing fotovoltaico</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Risposte dirette, senza giri di parole. Come facciamo tutto.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="bg-card rounded-2xl border border-border px-6 data-[state=open]:border-gold/30 transition-colors"
                    >
                      <AccordionTrigger className="text-left text-foreground font-bold hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 9 — FINAL CTA
        ═══════════════════════════════════════════════════════ */}
        <section className="section-padding bg-navy-light relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />
          </div>

          <div className="container-narrow relative z-10">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold/10 border-2 border-gold/40 rounded-full mb-8"
                >
                  <Flame className="w-5 h-5 text-gold" />
                  <span className="text-gold font-black text-sm uppercase tracking-widest">
                    Solo a provvigione
                  </span>
                </motion.div>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
                  Il mercato solare non ti aspetta.{" "}
                  <span className="text-gold">I tuoi concorrenti nemmeno.</span>
                </h2>

                <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                  Ogni giorno che passi con un sistema di acquisizione clienti che non funziona,
                  i tuoi concorrenti chiudono contratti che potevano essere tuoi.
                </p>

                <p className="text-xl text-foreground font-bold mb-10">
                  Zero costi fissi. Zero rischio. Paghi solo su impianti venduti.
                  Se non sei soddisfatto, non ci devi nulla. Cosa hai da perdere?
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Link to="/#candidati">
                    <Button variant="gold" size="xl" className="glow-gold w-full sm:w-auto">
                      <PhoneCall className="mr-2 w-5 h-5" />
                      Candidati ora
                    </Button>
                  </Link>
                  <Link to="/prezzi">
                    <Button variant="goldOutline" size="xl" className="w-full sm:w-auto">
                      Vedi come funziona
                      <ChevronRight className="ml-1 w-5 h-5" />
                    </Button>
                  </Link>
                </div>

                <p className="text-sm text-muted-foreground">
                  Accettiamo solo aziende con capacita operativa reale.{" "}
                  <span className="text-foreground font-semibold">Posti limitati per zona.</span>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 10 — CROSS-LINKS
        ═══════════════════════════════════════════════════════ */}
        <section className="section-padding">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-black text-foreground">
                  Approfondisci
                </h2>
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Blog",
                  description: "Guide, strategie e casi studio per aziende edili e di fotovoltaico",
                  href: "/blog",
                  icon: Leaf,
                },
                {
                  title: "Casi Studio",
                  description: "Risultati reali con numeri verificabili: Green Energy, Teda, Factory",
                  href: "/casi-studio",
                  icon: BarChart3,
                },
                {
                  title: "Servizi",
                  description: "Come funziona il nostro sistema di lead generation a provvigione",
                  href: "/servizi",
                  icon: Target,
                },
                {
                  title: "Prezzi",
                  description: "Modello a provvigione trasparente. Zero costi fissi, zero sorprese",
                  href: "/prezzi",
                  icon: BadgeEuro,
                },
              ].map((link, index) => (
                <StaggerItem key={index}>
                  <Link to={link.href} className="block group">
                    <div className="bg-card rounded-2xl p-6 border border-border h-full hover:border-gold/30 transition-all hover:shadow-lg">
                      <link.icon className="w-8 h-8 text-gold mb-3" />
                      <h3 className="font-black text-foreground mb-2 group-hover:text-gold transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {link.description}
                      </p>
                      <span className="inline-flex items-center text-gold text-sm font-bold mt-3 group-hover:gap-2 transition-all gap-1">
                        Scopri <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Fotovoltaico;
