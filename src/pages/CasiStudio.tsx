import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Star, TrendingUp, Quote, Clock, MapPin, Users, Calendar, Target, ArrowRight, Sun, DoorOpen, Home, Filter, Shield, Zap, CheckCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useCountUp } from "@/hooks/useCountUp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { siteConfig, generateOrganizationSchema, generateBreadcrumbSchema, generateCaseStudySchema } from "@/lib/seo";
import cantiereImage from "@/assets/cantiere.jpg";
import PerformanceBanner from "@/components/PerformanceBanner";

import logoGreenEnergy from "@/assets/green_energy.png";
import logoTeda from "@/assets/teda.png";
import logoFactory from "@/assets/factory.png";
import logoRenovaSolution from "@/assets/renova_solution.png";
import logoRenovaTetto from "@/assets/renova_tetto.png";

// ─── Types ──────────────────────────────────────────────
interface CaseStudyResult {
  label: string;
  before: string;
  after: string;
  icon: React.ReactNode;
}

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

interface CaseStudy {
  id: string;
  company: string;
  sector: string;
  sectorKey: string;
  sectorColor: string;
  logo: string;
  location: string;
  companySize: string;
  yearFounded: string;
  challenge: string;
  solution: string[];
  results: CaseStudyResult[];
  timeline: string;
  highlight: string;
  highlightLabel: string;
  servicesUsed: string[];
  testimonial: Testimonial;
  featured?: boolean;
}

