import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Clock, ShieldCheck, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { AnimatedSection } from "@/components/AnimatedSection";
import { siteConfig } from "@/lib/seo";

// ID del pixel Meta "principale" (lo stesso usato per PageView/Lead altrove).
const META_PIXEL_ID = "912028060826443";

const Grazie = () => {
  useEffect(() => {
    // Evento di conversione Meta "Lead" — scatta all'apertura della thank-you page,
    // cioè dopo l'invio del form. fbq esiste solo se l'utente ha dato il consenso cookie.
    if (typeof window.fbq === "function") {
      window.fbq("trackSingle", META_PIXEL_ID, "Lead", {
        content_name: "Richiesta contatto",
        content_category: "Contatto",
      });
    }
  }, []);

  return (
    <>
      <SEOHead
        title="Grazie — Richiesta ricevuta"
        description="Abbiamo ricevuto la tua richiesta. Verrai contattato nelle prossime ore da un nostro consulente."
        url={`${siteConfig.url}/grazie`}
        noindex
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-20 flex items-center justify-center">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 text-gold mb-8">
                <CheckCircle2 className="w-11 h-11" />
              </div>

              <p className="text-gold font-medium mb-3 tracking-wider uppercase text-sm">
                Richiesta ricevuta
              </p>
              <h1 className="heading-section text-foreground mb-4">
                Grazie! Abbiamo ricevuto la tua richiesta
              </h1>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                Verrai contattato nelle prossime ore da un nostro consulente.
                Nel frattempo, tieni il telefono a portata di mano.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left">
                <div className="flex items-start gap-3 bg-card border border-border rounded-xl p-5">
                  <Clock className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Risposta in poche ore</p>
                    <p className="text-sm text-muted-foreground">
                      Un consulente ti contatta nelle prossime ore.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-card border border-border rounded-xl p-5">
                  <ShieldCheck className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Nessun impegno</p>
                    <p className="text-sm text-muted-foreground">
                      La valutazione è gratuita e senza vincoli.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Torna alla homepage
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Grazie;
