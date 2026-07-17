import { useEffect } from 'react';
import { siteConfig } from '@/lib/seo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
  noindex?: boolean;
  jsonLd?: object | object[];
  articleSection?: string;
  articleTags?: string[];
}

// Gestione imperativa dell'<head>: react-helmet-async si è dimostrato inaffidabile
// (applicava title/description/canonical della homepage su TUTTE le pagine dopo
// l'hydration → canonical duplicati verso "/", killer di indicizzazione).
// Qui aggiorniamo direttamente i tag, così la vista renderizzata combacia col prerender.

function upsertMeta(selectorAttr: 'name' | 'property', key: string, content: string | undefined | null) {
  if (content == null) return;
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${selectorAttr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(selectorAttr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

// Stesso cap del prerender (scripts/prerender-seo.mjs): title <= 60 char per non
// farlo troncare da Google, mantenendo coerenza tra HTML servito e vista renderizzata.
function buildTitle(title?: string) {
  if (!title) return 'Marketing Edile® — Marketing per Aziende Edili';
  const withBrand = `${title} | Marketing Edile`;
  if (withBrand.length <= 60) return withBrand;
  if (title.length <= 60) return title;
  return title.slice(0, 60).replace(/\s+\S*$/, '');
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function SEOHead({
  title,
  description = siteConfig.description,
  keywords = siteConfig.keywords,
  image = siteConfig.ogImage,
  url = siteConfig.url,
  type = 'website',
  publishedAt,
  updatedAt,
  author = siteConfig.author,
  noindex = false,
  jsonLd,
  articleSection,
  articleTags,
}: SEOHeadProps) {
  const fullTitle = buildTitle(title);
  const fullImageUrl = image.startsWith('http') ? image : `${siteConfig.url}${image}`;
  const robots = noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const jsonLdKey = JSON.stringify(jsonLdArray);
  const tagsKey = [
    fullTitle, description, keywords.join(','), fullImageUrl, url, type,
    publishedAt, updatedAt, author, robots, articleSection, (articleTags || []).join(','),
  ].join('|');

  // Meta tag + canonical
  useEffect(() => {
    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'keywords', keywords.join(', '));
    upsertMeta('name', 'author', 'Marketing Edile®');
    upsertMeta('name', 'publisher', 'Marketing Edile®');
    upsertMeta('name', 'format-detection', 'telephone=no');
    upsertMeta('name', 'robots', robots);
    upsertLink('canonical', url);

    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:image', fullImageUrl);
    upsertMeta('property', 'og:image:width', '1200');
    upsertMeta('property', 'og:image:height', '630');
    upsertMeta('property', 'og:image:alt', title || siteConfig.name);
    upsertMeta('property', 'og:site_name', siteConfig.name);
    upsertMeta('property', 'og:locale', 'it_IT');

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:url', url);
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', fullImageUrl);
    upsertMeta('name', 'twitter:image:alt', title || siteConfig.name);

    upsertMeta('property', 'article:publisher', 'https://www.marketingedile.com');
    if (type === 'article' && publishedAt) {
      upsertMeta('property', 'article:published_time', publishedAt);
      if (updatedAt) upsertMeta('property', 'article:modified_time', updatedAt);
      upsertMeta('property', 'article:author', 'Florin Andriciuc');
      if (articleSection) upsertMeta('property', 'article:section', articleSection);
    }
  }, [tagsKey]); // eslint-disable-line react-hooks/exhaustive-deps

  // JSON-LD: rimuove i blocchi esistenti (anche quelli prerenderizzati) e reimposta
  // quelli della pagina corrente, evitando duplicati e schemi di pagine sbagliate.
  useEffect(() => {
    const managed = 'data-seo-ld';
    document.head.querySelectorAll('script[type="application/ld+json"]').forEach((s) => s.remove());
    const added: HTMLScriptElement[] = [];
    for (const schema of jsonLdArray) {
      const el = document.createElement('script');
      el.type = 'application/ld+json';
      el.setAttribute(managed, '1');
      el.textContent = JSON.stringify(schema);
      document.head.appendChild(el);
      added.push(el);
    }
    return () => { added.forEach((el) => el.remove()); };
  }, [jsonLdKey]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
