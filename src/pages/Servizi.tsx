import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageFaq } from "@/components/PageFaq";
import { SEOHead } from "@/components/SEOHead";
import { siteConfig, generateProfessionalServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo";
import { serviceBodyHtml, serviceFaqs, servicePage } from "@/data/marketingEditorialPages.js";
import showroomImage from "@/assets/showroom.jpg";
import PerformanceBanner from "@/components/PerformanceBanner";

const Servizi = () => {
  const navigate = useNavigate();
  const handleCTA = () => navigate("/#candidati");

  return (
    <>
      <SEOHead
        title={servicePage.title}
        description={servicePage.description}
        keywords={siteConfig.pageKeywords.servizi}
        url={`${siteConfig.url}/servizi`}
        jsonLd={[
          generateProfessionalServiceSchema(),
          generateBreadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Servizi", url: `${siteConfig.url}/servizi` },
          ]),
          generateFAQSchema(serviceFaqs),
        ]}
      />
      <Navbar />
      <main className="overflow-hidden">
        <section className="pt-32 pb-16 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={showroomImage} alt="Showroom di serramenti: uno dei settori a cui si rivolge Marketing Edile" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-background/85" />
          </div>
          <div className="container-narrow relative z-10">
            <p className="text-secondary text-sm font-semibold uppercase tracking-wider mb-5">Servizi Marketing Edile</p>
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 max-w-4xl">{servicePage.h1}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">Strategia, pagine, contenuti e campagne collegati al modo in cui la tua impresa segue i clienti.</p>
            <Button variant="gold" size="lg" onClick={handleCTA}>Parliamo del progetto della tua impresa <ArrowRight className="w-5 h-5 ml-2" /></Button>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div
              className="prose prose-invert max-w-none prose-headings:text-foreground prose-h2:text-2xl md:prose-h2:text-3xl prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-secondary prose-a:underline-offset-4"
              dangerouslySetInnerHTML={{ __html: serviceBodyHtml }}
            />
          </div>
        </section>

        <PerformanceBanner />
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <h2 className="text-3xl font-bold text-foreground mb-5">Partiamo dal servizio che vuoi promuovere</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mb-7">Porta il sito attuale, le zone coperte e le domande sul percorso commerciale. Il confronto serve a definire attività, consegne e responsabilità del progetto.</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="gold" size="lg" onClick={handleCTA}>Richiedi un confronto <ArrowRight className="w-5 h-5 ml-2" /></Button>
              <Link to="/blog/brief-agenzia-marketing-edile" className="text-secondary underline underline-offset-4">Prepara il brief prima dell’incontro</Link>
            </div>
          </div>
        </section>
        <PageFaq path="/servizi" title="Domande frequenti sui servizi di marketing edile" />
      </main>
      <Footer />
    </>
  );
};

export default Servizi;
