import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Check, Search, Target, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, siteConfig } from "@/lib/seo";
import { VerticalLandingKey, getVerticalLandingUrl, verticalLandingPages } from "@/data/verticalLandingPages";

interface VerticalLandingProps {
  pageKey: VerticalLandingKey;
}

export default function VerticalLanding({ pageKey }: VerticalLandingProps) {
  const page = verticalLandingPages[pageKey];
  const navigate = useNavigate();
  const pageUrl = getVerticalLandingUrl(page.slug);

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
          generateFAQSchema(page.faq),
          generateBreadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Settori", url: `${siteConfig.url}/settori/serramenti` },
            { name: page.eyebrow, url: pageUrl },
          ]),
        ]}
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-24">
        <section className="container py-16 md:py-24">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-secondary">
              <Search className="h-4 w-4" />
              {page.eyebrow}
            </span>
            <h1 className="mt-7 text-4xl font-black leading-tight text-foreground md:text-6xl">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground">
              {page.lead}
            </p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/80">
              {page.proof}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button variant="gold" size="lg" onClick={() => navigate("/#candidati")}>
                Candidati ora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/casi-studio">Vedi casi studio</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card py-14">
          <div className="container grid gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Target className="h-6 w-6 text-secondary" />
                <h2 className="text-2xl font-black text-foreground">Cosa blocca la crescita</h2>
              </div>
              <div className="space-y-3">
                {page.painPoints.map((item) => (
                  <div key={item} className="flex gap-3 rounded-xl border border-border bg-background p-4">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-4 flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-secondary" />
                <h2 className="text-2xl font-black text-foreground">Come ti posizioniamo</h2>
              </div>
              <div className="space-y-4">
                {page.systemSteps.map((step, index) => (
                  <div key={step.title} className="rounded-xl border border-secondary/20 bg-secondary/5 p-5">
                    <span className="text-sm font-bold text-secondary">0{index + 1}</span>
                    <h3 className="mt-1 text-lg font-bold text-foreground">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <h2 className="text-3xl font-black text-foreground">Domande frequenti</h2>
              <div className="mt-6 space-y-4">
                {page.faq.map((item) => (
                  <details key={item.question} className="rounded-xl border border-border bg-card p-5">
                    <summary className="cursor-pointer font-bold text-foreground">{item.question}</summary>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
            <aside className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl font-black text-foreground">Pagine collegate</h2>
              <div className="mt-5 space-y-3">
                {page.related.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="flex items-center justify-between rounded-lg bg-background px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:text-secondary"
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
