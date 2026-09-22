import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CalendarCheck,
  ShieldCheck,
  PhoneCall,
  Check,
  X,
  Quote,
  Target,
  Megaphone,
  Filter,
  Handshake,
  LineChart,
  Video,
  BellRing,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageFaq } from "@/components/PageFaq";
import { BookingCalendarEmbed, BOOKING_URL } from "@/components/BookingCalendarEmbed";
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
import logoTeda from "@/assets/teda.png";
import imgCantiere from "@/assets/cantiere.jpg";
import imgShowroom from "@/assets/showroom.jpg";
import imgFinestre from "@/assets/hero-windows.jpg";
import imgTetti from "@/assets/tetti-hero.jpg";
import imgFotovoltaico from "@/assets/fotovoltaico-hero.jpg";
import ritrattoFlo from "@/assets/flo-portrait.jpg";

const PATH = "/fissa-appuntamento";

// Pixel Meta principale: lo stesso usato da /grazie e dal bottone WhatsApp.
const META_PIXEL_ID = "912028060826443";

// Per chi non trova un orario: stesso numero e messaggio del bottone WhatsApp.
const WHATSAPP_URL = `https://wa.me/393501780908?text=${encodeURIComponent(
  "Voglio avere maggiori informazioni su Marketing Edile",
)}`;

// Aziende accettate ogni mese: stessa capienza dichiarata su /contattaci, e
// nasce dal modello a provvigione (poche aziende seguite bene).
const POSTI_MESE = 3;

const MESI = [
  "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
  "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre",
];

// Numeri verificati, gli stessi dichiarati sul resto del sito.
const prove = [
  { valore: 60, prefisso: "€", suffisso: "M+", testo: "generati per i nostri partner" },
  { valore: 47, suffisso: "+", testo: "aziende edili seguite" },
  { valore: 8, suffisso: "+", testo: "anni dentro il settore edile" },
  { valore: 2, prefisso: "€", suffisso: "M", testo: "fatti con la nostra azienda di serramenti" },
];

// Dolore: il lettore deve riconoscersi prima che si parli di noi.
const situazioni = [
  {
    titolo: "Hai già pagato un'agenzia",
    testo:
      "Canone fisso, sei mesi, report pieni di grafici su copertura e impressioni. Contratti firmati: due. E quando hai chiesto conto dei risultati, la risposta è stata che «il mercato è difficile».",
  },
  {
    titolo: "I contatti arrivano, i clienti no",
    testo:
      "Chiedono il prezzo, dicono che ci pensano, spariscono. Li richiami tre volte e poi lasci perdere. Non è che mancano i contatti: mancano quelli che stavano davvero comprando.",
  },
  {
    titolo: "Il passaparola non basta più",
    testo:
      "Ha retto per anni ed è stato il tuo miglior commerciale. Poi arriva il mese vuoto, e non hai nessuna leva per farne uscire un altro: puoi solo aspettare che squilli il telefono.",
  },
];

// Il metodo, spiegato. Non promesse: cosa succede concretamente, nell'ordine.
const metodo = [
  {
    icona: Target,
    titolo: "Partiamo dai tuoi numeri, non da un preventivo",
    testo:
      "Quanti preventivi fai al mese, quanti ne chiudi, qual è il ticket medio, da dove arrivano oggi i clienti, quanto raggio copri. Da qui capiamo se c'è spazio e quanto budget serve davvero. Se i numeri non tornano, lo diciamo subito invece di prenderti come cliente.",
  },
  {
    icona: Megaphone,
    titolo: "Costruiamo l'offerta e gli annunci",
    testo:
      "Non partiamo dal prodotto ma dal risultato che il tuo cliente vuole: risparmio in bolletta, casa più sicura, cantiere che finisce nei tempi. Scriviamo gli annunci, giriamo le creatività e le mandiamo in campagna su Meta e Google, geolocalizzate sulla tua zona.",
  },
  {
    icona: Filter,
    titolo: "Filtriamo prima che ti arrivino",
    testo:
      "Chi clicca finisce su una pagina costruita per il tuo settore, non sul sito generico. Lì lascia i dati e risponde alle domande che contano: cosa deve fare, quando, in che zona. I curiosi si fermano qui. Tu vedi solo chi è passato dal filtro.",
  },
  {
    icona: PhoneCall,
    titolo: "Il follow-up parte subito",
    testo:
      "Un contatto richiamato dopo tre giorni è un contatto perso: nel frattempo ha già parlato con altri due. I contatti entrano nel CRM e il richiamo parte subito, con messaggi e promemoria finché non si arriva a un sì o a un no chiaro.",
  },
  {
    icona: Handshake,
    titolo: "A te arrivano appuntamenti, non liste",
    testo:
      "In agenda ti trovi persone che sanno chi sei, cosa fai e quanto costa più o meno. Il tuo lavoro torna a essere quello che sai fare: andare lì e vendere.",
  },
  {
    icona: LineChart,
    titolo: "Ottimizziamo sui contratti, non sui clic",
    testo:
      "Ogni settimana guardiamo cosa ha prodotto vendite vere e spostiamo il budget lì. È l'unico modo che abbiamo per guadagnare: se non firmi contratti, non incassiamo. I nostri interessi e i tuoi puntano nella stessa direzione.",
  },
];

