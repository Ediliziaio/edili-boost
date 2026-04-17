import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEOHead
        title="Cookie Policy"
        description="Informativa sull'utilizzo dei cookie sul sito di Marketing Edile by Domus Group S.r.l."
        url="https://www.marketingedile.com/cookie-policy"
        noindex
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16 px-6">
        <div className="container-narrow prose prose-invert max-w-3xl mx-auto">
          <div className="bg-muted/20 rounded-2xl p-8 md:p-12">
            <h1 className="heading-section text-foreground mb-8">Cookie Policy</h1>
            <p className="text-muted-foreground text-sm mb-8">
              Informativa estesa sull'utilizzo dei cookie — ai sensi dell'Art. 13 del Regolamento (UE) 2016/679 e della Direttiva 2002/58/CE (ePrivacy)
            </p>

            <section className="space-y-10 text-muted-foreground leading-relaxed">
              <div className="border-b border-border/20 pb-6">
                <h2 className="text-xl font-bold text-foreground mb-3 border-l-4 border-primary pl-4">1. Cosa sono i Cookie</h2>
              <p>
                I cookie sono piccoli file di testo che i siti web visitati inviano al browser dell'utente, dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva. I cookie sono utilizzati per diverse finalità: esecuzione di autenticazioni informatiche, monitoraggio di sessioni, memorizzazione di preferenze, e — previo consenso — per finalità statistiche e di profilazione.
              </p>
            </div>

            <div className="border-b border-border/20 pb-6">
              <h2 className="text-xl font-bold text-foreground mb-3 border-l-4 border-primary pl-4">2. Tipologie di Cookie Utilizzati</h2>

              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">2.1 Cookie Tecnici (Necessari)</h3>
              <p>
                Sono indispensabili per il corretto funzionamento del sito e non richiedono il consenso dell'utente. Includono:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Cookie di sessione per la navigazione</li>
                <li>Cookie per la memorizzazione delle preferenze di consenso</li>
                <li>Cookie di sicurezza (CSRF protection)</li>
              </ul>

              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm border border-border/50 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 text-foreground font-semibold">Nome</th>
                      <th className="text-left p-3 text-foreground font-semibold">Fornitore</th>
                      <th className="text-left p-3 text-foreground font-semibold">Finalità</th>
                      <th className="text-left p-3 text-foreground font-semibold">Durata</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border/30">
                      <td className="p-3">cookie-consent</td>
                      <td className="p-3">Questo sito</td>
                      <td className="p-3">Memorizza la scelta dell'utente sui cookie</td>
                      <td className="p-3">12 mesi</td>
                    </tr>
                    <tr className="border-t border-border/30">
                      <td className="p-3">sb-*</td>
                      <td className="p-3">Lovable Cloud</td>
                      <td className="p-3">Autenticazione e gestione sessione</td>
                      <td className="p-3">Sessione</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">2.2 Cookie Analitici</h3>
              <p>
                Consentono di raccogliere informazioni in forma aggregata e anonima sull'utilizzo del sito per finalità statistiche. Se configurati in modo da non identificare direttamente l'utente, possono essere assimilati ai cookie tecnici.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">2.3 Cookie di Profilazione e Marketing</h3>
              <p>
                Sono utilizzati per tracciare la navigazione dell'utente e creare profili sui suoi gusti, abitudini e scelte di consumo, al fine di inviare messaggi pubblicitari mirati. Questi cookie vengono installati <strong className="text-foreground">solo previo consenso esplicito</strong> dell'utente.
              </p>
            </div>

            <div className="border-b border-border/20 pb-6">
              <h2 className="text-xl font-bold text-foreground mb-3 border-l-4 border-primary pl-4">3. Cookie di Terze Parti</h2>
              <p>
                Il sito potrebbe utilizzare servizi di terze parti che installano cookie propri. Di seguito i principali:
              </p>
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm border border-border/50 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 text-foreground font-semibold">Servizio</th>
                      <th className="text-left p-3 text-foreground font-semibold">Fornitore</th>
                      <th className="text-left p-3 text-foreground font-semibold">Finalità</th>
                      <th className="text-left p-3 text-foreground font-semibold">Privacy Policy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border/30">
                      <td className="p-3">Google Analytics</td>
                      <td className="p-3">Google LLC</td>
                      <td className="p-3">Analisi statistica</td>
                      <td className="p-3">
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Link</a>
                      </td>
                    </tr>
                    <tr className="border-t border-border/30">
                      <td className="p-3">Google Fonts</td>
                      <td className="p-3">Google LLC</td>
                      <td className="p-3">Caricamento font</td>
                      <td className="p-3">
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Link</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-b border-border/20 pb-6">
              <h2 className="text-xl font-bold text-foreground mb-3 border-l-4 border-primary pl-4">4. Come Gestire i Cookie</h2>
              <p>
                L'utente può gestire le preferenze sui cookie in qualsiasi momento attraverso il banner di consenso presente sul sito, oppure configurando direttamente il proprio browser.
              </p>
              <p className="mt-3">
                Di seguito i link alle istruzioni per la gestione dei cookie nei principali browser:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Google Chrome</a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Mozilla Firefox</a>
                </li>
                <li>
                  <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Apple Safari</a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Microsoft Edge</a>
                </li>
              </ul>
              <p className="mt-3">
                <strong className="text-foreground">Nota:</strong> la disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 border-l-4 border-primary pl-4">5. Titolare del Trattamento</h2>
              <p>
                <strong className="text-foreground">Domus Group S.r.l.</strong><br />
                Via Aurelio Saffi 29, CAP 20123 Milano<br />
                P.IVA: 13132010961<br />
                Email: <a href="mailto:Amministrazione@domusgroupitalia.it" className="text-secondary hover:underline">Amministrazione@domusgroupitalia.it</a><br />
                PEC: <a href="mailto:domusgroupsrl@legalmail.it" className="text-secondary hover:underline">domusgroupsrl@legalmail.it</a>
              </p>
              <p className="mt-3">
                Per maggiori informazioni sul trattamento dei dati personali, consultare la nostra <Link to="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>.
              </p>
            </div>

            <div>
              <p className="text-sm">
                <strong className="text-foreground">Ultimo aggiornamento:</strong> Aprile 2026
              </p>
            </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CookiePolicy;
