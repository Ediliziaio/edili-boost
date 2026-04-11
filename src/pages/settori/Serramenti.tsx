import { useEffect } from "react";
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
  Eye,
  ShieldCheck,
  DoorOpen,
  Zap,
  Clock,
  Star,
  MapPin,
  Building2,
  Phone,
  BadgeEuro,
  ShieldX,
  FileWarning,
  CircleDollarSign,
  Handshake,
  Flame,
  Award,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
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

import heroWindowsImage from "@/assets/hero-windows.jpg";
import showroomImage from "@/assets/showroom.jpg";
import floPortrait from "@/assets/flo-portrait.jpg";
import cantiereImage from "@/assets/cantiere.jpg";
import teamImage from "@/assets/team.jpg";

// ─── FAQ Data ──────────────────────────────────────────
const faqs = [
  {
    question:
      "Quanto costa il marketing per serramentisti con Marketing Edile?",
    answer:
      "Zero. Niente. Nada. Non ci sono canoni fissi, non ci sono abbonamenti, non ci sono costi anticipati. Lavoriamo ESCLUSIVAMENTE a provvigione sulle vendite che chiudi grazie ai nostri contatti. Se non vendi, non ci devi un centesimo. L'unico investimento che sostieni è la spesa pubblicitaria (che resta tua e costruisce la TUA visibilità, non la nostra). Questo è il motivo per cui le agenzie tradizionali ci odiano: il nostro modello dimostra che il loro canone fisso da €3.000-5.000/mese è una truffa legalizzata.",
  },
  {
    question: "Che tipo di contatti portate ai serramentisti?",
    answer:
      "Proprietari di immobili che stanno ATTIVAMENTE cercando di sostituire o installare infissi e serramenti. Non curiosi. Non perditempo. Non gente che vuole 'solo un'informazione'. Attraverso campagne chirurgiche su Facebook, Instagram e Google, intercettiamo persone con un bisogno reale e urgente: ristrutturazioni in corso, problemi di isolamento termico o acustico, case nuove da completare. Ogni lead viene pre-qualificato PRIMA di arrivare a te. Il tuo tempo viene investito solo su trattative con alta probabilità di chiusura. Risultato? Tasso di chiusura medio dei nostri lead: 15-25%, contro il 3-5% dei contatti generici.",
  },
  {
    question: "In quanto tempo vedrò i primi risultati?",
    answer:
      "I primi contatti qualificati arrivano entro 2-4 settimane dall'avvio delle campagne. I risultati in termini di fatturato dipendono dalla velocità del tuo ciclo di vendita (con infissi, il tempo medio dalla richiesta al contratto è 2-6 settimane). Teda Infissi ha raggiunto €30-40K/mese di vendite costanti dalle nostre campagne. Factory S.r.l.s ha generato +€60.000 di venduto nel PRIMO mese. Non promettiamo miracoli overnight, ma i numeri parlano chiaro: chi lavora bene i contatti, fattura già dal primo mese.",
  },
  {
    question:
      "Funziona anche per showroom piccoli o appena avviati?",
    answer:
      "Sì, a patto che tu abbia un prodotto di qualità e la capacità di gestire i contatti che arrivano. Il nostro sistema scala: funziona per il piccolo showroom locale come per l'azienda con più sedi. Analizziamo la tua situazione nella valutazione iniziale e ti diciamo ONESTAMENTE se sei in target. Non lavoriamo con tutti. Se il tuo prodotto è scarso o il tuo team commerciale non sa chiudere, non ti prendiamo. Non per snobismo, ma perché se tu non vendi, noi non guadagniamo. Il nostro filtro è il tuo vantaggio.",
  },
  {
    question:
      "Cosa vi distingue da una normale agenzia di marketing?",
    answer:
      "Tutto. Primo: lavoriamo SOLO a provvigione. Le agenzie tradizionali ti spillano €3.000-5.000/mese qualunque cosa succeda. Noi guadagniamo solo se TU guadagni. Secondo: siamo specializzati ESCLUSIVAMENTE nel settore edile. Non facciamo marketing per ristoranti, dentisti o parrucchieri. Conosciamo la differenza tra un monoblocco e un controtelaio, tra un PVC e un legno-alluminio. Terzo — e questo è il colpo di grazia: il nostro fondatore POSSIEDE un'azienda di serramenti. €400K nei primi 3 mesi. Oltre €2M in 2 anni. SENZA sconto in fattura. Sappiamo cosa significa vendere infissi perché lo facciamo ogni giorno.",
  },
  {
    question:
      "Come funziona il modello a provvigione? Quanto pagate di provvigione?",
    answer:
      "È semplice: ti portiamo contatti qualificati di persone che vogliono comprare infissi. Tu li lavori, fai il sopralluogo, presenti il preventivo, chiudi la vendita. Sulla commessa chiusa, riconosci a Marketing Edile una percentuale concordata. La percentuale varia in base al settore, al valore medio delle commesse e alla tua struttura — la definiamo insieme nella fase di valutazione. La spesa pubblicitaria è a tuo carico (tipicamente €1.000-3.000/mese a seconda della zona), ma costruisce la TUA brand awareness, non la nostra.",
  },
  {
    question:
      "Coprite anche la mia zona? Lavorate in tutta Italia?",
    answer:
      "Lavoriamo con showroom di serramenti in tutta Italia. Anzi, le campagne geolocalizzate sono il nostro pane: targetizziamo un raggio specifico attorno al tuo showroom per intercettare proprietari nella tua zona. Che tu sia a Milano, a Cagliari o in un paese di 20.000 abitanti, il sistema funziona. L'unico requisito è che ci sia un bacino di utenza sufficiente. Lo verifichiamo nella valutazione gratuita.",
  },
  {
    question:
      "E se i contatti non sono buoni o non chiudo vendite?",
    answer:
      "Se non chiudi, noi non guadagniamo. Punto. Non c'è rischio per te. Detto questo, monitoriamo OGNI lead: qualità, tempistiche, obiezioni, tasso di risposta. Se i contatti non convertono, è nel NOSTRO interesse capire perché e sistemare. A volte il problema è nella campagna (e lo correggiamo). A volte è nel processo commerciale (e ti aiutiamo a migliorarlo). Il nostro successo dipende dal tuo: questo allineamento di interessi è ciò che rende il modello imbattibile.",
  },
];

