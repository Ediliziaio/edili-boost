/**
 * TelefonoSistema — il sistema visto dal telefono del cliente.
 * Un telefono vero mostra, una schermata dopo l'altra, il percorso del contatto:
 * vede l'annuncio, apre la pagina, risponde alle domande, viene richiamato,
 * riceve la conferma dell'appuntamento. Accanto, le cinque tappe si accendono.
 *
 * Esempio di fantasia (lo dice l'etichetta). Parte solo quando è sullo schermo;
 * toccando una tappa si salta lì. Con prefers-reduced-motion resta fermo.
 */
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Check, Star } from "lucide-react";
import { pezziMarketing } from "./pezziMarketing";
import { TELEFONO, FotoLavoro, type CfgTelefono } from "./telefonoSettori";

const PASSO_MS = 3600;

const CSS = `
@keyframes ts-in { from { opacity: 0; transform: translateY(10px) scale(.97) } to { opacity: 1; transform: none } }
@keyframes ts-tap { 0%,55% { opacity: 0; transform: scale(.4) } 62% { opacity: .9; transform: scale(1) } 80% { opacity: 0; transform: scale(1.8) } 100% { opacity: 0 } }
@keyframes ts-press { 0%,58% { transform: none } 64% { transform: scale(.94) } 72%,100% { transform: none } }
@keyframes ts-scroll { 0%,15% { transform: translateY(0) } 85%,100% { transform: translateY(-78px) } }
@keyframes ts-ring { 0% { transform: scale(1); opacity: .55 } 100% { transform: scale(2.3); opacity: 0 } }
@keyframes ts-shake { 0%,100% { transform: rotate(0) } 20% { transform: rotate(-12deg) } 40% { transform: rotate(10deg) } 60% { transform: rotate(-8deg) } 80% { transform: rotate(6deg) } }
@keyframes ts-bar { from { transform: scaleX(0) } to { transform: scaleX(1) } }
@keyframes ts-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-6px) } }
.ts-in { opacity: 0; animation: ts-in .5s cubic-bezier(.2,.8,.2,1) forwards; }
.ts-tap { animation: ts-tap 2.4s ease-out forwards; }
.ts-press { animation: ts-press 2.4s ease-out forwards; }
.ts-scroll { animation: ts-scroll 3.2s cubic-bezier(.45,.05,.3,1) forwards; }
.ts-ring { animation: ts-ring 1.5s ease-out infinite; }
.ts-shake { animation: ts-shake .9s ease-in-out infinite; }
.ts-bar { transform-origin: left; animation: ts-bar linear forwards; }
.ts-float { animation: ts-float 4s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .ts-in, .ts-tap, .ts-press, .ts-scroll, .ts-ring, .ts-shake, .ts-bar, .ts-float { animation: none !important; opacity: 1 !important; }
}
`;

const d = (s: number) => ({ animationDelay: `${s}s` });

// ───────────── Le cinque schermate ─────────────

function Annuncio({ c }: { c: CfgTelefono }) {
  return (
    <div className="flex h-full flex-col bg-[#f0f2f5] pt-9 text-[#050505]">
      <div className="flex items-center gap-2 bg-white px-3 py-2">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-gold text-[10px] font-black text-navy-dark">{c.sigla}</span>
        <div className="leading-tight">
          <p className="text-[11px] font-bold">{c.azienda}</p>
          <p className="text-[9px] text-[#65676b]">Sponsorizzato · {c.zona}</p>
        </div>
      </div>
      <p className="bg-white px-3 pb-2 text-[10.5px] leading-snug">
        {c.annuncio}
      </p>
      {/* foto di un lavoro vero, disegnata */}
      <div className="relative h-[150px] overflow-hidden">
        <FotoLavoro tipo={c.foto} />
        <span className="absolute left-2 top-2 rounded bg-black/55 px-1.5 py-0.5 text-[8px] font-bold text-white">{c.didascalia}</span>
      </div>
      <div className="flex items-center justify-between bg-white px-3 py-2.5">
        <div className="leading-tight">
          <p className="text-[8.5px] uppercase text-[#65676b]">{c.azienda.toLowerCase().replace(/ /g, "")}.it</p>
          <p className="text-[10.5px] font-bold">{c.sottoCta}</p>
        </div>
        <span className="ts-press relative rounded-md bg-[#e4e6eb] px-2.5 py-1.5 text-[10px] font-bold" style={d(0.2)}>
          Richiedi
          <span className="ts-tap absolute -right-1 -top-1 h-7 w-7 rounded-full bg-gold/70" style={d(0.2)} />
        </span>
      </div>
      <div className="flex justify-around bg-white px-3 pb-2 text-[9px] text-[#65676b]">
        <span>👍 128</span>
        <span>14 commenti</span>
      </div>
    </div>
  );
}

