// Potenziamento AEO degli articoli unici di blog-posts.ts (risposta secca + link hub + FAQ).
// Applicato a build time SIA da scripts/generate-blog-data.mjs (React) SIA da
// scripts/prerender-seo.mjs (HTML servito ai crawler): i due lati devono coincidere.
// I dati (answer/faqs) vengono generati in postEnhancementsData.js.
import { enhancementsData } from "./postEnhancementsData.js";

// slug -> hub del silo (link obbligatorio nei primi paragrafi).
const HUB = {
  serramenti: { href: "/marketing-serramenti", label: "agenzia marketing serramenti" },
  fotovoltaico: { href: "/marketing-fotovoltaico", label: "marketing per il fotovoltaico" },
  edilizia: { href: "/marketing-edilizia", label: "agenzia marketing edilizia" },
};
const HUB_BY_SLUG = {
  "30-richieste-preventivi-qualificati-infissi-fotovoltaico-edilizia-2026": "serramenti",
  "aumentare-vendite-infissi-fotovoltaico-edilizia-2026": "serramenti",
  "marketing-locale-serramentisti-google-business-seo": "serramenti",
  "marketing-serramentisti-7-errori-costano-100000-euro": "serramenti",
  "acquisire-clienti-fotovoltaico-lead-generation-2026": "fotovoltaico",
  "futuro-fotovoltaico-italia-acquisire-clienti-2026-2027": "fotovoltaico",
};

const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function getEnhancement(slug) {
  return enhancementsData[slug] || null;
}

export function getPostFaqs(slug) {
  const e = enhancementsData[slug];
  return e && e.faqs ? e.faqs : null;
}

/** Restituisce il content HTML potenziato (idempotente: non riapplica se già presente). */
export function enhanceContent(slug, content = "") {
  const e = enhancementsData[slug];
  if (!e || content.includes('class="risposta-secca"')) return content;
  const hub = HUB[HUB_BY_SLUG[slug] || "edilizia"];
  const opening =
    `<p class="risposta-secca"><strong>${esc(e.answer)}</strong></p>` +
    `<p>Se vuoi confrontare il tuo caso con chi fa questo lavoro ogni giorno, guarda come opera la nostra ` +
    `<a href="${hub.href}">${hub.label}</a>: solo a provvigione sulle vendite chiuse, zero canone fisso.</p>`;
  const faq =
    "<h2>Domande frequenti</h2>" +
    e.faqs.map((f) => `<h3>${esc(f.question)}</h3><p>${esc(f.answer)}</p>`).join("");
  return opening + content + faq;
}
