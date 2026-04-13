import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Building2, Users, FileCheck, TrendingUp, Target, Handshake, Award, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useCountUp } from "@/hooks/useCountUp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { siteConfig, generateOrganizationSchema, generatePersonSchema, generateBreadcrumbSchema } from "@/lib/seo";
import heroWindowsImage from "@/assets/hero-windows.jpg";
import PerformanceBanner from "@/components/PerformanceBanner";
import showroomImage from "@/assets/showroom.jpg";
import floPortrait from "@/assets/flo-portrait.jpg";
import teamImage from "@/assets/team.jpg";

const values = [
  {
    icon: Building2,
    title: "Specializzazione Edile",
    description: "Lavoriamo solo con aziende del settore edile. Serramentisti, fotovoltaico, ristrutturazioni, coperture. Nient'altro.",
  },
  {
    icon: TrendingUp,
    title: "Solo a Provvigione",
    description: "Nessun canone fisso. Guadagniamo solo quando tu chiudi una commessa grazie ai nostri lead. Il nostro incentivo è il tuo fatturato.",
  },
  {
    icon: Briefcase,
    title: "Esperienza sul Campo",
    description: "Abbiamo un'azienda di serramenti vera. Testiamo ogni strategia su noi stessi prima di proporla ai nostri partner.",
  },
  {
    icon: Handshake,
    title: "Partner, non Fornitore",
    description: "Non siamo l'ennesima agenzia che sparisce dopo la fattura. Siamo dentro il tuo business perché ci guadagniamo insieme.",
  },
];

interface StatCardProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: React.ElementType;
}

const StatCard = ({ end, suffix = "", prefix = "", label, icon: Icon }: StatCardProps) => {
  const { ref, formattedValue } = useCountUp({ end, suffix, prefix });
  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05, borderColor: "hsl(var(--secondary))" }}
      className="text-center p-6 bg-card border border-border rounded-2xl transition-colors duration-300"
    >
      <Icon className="w-8 h-8 text-secondary mx-auto mb-3" />
      <p className="text-3xl md:text-4xl font-black text-secondary mb-1">{formattedValue}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
};

