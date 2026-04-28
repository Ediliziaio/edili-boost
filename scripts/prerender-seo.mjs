import { mkdir, readFile, writeFile, copyFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { seoExpansionPosts } from "../src/data/seoExpansionPosts.js";
import { ediliziaCloudPages, ediliziaCloudPosts } from "../src/data/ediliziaCloudContent.js";
import { cloudAiSeoPosts } from "../src/data/cloudAiSeoPosts.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const siteUrl = "https://www.marketingedile.com";
const siteName = "MARKETING EDILE®";
const defaultImage = `${siteUrl}/og-image.jpg`;

const pageKeywords = {
  home: ["marketing edilizia", "agenzia marketing edile", "lead generation imprese edili", "marketing serramenti", "clienti per aziende edili"],
  servizi: ["servizi marketing edilizia", "strategia marketing imprese edili", "advertising aziende edili", "landing page serramenti"],
  prezzi: ["costo marketing edilizia", "marketing a percentuale", "agenzia marketing senza fisso", "marketing a provvigione edilizia"],
  casiStudio: ["casi studio marketing edile", "risultati marketing edilizia", "lead generation infissi risultati"],
  chiSiamo: ["chi è Marketing Edile", "agenzia marketing specializzata edilizia", "Florin Andriciuc Marketing Edile"],
  contattaci: ["contattare agenzia marketing edile", "valutazione gratuita marketing edilizia", "consulenza marketing imprese edili"],
  blog: ["blog marketing edilizia", "strategie marketing imprese edili", "guide lead generation edile", "SEO locale edilizia"],
  materialiGratuiti: ["risorse gratuite imprenditori edili", "manuali marketing edilizia gratis", "CRM gratuito aziende edili"],
  offerta: ["offerta marketing edile", "sistema acquisizione clienti edilizia", "marketing garantito imprese edili"],
  serramenti: ["marketing serramenti", "marketing infissi", "lead generation serramenti", "pubblicità showroom infissi"],
  ristrutturazioni: ["marketing ristrutturazioni", "lead generation ristrutturazioni", "clienti impresa ristrutturazione"],
  fotovoltaico: ["marketing fotovoltaico", "lead generation fotovoltaico", "clienti fotovoltaico"],
  impiantisti: ["marketing impiantisti", "lead generation impiantisti", "clienti per idraulici"],
  tetti: ["marketing rifacimento tetti", "lead generation coperture", "clienti rifacimento tetto"],
  ediliziaCloud: ["edilizia in cloud", "gestionale edilizia", "crm edilizia", "gestione cantieri", "preventivi edilizia software"],
};

const staticRoutes = [
  {
    path: "/",
    title: "Marketing Aziende Edili e Serramenti",
    description: "Marketing Edile® porta clienti qualificati a imprese edili e serramentisti. Solo a percentuale sulle vendite. 47+ aziende, €60M+ generati.",
    keywords: pageKeywords.home,
    h1: "Marketing per aziende edili e serramenti",
  },
  {
    path: "/blog",
    title: "Blog — Strategie Marketing Edilizia",
    description: "Guide pratiche e strategie testate per il marketing nel settore edile. Lead generation, vendita infissi, acquisizione clienti.",
    keywords: pageKeywords.blog,
    h1: "Blog Marketing Edile",
  },
  {
    path: "/servizi",
    title: "Servizi Marketing Imprese Edili",
    description: "Sistema marketing per imprese edili: strategia, contenuti video, advertising gestito e referente dedicato. Paghi solo a percentuale.",
    keywords: pageKeywords.servizi,
    h1: "Servizi marketing per imprese edili",
  },
  {
    path: "/prezzi",
    title: "Prezzi — Marketing a Percentuale",
    description: "Marketing Edile® lavora solo a percentuale sulle vendite. Nessun canone fisso, nessun anticipo. Se non vendiamo, non ci devi nulla.",
    keywords: pageKeywords.prezzi,
    h1: "Prezzi marketing a percentuale",
  },
  {
    path: "/casi-studio",
    title: "Casi Studio — Risultati Aziende Edili",
    description: "€60M+ di fatturato per 47+ aziende edili. Casi studio: Green Energy +€300k, Teda Infissi €30-40k/mese, Renova Tetto +€600k.",
    keywords: pageKeywords.casiStudio,
    h1: "Casi studio Marketing Edile",
  },
  {
    path: "/chi-siamo",
    title: "Chi Siamo — Agenzia Marketing Edile",
    description: "Marketing Edile® nasce dalla vendita sul campo: 8+ anni nel settore edile, azienda di serramenti propria e modello a provvigione unico.",
    keywords: pageKeywords.chiSiamo,
    h1: "Chi siamo",
  },
  {
    path: "/contattaci",
    title: "Contattaci — Valutazione Gratuita",
    description: "Valutazione gratuita per la tua azienda edile. Risposta entro 24h, nessun impegno. Solo 3 posti al mese. Milano.",
    keywords: pageKeywords.contattaci,
    h1: "Contatta Marketing Edile",
  },
  {
    path: "/offerta",
    title: "Offerta — Acquisizione Clienti Edili",
    description: "Marketing Edile® porta clienti pronti all'acquisto. Solo a percentuale, nessun canone fisso. Se non vendiamo, non ci devi nulla.",
    keywords: pageKeywords.offerta,
    h1: "Offerta acquisizione clienti edili",
  },
  {
    path: "/materiali-gratuiti",
    title: "Risorse Gratuite Imprenditori Edili",
    description: "Manuali PDF, CRM gratuito, video e community per imprenditori edili. Chiudi più preventivi e trova nuovi clienti.",
    keywords: pageKeywords.materialiGratuiti,
    h1: "Risorse gratuite per imprenditori edili",
  },
  ...Object.values(ediliziaCloudPages).map((page) => ({
    path: `/ecosistema/${page.slug}`,
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    h1: page.h1,
    links: [
      { href: "https://www.ediliziaincloud.com/", label: "Edilizia in Cloud" },
      { href: "https://www.ediliziaincloud.com/funzionalita", label: "Funzionalità Edilizia in Cloud" },
      { href: "/blog/gestionale-edilizia-lead-preventivi-cantieri", label: "Gestionale edilizia: lead, preventivi e cantieri" },
      { href: "/blog/crm-edilizia-non-perdere-lead-marketing", label: "CRM edilizia e lead marketing" },
    ],
  })),
  {
    path: "/settori/serramenti",
    title: "Marketing Serramenti | Solo a Provvigione",
    description: "Marketing per serramentisti a provvigione. Zero canone fisso. Paghi solo sulle vendite chiuse. €60M+ generati per 47+ aziende edili.",
    keywords: pageKeywords.serramenti,
    h1: "Marketing per serramentisti",
  },
  {
    path: "/settori/ristrutturazioni",
    title: "Marketing Ristrutturazioni | Lead e Clienti Reali",
    description: "Marketing ristrutturazioni a provvigione: lead qualificati per imprese edili. 47+ aziende, €60M+ generati, zero canone fisso.",
    keywords: pageKeywords.ristrutturazioni,
    h1: "Marketing per ristrutturazioni",
  },
  {
    path: "/settori/fotovoltaico",
    title: "Marketing Fotovoltaico — Lead a Provvigione",
    description: "Lead qualificati per aziende fotovoltaico. Zero fisso, solo provvigione. +€300K in 2 mesi per Green Energy Group.",
    keywords: pageKeywords.fotovoltaico,
    h1: "Marketing per fotovoltaico",
  },
  {
    path: "/settori/impiantisti",
    title: "Marketing Impiantisti | Clienti a Provvigione",
    description: "Marketing per impiantisti a provvigione: clienti per idraulici, elettricisti e climatizzazione. Zero canone, paghi solo su commesse chiuse.",
    keywords: pageKeywords.impiantisti,
    h1: "Marketing per impiantisti",
  },
  {
    path: "/settori/tetti",
    title: "Marketing Tetti — Lead per Rifacimento Coperture",
    description: "Lead qualificati per aziende di tetti e coperture. Solo a provvigione. Renova Tetto: +€600K in 12 mesi. Scopri il sistema.",
    keywords: pageKeywords.tetti,
    h1: "Marketing per tetti e coperture",
  },
  {
    path: "/settori/imprese-edili",
    title: "Marketing per Imprese Edili | Clienti Qualificati",
    description: "Marketing per imprese edili a provvigione: lead qualificati, preventivi reali e clienti pronti per cantieri, ristrutturazioni, infissi e impianti.",
    keywords: ["marketing per imprese edili", "marketing edilizia", "lead generation imprese edili", "clienti per impresa edile", "pubblicita impresa edile"],
    h1: "Marketing per imprese edili che vogliono clienti veri, non solo visibilità",
    links: [
      { href: "/settori/serramenti", label: "Marketing Serramenti" },
      { href: "/settori/ristrutturazioni", label: "Marketing Ristrutturazioni" },
      { href: "/settori/fotovoltaico", label: "Marketing Fotovoltaico" },
    ],
  },
  {
    path: "/settori/infissi",
    title: "Marketing Infissi | Lead per Aziende di Infissi",
    description: "Marketing per aziende di infissi e showroom: appuntamenti qualificati, campagne geolocalizzate e sistema a provvigione sulle vendite chiuse.",
    keywords: ["marketing infissi", "marketing per infissi", "marketing aziende infissi", "marketing per aziende di infissi", "lead generation infissi", "clienti per infissi"],
    h1: "Marketing per infissi: porta in showroom persone pronte a cambiare finestre",
    links: [
      { href: "/settori/serramenti", label: "Marketing Serramenti" },
      { href: "/settori/finestre", label: "Marketing Finestre" },
      { href: "/blog/30-richieste-preventivi-qualificati-infissi-fotovoltaico-edilizia-2026", label: "30 richieste qualificate al mese" },
    ],
  },
  {
    path: "/settori/finestre",
    title: "Marketing Finestre | Clienti per Vendita Finestre",
    description: "Marketing per aziende che vendono finestre, infissi e serramenti: lead qualificati, posizionamento locale e campagne orientate a preventivi reali.",
    keywords: ["marketing finestre", "pubblicita finestre", "vendere finestre online", "clienti per finestre", "lead generation finestre", "marketing serramenti finestre"],
    h1: "Marketing finestre: intercetta chi deve sostituire gli infissi prima dei tuoi concorrenti",
    links: [
      { href: "/settori/infissi", label: "Marketing Infissi" },
      { href: "/settori/serramenti", label: "Marketing Serramenti" },
      { href: "/blog/preventivi-edilizia-come-presentarli-chiudere-vendita", label: "Presentare preventivi che chiudono" },
    ],
  },
  {
    path: "/settori/idraulici",
    title: "Marketing Idraulici | Lead per Idraulica e Termoidraulica",
    description: "Marketing per idraulici e aziende termoidrauliche: clienti qualificati per caldaie, pompe di calore, climatizzazione, impianti e manutenzioni.",
    keywords: ["marketing idraulici", "marketing per idraulici", "lead generation idraulici", "clienti per idraulici", "marketing idraulica", "marketing termoidraulici"],
    h1: "Marketing per idraulici: richieste qualificate per lavori ad alto valore",
    links: [
      { href: "/settori/impiantisti", label: "Marketing Impiantisti" },
      { href: "/settori/fotovoltaico", label: "Marketing Fotovoltaico" },
      { href: "/settori/imprese-edili", label: "Marketing Imprese Edili" },
    ],
  },
  {
    path: "/settori/coperture",
    title: "Marketing Coperture | Lead per Tetti e Impermeabilizzazioni",
    description: "Marketing per aziende di coperture, tetti e impermeabilizzazioni: lead qualificati per rifacimento tetti, isolamento e lavori ad alto ticket.",
    keywords: ["marketing coperture", "marketing tetti", "lead generation tetti", "clienti rifacimento tetto", "marketing impermeabilizzazioni", "clienti per aziende tetti"],
    h1: "Marketing per coperture: più richieste per tetti, isolamento e impermeabilizzazioni",
    links: [
      { href: "/settori/tetti", label: "Marketing Tetti" },
      { href: "/settori/ristrutturazioni", label: "Marketing Ristrutturazioni" },
      { href: "/blog/case-study-impresa-ristrutturazioni-triplicato-fatturato-8-mesi", label: "Case study ristrutturazioni" },
    ],
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy",
    description: "Informativa sulla privacy di Domus Group S.r.l. ai sensi dell'Art. 13 del Regolamento UE 2016/679 (GDPR).",
    keywords: ["privacy policy", "Marketing Edile", "Domus Group"],
    h1: "Privacy Policy",
  },
  {
    path: "/cookie-policy",
    title: "Cookie Policy",
    description: "Informativa sull'utilizzo dei cookie sul sito di Marketing Edile by Domus Group S.r.l.",
    keywords: ["cookie policy", "Marketing Edile", "Domus Group"],
    h1: "Cookie Policy",
  },
];

const esc = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const stripHtml = (value = "") => value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

function slugDate(value) {
  return new Date(value).toISOString().split("T")[0];
}

function fullTitle(title) {
  return title ? `${title} | Marketing Edile` : "Marketing Edile® — Marketing per Aziende Edili";
}

function canonicalFor(routePath) {
  return routePath === "/" ? siteUrl : `${siteUrl}${routePath}`;
}

function imageUrl(image) {
  if (!image) return defaultImage;
  return image.startsWith("http") ? image : `${siteUrl}${image}`;
}

function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    description: "Marketing Edile® porta clienti qualificati a imprese edili e serramentisti. Solo a percentuale sulle vendite. 47+ aziende, €60M+ generati.",
    inLanguage: "it-IT",
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    legalName: "Domus Group S.r.l.",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    founder: { "@type": "Person", name: "Florin Andriciuc" },
    areaServed: "IT",
  };
}

function articleSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteUrl}/blog/${post.slug}`,
    headline: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    image: imageUrl(post.cover),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: "Florin Andriciuc",
      url: `${siteUrl}/chi-siamo`,
    },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    inLanguage: "it-IT",
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: stripHtml(post.content).split(/\s+/).filter(Boolean).length,
    timeRequired: `PT${post.readingTime}M`,
  };
}

function extractString(block, field) {
  const match = block.match(new RegExp(`${field}:\\s*"((?:\\\\.|[^"\\\\])*)"`));
  return match ? JSON.parse(`"${match[1]}"`) : "";
}

function extractArray(block, field) {
  const match = block.match(new RegExp(`${field}:\\s*\\[([^\\]]*)\\]`));
  if (!match) return [];
  return [...match[1].matchAll(/"((?:\\.|[^"\\])*)"/g)].map((item) => JSON.parse(`"${item[1]}"`));
}

function extractBoolean(block, field) {
  const match = block.match(new RegExp(`${field}:\\s*(true|false)`));
  return match ? match[1] === "true" : false;
}

function extractNumber(block, field) {
  const match = block.match(new RegExp(`${field}:\\s*(\\d+)`));
  return match ? Number(match[1]) : 0;
}

async function getBlogPosts() {
  const source = await readFile(path.join(root, "src/data/blog-posts.ts"), "utf8");
  const blocks = [...source.matchAll(/\{\s*id:\s*"[^"]+"[\s\S]*?content:\s*`([\s\S]*?)`\s*\},?/g)];
  const basePosts = blocks
    .map((match) => {
      const block = match[0];
      return {
        id: extractString(block, "id"),
        slug: extractString(block, "slug"),
        title: extractString(block, "title"),
        excerpt: extractString(block, "excerpt"),
        cover: extractString(block, "cover_image_url"),
        category: extractString(block, "category"),
        tags: extractArray(block, "tags"),
        publishedAt: extractString(block, "published_at"),
        updatedAt: extractString(block, "updated_at") || null,
        readingTime: extractNumber(block, "reading_time"),
        featured: extractBoolean(block, "featured"),
        status: extractString(block, "status"),
        seoTitle: extractString(block, "seo_title"),
        seoDescription: extractString(block, "seo_description"),
        content: match[1].trim(),
      };
    })
    .filter((post) => post.status === "published");

  const expansionPosts = seoExpansionPosts
    .filter((post) => post.status === "published")
    .map((post) => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      cover: post.cover_image_url,
      category: post.category,
      tags: post.tags,
      publishedAt: post.published_at,
      updatedAt: post.updated_at || null,
      readingTime: post.reading_time,
      featured: post.featured,
      status: post.status,
      seoTitle: post.seo_title,
      seoDescription: post.seo_description,
      content: post.content,
    }));

  const cloudPosts = ediliziaCloudPosts
    .filter((post) => post.status === "published")
    .map((post) => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      cover: post.cover_image_url,
      category: post.category,
      tags: post.tags,
      publishedAt: post.published_at,
      updatedAt: post.updated_at || null,
      readingTime: post.reading_time,
      featured: post.featured,
      status: post.status,
      seoTitle: post.seo_title,
      seoDescription: post.seo_description,
      content: post.content,
    }));

  const cloudAiPosts = cloudAiSeoPosts
    .filter((post) => post.status === "published")
    .map((post) => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      cover: post.cover_image_url,
      category: post.category,
      tags: post.tags,
      publishedAt: post.published_at,
      updatedAt: post.updated_at || null,
      readingTime: post.reading_time,
      featured: post.featured,
      status: post.status,
      seoTitle: post.seo_title,
      seoDescription: post.seo_description,
      content: post.content,
    }));

  return [...basePosts, ...expansionPosts, ...cloudPosts, ...cloudAiPosts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}