function Pagina({ c }: { c: CfgTelefono }) {
  return (
    <div className="h-full overflow-hidden bg-white pt-9 text-navy-dark">
      <div className="ts-scroll">
        <div className="bg-navy-dark px-4 pb-5 pt-4 text-white">
          <p className="text-[8.5px] font-bold uppercase tracking-widest text-gold">{c.azienda} · {c.zona.split(" ")[0]}</p>
          <p className="mt-1.5 text-[15px] font-black leading-tight">{c.titoloPagina}</p>
          <div className="mt-2 flex items-center gap-0.5 text-gold">
            {[0, 1, 2, 3, 4].map((k) => <Star key={k} className="h-2.5 w-2.5 fill-current" />)}
            <span className="ml-1 text-[8.5px] text-white/70">4,9 su 212 recensioni</span>
          </div>
          <span className="mt-3 inline-block rounded-md bg-gold px-3 py-1.5 text-[10px] font-black text-navy-dark">Prenota il sopralluogo</span>
        </div>
        <div className="space-y-2 px-4 py-3">
          {c.punti.map((t, k) => (
            <p key={t} className="ts-in flex items-center gap-2 text-[10.5px] font-semibold" style={d(0.3 + k * 0.25)}>
              <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-emerald-500 text-white"><Check className="h-2.5 w-2.5" strokeWidth={4} /></span>
              {t}
            </p>
          ))}
        </div>
        <div className="mx-4 rounded-lg bg-slate-100 p-2.5">
          <p className="text-[9.5px] italic leading-snug text-slate-600">{c.recensione[0]}</p>
          <p className="mt-1 text-[8.5px] font-bold">{c.recensione[1]}</p>
        </div>
        <div className="mx-4 mt-3 grid grid-cols-3 gap-1.5">
          {["bg-sky-200", "bg-amber-100", "bg-emerald-100"].map((c) => <div key={c} className={`h-12 rounded ${c}`} />)}
        </div>
      </div>
    </div>
  );
}

function Modulo({ c }: { c: CfgTelefono }) {
  const domande = c.domande;
  return (
    <div className="flex h-full flex-col bg-slate-50 px-4 pt-11 text-navy-dark">
      <p className="text-[8.5px] font-bold uppercase tracking-widest text-slate-400">Passo 2 di 2</p>
      <p className="text-[14px] font-black leading-tight">Tre domande, poi ti richiamiamo</p>
      <div className="mt-3 space-y-2.5">
        {domande.map(([q, a], k) => (
          <div key={q}>
            <p className="text-[9.5px] font-semibold text-slate-500">{q}</p>
            <div className="ts-in mt-1 flex items-center justify-between rounded-lg border-2 border-gold bg-gold/10 px-2.5 py-1.5 text-[10.5px] font-bold" style={d(0.3 + k * 0.55)}>
              {a}
              <Check className="h-3 w-3 text-gold" strokeWidth={4} />
            </div>
          </div>
        ))}
      </div>
      <div className="ts-in mt-auto mb-4 rounded-xl bg-emerald-500 p-2.5 text-center text-white" style={d(2.1)}>
        <p className="text-[11px] font-black">Richiesta inviata ✓</p>
        <p className="text-[8.5px] opacity-90">Ti chiamiamo entro pochi minuti</p>
      </div>
    </div>
  );
}

function Chiamata({ c }: { c: CfgTelefono }) {
  return (
    <div className="flex h-full flex-col items-center bg-gradient-to-b from-[#1b2a44] to-[#0a1222] px-4 pt-14 text-white">
      <p className="text-[9px] uppercase tracking-widest text-white/50">Chiamata in arrivo</p>
      <div className="mt-4 grid h-16 w-16 place-items-center rounded-full bg-gold text-lg font-black text-navy-dark">{c.sigla}</div>
      <p className="mt-3 text-[16px] font-bold">{c.azienda}</p>
      <p className="text-[10px] text-white/60">{c.consulente}</p>
      <span className="ts-in mt-4 rounded-full bg-white/10 px-3 py-1 text-[9.5px] font-semibold text-gold" style={d(0.4)}>
        {c.notifiche[3].replace("Richiamato in", "Richiamato dopo").replace("Richiamata in", "Richiamata dopo").replace(" min", " minuti")}
      </span>
      <div className="mt-auto mb-10 flex w-full justify-around">
        <div className="text-center">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-red-500 text-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5 rotate-[135deg] fill-current"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" /></svg>
          </div>
          <p className="mt-1.5 text-[9px] text-white/60">Rifiuta</p>
        </div>
        <div className="text-center">
          <div className="relative grid h-12 w-12 place-items-center rounded-full bg-emerald-500 text-white">
            <span className="ts-ring absolute inset-0 rounded-full bg-emerald-400" />
            <span className="ts-ring absolute inset-0 rounded-full bg-emerald-400" style={d(0.75)} />
            <svg viewBox="0 0 24 24" className="ts-shake relative h-5 w-5 fill-current"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" /></svg>
          </div>
          <p className="mt-1.5 text-[9px] text-white/60">Rispondi</p>
        </div>
      </div>
    </div>
  );
}

