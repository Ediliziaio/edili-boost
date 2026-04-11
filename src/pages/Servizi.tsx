import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Target, MessageSquare, FileText, Video, Layout, Megaphone, BarChart3, User, ArrowRight, Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { siteConfig, generateProfessionalServiceSchema, generateBreadcrumbSchema } from "@/lib/seo";
import showroomImage from "@/assets/showroom.jpg";
import PerformanceBanner from "@/components/PerformanceBanner";

const categories = [
  {
    id: "strategia",
    title: "STRATEGIA",
    subtitle: "Costruiamo le fondamenta del tuo sistema di acquisizione clienti",
    icon: Target,
    colorClasses: { bg: "bg-secondary/10", border: "border-secondary/30", text: "text-secondary" },
    services: [
      { icon: Target, title: "Marketing Edile Specializzato", description: "Affiliazione + Acquisizione + Piano editoriale calibrato sul tuo mercato. Non strategie generiche: ogni azione è pensata per il settore edile.", details: ["Analisi del tuo mercato locale", "Studio dei concorrenti diretti", "Piano d'azione personalizzato", "KPI misurabili e obiettivi chiari"] },
      { icon: MessageSquare, title: "Piano Comunicativo", description: "Messaggi che i tuoi clienti capiscono, perché li abbiamo scritti come farebbe un artigiano che sa vendere.", details: ["Tone of voice specifico per l'edilizia", "Script per video e contenuti social", "Messaggi di follow-up ottimizzati", "Copywriting persuasivo per landing page"] },
      { icon: Layout, title: "Landing Page", description: "Non un sito vetrina. Una macchina che trasforma visitatori in appuntamenti.", details: ["Design ottimizzato per conversione", "Mobile-first responsive", "Form di contatto strategici", "A/B testing continuo"] },
    ],
  },
  {
    id: "produzione",
    title: "PRODUZIONE",
    subtitle: "Creiamo contenuti che vendono, non che intrattengono",
    icon: Video,
    colorClasses: { bg: "bg-blue-400/10", border: "border-blue-400/30", text: "text-blue-400" },
    services: [
      { icon: FileText, title: "Contenuti Video Scriptati", description: "Sai cosa dire, come dirlo, quando dirlo. Tutto scritto e ottimizzato per convertire.", details: ["Script professionali per ogni video", "Calendario editoriale strutturato", "Format testati nel settore edile", "Ottimizzazione per ogni piattaforma"] },
      { icon: Video, title: "Editing Video", description: "Professionali, veloci, ottimizzati per conversione. Niente video da 10 minuti: contenuti che vendono.", details: ["Post-produzione professionale", "Sottotitoli e grafiche", "Formati ottimizzati per social", "Consegna rapida e costante"] },
    ],
  },
  {
    id: "gestione",
    title: "GESTIONE",
    subtitle: "Gestiamo tutto noi, tu pensi a preventivi e cantieri",
    icon: BarChart3,
    colorClasses: { bg: "bg-emerald-400/10", border: "border-emerald-400/30", text: "text-emerald-400" },
    services: [
      { icon: Megaphone, title: "Advertising Gestito", description: "Campagne per clienti pronti a comprare, non per like e follower. Budget ottimizzato al centesimo.", details: ["Facebook e Instagram Ads", "Google Ads e Local SEO", "Retargeting avanzato", "Ottimizzazione budget quotidiana"] },
      { icon: BarChart3, title: "Confronto Settimanale", description: "Numeri reali, performance reali, decisioni reali. Ogni settimana sai esattamente dove sei.", details: ["Report settimanale dettagliato", "Call di allineamento", "Analisi ROI per campagna", "Decisioni basate sui dati"] },
      { icon: User, title: "Un Unico Referente", description: "Non passi da uno all'altro. Una persona conosce la tua azienda e la segue.", details: ["Referente dedicato e raggiungibile", "Conoscenza profonda del tuo business", "Risposte rapide e proattive", "Nessun rimpallo tra reparti"] },
    ],
  },
];

const timelineSteps = [
  { icon: Target, label: "STRATEGIA", color: "text-secondary", bg: "bg-secondary/20 border-secondary/40" },
  { icon: Video, label: "PRODUZIONE", color: "text-blue-400", bg: "bg-blue-400/20 border-blue-400/40" },
  { icon: BarChart3, label: "GESTIONE", color: "text-emerald-400", bg: "bg-emerald-400/20 border-emerald-400/40" },
  { icon: Zap, label: "RISULTATI", color: "text-secondary", bg: "bg-secondary/20 border-secondary/40" },
];

