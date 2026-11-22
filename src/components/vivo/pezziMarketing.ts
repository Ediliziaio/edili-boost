import { CalendarCheck, Filter, Globe, Megaphone, PhoneCall, type LucideIcon } from "lucide-react";

export type PezzoEsploso = { name: string; desc: string; icon: LucideIcon };

/** Le cinque parti del sistema di acquisizione, una per pezzo dell'oggetto esploso. */
export const pezziMarketing: PezzoEsploso[] = [
  { name: "Annunci nella tua zona", desc: "Facebook e Google solo dove lavori, con le foto dei tuoi lavori veri.", icon: Megaphone },
  { name: "Pagina dedicata", desc: "Una pagina per ogni servizio, che spiega e filtra prima ancora del contatto.", icon: Globe },
  { name: "Contatti filtrati", desc: "Le domande giuste nel modulo: arriva chi ha budget e tempi chiari, non i curiosi.", icon: Filter },
  { name: "Richiamata in 5 minuti", desc: "Il contatto viene richiamato subito, finché ha ancora in testa il suo problema.", icon: PhoneCall },
  { name: "Appuntamento in agenda", desc: "Sopralluogo o visita in showroom fissati, con promemoria su WhatsApp.", icon: CalendarCheck },
];
