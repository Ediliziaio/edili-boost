import { AnimatedSection } from "@/components/AnimatedSection";
import TelefonoSistema from "./TelefonoSistema";
import type { TELEFONO } from "./telefonoSettori";

type Settore = keyof typeof TELEFONO;

/** Il sistema visto dal telefono del cliente, con annuncio, pagina e domande del settore. */
export default function SistemaEsplosoSection({ oggetto, settore }: { oggetto: string; settore: string }) {
  const chiave: Settore =
    oggetto === "finestra" ? "serramenti"
    : oggetto === "fotovoltaico" ? "fotovoltaico"
    : oggetto === "caldaia" ? "impianti"
    : oggetto === "casa" ? (settore.includes("tetti") ? "tetti" : "ristrutturazioni")
    : "imprese";
  return (
    <section className="section-padding bg-navy-light/40 relative overflow-hidden">
      <div className="container-narrow relative z-10">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Il sistema, dal telefono del cliente</span>
            <h2 className="mt-4 text-3xl font-black leading-tight text-foreground md:text-4xl">
              Cinque passaggi che lavorano insieme per {settore}.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Un annuncio da solo non porta clienti. Li porta la catena intera: chi vede, chi lascia il numero, chi viene richiamato
              subito e chi si siede davanti a te. Ecco cosa vede il tuo cliente, passo dopo passo.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <div className="mx-auto mt-10 max-w-4xl">
            <TelefonoSistema settore={chiave} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
