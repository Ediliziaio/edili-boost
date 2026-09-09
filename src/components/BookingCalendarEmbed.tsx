import { useEffect, useRef } from "react";

// Widget di prenotazione di Edilizia in Cloud montato dentro la pagina.
//
// Usa lo script ufficiale `prenota.js`: crea l'iframe verso
// /prenota/<slug>?embed=1, ne aggiorna l'altezza da solo via postMessage e,
// a prenotazione conclusa, emette sul window l'evento
// `eic:appuntamento-prenotato`.
//
// Host: admin.ediliziaincloud.com — NON app.*, che sulla stessa rotta va in 401
// e mostra "Calendario momentaneamente non disponibile".
//
// Storia utile: fino all'08/09/2026 /prenota* rispondeva con
// `X-Frame-Options: SAMEORIGIN` e QUALSIASI embed restava un riquadro vuoto
// (iframe diretto e prenota.js allo stesso modo). L'header e' stato rimosso e
// ora il widget renderizza. Se un domani tornasse, il sintomo e' esattamente
// quello: riquadro vuoto senza errori in console.
const SCRIPT_SRC = "https://admin.ediliziaincloud.com/prenota.js";
const SLUG = "consulenza-marketing-edile";

export const BOOKING_URL = `https://admin.ediliziaincloud.com/prenota/${SLUG}`;

interface Props {
  /** Chiamata quando l'appuntamento e' stato prenotato davvero. */
  onPrenotato?: () => void;
}

export function BookingCalendarEmbed({ onPrenotato }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    // Il montaggio e' idempotente lato script (attributo data-eic-montato), ma
    // in caso di navigazione SPA il div e' nuovo e va rimontato: ricarichiamo
    // lo script solo se il riquadro e' ancora vuoto.
    if (!host.querySelector("iframe")) {
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  useEffect(() => {
    if (!onPrenotato) return;
    window.addEventListener("eic:appuntamento-prenotato", onPrenotato);
    return () => window.removeEventListener("eic:appuntamento-prenotato", onPrenotato);
  }, [onPrenotato]);

  return <div ref={hostRef} data-prenota-inline={SLUG} data-height="760" />;
}

export default BookingCalendarEmbed;
