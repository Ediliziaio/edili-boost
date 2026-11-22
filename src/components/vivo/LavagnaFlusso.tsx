import { lazy, Suspense, useEffect, useRef, useState, type CSSProperties } from "react";
import type { WorkflowApp, WorkflowGraph } from "@/components/ui/interactive-workflow-blueprint";

// L'editor pesa: si scarica solo quando la sezione sta per entrare nello schermo.
const WorkflowBlueprint = lazy(() => import("@/components/ui/interactive-workflow-blueprint"));

const nodo = (id: string, x: number, y: number, label: string, detail: string, kind: WorkflowGraph["nodes"][number]["data"]["kind"], tool: string, live: string) =>
  ({ id, type: "blueprint" as const, position: { x, y }, data: { label, detail, kind, tool, live } });

const GRAFO: WorkflowGraph = {
  nodes: [
    nodo("annuncio", 0, 40, "Annuncio in zona", "Foto dei tuoi lavori veri, mostrata solo dove lavori.", "trigger", "Facebook", "Annuncio visto da 1.240 persone a Varese e dintorni"),
    nodo("modulo", 290, 200, "Modulo con 3 domande", "Casa di proprietà, lavoro da fare, quando: arriva chi è pronto.", "integration", "Pagina dedicata", "Marco R.: casa sua, 6 finestre, lavori entro 3 mesi"),
    nodo("richiamata", 580, 40, "Richiamata entro 5 minuti", "Il contatto viene chiamato finché ha in testa il suo problema.", "review", "Telefono", "Marco richiamato dopo 4 minuti: contatto buono"),
    nodo("appuntamento", 870, 200, "Appuntamento in agenda", "Sopralluogo fissato, con promemoria su WhatsApp il giorno prima.", "delivery", "Agenda", "Sopralluogo giovedì 17:30, promemoria WhatsApp programmato"),
  ],
  edges: [
    { id: "a-m", source: "annuncio", target: "modulo" },
    { id: "m-r", source: "modulo", target: "richiamata" },
    { id: "r-p", source: "richiamata", target: "appuntamento" },
  ],
};

const AZIONI: WorkflowApp[] = [
  { id: "ai", name: "Assistente AI", actions: [
    { label: "Scarta i contatti fuori zona", detail: "Chi chiede lavori dove non arrivi non intasa l'agenda.", kind: "agent", tool: "Assistente AI" },
    { label: "Riassume le risposte", detail: "Al telefono sai già cosa ha chiesto e cosa gli serve.", kind: "agent", tool: "Assistente AI" },
  ] },
  { id: "meta", name: "Facebook e Instagram", actions: [
    { label: "Annuncio con i lavori finiti", detail: "Prima e dopo dei tuoi cantieri, nella tua zona.", kind: "trigger", tool: "Facebook" },
    { label: "Riattiva i vecchi contatti", detail: "Chi aveva chiesto un preventivo mesi fa rivede l'offerta.", kind: "trigger", tool: "Instagram" },
  ] },
  { id: "whatsapp", name: "WhatsApp", actions: [
    { label: "Chiedi le foto della casa", detail: "Arrivi al sopralluogo sapendo già cosa trovi.", kind: "integration", tool: "WhatsApp" },
    { label: "Promemoria il giorno prima", detail: "Meno appuntamenti a vuoto, senza telefonate in più.", kind: "delivery", tool: "WhatsApp" },
  ] },
  { id: "agenda", name: "Agenda e ufficio", actions: [
    { label: "Avvisa il commerciale", detail: "Chi va al sopralluogo riceve scheda e risposte del contatto.", kind: "delivery", tool: "Agenda" },
    { label: "Controllo del titolare", detail: "Gli appuntamenti grossi passano prima da te.", kind: "review", tool: "Ufficio" },
  ] },
];

const COLORI = {
  "--color-background": "hsl(213 65% 5%)",
  "--color-foreground": "#f1f5f9",
  "--color-card": "hsl(213 50% 10%)",
  "--color-muted-foreground": "#94a3b8",
  "--color-border": "rgba(255,255,255,.14)",
  "--color-primary": "hsl(45 93% 51%)",
  "--color-primary-foreground": "#0b1220",
  "--color-chart-2": "#fde68a",
  "--color-chart-3": "#34d399",
  "--wb-radius": "24px",
} as CSSProperties;

export default function LavagnaFlusso() {
  const box = useRef<HTMLDivElement>(null);
  const [vicino, setVicino] = useState(false);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVicino(true);
        io.disconnect();
      }
    }, { rootMargin: "600px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-narrow relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Il sistema, mentre lavora</span>
          <h2 className="mt-4 text-3xl font-black leading-tight text-foreground md:text-4xl">Guarda un contatto diventare un appuntamento.</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Annuncio, modulo, richiamata, agenda: i passaggi si accendono uno dopo l'altro, come succede ogni giorno nel sistema
            che costruiamo. Puoi spostarli o aggiungerne altri dalla colonna a destra.
          </p>
        </div>
        <div ref={box} className="mt-10 min-h-[560px]">
          {vicino && (
            <Suspense fallback={<div className="h-[560px] rounded-3xl border border-white/10 bg-white/[0.03]" />}>
              <WorkflowBlueprint vetrina title="Il percorso di un contatto" subtitle="Sistema d'esempio" oraInizio="09:41" initialGraph={GRAFO} apps={AZIONI} style={COLORI} />
            </Suspense>
          )}
        </div>
      </div>
    </section>
  );
}
