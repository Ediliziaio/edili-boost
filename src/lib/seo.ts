// SEO & GEO Configuration — Marketing Edile®

export const siteConfig = {
  name: "MARKETING EDILE®",
  description: "Marketing Edile® porta clienti qualificati a imprese edili e serramentisti. Solo a percentuale sulle vendite. 47+ aziende, €60M+ generati.",
  url: "https://marketingedile.com",
  ogImage: "/og-image.jpg",
  author: "MARKETING EDILE®",
  founder: "Florin Andriciuc",
  companyName: "Domus Group S.r.l.",
  vatNumber: "13132010961",
  address: {
    street: "Via Aurelio Saffi 29",
    city: "Milano",
    postalCode: "20123",
    country: "IT",
    region: "Lombardia"
  },
  contact: {
    email: "Amministrazione@domusgroupitalia.it",
    pec: "domusgroupsrl@legalmail.it",
    sdi: "USAL8PV"
  },
  keywords: [
    "marketing edilizia",
    "marketing serramenti",
    "marketing infissi",
    "lead generation edile",
    "marketing imprese edili",
    "agenzia marketing costruzioni",
    "marketing showroom infissi",
    "pubblicità serramentisti",
    "lead qualificati edilizia",
    "marketing a percentuale edilizia",
    "vendita infissi online",
    "posatori serramenti marketing",
    "clienti per aziende edili",
    "acquisizione clienti edilizia",
    "marketing digitale edilizia",
    "lead generation serramenti",
    "marketing ristrutturazioni",
    "agenzia marketing edile Italia",
    "come trovare clienti edilizia",
    "marketing fotovoltaico"
  ],
  // Keyword clusters per pagina
  pageKeywords: {
    home: [
      "marketing edilizia", "agenzia marketing edile", "lead generation imprese edili",
      "marketing a percentuale edilizia", "clienti per aziende edili", "marketing serramenti",
      "marketing infissi", "pubblicità imprese edili"
    ],
    servizi: [
      "servizi marketing edilizia", "strategia marketing imprese edili", "advertising aziende edili",
      "contenuti video edilizia", "landing page serramenti", "gestione campagne edili",
      "social media marketing edilizia", "lead nurturing edile"
    ],
    prezzi: [
      "costo marketing edilizia", "marketing a percentuale", "agenzia marketing senza fisso",
      "marketing a provvigione edilizia", "marketing pay per result edile",
      "quanto costa agenzia marketing edile"
    ],
    casiStudio: [
      "casi studio marketing edile", "risultati marketing edilizia", "lead generation infissi risultati",
      "marketing fotovoltaico casi studio", "fatturato generato marketing edile",
      "testimonianze marketing edilizia"
    ],
    chiSiamo: [
      "chi è Marketing Edile", "agenzia marketing specializzata edilizia", "Florin Andriciuc Marketing Edile fondatore",
      "Domus Group marketing edile", "team marketing edilizia", "esperienza marketing edile"
    ],
    contattaci: [
      "contattare agenzia marketing edile", "valutazione gratuita marketing edilizia",
      "consulenza marketing imprese edili", "richiedi preventivo marketing edile"
    ],
    blog: [
      "blog marketing edilizia", "strategie marketing imprese edili", "guide lead generation edile",
      "consigli marketing serramenti", "SEO locale edilizia"
    ],
    materialiGratuiti: [
      "risorse gratuite imprenditori edili", "manuali marketing edilizia gratis",
      "CRM gratuito aziende edili", "video strategie vendita edilizia",
      "come chiudere preventivi edilizia"
    ],
    offerta: [
      "offerta marketing edile", "sistema acquisizione clienti edilizia",
      "marketing garantito imprese edili", "proposta marketing a percentuale edile"
    ]
  },
  links: {
    facebook: "https://facebook.com/marketingedile",
    instagram: "https://instagram.com/marketingedile",
    linkedin: "https://linkedin.com/company/marketingedile",
    youtube: "https://youtube.com/@marketingedile"
  }
};

// ── JSON-LD Schema Generators ──

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.companyName,
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.url}/logo.png`,
    width: 600,
    height: 200
  },
  description: siteConfig.description,
  foundingDate: "2018",
  founder: {
    "@type": "Person",
    name: siteConfig.founder,
    jobTitle: "Fondatore & CEO",
    worksFor: { "@id": `${siteConfig.url}/#organization` }
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    postalCode: siteConfig.address.postalCode,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.contact.email,
    contactType: "customer service",
    areaServed: "IT",
    availableLanguage: "Italian"
  },
  sameAs: [
    siteConfig.links.facebook,
    siteConfig.links.instagram,
    siteConfig.links.linkedin,
    siteConfig.links.youtube
  ],
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 5,
    maxValue: 20
  },
  knowsAbout: [
    "Marketing per imprese edili",
    "Lead generation settore edile",
    "Marketing serramenti e infissi",
    "Pubblicità per aziende di costruzioni",
    "Marketing fotovoltaico",
    "Acquisizione clienti edilizia"
  ]
});

