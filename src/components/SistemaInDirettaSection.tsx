import { AnimatedSection } from "./AnimatedSection";
import SistemaInDiretta from "./vivo/SistemaInDiretta";

const SistemaInDirettaSection = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-gold/5 blur-[130px]" />
    </div>
    <div className="container-narrow relative z-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
      <AnimatedSection>
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Come lavora il sistema</span>
        <h2 className="heading-section mt-4 text-foreground">
          Dall'annuncio al contratto.
          <br />
          <span className="text-gold">Senza contatti persi per strada.</span>
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Il problema non è avere contatti. È che metà si raffreddano prima che qualcuno li richiami.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Il sistema li prende appena arrivano, li richiama in pochi minuti, scarta chi non è pronto e ti mette in agenda solo
          chi vuole davvero fare i lavori. Tu entri in gioco quando c'è da chiudere.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.15}>
        <SistemaInDiretta />
      </AnimatedSection>
    </div>
  </section>
);

export default SistemaInDirettaSection;
