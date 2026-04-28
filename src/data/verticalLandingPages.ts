import { siteConfig } from "@/lib/seo";

export type VerticalLandingKey =
  | "imprese-edili"
  | "infissi"
  | "finestre"
  | "idraulici"
  | "coperture";

export interface VerticalLandingPageData {
  slug: VerticalLandingKey;
  title: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  lead: string;
  proof: string;
  painPoints: string[];
  systemSteps: Array<{ title: string; text: string }>;
  faq: Array<{ question: string; answer: string }>;
  related: Array<{ label: string; href: string }>;
}

export const verticalLandingPages: Record<VerticalLandingKey, VerticalLandingPageData> = {
  "imprese-edili": {
    slug: "imprese-edili",
    title: "Marketing per Imprese Edili | Clienti Qualificati",
    description:
      "Marketing per imprese edili a provvigione: lead qualificati, preventivi reali e clienti pronti per cantieri, ristrutturazioni, infissi e impianti.",
    keywords: [
      "marketing per imprese edili",
      "marketing edilizia",
      "lead generation imprese edili",
      "clienti per impresa edile",
      "pubblicita impresa edile",
      "agenzia marketing edilizia",
    ],
    eyebrow: "Marketing edilizia",
    h1: "Marketing per imprese edili che vogliono clienti veri, non solo visibilità",
    lead:
      "Se lavori nell'edilizia, non ti servono like o impression. Ti servono richieste di preventivo filtrate, appuntamenti seri e commesse con margine.",
    proof:
      "Marketing Edile® lavora solo nel comparto edilizia: serramenti, ristrutturazioni, fotovoltaico, tetti, impianti e aziende collegate alla casa.",
    painPoints: [
      "Dipendenza dal passaparola e dai periodi di bonus fiscali.",
      "Lead non qualificati che chiedono solo un prezzo indicativo.",
      "Agenzie generaliste che non conoscono cantieri, preventivi e cicli di vendita lunghi.",
      "Siti web belli ma incapaci di generare richieste commerciali misurabili.",
    ],
    systemSteps: [
      {
        title: "Posizionamento",
        text: "Definiamo cosa vendere, a chi venderlo e in quale zona conviene spingere per proteggere margini e tempo commerciale.",
      },
      {
        title: "Domanda qualificata",
        text: "Creiamo campagne e pagine di atterraggio che filtrano budget, urgenza, zona e tipo di lavoro prima del contatto.",
      },
      {
        title: "Follow-up",
        text: "Costruiamo un sistema di risposta rapida e recupero preventivi, perché nel settore edile il tempo di risposta pesa quanto il prezzo.",
      },
    ],
    faq: [
      {
        question: "Il marketing funziona anche per una piccola impresa edile?",
        answer:
          "Sì, se c'è un servizio chiaro, una zona operativa sostenibile e la capacità di gestire i contatti. Il sistema viene calibrato sul ticket medio e sul raggio di intervento.",
      },
      {
        question: "Marketing Edile lavora con aziende fuori dai serramenti?",
        answer:
          "Sì. Il focus è il settore edile in senso verticale: infissi, ristrutturazioni, fotovoltaico, tetti, coperture, impiantistica e servizi collegati alla casa.",
      },
    ],
    related: [
      { label: "Marketing Serramenti", href: "/settori/serramenti" },
      { label: "Marketing Ristrutturazioni", href: "/settori/ristrutturazioni" },
      { label: "Marketing Fotovoltaico", href: "/settori/fotovoltaico" },
    ],
  },
  infissi: {
    slug: "infissi",
    title: "Marketing Infissi | Lead per Aziende di Infissi",
    description:
      "Marketing per aziende di infissi e showroom: appuntamenti qualificati, campagne geolocalizzate e sistema a provvigione sulle vendite chiuse.",
    keywords: [
      "marketing infissi",
      "marketing per infissi",
      "marketing aziende infissi",
      "marketing per aziende di infissi",
      "lead generation infissi",
      "clienti per infissi",
      "vendere infissi online",
    ],
    eyebrow: "Infissi",
    h1: "Marketing per infissi: porta in showroom persone pronte a cambiare finestre",
    lead:
      "Chi cerca marketing per infissi non vuole un piano editoriale generico: vuole appuntamenti con proprietari che devono sostituire serramenti, finestre e porte.",
    proof:
      "Il fondatore di Marketing Edile® ha costruito e gestisce un'azienda di serramenti: il sistema è nato vendendo infissi sul campo, non in teoria.",
    painPoints: [
      "Clienti che chiedono dieci preventivi e scelgono solo il prezzo più basso.",
      "Campagne generiche che non distinguono PVC, alluminio, legno-alluminio e posa qualificata.",
      "Showroom che ricevono contatti fuori zona o fuori budget.",
      "Preventivi inviati e mai seguiti con un processo commerciale strutturato.",
    ],
    systemSteps: [
      {
        title: "Messaggio tecnico-commerciale",
        text: "Trasformiamo qualità, posa, isolamento, garanzia e casi reali in argomenti comprensibili per il cliente finale.",
      },
      {
        title: "Campagne per richiesta preventivo",
        text: "Intercettiamo proprietari che stanno valutando sostituzione infissi, ristrutturazioni o efficientamento energetico.",
      },
      {
        title: "Qualifica appuntamenti",
        text: "Filtriamo zona, tipologia di immobile, numero di finestre, urgenza e budget prima di impegnare il commerciale.",
      },
    ],
    faq: [
      {
        question: "La pagina infissi è diversa da serramenti?",
        answer:
          "Sì. Nel linguaggio commerciale molti clienti cercano 'infissi', mentre altri cercano 'serramenti'. Servono contenuti che coprano entrambe le ricerche senza confonderle.",
      },
      {
        question: "Potete lavorare con showroom e produttori?",
        answer:
          "Sì. La strategia cambia in base al ruolo: showroom locale, rivenditore, produttore o posatore. Il messaggio viene adattato al ciclo di vendita.",
      },
    ],
    related: [
      { label: "Marketing Serramenti", href: "/settori/serramenti" },
      { label: "Marketing Finestre", href: "/settori/finestre" },
      { label: "Come ottenere 30 richieste qualificate", href: "/blog/30-richieste-preventivi-qualificati-infissi-fotovoltaico-edilizia-2026" },
    ],
  },
  finestre: {
    slug: "finestre",
    title: "Marketing Finestre | Clienti per Vendita Finestre",
    description:
      "Marketing per aziende che vendono finestre, infissi e serramenti: lead qualificati, posizionamento locale e campagne orientate a preventivi reali.",
    keywords: [
      "marketing finestre",
      "pubblicita finestre",
      "vendere finestre online",
      "clienti per finestre",
      "lead generation finestre",
      "marketing serramenti finestre",
    ],
    eyebrow: "Finestre",
    h1: "Marketing finestre: intercetta chi deve sostituire gli infissi prima dei tuoi concorrenti",
    lead:
      "La ricerca 'finestre' è più vicina al linguaggio del cliente finale. La pagina deve tradurre il valore tecnico del serramento in benefici economici, estetici e abitativi.",
    proof:
      "Marketing Edile® usa messaggi testati nel mercato reale degli infissi: isolamento, posa, garanzia, detrazioni, comfort e aumento del valore dell'immobile.",
    painPoints: [
      "Il cliente non conosce la differenza tra finestra economica e serramento installato bene.",
      "La concorrenza comunica solo sconti e promozioni.",
      "Le richieste arrivano senza contesto tecnico o budget realistico.",
      "Il sito non spiega perché comprare da te e non dal rivenditore più economico.",
    ],
    systemSteps: [
      {
        title: "Educazione della domanda",
        text: "Creiamo contenuti e landing page che spiegano comfort, isolamento, posa e differenze tra materiali.",
      },
      {
        title: "SEO locale e campagne",
        text: "Costruiamo visibilità per ricerche locali legate a finestre, sostituzione infissi e preventivi.",
      },
      {
        title: "Preventivo guidato",
        text: "Portiamo il contatto verso una richiesta completa: numero finestre, zona, urgenza, foto e obiettivo del lavoro.",
      },
    ],
    faq: [
      {
        question: "Ha senso posizionarsi anche su 'finestre'?",
        answer:
          "Sì. 'Finestre' è spesso la parola usata dal cliente finale, mentre 'serramenti' e 'infissi' sono più tecniche. Coprire tutte e tre aumenta la superficie SEO.",
      },
      {
        question: "Questa pagina serve anche per porte e oscuranti?",
        answer:
          "Serve come porta d'ingresso sulla sostituzione finestre. Per porte, persiane e oscuranti conviene poi creare contenuti specifici se diventano linee di vendita prioritarie.",
      },
    ],
    related: [
      { label: "Marketing Infissi", href: "/settori/infissi" },
      { label: "Marketing Serramenti", href: "/settori/serramenti" },
      { label: "Preventivi edilizia", href: "/blog/preventivi-edilizia-come-presentarli-chiudere-vendita" },
    ],
  },
  idraulici: {
    slug: "idraulici",
    title: "Marketing Idraulici | Lead per Idraulica e Termoidraulica",
    description:
      "Marketing per idraulici e aziende termoidrauliche: clienti qualificati per caldaie, pompe di calore, climatizzazione, impianti e manutenzioni.",
    keywords: [
      "marketing idraulici",
      "marketing per idraulici",
      "lead generation idraulici",
      "clienti per idraulici",
      "marketing idraulica",
      "marketing termoidraulici",
      "clienti per termoidraulici",
    ],
    eyebrow: "Idraulica e termoidraulica",
    h1: "Marketing per idraulici: richieste qualificate per lavori ad alto valore",
    lead:
      "Nel mondo idraulica non basta farsi trovare per emergenze: le aziende strutturate devono acquisire lavori più grandi, ricorrenti e marginali.",
    proof:
      "Marketing Edile® inserisce idraulici e termoidraulici nel cluster impiantisti, con messaggi diversi per urgenze, manutenzione, caldaie, climatizzazione e pompe di calore.",
    painPoints: [
      "Troppe richieste piccole e urgenti che saturano il calendario.",
      "Poca visibilità su lavori più redditizi come impianti, climatizzazione e riqualificazione energetica.",
      "Concorrenza locale basata solo sul prezzo.",
      "Assenza di follow-up su clienti già acquisiti e manutenzioni periodiche.",
    ],
    systemSteps: [
      {
        title: "Segmentazione",
        text: "Separiamo emergenze, manutenzioni, caldaie, climatizzazione, pompe di calore e impianti completi.",
      },
      {
        title: "Lead ad alto valore",
        text: "Costruiamo campagne orientate ai lavori che valgono davvero: sostituzioni, impianti e contratti di manutenzione.",
      },
      {
        title: "Ricorrenza",
        text: "Usiamo follow-up e CRM per trasformare il cliente singolo in manutenzione, recensione e passaparola misurabile.",
      },
    ],
    faq: [
      {
        question: "Il marketing per idraulici è diverso dal marketing per impiantisti?",
        answer:
          "Sì. 'Impiantisti' è il cluster ampio; 'idraulici' intercetta ricerche più dirette. Per SEO conviene coprire entrambi con pagine collegate.",
      },
      {
        question: "Puntiamo anche alle emergenze?",
        answer:
          "Solo se sono profittevoli e gestibili. Per aziende strutturate spesso conviene spingere lavori ad alto valore: caldaie, pompe di calore, climatizzazione e impianti.",
      },
    ],
    related: [
      { label: "Marketing Impiantisti", href: "/settori/impiantisti" },
      { label: "Marketing Fotovoltaico", href: "/settori/fotovoltaico" },
      { label: "Marketing Imprese Edili", href: "/settori/imprese-edili" },
    ],
  },
  coperture: {
    slug: "coperture",
    title: "Marketing Coperture | Lead per Tetti e Impermeabilizzazioni",
    description:
      "Marketing per aziende di coperture, tetti e impermeabilizzazioni: lead qualificati per rifacimento tetti, isolamento e lavori ad alto ticket.",
    keywords: [
      "marketing coperture",
      "marketing tetti",
      "lead generation tetti",
      "clienti rifacimento tetto",
      "marketing impermeabilizzazioni",
      "clienti per aziende tetti",
    ],
    eyebrow: "Coperture e tetti",
    h1: "Marketing per coperture: più richieste per tetti, isolamento e impermeabilizzazioni",
    lead:
      "Le aziende di coperture hanno bisogno di richieste qualificate, perché ogni sopralluogo costa tempo e i lavori validi hanno ticket alto.",
    proof:
      "Renova Tetto ha generato +€600.000 di vendite con Marketing Edile® attraverso campagne geolocalizzate e posizionamento premium.",
    painPoints: [
      "Richieste generiche per piccole riparazioni non adatte alla struttura aziendale.",
      "Difficoltà a spiegare il valore di isolamento, impermeabilizzazione e posa corretta.",
      "Poca differenziazione tra azienda specializzata e artigiano improvvisato.",
      "Sopralluoghi gratuiti fatti a persone senza budget o urgenza reale.",
    ],
    systemSteps: [
      {
        title: "Filtro lavori",
        text: "Separiamo rifacimenti completi, impermeabilizzazioni, isolamento e manutenzioni leggere.",
      },
      {
        title: "Autorità locale",
        text: "Usiamo portfolio, casi reali, recensioni e contenuti tecnici per diventare il riferimento nella zona.",
      },
      {
        title: "Sopralluoghi qualificati",
        text: "Portiamo al sopralluogo solo contatti con immobile, problema, zona e tempistica chiari.",
      },
    ],
    faq: [
      {
        question: "Coperture e tetti devono avere due pagine diverse?",
        answer:
          "Sì, se il volume commerciale lo giustifica. 'Tetti' è più comune, 'coperture' intercetta una ricerca più tecnica e aziendale.",
      },
      {
        question: "Funziona anche per impermeabilizzazioni?",
        answer:
          "Sì, soprattutto se il servizio viene posizionato come intervento tecnico ad alto valore, non come semplice riparazione.",
      },
    ],
    related: [
      { label: "Marketing Tetti", href: "/settori/tetti" },
      { label: "Marketing Ristrutturazioni", href: "/settori/ristrutturazioni" },
      { label: "Case study ristrutturazioni", href: "/blog/case-study-impresa-ristrutturazioni-triplicato-fatturato-8-mesi" },
    ],
  },
};

export const getVerticalLandingUrl = (slug: VerticalLandingKey) =>
  `${siteConfig.url}/settori/${slug}`;