// ─── Ugly Truth Cards ──────────────────────────────────
const uglyTruthCards = [
  {
    icon: BadgeEuro,
    title: "€3.000-5.000/mese buttati",
    description:
      "Le agenzie ti spillano un canone fisso ogni mese. Pioggia o sole, che tu venda o no, il loro conto corrente si riempie. Il tuo? Quello dipende.",
    accent: "border-red-500/40 bg-red-500/5",
    iconColor: "text-red-400",
  },
  {
    icon: FileWarning,
    title: "PDF pieni di aria fritta",
    description:
      "Ti mandano report con impressioni, clic, reach. Numeri bellissimi. Peccato che il tuo showroom sia vuoto e il telefono muto. Le impressioni non pagano le bollette.",
    accent: "border-red-500/40 bg-red-500/5",
    iconColor: "text-red-400",
  },
  {
    icon: ShieldX,
    title: "Zero conoscenza del settore",
    description:
      "L'agenzia che ti segue ieri faceva marketing per un ristorante di sushi, domani lo farà per un dentista. Non sa la differenza tra un monoblocco e un controtelaio. Non ha MAI messo piede in uno showroom.",
    accent: "border-red-500/40 bg-red-500/5",
    iconColor: "text-red-400",
  },
  {
    icon: AlertTriangle,
    title: "Nessun skin in the game",
    description:
      "Se le tue campagne non portano risultati, a loro non cambia NIENTE. Il canone fisso arriva comunque. Zero incentivo a farti vendere. Il loro obiettivo è tenerti come cliente, non farti fatturare.",
    accent: "border-red-500/40 bg-red-500/5",
    iconColor: "text-red-400",
  },
];

