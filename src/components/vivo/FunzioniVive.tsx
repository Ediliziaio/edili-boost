import { CalendarDays, Megaphone, MessageCircle, Search } from "lucide-react";
import InkOrbitFeatures from "@/components/ui/ink-orbit-features";

/** Navy e oro del sito, per la sezione a riquadri. */
export const PALETTE_NAVY_ORO: Record<string, string> = {
  "--ib-page": "hsl(213 65% 5%)",
  "--ib-hatch": "rgba(255,255,255,.035)",
  "--ib-paper": "hsl(213 60% 8%)",
  "--ib-card": "hsl(213 50% 10%)",
  "--ib-raise": "hsl(213 45% 13%)",
  "--ib-ink": "#f1f5f9",
  "--ib-accent": "hsl(45 93% 51%)",
  "--ib-soft": "#cbd5e1",
  "--ib-muted": "#94a3b8",
  "--ib-faint": "#64748b",
  "--ib-line": "rgba(255,255,255,.08)",
  "--ib-line-strong": "rgba(255,255,255,.16)",
  "--ib-bracket": "rgba(245,190,15,.35)",
  "--ib-inv": "hsl(45 93% 51%)",
  "--ib-inv-ink": "#0b1220",
  "--ib-radius": "28px",
  "--ib-card-radius": "18px",
};

/** Il sistema di acquisizione, in tre schemi vivi. Cifre d'esempio. */
export default function FunzioniVive() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-narrow relative z-10">
        <InkOrbitFeatures
          theme="dark"
          chip="Marketing"
          mark={Megaphone}
          tag="Il sistema, dietro le quinte"
          title={"I contatti arrivano,\n*tu chiudi i lavori*"}
          team={[
            { name: "Laura · campagne in zona" },
            { name: "Davide · richiama i contatti" },
            { name: "Sara · fissa gli appuntamenti" },
            { name: "Tu · in showroom" },
            { name: "Marco · fuori ufficio", idle: true },
          ]}
          collaboration={{
            title: "Il tuo ufficio e il nostro, sullo stesso contatto",
            description: "Vedi chi è stato richiamato, quando e com'è andata: tu, i tuoi commerciali e il nostro team lavorate sulla stessa scheda.",
          }}
          reports={{
            title: "Ogni contatto, con la sua scheda",
            description: "Da quale annuncio arriva, cosa ha risposto alle domande, quando è stato richiamato: tutto scritto, niente perso.",
          }}
          labels={{ report: "CONTATTO N.", forecast: "PREVISIONE", syncing: "collego", connected: "canali collegati", pred: "prev.", period: "sett.", formatValue: (v) => `${v} appuntamenti` }}
          reportStart={318}
          integrations={{
            title: "Collegato a quello che usi",
            description: "Facebook, Google, WhatsApp e la tua agenda parlano tra loro: il contatto non si perde tra un'app e l'altra.",
            tools: [
              { name: "Facebook", icon: Megaphone },
              { name: "Google", icon: Search },
              { name: "WhatsApp", icon: MessageCircle },
              { name: "Agenda", icon: CalendarDays },
            ],
          }}
          insights={{
            title: "Appuntamenti, settimana dopo settimana",
            description: "Quanti appuntamenti si fissano ogni settimana e dove vanno le prossime con le campagne attive. Cifre d'esempio: passa il dito sul grafico.",
            values: [4, 5, 5, 7, 6, 8, 9, 10, 9, 12, 13, 15],
            forecastFrom: 8,
          }}
          palette={PALETTE_NAVY_ORO}
          style={{ padding: 0, background: "transparent" }}
        />
      </div>
    </section>
  );
}
