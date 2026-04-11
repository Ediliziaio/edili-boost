import { useState } from "react";
import { motion } from "framer-motion";
import { Star, TrendingUp, Quote, Clock, MapPin, Users, Calendar, Target } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Import logos
import logoGreenEnergy from "@/assets/green_energy.png";
import logoTeda from "@/assets/teda.png";
import logoFactory from "@/assets/factory.png";
import logoRenovaSolution from "@/assets/renova_solution.png";
import logoRenovaTetto from "@/assets/renova_tetto.png";

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
}

const caseStudies: CaseStudy[] = [
  {
    id: "green-energy",
    company: "Green Energy Group",
    sector: "Fotovoltaico",
    logo: logoGreenEnergy,
    location: "Italia",
    companySize: "Team commerciale dedicato",
    yearFounded: "Azienda consolidata",
    challenge: "Green Energy Group aveva un ottimo prodotto nel fotovoltaico ma faticava a generare un flusso costante di contatti qualificati. Le campagne pubblicitarie precedenti portavano lead freddi, curiosi del prezzo ma senza reale intenzione d'acquisto. Il team commerciale perdeva tempo con persone non in target.",
    solution: [
      "Strategia di advertising mirata a proprietari di immobili interessati al risparmio energetico",
      "Funnel di pre-qualificazione per filtrare i contatti prima del contatto commerciale",
      "Landing page focalizzata sui benefici concreti del fotovoltaico (risparmio in bolletta, incentivi)",
      "Ottimizzazione continua delle campagne basata sui dati di vendita reali"
    ],
    results: [
      { label: "Vendite generate", before: "Sporadiche", after: "+€300.000", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Tempo di risultato", before: "Mesi senza ROI", after: "2 mesi", icon: <Clock className="w-5 h-5" /> },
      { label: "Qualità lead", before: "Lead freddi", after: "Lead pronti all'acquisto", icon: <Target className="w-5 h-5" /> }
    ],
    timeline: "2 mesi",
    highlight: "+€300k",
    highlightLabel: "di vendite in soli 2 mesi",
    servicesUsed: ["Facebook Ads", "Funnel Marketing", "Lead Qualification"],
    testimonial: {
      text: "In due mesi abbiamo generato oltre 300.000€ di vendite. I contatti che arrivano sono già informati e pronti a comprare, il nostro team commerciale finalmente lavora con persone in target.",
      author: "Andrea Tacchin",
      role: "Titolare"
    }
  },
  {
    id: "teda-infissi",
    company: "Teda Infissi",
    sector: "Infissi e Serramenti",
    logo: logoTeda,
    location: "Italia",
    companySize: "Piccola impresa",
    yearFounded: "Azienda familiare",
    challenge: "Teda Infissi è una piccola azienda che vende infissi e serramenti. Con un budget pubblicitario limitato, non sapevano come competere con i grandi showroom della zona. Il passaparola non bastava più e avevano bisogno di un flusso costante di nuovi clienti senza investimenti enormi.",
    solution: [
      "Campagne sponsorizzate con investimento minimo ma altamente mirate",
      "Strategia di contenuti che valorizza la qualità artigianale e il servizio personalizzato",
      "Sistema di follow-up automatizzato per non perdere nessun contatto",
      "Ottimizzazione costante per massimizzare ogni euro investito in pubblicità"
    ],
    results: [
      { label: "Fatturato mensile da ads", before: "Quasi zero", after: "€30-40k/mese", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Investimento pubblicitario", before: "Nessuno", after: "Minimo con alto ROI", icon: <Target className="w-5 h-5" /> },
      { label: "Flusso clienti", before: "Irregolare", after: "Costante e prevedibile", icon: <Users className="w-5 h-5" /> }
    ],
    timeline: "2 anni di collaborazione",
    highlight: "€30-40k",
    highlightLabel: "al mese di flusso costante",
    servicesUsed: ["Social Ads", "Lead Nurturing", "Ottimizzazione Budget"],
    testimonial: {
      text: "Siamo una piccola azienda e pensavamo che il marketing online non fosse per noi. Con un investimento minimo in sponsorizzate, dopo 2 anni di collaborazione abbiamo un flusso costante di clienti da 30-40 mila euro al mese. Non ci saremmo mai aspettati questi risultati.",
      author: "Luana Agostini",
      role: "Titolare"
    }
  },
  {
    id: "sinfissi",
    company: "S'infissi",
    sector: "Infissi e Serramenti",
    logo: "",
    location: "Sardegna",
    companySize: "Azienda locale",
    yearFounded: "Radicata nel territorio",
    challenge: "S'infissi opera nel mercato sardo degli infissi e serramenti, un territorio con dinamiche particolari e una concorrenza agguerrita. Avevano bisogno di distinguersi e di generare contatti qualificati in un mercato dove il passaparola tradizionale stava rallentando.",
    solution: [
      "Campagne geolocalizzate specifiche per il territorio sardo",
      "Posizionamento come punto di riferimento locale per infissi di qualità",
      "Funnel di vendita ottimizzato per il mercato isolano",
      "Contenuti che valorizzano la conoscenza del territorio e le esigenze specifiche della Sardegna"
    ],
    results: [
      { label: "Vendite generate", before: "In stallo", after: "+€100.000", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Tempo di risultato", before: "Mesi di attesa", after: "3 mesi", icon: <Clock className="w-5 h-5" /> },
      { label: "Presenza locale", before: "Solo passaparola", after: "Riferimento online", icon: <MapPin className="w-5 h-5" /> }
    ],
    timeline: "3 mesi",
    highlight: "+€100k",
    highlightLabel: "di venduto in 3 mesi",
    servicesUsed: ["Advertising Geolocalizzato", "Funnel Marketing", "Content Strategy"],
    testimonial: {
      text: "In soli 3 mesi di collaborazione abbiamo generato oltre 100.000€ di venduto. Il marketing mirato sul nostro territorio ha fatto la differenza, i clienti ci trovano e arrivano già convinti della qualità dei nostri prodotti.",
      author: "Titolare S'infissi",
      role: "Titolare"
    }
  },
  {
    id: "factory",
    company: "Factory S.r.l.s",
    sector: "Infissi e Serramenti",
    logo: logoFactory,
    location: "Italia",
    companySize: "PMI",
    yearFounded: "Azienda in crescita",
    challenge: "Factory S.r.l.s cercava un modo rapido ed efficace per aumentare le vendite di infissi e serramenti. Le strategie tradizionali non portavano risultati abbastanza veloci e avevano bisogno di un partner che generasse contatti pronti all'acquisto in tempi brevi.",
    solution: [
      "Campagne ad alta conversione con messaggi diretti e persuasivi",
      "Targeting preciso su proprietari di casa in fase di ristrutturazione",
      "Landing page ottimizzata per la conversione immediata",
      "Sistema di gestione lead per massimizzare ogni contatto ricevuto"
    ],
    results: [
      { label: "Vendite generate", before: "Sotto le aspettative", after: "+€60.000", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Tempo di risultato", before: "Lento", after: "1 mese", icon: <Clock className="w-5 h-5" /> },
      { label: "ROI campagne", before: "Incerto", after: "Immediato e misurabile", icon: <Target className="w-5 h-5" /> }
    ],
    timeline: "1 mese",
    highlight: "+€60k",
    highlightLabel: "di venduto in 1 solo mese",
    servicesUsed: ["Performance Advertising", "Landing Page", "Lead Management"],
    testimonial: {
      text: "Risultati immediati: in un solo mese di collaborazione abbiamo generato 60.000€ di venduto in più. La velocità e la qualità dei contatti ricevuti ci hanno sorpreso positivamente.",
      author: "Titolare Factory",
      role: "Titolare"
    }
  },
  {
    id: "renova-solution",
    company: "Renova Solution",
    sector: "Fotovoltaico",
    logo: logoRenovaSolution,
    location: "Italia",
    companySize: "Azienda strutturata",
    yearFounded: "Specialisti energia rinnovabile",
    challenge: "Renova Solution commercializza impianti fotovoltaici e aveva bisogno di una strategia a lungo termine per scalare le vendite in modo costante. Le campagne precedenti avevano risultati altalenanti e non riuscivano a costruire un flusso prevedibile di nuovi clienti.",
    solution: [
      "Strategia di marketing a lungo termine con obiettivi di crescita progressiva",
      "Campagne educative sul fotovoltaico per costruire fiducia nel brand",
      "Funnel di vendita multi-step per accompagnare il cliente dalla curiosità all'acquisto",
      "Analisi e ottimizzazione continua basata su dati di vendita reali"
    ],
    results: [
      { label: "Vendite generate", before: "Altalenanti", after: "+€500.000", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Periodo", before: "Risultati sporadici", after: "12 mesi costanti", icon: <Calendar className="w-5 h-5" /> },
      { label: "Flusso commerciale", before: "Imprevedibile", after: "Costante e scalabile", icon: <Target className="w-5 h-5" /> }
    ],
    timeline: "12 mesi",
    highlight: "+€500k",
    highlightLabel: "di vendite in 12 mesi",
    servicesUsed: ["Strategia a lungo termine", "Content Marketing", "Funnel Multi-step", "Advertising"],
    testimonial: {
      text: "In 12 mesi abbiamo generato oltre 500.000€ di vendite grazie a una strategia solida e costante. Finalmente abbiamo un flusso prevedibile di clienti e possiamo pianificare la crescita dell'azienda con serenità.",
      author: "Fabio Ragagnin",
      role: "Titolare"
    }
  },
  {
    id: "renova-tetto",
    company: "Renova Tetto",
    sector: "Rifacimenti Tetti",
    logo: logoRenovaTetto,
    location: "Veneto",
    companySize: "Azienda specializzata",
    yearFounded: "Leader regionale",
    challenge: "Renova Tetto è specializzata nel rifacimento tetti in Veneto. Il mercato è molto competitivo e i clienti spesso confrontano decine di preventivi. Avevano bisogno di posizionarsi come la scelta di riferimento nella regione e di attrarre clienti disposti a investire in qualità.",
    solution: [
      "Posizionamento premium come specialisti del rifacimento tetto in Veneto",
      "Campagne geolocalizzate su tutto il territorio veneto",
      "Portfolio lavori e casi di successo come leva di vendita",
      "Sistema di preventivazione rapida per convertire i contatti in clienti"
    ],
    results: [
      { label: "Vendite rifacimenti", before: "Limitate", after: "+€600.000", icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Copertura territoriale", before: "Zona limitata", after: "Tutto il Veneto", icon: <MapPin className="w-5 h-5" /> },
      { label: "Posizionamento", before: "Uno tra tanti", after: "Riferimento regionale", icon: <Target className="w-5 h-5" /> }
    ],
    timeline: "Collaborazione continuativa",
    highlight: "+€600k",
    highlightLabel: "di rifacimenti tetti venduti",
    servicesUsed: ["Advertising Regionale", "Brand Positioning", "Lead Generation"],
    testimonial: {
      text: "Oltre 600.000€ di rifacimenti tetti venduti in Veneto. Siamo diventati il punto di riferimento nella nostra zona grazie a una strategia mirata che ci porta clienti pronti a firmare, non solo a chiedere preventivi.",
      author: "Titolare Renova Tetto",
      role: "Titolare"
    }
  }
];

const CaseStudyDialog = ({ 
  caseStudy, 
  open, 
  onClose 
}: { 
  caseStudy: CaseStudy | null; 
  open: boolean; 
  onClose: () => void;
}) => {
  if (!caseStudy) return null;
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader className="pb-4 border-b border-border">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted flex items-center justify-center shrink-0">
              {caseStudy.logo ? (
                <img 
                  src={caseStudy.logo} 
                  alt={`Logo ${caseStudy.company}`}
                  className="w-full h-full object-contain p-2"
                />
              ) : (
                <span className="text-2xl font-bold text-gold">{caseStudy.company.charAt(0)}</span>
              )}
            </div>
            <div className="flex-1">
              <DialogTitle className="text-xl font-heading font-bold text-foreground">
                {caseStudy.company}
              </DialogTitle>
              <p className="text-sm text-muted-foreground mb-2">{caseStudy.sector}</p>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-gold" />
                  {caseStudy.location}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3 text-gold" />
                  {caseStudy.companySize}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-gold" />
                  {caseStudy.yearFounded}
                </span>
              </div>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div>
            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
              Servizi Utilizzati
            </h4>
            <div className="flex flex-wrap gap-2">
              {caseStudy.servicesUsed.map((service, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full border border-gold/20"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gold uppercase tracking-wider mb-2">
              La Sfida
            </h4>
            <p className="text-foreground/80 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-gold uppercase tracking-wider mb-2">
              La Soluzione
            </h4>
            <ul className="space-y-2">
              {caseStudy.solution.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground/80">
                  <span className="text-gold mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-gold uppercase tracking-wider mb-4">
              I Risultati
            </h4>
            <div className="grid gap-4">
              {caseStudy.results.map((result, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-border"
                >
                  <div className="p-2 bg-gold/10 text-gold rounded-lg">
                    {result.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">
                      {result.label}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-foreground/50 line-through text-sm">
                        {result.before}
                      </span>
                      <span className="text-gold">→</span>
                      <span className="text-lg font-bold text-gold">
                        {result.after}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gold/5 border border-gold/20 rounded-xl p-5">
            <Quote className="w-8 h-8 text-gold/40 mb-3" />
            <p className="text-foreground/90 italic leading-relaxed mb-4">
              "{caseStudy.testimonial.text}"
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">
                {caseStudy.testimonial.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {caseStudy.testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {caseStudy.testimonial.role}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t border-border">
            <Clock className="w-4 h-4" />
            <span>Tempo di implementazione: <strong className="text-foreground">{caseStudy.timeline}</strong></span>
          </div>
          
          <div className="pt-4">
            <Button 
              className="w-full bg-gold hover:bg-gold/90 text-background font-bold"
              onClick={() => {
                onClose();
                document.getElementById('candidati')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Vuoi risultati simili? Candidati ora
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const TestimonialsSection = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="casi-studio" className="section-padding bg-card relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-navy-light/20 rounded-full blur-[120px]" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-sm text-gold font-medium mb-6">
            <Star size={16} className="fill-gold" />
            Risultati Reali, Non Promesse
          </span>
          <h2 className="heading-section text-foreground mb-6">
            Cosa Dicono I Nostri{" "}
            <span className="text-gold">Clienti</span>
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Non ti mostriamo vanity metrics. Ti mostriamo{" "}
            <span className="text-foreground font-semibold">
              fatturato, commesse chiuse e tempo risparmiato.
            </span>
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="space-y-6">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-5 md:p-6 relative overflow-hidden cursor-pointer group hover:border-gold/50 transition-colors"
              onClick={() => setSelectedCase(caseStudy)}
            >
              <Quote
                size={80}
                className="absolute top-4 right-4 text-gold/10"
              />

                <div className="grid md:grid-cols-[1fr,auto] gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted flex items-center justify-center border border-border">
                      {caseStudy.logo ? (
                        <img 
                          src={caseStudy.logo} 
                          alt={`Logo ${caseStudy.company}`}
                          className="w-full h-full object-contain p-2"
                        />
                      ) : (
                        <span className="text-xl font-bold text-gold">{caseStudy.company.charAt(0)}</span>
                      )}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {caseStudy.company}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {caseStudy.sector}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {caseStudy.location}
                      </p>
                    </div>
                  </div>

                  <blockquote className="text-base md:text-lg text-foreground/90 leading-relaxed relative">
                    "{caseStudy.testimonial.text}"
                  </blockquote>

                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/50">
                    {caseStudy.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground line-through">
                          {result.before}
                        </span>
                        <TrendingUp size={16} className="text-emerald-500" />
                        <span className="text-sm font-semibold text-emerald-400">
                          {result.after}
                        </span>
                      </div>
                    ))}
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {caseStudy.timeline}
                    </span>
                  </div>
                </div>

                <div className="flex md:flex-col justify-center gap-4 md:gap-6 md:border-l md:border-border/50 md:pl-8">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-gold">
                      {caseStudy.highlight}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {caseStudy.highlightLabel}
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <span className="text-sm font-medium text-gold group-hover:underline">
                      Vedi caso studio completo →
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  — {caseStudy.testimonial.author}, {caseStudy.testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <CaseStudyDialog 
        caseStudy={selectedCase}
        open={!!selectedCase}
        onClose={() => setSelectedCase(null)}
      />
    </section>
  );
};

export default TestimonialsSection;