function Appuntamento({ c }: { c: CfgTelefono }) {
  return (
    <div className="flex h-full flex-col bg-[#efe7dd] pt-9 text-[#111b21]">
      <div className="flex items-center gap-2 bg-[#075e54] px-3 py-2 text-white">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-gold text-[10px] font-black text-navy-dark">{c.sigla}</span>
        <div className="leading-tight">
          <p className="text-[11px] font-bold">{c.azienda}</p>
          <p className="text-[8.5px] opacity-80">online</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 px-3 py-3">
        <div className="ts-in max-w-[85%] rounded-lg rounded-tl-none bg-white px-2.5 py-1.5 text-[10px] leading-snug shadow-sm" style={d(0.2)}>
          Ciao {c.cliente}, {c.messaggio}
        </div>
        <div className="ts-in max-w-[90%] overflow-hidden rounded-lg rounded-tl-none bg-white shadow-sm" style={d(0.8)}>
          <div className="flex items-center gap-2 border-b border-slate-100 px-2.5 py-2">
            <div className="w-9 overflow-hidden rounded-md text-center shadow">
              <p className="bg-red-500 text-[7px] font-bold uppercase text-white">gio</p>
              <p className="bg-white text-[13px] font-black leading-5">14</p>
            </div>
            <div className="leading-tight">
              <p className="text-[10.5px] font-bold">{c.appuntamento}</p>
              <p className="text-[9px] text-slate-500">{c.dove}</p>
            </div>
          </div>
          <p className="px-2.5 py-1.5 text-[9px] text-[#075e54]">Ti ricordiamo tutto il giorno prima 👍</p>
        </div>
        <div className="ts-in ml-auto max-w-[70%] rounded-lg rounded-tr-none bg-[#d9fdd3] px-2.5 py-1.5 text-[10px] shadow-sm" style={d(1.6)}>
          Perfetto, a giovedì! <span className="text-[8px] text-sky-500">✓✓</span>
        </div>
        <div className="ts-in mx-auto mt-auto rounded-full bg-emerald-600 px-3 py-1 text-[9.5px] font-bold text-white" style={d(2.3)}>
          Appuntamento in agenda ✓
        </div>
      </div>
    </div>
  );
}

const SCHERMATE: ((p: { c: CfgTelefono }) => ReactNode)[] = [Annuncio, Pagina, Modulo, Chiamata, Appuntamento];