// ─── Process Steps ──────────────────────────────────────
const processSteps = [
  {
    number: "01",
    title: "Valutazione Brutale",
    description:
      "Non perdiamo tempo in convenevoli. Analizziamo il tuo showroom, il tuo mercato, i tuoi concorrenti, il tuo processo commerciale. Ti diciamo la verità nuda e cruda: dove stai sbagliando, cosa funziona, e se possiamo davvero aiutarti. Se non sei in target, te lo diciamo subito. Non lavoriamo con tutti.",
    icon: Search,
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/30",
  },
  {
    number: "02",
    title: "Strategia Chirurgica",
    description:
      "Definiamo il piano d'attacco: quali canali usare, che messaggio comunicare, quale pubblico colpire. Landing page ad alta conversione, script video che vendono, campagne calibrate sul TUO territorio. Niente template. Niente copia-incolla. Ogni strategia è costruita su misura per il tuo showroom di serramenti.",
    icon: Target,
    color: "text-gold",
    bg: "bg-gold/10 border-gold/30",
  },
  {
    number: "03",
    title: "Lancio e Ottimizzazione",
    description:
      "Le campagne partono su Facebook, Instagram e Google. Ma non ci fermiamo al lancio: ottimizziamo OGNI GIORNO. A/B test su creatività, copy, audience. Monitoriamo il costo per lead in tempo reale. Se qualcosa non performa, lo cambiamo prima che bruci budget. Il tuo investimento pubblicitario viene spremuto fino all'ultima goccia.",
    icon: Zap,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/30",
  },
  {
    number: "04",
    title: "Lead e Fatturato",
    description:
      "Ricevi contatti di proprietari che VOGLIONO comprare serramenti. Pre-qualificati. Con budget. Con tempistiche reali. Il tuo team commerciale lavora solo su trattative serie. Confronto settimanale con il tuo referente dedicato per analizzare ogni numero e spingere sempre di più. Il ciclo si ripete, il fatturato cresce.",
    icon: TrendingUp,
    color: "text-gold",
    bg: "bg-gold/10 border-gold/30",
  },
];

// ─── Comparison Table ──────────────────────────────────
const comparisonRows = [
  {
    feature: "Costo mensile",
    traditional: "€3.000-5.000/mese fissi",
    us: "€0 fissi — solo provvigione sulle vendite",
  },
  {
    feature: "Rischio per te",
    traditional: "Tutto tuo. Paghi anche se non vendi nulla",
    us: "Zero. Se non vendi, non ci devi niente",
  },
  {
    feature: "Conoscenza del settore",
    traditional: "Generalisti. Oggi infissi, domani pizzerie",
    us: "SOLO edilizia. Il fondatore ha un'azienda di serramenti",
  },
  {
    feature: "Tipo di report",
    traditional: "PDF con impressioni e clic (vanity metrics)",
    us: "Lead ricevuti, preventivi fatti, vendite chiuse, fatturato generato",
  },
  {
    feature: "Interesse nel tuo successo",
    traditional: "Basso. Il canone arriva comunque",
    us: "Totale. Se non vendi, non guadagniamo",
  },
  {
    feature: "Qualità dei contatti",
    traditional: "Generici, non qualificati",
    us: "Pre-qualificati: budget, tempistiche, tipo intervento",
  },
  {
    feature: "Risultati documentati",
    traditional: "Promesse vaghe",
    us: "€60M+ generati. 47+ partner. Casi studio reali",
  },
  {
    feature: "Durata contratto",
    traditional: "Vincoli a 6-12 mesi",
    us: "Nessun vincolo. Resti perché funziona, non perché sei obbligato",
  },
];

// ─── Cross-links ──────────────────────────────────────
const crossLinks = [
  {
    title: "Ristrutturazioni",
    description:
      "Lead generation per imprese di ristrutturazione. Stesso modello a provvigione, stessi risultati.",
    href: "/settori/ristrutturazioni",
    icon: Building2,
  },
  {
    title: "Fotovoltaico",
    description:
      "Contatti qualificati per aziende di impianti fotovoltaici. Il solare è in boom, cavalca l'onda.",
    href: "/settori/fotovoltaico",
    icon: Zap,
  },
  {
    title: "Impiantisti",
    description:
      "Marketing per impiantisti termoidraulici. Caldaie, climatizzazione, pompe di calore.",
    href: "/settori/impiantisti",
    icon: Flame,
  },
  {
    title: "Tetti e Coperture",
    description:
      "Lead generation per aziende di coperture, lattoneria e impermeabilizzazione.",
    href: "/settori/tetti",
    icon: Star,
  },
];

