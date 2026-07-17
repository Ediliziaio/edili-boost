// FAQ + intro per pagina - fonte unica condivisa tra il prerender SEO
// (scripts/prerender-seo.mjs) e i componenti React (VerticalLanding, pagine statiche).
// Serve a: FAQPage JSON-LD nell'HTML servito (AEO/rich results), contenuto reale
// prerenderizzato (fix body thin) e FAQ visibile dopo l'idratazione React.
// 17 pagine, 85 FAQ.
export const pageFaqs = {
  "/settori/serramenti": {
    "intro": "Marketing Edile è l'agenzia di marketing per serramentisti e showroom serramenti che porta clienti pronti a comprare finestre, porte blindate e persiane. Generiamo appuntamenti qualificati per la tua azienda di serramenti con campagne Meta Ads e Google Ads testate prima sulla nostra azienda di serramenti da 2 milioni di euro in 2 anni.",
    "faqs": [
      {
        "question": "Come trovo nuovi clienti per la mia azienda di serramenti?",
        "answer": "Servono lead che stanno già valutando la sostituzione degli infissi, non curiosi. Marketing Edile intercetta chi cerca finestre nella tua zona con campagne Meta e Google, li fa arrivare su una landing dedicata al preventivo, gestisce il follow-up e ti passa solo appuntamenti in showroom con persone davvero interessate ad acquistare."
      },
      {
        "question": "Quanto costa fare pubblicità per un serramentista?",
        "answer": "Con Marketing Edile non paghi canoni né setup: lavoriamo solo a provvigione sulle vendite chiuse. L'unico costo è il budget pubblicitario, che è tuo e resta tuo. Per un serramentista consigliamo di partire con una spesa media giornaliera contenuta e scalarla man mano che gli appuntamenti si trasformano in contratti firmati."
      },
      {
        "question": "Il marketing a provvigione conviene a un'azienda di serramenti?",
        "answer": "Sì, perché il ticket medio di una fornitura di serramenti (spesso 8.000-20.000 euro) rende sostenibile pagare una provvigione solo sul venduto. Se non chiudiamo vendite, non ci paghi. Così il rischio è nostro: abbiamo interesse a portarti clienti che firmano, non semplici contatti da inseguire."
      },
      {
        "question": "Come faccio ad avere più preventivi per finestre e porte blindate?",
        "answer": "Più preventivi qualificati nascono da un'offerta chiara e da un follow-up rapido. Costruiamo annunci sui vantaggi concreti (risparmio in bolletta, detrazioni, sicurezza), portiamo il contatto a lasciare i dati e lo richiamiamo entro pochi minuti. In 3-4 settimane arrivano i primi appuntamenti in showroom pronti per il preventivo."
      },
      {
        "question": "Perché le mie campagne Facebook per serramenti non portano clienti?",
        "answer": "Di solito perché mostri il prodotto invece del risultato per il cliente, non filtri i contatti e li richiami troppo tardi. Marketing Edile riscrive l'offerta, scripta video che fermano chi scorre, qualifica i lead e imposta un follow-up immediato: così i contatti diventano appuntamenti reali e non numeri morti."
      }
    ]
  },
  "/settori/infissi": {
    "intro": "Marketing Edile è l'agenzia specializzata nel portare clienti alle aziende di infissi e agli showroom. Con campagne a risposta diretta su Meta e Google generiamo richieste di preventivo per infissi in PVC, alluminio e legno da privati pronti a sostituire i vecchi serramenti nella tua area, gestendo lead e follow-up al posto tuo.",
    "faqs": [
      {
        "question": "Come trovo clienti per la mia azienda di infissi?",
        "answer": "Devi farti trovare da chi sta già pensando di cambiare gli infissi, quando lo sta pensando. Marketing Edile crea campagne mirate sul tuo territorio, porta l'utente su una pagina costruita per far chiedere il preventivo e gestisce il primo contatto, consegnandoti appuntamenti con persone motivate e non semplici clic."
      },
      {
        "question": "Quanto budget serve per pubblicizzare un'azienda di infissi?",
        "answer": "Il budget lo decidi tu ed è il tuo unico investimento: Marketing Edile non chiede canone fisso né anticipo, guadagna solo a provvigione sulle vendite. Per un'azienda di infissi conviene partire con una cifra sostenibile, misurare il costo per appuntamento e aumentarla quando i preventivi iniziano a chiudersi."
      },
      {
        "question": "Conviene pagare il marketing solo a provvigione per gli infissi?",
        "answer": "Per un'azienda di infissi conviene perché il valore medio di una commessa copre facilmente la provvigione, e paghi solo a vendita conclusa. Rescissione libera, zero penali: se in un periodo non generiamo contratti firmati, non ti costiamo nulla. È il modello con cui abbiamo generato oltre 60 milioni di fatturato per i partner."
      },
      {
        "question": "Come aumento le richieste di preventivo per infissi in PVC e alluminio?",
        "answer": "Punta sui benefici che il cliente cerca davvero: bollette più basse, isolamento acustico, bonus fiscali. Costruiamo annunci e video su questi temi, portiamo il contatto a lasciare i dati e lo richiamiamo subito. I primi lead qualificati arrivano in 3-4 settimane, con risultati sul fatturato in 60-90 giorni."
      },
      {
        "question": "Meglio Google Ads o Facebook per vendere infissi?",
        "answer": "Servono entrambi: Google intercetta chi cerca già infissi e ha intenzione d'acquisto immediata, Meta crea domanda in chi non stava ancora cercando ma ne ha bisogno. Marketing Edile gestisce i due canali insieme, sposta il budget dove rende di più e ti manda un report settimanale con i KPI reali."
      }
    ]
  },
  "/settori/finestre": {
    "intro": "Marketing Edile porta clienti alle aziende che vendono e installano finestre. Con campagne Meta Ads e Google Ads a risposta diretta generiamo richieste di preventivo per la sostituzione delle finestre da proprietari di casa nella tua zona, gestendo la qualifica dei lead e il follow-up fino all'appuntamento in showroom o sopralluogo.",
    "faqs": [
      {
        "question": "Come trovo clienti che vogliono cambiare le finestre?",
        "answer": "Intercettiamo chi ha finestre vecchie, spifferi o bollette alte e sta valutando la sostituzione. Le campagne di Marketing Edile mostrano il risparmio concreto e i bonus disponibili, portano l'utente a chiedere il preventivo e lo richiamano subito, così ricevi appuntamenti con persone pronte a comprare finestre e non semplici curiosi."
      },
      {
        "question": "Quanto costa la pubblicità per vendere finestre?",
        "answer": "Con Marketing Edile paghi solo il budget pubblicitario, che è tuo: niente canone, niente setup, solo provvigione sulle vendite chiuse. Per la vendita di finestre conviene partire con una spesa giornaliera contenuta, misurare quanti preventivi genera e aumentarla progressivamente man mano che il costo per contratto firmato si dimostra sostenibile."
      },
      {
        "question": "La formula a provvigione funziona per chi vende finestre?",
        "answer": "Funziona perché una fornitura di finestre vale mediamente diverse migliaia di euro, quindi la provvigione incide poco sul margine e la paghi solo quando incassi. Se non vendi, non paghi, e puoi interrompere senza penali. Il rischio è nostro: portarti clienti che firmano è il nostro stesso interesse."
      },
      {
        "question": "Perché a primavera ho tante richieste di finestre e poi si fermano?",
        "answer": "La domanda per le finestre è stagionale, ma con la pubblicità la puoi generare tutto l'anno. Marketing Edile mantiene un flusso costante di preventivi anche nei mesi lenti spostando budget e messaggi (bonus in scadenza, comfort invernale, preparazione all'estate), così non dipendi più dal passaparola e dai picchi stagionali."
      },
      {
        "question": "Come faccio più preventivi per la sostituzione finestre?",
        "answer": "Un'offerta chiara e una risposta immediata al contatto fanno la differenza. Scriviamo annunci sui benefici (meno freddo, meno rumore, meno bolletta, detrazione fiscale), portiamo l'utente a lasciare i dati e lo richiamiamo in pochi minuti. In 3-4 settimane arrivano i primi appuntamenti utili per il preventivo."
      }
    ]
  },
  "/settori/ristrutturazioni": {
    "intro": "Marketing Edile è l'agenzia di marketing per imprese di ristrutturazione che vogliono cantieri più grandi e clienti migliori. Con campagne a risposta diretta su Meta e Google generiamo richieste per ristrutturazioni di case e appartamenti da privati pronti a partire, filtriamo i perditempo e ti consegniamo sopralluoghi con committenti realmente decisi a ristrutturare.",
    "faqs": [
      {
        "question": "Come trovo clienti per la mia impresa di ristrutturazioni?",
        "answer": "Non ti serve chi tanto per chiede un preventivo, ti serve chi vuole aprire il cantiere. Marketing Edile intercetta chi ha appena comprato casa o vuole ristrutturare, lo porta su una pagina che spiega il tuo metodo di lavoro e lo qualifica sul budget, così ricevi sopralluoghi con committenti concreti."
      },
      {
        "question": "Quanto devo investire in pubblicità per una ristrutturazione?",
        "answer": "Il budget pubblicitario è tuo e resta l'unico costo: Marketing Edile lavora solo a provvigione sui lavori chiusi, senza canone né anticipo. Data la stagionalità (le ristrutturazioni si concentrano in certi periodi), conviene mantenere il budget costante e scalarlo quando i sopralluoghi iniziano a trasformarsi in contratti firmati."
      },
      {
        "question": "Conviene il marketing a provvigione a un'impresa di ristrutturazioni?",
        "answer": "Sì: una ristrutturazione vale spesso decine di migliaia di euro, quindi la provvigione su un solo cantiere ripaga ampiamente il lavoro. Paghi solo a lavoro acquisito, senza penali e con rescissione libera. Se non ti portiamo commesse chiuse, non ci paghi: il rischio d'impresa lo prendiamo noi."
      },
      {
        "question": "Come evito i preventivi da chi cerca solo il prezzo più basso?",
        "answer": "Filtrando i contatti prima del sopralluogo. Marketing Edile costruisce annunci che parlano a chi cerca qualità e affidabilità, non solo lo sconto, e qualifica i lead su budget, tempistiche e tipo di intervento. Così eviti di bruciare giornate in sopralluoghi inutili e parli solo con committenti seri."
      },
      {
        "question": "Come faccio arrivare più richieste di ristrutturazione chiavi in mano?",
        "answer": "Comunicando il valore del chiavi in mano: un unico referente, tempi certi, zero stress. Realizziamo video e landing che mostrano cantieri reali e recensioni, portiamo il contatto a chiedere il sopralluogo e lo richiamiamo subito. I primi lead qualificati arrivano in 3-4 settimane, il fatturato si muove in 60-90 giorni."
      }
    ]
  },
  "/settori/fotovoltaico": {
    "intro": "Marketing Edile è l'agenzia specializzata nel portare clienti alle aziende di fotovoltaico. Con campagne Meta Ads e Google Ads a risposta diretta generiamo richieste di preventivo per impianti fotovoltaici e sistemi di accumulo da proprietari di casa e aziende della tua zona, gestendo lead e follow-up fino al sopralluogo con chi vuole davvero installare.",
    "faqs": [
      {
        "question": "Come trovo clienti per la mia azienda di fotovoltaico?",
        "answer": "Intercettiamo chi è stanco delle bollette alte e sta valutando il fotovoltaico proprio adesso. Le campagne di Marketing Edile mostrano risparmio e ritorno dell'investimento, portano l'utente a chiedere un preventivo e lo qualificano su tetto, consumi e budget, così ricevi sopralluoghi con persone pronte a installare un impianto, non semplici curiosi."
      },
      {
        "question": "Quanto costa fare pubblicità per il fotovoltaico?",
        "answer": "Con Marketing Edile paghi solo il budget pubblicitario: niente canone, niente setup, provvigione unicamente sugli impianti venduti. Nel fotovoltaico la concorrenza sui lead è alta, quindi conviene partire con un budget serio, misurare il costo per appuntamento qualificato e scalarlo quando i preventivi cominciano a trasformarsi in contratti firmati."
      },
      {
        "question": "Conviene la provvigione sulle vendite per un installatore fotovoltaico?",
        "answer": "Conviene perché un impianto fotovoltaico con accumulo vale spesso 10.000-25.000 euro, quindi la provvigione incide poco e la paghi solo a vendita conclusa. Se non installiamo, non paghi. Testiamo ogni strategia sulla nostra azienda prima di proportela, così non bruci budget su tattiche non provate nel settore energia."
      },
      {
        "question": "Come genero lead fotovoltaico di qualità e non contatti freddi?",
        "answer": "Qualificando prima del sopralluogo. Molte agenzie vendono liste di contatti freddi rivendute a più installatori. Marketing Edile lavora in esclusiva per pochi clienti (massimo 3 nuovi al mese), genera lead solo per te e li filtra su proprietà dell'immobile, consumi e reale intenzione d'acquisto prima di passarteli."
      },
      {
        "question": "Come faccio più preventivi per impianti con accumulo e colonnine?",
        "answer": "Comunicando il vantaggio completo: indipendenza dalla rete, ricarica dell'auto elettrica, incentivi disponibili. Costruiamo annunci e video su questi temi, portiamo il contatto a lasciare i dati e lo richiamiamo entro pochi minuti. I primi appuntamenti qualificati arrivano in 3-4 settimane, il fatturato si muove in 60-90 giorni."
      }
    ]
  },
  "/settori/impiantisti": {
    "intro": "Marketing Edile porta clienti agli impiantisti: elettricisti, termotecnici e installatori di climatizzazione. Con campagne a risposta diretta su Meta e Google generiamo richieste di preventivo per impianti elettrici, climatizzazione e riscaldamento da privati e aziende della tua zona, gestendo qualifica e follow-up dei lead fino al sopralluogo.",
    "faqs": [
      {
        "question": "Come trovo clienti per la mia attività di impiantista?",
        "answer": "Ti facciamo trovare da chi ha bisogno di un nuovo impianto o di un rifacimento proprio ora. Marketing Edile crea campagne mirate per elettricisti e termotecnici sul tuo territorio, porta il contatto su una landing dedicata al preventivo e lo qualifica sul tipo di intervento, così ricevi sopralluoghi con clienti concreti."
      },
      {
        "question": "Quanto costa la pubblicità online per un impiantista?",
        "answer": "Il budget pubblicitario è tuo ed è l'unico costo: Marketing Edile non applica canone né setup, guadagna solo a provvigione sui lavori chiusi. Per un impiantista conviene iniziare con un budget contenuto, puntare sugli interventi a ticket più alto (climatizzazione, impianti completi) e scalare quando i preventivi si chiudono."
      },
      {
        "question": "Il modello a provvigione funziona per un impiantista?",
        "answer": "Funziona sui lavori a valore medio-alto, come impianti di climatizzazione o rifacimenti elettrici completi, dove la provvigione su una commessa ripaga il lavoro. Paghi solo a lavoro acquisito, senza penali e con rescissione libera. Sui micro-interventi da poche decine di euro il modello non ha senso e te lo diciamo con chiarezza."
      },
      {
        "question": "Come attiro clienti per la climatizzazione prima dell'estate?",
        "answer": "La climatizzazione ha picchi stagionali fortissimi, ma la domanda si può anticipare. Marketing Edile lancia le campagne prima dell'ondata di caldo, quando i preventivi costano meno e i clienti decidono con calma, e mantiene un flusso di lead anche in bassa stagione su riscaldamento e manutenzioni, così non dipendi dai picchi."
      },
      {
        "question": "Come genero più preventivi per impianti elettrici e termici?",
        "answer": "Con un'offerta chiara e un follow-up immediato. Creiamo annunci sui benefici concreti (comfort, risparmio energetico, sicurezza a norma, incentivi), portiamo il contatto a lasciare i dati e lo richiamiamo in pochi minuti. I primi lead qualificati arrivano in 3-4 settimane, con risultati misurabili sul fatturato in 60-90 giorni."
      }
    ]
  },
  "/settori/idraulici": {
    "intro": "Marketing Edile è l'agenzia di marketing per idraulici e termoidraulici. Con campagne Meta Ads e Google Ads a risposta diretta generiamo richieste di preventivo per sostituzione caldaie, pompe di calore e rifacimento impianti idraulici da proprietari di casa della tua zona, gestendo qualifica e follow-up dei lead fino al sopralluogo.",
    "faqs": [
      {
        "question": "Come trovo clienti per la mia attività di idraulico?",
        "answer": "Ti facciamo intercettare chi deve sostituire la caldaia, installare una pompa di calore o rifare l'impianto, proprio quando lo cerca. Marketing Edile crea campagne locali per termoidraulici, porta il contatto su una pagina dedicata al preventivo e lo qualifica sul tipo di intervento, così ricevi sopralluoghi con clienti pronti a decidere."
      },
      {
        "question": "Quanto costa fare pubblicità per un idraulico?",
        "answer": "Con Marketing Edile paghi solo il budget pubblicitario, che è tuo: niente canone, niente anticipo, solo provvigione sui lavori chiusi. Per un termoidraulico conviene concentrare il budget sugli interventi a valore alto, come pompe di calore e caldaie a condensazione, e scalarlo quando i preventivi iniziano a trasformarsi in contratti."
      },
      {
        "question": "Conviene pagare a provvigione per vendere caldaie e pompe di calore?",
        "answer": "Sì, perché la sostituzione di una caldaia o l'installazione di una pompa di calore valgono migliaia di euro, quindi la provvigione la paghi solo a vendita conclusa e incide poco sul margine. Se non chiudiamo lavori, non ci paghi, con rescissione libera e zero penali. Il rischio è nostro."
      },
      {
        "question": "Come genero richieste per la sostituzione della caldaia?",
        "answer": "Comunicando ciò che spinge il cliente: caldaia vecchia che consuma, bonus in scadenza, obbligo di adeguamento. Marketing Edile costruisce annunci su questi temi, porta il contatto a chiedere il preventivo e lo richiama entro pochi minuti, quando l'urgenza è ancora alta. I primi lead qualificati arrivano in 3-4 settimane."
      },
      {
        "question": "Come sfrutto gli incentivi sulle pompe di calore per avere più clienti?",
        "answer": "Gli incentivi sono la leva perfetta per generare domanda. Creiamo campagne che spiegano quanto il cliente può risparmiare con detrazioni e bonus sulla pompa di calore, portiamo il contatto a lasciare i dati e lo qualifichiamo su immobile e impianto esistente, così parli solo con chi ha davvero i requisiti per installare."
      }
    ]
  },
  "/settori/tetti": {
    "intro": "Marketing Edile porta clienti alle aziende specializzate nel rifacimento tetti. Con campagne a risposta diretta su Meta e Google generiamo richieste di preventivo per rifacimento e ristrutturazione tetti da proprietari di case e capannoni della tua zona, filtriamo i contatti e ti consegniamo sopralluoghi con committenti pronti a intervenire sulla copertura.",
    "faqs": [
      {
        "question": "Come trovo clienti per il rifacimento del tetto?",
        "answer": "Intercettiamo chi ha un tetto vecchio, infiltrazioni o vuole isolarlo, proprio quando cerca una soluzione. Marketing Edile crea campagne locali mirate, porta il contatto su una landing dedicata al preventivo per il tetto e lo qualifica su tipo di copertura e urgenza, così ricevi sopralluoghi con committenti realmente motivati."
      },
      {
        "question": "Quanto costa la pubblicità per un'azienda di rifacimento tetti?",
        "answer": "Il budget pubblicitario è tuo ed è l'unico costo: Marketing Edile lavora solo a provvigione sui lavori chiusi, senza canone né setup. Il rifacimento di un tetto è una commessa importante, quindi anche pochi lavori l'anno ripagano il budget: conviene partire misurato e scalare quando i sopralluoghi si trasformano in contratti."
      },
      {
        "question": "Conviene il marketing a provvigione per chi rifà i tetti?",
        "answer": "Conviene molto: il rifacimento di un tetto vale spesso decine di migliaia di euro, quindi la provvigione su una singola commessa ripaga ampiamente il lavoro e la paghi solo a lavoro acquisito. Se non ti portiamo cantieri chiusi, non ci paghi, con rescissione libera e nessuna penale."
      },
      {
        "question": "Come intercetto chi ha problemi di infiltrazioni al tetto?",
        "answer": "Le infiltrazioni creano urgenza, e l'urgenza fa decidere in fretta. Marketing Edile costruisce annunci che parlano direttamente a chi ha macchie di umidità e perdite, porta il contatto a chiedere subito un sopralluogo e lo richiama in pochi minuti. Così arrivi tu prima della concorrenza, mentre il problema è ancora aperto."
      },
      {
        "question": "Come genero più preventivi per il rifacimento tetti tutto l'anno?",
        "answer": "Il tetto è un lavoro stagionale, ma la domanda si genera anche in bassa stagione anticipando il problema. Comunichiamo isolamento, risparmio energetico e bonus disponibili nei mesi lenti, e urgenza infiltrazioni in quelli piovosi. I primi lead qualificati arrivano in 3-4 settimane, con risultati sul fatturato in 60-90 giorni."
      }
    ]
  },
  "/settori/coperture": {
    "intro": "Marketing Edile è l'agenzia di marketing per aziende di coperture, impermeabilizzazioni e isolamento. Con campagne Meta Ads e Google Ads a risposta diretta generiamo richieste di preventivo per rifacimento coperture, guaine e cappotti isolanti da proprietari di immobili e capannoni della tua zona, gestendo qualifica e follow-up dei lead fino al sopralluogo.",
    "faqs": [
      {
        "question": "Come trovo clienti per la mia azienda di coperture e impermeabilizzazioni?",
        "answer": "Ti facciamo trovare da chi ha coperture da rifare, guaine rovinate o problemi di isolamento, quando cerca una soluzione. Marketing Edile crea campagne locali mirate su privati e proprietari di capannoni, porta il contatto su una landing dedicata al preventivo e lo qualifica su tipo di intervento e urgenza, consegnandoti sopralluoghi concreti."
      },
      {
        "question": "Quanto costa fare pubblicità per un'azienda di impermeabilizzazioni?",
        "answer": "Con Marketing Edile paghi solo il budget pubblicitario: niente canone, niente anticipo, provvigione unicamente sui lavori chiusi. Nelle coperture il ticket medio è alto, quindi bastano pochi cantieri per ripagare l'investimento: conviene iniziare con un budget sostenibile e scalarlo quando i sopralluoghi cominciano a trasformarsi in contratti firmati."
      },
      {
        "question": "Il modello a provvigione conviene per chi fa coperture e cappotti?",
        "answer": "Conviene perché rifacimento coperture e cappotti isolanti valgono spesso decine di migliaia di euro, quindi la provvigione su una commessa ripaga il lavoro e la paghi solo a lavoro concluso. Zero canoni, rescissione libera, nessuna penale: se non generiamo lavori chiusi, non ci paghi. Il rischio d'impresa lo prendiamo noi."
      },
      {
        "question": "Come intercetto i clienti con problemi di infiltrazioni sulla copertura?",
        "answer": "Le infiltrazioni e i problemi di isolamento creano urgenza. Marketing Edile costruisce annunci che parlano a chi ha perdite, condensa o dispersioni di calore, porta il contatto a chiedere subito un sopralluogo e lo richiama in pochi minuti, così arrivi prima della concorrenza mentre il cliente è ancora deciso a intervenire."
      },
      {
        "question": "Come genero richieste per cappotto termico e isolamento?",
        "answer": "Puntando su risparmio in bolletta, comfort e incentivi disponibili sul cappotto. Creiamo campagne e video su questi benefici, portiamo il contatto a lasciare i dati e lo qualifichiamo su immobile e tipo di intervento, così parli solo con chi ha i requisiti. I primi lead qualificati arrivano in 3-4 settimane."
      }
    ]
  },
  "/settori/imprese-edili": {
    "intro": "Marketing Edile è l'agenzia di marketing per imprese edili generali che vogliono cantieri più grandi e continuità di lavoro. Con campagne a risposta diretta su Meta e Google generiamo richieste per costruzioni, ristrutturazioni e opere edili da committenti privati e aziende della tua zona, filtriamo i perditempo e ti consegniamo sopralluoghi con clienti seri.",
    "faqs": [
      {
        "question": "Come trovo nuovi clienti per la mia impresa edile?",
        "answer": "Ti facciamo intercettare committenti che stanno pianificando un cantiere ora, non chi guarda per curiosità. Marketing Edile crea campagne mirate sul tuo territorio, porta il contatto su una pagina che mostra i tuoi lavori e il tuo metodo, e lo qualifica su budget e tempistiche, così ricevi sopralluoghi con clienti concreti."
      },
      {
        "question": "Quanto deve investire un'impresa edile in pubblicità?",
        "answer": "Il budget pubblicitario è tuo ed è l'unico costo: Marketing Edile lavora solo a provvigione sulle commesse chiuse, senza canone né setup. Data la stagionalità dell'edilizia, conviene mantenere il budget costante tutto l'anno per non fermare la pipeline e scalarlo quando i sopralluoghi iniziano a trasformarsi in contratti firmati."
      },
      {
        "question": "Conviene il marketing a provvigione per un'impresa edile?",
        "answer": "Sì: le commesse edili valgono spesso decine o centinaia di migliaia di euro, quindi la provvigione su un solo cantiere ripaga ampiamente il lavoro e la paghi solo a commessa acquisita. Zero canoni, rescissione libera, nessuna penale. È il modello con cui abbiamo generato oltre 60 milioni di fatturato per 47 aziende partner."
      },
      {
        "question": "Come garantisco continuità di cantieri alla mia impresa edile?",
        "answer": "Con un flusso costante di richieste, invece di dipendere dal passaparola. Marketing Edile mantiene le campagne attive tutto l'anno, alimenta la tua pipeline di sopralluoghi e ti manda un report settimanale con i KPI reali, così sai sempre quante commesse hai in arrivo e puoi programmare squadre e mezzi senza buchi."
      },
      {
        "question": "Come evito committenti che perdono tempo e non firmano?",
        "answer": "Filtrando i contatti prima del sopralluogo. Marketing Edile costruisce annunci che parlano a chi cerca affidabilità e non solo il prezzo più basso, e qualifica i lead su budget, tipo di opera e tempistiche. Così eviti di sprecare giornate in sopralluoghi inutili e parli solo con committenti realmente decisi a partire."
      }
    ]
  },
  "/servizi": {
    "intro": "I servizi di Marketing Edile® formano un sistema completo di acquisizione clienti per imprese edili: Meta Ads e Google Ads, video scriptati, landing page ad alta conversione, gestione lead con follow-up automatizzato e report settimanali. Ogni strategia è testata sulla nostra azienda di serramenti prima di arrivare a te.",
    "faqs": [
      {
        "question": "Quali servizi di marketing offre un'agenzia per imprese edili?",
        "answer": "Offriamo un sistema completo: campagne Meta Ads e Google Ads mirate, contenuti video scriptati, landing page ad alta conversione, gestione dei lead con follow-up automatizzato, report settimanali con KPI reali e un referente dedicato. Tutto pensato solo per edilizia, serramenti, ristrutturazioni, fotovoltaico e impiantistica."
      },
      {
        "question": "Come funziona la generazione di lead per un'impresa edile?",
        "answer": "Intercettiamo chi cerca lavori edili nella tua zona con annunci Meta e Google, li portiamo su una landing page costruita per convertire e raccogliamo il contatto. Da lì il follow-up automatizzato scalda il lead e organizza l'appuntamento. I primi contatti arrivano in 3-4 settimane."
      },
      {
        "question": "Le campagne pubblicitarie funzionano nel settore edile?",
        "answer": "Sì, se fatte da chi conosce il settore. Testiamo ogni strategia sulla nostra azienda di serramenti, che ha fatturato 2 milioni in 2 anni, prima di applicarla ai clienti. Questo ci ha permesso di generare oltre 60 milioni di euro per i partner in Italia."
      },
      {
        "question": "Chi gestisce i contatti dopo che arrivano dalla pubblicità?",
        "answer": "Il nostro sistema di gestione lead e follow-up automatizzato smista ogni contatto e lo tiene caldo con messaggi e promemoria, così nessuna richiesta si perde. Tu ricevi appuntamenti pronti e report settimanali con i numeri reali, seguito da un referente dedicato alla tua azienda."
      },
      {
        "question": "Devo pagare io il budget pubblicitario delle campagne?",
        "answer": "Sì, il budget ads su Meta e Google è tuo e resta sul tuo account, sempre trasparente. Noi non prendiamo canoni fissi: veniamo pagati solo a provvigione sulle vendite chiuse. Così il tuo investimento va in visibilità reale e noi guadagniamo solo se tu vendi."
      }
    ]
  },
  "/prezzi": {
    "intro": "Marketing Edile® ha un modello di prezzo unico nel settore: lavoriamo solo a provvigione sulle vendite realmente chiuse. Zero canone fisso, zero anticipo, zero setup. Se non generiamo vendite, non paghi. Un modello a percentuale pensato per allineare al 100% i nostri interessi ai tuoi.",
    "faqs": [
      {
        "question": "Quanto costa un'agenzia di marketing per imprese edili?",
        "answer": "Le agenzie tradizionali chiedono canoni fissi da 1.500 a 5.000 euro al mese, che paghi anche senza risultati. Marketing Edile® ribalta il modello: zero canone fisso, zero setup, solo una provvigione sulle vendite che chiudiamo per te. Paghi in proporzione a quanto incassi davvero."
      },
      {
        "question": "Come funziona il pagamento a provvigione nel marketing edile?",
        "answer": "Concordiamo una percentuale sulle vendite generate dal nostro lavoro. Le campagne portano lead, i lead diventano contratti firmati e solo su quei contratti maturiamo la provvigione. Nessun anticipo, nessun costo di attivazione: guadagniamo solo quando la tua impresa incassa."
      },
      {
        "question": "Devo pagare un anticipo o un costo di setup iniziale?",
        "answer": "No. Zero anticipo, zero setup, zero canone mensile. L'unico investimento a tuo carico è il budget pubblicitario, che resta sul tuo account Meta e Google. Il nostro compenso è esclusivamente la provvigione sulle vendite chiuse: se non vendi, non ci paghi."
      },
      {
        "question": "Cosa succede se non generate vendite per la mia azienda?",
        "answer": "Semplice: non ci paghi. Il nostro modello a provvigione mette il rischio dalla nostra parte, non dalla tua. Puoi anche rescindere liberamente in qualsiasi momento, senza penali. È questa fiducia nei risultati che ci ha portato a 47+ aziende clienti in Italia."
      },
      {
        "question": "Il modello a percentuale conviene rispetto al canone fisso?",
        "answer": "Con il canone fisso paghi comunque, anche a zero risultati. Con la provvigione paghi solo su ciò che incassi, quindi il costo scala con il tuo fatturato reale. È il modello più sicuro per un imprenditore edile: nessuna spesa fissa, nessun rischio di buttare budget."
      }
    ]
  },
  "/offerta": {
    "intro": "L'offerta di Marketing Edile® è un sistema di acquisizione clienti chiavi in mano per imprese edili, senza canone fisso e a solo rischio nostro. Accettiamo massimo 3 nuove aziende al mese per garantire risultati reali: candidatura, valutazione gratuita e partenza operativa in poche settimane.",
    "faqs": [
      {
        "question": "In cosa consiste l'offerta di Marketing Edile per le imprese?",
        "answer": "Un sistema completo di acquisizione clienti: campagne Meta e Google, landing page, video e gestione lead, tutto a provvigione sulle vendite chiuse. Zero canone, zero anticipo, rescissione libera. Ti portiamo appuntamenti qualificati mentre tu ti concentri sul cantiere e sulla chiusura."
      },
      {
        "question": "Perché accettate solo 3 nuovi clienti al mese?",
        "answer": "Perché lavorando a provvigione dobbiamo generare vendite vere, e questo richiede tempo e attenzione reale su ogni cliente. Limitare a 3 nuove aziende al mese ci permette di seguire ogni impresa con un referente dedicato e strategie personalizzate, senza diluire i risultati su troppi clienti."
      },
      {
        "question": "Quanto tempo serve per vedere i primi risultati?",
        "answer": "I primi lead qualificati arrivano tipicamente in 3-4 settimane dall'avvio delle campagne. L'impatto misurabile sul fatturato si vede in 60-90 giorni, quando il sistema di follow-up trasforma i contatti in contratti firmati. Ricevi report settimanali per seguire ogni fase con numeri reali."
      },
      {
        "question": "Che garanzie offre Marketing Edile sui risultati?",
        "answer": "La garanzia più concreta possibile: se non generiamo vendite, non paghi. Lavoriamo solo a provvigione e puoi rescindere in qualsiasi momento senza penali. Abbiamo già generato oltre 60 milioni di euro per i nostri partner, prova che il modello funziona quando il settore è quello giusto."
      },
      {
        "question": "L'offerta è adatta alla mia tipologia di azienda edile?",
        "answer": "Lavoriamo esclusivamente con il settore edile: imprese di ristrutturazione, serramenti, infissi, fotovoltaico, impiantisti, tetti e coperture, idraulici. Se vendi lavori o prodotti in edilizia in Italia e hai capacità di gestire nuovi cantieri, l'offerta è costruita per te. La valutazione gratuita conferma il match."
      }
    ]
  },
  "/casi-studio": {
    "intro": "I casi studio di Marketing Edile® raccontano risultati reali di imprese edili italiane: oltre 60 milioni di euro generati per i partner e 47+ aziende clienti nei settori serramenti, ristrutturazioni e fotovoltaico. Numeri concreti da campagne Meta e Google, non promesse.",
    "faqs": [
      {
        "question": "Quali risultati concreti ottiene un'impresa edile con il marketing a risposta diretta?",
        "answer": "I nostri partner hanno generato complessivamente oltre 60 milioni di euro di vendite. Sulla nostra stessa azienda di serramenti abbiamo fatturato 2 milioni in 2 anni con lo stesso sistema. Ogni caso studio mostra lead, appuntamenti e contratti reali, non metriche di vanità come i mi piace."
      },
      {
        "question": "Avete casi studio nel mio settore edile specifico?",
        "answer": "Sì. Lavoriamo con serramenti, infissi, ristrutturazioni, fotovoltaico, impiantisti, tetti e coperture, idraulici. Con 47+ aziende clienti in Italia abbiamo casi documentati nella maggior parte dei verticali edili, con dati su costo per lead, appuntamenti generati e vendite chiuse per settore."
      },
      {
        "question": "I risultati dei casi studio sono replicabili per la mia azienda?",
        "answer": "Sono replicabili quando ci sono domanda locale e capacità di gestire i lavori. Testiamo ogni strategia sulla nostra azienda di serramenti prima di applicarla, quindi partiamo da un sistema già validato. Ogni impresa è diversa, ma il metodo che ha generato 60 milioni resta lo stesso."
      },
      {
        "question": "Come misurate il successo di una campagna di marketing edile?",
        "answer": "Solo con numeri che contano per un imprenditore: lead qualificati, appuntamenti fissati, preventivi e soprattutto vendite chiuse. Ogni settimana ricevi un report con i KPI reali. Lavorando a provvigione, il nostro successo coincide esattamente con il tuo fatturato: nessuna metrica gonfiata."
      },
      {
        "question": "Quanto fatturato posso aspettarmi dopo i primi mesi?",
        "answer": "Dipende dallo scontrino medio e dalla tua capacità di chiudere, ma i primi lead arrivano in 3-4 settimane e l'impatto sul fatturato in 60-90 giorni. I nostri casi studio mostrano imprese che hanno moltiplicato i cantieri; nella valutazione gratuita stimiamo un potenziale realistico per la tua zona."
      }
    ]
  },
  "/chi-siamo": {
    "intro": "Marketing Edile® è il brand di marketing a risposta diretta specializzato solo nell'edilizia italiana, parte di Domus Group S.r.l. con sede a Milano. Fondata da Florin Andriciuc, con 8+ anni di vendita in edilizia, testa ogni strategia sulla propria azienda di serramenti prima di proporla ai clienti.",
    "faqs": [
      {
        "question": "Chi è Marketing Edile e di chi è il brand?",
        "answer": "Marketing Edile® è un brand di Domus Group S.r.l., con sede a Milano, specializzato esclusivamente nel marketing per il settore edile italiano. È stato fondato da Florin Andriciuc, imprenditore con oltre 8 anni di esperienza nella vendita in edilizia, per portare metodi a risposta diretta alle imprese di costruzioni."
      },
      {
        "question": "Perché fidarsi di Marketing Edile rispetto ad altre agenzie?",
        "answer": "Perché mettiamo il rischio dalla nostra parte: lavoriamo solo a provvigione, senza canoni fissi. Abbiamo generato oltre 60 milioni di euro per 47+ aziende clienti e testiamo ogni strategia sulla nostra azienda di serramenti. Non siamo un'agenzia generalista: conosciamo il cantiere e il modo di vendere in edilizia."
      },
      {
        "question": "Marketing Edile lavora solo con il settore edile?",
        "answer": "Sì, ed è la nostra forza. Ci occupiamo esclusivamente di edilizia, serramenti, infissi, ristrutturazioni, fotovoltaico, impiantisti, tetti, coperture e idraulici. Questa specializzazione verticale ci permette di conoscere il cliente finale, il ciclo di vendita e i margini tipici di ogni impresa edile italiana."
      },
      {
        "question": "Chi è Florin Andriciuc, il fondatore di Marketing Edile?",
        "answer": "Florin Andriciuc è il fondatore di Marketing Edile® e ha oltre 8 anni di esperienza diretta nella vendita in edilizia. Non arriva dal marketing teorico: ha costruito e fatto crescere una vera azienda di serramenti, e su quella continua a testare le strategie prima di offrirle ai clienti."
      },
      {
        "question": "Marketing Edile testa davvero le strategie prima di venderle?",
        "answer": "Sì. Prima di proporre qualsiasi strategia ai clienti, la applichiamo alla nostra azienda di serramenti, che ha fatturato 2 milioni in 2 anni. Solo ciò che funziona sui nostri soldi arriva ai partner. È la differenza tra chi vende teorie e chi rischia in prima persona come te."
      }
    ]
  },
  "/contattaci": {
    "intro": "Iniziare con Marketing Edile® significa candidare la tua impresa edile a una valutazione gratuita e senza impegno. Accettiamo massimo 3 nuovi clienti al mese, quindi selezioniamo le aziende con cui possiamo davvero generare vendite. Nessun canone, nessun rischio iniziale.",
    "faqs": [
      {
        "question": "Come funziona la candidatura con Marketing Edile?",
        "answer": "Compili il modulo di contatto con i dati della tua impresa edile e prenoti una valutazione gratuita. Analizziamo il tuo settore, la zona e il potenziale di vendita, poi ti diciamo con onestà se possiamo aiutarti. Accettando solo 3 clienti al mese, valutiamo ogni candidatura con attenzione."
      },
      {
        "question": "La prima consulenza con Marketing Edile è gratuita?",
        "answer": "Sì, la valutazione iniziale è gratuita e senza impegno. Serve a capire se c'è un match reale tra la tua impresa e il nostro sistema. Dato che lavoriamo a provvigione, non abbiamo interesse a partire con aziende per cui non possiamo generare vendite concrete."
      },
      {
        "question": "Cosa serve per iniziare a lavorare con voi?",
        "answer": "Serve un'impresa attiva nel settore edile e la capacità di gestire nuovi lavori e appuntamenti. Da subito devi predisporre il budget pubblicitario, che resta sul tuo account. Il resto lo costruiamo noi: campagne, landing, video e gestione lead. Nessun anticipo né setup a nostro favore."
      },
      {
        "question": "Perché potreste rifiutare la mia candidatura?",
        "answer": "Perché lavoriamo a provvigione e accettiamo solo 3 aziende al mese: se non vediamo un potenziale reale di vendite nel tuo mercato, preferiamo essere onesti e non partire. Rifiutiamo per zona satura, margini troppo bassi o impossibilità di gestire i lead. È una selezione a tutela dei risultati."
      },
      {
        "question": "Dopo il primo contatto, quanto ci mette a partire il sistema?",
        "answer": "Dopo la valutazione gratuita e la conferma del match, prepariamo campagne, landing page e video e andiamo online in poche settimane. I primi lead qualificati arrivano tipicamente in 3-4 settimane dall'avvio, con impatto misurabile sul fatturato entro 60-90 giorni. Ti segue un referente dedicato."
      }
    ]
  },
  "/materiali-gratuiti": {
    "intro": "Marketing Edile® mette a disposizione degli imprenditori edili risorse gratuite concrete: manuali PDF sulla vendita e l'acquisizione clienti, un CRM gratuito, video formativi e una community di titolari del settore. Strumenti pratici per iniziare a strutturare il marketing anche prima di lavorare con noi.",
    "faqs": [
      {
        "question": "Quali materiali gratuiti offre Marketing Edile agli imprenditori edili?",
        "answer": "Mettiamo a disposizione manuali PDF su vendita e acquisizione clienti in edilizia, un CRM gratuito per gestire i tuoi lead, video formativi e l'accesso a una community di titolari di imprese edili. Sono risorse pratiche, nate dalla nostra esperienza sul campo, scaricabili senza costi."
      },
      {
        "question": "Il CRM gratuito di Marketing Edile è davvero senza costi?",
        "answer": "Sì, il CRM che offriamo è gratuito e serve a organizzare i contatti, seguire i preventivi e non perdere nessuna richiesta. È lo stesso approccio di gestione lead che usiamo con i clienti: te lo diamo per iniziare a mettere ordine nel tuo processo di vendita, senza impegni."
      },
      {
        "question": "Come posso scaricare i manuali PDF per imprese edili?",
        "answer": "I manuali PDF sono disponibili nella sezione materiali gratuiti del sito: inserisci i tuoi dati e ricevi subito il download. Trattano vendita, marketing e acquisizione clienti applicati all'edilizia, con esempi reali. Sono estratti concreti del metodo che ci ha portato a 60+ milioni generati per i partner."
      },
      {
        "question": "Cosa offre la community di imprenditori edili di Marketing Edile?",
        "answer": "La community è uno spazio dove titolari di imprese edili, serramenti, ristrutturazioni e fotovoltaico si confrontano su vendita, marketing e gestione. Trovi consigli pratici, casi reali e aggiornamenti. È un modo per entrare nel nostro mondo e capire il metodo prima di valutare una collaborazione."
      },
      {
        "question": "Devo pagare o candidarmi per accedere alle risorse gratuite?",
        "answer": "No, le risorse gratuite (manuali PDF, CRM, video e community) sono accessibili a tutti gli imprenditori edili senza costi e senza candidatura. La candidatura serve solo se vuoi lavorare con noi al sistema di acquisizione a provvigione. I materiali gratuiti sono un primo passo, liberamente disponibile."
      }
    ]
  }
};

export function getPageFaq(path) {
  if (!path) return null;
  const key = path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
  return pageFaqs[key] || null;
}
