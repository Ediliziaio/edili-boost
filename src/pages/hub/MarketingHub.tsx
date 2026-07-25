import { ArrowRight, CheckCircle2, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { AnimatedSection } from "@/components/AnimatedSection";
import { LeadConnectorForm } from "@/components/blog/LeadConnectorForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  siteConfig,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateProfessionalServiceSchema,
} from "@/lib/seo";
import { marketingHubs } from "@/data/marketingHubs.js";

interface MarketingHubProps {
  /** Chiave dell'hub in src/data/marketingHubs.js, es. "marketing-serramenti" */
  hubKey: string;
}

/**
 * Pagina HUB di un silo verticale (modello hub & spoke).
 * Presidia la keyword "agenzia marketing <verticale>" e raccoglie i link degli spoke.
 * Formato AEO-first: risposta secca in apertura, H2 autonomi, frase-entità e frase
 * citabile testuali, FAQ + FAQPage JSON-LD.
 */
export default function MarketingHub({ hubKey }: MarketingHubProps) {
  const hub = marketingHubs[hubKey];
  if (!hub) return null;

  const pageUrl = `${siteConfig.url}/${hub.slug}`;

  return (
    <>
      <SEOHead
        title={hub.title}
        description={hub.description}
        keywords={hub.keywords}
        url={pageUrl}
        jsonLd={[
          generateProfessionalServiceSchema(),
          generateFAQSchema(hub.faqs),
          generateBreadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: hub.title, url: pageUrl },
          ]),
        ]}
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-24">
        {/* HERO — risposta secca in apertura (blocco estratto dagli LLM) */}
        <section className="container py-16 md:py-20">
          <AnimatedSection>
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-secondary">
                <Target className="h-4 w-4" />
                {hub.eyebrow}
              </span>
              <h1 className="mt-7 text-4xl font-black leading-tight text-foreground md:text-5xl">
                {hub.h1}
              </h1>
              <p className="mt-6 text-xl font-semibold leading-relaxed text-foreground">
                {hub.answer}
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {hub.entityPhrase} {hub.intro}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/contattaci">
                    Richiedi una valutazione gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/casi-studio">Vedi i casi studio</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* METRICHE */}
        <section className="border-y border-border bg-card py-10">
          <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hub.metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-border bg-background p-5">
                <p className="text-3xl font-black text-secondary">{metric.value}</p>
                <p className="mt-2 text-sm font-semibold text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FRASE CITABILE */}
        <section className="container py-14">
          <AnimatedSection>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-secondary bg-card px-6 py-6 text-xl font-semibold leading-relaxed text-foreground">
              {hub.citable}
            </blockquote>
          </AnimatedSection>
        </section>

        {/* COSA CAMBIA */}
        <section className="border-y border-border bg-card py-14">
          <div className="container">
            <h2 className="text-3xl font-black text-foreground">
              Cosa cambia rispetto a un'agenzia generalista
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {hub.sections.map((section) => (
                <article key={section.title} className="rounded-xl border border-border bg-background p-6">
                  <CheckCircle2 className="h-6 w-6 text-secondary" />
                  <h3 className="mt-4 text-xl font-black text-foreground">{section.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{section.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COME FUNZIONA */}
        <section className="container py-16">
          <h2 className="text-3xl font-black text-foreground">Come funziona, passo per passo</h2>
          <div className="mt-8 space-y-4">
            {hub.steps.map((step, index) => (
              <div key={step.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-black text-secondary">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-black text-foreground">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-y border-border bg-card py-16">
          <div className="container-narrow">
            <h2 className="heading-section mb-8 text-center text-foreground">Domande frequenti</h2>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="space-y-4">
                {hub.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-xl border border-border bg-background px-6 transition-colors data-[state=open]:border-gold/50"
                  >
                    <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:text-gold hover:no-underline md:text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* APPROFONDIMENTI (spoke del silo) + FORM */}
        <section className="container grid gap-10 py-16 lg:grid-cols-[1fr_380px]">
          <div>
            <h2 className="text-3xl font-black text-foreground">Approfondimenti</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Le guide del silo, dalla generazione dei contatti alla chiusura del preventivo.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {hub.spokes.map((spoke) => (
                <Link
                  key={spoke.href}
                  to={spoke.href}
                  className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-4 font-semibold text-foreground transition-colors hover:text-secondary"
                >
                  <span className="text-sm">{spoke.label}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link
                to={hub.sectorLink.href}
                className="inline-flex items-center gap-2 font-semibold text-secondary hover:underline"
              >
                {hub.sectorLink.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <aside>
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl font-black text-foreground">Richiedi la valutazione gratuita</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Analizziamo zona, offerta e margini e ti diciamo con onestà se possiamo generare
                vendite. Massimo 3 nuovi clienti al mese.
              </p>
              <div className="mt-5">
                <LeadConnectorForm />
              </div>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
