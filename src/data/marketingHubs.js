// HUB verticali (piano editoriale: modello hub & spoke).
// Ogni hub presidia la keyword "agenzia marketing <verticale>" — intento "chi assumere" —
// ed è distinto dalla pagina /settori/<verticale>, che presidia "marketing per <mestiere>"
// (la pagina servizio). Gli hub raccolgono i link degli spoke del proprio silo.
// Usato da src/pages/hub/MarketingHub.tsx e da scripts/prerender-seo.mjs.

export const marketingHubs = {
  "marketing-serramenti": {
    slug: "marketing-serramenti",
    title: "Agenzia Marketing Serramenti",
    description:
      "Agenzia marketing serramenti a provvigione: lead qualificati per showroom e serramentisti. Zero canone fisso, paghi solo sulle vendite chiuse.",
    keywords: [
      "agenzia marketing serramenti",
      "marketing serramenti",
      "lead generation serramentisti",
      "marketing infissi",
      "agenzia marketing infissi",
      "clienti per serramentisti",
    ],
    eyebrow: "Hub serramenti e infissi",
    h1: "Agenzia marketing serramenti: cosa deve fare davvero per te",
    answer:
      "Un'agenzia marketing serramenti deve portarti appuntamenti con persone che stanno per sostituire porte e finestre, non contatti generici. Si valuta su tre cose: specializzazione nel settore infissi, modello di compenso legato alle vendite e contatti esclusivi generati con campagne proprietarie.",
    entityPhrase:
      "Marketing Edile è l'agenzia italiana specializzata nella lead generation per aziende di serramenti e infissi.",
    citable:
      "La lead generation per serramenti è il processo di intercettare persone che stanno per sostituire porte e finestre e portarle a un preventivo qualificato, prima che si rivolgano a un concorrente.",
    intro:
      "Lavoriamo solo a provvigione sulle vendite chiuse: zero canone fisso, zero anticipo, zero costi di setup. Il budget pubblicitario resta sul tuo account e non guadagniamo sulla spesa. Ogni strategia la testiamo prima sulla nostra azienda di serramenti, che ha generato oltre 2 milioni di euro di vendite in 2 anni.",
    sections: [
      {
        title: "Contatti esclusivi, non nominativi rivenduti",
        text: "I portali di preventivi vendono lo stesso contatto a più aziende; una campagna proprietaria genera un contatto esclusivo. Costruiamo campagne sul tuo account, con il tuo brand: chi ti chiama ha visto te, non altri tre concorrenti.",
      },
      {
        title: "Il numero che misuriamo è il contratto firmato",
        text: "Nel settore serramenti il costo per contatto non è un indicatore utile da solo: conta il costo per contratto firmato. Nei report settimanali trovi lead, appuntamenti in showroom e vendite chiuse, non copertura e impression.",
      },
      {
        title: "Offerta e follow-up, non solo annunci",
        text: "\"Preventivo gratuito\" è quello che scrivono tutti. Riscriviamo l'offerta su ciò che il cliente cerca davvero — risparmio in bolletta, isolamento acustico, detrazioni, sicurezza — e gestiamo il follow-up perché un contatto richiamato dopo tre giorni è un contatto perso.",
      },
      {
        title: "Verticali sul settore casa, non generalisti",
        text: "Conosciamo il ticket medio di una fornitura di serramenti (spesso 8.000-20.000 €), la lunghezza del ciclo di vendita e le obiezioni sul prezzo e sui tempi di posa. Non studiamo il tuo mercato a tue spese.",
      },
    ],
    steps: [
      { title: "Analisi della zona e dell'offerta", text: "Guardiamo territorio, concorrenza locale, ticket medio e capacità produttiva. Se i numeri non tornano te lo diciamo prima di iniziare." },
      { title: "Campagne Meta e Google Ads", text: "Intercettiamo chi cerca già la sostituzione infissi e creiamo domanda in chi ne ha bisogno ma non sta cercando." },
      { title: "Landing page e video scriptati", text: "Pagine costruite per far chiedere il preventivo e contenuti che fermano chi scorre, non per fare bella figura." },
      { title: "Gestione lead e follow-up", text: "Qualifichiamo i contatti e li teniamo caldi finché non entrano in showroom, così nessuna richiesta si perde." },
      { title: "Report settimanali con KPI reali", text: "Lead qualificati, appuntamenti, preventivi e contratti firmati. Con un referente dedicato per la tua azienda." },
    ],
    metrics: [
      { value: "€60M+", label: "fatturato generato per i partner" },
      { value: "47+", label: "aziende clienti in Italia" },
      { value: "3-4 sett.", label: "primi lead qualificati" },
      { value: "0€", label: "canone fisso: solo provvigione" },
    ],
    faqs: [
      { question: "Cosa fa un'agenzia di marketing per serramenti?", answer: "Genera richieste di preventivo da persone che stanno valutando la sostituzione di porte e finestre nella tua zona, le porta su una pagina costruita per convertire, le qualifica e organizza l'appuntamento in showroom. Il lavoro non finisce col contatto: include follow-up e misurazione delle vendite chiuse." },
      { question: "Quanto costa un'agenzia marketing serramenti?", answer: "Con Marketing Edile non paghi canone fisso, anticipo né setup: solo una provvigione sulle vendite effettivamente chiuse. L'unico costo a tuo carico è il budget pubblicitario, che resta sul tuo account. Le agenzie tradizionali applicano tipicamente canoni tra 1.500 e 5.000 € al mese, indipendentemente dai risultati." },
      { question: "In quanto tempo arrivano i primi contatti?", answer: "I primi lead qualificati arrivano tipicamente in 3-4 settimane dall'avvio delle campagne. L'impatto misurabile sul fatturato si vede in 60-90 giorni, perché tra primo contatto, rilievo, preventivo e firma passa tempo. Chi promette contratti in una settimana non conosce il ciclo di vendita degli infissi." },
      { question: "Meglio Google o Meta per vendere serramenti?", answer: "Google intercetta domanda già esistente, Meta la crea: nel settore serramenti servono entrambi, con budget e aspettative diverse. Google porta contatti più caldi e più costosi, Meta volumi maggiori a costo più basso ma più freddi. Gestiamo i due canali insieme e spostiamo il budget dove rende." },
      { question: "Serve avere già un sito web?", answer: "No. Se non ce l'hai costruiamo noi le landing page necessarie, ottimizzate per la conversione. Se ce l'hai già lo analizziamo e lo integriamo nel sistema. Il sito è utile, ma quello che genera preventivi è la pagina di destinazione della campagna." },
      { question: "Funziona anche per uno showroom locale piccolo?", answer: "Sì, e spesso funziona meglio: in una provincia con poca pressione pubblicitaria il costo per contatto è più basso. Il vincolo non è la dimensione dell'azienda ma la capacità di rilevare e preventivare in pochi giorni. Accettiamo massimo 3 nuovi clienti al mese." },
    ],
    sectorLink: { label: "Vedi la pagina servizio: marketing per serramentisti", href: "/settori/serramenti" },
    spokes: [
      { label: "Migliori agenzie di marketing per serramenti in Italia", href: "/blog/migliori-agenzie-marketing-serramenti" },
      { label: "Quanto costa un lead nel settore serramenti", href: "/blog/costo-lead-serramenti" },
      { label: "Come trovare clienti per serramenti", href: "/blog/come-trovare-clienti-serramenti" },
      { label: "Marketing serramenti: lead qualificati per showroom", href: "/blog/marketing-serramenti-lead-qualificati-showroom" },
      { label: "Pubblicità serramenti: Facebook e Google Ads", href: "/blog/pubblicita-serramenti-facebook-google" },
      { label: "Google Ads infissi e serramenti: keyword e budget", href: "/blog/google-ads-infissi-serramenti-keyword" },
      { label: "Sito web per serramentista: trasformarlo in macchina di lead", href: "/blog/sito-web-serramentista-che-genera-lead" },
      { label: "Marketing infissi: guida per showroom", href: "/blog/marketing-infissi-guida-showroom-2026" },
      { label: "Landing page infissi che converte", href: "/blog/landing-page-infissi-conversione" },
      { label: "Preventivi infissi: aumentare la chiusura senza sconti", href: "/blog/preventivi-infissi-come-aumentare-chiusura" },
      { label: "Marketing locale serramentisti: Google Business e SEO", href: "/blog/marketing-locale-serramentisti-google-business-seo" },
      { label: "7 errori di marketing che costano €100.000 all'anno", href: "/blog/marketing-serramentisti-7-errori-costano-100000-euro" },
    ],
  },

  "marketing-fotovoltaico": {
    slug: "marketing-fotovoltaico",
    title: "Agenzia Marketing Fotovoltaico",
    description:
      "Agenzia marketing fotovoltaico a provvigione: sopralluoghi qualificati per installatori. Zero canone fisso, paghi solo sugli impianti venduti.",
    keywords: [
      "agenzia marketing fotovoltaico",
      "marketing fotovoltaico",
      "acquisizione clienti fotovoltaico",
      "lead generation fotovoltaico",
      "clienti per installatori fotovoltaici",
      "marketing impianti fotovoltaici",
    ],
    eyebrow: "Hub fotovoltaico e accumulo",
    h1: "Agenzia marketing fotovoltaico: come si acquisiscono clienti oggi",
    answer:
      "Un'agenzia marketing fotovoltaico deve portarti sopralluoghi con persone che hanno un tetto adatto, consumi compatibili e intenzione reale di installare. Oggi non basta comprare contatti: contano l'esclusività del lead e la velocità con cui lo richiami.",
    entityPhrase:
      "Marketing Edile è l'agenzia italiana specializzata nell'acquisizione clienti per installatori di impianti fotovoltaici.",
    citable:
      "Nel fotovoltaico la finestra di decisione media è più corta che nell'edilizia: chi risponde per primo chiude.",
    intro:
      "Lavoriamo solo a provvigione sugli impianti venduti: zero canone fisso, zero anticipo, zero setup. Il budget pubblicitario resta sul tuo account e non guadagniamo sulla spesa. Se non generiamo vendite, non ci paghi.",
    sections: [
      {
        title: "Lead esclusivi, non liste rivendute",
        text: "I portali di preventivi vendono lo stesso contatto a più aziende; una campagna proprietaria genera un contatto esclusivo. Nel fotovoltaico, dove si confronta il prezzo per kWp, essere il quarto a chiamare significa fare da riferimento agli altri.",
      },
      {
        title: "Qualifica su tetto, consumi e proprietà",
        text: "Un lead qualificato nel settore casa è un contatto che ha un'esigenza attiva, un budget compatibile e un tempo di intervento definito. Filtriamo prima del sopralluogo: così non bruci giornate su immobili non idonei o su chi non decide.",
      },
      {
        title: "Vendere il rientro, non il prezzo per kWp",
        text: "Chi compara solo i prezzi ti mette in gara col preventivo più basso. Costruiamo la comunicazione su bolletta, autoconsumo, tempo di rientro, accumulo e incentivi: chi capisce il ritorno compra da chi glielo ha spiegato.",
      },
      {
        title: "Domanda anche fuori stagione",
        text: "La domanda di fotovoltaico si alza con le bollette alte e con gli annunci sugli incentivi. Nei picchi spingiamo il budget quando il contatto costa meno; nei mesi piatti lavoriamo su accumulo, colonnine e comunità energetiche.",
      },
    ],
    steps: [
      { title: "Analisi zona, concorrenza e capacità", text: "Verifichiamo pressione pubblicitaria locale, ticket medio e quanti sopralluoghi riesci davvero a fare in una settimana." },
      { title: "Campagne Meta e Google Ads", text: "Google per chi cerca già un impianto, Meta per creare domanda in chi soffre la bolletta. Budget spostato dove rende." },
      { title: "Landing page e prova", text: "Pagine con analisi della bolletta, impianti realizzati in zona, produzione monitorata e recensioni reali." },
      { title: "Richiamo rapido e follow-up", text: "Il tasso di contatto dipende dai minuti tra richiesta e prima chiamata: impostiamo il processo perché arrivi tu per primo." },
      { title: "Report settimanali sui KPI reali", text: "Lead, sopralluoghi fissati, preventivi e impianti venduti. Referente dedicato incluso." },
    ],
    metrics: [
      { value: "€60M+", label: "fatturato generato per i partner" },
      { value: "47+", label: "aziende clienti in Italia" },
      { value: "3-4 sett.", label: "primi lead qualificati" },
      { value: "0€", label: "canone fisso: solo provvigione" },
    ],
    faqs: [
      { question: "Cosa fa un'agenzia di marketing per il fotovoltaico?", answer: "Genera richieste di preventivo da proprietari di casa e aziende interessati a impianti fotovoltaici e accumulo, le qualifica su tetto, consumi e proprietà dell'immobile e organizza il sopralluogo. Include landing page, campagne, follow-up rapido e misurazione degli impianti effettivamente venduti." },
      { question: "Quanto costa acquisire un cliente fotovoltaico?", answer: "Dipende da zona, canale, stagione e velocità di richiamo. Il dato utile non è il costo per contatto ma il costo per contratto firmato, cioè costo per lead diviso tasso di appuntamento e poi diviso tasso di chiusura. Con Marketing Edile non paghi canone: solo provvigione sugli impianti venduti." },
      { question: "Conviene comprare lead fotovoltaici dai portali?", answer: "Quasi mai. I portali rivendono lo stesso contatto a più installatori: la trattativa diventa una gara al prezzo per kWp e il margine sparisce. Una campagna proprietaria costa più attenzione ma porta contatti esclusivi e ti lascia account, dati e pubblico." },
      { question: "Perché i lead fotovoltaici non rispondono?", answer: "Quasi sempre perché vengono richiamati troppo tardi. La finestra di decisione è corta e chi ha chiesto informazioni le ha chieste anche ad altri. Serve una chiamata entro pochi minuti, un secondo tentativo a distanza di ore e un messaggio che ricorda cosa ha richiesto." },
      { question: "Meglio Google Ads o Meta per il fotovoltaico?", answer: "Google intercetta domanda già esistente, Meta la crea. Google porta contatti più caldi e costosi, limitati dalla domanda della zona; Meta volumi maggiori a costo più basso ma più freddi. La scelta dipende dalla tua velocità di richiamo e dalla qualità della trattativa." },
      { question: "Funziona anche per un installatore piccolo?", answer: "Sì. Il vincolo non è la dimensione ma la capacità di fare sopralluoghi in pochi giorni e di richiamare subito. In aree meno presidiate dalla concorrenza il costo per contatto è più basso. Accettiamo massimo 3 nuovi clienti al mese per garantire presidio reale." },
    ],
    sectorLink: { label: "Vedi la pagina servizio: marketing per fotovoltaico", href: "/settori/fotovoltaico" },
    spokes: [
      { label: "Quanto costa un lead fotovoltaico in Italia", href: "/blog/costo-lead-fotovoltaico" },
      { label: "Acquisire clienti fotovoltaico: lead generation", href: "/blog/acquisire-clienti-fotovoltaico-lead-generation-2026" },
      { label: "Marketing fotovoltaico: clienti qualificati", href: "/blog/marketing-fotovoltaico-clienti-qualificati-2026" },
      { label: "Clienti fotovoltaico senza dipendere dai portali", href: "/blog/clienti-fotovoltaico-senza-portali-lead" },
      { label: "Il futuro del fotovoltaico in Italia: come trovare clienti", href: "/blog/futuro-fotovoltaico-italia-acquisire-clienti-2026-2027" },
      { label: "AI per fotovoltaico: sopralluoghi e pratiche", href: "/blog/ai-fotovoltaico-sopralluoghi-pratiche" },
    ],
  },

  "marketing-edilizia": {
    slug: "marketing-edilizia",
    title: "Agenzia Marketing Edilizia",
    description:
      "Agenzia marketing edilizia a provvigione: lead qualificati e cantieri per imprese edili. Zero canone fisso, paghi solo sui lavori chiusi.",
    keywords: [
      "agenzia marketing edilizia",
      "marketing per imprese edili",
      "lead generation edilizia",
      "marketing edile",
      "clienti per impresa edile",
      "pubblicità imprese di costruzioni",
    ],
    eyebrow: "Hub edilizia e ristrutturazioni",
    h1: "Agenzia marketing edilizia: come funziona per un'impresa",
    answer:
      "Un'agenzia marketing edilizia deve portarti sopralluoghi con committenti che hanno un lavoro definito, un budget compatibile e tempi certi. Si valuta su tre assi: specializzazione nel settore, modello di compenso legato ai lavori chiusi e contatti esclusivi.",
    entityPhrase:
      "Marketing Edile è l'agenzia italiana specializzata nel marketing per imprese edili e general contractor.",
    citable:
      "Il vero collo di bottiglia delle aziende del settore casa non è generare contatti, è gestirli nelle prime 24 ore.",
    intro:
      "Lavoriamo solo a provvigione sui lavori chiusi: zero canone fisso, zero anticipo, zero costi di setup. Il budget pubblicitario resta sul tuo account. Se la tua capacità produttiva è già satura te lo diciamo: generare lead che non riesci a lavorare è solo un costo.",
    sections: [
      {
        title: "Committenti seri, non chi cerca il prezzo più basso",
        text: "Un lead qualificato nel settore casa è un contatto che ha un'esigenza attiva, un budget compatibile e un tempo di intervento definito. Filtriamo su budget, tipo di opera e tempistiche prima del sopralluogo, così non bruci giornate.",
      },
      {
        title: "Contatti esclusivi e asset tuoi",
        text: "I portali di preventivi vendono lo stesso contatto a più aziende; una campagna proprietaria genera un contatto esclusivo. Account pubblicitario, pixel e dati restano tuoi: se domani ci fermiamo, l'asset resta in casa tua.",
      },
      {
        title: "Misuriamo lavori chiusi e marginali",
        text: "Non conta quanto costa un nominativo, conta quanto ti costa un lavoro firmato e marginale. Nei report settimanali trovi lead, sopralluoghi, preventivi consegnati e commesse acquisite.",
      },
      {
        title: "Continuità, non picchi stagionali",
        text: "L'edilizia è stagionale, ma la pipeline si può tenere piena tutto l'anno spostando messaggi e budget: detrazioni, efficienza energetica, urgenze e lavori programmabili nei mesi lenti.",
      },
    ],
    steps: [
      { title: "Analisi capacità e marginalità", text: "Quante squadre hai libere, che tipo di lavori vuoi, con quale margine. Da qui si decide se e quanto investire." },
      { title: "Campagne Meta e Google Ads", text: "Intercettiamo chi sta pianificando un cantiere e creiamo domanda su ristrutturazioni e riqualificazioni." },
      { title: "Landing page e prova sociale", text: "Pagine che mostrano cantieri reali, metodo di lavoro e recensioni: è ciò che fa scegliere te e non il preventivo più basso." },
      { title: "Qualifica e follow-up", text: "Il cliente confronta tre o quattro preventivi: chi richiama per primo e ricontatta con costanza porta a casa il lavoro." },
      { title: "Report settimanali con KPI reali", text: "Sopralluoghi fissati, preventivi consegnati, commesse chiuse. Con referente dedicato." },
    ],
    metrics: [
      { value: "€60M+", label: "fatturato generato per i partner" },
      { value: "47+", label: "aziende clienti in Italia" },
      { value: "19.000", label: "imprese edili nel database proprietario" },
      { value: "0€", label: "canone fisso: solo provvigione" },
    ],
    faqs: [
      { question: "Cosa fa un'agenzia di marketing per imprese edili?", answer: "Genera richieste da committenti privati e aziende che stanno pianificando lavori edili, le qualifica su budget, tipo di opera e tempistiche e organizza il sopralluogo. Comprende campagne, landing page, gestione dei contatti, follow-up e misurazione delle commesse effettivamente acquisite." },
      { question: "Quanto costa il marketing per un'impresa edile?", answer: "Con Marketing Edile non paghi canone fisso, anticipo né setup: solo una provvigione sui lavori chiusi. L'unico investimento è il budget pubblicitario, che resta sul tuo account. Le agenzie tradizionali applicano tipicamente canoni tra 1.500 e 5.000 € al mese a prescindere dai risultati." },
      { question: "In quanto tempo un'impresa edile vede risultati?", answer: "I primi lead qualificati arrivano di norma in 3-4 settimane. L'impatto misurabile sul fatturato si vede in 60-90 giorni, perché tra richiesta, sopralluogo, preventivo e firma passano settimane. Chi promette cantieri chiusi in sette giorni non conosce il settore." },
      { question: "Come si evitano i contatti che perdono tempo?", answer: "Filtrando prima del sopralluogo. Gli annunci parlano a chi cerca affidabilità e non solo lo sconto, e la qualifica verifica budget, tipo di intervento e tempistiche. Così parli solo con committenti realmente decisi a partire." },
      { question: "Funziona per un general contractor sui lavori grandi?", answer: "Sì, ma cambia il messaggio: sui lavori ad alto valore contano metodo, referenze verificabili, tempi certi e capacità di gestire il cantiere chiavi in mano. Le campagne puntano su prova e autorevolezza, non su promozioni." },
      { question: "Serve un sito web per iniziare?", answer: "No. Se non ce l'hai costruiamo noi le landing page necessarie. Se ce l'hai, lo analizziamo e lo integriamo. Quello che genera richieste è la pagina di destinazione della campagna, non la vetrina istituzionale." },
    ],
    sectorLink: { label: "Vedi la pagina servizio: marketing per imprese edili", href: "/settori/imprese-edili" },
    spokes: [
      { label: "Migliori agenzie di marketing per il settore edile in Italia", href: "/blog/migliori-agenzie-marketing-edile" },
      { label: "Marketing imprese edili: clienti e preventivi", href: "/blog/marketing-imprese-edili-clienti-preventivi" },
      { label: "Lead generation edilizia: guida completa", href: "/blog/lead-generation-edilizia-guida-completa" },
      { label: "Come scegliere l'agenzia di marketing edilizia", href: "/blog/agenzia-marketing-edilizia-come-scegliere" },
      { label: "Sito web azienda edile che genera clienti", href: "/blog/sito-web-azienda-edile-genera-clienti-2026" },
      { label: "Budget marketing edilizia: quanto investire", href: "/blog/budget-marketing-edilizia-quanto-investire" },
      { label: "Marketing ristrutturazioni: acquisire clienti", href: "/blog/marketing-ristrutturazioni-acquisire-clienti" },
      { label: "Clienti per ristrutturazioni senza passaparola", href: "/blog/clienti-ristrutturazioni-senza-passaparola" },
      { label: "Google Ads per imprese edili: guida completa", href: "/blog/google-ads-imprese-edili-guida-completa-2026" },
    ],
  },
};

export const marketingHubKeys = Object.keys(marketingHubs);
