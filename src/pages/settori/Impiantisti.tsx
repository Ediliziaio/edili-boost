import { useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Wrench,
  Zap,
  Flame,
  ThermometerSun,
  AlertTriangle,
  Users,
  Search,
  MapPin,
  TrendingUp,
  ArrowRight,
  Check,
  X,
  Phone,
  Star,
  Target,
  BarChart3,
  Clock,
  Shield,
  ShieldCheck,
  Building2,
  BadgeDollarSign,
  CircleDollarSign,
  Minus,
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
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import cantiereImage from "@/assets/cantiere.jpg";
import floPortrait from "@/assets/flo-portrait.jpg";

/* ══════════════════════════════════════════════════════════
   DATA
   ══════════════════════════════════════════════════════════ */

const problems = [
  {
    icon: Users,
    title: "PagineGialle e Instapro vendono TE ai tuoi concorrenti",
    desc: "Paghi per un contatto. Quel contatto lo ricevono anche altri 5-10 impiantisti. Risultato? Corsa al ribasso sul prezzo. Vince chi taglia di piu, non chi lavora meglio. E tu sei li a rincorrere preventivi che non chiuderai mai, bruciando tempo e carburante.",
  },
  {
    icon: AlertTriangle,
    title: "Le agenzie generiche ti vendono like, non cantieri",
    desc: "Hai speso 500, 1.000, 2.000 euro al mese con un'agenzia che ti ha portato follower su Instagram e 'visibilita'. Ma il tuo telefono non ha squillato una volta in piu. Perche? Perche non conoscono il tuo settore. Per loro sei uguale a un ristorante o un dentista.",
  },
  {
    icon: Clock,
    title: "Lavori 12 ore al giorno e non hai tempo per il marketing",
    desc: "Sei in cantiere alle 7 del mattino e finisci alle 8 di sera. Chi ha tempo di fare post su Facebook, ottimizzare Google, rispondere alle recensioni? Nessuno. Cosi lasci tutto al caso. E il caso non paga le bollette.",
  },
  {
    icon: CircleDollarSign,
    title: "Competi solo sul prezzo perche non hai un posizionamento",
    desc: "Senza un brand forte, sei uno dei tanti. Il cliente chiama te e altri tre, confronta i preventivi e sceglie il piu economico. Non importa se il tuo lavoro vale il doppio: se non sai comunicarlo, per il mercato non esisti. E continuerai a lavorare per margini da fame.",
  },
];

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Analisi chirurgica del tuo territorio",
    desc: "Mappiamo la domanda reale nella tua zona: quante persone cercano un idraulico, un elettricista, un climatizzatore ogni mese. Analizziamo i tuoi concorrenti, i loro punti deboli e le opportunita che nessuno sta sfruttando. Niente strategie copia-incolla: ogni numero e verificato, ogni decisione e basata su dati reali del tuo mercato locale.",
  },
  {
    num: "02",
    icon: Target,
    title: "Costruiamo il TUO brand come specialista di zona",
    desc: "Google Maps dominato. Recensioni a 5 stelle che arrivano ogni settimana. Landing page che trasformano clic in chiamate. Campagne Google Ads e Meta Ads calibrate sulla tua specializzazione. Non sei piu 'un impiantista': diventi L'impiantista della tua zona. Quello che la gente consiglia, quello che Google mostra per primo.",
  },
  {
    num: "03",
    icon: Phone,
    title: "Ti arrivano contatti che VOGLIONO spendere",
    desc: "Niente perditempo. Niente richieste di preventivo da confrontare con altri 10. I contatti che generiamo sono persone che hanno gia deciso di investire: ristrutturazioni complete, nuovi impianti, sostituzioni caldaia, rifacimenti elettrici. Clienti pre-qualificati che cercano qualita, non il prezzo piu basso.",
  },
  {
    num: "04",
    icon: TrendingUp,
    title: "Scala: piu zone, piu servizi, piu fatturato",
    desc: "Quando il flusso e costante, si cresce. Piu zone coperte, piu servizi promossi, piu collaboratori assunti. Il sistema scala con te. E siccome paghi solo a provvigione sulle commesse chiuse, il rischio e sempre ZERO. Il tuo successo e il nostro successo. Letteralmente.",
  },
];