export default function TelefonoSistema({ titolo = "Marketing Edile®", settore = "serramenti" }: { titolo?: string; settore?: keyof typeof TELEFONO }) {
  const c = TELEFONO[settore] ?? TELEFONO.serramenti;
  const box = useRef<HTMLDivElement>(null);
  const [visto, setVisto] = useState(false);
  const [passo, setPasso] = useState(0);
  const [pausaFino, setPausaFino] = useState(0);
  const [fermo, setFermo] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFermo(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => setVisto(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visto || fermo) return;
    const attesa = Math.max(PASSO_MS, pausaFino - Date.now());
    const t = window.setTimeout(() => setPasso((p) => (p + 1) % SCHERMATE.length), attesa);
    return () => window.clearTimeout(t);
  }, [visto, fermo, passo, pausaFino]);

  const scegli = (i: number) => {
    setPasso(i);
    setPausaFino(Date.now() + 9000);
  };

  const Schermo = SCHERMATE[passo];
  const corrente = pezziMarketing[passo];

  return (
    <div
      ref={box}
      className="relative isolate overflow-hidden rounded-[28px] border border-gold/25 bg-navy-dark p-4 shadow-[0_30px_80px_-40px_hsl(var(--gold)/0.45)] sm:p-7"
    >
      <style>{CSS}</style>
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl md:left-[30%]" />

      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-gold sm:text-[10px]">
          {titolo}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-emerald-300 sm:text-[10px]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          <span className="hidden sm:inline">Dal telefono del cliente · </span>Esempio
        </span>
      </div>

      <div className="mt-6 grid items-center gap-6 md:grid-cols-[auto_1fr] md:gap-10">
        {/* il telefono */}
        <div className="relative mx-auto">
          <div className="ts-float relative h-[440px] w-[214px] rounded-[2.6rem] border border-white/15 bg-[#0b0f17] p-[9px] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.04)_inset] sm:h-[480px] sm:w-[234px]">
            <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-white">
              <div key={passo} className="ts-in absolute inset-0" style={{ animationDuration: ".45s" }}>
                <Schermo c={c} />
              </div>
              {/* barra di stato e isola */}
              <div className="pointer-events-none absolute inset-x-0 top-0 flex h-8 items-center justify-between px-5 text-[9px] font-bold text-current mix-blend-difference">
                <span className="text-white">9:41</span>
                <span className="text-white">●●● 5G</span>
              </div>
              <div className="pointer-events-none absolute left-1/2 top-2 h-[18px] w-[70px] -translate-x-1/2 rounded-full bg-black" />
            </div>
          </div>
          {/* notifica che esce dal telefono */}
          <div key={`n${passo}`} className="ts-in absolute -bottom-4 left-1/2 -ml-[4.5rem] w-36 whitespace-nowrap text-center rounded-xl border border-gold/40 bg-navy/95 px-2.5 py-1.5 text-[10px] font-black text-gold shadow-lg sm:-right-14" style={d(0.6)}>
            {c.notifiche[passo]}
          </div>
        </div>

        {/* le tappe */}
        <div className="min-w-0">
          {/* telefono: tappe compatte */}
          <div className="md:hidden">
            <div className="flex items-center justify-between gap-1">
              {pezziMarketing.map((m, i) => {
                const Icon = m.icon;
                return (
                  <button key={m.name} type="button" onClick={() => scegli(i)} aria-label={m.name}
                    className={`relative grid h-10 w-10 place-items-center rounded-full border transition-colors ${i === passo ? "border-gold bg-gold text-navy-dark" : i < passo ? "border-gold/50 bg-gold/15 text-gold" : "border-white/15 bg-white/5 text-white/50"}`}>
                    <Icon className="h-4 w-4" />
                  </button>
                );
              })}
            </div>
            <div key={`m${passo}`} className="ts-in mt-4 rounded-2xl border border-gold/25 bg-white/[0.04] p-4">
              <p className="text-[11px] font-black uppercase tracking-widest text-gold">Tappa {passo + 1} di 5</p>
              <p className="mt-1 text-base font-black text-foreground">{corrente.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{corrente.desc}</p>
            </div>
          </div>

          {/* computer: elenco completo */}
          <ol className="relative hidden space-y-2 md:block">
            <span className="absolute bottom-6 left-[1.45rem] top-6 w-px bg-white/10" aria-hidden />
            {pezziMarketing.map((m, i) => {
              const Icon = m.icon;
              const on = i === passo;
              const fatto = i < passo;
              return (
                <li key={m.name}>
                  <button type="button" onClick={() => scegli(i)} onMouseEnter={() => scegli(i)}
                    className={`relative flex w-full items-start gap-4 rounded-2xl border p-3 text-left transition-all duration-300 ${on ? "border-gold/60 bg-gold/[0.08] shadow-[0_10px_30px_-12px_hsl(var(--gold)/0.6)]" : "border-transparent hover:bg-white/[0.03]"}`}>
                    <span className={`relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${on ? "border-gold bg-gold text-navy-dark" : fatto ? "border-gold/50 bg-navy-dark text-gold" : "border-white/15 bg-navy-dark text-white/40"}`}>
                      {fatto ? <Check className="h-5 w-5" strokeWidth={3} /> : <Icon className="h-5 w-5" />}
                    </span>
                    <span className="min-w-0 pt-1">
                      <span className={`block text-base font-black transition-colors ${on ? "text-foreground" : fatto ? "text-foreground/80" : "text-foreground/50"}`}>{m.name}</span>
                      <span className={`grid transition-all duration-300 ${on ? "mt-1 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                        <span className="overflow-hidden text-sm leading-relaxed text-muted-foreground">{m.desc}</span>
                      </span>
                      {on && visto && !fermo && (
                        <span className="mt-2 block h-[3px] overflow-hidden rounded-full bg-white/10">
                          <span key={`b${passo}-${pausaFino}`} className="ts-bar block h-full bg-gold" style={{ animationDuration: `${Math.max(PASSO_MS, pausaFino - Date.now())}ms` }} />
                        </span>
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