function seoHead(route) {
  const title = fullTitle(route.title);
  const canonical = canonicalFor(route.path);
  const img = imageUrl(route.image);
  const jsonLd = route.jsonLd || [
    organizationSchema(),
    websiteSchema(),
    breadcrumbSchema([
      { name: "Home", url: siteUrl },
      ...(route.path === "/" ? [] : [{ name: route.h1 || route.title, url: canonical }]),
    ]),
  ];

  return `
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(route.description)}">
    <meta name="keywords" content="${esc((route.keywords || []).join(", "))}">
    <meta name="author" content="Marketing Edile®">
    <meta name="publisher" content="Marketing Edile®">
    <meta name="robots" content="${route.noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"}">
    <link rel="canonical" href="${esc(canonical)}">
    <meta property="og:type" content="${route.type || "website"}">
    <meta property="og:url" content="${esc(canonical)}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(route.description)}">
    <meta property="og:image" content="${esc(img)}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="${siteName}">
    <meta property="og:locale" content="it_IT">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(title)}">
    <meta name="twitter:description" content="${esc(route.description)}">
    <meta name="twitter:image" content="${esc(img)}">
    ${route.type === "article" ? `
    <meta property="article:published_time" content="${esc(route.publishedAt)}">
    ${route.updatedAt ? `<meta property="article:modified_time" content="${esc(route.updatedAt)}">` : ""}
    <meta property="article:author" content="Florin Andriciuc">
    ${(route.tags || []).map((tag) => `<meta property="article:tag" content="${esc(tag)}">`).join("\n    ")}
    ` : ""}
    ${jsonLd.map((schema) => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`).join("\n    ")}
  `;
}

function fallbackContent(route) {
  if (route.articleContent) {
    return `
      <article class="seo-fallback">
        <a href="/blog">Blog Marketing Edile</a>
        <h1>${esc(route.h1)}</h1>
        <p>${esc(route.description)}</p>
        ${route.articleContent}
      </article>
    `;
  }

  return `
    <section class="seo-fallback">
      <h1>${esc(route.h1 || route.title)}</h1>
      <p>${esc(route.description)}</p>
      ${route.links ? `<nav><ul>${route.links.map((link) => `<li><a href="${esc(link.href)}">${esc(link.label)}</a></li>`).join("")}</ul></nav>` : ""}
    </section>
  `;
}

function replaceSeo(indexHtml, route) {
  const cleaned = indexHtml
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/\s*<meta\s+(?:name|property)="(?:description|keywords|author|publisher|robots|og:[^"]+|twitter:[^"]+|article:[^"]+)"[^>]*>\s*/gi, "\n")
    .replace(/\s*<link\s+rel="canonical"[^>]*>\s*/gi, "\n")
    .replace(/\s*<script\s+type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi, "\n");

  return cleaned
    .replace("</head>", `${seoHead(route)}\n  </head>`)
    .replace(/<div id="root">[\s\S]*?<\/noscript>\s*<\/div>/, `<div id="root">${fallbackContent(route)}</div>`);
}

async function writeRoute(indexHtml, route) {
  const html = replaceSeo(indexHtml, route);
  const outDir = route.path === "/" ? dist : path.join(dist, route.path.replace(/^\//, ""));
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, "index.html"), html);
}

async function maybeCopyCover(cover) {
  if (!cover || cover.startsWith("http")) return;
  const filename = cover.replace(/^\//, "");
  const destination = path.join(dist, filename);
  const candidates = [
    path.join(root, "public", filename),
    path.join(root, "src/assets", filename),
  ];

  for (const candidate of candidates) {
    try {
      await access(candidate);
      await copyFile(candidate, destination);
      return;
    } catch {
      // Try next location.
    }
  }
}

function sitemapXml(routes) {
  const now = new Date().toISOString().split("T")[0];
  const entries = routes
    .filter((route) => !route.noindex)
    .map((route) => {
      const loc = canonicalFor(route.path);
      const lastmod = route.publishedAt ? slugDate(route.updatedAt || route.publishedAt) : now;
      const priority = route.path === "/" ? "1.0" : route.path === "/blog" ? "0.9" : route.type === "article" ? "0.85" : "0.8";
      const changefreq = route.path === "/blog" ? "daily" : route.type === "article" ? "monthly" : "monthly";
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

async function main() {
  const indexHtml = await readFile(path.join(dist, "index.html"), "utf8");
  const posts = await getBlogPosts();

  const blogLinks = posts.map((post) => ({ href: `/blog/${post.slug}`, label: post.title }));
  const routes = staticRoutes.map((route) => route.path === "/blog" ? { ...route, links: blogLinks } : route);

  for (const post of posts) {
    routes.push({
      path: `/blog/${post.slug}`,
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      keywords: post.tags,
      h1: post.title,
      image: post.cover,
      type: "article",
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
      tags: post.tags,
      articleContent: post.content,
      jsonLd: [
        organizationSchema(),
        articleSchema(post),
        breadcrumbSchema([
          { name: "Home", url: siteUrl },
          { name: "Blog", url: `${siteUrl}/blog` },
          { name: post.title, url: `${siteUrl}/blog/${post.slug}` },
        ]),
      ],
    });
  }

  for (const route of routes) {
    await writeRoute(indexHtml, route);
    if (route.image) await maybeCopyCover(route.image);
  }

  await writeFile(path.join(dist, "sitemap.xml"), sitemapXml(routes));
  console.log(`SEO prerender complete: ${routes.length} routes, ${posts.length} blog posts.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
