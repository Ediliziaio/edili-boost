// Prenotazione della consulenza sul calendario pubblico di Edilizia in Cloud.
//
// Verificato dal vivo il 09/09/2026:
//  - su `admin.ediliziaincloud.com` la pagina FUNZIONA (mostra "Consulenza
//    marketing edile", 45 minuti, calendario con gli slot). Su `app.*` invece
//    va in 401 e mostra "Calendario momentaneamente non disponibile":
//    usare sempre admin.*
//  - ENTRAMBI gli host rispondono con `X-Frame-Options: SAMEORIGIN`, quindi
//    dentro un <iframe> su marketingedile.com il browser non renderizza nulla
//    (riquadro vuoto: verificato con l'iframe diretto E con lo script ufficiale
//    `prenota.js`, che internamente costruisce lo stesso iframe con ?embed=1 —
//    l'header c'e' anche li'). Il Form Builder (/f) si embedda perche' passa
//    dal proxy Cloudflare e quell'header non ce l'ha.
//
// Quindi oggi si apre in una scheda nuova. Il giorno in cui su EiC l'header
// sara' tolto per /prenota* (o sostituito da un CSP `frame-ancestors` che
// autorizza marketingedile.com — nel CSP attuale c'e' solo `frame-src`, che
// riguarda i figli, non chi puo' incorniciare), basta mettere true qui sotto.
export const CALENDARIO_IN_PAGINA = false;

export const BOOKING_URL =
  "https://admin.ediliziaincloud.com/prenota/consulenza-marketing-edile";

export function BookingCalendarEmbed() {
  return (
    <iframe
      title="Prenotazione appuntamento"
      src={BOOKING_URL}
      width="100%"
      height="760"
      loading="lazy"
      style={{ border: 0, borderRadius: 12, overflow: "hidden" }}
    />
  );
}

export default BookingCalendarEmbed;
