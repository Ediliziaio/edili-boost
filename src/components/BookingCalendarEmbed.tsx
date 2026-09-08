// Calendario di prenotazione pubblico di Edilizia in Cloud (stile Calendly).
// Serve dopo l'invio del form: chi sceglie da solo lo slot si presenta molto più
// spesso di chi aspetta di essere richiamato.
//
// ATTENZIONE — oggi (08/09/2026) l'embed NON può funzionare, per due motivi lato EiC:
//   1. https://app.ediliziaincloud.com/prenota/* risponde con
//      `X-Frame-Options: SAMEORIGIN`, quindi il browser rifiuta di renderizzarlo
//      dentro un iframe su marketingedile.com. Il form (/f) non ha quell'header
//      — passa dal proxy Cloudflare — ed è per questo che quell'embed funziona.
//   2. La pagina pubblica /prenota/:slug va in 401 anche aperta da sola e mostra
//      "Calendario momentaneamente non disponibile": è rotta per chiunque non sia
//      loggato, non solo dentro l'iframe.
// Lo slug invece è corretto: "consulenza-marketing-edile" esiste ed è attivo.
//
// Appena i due punti sopra sono sistemati, basta mettere true qui sotto.
export const CALENDARIO_PRENOTAZIONE_ATTIVO = false;

export const BOOKING_URL =
  "https://app.ediliziaincloud.com/prenota/consulenza-marketing-edile";

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
