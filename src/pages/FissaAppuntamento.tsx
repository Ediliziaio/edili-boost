import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CalendarCheck,
  Clock,
  ShieldCheck,
  PhoneCall,
  Check,
  X,
  ArrowDown,
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageFaq } from "@/components/PageFaq";
import { EicLeadForm } from "@/components/EicLeadForm";
import {
  siteConfig,
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import { getPageFaq } from "@/data/pageFaqs.js";
import logo from "@/assets/marketing-edile-logo.png";
import logoRenovaTetto from "@/assets/renova_tetto.png";
import logoRenovaSolution from "@/assets/renova_solution.png";
import logoGreenEnergy from "@/assets/green_energy.png";

const PATH = "/fissa-appuntamento";

// Aziende accettate ogni mese: stessa capienza dichiarata su /contattaci, e
// nasce dal modello a provvigione (poche aziende seguite bene).
const POSTI_MESE = 3;

const MESI = [
  "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
  "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre",
];

// Numeri verificati, gli stessi dichiarati sul resto del sito.
const prove = [
  { numero: "€60M+", testo: "generati per i nostri partner" },
  { numero: "47+", testo: "aziende edili seguite" },
  { numero: "8+", testo: "anni dentro il settore" },
  { numero: "€2M", testo: "fatti con la nostra azienda di serramenti" },
];

// Dolore: il lettore deve riconoscersi prima che si parli di noi.
const situazioni = [
  {
    titolo: "Hai già pagato un'agenzia",
    testo: "Canone fisso, sei mesi, report pieni di grafici. Contratti firmati: due.",
  },
  {
    titolo: "I contatti arrivano, i clienti no",
    testo: "Chiedono il prezzo, dicono che ci pensano, spariscono. Li richiami tre volte e basta.",
  },
  {
    titolo: "Il passaparola non basta più",
    testo: "Ha retto per anni. Poi arriva il mese vuoto e non sai da dove far uscire il prossimo lavoro.",
  },
];

const confronto = {
  altre: [
    "Canone fisso ogni mese, che tu venda o no",
    "Più il budget pubblicitario, a tuo carico",
    "Costo di setup iniziale",
    "Incassano lo stesso anche a zero contratti",
  ],
  noi: [
    "Zero canone fisso",
    "Solo il budget pubblicitario: è tuo e resta tuo",
    "Zero costi di setup",
    "Guadagniamo solo sulle vendite che chiudi",
  ],
};

// Risultati reali, gli stessi pubblicati su /casi-studio.
const casi = [
  {
    logo: logoRenovaTetto,
    azienda: "Renova Tetto",
    settore: "Rifacimento tetti",
    numero: "+€600.000",
    dettaglio: "in vendite, con copertura estesa a tutto il Veneto",
  },
  {
    logo: logoRenovaSolution,
    azienda: "Renova Solution",
    settore: "Fotovoltaico",
    numero: "+€500.000",
    dettaglio: "in 12 mesi di flusso commerciale costante",
  },
  {
    logo: logoGreenEnergy,
    azienda: "Green Energy Group",
    settore: "Fotovoltaico",
    numero: "+€300.000",
    dettaglio: "in 2 mesi, da contatti sporadici a lead pronti all'acquisto",
  },
];

const passi = [
  {
    icona: CalendarCheck,
    titolo: "Lasci i tuoi dati",
    testo: "Azienda, settore, un numero. Due minuti, niente questionari.",
  },
  {
    icona: PhoneCall,
    titolo: "Ti richiamiamo",
    testo: "Entro 24 ore. Fissiamo giorno e ora, anche fuori orario se sei in cantiere.",
  },
  {
    icona: Clock,
    titolo: "Parliamo 45 minuti",
    testo: "Guardiamo i tuoi numeri. Ti diciamo se possiamo aiutarti. O se non possiamo.",
  },
];

const qualificazione = {
  si: [
    "Imprese edili, serramentisti e showroom infissi",
    "Ristrutturazioni, fotovoltaico, impiantisti, tetti e coperture",
    "Hai una struttura che regge nuovi appuntamenti",
    "Hai un budget pubblicitario da investire, che resta tuo",
  ],
  no: [
    "Cerchi contatti a bassissimo costo, non clienti",
    "Non hai nessuno che richiami chi lascia i dati",
    "Vuoi provare un mese e vedere che succede",
    "La tua provincia è già occupata da un nostro cliente",
  ],
};

/** Riquadro del modulo: ripetuto in alto e in fondo alla pagina. */
function BloccoForm({ id }: { id?: string }) {
  return (
    <div
      id={id}
      className="relative rounded-2xl border border-gold/25 bg-card/80 backdrop-blur-sm p-5 sm:p-7 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.9)]"
    >
      <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      <p className="text-center text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-1">
        Candidatura
      </p>
      <p className="text-center text-foreground font-bold text-xl mb-5">
        Richiedi la tua consulenza
      </p>
      <EicLeadForm slug="marketing-edile" eager className="mx-auto" />
      <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-gold" />
          Gratis, nessun impegno
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-gold" />
          Ti richiamiamo entro 24 ore
        </span>
      </div>
    </div>
  );
}

const FissaAppuntamento = () => {
  const faqData = getPageFaq(PATH);
  const meseCorrente = MESI[new Date().getMonth()];

  const rivela = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <>
      <SEOHead
        title="Fissa la Tua Consulenza | Marketing Edile"
        description={`Consulenza gratuita con Marketing Edile®. Solo ${POSTI_MESE} nuove aziende edili al mese, una per provincia. Paghi solo sulle vendite chiuse.`}
        keywords={siteConfig.pageKeywords.fissaAppuntamento}
        url={`${siteConfig.url}${PATH}`}
        jsonLd={[
          generateLocalBusinessSchema(),
          ...(faqData?.faqs?.length ? [generateFAQSchema(faqData.faqs)] : []),
          generateBreadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Fissa la tua consulenza", url: `${siteConfig.url}${PATH}` },
          ]),
        ]}
      />

      {/* Barra minima: niente menu, solo il marchio. È una landing, non una pagina del sito. */}
      <header className="relative z-20 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <Link to="/" aria-label="Marketing Edile® — home">
            <img
              src={logo}
              alt="Marketing Edile® — agenzia marketing per imprese edili"
              className="h-9 w-auto"
              width="160"
              height="40"
            />
          </Link>
          <span className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            {POSTI_MESE} posti a {meseCorrente}
          </span>
        </div>
      </header>

      <main className="relative overflow-hidden">
        {/* Atmosfera: due aloni d'oro e una griglia sottile, niente blocchi piatti. */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-32 w-[46rem] h-[46rem] rounded-full bg-gold/[0.07] blur-[140px]" />
          <div className="absolute top-[38rem] -right-40 w-[38rem] h-[38rem] rounded-full bg-gold/[0.05] blur-[130px]" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
              maskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, #000 40%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 50% at 50% 0%, #000 40%, transparent 100%)",
            }}
          />
        </div>

        {/* ── HERO: titolo a sinistra, modulo a destra e già visibile ─────── */}
        <section className="max-w-6xl mx-auto px-6 pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7">
              <motion.div {...rivela(0)}>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/30 bg-gold/[0.07] text-gold text-[0.7rem] font-bold uppercase tracking-[0.18em]">
                  Una sola azienda per provincia
                </span>
              </motion.div>

              <motion.p
                {...rivela(0.06)}
                className="mt-6 text-lg sm:text-2xl font-bold uppercase tracking-tight text-gold leading-tight"
              >
                Hai un'azienda edile, di serramenti o fotovoltaico?
              </motion.p>

              <motion.h1
                {...rivela(0.12)}
                className="mt-3 text-[2.7rem] leading-[0.95] sm:text-6xl lg:text-7xl font-black tracking-tighter text-foreground"
              >
                FISSA LA TUA
                <br />
                <span className="text-gold">CONSULENZA</span>
              </motion.h1>

              <motion.div {...rivela(0.2)} className="mt-6 max-w-xl">
                <div className="pl-5 border-l-2 border-gold/50">
                  <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                    45 minuti al telefono con chi vende in edilizia tutti i giorni.
                    Guardiamo i tuoi numeri veri e ti diciamo se possiamo portarti clienti.
                  </p>
                  <p className="mt-3 text-lg sm:text-xl text-foreground font-semibold">
                    Se poi lavoriamo insieme, ci paghi solo sul venduto.
                  </p>
                </div>
              </motion.div>

              <motion.div {...rivela(0.28)} className="mt-8 flex flex-wrap gap-2.5">
                {["Zero canone fisso", "Nessun impegno", "Risposta entro 24 ore"].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-sm text-muted-foreground"
                  >
                    <Check className="w-3.5 h-3.5 text-gold" />
                    {t}
                  </span>
                ))}
              </motion.div>

              <motion.a
                {...rivela(0.36)}
                href="#candidatura"
                className="lg:hidden mt-8 inline-flex items-center gap-2 text-gold font-semibold"
              >
                Vai al modulo
                <ArrowDown className="w-4 h-4" />
              </motion.a>
            </div>

            <motion.div {...rivela(0.2)} className="lg:col-span-5 lg:sticky lg:top-8">
              <BloccoForm id="candidatura" />
            </motion.div>
          </div>
        </section>

        {/* ── PROVE: numeri in formato editoriale ─────────────────────────── */}
        <section className="border-y border-border/60 bg-navy-dark/40">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {prove.map((p) => (
                <div key={p.numero}>
                  <p className="text-3xl sm:text-4xl font-black tracking-tighter text-gold">
                    {p.numero}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground leading-snug">{p.testo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DOLORE ──────────────────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground max-w-2xl">
              Quando ha senso fissare la consulenza
            </h2>
            <div className="mt-10 grid md:grid-cols-3 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/60">
              {situazioni.map((s, i) => (
                <div key={s.titolo} className="bg-background p-7">
                  <span className="text-xs font-black text-gold/60 tracking-[0.2em]">
                    0{i + 1}
                  </span>
                  <p className="mt-3 font-bold text-foreground text-lg leading-snug">
                    {s.titolo}
                  </p>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.testo}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
              Il problema non sei tu. È il modo in cui ti hanno venduto il marketing: tu
              paghi prima, loro incassano comunque.{" "}
              <span className="text-foreground font-semibold">
                Noi lo abbiamo girato al contrario.
              </span>
            </p>
          </AnimatedSection>
        </section>

        {/* ── CONFRONTO ───────────────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pb-16 md:pb-24">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground max-w-3xl">
              Noi lavoriamo a provvigione,{" "}
              <span className="text-gold">tu investi solo in pubblicità</span>
            </h2>
            <div className="mt-10 grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-border bg-card/40 p-7">
                <p className="font-bold text-muted-foreground mb-5 uppercase text-xs tracking-[0.18em]">
                  Le altre agenzie
                </p>
                <ul className="space-y-3.5">
                  {confronto.altre.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <X className="w-4 h-4 text-muted-foreground/60 shrink-0 mt-1" />
                      <span className="text-muted-foreground leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-2xl border border-gold/40 bg-card p-7">
                <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                <p className="font-bold text-gold mb-5 uppercase text-xs tracking-[0.18em]">
                  Marketing Edile
                </p>
                <ul className="space-y-3.5">
                  {confronto.noi.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                      <span className="text-foreground leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-8 text-muted-foreground max-w-2xl leading-relaxed">
              Con un canone fisso l'agenzia incassa comunque, quindi il rischio è tutto tuo.
              A provvigione il rischio ce lo prendiamo noi: se non vendi, non guadagniamo.{" "}
              <span className="text-foreground font-semibold">
                Per questo ti diciamo subito se i numeri non ci sono.
              </span>
            </p>
          </AnimatedSection>
        </section>

        {/* ── RISULTATI REALI ─────────────────────────────────────────────── */}
        <section className="border-y border-border/60 bg-navy-dark/40">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
                Cosa è successo a chi ha già fatto questa call
              </h2>
              <div className="mt-10 grid md:grid-cols-3 gap-5">
                {casi.map((c) => (
                  <div
                    key={c.azienda}
                    className="rounded-2xl border border-border bg-background p-7 flex flex-col"
                  >
                    <img
                      src={c.logo}
                      alt={`${c.azienda} — cliente Marketing Edile`}
                      className="h-11 w-auto object-contain self-start"
                      loading="lazy"
                    />
                    <p className="mt-6 text-4xl font-black tracking-tighter text-gold">
                      {c.numero}
                    </p>
                    <p className="mt-2 text-muted-foreground leading-relaxed flex-1">
                      {c.dettaglio}
                    </p>
                    <p className="mt-5 pt-4 border-t border-border/60 text-sm">
                      <span className="text-foreground font-semibold">{c.azienda}</span>
                      <span className="text-muted-foreground"> · {c.settore}</span>
                    </p>
                  </div>
                ))}
              </div>
              <Link
                to="/casi-studio"
                className="mt-8 inline-flex items-center gap-2 text-gold font-semibold hover-underline"
              >
                Vedi tutti i casi studio
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* ── COME FUNZIONA ───────────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
              Come funziona la consulenza
            </h2>
            <div className="mt-10 grid md:grid-cols-3 gap-8">
              {passi.map((p, i) => (
                <div key={p.titolo} className="relative">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-11 h-11 rounded-xl border border-gold/30 bg-gold/[0.07] text-gold">
                      <p.icona className="w-5 h-5" />
                    </span>
                    <span className="text-5xl font-black tracking-tighter text-border">
                      {i + 1}
                    </span>
                  </div>
                  <p className="mt-5 font-bold text-foreground text-lg">{p.titolo}</p>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{p.testo}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* ── SCARSITÀ, spiegata dalla causa ──────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pb-16 md:pb-24">
          <AnimatedSection>
            <div className="rounded-2xl border border-gold/30 bg-card/60 p-8 md:p-12 grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-5xl font-black tracking-tighter text-gold">
                  {POSTI_MESE}
                  <span className="text-2xl text-muted-foreground font-bold"> / mese</span>
                </p>
                <p className="mt-4 font-bold text-foreground text-lg">
                  Perché i posti sono {POSTI_MESE} e non trenta
                </p>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Non incassiamo canoni. Guadagniamo solo quando tu vendi. Ogni azienda che
                  prendiamo ci costa mesi di lavoro prima di vedere un euro. Non è una
                  tattica per farti correre: è quante aziende riusciamo a seguire bene.
                </p>
              </div>
              <div className="md:border-l md:border-border md:pl-10">
                <p className="text-5xl font-black tracking-tighter text-gold">
                  1<span className="text-2xl text-muted-foreground font-bold"> / provincia</span>
                </p>
                <p className="mt-4 font-bold text-foreground text-lg">
                  E una sola azienda per provincia
                </p>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Se lavoriamo con un serramentista a Brescia, non lavoriamo con il suo
                  concorrente: far competere due nostri clienti sullo stesso pubblico alza
                  il costo dei contatti e danneggia entrambi. Chi entra prima si prende la
                  provincia.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* ── QUALIFICAZIONE ──────────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pb-16 md:pb-24">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
              Chi può prenotare la consulenza
            </h2>
            <div className="mt-10 grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-gold/30 bg-card/60 p-7">
                <p className="font-bold text-gold mb-5 uppercase text-xs tracking-[0.18em]">
                  Ha senso se
                </p>
                <ul className="space-y-3.5">
                  {qualificazione.si.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                      <span className="text-foreground leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card/40 p-7">
                <p className="font-bold text-muted-foreground mb-5 uppercase text-xs tracking-[0.18em]">
                  Non ha senso se
                </p>
                <ul className="space-y-3.5">
                  {qualificazione.no.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <X className="w-4 h-4 text-muted-foreground/60 shrink-0 mt-1" />
                      <span className="text-muted-foreground leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </section>

        <PageFaq path={PATH} title="Domande sulla consulenza" />

        {/* ── CHIUSURA: il modulo, di nuovo ───────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <AnimatedSection>
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
                  Restano {POSTI_MESE} posti a {meseCorrente}
                </h2>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                  Lascia i tuoi dati: ti richiamiamo entro 24 ore e fissiamo la call. Se
                  dopo 45 minuti non ci sono i numeri per lavorare insieme, te lo diciamo
                  e ti sei tolto il dubbio. Gratis.
                </p>
              </div>
              <div className="lg:col-span-6">
                <BloccoForm />
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>

      {/* Footer minimo: solo gli obblighi legali, per non distrarre. Su mobile
          lo spazio in fondo evita che la barra WhatsApp copra i link legali. */}
      <footer className="border-t border-border bg-navy-dark/60 pt-8 pb-28 md:pb-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground space-y-2">
          <p>
            {siteConfig.name} — {siteConfig.companyName} · P.IVA {siteConfig.vatNumber} ·{" "}
            {siteConfig.address.city}
          </p>
          <p className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookie-policy" className="hover:text-gold transition-colors">
              Cookie Policy
            </Link>
            <Link to="/casi-studio" className="hover:text-gold transition-colors">
              Casi studio
            </Link>
            <Link to="/" className="hover:text-gold transition-colors">
              Torna al sito
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default FissaAppuntamento;