// ─── Data ──────────────────────────────────────────────
const caseStudies: CaseStudy[] = [
  {
    id: "green-energy",
    company: "Green Energy Group",
    sector: "Fotovoltaico",
    sectorKey: "fotovoltaico",
    sectorColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    logo: logoGreenEnergy,
    location: "Italia",
    companySize: "Team commerciale dedicato",
    yearFounded: "Azienda consolidata",
    challenge: "Green Energy Group aveva un ottimo prodotto nel fotovoltaico ma faticava a generare un flusso costante di contatti qualificati.",
    solution: ["Strategia di advertising mirata a proprietari di immobili", "Funnel di pre-qualificazione", "Landing page focalizzata sui benefici concreti", "Ottimizzazione continua basata sui dati di vendita"],
    results: [
      { label: "Vendite generate", before: "Sporadiche", after: "+€300.000", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Tempo di risultato", before: "Mesi senza ROI", after: "2 mesi", icon: <Clock className="w-5 h-5" /> },
      { label: "Qualità lead", before: "Lead freddi", after: "Lead pronti all'acquisto", icon: <Target className="w-5 h-5" /> },
    ],
    timeline: "2 mesi",
    highlight: "+€300k",
    highlightLabel: "di vendite in soli 2 mesi",
    servicesUsed: ["Facebook Ads", "Funnel Marketing", "Lead Qualification"],
    testimonial: { text: "In due mesi abbiamo generato oltre 300.000€ di vendite. I contatti che arrivano sono già informati e pronti a comprare.", author: "Andrea Tacchin", role: "Titolare" },
    featured: true,
  },
  {
    id: "teda-infissi",
    company: "Teda Infissi",
    sector: "Infissi e Serramenti",
    sectorKey: "infissi",
    sectorColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    logo: logoTeda,
    location: "Italia",
    companySize: "Piccola impresa",
    yearFounded: "Azienda familiare",
    challenge: "Con un budget limitato, non sapevano come competere con i grandi showroom della zona.",
    solution: ["Campagne con investimento minimo ma mirate", "Strategia di contenuti sulla qualità artigianale", "Sistema di follow-up automatizzato", "Ottimizzazione per massimizzare ogni euro"],
    results: [
      { label: "Fatturato mensile da ads", before: "Quasi zero", after: "€30-40k/mese", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Investimento", before: "Nessuno", after: "Minimo con alto ROI", icon: <Target className="w-5 h-5" /> },
      { label: "Flusso clienti", before: "Irregolare", after: "Costante e prevedibile", icon: <Users className="w-5 h-5" /> },
    ],
    timeline: "2 anni di collaborazione",
    highlight: "€30-40k",
    highlightLabel: "al mese di flusso costante",
    servicesUsed: ["Social Ads", "Lead Nurturing", "Ottimizzazione Budget"],
    testimonial: { text: "Con un investimento minimo in sponsorizzate, dopo 2 anni abbiamo un flusso costante di clienti da 30-40 mila euro al mese.", author: "Luana Agostini", role: "Titolare" },
  },
  {
    id: "sinfissi",
    company: "S'infissi",
    sector: "Infissi e Serramenti",
    sectorKey: "infissi",
    sectorColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    logo: "",
    location: "Sardegna",
    companySize: "Azienda locale",
    yearFounded: "Radicata nel territorio",
    challenge: "Mercato sardo competitivo. Il passaparola tradizionale stava rallentando.",
    solution: ["Campagne geolocalizzate per la Sardegna", "Posizionamento come riferimento locale", "Funnel di vendita ottimizzato", "Contenuti territoriali"],
    results: [
      { label: "Vendite generate", before: "In stallo", after: "+€100.000", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Tempo di risultato", before: "Mesi di attesa", after: "3 mesi", icon: <Clock className="w-5 h-5" /> },
      { label: "Presenza locale", before: "Solo passaparola", after: "Riferimento online", icon: <MapPin className="w-5 h-5" /> },
    ],
    timeline: "3 mesi",
    highlight: "+€100k",
    highlightLabel: "di venduto in 3 mesi",
    servicesUsed: ["Advertising Geolocalizzato", "Funnel Marketing", "Content Strategy"],
    testimonial: { text: "In soli 3 mesi di collaborazione abbiamo generato oltre 100.000€ di venduto.", author: "Titolare S'infissi", role: "Titolare" },
  },
  {
    id: "factory",
    company: "Factory S.r.l.s",
    sector: "Infissi e Serramenti",
    sectorKey: "infissi",
    sectorColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    logo: logoFactory,
    location: "Italia",
    companySize: "PMI",
    yearFounded: "Azienda in crescita",
    challenge: "Servivano contatti pronti all'acquisto in tempi brevi.",
    solution: ["Campagne ad alta conversione", "Targeting su proprietari in ristrutturazione", "Landing page ottimizzata", "Sistema gestione lead"],
    results: [
      { label: "Vendite generate", before: "Sotto le aspettative", after: "+€60.000", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Tempo di risultato", before: "Lento", after: "1 mese", icon: <Clock className="w-5 h-5" /> },
      { label: "ROI campagne", before: "Incerto", after: "Immediato e misurabile", icon: <Target className="w-5 h-5" /> },
    ],
    timeline: "1 mese",
    highlight: "+€60k",
    highlightLabel: "di venduto in 1 solo mese",
    servicesUsed: ["Performance Advertising", "Landing Page", "Lead Management"],
    testimonial: { text: "In un solo mese di collaborazione abbiamo generato 60.000€ di venduto in più.", author: "Titolare Factory", role: "Titolare" },
  },
  {
    id: "renova-solution",
    company: "Renova Solution",
    sector: "Fotovoltaico",
    sectorKey: "fotovoltaico",
    sectorColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    logo: logoRenovaSolution,
    location: "Italia",
    companySize: "Azienda strutturata",
    yearFounded: "Specialisti energia rinnovabile",
    challenge: "Risultati altalenanti, flusso non prevedibile di nuovi clienti.",
    solution: ["Strategia a lungo termine con crescita progressiva", "Campagne educative sul fotovoltaico", "Funnel multi-step", "Analisi e ottimizzazione continua"],
    results: [
      { label: "Vendite generate", before: "Altalenanti", after: "+€500.000", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Periodo", before: "Risultati sporadici", after: "12 mesi costanti", icon: <Calendar className="w-5 h-5" /> },
      { label: "Flusso commerciale", before: "Imprevedibile", after: "Costante e scalabile", icon: <Target className="w-5 h-5" /> },
    ],
    timeline: "12 mesi",
    highlight: "+€500k",
    highlightLabel: "di vendite in 12 mesi",
    servicesUsed: ["Strategia a lungo termine", "Content Marketing", "Funnel Multi-step"],
    testimonial: { text: "In 12 mesi abbiamo generato oltre 500.000€ di vendite grazie a una strategia solida e costante.", author: "Fabio Ragagnin", role: "Titolare" },
  },
  {
    id: "renova-tetto",
    company: "Renova Tetto",
    sector: "Rifacimenti Tetti",
    sectorKey: "tetti",
    sectorColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    logo: logoRenovaTetto,
    location: "Veneto",
    companySize: "Azienda specializzata",
    yearFounded: "Leader regionale",
    challenge: "Mercato competitivo, clienti che confrontano decine di preventivi.",
    solution: ["Posizionamento premium come specialisti", "Campagne geolocalizzate in Veneto", "Portfolio lavori come leva di vendita", "Preventivazione rapida"],
    results: [
      { label: "Vendite rifacimenti", before: "Limitate", after: "+€600.000", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Copertura", before: "Zona limitata", after: "Tutto il Veneto", icon: <MapPin className="w-5 h-5" /> },
      { label: "Posizionamento", before: "Uno tra tanti", after: "Riferimento regionale", icon: <Target className="w-5 h-5" /> },
    ],
    timeline: "Collaborazione continuativa",
    highlight: "+€600k",
    highlightLabel: "di rifacimenti tetti venduti",
    servicesUsed: ["Advertising Regionale", "Brand Positioning", "Lead Generation"],
    testimonial: { text: "Oltre 600.000€ di rifacimenti tetti venduti in Veneto. Siamo diventati il punto di riferimento nella nostra zona.", author: "Titolare Renova Tetto", role: "Titolare" },
  },
];

const filterOptions = [
  { key: "tutti", label: "Tutti", icon: <Filter className="w-4 h-4" /> },
  { key: "fotovoltaico", label: "Fotovoltaico", icon: <Sun className="w-4 h-4" /> },
  { key: "infissi", label: "Infissi", icon: <DoorOpen className="w-4 h-4" /> },
  { key: "tetti", label: "Rifacimenti Tetti", icon: <Home className="w-4 h-4" /> },
];


// ─── Sub-components ──────────────────────────────────────

interface HeroStatProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

const HeroStat = ({ end, suffix = "", prefix = "", label }: HeroStatProps) => {
  const { ref, formattedValue } = useCountUp({ end, suffix, prefix });
  return (
    <div ref={ref} className="px-6 py-3 bg-card/80 backdrop-blur-sm border border-border rounded-xl text-center">
      <p className="text-2xl font-black text-secondary">{formattedValue}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const CaseCard = ({ cs, onClick }: { cs: CaseStudy; onClick: () => void }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.3 }}
    whileHover={{ y: -5, boxShadow: "0 10px 40px -10px hsl(var(--secondary) / 0.2)" }}
    className={`bg-background border rounded-2xl overflow-hidden h-full flex flex-col cursor-pointer group transition-colors duration-300 ${
      cs.featured
        ? "border-secondary/40 ring-1 ring-secondary/20"
        : "border-border hover:border-secondary/40"
    }`}
    onClick={onClick}
  >
    {/* Featured badge */}
    {cs.featured && (
      <div className="bg-secondary text-secondary-foreground text-xs font-bold text-center py-1.5 uppercase tracking-wider">
        ⭐ Caso in Evidenza
      </div>
    )}

    {/* Header */}
    <div className="p-6 flex items-center gap-4 border-b border-border">
      <div className="w-14 h-14 rounded-xl overflow-hidden bg-muted flex items-center justify-center shrink-0">
        {cs.logo ? (
          <img src={cs.logo} alt={cs.company} className="w-full h-full object-contain p-2" loading="lazy" />
        ) : (
          <span className="text-xl font-bold text-secondary">{cs.company.charAt(0)}</span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-foreground group-hover:text-secondary transition-colors truncate">{cs.company}</h3>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${cs.sectorColor}`}>{cs.sector}</span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <MapPin className="w-3 h-3" />{cs.location}
          </span>
        </div>
      </div>
    </div>

    {/* Highlight + Timeline */}
    <div className="p-6 flex-1">
      <div className="mb-4 text-center">
        <p className="text-3xl font-black text-secondary">{cs.highlight}</p>
        <p className="text-sm text-muted-foreground">{cs.highlightLabel}</p>
        <div className="flex items-center justify-center gap-1.5 mt-2">
          <Clock className="w-3.5 h-3.5 text-secondary" />
          <span className="text-xs font-medium text-secondary">{cs.timeline}</span>
        </div>
      </div>

      {/* All 3 results */}
      <div className="space-y-2 mb-4">
        {cs.results.map((r, i) => (
          <div key={i} className="flex items-center justify-between text-sm gap-2">
            <span className="text-muted-foreground truncate">{r.label}</span>
            <span className="text-secondary font-semibold whitespace-nowrap">{r.after}</span>
          </div>
        ))}
      </div>

      {/* Testimonial preview */}
      <div className="p-3 bg-secondary/5 border border-secondary/10 rounded-lg">
        <p className="text-xs text-foreground/80 italic line-clamp-2">"{cs.testimonial.text}"</p>
        <p className="text-xs text-muted-foreground mt-1">— {cs.testimonial.author}</p>
      </div>
    </div>

    {/* CTA */}
    <div className="p-4 border-t border-border">
      <Button variant="outline" size="sm" className="w-full group-hover:border-secondary group-hover:text-secondary transition-colors">
        Scopri di più <ArrowRight className="w-4 h-4 ml-1" />
      </Button>
    </div>
  </motion.div>
);

// ─── Main Page ──────────────────────────────────────────

const CasiStudio = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [activeFilter, setActiveFilter] = useState("tutti");
  const navigate = useNavigate();
  const handleCTA = () => navigate("/#candidati");

  const filteredStudies = useMemo(
    () => activeFilter === "tutti" ? caseStudies : caseStudies.filter((cs) => cs.sectorKey === activeFilter),
    [activeFilter]
  );

  return (
    <>
      <SEOHead
        title="Casi Studio — Risultati Aziende Edili"
        description="€60M+ di fatturato per 47+ aziende edili. Casi studio: Green Energy +€300k, Teda Infissi €30-40k/mese, Renova Tetto +€600k."
        keywords={siteConfig.pageKeywords.casiStudio}
        url={`${siteConfig.url}/casi-studio`}
        jsonLd={[
          generateOrganizationSchema(),
          generateBreadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Casi Studio", url: `${siteConfig.url}/casi-studio` }
          ]),
          ...caseStudies.map(cs => generateCaseStudySchema({
            company: cs.company,
            sector: cs.sector,
            highlight: cs.highlight,
            testimonialText: cs.testimonial.text,
            testimonialAuthor: cs.testimonial.author
          }))
        ]}
      />
      <Navbar />
      <main className="overflow-hidden">
        {/* ── Hero ── */}
        <section className="pt-32 pb-16 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={cantiereImage} alt="Cantiere edile — casi studio di successo Marketing Edile con risultati documentati" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-background/85" />
          </div>
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-secondary/10 rounded-full blur-[100px] md:blur-[150px]" />
          </div>
          <div className="container-narrow relative z-10 text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm font-medium mb-6 uppercase tracking-wider">
                Casi Studio Documentati
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
                RISULTATI <span className="text-secondary">REALI</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Non promesse. Numeri documentati di aziende edili che hanno scelto il nostro sistema.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <HeroStat end={60} prefix="€" suffix="M+" label="Fatturato generato per i partner" />
                <HeroStat end={47} suffix="+" label="Aziende edili seguite" />
                <HeroStat end={40} prefix="+" suffix="%" label="Incremento fatturato medio" />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Banner risultati cumulativi ── */}
        <section className="py-8 px-6 bg-secondary/5 border-y border-secondary/10">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-secondary">€1.56M+</p>
                    <p className="text-sm text-muted-foreground">di vendite documentate nei 6 casi studio qui sotto</p>
                  </div>
                </div>
                <div className="hidden md:block w-px h-10 bg-border" />
                <p className="text-sm text-muted-foreground max-w-md">
                  Questi sono solo <strong className="text-foreground">6 dei 47+ partner</strong> che abbiamo seguito. I risultati globali superano i <strong className="text-secondary">€60M di fatturato</strong>.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Filtri settore ── */}
        <section className="pt-12 pb-4 px-6 bg-card">
          <div className="container-narrow">
            <div className="flex flex-wrap justify-center gap-3">
              {filterOptions.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                    activeFilter === f.key
                      ? "bg-secondary text-secondary-foreground border-secondary shadow-lg shadow-secondary/20"
                      : "bg-background text-muted-foreground border-border hover:border-secondary/40 hover:text-foreground"
                  }`}
                >
                  {f.icon}
                  {f.label}
                  {f.key !== "tutti" && (
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      activeFilter === f.key ? "bg-secondary-foreground/20" : "bg-muted"
                    }`}>
                      {caseStudies.filter((cs) => cs.sectorKey === f.key).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Case Studies Grid ── */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredStudies.map((cs) => (
                  <CaseCard key={cs.id} cs={cs} onClick={() => setSelectedCase(cs)} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <PerformanceBanner />

        {/* ── CTA Finale ── */}
        <section className="section-padding bg-card">
          <div className="container-narrow text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                VUOI RISULTATI <span className="text-secondary">SIMILI?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
                Scopri se la tua azienda edile è in target per il nostro sistema.
              </p>
              <Button variant="gold" size="xl" className="glow-gold" onClick={handleCTA}>
                Richiedi la Valutazione Gratuita
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              {/* Social proof */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><Users className="w-4 h-4 text-secondary" /> 47+ aziende edili ci hanno scelto</span>
                <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-secondary" /> Nessun vincolo contrattuale</span>
                <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-secondary" /> Risposta entro 24h</span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </main>

      {/* ── Dialog dettaglio ── */}
      <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
          {selectedCase && (
            <>
              <DialogHeader className="pb-4 border-b border-border">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted flex items-center justify-center shrink-0">
                    {selectedCase.logo ? (
                      <img src={selectedCase.logo} alt={selectedCase.company} className="w-full h-full object-contain p-2" />
                    ) : (
                      <span className="text-2xl font-bold text-secondary">{selectedCase.company.charAt(0)}</span>
                    )}
                  </div>
                  <div>
                    <DialogTitle className="text-xl font-bold text-foreground">{selectedCase.company}</DialogTitle>
                    <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full border mt-1 ${selectedCase.sectorColor}`}>{selectedCase.sector}</span>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mt-1">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-secondary" />{selectedCase.location}</span>
                      <span className="flex items-center gap-1"><Users className="w-3 h-3 text-secondary" />{selectedCase.companySize}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-secondary" />{selectedCase.timeline}</span>
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6 py-4">
                <div>
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Servizi Utilizzati</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCase.servicesUsed.map((s, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full border border-secondary/20">{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">La Sfida</h4>
                  <p className="text-foreground/80 leading-relaxed">{selectedCase.challenge}</p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">La Soluzione</h4>
                  <ul className="space-y-2">
                    {selectedCase.solution.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">I Risultati</h4>
                  <div className="grid gap-3">
                    {selectedCase.results.map((r, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 bg-background border border-border rounded-xl">
                        <div className="text-secondary shrink-0">{r.icon}</div>
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground">{r.label}</p>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-destructive line-through">{r.before}</span>
                            <ArrowRight className="w-3 h-3 text-muted-foreground" />
                            <span className="text-secondary font-bold">{r.after}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-secondary/5 border border-secondary/20 rounded-xl">
                  <Quote className="w-5 h-5 text-secondary mb-2" />
                  <p className="text-foreground/90 italic leading-relaxed mb-2">"{selectedCase.testimonial.text}"</p>
                  <p className="text-sm text-muted-foreground">— {selectedCase.testimonial.author}, {selectedCase.testimonial.role}</p>
                </div>

                <div className="text-center pt-2">
                  <Button variant="gold" className="glow-gold" onClick={() => { setSelectedCase(null); handleCTA(); }}>
                    Voglio risultati simili <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CasiStudio;