// ═══════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════
const Serramenti = () => {
  const navigate = useNavigate();
  const handleCTA = () => navigate("/#candidati");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Marketing Serramenti | Solo a Provvigione"
        description="Marketing per serramentisti a provvigione. Zero canone fisso. Paghi solo sulle vendite chiuse. €60M+ generati per 47+ aziende edili."
        keywords={[
          "marketing serramenti",
          "marketing infissi",
          "lead generation serramenti",
          "pubblicità showroom infissi",
          "clienti per serramentisti",
          "marketing serramentisti",
          "vendere infissi online",
          "lead generation infissi",
          "marketing per showroom serramenti",
        ]}
        url={`${siteConfig.url}/settori/serramenti`}
        jsonLd={[
          generateBreadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Settori", url: `${siteConfig.url}/settori` },
            {
              name: "Serramenti",
              url: `${siteConfig.url}/settori/serramenti`,
            },
          ]),
          generateFAQSchema(faqs),
          generateServiceSchema({
            name: "Marketing per Serramentisti e Showroom Infissi",
            description:
              "Lead generation a provvigione per serramentisti. Campagne Facebook, Instagram e Google per portare clienti qualificati al tuo showroom di infissi. Paghi solo sulle vendite chiuse.",
            url: `${siteConfig.url}/settori/serramenti`,
          }),
        ]}
      />
      <Navbar />

      <main className="overflow-hidden">
        {/* ════════════════════════════════════════════════════
            SECTION 1 — HERO
        ════════════════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={heroWindowsImage}
              alt="Installazione serramenti moderni - marketing serramenti Marketing Edile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
          </div>

          <div className="container-narrow relative z-10 text-center py-32 px-6">
            <AnimatedSection>
              {/* Provvigione badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold/15 border-2 border-gold/50 rounded-full text-gold font-black text-sm md:text-base uppercase tracking-widest mb-8 glow-gold"
              >
                <CircleDollarSign className="w-5 h-5" />
                LAVORIAMO SOLO A PROVVIGIONE — ZERO CANONE FISSO
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-[1.1]">
                Il Tuo Showroom Merita{" "}
                <span className="text-gold">Clienti Veri</span>,<br />
                Non{" "}
                <span className="line-through text-muted-foreground/50">
                  Report di Impressioni
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-6 leading-relaxed">
                Sei stanco di pagare agenzie che ti mostrano{" "}
                <strong className="text-foreground">clic e impressioni</strong>{" "}
                mentre il tuo showroom resta vuoto? Noi portiamo{" "}
                <strong className="text-gold">
                  proprietari pronti a comprare serramenti
                </strong>{" "}
                direttamente al tuo banco preventivi.{" "}
                <span className="text-foreground font-bold">
                  E se non vendono, non ci devi niente.
                </span>
              </p>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
                Il marketing serramenti non deve essere un costo fisso. Deve essere
                un investimento che si ripaga da solo. Come per le{" "}
                <Link
                  to="/casi-studio"
                  className="text-gold underline underline-offset-4 hover:text-gold/80 transition-colors font-semibold"
                >
                  47+ aziende edili
                </Link>{" "}
                che hanno generato{" "}
                <span className="text-gold font-bold">€60M+</span> con noi.
              </p>

              {/* Urgency line */}
              <p className="text-sm text-red-400 font-semibold uppercase tracking-wider mb-10 flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                Accettiamo solo 3 nuovi partner serramenti al mese — verifica
                se c'è posto nella tua zona
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="gold"
                  size="xl"
                  className="glow-gold text-lg px-10"
                  onClick={handleCTA}
                >
                  Candidati Ora — È Gratuito
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link to="/prezzi">
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-border text-muted-foreground hover:text-foreground"
                  >
                    Come Funziona il Modello
                  </Button>
                </Link>
              </div>

              {/* Trust proof */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-muted-foreground text-sm">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  Zero anticipo
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  Nessun vincolo contrattuale
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  Paghi solo sulle vendite
                </span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SECTION 2 — THE UGLY TRUTH
        ════════════════════════════════════════════════════ */}
        <section className="section-padding bg-background relative">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm font-bold mb-6 uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                  La Brutta Verità
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Le Agenzie di Marketing Ti Stanno{" "}
                  <span className="text-red-400">Derubando</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Lo diciamo senza mezzi termini. Se stai pagando un canone
                  fisso a un'agenzia per il marketing del tuo showroom
                  infissi, stai buttando soldi nel cesso. Ecco perché.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {uglyTruthCards.map((card) => (
                <StaggerItem key={card.title}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className={`p-8 rounded-2xl border ${card.accent} h-full`}
                  >
                    <card.icon className={`w-10 h-10 ${card.iconColor} mb-4`} />
                    <h3 className="text-xl font-black text-foreground mb-3">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimatedSection delay={0.3}>
              <div className="mt-12 p-8 rounded-2xl bg-card border border-border text-center">
                <p className="text-xl md:text-2xl text-foreground font-bold mb-2">
                  Quant'è costata finora la tua "strategia digitale"?
                </p>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  €3.000/mese x 12 mesi ={" "}
                  <span className="text-red-400 font-black">
                    €36.000 all'anno
                  </span>{" "}
                  in canoni fissi. Quante commesse hai chiuso da quei lead?
                  Se la risposta è "poche" o "non lo so"... il problema è
                  chiaro.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SECTION 3 — SHOWROOM PHOTO + STATS
        ════════════════════════════════════════════════════ */}
        <section className="section-padding bg-navy-light relative overflow-hidden">
          <div className="container-narrow">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image side */}
              <AnimatedSection direction="left">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={showroomImage}
                    alt="Showroom serramenti Marketing Edile - lead generation infissi con risultati reali"
                    className="w-full h-[500px] object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                  {/* Stats overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-gold/20">
                        <p className="text-gold font-black text-2xl">€2M+</p>
                        <p className="text-muted-foreground text-xs">
                          Vendite nostre in 2 anni
                        </p>
                      </div>
                      <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-gold/20">
                        <p className="text-gold font-black text-2xl">€400K</p>
                        <p className="text-muted-foreground text-xs">
                          Primi 3 mesi senza bonus
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Text side */}
              <AnimatedSection direction="right">
                <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-bold mb-6 uppercase tracking-wider">
                  <DoorOpen className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                  Non Siamo Consulenti. Siamo Serramentisti.
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 leading-tight">
                  Abbiamo Uno Showroom{" "}
                  <span className="text-gold">VERO</span>. E Fatturiamo{" "}
                  <span className="text-gold">DAVVERO</span>.
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Sai qual è la differenza tra noi e qualsiasi altra agenzia
                    di marketing per serramenti? <strong className="text-foreground">Noi vendiamo infissi.</strong>
                  </p>
                  <p>
                    Il nostro fondatore ha aperto un'azienda di serramenti e
                    ha fatturato <strong className="text-gold">€400.000 nei primi 3 mesi</strong>.
                    Senza sconto in fattura. Senza bonus 110%. Solo marketing
                    e vendita pura.
                  </p>
                  <p>
                    In 2 anni, <strong className="text-gold">oltre €2 milioni di vendite</strong>.
                    Il sistema che ti proponiamo non è teoria da manuale di
                    marketing. È lo STESSO sistema che usiamo per vendere i
                    NOSTRI serramenti, ogni singolo giorno.
                  </p>
                  <p className="text-foreground font-bold">
                    Quando un'agenzia ti dice "sappiamo come vendere infissi",
                    chiedigli quanti ne hanno venduti loro. La risposta ti
                    farà capire tutto.
                  </p>
                </div>
                <div className="mt-8">
                  <Button
                    variant="gold"
                    size="xl"
                    className="glow-gold"
                    onClick={handleCTA}
                  >
                    Voglio Questo Sistema
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SECTION 4 — IL NOSTRO SISTEMA (4 Steps)
        ════════════════════════════════════════════════════ */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-bold mb-6 uppercase tracking-wider">
                  <Target className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                  Il Nostro Sistema
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Come Portiamo{" "}
                  <span className="text-gold">Clienti Qualificati</span> al
                  Tuo Showroom di Serramenti
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Non è magia. È un processo testato su oltre 47 aziende
                  edili e affinato con milioni di euro di budget gestito. 4
                  fasi. Risultati misurabili.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <AnimatedSection key={step.number} delay={index * 0.15}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className={`p-8 rounded-2xl border ${step.bg} h-full relative overflow-hidden`}
                  >
                    {/* Large step number background */}
                    <span className="absolute -top-4 -right-2 text-[120px] font-black text-foreground/[0.03] leading-none select-none">
                      {step.number}
                    </span>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl ${step.bg} border flex items-center justify-center`}
                        >
                          <step.icon className={`w-6 h-6 ${step.color}`} />
                        </div>
                        <div>
                          <span className={`text-sm font-bold ${step.color} uppercase tracking-wider`}>
                            Fase {step.number}
                          </span>
                          <h3 className="text-xl font-black text-foreground">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.6}>
              <div className="mt-12 text-center">
                <p className="text-muted-foreground text-lg mb-6">
                  Vuoi capire nel dettaglio come funziona e quanto costa?
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/servizi">
                    <Button variant="outline" size="xl" className="border-gold/30 text-gold hover:bg-gold/10">
                      Scopri i Servizi
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                  <Link to="/prezzi">
                    <Button variant="outline" size="xl" className="border-border text-muted-foreground hover:text-foreground">
                      Vedi i Prezzi
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SECTION 5 — STATS with Background Image
        ════════════════════════════════════════════════════ */}
        <section className="relative py-24 overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={cantiereImage}
              alt="Cantiere edile con installazione serramenti - risultati marketing infissi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/92" />
          </div>

          <div className="container-narrow relative z-10">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-bold mb-6 uppercase tracking-wider">
                  <BarChart3 className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                  Numeri Reali, Non Promesse
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  I Risultati Parlano.{" "}
                  <span className="text-gold">Noi li Dimostriamo.</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Questi non sono numeri inventati per impressionarti. Sono
                  risultati documentati, verificabili, generati per aziende
                  reali di serramenti e infissi.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  value: "€60M+",
                  label: "Fatturato Generato",
                  detail: "Per i nostri partner edili in tutta Italia",
                },
                {
                  value: "47+",
                  label: "Aziende Partner",
                  detail: "Serramentisti, imprese edili, installatori",
                },
                {
                  value: "€30-40K",
                  label: "Al Mese — Teda Infissi",
                  detail: "Flusso costante di vendite da campagne",
                },
                {
                  value: "+€60K",
                  label: "Primo Mese — Factory",
                  detail: "Venduto aggiuntivo dal primo mese",
                },
              ].map((stat) => (
                <StaggerItem key={stat.label}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-card/80 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 text-center h-full"
                  >
                    <p className="text-3xl md:text-4xl font-black text-gold mb-2">
                      {stat.value}
                    </p>
                    <p className="text-foreground font-bold text-sm mb-1">
                      {stat.label}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {stat.detail}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Case study teaser */}
            <AnimatedSection delay={0.4}>
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                {[
                  {
                    company: "Teda Infissi",
                    result: "€30-40K/mese",
                    quote:
                      "Con un investimento minimo in sponsorizzate, dopo 2 anni abbiamo un flusso costante di clienti da 30-40 mila euro al mese.",
                    author: "Luana Agostini, Titolare",
                  },
                  {
                    company: "S'infissi",
                    result: "+€100K in 3 mesi",
                    quote:
                      "In soli 3 mesi di collaborazione abbiamo generato oltre 100.000 euro di venduto nella nostra zona.",
                    author: "Titolare S'infissi",
                  },
                  {
                    company: "Factory S.r.l.s",
                    result: "+€60K in 1 mese",
                    quote:
                      "In un solo mese di collaborazione abbiamo generato 60.000 euro di venduto in più rispetto alla media.",
                    author: "Titolare Factory S.r.l.s",
                  },
                ].map((cs) => (
                  <motion.div
                    key={cs.company}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-card border border-border rounded-2xl p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-foreground font-bold">
                        {cs.company}
                      </span>
                      <span className="text-gold font-black text-lg">
                        {cs.result}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm italic mb-4 leading-relaxed">
                      "{cs.quote}"
                    </p>
                    <p className="text-xs text-muted-foreground">
                      — {cs.author}
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link to="/casi-studio">
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-gold/30 text-gold hover:bg-gold/10"
                  >
                    Vedi Tutti i Casi Studio
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SECTION 6 — FOUNDER
        ════════════════════════════════════════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Photo */}
              <AnimatedSection direction="left" className="lg:col-span-2">
                <div className="relative">
                  <img
                    src={floPortrait}
                    alt="Florin Andriciuc fondatore Marketing Edile - esperto marketing serramenti e infissi"
                    className="w-full max-w-md mx-auto rounded-2xl object-cover aspect-[3/4]"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-gold/10 border border-gold/30 rounded-2xl p-4 backdrop-blur-sm">
                    <p className="text-gold font-black text-sm">
                      Fondatore & CEO
                    </p>
                    <p className="text-foreground font-bold text-lg">
                      Florin Andriciuc
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Story */}
              <AnimatedSection direction="right" className="lg:col-span-3">
                <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-bold mb-6 uppercase tracking-wider">
                  <Award className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                  Chi Sta Dietro al Sistema
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 leading-tight">
                  "Ho Testato Tutto Su Me Stesso{" "}
                  <span className="text-gold">Prima di Proporlo a Te</span>"
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Non sono il classico "guru del marketing" che ti parla dal
                    suo Mac in una stanza d'albergo. Sono un imprenditore che
                    ha costruito un'azienda di serramenti{" "}
                    <strong className="text-foreground">
                      partendo da zero e portandola a €2M+ in 2 anni
                    </strong>
                    .
                  </p>
                  <p>
                    Ho fatto €400.000 nei primi 3 mesi. Senza sconto in
                    fattura. Senza bonus 110%. Solo marketing a risposta
                    diretta e un sistema di vendita che funziona.
                  </p>
                  <p>
                    Poi ho pensato:{" "}
                    <em className="text-foreground">
                      "Se funziona così bene per me, perché non replicarlo per
                      altri serramentisti?"
                    </em>{" "}
                    È nato Marketing Edile. Oggi, con il mio team, abbiamo
                    generato{" "}
                    <strong className="text-gold">
                      oltre €60 milioni di fatturato
                    </strong>{" "}
                    per i nostri partner.
                  </p>
                  <p className="text-foreground font-bold text-xl border-l-4 border-gold pl-6">
                    Il mio rischio è il tuo rischio. Il mio guadagno dipende
                    dal tuo guadagno. Per questo lavoro solo a provvigione: se
                    non porti a casa risultati, io non merito un centesimo.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-foreground font-bold text-sm">
                        Proprietario
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Azienda serramenti attiva
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-foreground font-bold text-sm">
                        €60M+
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Generati per i partner
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center">
                      <Users className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-foreground font-bold text-sm">
                        47+ Partner
                      </p>
                      <p className="text-muted-foreground text-xs">
                        In tutta Italia
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SECTION 7 — COMPARISON TABLE
        ════════════════════════════════════════════════════ */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-bold mb-6 uppercase tracking-wider">
                  <Eye className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                  Il Confronto
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Agenzia Tradizionale vs{" "}
                  <span className="text-gold">Marketing Edile</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Mettili a confronto. Poi decidi tu con chi vuoi lavorare per
                  il marketing del tuo showroom di infissi.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left p-4 text-muted-foreground font-medium text-sm uppercase tracking-wider border-b border-border w-1/4">
                        Caratteristica
                      </th>
                      <th className="text-left p-4 text-red-400 font-bold text-sm uppercase tracking-wider border-b border-border w-[37.5%]">
                        <span className="flex items-center gap-2">
                          <X className="w-4 h-4" />
                          Agenzia Tradizionale
                        </span>
                      </th>
                      <th className="text-left p-4 text-gold font-bold text-sm uppercase tracking-wider border-b border-gold/30 w-[37.5%] bg-gold/5 rounded-t-xl">
                        <span className="flex items-center gap-2">
                          <Check className="w-4 h-4" />
                          Marketing Edile
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <motion.tr
                        key={row.feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="border-b border-border/50 hover:bg-card/50 transition-colors"
                      >
                        <td className="p-4 text-foreground font-bold text-sm">
                          {row.feature}
                        </td>
                        <td className="p-4 text-muted-foreground text-sm">
                          <span className="flex items-start gap-2">
                            <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                            {row.traditional}
                          </span>
                        </td>
                        <td className="p-4 text-sm bg-gold/5">
                          <span className="flex items-start gap-2 text-foreground">
                            <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                            {row.us}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="mt-12 text-center">
                <p className="text-2xl font-black text-foreground mb-2">
                  La scelta è ovvia.
                </p>
                <p className="text-muted-foreground text-lg mb-8">
                  Smetti di regalare soldi a chi non ha skin in the game.
                </p>
                <Button
                  variant="gold"
                  size="xl"
                  className="glow-gold"
                  onClick={handleCTA}
                >
                  Passa a Marketing Edile
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SECTION 7.5 — TEAM PHOTO BREAK
        ════════════════════════════════════════════════════ */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={teamImage}
              alt="Team Marketing Edile - specialisti marketing serramenti e lead generation infissi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/85" />
          </div>
          <div className="container-narrow relative z-10 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                Un Team che Parla la{" "}
                <span className="text-gold">Tua Lingua</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Non siamo ragazzini appena usciti da un corso online di
                "marketing digitale". Siamo imprenditori edili, specialisti
                di advertising, videomaker, copywriter verticali nel settore
                serramenti. Sappiamo cos'è un Uw, cos'è un profilo a taglio
                termico, qual è la differenza tra un infisso in PVC e uno in
                legno-alluminio.{" "}
                <strong className="text-foreground">
                  Parliamo la tua lingua perché viviamo nel tuo mondo.
                </strong>
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                {[
                  "Specialisti Meta Ads",
                  "Esperti Google Ads",
                  "Videomaker edili",
                  "Copywriter settore serramenti",
                  "Referente dedicato",
                ].map((role) => (
                  <span
                    key={role}
                    className="flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-full text-foreground"
                  >
                    <Check className="w-3 h-3 text-gold" />
                    {role}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SECTION 8 — FAQ
        ════════════════════════════════════════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-bold mb-6 uppercase tracking-wider">
                  <Handshake className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                  Domande Frequenti
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                  Tutto Quello Che Vuoi Sapere sul{" "}
                  <span className="text-gold">Marketing per Serramenti</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Se non trovi la risposta alla tua domanda,{" "}
                  <Link
                    to="/contattaci"
                    className="text-gold underline underline-offset-4 hover:text-gold/80 transition-colors"
                  >
                    contattaci direttamente
                  </Link>
                  . Rispondiamo in 24 ore.
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
                      className="border border-border rounded-2xl overflow-hidden bg-card/50 px-2"
                    >
                      <AccordionTrigger className="p-6 text-left text-lg font-bold text-foreground hover:text-gold transition-colors [&[data-state=open]]:text-gold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimatedSection>

            {/* Internal links for SEO */}
            <AnimatedSection delay={0.4}>
              <div className="mt-12 text-center text-muted-foreground text-sm">
                <p>
                  Approfondisci:{" "}
                  <Link
                    to="/servizi"
                    className="text-gold underline underline-offset-4 hover:text-gold/80 transition-colors"
                  >
                    I nostri servizi
                  </Link>{" "}
                  ·{" "}
                  <Link
                    to="/prezzi"
                    className="text-gold underline underline-offset-4 hover:text-gold/80 transition-colors"
                  >
                    Come funziona il modello a provvigione
                  </Link>{" "}
                  ·{" "}
                  <Link
                    to="/casi-studio"
                    className="text-gold underline underline-offset-4 hover:text-gold/80 transition-colors"
                  >
                    Casi studio documentati
                  </Link>{" "}
                  ·{" "}
                  <Link
                    to="/blog"
                    className="text-gold underline underline-offset-4 hover:text-gold/80 transition-colors"
                  >
                    Blog marketing edile
                  </Link>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SECTION 9 — FINAL CTA
        ════════════════════════════════════════════════════ */}
        <section className="relative py-24 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={heroWindowsImage}
              alt="Serramenti moderni installati - candidati per marketing serramenti a provvigione"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
          </div>

          <div className="container-narrow relative z-10 text-center">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto">
                {/* Urgency badge */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(212, 175, 55, 0)",
                      "0 0 0 10px rgba(212, 175, 55, 0.1)",
                      "0 0 0 0 rgba(212, 175, 55, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/10 border-2 border-red-500/40 rounded-full text-red-400 font-black text-sm uppercase tracking-widest mb-8"
                >
                  <Clock className="w-5 h-5" />
                  SOLO 3 POSTI DISPONIBILI QUESTO MESE
                </motion.div>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
                  Ogni Giorno Che Aspetti, un Tuo{" "}
                  <span className="text-gold">Concorrente</span> Ci Sta
                  Già Lavorando
                </h2>

                <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                  Accettiamo un numero limitato di partner per zona per
                  garantire esclusività territoriale. Se il tuo concorrente si
                  candida prima di te, lavoriamo con lui. Punto.
                </p>

                <p className="text-lg text-muted-foreground mb-10">
                  La valutazione è gratuita. Non ci sono impegni. Ma se
                  aspetti troppo, il posto potrebbe non esserci più.
                </p>

                <div className="flex flex-col items-center gap-6">
                  <Button
                    variant="gold"
                    size="xl"
                    className="glow-gold text-lg px-12 py-6"
                    onClick={handleCTA}
                  >
                    Candidati Ora — Verifica Disponibilità
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </Button>

                  <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-gold" />
                      Zero costo iniziale
                    </span>
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-gold" />
                      Valutazione in 48h
                    </span>
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-gold" />
                      Nessun vincolo
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground/60 max-w-lg">
                    Oppure contattaci direttamente:{" "}
                    <Link
                      to="/contattaci"
                      className="text-gold underline underline-offset-4"
                    >
                      pagina contatti
                    </Link>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            SECTION 10 — CROSS-LINKS TO OTHER SECTORS
        ════════════════════════════════════════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                  Lavoriamo Anche in{" "}
                  <span className="text-gold">Altri Settori Edili</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Il sistema funziona per tutto il comparto edile. Sempre a
                  provvigione. Sempre con risultati misurabili.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {crossLinks.map((link) => (
                <StaggerItem key={link.title}>
                  <Link to={link.href}>
                    <motion.div
                      whileHover={{ scale: 1.03, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors h-full"
                    >
                      <link.icon className="w-8 h-8 text-gold mb-4" />
                      <h3 className="text-foreground font-bold text-lg mb-2">
                        {link.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {link.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-gold text-sm font-semibold mt-4">
                        Scopri di più
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </motion.div>
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

export default Serramenti;
