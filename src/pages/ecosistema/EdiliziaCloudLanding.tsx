import { ArrowRight, BarChart3, CheckCircle2, Cloud, ExternalLink, FileText, HardHat, ReceiptText, Smartphone, Users, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, siteConfig } from "@/lib/seo";
import { ediliziaCloudPages } from "@/data/ediliziaCloudContent";

type EdiliziaCloudPageKey = keyof typeof ediliziaCloudPages;

interface EdiliziaCloudLandingProps {
  pageKey: EdiliziaCloudPageKey;
}

export default function EdiliziaCloudLanding({ pageKey }: EdiliziaCloudLandingProps) {
  const page = ediliziaCloudPages[pageKey];
  const pageUrl = `${siteConfig.url}/ecosistema/${page.slug}`;
  const isMainCloudPage = pageKey === "edilizia-in-cloud";
  const moduleIcons = [HardHat, FileText, ReceiptText, BarChart3, Users, Smartphone];
  const faq = [
    {
      question: "Perché Marketing Edile parla di Edilizia in Cloud?",
      answer:
        "Perché fanno parte dello stesso ecosistema di gruppo e coprono due bisogni collegati: acquisire clienti qualificati e gestire il processo operativo dopo il contatto.",
    },
    {
      question: "Edilizia in Cloud sostituisce Marketing Edile?",
      answer:
        "No. Marketing Edile genera domanda e opportunità commerciali; Edilizia in Cloud aiuta l'impresa a organizzare CRM, preventivi, cantieri, documenti, fatture e margini.",
    },
    {
      question: "Queste pagine servono anche per la SEO?",
      answer:
        "Sì. Intercettano ricerche legate a gestionale edilizia, CRM edilizia, preventivi edilizia, gestione cantieri e controllo margini, collegandole al tema della crescita commerciale.",
    },
  ];

  return (
    <>
      <SEOHead
        title={page.title}
        description={page.description}
        keywords={page.keywords}
        url={pageUrl}
        jsonLd={[
          generateServiceSchema({
            name: page.title,
            description: page.description,
            url: pageUrl,
          }),
          generateFAQSchema(faq),
          generateBreadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Ecosistema", url: `${siteConfig.url}/ecosistema/edilizia-in-cloud` },
            { name: page.eyebrow, url: pageUrl },
          ]),
        ]}
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-24">
        <section className="container grid gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-secondary">
              <Cloud className="h-4 w-4" />
              {page.eyebrow}
            </span>
            <h1 className="mt-7 text-4xl font-black leading-tight text-foreground md:text-6xl">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground">
              {page.lead}
            </p>
            {isMainCloudPage && (
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/80">
                Edilizia in Cloud è il gestionale cloud per imprese edili italiane: cantieri,
                preventivi professionali, fatturazione elettronica SDI, DDT, ordini fornitori,
                subappalti, HR con presenze geolocalizzate, prima nota e controllo margini in
                un'unica piattaforma accessibile anche da smartphone.
              </p>
            )}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button variant="gold" size="lg" asChild>
                <a href={isMainCloudPage ? "https://www.ediliziaincloud.com/demo" : page.externalUrl} target="_blank" rel="noopener noreferrer">
                  {page.cta}
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              {isMainCloudPage && (
                <Button variant="outline" size="lg" asChild>
                  <a href="https://www.ediliziaincloud.com/funzionalita" target="_blank" rel="noopener noreferrer">
                    Vedi funzionalità
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              )}
              <Button variant="outline" size="lg" asChild>
                <Link to="/servizi">
                  Vedi Marketing Edile
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-xl">
            <div className="flex items-center gap-3 border-b border-border pb-5">
              <Workflow className="h-6 w-6 text-secondary" />
              <h2 className="text-xl font-black text-foreground">Flusso operativo</h2>
            </div>
            <div className="mt-6 space-y-4">
              {["Lead qualificato", "CRM e follow-up", "Preventivo", "Cantiere", "Margine e fattura"].map((item, index) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-background p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-black text-secondary">
                    {index + 1}
                  </span>
                  <span className="font-semibold text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {isMainCloudPage && page.metrics && (
          <section className="border-y border-border bg-card py-10">
            <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {page.metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-border bg-background p-5">
                  <p className="text-3xl font-black text-secondary">{metric.value}</p>
                  <p className="mt-2 text-sm font-semibold text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="border-y border-border bg-card py-14">
          <div className="container grid gap-6 md:grid-cols-3">
            {page.sections.map((section) => (
              <article key={section.title} className="rounded-xl border border-border bg-background p-6">
                <CheckCircle2 className="h-6 w-6 text-secondary" />
                <h2 className="mt-4 text-xl font-black text-foreground">{section.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{section.text}</p>
              </article>
            ))}
          </div>
        </section>

        {isMainCloudPage && page.modules && (
          <section className="container py-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black text-foreground">Tutto quello che serve dopo il lead</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Marketing Edile porta opportunità. Edilizia in Cloud evita che quelle opportunità
                diventino disordine operativo: ogni modulo copre un pezzo del percorso da preventivo
                a cantiere concluso e fatturato.
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {page.modules.map((module, index) => {
                const Icon = moduleIcons[index] || CheckCircle2;
                return (
                  <a
                    key={module.title}
                    href={module.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-secondary/50"
                  >
                    <Icon className="h-7 w-7 text-secondary" />
                    <h3 className="mt-4 text-xl font-black text-foreground">{module.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{module.text}</p>
                  </a>
                );
              })}
            </div>
          </section>
        )}

        {isMainCloudPage && page.officialLinks && (
          <section className="border-y border-border bg-card py-16">
            <div className="container">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-black text-foreground">Link ufficiali Edilizia in Cloud</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Per dettagli commerciali, condizioni aggiornate e funzionalità complete,
                  rimandiamo sempre alle pagine ufficiali di Edilizia in Cloud.
                </p>
              </div>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {page.officialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-border bg-background p-6 transition-colors hover:border-secondary/50"
                  >
                    <h3 className="text-xl font-black text-foreground">{link.name}</h3>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{link.text}</p>
                    <span className="mt-5 inline-flex items-center text-sm font-black text-secondary">
                      Apri il sito ufficiale
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </span>
                  </a>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="gold" size="lg" asChild>
                  <a href="https://www.ediliziaincloud.com/demo" target="_blank" rel="noopener noreferrer">
                    Richiedi demo gratuita
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://www.ediliziaincloud.com/prezzi" target="_blank" rel="noopener noreferrer">
                    Consulta la pagina prezzi
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </section>
        )}

        <section className="container grid gap-10 py-16 lg:grid-cols-[1fr_360px]">
          <div>
            <h2 className="text-3xl font-black text-foreground">Articoli collegati</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                ["Gestionale edilizia: lead, preventivi e cantieri", "/blog/gestionale-edilizia-lead-preventivi-cantieri"],
                ["CRM edilizia e lead marketing", "/blog/crm-edilizia-non-perdere-lead-marketing"],
                ["Preventivi edilizia software", "/blog/preventivi-edilizia-software-follow-up"],
                ["Controllo margini cantiere", "/blog/controllo-margini-cantiere-marketing-edile"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  to={href}
                  className="flex items-center justify-between rounded-xl border border-border bg-card p-5 font-semibold text-foreground transition-colors hover:text-secondary"
                >
                  {label}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
          <aside className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-xl font-black text-foreground">Pagine ecosistema</h2>
            <div className="mt-5 space-y-3">
              {Object.values(ediliziaCloudPages).map((item) => (
                <Link
                  key={item.slug}
                  to={`/ecosistema/${item.slug}`}
                  className="block rounded-lg bg-background px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:text-secondary"
                >
                  {item.h1}
                </Link>
              ))}
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