const stats = [
  { value: "47+", label: "Aziende edili gestite in Italia" },
  { value: "€60M+", label: "Fatturato generato ai nostri partner" },
  { value: "0%", label: "Canone fisso mensile" },
  { value: "100%", label: "A provvigione su commesse chiuse" },
];

const comparisonRows = [
  {
    feature: "Modello di pagamento",
    col1: "Paghi per ogni contatto (condiviso)",
    col2: "Canone fisso mensile",
    col3: "Solo provvigione su commesse chiuse",
  },
  {
    feature: "Esclusiva di zona",
    col1: false,
    col2: false,
    col3: true,
  },
  {
    feature: "Contatti condivisi con concorrenti",
    col1: true,
    col2: false,
    col3: false,
  },
  {
    feature: "Specializzazione nel settore edile",
    col1: false,
    col2: false,
    col3: true,
  },
  {
    feature: "Costruzione del tuo brand",
    col1: false,
    col2: "Parziale",
    col3: true,
  },
  {
    feature: "Google Maps + Recensioni + SEO locale",
    col1: false,
    col2: "Parziale",
    col3: true,
  },
  {
    feature: "Campagne calibrate sulla tua zona",
    col1: false,
    col2: "Generiche",
    col3: true,
  },
  {
    feature: "Rischio per te",
    col1: "Alto — paghi sempre",
    col2: "Alto — paghi anche senza risultati",
    col3: "Zero — paghi solo se guadagni",
  },
];

const faqs = [
  {
    question:
      "Lavorate anche con impiantisti che lavorano da soli, senza dipendenti?",
    answer:
      "Si, assolutamente. Molti dei nostri partner hanno iniziato come ditte individuali. L'unico requisito e che tu sia in grado di gestire i contatti che ti portiamo e che tu abbia la volonta di crescere. Il nostro sistema si adatta al tuo volume attuale e scala con te man mano che assumi collaboratori.",
  },
  {
    question: "Quanto tempo ci vuole per vedere i primi risultati?",
    answer:
      "I primi contatti qualificati arrivano generalmente entro 2-4 settimane dall'attivazione. Il sistema raggiunge la piena efficacia dopo 60-90 giorni, quando il posizionamento locale si consolida, le recensioni si accumulano e le campagne sono completamente ottimizzate. Dopo quel punto, il flusso diventa prevedibile e crescente.",
  },
  {
    question: "Devo pagare un fisso mensile per il vostro servizio?",
    answer:
      "No. Zero canone. Zero fee mensile. Zero costi nascosti. Paghi solo una provvigione sulle commesse effettivamente chiuse grazie al nostro sistema. L'unico investimento a tuo carico e il budget pubblicitario per le campagne (Google Ads, Meta Ads), che viene gestito e ottimizzato dal nostro team. Se non chiudi lavori, non ci devi nulla.",
  },
  {
    question:
      "Cosa vi distingue da PagineGialle, Instapro o altre piattaforme?",
    answer:
      "La differenza fondamentale: noi NON vendiamo contatti condivisi. Il lead che generiamo e solo tuo. Non lo riceve nessun altro. In piu, non ci limitiamo a portarti contatti: costruiamo il tuo brand, dominiamo Google Maps nella tua zona, gestiamo le tue recensioni e creiamo un sistema di acquisizione clienti che lavora per te 24/7. Le piattaforme ti vendono un nome in una lista. Noi ti rendiamo IL nome della tua zona.",
  },
  {
    question: "Come fate a portarmi clienti per lavori grandi e non solo riparazioni da 80 euro?",
    answer:
      "Il targeting fa tutta la differenza. Le piattaforme generiche attirano chi cerca il prezzo piu basso per una riparazione veloce. Le nostre campagne intercettano chi sta pianificando una ristrutturazione, chi ha comprato casa nuova, chi deve sostituire la caldaia o rifare l'impianto elettrico. Lavoriamo su parole chiave specifiche e contenuti che dimostrano la tua competenza, attraendo clienti disposti a investire nella qualita.",
  },
  {
    question: "Lavorate con impiantisti in tutta Italia?",
    answer:
      "Si, dalla Lombardia alla Sicilia. La nostra strategia e basata sul marketing locale, quindi ogni campagna e costruita per la tua zona operativa specifica. L'unico vincolo: accettiamo UN solo partner per specializzazione per zona geografica. Se il tuo territorio e gia coperto, non possiamo accettarti. Questo garantisce a ogni partner l'esclusiva assoluta.",
  },
  {
    question: "E se non funziona? Che rischio corro?",
    answer:
      "Praticamente zero. Non paghi canoni, non firmi contratti vincolanti di 12 mesi, non anticipi nulla. Paghi solo una percentuale sulle commesse che chiudi grazie al nostro sistema. Se non chiudi nulla, non ci devi nulla. Il rischio e tutto dalla nostra parte — ed e esattamente per questo che selezioniamo attentamente i partner con cui lavoriamo.",
  },
  {
    question: "Quanto budget pubblicitario devo investire?",
    answer:
      "Dipende dalla tua zona e dalla concorrenza locale. In media, i nostri partner investono tra i 500 e i 1.500 euro al mese in budget pubblicitario. Questo budget viene gestito e ottimizzato interamente dal nostro team per massimizzare ogni euro. Ti forniamo report settimanali con costo per contatto, tasso di conversione e ROI, cosi sai sempre esattamente dove vanno i tuoi soldi.",
  },
];

