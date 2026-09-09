import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowLeft,
  CalendarCheck,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  BookingCalendarEmbed,
  CALENDARIO_IN_PAGINA,
  BOOKING_URL,
} from "@/components/BookingCalendarEmbed";
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
      <main className="min-h-screen bg-background pt-24 pb-20">
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
                Se preferisci non aspettare, scegli tu giorno e ora qui sotto.
              </p>
            </div>
          </AnimatedSection>

          {/* Prenotazione diretta: chi sceglie da solo lo slot si presenta molto piu'
              spesso di chi aspetta la chiamata. L'iframe e' bloccato da
              X-Frame-Options (vedi BookingCalendarEmbed.tsx), quindi finche' non
              viene rimosso apriamo il calendario in una scheda nuova. */}
          <AnimatedSection delay={0.15}>
            <div className="max-w-3xl mx-auto mb-12">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 text-gold mb-4">
                  <CalendarCheck className="w-7 h-7" />
                </div>
                <h2 className="heading-section text-foreground mb-3">
                  Fissa ora la tua consulenza
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Scegli tu il giorno e l'orario che ti vanno meglio. Ricevi subito la
                  conferma via email, senza aspettare che ti richiamiamo.
                </p>
              </div>

              {CALENDARIO_IN_PAGINA ? (
                <div className="bg-card border border-border rounded-2xl p-2 sm:p-4">
                  <BookingCalendarEmbed />
                </div>
              ) : (
                <div className="text-center">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gold text-background px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold/90 transition-colors"
                  >
                    <CalendarCheck className="w-5 h-5" />
                    Scegli data e ora
                    <ExternalLink className="w-4 h-4 opacity-70" />
                  </a>
                  <p className="text-sm text-muted-foreground mt-4">
                    Si apre il calendario con gli orari liberi. Ci vuole meno di un minuto.
                  </p>
                </div>
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <div className="max-w-2xl mx-auto text-center">
              <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left">
                <div className="flex items-start gap-3 bg-card border border-border rounded-xl p-5">
                  <Clock className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Una call, non una presentazione</p>
                    <p className="text-sm text-muted-foreground">
                      Guardiamo i tuoi numeri e ti diciamo se possiamo aiutarti.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-card border border-border rounded-xl p-5">
                  <ShieldCheck className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Nessun impegno</p>
                    <p className="text-sm text-muted-foreground">
                      La consulenza è gratuita e senza vincoli.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors font-medium"
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