const incluso = [
  "Strategia e offerta costruite sul tuo mercato e sulla tua zona",
  "Annunci, testi e creatività, girati e scritti da noi",
  "Pagina dedicata al tuo settore, non il sito generico",
  "Tracciamento e CRM configurati: sai da dove arriva ogni contatto",
  "Qualificazione e follow-up dei contatti",
  "Ottimizzazione continua sui contratti chiusi, non sui clic",
];

const metti = [
  "Il budget pubblicitario: è tuo, resta tuo e va sulle tue campagne",
  "Qualcuno che richiami chi lascia i dati, anche solo tu",
  "La capacità di reggere nuovi appuntamenti senza affogare",
  "La provvigione, solo sulle vendite che chiudi davvero",
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

// Risultati e parole reali: gli stessi pubblicati su /casi-studio.
const casi = [
  {
    logo: logoRenovaTetto,
    azienda: "Renova Tetto",
    settore: "Rifacimento tetti · Veneto",
    numero: "+€600.000",
    dettaglio: "di rifacimenti venduti, con copertura estesa a tutto il Veneto",
    citazione:
      "Siamo diventati il punto di riferimento nella nostra zona grazie a una strategia mirata che ci porta clienti pronti a firmare, non solo a chiedere preventivi.",
    autore: "Titolare Renova Tetto",
  },
  {
    logo: logoRenovaSolution,
    azienda: "Renova Solution",
    settore: "Fotovoltaico",
    numero: "+€500.000",
    dettaglio: "in 12 mesi di flusso commerciale costante",
    citazione:
      "Finalmente abbiamo un flusso prevedibile di clienti e possiamo pianificare la crescita dell'azienda con serenità.",
    autore: "Fabio Ragagnin",
  },
  {
    logo: logoGreenEnergy,
    azienda: "Green Energy Group",
    settore: "Fotovoltaico",
    numero: "+€300.000",
    dettaglio: "in 2 mesi, da contatti sporadici a lead pronti all'acquisto",
    citazione:
      "I contatti che arrivano sono già informati e pronti a comprare, il nostro team commerciale finalmente lavora con persone in target.",
    autore: "Andrea Tacchin",
  },
  {
    logo: logoTeda,
    azienda: "Teda Infissi",
    settore: "Infissi e serramenti",
    numero: "€30-40k",
    dettaglio: "al mese di flusso costante, partendo da un investimento minimo",
    citazione:
      "Siamo una piccola azienda e pensavamo che il marketing online non fosse per noi. Non ci saremmo mai aspettati questi risultati.",
    autore: "Luana Agostini",
  },
];

const settori = [
  { nome: "Serramenti e infissi", immagine: imgFinestre, href: "/settori/serramenti" },
  { nome: "Fotovoltaico", immagine: imgFotovoltaico, href: "/settori/fotovoltaico" },
  { nome: "Tetti e coperture", immagine: imgTetti, href: "/settori/tetti" },
  { nome: "Ristrutturazioni", immagine: imgCantiere, href: "/settori/ristrutturazioni" },
];

const passi = [
  {
    icona: CalendarCheck,
    titolo: "Scegli giorno e ora",
    testo: "Dal calendario qui sopra vedi gli orari liberi e prendi quello che ti va. Un minuto.",
  },
  {
    icona: BellRing,
    titolo: "Ricevi la conferma",
    testo: "Arriva subito per email. Ti ricordiamo l'appuntamento il giorno prima e un'ora prima.",
  },
  {
    icona: Video,
    titolo: "Parliamo 45 minuti in videochiamata",
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

/** Numero che sale quando entra nello schermo. Fermo se l'utente ha ridotto le animazioni. */
function Contatore({
  valore,
  prefisso = "",
  suffisso = "",
}: {
  valore: number;
  prefisso?: string;
  suffisso?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const ridotte = useReducedMotion();
  const [n, setN] = useState(ridotte ? valore : 0);

  useEffect(() => {
    if (ridotte) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([voce]) => {
        if (!voce.isIntersecting) return;
        obs.disconnect();
        const durata = 1100;
        const inizio = performance.now();
        const passo = (ora: number) => {
          const t = Math.min(1, (ora - inizio) / durata);
          setN(Math.round(valore * (1 - Math.pow(1 - t, 3))));
          if (t < 1) requestAnimationFrame(passo);
        };
        requestAnimationFrame(passo);
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [valore, ridotte]);

  return (
    <p ref={ref} className="text-4xl sm:text-5xl font-black tracking-tighter text-gold tabular-nums">
      {prefisso}
      {n}
      {suffisso}
    </p>
  );
}

/**
 * Il calendario, a tutta larghezza e senza riquadro attorno: il titolo della
 * sezione fa gia' da intestazione. Largo abbastanza (max 1024px) perche' il
 * widget usi il suo impianto a tre colonne: descrizione, giorni e orari
 * affiancati, senza dover scorrere per vedere gli slot.
 */
function BloccoCalendario({ onPrenotato }: { onPrenotato: () => void }) {
  return (
    <div id="calendario" className="relative scroll-mt-6 mx-auto w-full max-w-5xl">
      {/* Alone d'oro dietro il widget: lo stacca dal fondo senza chiuderlo in un box. */}
      <div
        aria-hidden
        className="absolute -inset-x-10 -inset-y-8 -z-10 rounded-[3rem] bg-gold/[0.08] blur-3xl"
      />
      <div className="overflow-hidden rounded-2xl shadow-[0_30px_90px_-30px_rgba(0,0,0,0.95)] ring-1 ring-gold/20">
        <BookingCalendarEmbed onPrenotato={onPrenotato} />
      </div>

      <div className="mt-6 flex flex-col items-center gap-3 text-sm text-muted-foreground">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-gold" />
            Gratis, nessun impegno
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BellRing className="w-4 h-4 text-gold" />
            Conferma subito via email e promemoria
          </span>
        </div>
        <p>
          Nessun orario ti va bene?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gold font-semibold hover:underline"
          >
            <MessageCircle className="w-4 h-4" />
            Scrivici su WhatsApp
          </a>
        </p>
        <p className="text-xs">
          Non vedi il calendario?{" "}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-gold"
          >
            Aprilo in una nuova scheda
            <ExternalLink className="w-3 h-3" />
          </a>
        </p>
      </div>
    </div>
  );
}

const FissaAppuntamento = () => {
  const faqData = getPageFaq(PATH);
  const meseCorrente = MESI[new Date().getMonth()];

  // Prima il modulo portava a /grazie, che faceva scattare il Lead. Ora la
  // prenotazione avviene dentro la pagina: il Lead (su cui ottimizzano le
  // campagne) e lo Schedule vanno inviati qui, una volta sola.
  const tracciato = useRef(false);
  const onPrenotato = useCallback(() => {
    if (tracciato.current) return;
    tracciato.current = true;
    const dati = { content_name: "Consulenza prenotata", content_category: "Appuntamento" };
    if (typeof window.fbq === "function") {
      window.fbq("trackSingle", META_PIXEL_ID, "Lead", dati);
      window.fbq("trackSingle", META_PIXEL_ID, "Schedule", dati);
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", { method: "calendario_consulenza" });
    }
  }, []);

  const vaiAlCalendario = () =>
    document.getElementById("calendario")?.scrollIntoView({ behavior: "smooth", block: "start" });

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
      <header className="relative z-20 border-b border-border/60 bg-background/80 backdrop-blur-sm">
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
          <div className="flex items-center gap-5">
            {/* "3 posti" sono le aziende che prendiamo, non gli orari del calendario:
                scritto cosi' nessuno li confonde con gli slot liberi. */}
            <span className="hidden md:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              {POSTI_MESE} nuove aziende a {meseCorrente}
            </span>
            <button
              type="button"
              onClick={vaiAlCalendario}
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-4 py-2 text-sm font-bold text-navy-dark transition-colors hover:bg-gold-glow"
            >
              <CalendarCheck className="w-4 h-4" />
              <span className="hidden sm:inline">Prenota la videochiamata</span>
              <span className="sm:hidden">Prenota</span>
            </button>
          </div>
        </div>
      </header>

      <main className="relative overflow-hidden">
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative">
          {/* Fondo: cantiere vero, schiacciato sotto il navy così il testo resta leggibile. */}
          <div aria-hidden className="absolute inset-0 -z-10">
            <img
              src={imgCantiere}
              alt=""
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-background/[0.93]" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
            <div className="absolute -top-40 -left-32 w-[46rem] h-[46rem] rounded-full bg-gold/[0.09] blur-[140px]" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
                maskImage: "radial-gradient(ellipse 80% 60% at 40% 0%, #000 30%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 60% at 40% 0%, #000 30%, transparent 100%)",
              }}
            />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16 md:pt-20 md:pb-24">
            {/* Testo: una colonna sola, centrata. */}
            <div className="max-w-3xl mx-auto text-center">
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
                className="mt-3 text-[2.6rem] leading-[0.95] sm:text-6xl lg:text-7xl font-black tracking-tighter text-foreground"
              >
                FISSA LA TUA <span className="text-gold">CONSULENZA</span>
              </motion.h1>

              <motion.p
                {...rivela(0.2)}
                className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
              >
                45 minuti in videochiamata con chi vende in edilizia tutti i giorni. Guardiamo
                i tuoi numeri veri e ti diciamo se possiamo portarti clienti.{" "}
                <span className="text-foreground font-semibold">
                  Se poi lavoriamo insieme, ci paghi solo sul venduto.
                </span>
              </motion.p>

              <motion.div
                {...rivela(0.28)}
                className="mt-6 sm:mt-7 flex flex-wrap justify-center gap-2 sm:gap-2.5"
              >
                {["Scegli tu giorno e ora", "Conferma immediata", "Zero canone fisso"].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-border bg-card/60 px-3 sm:px-3.5 py-1 sm:py-1.5 text-xs sm:text-sm text-muted-foreground"
                  >
                    <Check className="w-3.5 h-3.5 text-gold" />
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Calendario: subito sotto, a tutta larghezza. */}
            <motion.div {...rivela(0.34)} className="mt-8 md:mt-14">
              <BloccoCalendario onPrenotato={onPrenotato} />
            </motion.div>
          </div>
        </section>

        {/* ── PROVE ────────────────────────────────────────────────────────── */}
        <section className="border-y border-border/60 bg-navy-dark/50">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {prove.map((p) => (
                <div key={p.testo}>
                  <Contatore valore={p.valore} prefisso={p.prefisso} suffisso={p.suffisso} />
                  <p className="mt-1.5 text-sm text-muted-foreground leading-snug">{p.testo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DOLORE ───────────────────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground max-w-2xl">
              Quando ha senso fissare la consulenza
            </h2>
            <div className="mt-10 grid md:grid-cols-3 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/60">
              {situazioni.map((s, i) => (
                <div
                  key={s.titolo}
                  className="bg-background p-7 transition-colors duration-300 hover:bg-card/60"
                >
                  <span className="text-xs font-black text-gold/60 tracking-[0.2em]">
                    0{i + 1}
                  </span>
                  <p className="mt-3 font-bold text-foreground text-lg leading-snug">
                    {s.titolo}
                  </p>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.testo}</p>
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

        {/* ── IL METODO, SPIEGATO ──────────────────────────────────────────── */}
        <section className="relative border-y border-border/60">
          <div aria-hidden className="absolute inset-0 -z-10">
            <img
              src={imgShowroom}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-background/[0.95]" />
          </div>

          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <AnimatedSection>
              <p className="text-gold font-semibold uppercase text-xs tracking-[0.2em]">
                Cosa succede davvero
              </p>
              <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight text-foreground max-w-3xl">
                Il sistema, spiegato passo per passo
              </h2>
              <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Nessuna scatola nera. Questo è l'ordine esatto in cui lavoriamo, dal primo
                giorno fino ai contratti firmati.
              </p>
            </AnimatedSection>

            <div className="mt-12 grid md:grid-cols-2 gap-x-10 gap-y-10">
              {metodo.map((m, i) => (
                <AnimatedSection key={m.titolo} delay={0.06 * i}>
                  <div className="group relative pl-16">
                    <span className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-xl border border-gold/25 bg-gold/[0.06] text-gold transition-all duration-300 group-hover:border-gold/60 group-hover:bg-gold/[0.12]">
                      <m.icona className="w-5 h-5" />
                    </span>
                    <span className="block text-xs font-black text-gold/50 tracking-[0.2em]">
                      FASE 0{i + 1}
                    </span>
                    <h3 className="mt-2 font-bold text-foreground text-lg leading-snug">
                      {m.titolo}
                    </h3>
                    <p className="mt-2.5 text-muted-foreground leading-relaxed">{m.testo}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── COSA METTIAMO NOI / COSA METTI TU ────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
              Cosa mettiamo noi, cosa metti tu
            </h2>
            <div className="mt-10 grid md:grid-cols-2 gap-5">
              <div className="relative rounded-2xl border border-gold/40 bg-card p-7">
                <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                <p className="font-bold text-gold mb-5 uppercase text-xs tracking-[0.18em]">
                  Ci pensiamo noi
                </p>
                <ul className="space-y-3.5">
                  {incluso.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                      <span className="text-foreground leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card/40 p-7">
                <p className="font-bold text-muted-foreground mb-5 uppercase text-xs tracking-[0.18em]">
                  Ci pensi tu
                </p>
                <ul className="space-y-3.5">
                  {metti.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold/60 shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* ── CONFRONTO ────────────────────────────────────────────────────── */}
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

        {/* ── RISULTATI E PAROLE DEI CLIENTI ───────────────────────────────── */}
        <section className="border-y border-border/60 bg-navy-dark/50">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
                Cosa è successo a chi ha già fatto questa call
              </h2>
            </AnimatedSection>

            <div className="mt-10 grid md:grid-cols-2 gap-5">
              {casi.map((c, i) => (
                <AnimatedSection key={c.azienda} delay={0.06 * i}>
                  <article className="group h-full rounded-2xl border border-border bg-background p-7 flex flex-col transition-all duration-300 hover:border-gold/40 hover:-translate-y-1">
                    <div className="flex items-start justify-between gap-4">
                      <img
                        src={c.logo}
                        alt={`${c.azienda} — cliente Marketing Edile`}
                        className="h-11 w-auto object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                      <p className="text-3xl font-black tracking-tighter text-gold whitespace-nowrap">
                        {c.numero}
                      </p>
                    </div>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{c.dettaglio}</p>
                    <blockquote className="mt-5 pt-5 border-t border-border/60 relative flex-1">
                      <Quote className="absolute -top-1 left-0 w-7 h-7 text-gold/15" />
                      <p className="relative pl-1 text-foreground/90 italic leading-relaxed">
                        {c.citazione}
                      </p>
                    </blockquote>
                    <p className="mt-4 text-sm">
                      <span className="text-foreground font-semibold">{c.autore}</span>
                      <span className="text-muted-foreground"> · {c.azienda}</span>
                      <br />
                      <span className="text-muted-foreground text-xs">{c.settore}</span>
                    </p>
                  </article>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.2}>
              <Link
                to="/casi-studio"
                className="mt-8 inline-flex items-center gap-2 text-gold font-semibold hover-underline"
              >
                Vedi tutti i casi studio, con numeri e strategia
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* ── CHI C'È DIETRO ───────────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <AnimatedSection>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-3xl bg-gold/[0.07] blur-2xl" aria-hidden />
                  <img
                    src={ritrattoFlo}
                    alt="Florin Andriciuc, fondatore di Marketing Edile®"
                    className="relative w-full rounded-2xl border border-gold/20 object-cover aspect-[4/5]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="text-gold font-semibold uppercase text-xs tracking-[0.2em]">
                  Con chi parli
                </p>
                <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight text-foreground">
                  Non un'agenzia che ha letto un libro sull'edilizia
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    Mi chiamo{" "}
                    <span className="text-foreground font-semibold">Florin Andriciuc</span>. Mio
                    padre ha un'azienda edile e da{" "}
                    <span className="text-foreground font-semibold">8 anni</span> faccio una cosa
                    sola: portare clienti alle aziende di questo settore. Serramentisti, imprese
                    di ristrutturazione, fotovoltaico, tetti. Solo edilizia, nient'altro.
                  </p>
                  <p>
                    A fine 2023 ho aperto una mia azienda di serramenti, per provare sul mio il
                    sistema che vendo agli altri. Nei primi 3 mesi abbiamo fatto{" "}
                    <span className="text-foreground font-semibold">€400.000</span> di vendite. In
                    due anni abbiamo superato i{" "}
                    <span className="text-foreground font-semibold">2 milioni</span>.
                  </p>
                  <p className="text-foreground font-semibold">
                    Quando ti dico cosa funziona in un preventivo o perché un cliente sparisce,
                    non è teoria: è successo anche a me.
                  </p>
                </div>
                <Link
                  to="/chi-siamo"
                  className="mt-6 inline-flex items-center gap-2 text-gold font-semibold hover-underline"
                >
                  La storia completa
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* ── SETTORI ──────────────────────────────────────────────────────── */}
        <section className="border-y border-border/60 bg-navy-dark/50">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
                I settori in cui lavoriamo
              </h2>
              <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Ogni settore ha il suo cliente, il suo ticket medio e le sue obiezioni. Per
                questo non usiamo la stessa campagna per tutti.
              </p>
            </AnimatedSection>

            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {settori.map((s, i) => (
                <AnimatedSection key={s.nome} delay={0.05 * i}>
                  <Link
                    to={s.href}
                    className="group relative block overflow-hidden rounded-2xl border border-border aspect-[3/4]"
                  >
                    <img
                      src={s.immagine}
                      alt={`Marketing per ${s.nome.toLowerCase()}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="font-bold text-foreground leading-snug">{s.nome}</p>
                      <span className="mt-1 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── COME FUNZIONA LA CALL ────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
              Come funziona la consulenza
            </h2>
            <div className="mt-10 grid md:grid-cols-3 gap-8">
              {passi.map((p, i) => (
                <div key={p.titolo}>
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

        {/* ── SCARSITÀ, spiegata dalla causa ───────────────────────────────── */}
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

        {/* ── QUALIFICAZIONE ───────────────────────────────────────────────── */}
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

        {/* ── CHIUSURA ─────────────────────────────────────────────────────── */}
        <section className="relative">
          <div aria-hidden className="absolute inset-0 -z-10">
            <img
              src={imgFinestre}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-background/[0.94]" />
            <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-gold/[0.07] blur-[120px]" />
          </div>

          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <AnimatedSection>
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6">
                  <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
                    A {meseCorrente} prendiamo {POSTI_MESE} nuove aziende
                  </h2>
                  <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                    Scegli giorno e ora della videochiamata. Se dopo 45 minuti non ci sono i
                    numeri per lavorare insieme, te lo diciamo e ti sei tolto il dubbio.
                    Gratis, e senza che nessuno ti richiami per mesi.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {["Zero canone fisso", "Una sola azienda per provincia", "Paghi sul venduto"].map(
                      (t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-sm text-muted-foreground"
                        >
                          <Check className="w-3.5 h-3.5 text-gold" />
                          {t}
                        </span>
                      ),
                    )}
                  </div>
                </div>
                <div className="lg:col-span-6 flex flex-col items-start lg:items-center gap-4">
                  <button
                    type="button"
                    onClick={vaiAlCalendario}
                    className="group inline-flex items-center gap-3 rounded-xl bg-gold px-8 py-5 text-lg font-black text-navy-dark shadow-[0_0_40px_hsl(var(--gold)/0.25)] transition-all hover:bg-gold-glow hover:shadow-[0_0_60px_hsl(var(--gold)/0.4)]"
                  >
                    <CalendarCheck className="w-6 h-6" />
                    Scegli giorno e ora
                  </button>
                  <p className="text-sm text-muted-foreground">
                    Gratis · 45 minuti in videochiamata · conferma immediata
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
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