/* ══════════════════════════════════════════════════════════
   COMPONENT
   ══════════════════════════════════════════════════════════ */

const Impiantisti = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Marketing Impiantisti | Clienti a Provvigione"
        description="Lead generation per idraulici, elettricisti, climatizzazione. Zero canone, paghi solo su commesse chiuse. 47+ aziende, €60M+ generati."
        keywords={[
          "marketing impiantisti",
          "lead generation impiantisti",
          "clienti per idraulici",
          "marketing elettricisti",
          "marketing climatizzazione",
          "pubblicita idraulico",
          "acquisizione clienti impianti",
          "marketing termoidraulici",
        ]}
        url={`${siteConfig.url}/settori/impiantisti`}
        jsonLd={[
          generateBreadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Settori", url: `${siteConfig.url}/settori` },
            {
              name: "Impiantisti",
              url: `${siteConfig.url}/settori/impiantisti`,
            },
          ]),
          generateFAQSchema(faqs),
          generateServiceSchema({
            name: "Marketing per Impiantisti",
            description:
              "Sistema di lead generation e acquisizione clienti per idraulici, elettricisti, termoidraulici e installatori HVAC. Solo a provvigione sulle commesse chiuse.",
            url: `${siteConfig.url}/settori/impiantisti`,
          }),
        ]}
      />

      <Navbar />

      <main className="min-h-screen bg-background text-foreground overflow-hidden">
        {/* ═══════════════════════════════════════════════════
            1. HERO — cantiere.jpg background
           ═══════════════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] flex items-center section-padding pt-32 pb-20">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={cantiereImage}
              alt="Cantiere edile - marketing per impiantisti, idraulici, elettricisti"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
          </div>

          <div className="container-narrow relative z-10">
            <AnimatedSection>
              <div className="max-w-3xl">
                {/* Provvigione badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/40 rounded-full mb-6"
                >
                  <BadgeDollarSign className="w-4 h-4 text-gold" />
                  <span className="text-gold text-sm font-bold uppercase tracking-wider">
                    Solo a Provvigione — Zero Canone
                  </span>
                </motion.div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] mb-6">
                  Marketing per Impiantisti che{" "}
                  <span className="text-gold">Porta Cantieri,</span>
                  <br />
                  Non Promesse Vuote
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl leading-relaxed">
                  Sei stufo di PagineGialle che vende il tuo contatto a 10
                  concorrenti? Di agenzie che ti portano follower invece di
                  clienti? Di lavorare 12 ore al giorno senza sapere da dove
                  arrivera il prossimo lavoro?
                </p>

                <p className="text-base text-gray-400 mb-8 max-w-2xl">
                  <strong className="text-white">
                    Marketing Edile e diverso.
                  </strong>{" "}
                  Lavoriamo SOLO con aziende del settore edile. Paghi SOLO a
                  provvigione sulle commesse chiuse. Se non guadagni tu, non
                  guadagniamo noi. Fine.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/#candidati">
                    <Button
                      variant="default"
                      size="lg"
                      className="bg-gold hover:bg-gold/90 text-black font-bold text-lg px-8 py-6 w-full sm:w-auto"
                    >
                      Candidati Ora — Zero Costi
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/casi-studio">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/20 hover:bg-white/5 text-lg px-8 py-6 w-full sm:w-auto"
                    >
                      Vedi i Risultati Reali
                    </Button>
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-gold" /> 47+ aziende
                    gestite
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-gold" /> €60M+ generati
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-gold" /> Esclusiva di zona
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            2. IL PROBLEMA VERO
           ═══════════════════════════════════════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm font-bold uppercase tracking-wider mb-4">
                  Il Problema Vero
                </span>
                <h2 className="text-3xl md:text-5xl font-black mb-6">
                  Perche il Tuo Telefono{" "}
                  <span className="text-red-400">Non Squilla Abbastanza</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                  Non e colpa tua. E colpa del sistema che stai usando — o meglio, che NON stai usando.
                  Ecco cosa ti sta frenando.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6">
              {problems.map((p, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-card rounded-2xl p-8 border border-red-500/10 hover:border-red-500/30 transition-colors h-full">
                    <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4">
                      <p.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.4}>
              <div className="mt-12 text-center">
                <p className="text-xl md:text-2xl font-bold text-foreground">
                  Se ti riconosci in almeno uno di questi punti,{" "}
                  <span className="text-gold">
                    abbiamo costruito un sistema per risolvere esattamente questo.
                  </span>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            3. PHOTO BREAK — cantiere.jpg overlay
           ═══════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={cantiereImage}
              alt="Impiantista al lavoro in cantiere - lead generation per idraulici e elettricisti"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="container-narrow relative z-10 text-center">
            <AnimatedSection>
              <p className="text-gold text-sm font-bold uppercase tracking-widest mb-4">
                La Verita Scomoda
              </p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl mx-auto mb-6">
                I Tuoi Concorrenti Stanno Investendo in Marketing.{" "}
                <span className="text-gold">Tu Stai Aspettando Che il Telefono Squilli.</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                Ogni giorno che passa senza un sistema di acquisizione clienti, stai regalando
                lavori — e fatturato — a chi lo ha gia.
              </p>
              <Link to="/#candidati">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-black font-bold text-lg px-10 py-6"
                >
                  Smetti di Aspettare — Candidati Ora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            4. IL NOSTRO SISTEMA — 4 step
           ═══════════════════════════════════════════════════ */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-bold uppercase tracking-wider mb-4">
                  Il Nostro Sistema
                </span>
                <h2 className="text-3xl md:text-5xl font-black mb-6">
                  Come Trasformiamo un Impiantista Invisibile nel{" "}
                  <span className="text-gold">Punto di Riferimento</span> della Sua Zona
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Non vendiamo like. Non vendiamo follower. Costruiamo un
                  sistema che ti porta clienti veri, ogni settimana, in modo
                  prevedibile. Ecco come funziona.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-8">
              {steps.map((s, i) => (
                <AnimatedSection key={i} delay={i * 0.12}>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gold/10 border-2 border-gold/40 rounded-2xl flex items-center justify-center">
                        <span className="text-gold font-black text-xl">
                          {s.num}
                        </span>
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-px h-8 bg-gold/20 mx-auto mt-2" />
                      )}
                    </div>
                    <div className="bg-card rounded-2xl p-8 border border-border hover:border-gold/20 transition-colors flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <s.icon className="w-5 h-5 text-gold" />
                        <h3 className="text-xl font-bold text-foreground">
                          {s.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.5}>
              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-4 text-lg">
                  Vuoi capire nel dettaglio tutti i servizi inclusi nel sistema?
                </p>
                <Link
                  to="/servizi"
                  className="inline-flex items-center text-gold hover:text-gold/80 font-bold text-lg transition-colors"
                >
                  Scopri tutti i servizi Marketing Edile
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            5. STATS
           ═══════════════════════════════════════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-black mb-4">
                  I Numeri Parlano.{" "}
                  <span className="text-gold">Le Promesse No.</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Non proiezioni. Non stime. Dati reali da campagne attive
                  monitorate ogni settimana.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-card rounded-2xl p-8 text-center border border-border hover:border-gold/20 transition-colors">
                    <div className="text-4xl md:text-5xl font-black text-gold mb-3">
                      {s.value}
                    </div>
                    <p className="text-muted-foreground text-sm font-medium">
                      {s.label}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.4}>
              <div className="mt-10 text-center">
                <Link
                  to="/casi-studio"
                  className="inline-flex items-center text-gold hover:text-gold/80 font-bold transition-colors"
                >
                  Vedi i casi studio completi
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            6. FOUNDER — flo-portrait.jpg
           ═══════════════════════════════════════════════════ */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="grid md:grid-cols-5 gap-10 items-center">
              <AnimatedSection className="md:col-span-2" direction="left">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gold/10 rounded-2xl blur-xl" />
                  <img
                    src={floPortrait}
                    alt="Florian Andriciuc - fondatore Marketing Edile, esperto marketing impiantisti"
                    className="relative rounded-2xl w-full object-cover shadow-2xl border border-border"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection className="md:col-span-3" direction="right">
                <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-bold mb-4">
                  Chi C'e Dietro
                </span>
                <h2 className="text-3xl md:text-4xl font-black mb-6 text-foreground">
                  "Lavoriamo a provvigione perche siamo{" "}
                  <span className="text-gold">dannatamente bravi</span> in
                  quello che facciamo."
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    Mi chiamo Florian Andriciuc. Ho fondato Marketing Edile con
                    un'idea semplice: se un'agenzia di marketing e davvero
                    capace, non ha bisogno di chiederti un canone fisso. Puo
                    guadagnare direttamente dai risultati che produce.
                  </p>
                  <p>
                    Ecco perche lavoriamo SOLO a provvigione sulle commesse
                    chiuse. Se non ti portiamo lavori, non guadagniamo nulla.
                    Questo modello ci obbliga ad essere ossessionati dai tuoi
                    risultati — non dai report pieni di metriche inutili.
                  </p>
                  <p className="font-semibold text-foreground">
                    47+ aziende edili in tutta Italia. Oltre 60 milioni di euro
                    di fatturato generato ai nostri partner. Non con trucchi, ma
                    con un sistema che funziona.
                  </p>
                </div>
                <div className="mt-8">
                  <Link to="/#candidati">
                    <Button
                      variant="default"
                      size="lg"
                      className="bg-gold hover:bg-gold/90 text-black font-bold px-8 py-6"
                    >
                      Voglio lo Stesso Sistema
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            7. COMPARISON TABLE
           ═══════════════════════════════════════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-bold uppercase tracking-wider mb-4">
                  Confronto Diretto
                </span>
                <h2 className="text-3xl md:text-5xl font-black mb-4">
                  PagineGialle / Instapro vs Agenzia Generica vs{" "}
                  <span className="text-gold">Marketing Edile</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Mettili a confronto. Poi decidi con chi vuoi lavorare.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4 text-muted-foreground font-medium text-sm w-1/4">
                        Caratteristica
                      </th>
                      <th className="text-center py-4 px-4 text-red-400 font-bold text-sm w-1/4">
                        PagineGialle / Instapro
                      </th>
                      <th className="text-center py-4 px-4 text-orange-400 font-bold text-sm w-1/4">
                        Agenzia Generica
                      </th>
                      <th className="text-center py-4 px-4 text-gold font-bold text-sm w-1/4">
                        Marketing Edile
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-border/50 hover:bg-card/50 transition-colors"
                      >
                        <td className="py-4 px-4 text-foreground font-medium text-sm">
                          {row.feature}
                        </td>
                        {[row.col1, row.col2, row.col3].map((val, j) => (
                          <td key={j} className="py-4 px-4 text-center">
                            {val === true ? (
                              <Check
                                className={`w-5 h-5 mx-auto ${
                                  j === 2 ? "text-gold" : "text-green-400"
                                }`}
                              />
                            ) : val === false ? (
                              <X className="w-5 h-5 mx-auto text-red-400" />
                            ) : (
                              <span
                                className={`text-sm ${
                                  j === 2
                                    ? "text-gold font-bold"
                                    : "text-muted-foreground"
                                }`}
                              >
                                {val}
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-10 text-center">
                <Link to="/prezzi">
                  <span className="inline-flex items-center text-gold hover:text-gold/80 font-bold transition-colors">
                    Scopri come funziona il modello a provvigione
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            8. FAQ — Accordion
           ═══════════════════════════════════════════════════ */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-bold uppercase tracking-wider mb-4">
                  Domande Frequenti
                </span>
                <h2 className="text-3xl md:text-4xl font-black mb-4">
                  Ogni Impiantista Ci Fa Queste Domande.{" "}
                  <span className="text-gold">Ecco le Risposte.</span>
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="bg-card rounded-2xl border border-border px-6 data-[state=open]:border-gold/30"
                    >
                      <AccordionTrigger className="text-left text-foreground font-semibold text-base md:text-lg hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            9. FINAL CTA
           ═══════════════════════════════════════════════════ */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-gold/10 via-gold/5 to-transparent rounded-2xl p-10 md:p-16 border border-gold/20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_70%)]" />
                <div className="relative z-10">
                  <p className="text-gold text-sm font-bold uppercase tracking-widest mb-4">
                    Posti Limitati Per Zona
                  </p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-foreground">
                    Ogni Giorno Che Aspetti, un Tuo Concorrente{" "}
                    <span className="text-gold">
                      Ti Sta Rubando Clienti
                    </span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
                    Accettiamo UN solo partner per specializzazione per zona
                    geografica. Se il tuo territorio e ancora disponibile, non
                    aspettare che lo prenda qualcun altro.
                  </p>
                  <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto">
                    Candidatura gratuita. Nessun impegno. Nessun costo. Solo
                    una valutazione onesta del tuo potenziale di crescita.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/#candidati">
                      <Button
                        variant="default"
                        size="lg"
                        className="bg-gold hover:bg-gold/90 text-black font-bold text-lg px-10 py-6 glow-gold w-full sm:w-auto"
                      >
                        Candidati Ora — Zero Costi, Zero Rischi
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-gold" /> Solo a
                      provvigione
                    </span>
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-gold" /> Esclusiva di
                      zona
                    </span>
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-gold" /> Valutazione
                      gratuita
                    </span>
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-gold" /> Spesa
                      pubblicitaria esclusa
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            10. CROSS-LINKS
           ═══════════════════════════════════════════════════ */}
        <section className="section-padding bg-background border-t border-border">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-black text-foreground">
                  Approfondisci
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  to: "/servizi",
                  label: "Tutti i Servizi",
                  desc: "Cosa include il sistema Marketing Edile",
                },
                {
                  to: "/prezzi",
                  label: "Come Funziona il Prezzo",
                  desc: "Il modello a provvigione spiegato",
                },
                {
                  to: "/casi-studio",
                  label: "Casi Studio",
                  desc: "Risultati reali dei nostri partner",
                },
                {
                  to: "/blog",
                  label: "Blog",
                  desc: "Guide e strategie per impiantisti",
                },
              ].map((link, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <Link
                    to={link.to}
                    className="block bg-card rounded-2xl p-6 border border-border hover:border-gold/30 transition-colors group"
                  >
                    <h3 className="font-bold text-foreground group-hover:text-gold transition-colors mb-1">
                      {link.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">{link.desc}</p>
                    <ArrowRight className="w-4 h-4 text-gold mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
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

export default Impiantisti;