const results = [
  "Attrae clienti qualificati",
  "Li converte in appuntamenti",
  "Ti libera dalle attività ripetitive",
  "Scala con il tuo business",
];

const Servizi = () => {
  const navigate = useNavigate();
  const handleCTA = () => navigate("/#candidati");

  return (
    <>
      <SEOHead
        title="Servizi Marketing Imprese Edili"
        description="Sistema marketing per imprese edili: strategia, contenuti video, advertising gestito e referente dedicato. Paghi solo a percentuale."
        keywords={siteConfig.pageKeywords.servizi}
        url={`${siteConfig.url}/servizi`}
        jsonLd={[
          generateProfessionalServiceSchema(),
          generateBreadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Servizi", url: `${siteConfig.url}/servizi` }
          ])
        ]}
      />
      <Navbar />
      <main className="overflow-hidden">
        {/* Hero con immagine */}
        <section className="pt-32 pb-16 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={showroomImage} alt="Showroom infissi e serramenti — servizi marketing per aziende edili" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-background/85" />
          </div>
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-secondary/10 rounded-full blur-[100px] md:blur-[150px]" />
          </div>
          <div className="container-narrow relative z-10 text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm font-medium mb-6 uppercase tracking-wider">
                Servizi
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
                NON SERVIZI.{" "}
                <span className="text-secondary">UN SISTEMA.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Strategia, produzione e gestione integrate. Tutto quello che serve per trasformare contatti in commesse firmate.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-8 bg-card border-y border-border">
          <div className="container-narrow">
            <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
              {timelineSteps.map((step, index) => (
                <div key={step.label} className="flex items-center">
                  <div className={`flex items-center gap-2 px-4 py-2 bg-background border ${step.bg} rounded-full`}>
                    <step.icon className={`w-5 h-5 ${step.color}`} />
                    <span className={`text-sm font-bold ${step.color}`}>{step.label}</span>
                  </div>
                  {index < timelineSteps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-muted-foreground mx-2 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Sections */}
        {categories.map((category, catIndex) => (
          <section key={category.id} className={catIndex % 2 === 0 ? "section-padding bg-background" : "section-padding bg-card"}>
            <div className="container-narrow">
              <AnimatedSection>
                <div className="flex items-center gap-4 mb-2">
                  <div className={`w-14 h-14 ${category.colorClasses.bg} border ${category.colorClasses.border} rounded-xl flex items-center justify-center`}>
                    <category.icon className={`w-7 h-7 ${category.colorClasses.text}`} />
                  </div>
                  <div>
                    <h2 className={`text-2xl md:text-3xl font-black ${category.colorClasses.text}`}>{category.title}</h2>
                    <p className="text-muted-foreground">{category.subtitle}</p>
                  </div>
                </div>
              </AnimatedSection>

              <StaggerContainer className="grid md:grid-cols-1 gap-6 mt-8" staggerDelay={0.1}>
                {category.services.map((service) => (
                  <StaggerItem key={service.title}>
                    <motion.div
                      whileHover={{ borderColor: "hsl(var(--secondary))" }}
                      className={`p-6 md:p-8 bg-card border ${category.colorClasses.border} rounded-2xl transition-shadow duration-300 hover:shadow-[0_8px_30px_-10px_hsl(var(--secondary)/0.15)]`}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-10 h-10 ${category.colorClasses.bg} rounded-lg flex items-center justify-center shrink-0`}>
                          <service.icon className={`w-5 h-5 ${category.colorClasses.text}`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                          <p className="text-muted-foreground mt-1">{service.description}</p>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-2 ml-14">
                        {service.details.map((detail, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <Check className={`w-4 h-4 ${category.colorClasses.text} shrink-0`} />
                            <span className="text-foreground/80">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>
        ))}

        {/* Results Box */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="relative p-8 bg-gradient-to-br from-secondary/10 via-background to-secondary/5 border border-secondary/30 rounded-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">IL RISULTATO?</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">Un sistema che lavora per te <span className="text-secondary font-semibold">24/7</span>:</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {results.map((result) => (
                      <div key={result} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-secondary/20 border border-secondary/30 rounded-full flex items-center justify-center shrink-0">
                          <Check className="w-4 h-4 text-secondary" />
                        </div>
                        <span className="text-foreground font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <PerformanceBanner />

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="container-narrow text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                PRONTO A INIZIARE?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
                Scopri se la tua azienda edile è in target per il nostro sistema.
              </p>
              <Button variant="gold" size="xl" className="glow-gold" onClick={handleCTA}>
                Richiedi la Valutazione Gratuita
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Servizi;
