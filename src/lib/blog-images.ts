// Mappa delle immagini del blog - importate come ES6 modules
import blogPreventiviCover from '@/assets/blog-preventivi-edilizia-cover.jpg';
import blogControlloGestione from '@/assets/blog-controllo-gestione-edilizia.jpg';
import blogPerdereClienti from '@/assets/blog-perdere-clienti-distrazione.jpg';
import blogSmettiSconti from '@/assets/blog-smetti-fare-sconti.jpg';
import blogEfficienzaOperativa from '@/assets/blog-efficienza-operativa-edilizia.jpg';
import blogAziendaDipendeDaTe from '@/assets/blog-azienda-dipende-da-te.jpg';
import blogClientiQualificati from '@/assets/blog-clienti-qualificati-edilizia.jpg';
import blogAumentareVendite from '@/assets/blog-aumentare-vendite-edilizia.jpg';
import blog30RichiesteQualificate from '@/assets/blog-30-richieste-qualificate.jpg';
import blogPreventivi from '@/assets/blog-preventivi-edilizia.jpg';

// Mappa path -> immagine importata (supporta sia /src/assets/ che /public/ paths)
const blogImageMap: Record<string, string> = {
  '/src/assets/blog-preventivi-edilizia-cover.jpg': blogPreventiviCover,
  '/src/assets/blog-controllo-gestione-edilizia.jpg': blogControlloGestione,
  '/src/assets/blog-perdere-clienti-distrazione.jpg': blogPerdereClienti,
  '/src/assets/blog-smetti-fare-sconti.jpg': blogSmettiSconti,
  '/src/assets/blog-efficienza-operativa-edilizia.jpg': blogEfficienzaOperativa,
  '/src/assets/blog-azienda-dipende-da-te.jpg': blogAziendaDipendeDaTe,
  '/src/assets/blog-clienti-qualificati-edilizia.jpg': blogClientiQualificati,
  '/src/assets/blog-aumentare-vendite-edilizia.jpg': blogAumentareVendite,
  '/src/assets/blog-30-richieste-qualificate.jpg': blog30RichiesteQualificate,
  '/src/assets/blog-preventivi-edilizia.jpg': blogPreventivi,
  // Static data paths (from /public/)
  '/blog-preventivi-edilizia-cover.jpg': blogPreventiviCover,
  '/blog-controllo-gestione-edilizia.jpg': blogControlloGestione,
  '/blog-perdere-clienti-distrazione.jpg': blogPerdereClienti,
  '/blog-smetti-fare-sconti.jpg': blogSmettiSconti,
  '/blog-efficienza-operativa-edilizia.jpg': blogEfficienzaOperativa,
  '/blog-azienda-dipende-da-te.jpg': blogAziendaDipendeDaTe,
  '/blog-clienti-qualificati-edilizia.jpg': blogClientiQualificati,
  '/blog-aumentare-vendite-edilizia.jpg': blogAumentareVendite,
  '/blog-30-richieste-qualificate.jpg': blog30RichiesteQualificate,
  '/blog-preventivi-edilizia.jpg': blogPreventivi,
};

/**
 * Risolve l'URL dell'immagine del blog.
 * Mappa i path locali agli import ES6 per ottimizzazione Vite.
 */
export function resolveBlogImageUrl(url: string | null | undefined): string | null {
  if (!url) return null;

  if (blogImageMap[url]) {
    return blogImageMap[url];
  }

  return url;
}

/**
 * Variante WebP di una cover in /blog-covers/ (generata da scripts/convert-covers.mjs).
 * size 1200 → hero articolo (LCP), size 600 → card del listing.
 * I .jpg originali restano per og:image (i social non accettano sempre WebP).
 * Per URL fuori da /blog-covers/ restituisce l'URL invariato.
 */
export function webpCoverUrl(url: string | null | undefined, size: 600 | 1200 = 1200): string | null {
  if (!url) return null;
  if (!url.startsWith('/blog-covers/') || !url.endsWith('.jpg')) return url;
  const base = url.slice(0, -'.jpg'.length);
  return size === 600 ? `${base}-600.webp` : `${base}.webp`;
}
