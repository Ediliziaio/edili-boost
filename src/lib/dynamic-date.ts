const MESI_IT = [
  "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
  "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre",
] as const;

const now = new Date();

/** "Aprile 2026" */
export const meseAnnoCorrente = `${MESI_IT[now.getMonth()]} ${now.getFullYear()}`;

/** "aprile 2026" (minuscolo) */
export const meseAnnoCorrenteLower = `${MESI_IT[now.getMonth()].toLowerCase()} ${now.getFullYear()}`;

/** "aprile" */
export const meseCorrente = MESI_IT[now.getMonth()].toLowerCase();

/** "Aprile" */
export const meseCorrenteCap = MESI_IT[now.getMonth()];

/** Mese successivo: "maggio" */
export const meseProssimo = MESI_IT[(now.getMonth() + 1) % 12].toLowerCase();

/** Posti disponibili questo mese (fisso a 2 su 3) */
export const postiDisponibili = 2;
export const postiTotali = 3;
