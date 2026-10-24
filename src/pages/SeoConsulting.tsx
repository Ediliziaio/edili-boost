import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { seoConsulting as page } from "@/data/seoConsulting.js";
import { siteConfig, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo";

export default function SeoConsulting() {
  const url = `${siteConfig.url}${page.path}`;
  return <>
    <SEOHead title={page.title} description={page.description} url={url} jsonLd={[
      { "@context": "https://schema.org", "@type": "Service", name: page.title, url, description: page.description, provider: { "@type": "Organization", name: "Marketing Edile", url: siteConfig.url } },
      generateFAQSchema(page.faqs), generateBreadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: page.title, url }])
    ]} />
    <Navbar />
    <main className="pt-28 pb-16">
      <header className="container-narrow py-12">
        <p className="text-secondary font-semibold">SERVIZI · SEO LOCALE</p>
        <h1 className="mt-5 text-4xl md:text-5xl font-black leading-tight">{page.h1}</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{page.intro}</p>
        <Link to="/contattaci" className="inline-flex mt-8 rounded-lg bg-secondary px-6 py-3 font-bold text-secondary-foreground">Richiedi una valutazione</Link>
      </header>
      <div className="container-narrow space-y-6">
        {page.sections.map((section, i) => <section key={section.title} className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <p className="text-secondary font-semibold" aria-hidden="true">{String(i + 1).padStart(2, "0")}</p>
          <h2 className="mt-3 text-2xl font-bold">{section.title}</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{section.text}</p>
        </section>)}
        <section className="py-8"><h2 className="text-2xl font-bold">Domande frequenti</h2>
          {page.faqs.map(faq => <details key={faq.question} className="border-b border-border py-5"><summary className="cursor-pointer font-semibold">{faq.question}</summary><p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p></details>)}
        </section>
        <nav aria-label="Approfondimenti SEO" className="flex flex-col gap-4">{page.links.map(link => <Link className="text-secondary underline underline-offset-4" key={link.href} to={link.href}>{link.label}</Link>)}</nav>
        <p className="pt-6 text-sm text-muted-foreground">Riferimenti: <a className="underline" href="https://support.google.com/business/answer/3038177?hl=it">linee guida Google per le attività locali</a> e <a className="underline" href="https://developers.google.com/search/docs/appearance/ai-features">documentazione Google sulle funzionalità AI</a>. Pagina aggiornata il 24 ottobre 2026.</p>
      </div>
    </main><Footer />
  </>;
}
