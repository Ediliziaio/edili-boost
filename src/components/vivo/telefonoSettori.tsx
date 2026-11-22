/**
 * Cosa vede il cliente sul telefono, settore per settore: azienda di fantasia,
 * annuncio, pagina, domande del modulo, appuntamento. Usato da TelefonoSistema.
 */
import type { ReactNode } from "react";

export type Foto = "finestre" | "pannelli" | "bagno" | "tetto" | "caldaia" | "casa";

export type CfgTelefono = {
  azienda: string;
  sigla: string;
  zona: string;
  annuncio: ReactNode;
  foto: Foto;
  didascalia: string;
  sottoCta: string;
  titoloPagina: string;
  punti: string[];
  recensione: [string, string];
  domande: [string, string][];
  consulente: string;
  cliente: string;
  messaggio: string;
  appuntamento: string;
  dove: string;
  notifiche: string[];
};

export const TELEFONO: Record<string, CfgTelefono> = {
  serramenti: {
    azienda: "Infissi Rossi", sigla: "IR", zona: "Varese e dintorni",
    annuncio: <>Finestre vecchie e spifferi? Le cambiamo in un giorno. <b>Sopralluogo gratuito</b> in zona.</>,
    foto: "finestre", didascalia: "Lavoro a Gallarate", sottoCta: "Preventivo in 24 ore",
    titoloPagina: "Finestre nuove in un giorno, senza muratori.",
    punti: ["Posa in giornata, pulizia inclusa", "Pratica detrazioni fatta da noi", "Prezzo bloccato per iscritto", "Garanzia 10 anni sulla posa"],
    recensione: ["«Arrivati alle 8, alle 17 era tutto montato e pulito.»", "Laura B., Busto Arsizio"],
    domande: [["La casa è tua?", "Sì, di proprietà"], ["Quante finestre?", "6 finestre"], ["Quando vuoi iniziare?", "Entro 3 mesi"]],
    consulente: "Consulente serramenti", cliente: "Marco",
    messaggio: "come d'accordo al telefono: sopralluogo per le 6 finestre.",
    appuntamento: "Sopralluogo gratuito", dove: "ore 17:30 · Via Roma 12, Gallarate",
    notifiche: ["1.240 persone in zona", "Pagina aperta", "Contatto buono", "Richiamato in 4 min", "In agenda"],
  },
  fotovoltaico: {
    azienda: "Solare Bianchi", sigla: "SB", zona: "Bergamo e provincia",
    annuncio: <>Bolletta oltre 150 € al mese? Impianto con accumulo, <b>pratiche incluse</b>. Sopralluogo gratuito.</>,
    foto: "pannelli", didascalia: "Impianto a Seriate", sottoCta: "Simulazione gratuita",
    titoloPagina: "Il tuo tetto produce, la bolletta scende.",
    punti: ["Progetto sui tuoi consumi veri", "Pratiche GSE e comune fatte da noi", "Montaggio in 2 giorni", "Produzione controllata dall'app"],
    recensione: ["«Il primo mese la bolletta è passata da 190 a 40 euro.»", "Paolo G., Treviglio"],
    domande: [["Il tetto è tuo?", "Sì, villetta"], ["Bolletta al mese?", "Circa 180 €"], ["Quando vuoi installare?", "Entro l'estate"]],
    consulente: "Tecnico fotovoltaico", cliente: "Paolo",
    messaggio: "come detto al telefono: veniamo a vedere tetto e bollette.",
    appuntamento: "Sopralluogo tetto", dove: "ore 18:00 · Via Verdi 4, Seriate",
    notifiche: ["980 famiglie in zona", "Pagina aperta", "Bolletta alta: buono", "Richiamato in 3 min", "In agenda"],
  },
  ristrutturazioni: {
    azienda: "Edil Conti", sigla: "EC", zona: "Monza e Brianza",
    annuncio: <>Bagno o casa da rifare? <b>Un solo referente</b> e tempi scritti nel contratto.</>,
    foto: "bagno", didascalia: "Bagno rifatto a Lissone", sottoCta: "Sopralluogo gratuito",
    titoloPagina: "Ristrutturi casa con un solo referente.",
    punti: ["Progetto e computo prima di iniziare", "Tempi scritti nel contratto", "Squadre nostre, niente catene di subappalti", "Pratiche bonus seguite da noi"],
    recensione: ["«Ci avevano detto 5 settimane: finito in 5 settimane.»", "Giulia e Andrea, Monza"],
    domande: [["Che lavoro devi fare?", "Bagno e cucina"], ["Quanto è grande la casa?", "90 mq"], ["Quando vuoi iniziare?", "Entro 6 mesi"]],
    consulente: "Responsabile cantieri", cliente: "Giulia",
    messaggio: "come d'accordo: veniamo a vedere bagno e cucina.",
    appuntamento: "Sopralluogo in casa", dove: "ore 17:00 · Via Manzoni 8, Lissone",
    notifiche: ["1.530 persone in zona", "Pagina aperta", "Budget chiaro: buono", "Richiamata in 5 min", "In agenda"],
  },
  tetti: {
    azienda: "Coperture Galli", sigla: "CG", zona: "Padova e provincia",
    annuncio: <>Infiltrazioni o tegole rotte? Tetto rifatto con isolamento, <b>ponteggio incluso</b>.</>,
    foto: "tetto", didascalia: "Tetto rifatto ad Albignasego", sottoCta: "Sopralluogo gratuito",
    titoloPagina: "Tetto rifatto prima della prossima pioggia.",
    punti: ["Controllo del tetto con foto e drone", "Isolamento e guaina inclusi", "Ponteggio e smaltimento a nostro carico", "Garanzia 10 anni sulle infiltrazioni"],
    recensione: ["«Niente più secchi in soffitta, e la casa è più calda.»", "Roberto F., Abano"],
    domande: [["Che tetto hai?", "A falde, 120 mq"], ["Qual è il problema?", "Infiltrazioni"], ["Quando vuoi intervenire?", "Prima dell'inverno"]],
    consulente: "Tecnico coperture", cliente: "Roberto",
    messaggio: "come detto al telefono: saliamo a vedere il tetto con il drone.",
    appuntamento: "Sopralluogo tetto", dove: "ore 9:30 · Via Dante 21, Abano",
    notifiche: ["870 case in zona", "Pagina aperta", "Urgenza vera: buono", "Richiamato in 4 min", "In agenda"],
  },
  impianti: {
    azienda: "Termo Ferri", sigla: "TF", zona: "Torino e cintura",
    annuncio: <>Caldaia vecchia? Ti diciamo <b>quanto risparmi</b> con la pompa di calore, prima di spendere.</>,
    foto: "caldaia", didascalia: "Impianto a Collegno", sottoCta: "Calcolo del risparmio",
    titoloPagina: "Riscaldamento nuovo, bolletta più leggera.",
    punti: ["Calcolo del risparmio sulla tua casa", "Installazione in giornata", "Pratiche incentivi incluse", "Assistenza con tecnico nostro"],
    recensione: ["«Inverno passato a 21 gradi, e abbiamo speso meno.»", "Sara M., Rivoli"],
    domande: [["Cosa hai adesso?", "Caldaia a gas del 2009"], ["Quanto è grande la casa?", "110 mq"], ["Quando vuoi cambiarla?", "Prima dell'inverno"]],
    consulente: "Tecnico impianti", cliente: "Sara",
    messaggio: "come d'accordo: veniamo a vedere caldaia e termosifoni.",
    appuntamento: "Sopralluogo impianto", dove: "ore 14:30 · Corso Francia 90, Rivoli",
    notifiche: ["1.100 famiglie in zona", "Pagina aperta", "Caldaia vecchia: buono", "Richiamata in 3 min", "In agenda"],
  },
  imprese: {
    azienda: "Costruzioni Moretti", sigla: "CM", zona: "Verona e provincia",
    annuncio: <>Casa nuova o ampliamento? <b>Prezzo chiuso</b> e tempi scritti, dal progetto alle chiavi.</>,
    foto: "casa", didascalia: "Villetta a Bussolengo", sottoCta: "Primo incontro gratuito",
    titoloPagina: "Costruisci con prezzo chiuso e tempi scritti.",
    punti: ["Progetto e permessi seguiti da noi", "Prezzo chiuso nel contratto", "Foto del cantiere ogni settimana", "Consegna chiavi in mano"],
    recensione: ["«Prezzo firmato all'inizio, nessuna sorpresa alla fine.»", "Famiglia Zanetti, Pescantina"],
    domande: [["Terreno o casa esistente?", "Terreno già nostro"], ["Quanti metri quadri?", "140 mq"], ["Quando vuoi partire?", "Entro un anno"]],
    consulente: "Ufficio tecnico", cliente: "Luca",
    messaggio: "come d'accordo: vi aspettiamo in ufficio con il progetto.",
    appuntamento: "Incontro in ufficio", dove: "ore 18:30 · Via Mazzini 3, Bussolengo",
    notifiche: ["2.300 persone in zona", "Pagina aperta", "Terreno pronto: buono", "Richiamato in 5 min", "In agenda"],
  },
};