export const generateWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: { "@id": `${siteConfig.url}/#organization` },
  inLanguage: "it-IT",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "@id": `${siteConfig.url}/#localbusiness`,
  name: siteConfig.name,
  description: "Marketing Edile® è l'agenzia di marketing a risposta diretta che porta clienti qualificati alle imprese edili italiane. Lavora solo a percentuale sulle vendite generate — nessun canone fisso.",
  url: siteConfig.url,
  telephone: "",
  email: siteConfig.contact.email,
  priceRange: "€€€",
  image: `${siteConfig.url}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    postalCode: siteConfig.address.postalCode,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.4642,
    longitude: 9.1900
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00"
  },
  areaServed: {
    "@type": "Country",
    name: "Italy"
  },
  serviceArea: {
    "@type": "Country",
    name: "Italy"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servizi Marketing Edile",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lead Generation per Imprese Edili",
          description: "Generazione di contatti qualificati e pronti all'acquisto per aziende del settore edile"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Advertising Gestito per Edilizia",
          description: "Gestione campagne pubblicitarie su Facebook, Instagram e Google per aziende edili"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Strategia Marketing Edile Personalizzata",
          description: "Piano marketing completo personalizzato per serramentisti, imprese edili e produttori di infissi"
        }
      }
    ]
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
    bestRating: "5"
  }
});

export const generateArticleSchema = (article: {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  authorRole?: string;
  authorAvatar?: string;
  url: string;
  category?: string;
  tags?: string[];
  wordCount?: number;
  readingTime?: number;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": article.url,
  headline: article.title,
  description: article.description,
  image: {
    "@type": "ImageObject",
    url: article.image,
    width: 1200,
    height: 630
  },
  datePublished: article.publishedAt,
  dateModified: article.updatedAt || article.publishedAt,
  author: {
    "@type": "Person",
    name: article.author,
    ...(article.authorRole && { jobTitle: article.authorRole }),
    ...(article.authorAvatar && { image: article.authorAvatar }),
    url: `${siteConfig.url}/chi-siamo`
  },
  publisher: {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.png`,
      width: 600,
      height: 200
    }
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": article.url
  },
  inLanguage: "it-IT",
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  ...(article.category && { articleSection: article.category }),
  ...(article.tags && article.tags.length > 0 && { keywords: article.tags.join(", ") }),
  ...(article.wordCount && { wordCount: article.wordCount }),
  ...(article.readingTime && { timeRequired: `PT${article.readingTime}M` }),
  copyrightHolder: { "@id": `${siteConfig.url}/#organization` },
  copyrightYear: new Date(article.publishedAt).getFullYear()
});

export const generateBlogListingSchema = (posts: Array<{
  title: string;
  url: string;
  image?: string;
  publishedAt?: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteConfig.url}/blog`,
  name: "Blog Marketing Edilizia — Strategie e Guide per Imprese Edili",
  description: "Guide pratiche, strategie testate e casi studio reali per il marketing nel settore edile. Lead generation, vendita serramenti, acquisizione clienti per imprese edili.",
  url: `${siteConfig.url}/blog`,
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  publisher: { "@id": `${siteConfig.url}/#organization` },
  inLanguage: "it-IT",
  mainEntity: {
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: posts.length,
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: post.url,
      ...(post.image && { image: post.image })
    }))
  }
});

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

// ── New Schema Generators for SEO/GEO ──

export const generateServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.name,
  description: service.description,
  url: service.url,
  provider: { "@id": `${siteConfig.url}/#organization` },
  areaServed: { "@type": "Country", name: "Italy" },
  serviceType: "Marketing Agency Services"
});

export const generateProfessionalServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description: "Agenzia di marketing a percentuale specializzata nel settore edile italiano. Lead generation e acquisizione clienti per serramentisti, imprese edili e produttori di infissi.",
  url: `${siteConfig.url}/servizi`,
  provider: { "@id": `${siteConfig.url}/#organization` },
  areaServed: { "@type": "Country", name: "Italy" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sistema Marketing Edile",
    itemListElement: [
      { "@type": "OfferCatalog", name: "Strategia", description: "Marketing edile specializzato, piano comunicativo, landing page ad alta conversione" },
      { "@type": "OfferCatalog", name: "Produzione", description: "Contenuti video scriptati, editing video professionale, contenuti ottimizzati per social" },
      { "@type": "OfferCatalog", name: "Gestione", description: "Advertising gestito, confronto settimanale, referente dedicato" }
    ]
  }
});

export const generatePersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Florin Andriciuc",
  jobTitle: "Fondatore & CEO",
  description: "Fondatore di Marketing Edile®, imprenditore con 8+ anni di esperienza nel marketing per il settore edile. Proprietario di un'azienda di serramenti con oltre €2M di vendite in 2 anni.",
  worksFor: { "@id": `${siteConfig.url}/#organization` },
  knowsAbout: [
    "Marketing per imprese edili",
    "Lead generation edilizia",
    "Vendita serramenti e infissi",
    "Marketing a risposta diretta"
  ]
});

export const generateOfferSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Offer",
  name: "Sistema Marketing Edile a Percentuale",
  description: "Marketing Edile® lavora solo a percentuale sulle vendite generate. Nessun canone fisso, nessun anticipo. Paghi solo quando chiudi una commessa grazie ai lead generati.",
  url: `${siteConfig.url}/prezzi`,
  seller: { "@id": `${siteConfig.url}/#organization` },
  areaServed: { "@type": "Country", name: "Italy" },
  eligibleRegion: { "@type": "Country", name: "Italy" },
  category: "Marketing Services",
  priceCurrency: "EUR",
  priceSpecification: {
    "@type": "PriceSpecification",
    description: "Percentuale sulle vendite generate — nessun canone fisso"
  }
});

export const generateCaseStudySchema = (caseStudy: {
  company: string;
  sector: string;
  highlight: string;
  testimonialText: string;
  testimonialAuthor: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: { "@id": `${siteConfig.url}/#organization` },
  reviewBody: caseStudy.testimonialText,
  author: {
    "@type": "Person",
    name: caseStudy.testimonialAuthor
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5"
  }
});