const ChiSiamo = () => {
  const navigate = useNavigate();
  const handleCTA = () => navigate("/#candidati");

  return (
    <>
      <SEOHead
        title="Chi Siamo — Agenzia Marketing Edile"
        description="Marketing Edile® nasce dalla vendita sul campo: 8+ anni nel settore edile, azienda di serramenti propria e modello a provvigione unico."
        keywords={siteConfig.pageKeywords.chiSiamo}
        url={`${siteConfig.url}/chi-siamo`}
        jsonLd={[
          generateOrganizationSchema(),
          generatePersonSchema(),
          generateBreadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Chi Siamo", url: `${siteConfig.url}/chi-siamo` }
          ])
        ]}
      />
      <Navbar />
      <main className="overflow-hidden">
        {/* Hero con immagine di sfondo */}
        <section className="pt-32 pb-16 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroWindowsImage} alt="Infissi e serramenti moderni — Marketing Edile specializzazione settore edile" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-background/85" />
          </div>
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-secondary/10 rounded-full blur-[100px] md:blur-[150px]" />
          </div>
          <div className="container-narrow relative z-10 text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm font-medium mb-6 uppercase tracking-wider">
                Chi Siamo
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
                NON UN'AGENZIA.{" "}
                <span className="text-secondary">UN PARTNER.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Marketing Edile® nasce dalla vendita sul campo, non da una scrivania. Per questo funziona.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Showroom + Intro */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="p-6 md:p-8 bg-background border border-border rounded-2xl">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">
                    👉 Noi abbiamo{" "}
                    <span className="text-secondary font-bold">
                      un'azienda edile che vende infissi e serramenti.
                    </span>
                  </p>
                  <div className="mt-4 space-y-1 text-muted-foreground">
                    <p>Non un progetto teorico.</p>
                    <p>Non un caso studio inventato.</p>
                    <p className="text-foreground font-medium">Un'azienda reale, in Italia.</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} direction="right">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src={showroomImage} alt="Showroom infissi e serramenti moderni" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </AnimatedSection>
            </div>

            {/* Reality Points */}
            <AnimatedSection delay={0.3}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {[
                  { icon: Building2, text: "Showroom reale." },
                  { icon: Users, text: "Clienti veri." },
                  { icon: FileCheck, text: "Preventivi veri." },
                  { icon: TrendingUp, text: "Bilancio vero." },
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 bg-background border border-border rounded-xl text-center hover:border-secondary/40 transition-colors"
                  >
                    <point.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                    <p className="text-foreground font-semibold">{point.text}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Storia del fondatore */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm font-medium mb-8 uppercase tracking-wider">
                La nostra storia
              </span>
            </AnimatedSection>

            <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-14 items-start">
              <AnimatedSection delay={0.2} direction="left">
                <div className="relative mx-auto lg:mx-0 w-64 lg:w-full lg:sticky lg:top-24">
                  <div className="rounded-2xl overflow-hidden border-2 border-secondary/20 aspect-[3/4]">
                    <img src={floPortrait} alt="Florin Andriciuc, fondatore di Marketing Edile" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                  <div className="mt-4 text-center lg:text-left">
                    <p className="text-foreground font-bold text-lg">Florin Andriciuc</p>
                    <p className="text-muted-foreground text-sm">Fondatore, Marketing Edile®</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                    Perché ho creato Marketing Edile — e perché lavoriamo solo a provvigione
                  </h2>
                  <p className="text-lg text-foreground leading-relaxed">
                    Mi chiamo <span className="text-secondary font-bold">Florin Andriciuc</span>. Non sono nato serramentista — sono nato nel marketing e nella vendita.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Mio padre ha un'azienda edile, e da <span className="text-secondary font-bold">8 anni</span> mi sono specializzato in un'unica cosa: portare clienti qualificati alle aziende del settore edile. Serramentisti, imprese di ristrutturazione, fotovoltaico, pergole, pavimentazioni. Solo edilizia. Nient'altro.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Da subito ho scelto un modello che nessuno vuole sentirti dire quando apri un'agenzia: <span className="text-secondary font-bold">lavoriamo solo a provvigione</span>. Nessun fisso mensile. Nessun anticipo. Guadagniamo solo quando tu chiudi una commessa grazie ai lead che ti portiamo.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    A fine 2023 ho aperto una mia azienda di serramenti — per testare sul campo lo stesso sistema che costruivo per i nostri partner. Nei primi 3 mesi, senza esperienza tecnica e senza sconto in fattura, abbiamo fatto <span className="text-secondary font-bold">€400.000 di vendite</span>. E in due anni abbiamo superato i <span className="text-secondary font-bold">2 milioni di vendite</span>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Poi, vedendo quante aziende ricevevano lead di qualità e li perdevano in trattativa, ho creato <span className="text-secondary font-bold">Vendita Edile®</span> — un programma di affiancamento alla vendita per chiudere quello che il marketing apre.
                  </p>
                  <div className="pt-4 mt-4 border-t border-border">
                    <p className="text-xl text-foreground font-bold leading-relaxed">
                      Oggi non portiamo solo clienti. <span className="text-secondary">Portiamo clienti e il sistema per chiuderli.</span>
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src={teamImage} alt="Il team di Marketing Edile al lavoro" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} direction="right">
                <div>
                  <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm font-medium mb-6 uppercase tracking-wider">
                    Il Team
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Un team che <span className="text-secondary">vive l'edilizia</span> ogni giorno
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Non siamo marketer generici che ieri facevano pubblicità per un ristorante e domani per un dentista.</p>
                    <p>Ogni membro del nostro team è <span className="text-foreground font-semibold">formato esclusivamente sul settore edile</span>: conosce il linguaggio dei cantieri, sa cos'è un preventivo da €50.000, capisce la differenza tra un lead curioso e un cliente pronto a firmare.</p>
                    <p>Quando parli con noi, parli con persone che <span className="text-secondary font-semibold">capiscono il tuo lavoro</span>.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Valori */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="heading-section text-foreground mb-4">
                  I NOSTRI <span className="text-secondary">VALORI</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Quattro principi che guidano ogni decisione.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="p-6 bg-card border border-border rounded-2xl h-full hover:border-secondary/40 transition-colors duration-300">
                    <div className="w-12 h-12 bg-secondary/10 border border-secondary/30 rounded-xl flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Stats animate */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroWindowsImage} alt="Serramenti moderni — sezione statistiche Marketing Edile" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-background/90" />
          </div>
          <div className="container-narrow relative z-10">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="heading-section text-foreground mb-4">
                  I <span className="text-secondary">NUMERI</span> PARLANO
                </h2>
                <p className="text-muted-foreground text-lg">Dati aggregati 2018–2025</p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <StatCard end={8} suffix="+" label="Anni di esperienza" icon={Award} />
              <StatCard end={47} suffix="+" label="Aziende edili seguite" icon={Users} />
              <StatCard end={60} prefix="€" suffix="M+" label="Fatturato generato per i partner" icon={TrendingUp} />
              <StatCard end={40} prefix="+" suffix="%" label="Incremento fatturato medio" icon={Target} />
            </div>
          </div>
        </section>

        <PerformanceBanner />

        {/* CTA */}
        <section className="section-padding bg-card">
          <div className="container-narrow text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                VUOI LAVORARE CON NOI?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
                Prendiamo solo aziende edili con cui possiamo generare risultati reali. Scopri se sei in target.
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

export default ChiSiamo;