/** La foto del lavoro nell'annuncio, disegnata. */
export function FotoLavoro({ tipo }: { tipo: Foto }) {
  if (tipo === "finestre")
    return (
      <div className="relative h-full overflow-hidden bg-gradient-to-b from-sky-300 to-sky-100">
        <div className="absolute inset-x-6 bottom-0 top-8 rounded-t-md bg-[#efe6d8] shadow-inner" />
        {[0, 1].map((k) => (
          <div key={k} className="absolute top-14 h-[70px] w-[56px] rounded-sm border-[5px] border-white bg-sky-200 shadow" style={{ left: 34 + k * 82 }}>
            <div className="absolute inset-y-0 left-1/2 w-[3px] -translate-x-1/2 bg-white" />
            <div className="absolute left-1 top-1 h-6 w-3 rotate-12 bg-white/60" />
          </div>
        ))}
      </div>
    );
  return (
    <svg viewBox="0 0 200 150" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      {tipo === "pannelli" && (
        <>
          <rect width="200" height="150" fill="#7dd3fc" />
          <circle cx="168" cy="26" r="14" fill="#fde047" />
          <path d="M0 150V96L100 40l100 56v54z" fill="#b45309" />
          <path d="M28 104l72-40 72 40" fill="none" stroke="#92400e" strokeWidth="3" />
          {[0, 1].map((r) => [0, 1, 2, 3, 4, 5].map((c) => (
            <rect key={`${r}${c}`} x={30 + c * 24} y={86 + r * 18} width="22" height="16" rx="1.5" fill="#1e3a8a" stroke="#93c5fd" strokeWidth="1" />
          )))}
          <path d="M30 92l140 18" stroke="#fff" strokeOpacity=".22" strokeWidth="5" />
        </>
      )}
      {tipo === "bagno" && (
        <>
          <rect width="200" height="150" fill="#f1f5f9" />
          {Array.from({ length: 40 }, (_, k) => <rect key={k} x={(k % 8) * 25} y={Math.floor(k / 8) * 22} width="24" height="21" fill={k % 3 ? "#e2e8f0" : "#cbd5e1"} />)}
          <rect x="0" y="110" width="200" height="40" fill="#d6d3d1" />
          <rect x="24" y="74" width="62" height="40" rx="6" fill="#fff" stroke="#94a3b8" />
          <rect x="44" y="40" width="22" height="28" rx="3" fill="#bae6fd" stroke="#94a3b8" />
          <path d="M120 30v80M120 30h34" stroke="#94a3b8" strokeWidth="4" fill="none" />
          <rect x="114" y="30" width="62" height="90" fill="#e0f2fe" fillOpacity=".55" stroke="#94a3b8" />
          <circle cx="150" cy="42" r="8" fill="#94a3b8" />
        </>
      )}
      {tipo === "tetto" && (
        <>
          <rect width="200" height="150" fill="#bae6fd" />
          <path d="M0 150V100L100 30l100 70v50z" fill="#efe6d8" />
          <path d="M-6 104L100 26l106 78" fill="none" stroke="#7c2d12" strokeWidth="8" />
          {Array.from({ length: 6 }, (_, r) => <path key={r} d={`M${100 - (r + 1) * 15} ${38 + r * 11}h${(r + 1) * 30}`} stroke="#c2410c" strokeWidth="8" />)}
          <rect x="84" y="112" width="32" height="38" fill="#a16207" />
          <rect x="28" y="110" width="26" height="22" fill="#bae6fd" stroke="#fff" strokeWidth="3" />
          <rect x="146" y="110" width="26" height="22" fill="#bae6fd" stroke="#fff" strokeWidth="3" />
        </>
      )}
      {tipo === "caldaia" && (
        <>
          <rect width="200" height="150" fill="#fef3c7" />
          <rect x="70" y="18" width="60" height="84" rx="8" fill="#fff" stroke="#94a3b8" />
          <rect x="80" y="28" width="40" height="14" rx="3" fill="#0f172a" />
          <text x="100" y="39" textAnchor="middle" fontSize="10" fontWeight="800" fill="#4ade80">21°</text>
          <path d="M86 102v30M100 102v30M114 102v30" stroke="#ef4444" strokeWidth="4" />
          <path d="M100 102v30" stroke="#3b82f6" strokeWidth="4" />
          {[0, 1, 2, 3, 4].map((k) => <rect key={k} x={146 + k * 9} y="70" width="7" height="50" rx="3" fill="#fff" stroke="#94a3b8" />)}
          <rect x="10" y="60" width="40" height="60" rx="4" fill="#e2e8f0" stroke="#94a3b8" />
          <circle cx="30" cy="90" r="13" fill="none" stroke="#64748b" strokeWidth="3" />
        </>
      )}
      {tipo === "casa" && (
        <>
          <rect width="200" height="150" fill="#bae6fd" />
          <rect y="128" width="200" height="22" fill="#86efac" />
          <path d="M38 128V74l52-34 52 34v54z" fill="#f5efe6" stroke="#a8a29e" />
          <path d="M30 78l60-42 60 42" fill="none" stroke="#c2410c" strokeWidth="7" strokeLinejoin="round" />
          <rect x="78" y="96" width="24" height="32" fill="#b45309" />
          <rect x="50" y="88" width="18" height="16" fill="#bae6fd" stroke="#fff" strokeWidth="2" />
          <rect x="112" y="88" width="18" height="16" fill="#bae6fd" stroke="#fff" strokeWidth="2" />
          <path d="M168 128V30M160 30h-60" stroke="#f5be0f" strokeWidth="4" />
          <path d="M120 30v26" stroke="#334155" strokeWidth="1.5" />
          <rect x="114" y="56" width="12" height="9" fill="#e07a4f" />
        </>
      )}
    </svg>
  );
}
