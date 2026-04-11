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
  Phone,
  Star,
  Target,
  BarChart3,
  Clock,
  Shield,
  ChevronDown,
  ChevronUp,
  Building2,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { siteConfig, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo";
import { useState } from "react";

/* ─── Data ─── */

const problems = [
  {
    icon: Users,
    title: "Dipendenza totale dal passaparola",
    description:
      "Il 90% degli impiantisti si affida esclusivamente al passaparola per trovare nuovi clienti. Quando i contatti si fermano, il fatturato crolla. Non hai un sistema prevedibile per generare nuovi lavori ogni mese e sei in balia delle raccomandazioni altrui, senza alcun controllo sulla quantità e qualità dei clienti che arrivano.",
  },
  {
    icon: TrendingUp,
    title: "Lavori piccoli e margini bassi",
    description:
      "Perdi tempo con riparazioni da 80-150 euro che non coprono nemmeno i costi di spostamento. Il problema non è la competenza tecnica, ma l'incapacità di attrarre lavori di ristrutturazione completa, installazioni ex novo e contratti di manutenzione programmata che generano margini reali e continuativi nel tempo.",
  },
  {
    icon: Search,
    title: "Nessuna presenza online efficace",
    description:
      "Quando un potenziale cliente cerca 'idraulico vicino a me' o 'elettricista urgente', trova i tuoi concorrenti. La tua scheda Google Business non è ottimizzata, non hai recensioni recenti e il tuo sito web — se ne hai uno — non converte visitatori in chiamate. Sei invisibile esattamente dove i clienti cercano.",
  },
  {
    icon: Building2,
    title: "Concorrenza da grandi aziende e multiservizi",
    description:
      "Le grandi aziende impiantistiche e i multiservizi investono in marketing, sponsorizzazioni e presenza digitale. Hanno budget, struttura commerciale e visibilità. Tu hai competenza e qualità superiori, ma nessuno lo sa perché non hai gli strumenti per comunicarlo al mercato in modo efficace e sistematico.",
  },
];

const solutions = [
  {
    icon: MapPin,
    title: "Dominanza locale garantita",
    description:
      "Ti posizioniamo come il punto di riferimento nella tua zona per ogni tipo di impianto. Strategia SEO locale, Google Maps, directory di settore: quando qualcuno cerca un impiantista nella tua area, trova te. Non i tuoi concorrenti. Costruiamo una presenza digitale locale che lavora per te 24 ore su 24, 7 giorni su 7.",
  },
  {
    icon: Star,
    title: "Ottimizzazione Google Business Profile",
    description:
      "La tua scheda Google diventa una macchina per generare contatti. Foto professionali dei tuoi lavori, risposte alle recensioni, post settimanali, categorie ottimizzate. Ogni elemento è calibrato per farti apparire nelle ricerche locali e convincere chi ti trova a chiamarti immediatamente, senza confrontarti con altri.",
  },
  {
    icon: Phone,
    title: "Posizionamento per servizi urgenti",
    description:
      "Tubatura rotta, corto circuito, caldaia guasta: i servizi di emergenza generano chiamate ad alto valore. Ti posizioniamo come la prima scelta per le urgenze nella tua zona con campagne Google Ads specifiche, landing page dedicate e un sistema che trasforma ogni emergenza risolta in un cliente fidelizzato a lungo termine.",
  },
  {
    icon: TrendingUp,
    title: "Upselling: da piccoli lavori a grandi contratti",
    description:
      "Ogni riparazione è un'opportunità per proporre manutenzione programmata, sostituzione impianti o ristrutturazione completa. Creiamo un sistema di follow-up automatizzato che trasforma il cliente della riparazione da 100 euro nel cliente del rifacimento impianto da 15.000 euro, moltiplicando il tuo fatturato medio per cliente.",
  },
  {
    icon: Building2,
    title: "Targeting nuove costruzioni e ristrutturazioni",
    description:
      "Intercettiamo chi sta costruendo o ristrutturando casa prima che scelga l'impiantista. Campagne mirate su Facebook e Instagram verso chi ha appena comprato casa, chi sta cercando ristrutturazioni, chi naviga siti di arredamento. Arriviamo al cliente quando sta decidendo, non quando ha già scelto qualcun altro.",
  },
];

const stats = [
  { value: "340%", label: "Aumento medio visibilità locale", icon: TrendingUp },
  { value: "67+", label: "Contatti qualificati al mese per impiantista", icon: Phone },
  { value: "€18.500", label: "Valore medio per commessa generata", icon: BarChart3 },
  { value: "4,2x", label: "ROI medio sul budget investito", icon: Target },
];

const installerTypes = [
  {
    icon: Wrench,
    title: "Idraulici",
    description:
      "Installazione e manutenzione impianti idrici e sanitari, ristrutturazione bagni, sostituzione tubature, riparazioni urgenti. Generiamo chiamate da clienti che cercano un idraulico affidabile nella tua zona, non il più economico.",
  },
  {
    icon: Zap,
    title: "Elettricisti",
    description:
      "Impianti elettrici civili e industriali, certificazioni, adeguamenti normativa, domotica. Ti portiamo clienti per nuove installazioni e rifacimenti completi, non solo per la presa che non funziona.",
  },
  {
    icon: Flame,
    title: "Termoidraulici",
    description:
      "Impianti di riscaldamento, raffrescamento, solare termico e gestione completa del comfort abitativo. Posizionamento come specialista per ristrutturazioni energetiche e riqualificazioni complete degli edifici.",
  },
  {
    icon: ThermometerSun,
    title: "Impiantisti HVAC",
    description:
      "Climatizzazione, ventilazione meccanica controllata, pompe di calore e sistemi integrati. Intercettiamo la domanda crescente di efficienza energetica e comfort abitativo con campagne mirate e altamente specifiche.",
  },
  {
    icon: Shield,
    title: "Installatori caldaie e sistemi termici",
    description:
      "Sostituzione caldaie, installazione pompe di calore, sistemi ibridi e manutenzione programmata. Sfruttiamo la stagionalità e gli incentivi fiscali per generare ondate di richieste nei momenti di massima domanda del mercato.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Analisi del tuo mercato locale",
    description:
      "Studiamo la tua zona, i concorrenti, la domanda reale e le opportunità non sfruttate. Mappiamo i servizi che generano più margine e identifichiamo i canali dove i tuoi clienti ideali cercano un impiantista. Nessuna strategia generica: tutto è calibrato sulla tua realtà specifica, sulla tua specializzazione e sul tuo territorio.",
    icon: Search,
  },
  {
    step: "02",
    title: "Costruzione del sistema di acquisizione",
    description:
      "Creiamo landing page ottimizzate per ogni servizio, configuriamo campagne pubblicitarie su Google e social media, ottimizziamo la tua scheda Google Business Profile e costruiamo un sistema di gestione contatti che non lascia scappare nessuna opportunità. Ogni elemento è progettato per convertire ricerche in chiamate e chiamate in preventivi accettati.",
    icon: Target,
  },
  {
    step: "03",
    title: "Lancio e ottimizzazione continua",
    description:
      "Attiviamo le campagne e monitoriamo ogni singolo dato: costo per contatto, tasso di conversione, valore medio dei lavori generati, ritorno sull'investimento. Ogni settimana ottimizziamo, testiamo nuovi angoli, eliminiamo ciò che non funziona e raddoppiamo ciò che funziona. Il tuo sistema migliora settimana dopo settimana, mese dopo mese.",
    icon: BarChart3,
  },
  {
    step: "04",
    title: "Scala il tuo business",
    description:
      "Quando il flusso di clienti è costante e prevedibile, è il momento di crescere. Più zone coperte, più servizi promossi, team più grande. Il nostro sistema scala con te senza costi fissi aggiuntivi: paghi sempre e solo una percentuale sulle vendite effettive. Il tuo successo è il nostro successo, letteralmente.",
    icon: TrendingUp,
  },
];

const faqs = [
  {
    question: "Lavorate anche con impiantisti che lavorano da soli, senza dipendenti?",
    answer:
      "Assolutamente sì. Molti dei nostri impiantisti partner hanno iniziato come ditte individuali e oggi, grazie al flusso costante di clienti che generiamo, hanno assunto collaboratori e ampliato la propria attività. Il nostro sistema si adatta al tuo volume attuale e cresce con te. L'unico requisito è che tu sia in grado di gestire i contatti che ti portiamo e che tu abbia la volontà di far crescere la tua impresa.",
  },
  {
    question: "Quanto tempo ci vuole per vedere i primi risultati concreti?",
    answer:
      "I primi contatti qualificati arrivano generalmente entro 2-4 settimane dall'attivazione delle campagne. Tuttavia, il sistema raggiunge la piena efficacia dopo 60-90 giorni, quando l'ottimizzazione continua, le recensioni accumulate e il posizionamento locale consolidato iniziano a generare un flusso prevedibile e crescente di richieste. La pazienza nei primi mesi viene ripagata con risultati esponenziali nei mesi successivi.",
  },
  {
    question: "Devo pagare un fisso mensile per il vostro servizio?",
    answer:
      "No. Marketing Edile lavora esclusivamente a percentuale sulle vendite generate. Questo significa che guadagniamo solo quando tu guadagni. Non ci sono fee mensili, costi nascosti o abbonamenti. L'unico investimento a tuo carico è il budget pubblicitario per le campagne, che viene gestito e ottimizzato interamente dal nostro team per massimizzare ogni euro investito.",
  },
  {
    question: "Come fate a portarmi clienti per lavori grandi e non solo riparazioni?",
    answer:
      "La differenza sta nel targeting. Le campagne generiche attirano chi cerca il prezzo più basso per una riparazione veloce. Le nostre campagne sono progettate per intercettare chi sta pianificando una ristrutturazione, chi ha comprato casa, chi vuole adeguare l'impianto elettrico o sostituire la caldaia. Lavoriamo su parole chiave specifiche, contenuti educativi che dimostrano la tua competenza e un posizionamento premium che attira clienti disposti a investire nella qualità.",
  },
  {
    question: "Lavorate con impiantisti in tutta Italia o solo in alcune zone?",
    answer:
      "Lavoriamo con impiantisti in tutta Italia, dalla Lombardia alla Sicilia. La nostra strategia è basata sul marketing locale, quindi ogni campagna è costruita specificamente per la tua zona operativa. Che tu lavori in una grande città o in un'area provinciale, il nostro sistema si adatta al tuo territorio. L'unico vincolo è che accettiamo un solo partner per specializzazione per ogni zona geografica, per evitare conflitti di interesse e garantirti l'esclusiva nella tua area.",
  },
];

/* ─── Component ─── */

const Impiantisti = () => {
  const navigate = useNavigate();
  const handleCTA = () => navigate("/#candidati");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Marketing per Impiantisti"
        description="Lead generation per impiantisti: idraulici, elettricisti, termoidraulici. Clienti qualificati solo a percentuale. Scopri il sistema Marketing Edile."
        keywords={[
          "marketing impiantisti",
          "lead generation impiantisti",
          "clienti per impiantisti",
          "pubblicità idraulico",
          "marketing elettricista",
          "acquisizione clienti impianti",
        ]}
        url={`${siteConfig.url}/settori/impiantisti`}
        jsonLd={[
          generateBreadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Settori", url: `${siteConfig.url}/settori` },
            { name: "Impiantisti", url: `${siteConfig.url}/settori/impiantisti` },
          ]),
          generateFAQSchema(faqs),
        ]}
      />

      <Navbar />

      <main className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
        {/* ── Hero ── */}
        <section className="section-padding pt-32 pb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-transparent" />
          <div className="container-narrow relative z-10">
            <AnimatedSection>
              <div className="text-center max-w-4xl mx-auto">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm font-semibold mb-6"
                >
                  Settore Impiantistica
                </motion.span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Marketing per Impiantisti:{" "}
                  <span className="text-gold">Idraulici, Elettricisti e Termoidraulici</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
                  Il sistema di acquisizione clienti pensato per chi installa, ripara e mantiene gli impianti che fanno funzionare case e aziende.{" "}
                  <strong className="text-white">Solo a percentuale sulle vendite</strong> — nessun fisso mensile.
                </p>

                <p className="text-base text-gray-400 mb-10 max-w-2xl mx-auto">
                  Ogni giorno migliaia di persone nella tua zona cercano un impiantista su Google. Il problema non è la domanda: è che quei clienti finiscono dai tuoi concorrenti. Noi li portiamo da te, con un sistema collaudato su oltre 47 aziende del settore edile in tutta Italia.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleCTA}
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-black font-bold text-lg px-8 py-6"
                  >
                    Candidati ora — è gratuito
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    onClick={() => navigate("/casi-studio")}
                    variant="outline"
                    size="lg"
                    className="border-white/20 hover:bg-white/5 text-lg px-8 py-6"
                  >
                    Vedi i risultati
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Problems ── */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold mb-4">
                  I problemi
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Perché il tuo telefono <span className="text-red-400">non squilla abbastanza</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                  Se sei un impiantista con esperienza e competenza, ma non riesci a far crescere la tua azienda come vorresti, il problema non sei tu. È il tuo sistema di acquisizione clienti — o meglio, la sua totale assenza.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6">
              {problems.map((problem, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-card rounded-2xl p-8 border border-red-500/10 hover:border-red-500/20 transition-colors h-full">
                    <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4">
                      <problem.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{problem.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Solution ── */}
        <section className="section-padding">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm font-semibold mb-4">
                  La soluzione
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Come <span className="text-secondary">Marketing Edile</span> porta clienti agli impiantisti
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                  Non siamo un'agenzia generica che vende like e follower. Siamo specializzati nel settore edile e lavoriamo solo a percentuale. Il nostro unico obiettivo è portarti clienti che firmano preventivi, non contatti inutili che ti fanno perdere tempo.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-card rounded-2xl p-8 border border-secondary/10 hover:border-secondary/20 transition-colors">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <solution.icon className="w-7 h-7 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{solution.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.3}>
              <div className="mt-12 text-center">
                <p className="text-gray-400 mb-6 text-lg">
                  Vuoi capire nel dettaglio tutti i servizi inclusi nel nostro sistema?
                </p>
                <Link
                  to="/servizi"
                  className="inline-flex items-center text-secondary hover:text-secondary/80 font-semibold text-lg transition-colors"
                >
                  Scopri tutti i servizi
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  I numeri parlano <span className="text-gold">più delle promesse</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Risultati medi ottenuti dagli impiantisti che lavorano con il sistema Marketing Edile. Non proiezioni teoriche: dati reali da campagne attive monitorati settimanalmente.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-card rounded-2xl p-6 text-center border border-white/5">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.value}</div>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Types of Installers ── */}
        <section className="section-padding">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 bg-blue-400/10 border border-blue-400/30 rounded-full text-blue-400 text-sm font-semibold mb-4">
                  Specializzazioni
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Tipologie di impiantisti con cui <span className="text-secondary">lavoriamo</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                  Ogni specializzazione ha esigenze diverse, clienti target diversi e strategie di marketing specifiche. Non applichiamo lo stesso schema a tutti: ogni campagna è costruita sulle peculiarità del tuo settore e del tuo territorio.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {installerTypes.map((type, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-card rounded-2xl p-8 border border-white/5 hover:border-secondary/20 transition-colors h-full group">
                    <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                      <type.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{type.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.4}>
              <div className="mt-12 bg-card rounded-2xl p-8 border border-secondary/20 text-center">
                <Lightbulb className="w-10 h-10 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Non trovi la tua specializzazione?</h3>
                <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                  Se lavori nel settore impiantistico e non hai trovato la tua categoria specifica, contattaci comunque. Il nostro sistema si adatta a qualsiasi tipologia di impiantista nel settore edile e delle installazioni.
                </p>
                <Link
                  to="/contattaci"
                  className="inline-flex items-center text-secondary hover:text-secondary/80 font-semibold transition-colors"
                >
                  Contattaci per una valutazione gratuita
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 bg-emerald-400/10 border border-emerald-400/30 rounded-full text-emerald-400 text-sm font-semibold mb-4">
                  Il processo
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Da impiantista invisibile a <span className="text-secondary">punto di riferimento</span> della tua zona
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                  Un percorso in 4 fasi chiare e misurabili. Saprai sempre a che punto sei, quali risultati stai ottenendo e cosa stiamo facendo per portarti al livello successivo. Nessuna scatola nera, nessuna promessa vaga.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <AnimatedSection key={index} delay={index * 0.15}>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-secondary/10 border border-secondary/30 rounded-2xl flex items-center justify-center">
                        <span className="text-secondary font-bold text-xl">{step.step}</span>
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="w-px h-8 bg-secondary/20 mx-auto mt-2" />
                      )}
                    </div>
                    <div className="bg-card rounded-2xl p-8 border border-white/5 flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <step.icon className="w-5 h-5 text-secondary" />
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Marketing Edile ── */}
        <section className="section-padding">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Perché scegliere <span className="text-gold">Marketing Edile</span> per la tua impresa impiantistica
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.1}>
                <div className="space-y-6">
                  {[
                    "Lavoriamo solo con aziende del settore edile e impiantistico — conosciamo i tuoi clienti meglio di qualsiasi agenzia generica",
                    "Zero costi fissi: paghi solo una percentuale sulle vendite effettive generate dal nostro sistema",
                    "Un referente dedicato che conosce la tua azienda, il tuo territorio e i tuoi obiettivi",
                    "Report settimanali con numeri reali: contatti, appuntamenti, preventivi, vendite chiuse",
                    "Esclusiva territoriale: non lavoriamo con i tuoi concorrenti diretti nella stessa zona",
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-secondary" />
                      </div>
                      <p className="text-gray-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-card rounded-2xl p-8 border border-secondary/20 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Il modello a percentuale, spiegato semplice</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Tu paghi solo il budget pubblicitario (che decidi tu) e una percentuale sulle vendite che generiamo. Se non vendiamo, non paghi. Questo ci obbliga a lavorare bene, perché il nostro fatturato dipende dal tuo. Non esiste incentivo più forte di questo per garantirti risultati reali e misurabili nel tempo.
                  </p>
                  <Link
                    to="/prezzi"
                    className="inline-flex items-center text-secondary hover:text-secondary/80 font-semibold transition-colors"
                  >
                    Scopri come funziona il nostro modello
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section-padding bg-navy-light">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm font-semibold mb-4">
                  Domande frequenti
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Le domande che ogni impiantista ci fa <span className="text-secondary">prima di partire</span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <AnimatedSection key={index} delay={index * 0.08}>
                  <div className="bg-card rounded-2xl border border-white/5 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-secondary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
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
                      <div className="px-6 pb-6">
                        <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-padding">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent rounded-2xl p-10 md:p-16 border border-secondary/20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--secondary-rgb),0.08),transparent_70%)]" />
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Sei un impiantista e vuoi <span className="text-secondary">più clienti qualificati</span>?
                  </h2>
                  <p className="text-lg text-gray-300 mb-4 max-w-2xl mx-auto">
                    Candidati per una valutazione gratuita del tuo potenziale di crescita. Analizzeremo il tuo mercato locale, la tua concorrenza e ti mostreremo esattamente quanti clienti potresti acquisire ogni mese con il nostro sistema. Il tutto senza impegno e senza costi.
                  </p>
                  <p className="text-base text-gray-400 mb-8 max-w-xl mx-auto">
                    Attenzione: accettiamo un numero limitato di partner per zona geografica. Se il tuo territorio è ancora disponibile, non aspettare che lo prenda un concorrente.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={handleCTA}
                      size="lg"
                      className="bg-secondary hover:bg-secondary/90 text-black font-bold text-lg px-10 py-6"
                    >
                      Candidati ora — zero costi
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button
                      onClick={() => navigate("/contattaci")}
                      variant="outline"
                      size="lg"
                      className="border-white/20 hover:bg-white/5 text-lg px-8 py-6"
                    >
                      Hai domande? Parliamone
                    </Button>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary" /> Solo a percentuale
                    </span>
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary" /> Esclusiva di zona
                    </span>
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary" /> Valutazione gratuita
                    </span>
                  </div>
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

export default Impiantisti;
