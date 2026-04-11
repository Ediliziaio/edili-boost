import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Informativa sulla privacy di Domus Group S.r.l. ai sensi dell'Art. 13 del Regolamento UE 2016/679 (GDPR)."
        noindex
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16 px-6">
        <div className="container-narrow prose prose-invert max-w-3xl mx-auto">
          <div className="bg-muted/20 rounded-2xl p-8 md:p-12">
            <h1 className="heading-section text-foreground mb-8">Informativa sulla Privacy</h1>
            <p className="text-muted-foreground text-sm mb-8">
              Ai sensi dell'Art. 13 del Regolamento (UE) 2016/679 ("GDPR")
            </p>

            <section className="space-y-10 text-muted-foreground leading-relaxed">
              <div className="border-b border-border/20 pb-6">
                <h2 className="text-xl font-bold text-foreground mb-3 border-l-4 border-primary pl-4">1. Titolare del Trattamento</h2>
              <p>
                Il Titolare del trattamento dei dati personali è:<br />
                <strong className="text-foreground">Domus Group S.r.l.</strong><br />
                Sede Legale: Via Aurelio Saffi 29, CAP 20123 Milano<br />
                P.IVA: 13132010961<br />
                Capitale Sociale: 20.000,00€<br />
                PEC: <a href="mailto:domusgroupsrl@legalmail.it" className="text-secondary hover:underline">domusgroupsrl@legalmail.it</a><br />
                Email: <a href="mailto:Amministrazione@domusgroupitalia.it" className="text-secondary hover:underline">Amministrazione@domusgroupitalia.it</a><br />
                SDI: USAL8PV
              </p>
            </div>

            <div className="border-b border-border/20 pb-6">
              <h2 className="text-xl font-bold text-foreground mb-3 border-l-4 border-primary pl-4">2. Tipologie di Dati Raccolti</h2>
              <p>I dati personali raccolti dal sito, in modo autonomo o tramite terze parti, includono:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong className="text-foreground">Dati di navigazione:</strong> indirizzo IP, tipo di browser, sistema operativo, pagine visitate, orario di accesso, sorgente di traffico.</li>
                <li><strong className="text-foreground">Dati forniti volontariamente:</strong> nome, indirizzo email, numero di telefono e qualsiasi altra informazione comunicata tramite moduli di contatto o richiesta preventivo.</li>
                <li><strong className="text-foreground">Cookie e tecnologie di tracciamento:</strong> cookie tecnici, analitici e di profilazione. Per maggiori dettagli, consultare la nostra <Link to="/cookie-policy" className="text-secondary hover:underline">Cookie Policy</Link>.</li>
              </ul>
            </div>

            <div className="border-b border-border/20 pb-6">
              <h2 className="text-xl font-bold text-foreground mb-3 border-l-4 border-primary pl-4">3. Finalità e Base Giuridica del Trattamento</h2>
              <p>I dati personali sono trattati per le seguenti finalità:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong className="text-foreground">Erogazione del servizio e gestione delle richieste</strong> (base giuridica: esecuzione di misure precontrattuali o contrattuali — Art. 6.1.b GDPR).
                </li>
                <li>
                  <strong className="text-foreground">Adempimento di obblighi di legge</strong> (base giuridica: obbligo legale — Art. 6.1.c GDPR).
                </li>
                <li>
                  <strong className="text-foreground">Analisi statistiche anonime</strong> per migliorare il sito e i servizi (base giuridica: legittimo interesse — Art. 6.1.f GDPR).
                </li>
                <li>
                  <strong className="text-foreground">Marketing diretto e profilazione</strong>, previo consenso esplicito (base giuridica: consenso — Art. 6.1.a GDPR).
                </li>
              </ul>
            </div>

            <div className="border-b border-border/20 pb-6">
              <h2 className="text-xl font-bold text-foreground mb-3 border-l-4 border-primary pl-4">4. Modalità di Trattamento</h2>
              <p>
                I dati personali sono trattati con strumenti automatizzati e non automatizzati, con logiche strettamente correlate alle finalità sopra indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi, nel rispetto delle misure organizzative, fisiche e logiche previste dalle disposizioni vigenti.
              </p>
            </div>

            <div className="border-b border-border/20 pb-6">
              <h2 className="text-xl font-bold text-foreground mb-3 border-l-4 border-primary pl-4">5. Conservazione dei Dati</h2>
              <p>
                I dati personali saranno conservati per il tempo strettamente necessario al raggiungimento delle finalità per cui sono raccolti, e comunque nel rispetto dei termini di legge applicabili. I dati raccolti per finalità di marketing saranno conservati fino alla revoca del consenso da parte dell'interessato.
              </p>
            </div>

            <div className="border-b border-border/20 pb-6">
              <h2 className="text-xl font-bold text-foreground mb-3 border-l-4 border-primary pl-4">6. Comunicazione e Diffusione dei Dati</h2>
              <p>
                I dati personali potranno essere comunicati a soggetti terzi solo nei casi previsti dalla legge o per l'esecuzione delle finalità sopra indicate, quali:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Fornitori di servizi tecnici e informatici (hosting, email marketing, CRM)</li>
                <li>Consulenti e professionisti incaricati</li>
                <li>Autorità competenti, ove richiesto dalla legge</li>
              </ul>
              <p className="mt-2">I dati non saranno oggetto di diffusione indiscriminata.</p>
            </div>

            <div className="border-b border-border/20 pb-6">
              <h2 className="text-xl font-bold text-foreground mb-3 border-l-4 border-primary pl-4">7. Trasferimento dei Dati all'Estero</h2>
              <p>
                Alcuni dei fornitori di servizi terzi utilizzati (ad esempio per hosting o analytics) potrebbero trattare i dati in Paesi extra-UE. In tali casi, il trasferimento avverrà nel rispetto delle garanzie previste dal GDPR (decisioni di adeguatezza, clausole contrattuali standard, o altre garanzie appropriate).
              </p>
            </div>

            <div className="border-b border-border/20 pb-6">
              <h2 className="text-xl font-bold text-foreground mb-3 border-l-4 border-primary pl-4">8. Diritti dell'Interessato</h2>
              <p>
                Ai sensi degli Artt. 15-22 del GDPR, l'interessato ha diritto di:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong className="text-foreground">Accesso:</strong> ottenere conferma dell'esistenza dei propri dati e la loro comunicazione in forma intelligibile.</li>
                <li><strong className="text-foreground">Rettifica:</strong> ottenere l'aggiornamento, la rettificazione o l'integrazione dei dati.</li>
                <li><strong className="text-foreground">Cancellazione:</strong> ottenere la cancellazione dei dati ("diritto all'oblio").</li>
                <li><strong className="text-foreground">Limitazione:</strong> ottenere la limitazione del trattamento.</li>
                <li><strong className="text-foreground">Portabilità:</strong> ricevere i dati in un formato strutturato, di uso comune e leggibile da dispositivo automatico.</li>
                <li><strong className="text-foreground">Opposizione:</strong> opporsi al trattamento per motivi legittimi.</li>
                <li><strong className="text-foreground">Revoca del consenso:</strong> revocare in qualsiasi momento il consenso prestato, senza pregiudicare la liceità del trattamento basato sul consenso prima della revoca.</li>
              </ul>
              <p className="mt-3">
                Per esercitare i propri diritti, l'interessato può inviare una comunicazione a:<br />
                <a href="mailto:Amministrazione@domusgroupitalia.it" className="text-secondary hover:underline">Amministrazione@domusgroupitalia.it</a> oppure via PEC a <a href="mailto:domusgroupsrl@legalmail.it" className="text-secondary hover:underline">domusgroupsrl@legalmail.it</a>.
              </p>
            </div>

            <div className="border-b border-border/20 pb-6">
              <h2 className="text-xl font-bold text-foreground mb-3 border-l-4 border-primary pl-4">9. Reclamo all'Autorità di Controllo</h2>
              <p>
                L'interessato che ritenga che il trattamento dei propri dati violi il GDPR ha diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">www.garanteprivacy.it</a>).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3 border-l-4 border-primary pl-4">10. Modifiche alla presente Informativa</h2>
              <p>
                Il Titolare si riserva il diritto di modificare la presente informativa in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.
              </p>
              <p className="mt-3 text-sm">
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

export default PrivacyPolicy;
