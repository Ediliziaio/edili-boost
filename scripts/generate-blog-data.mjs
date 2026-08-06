// Genera i dati blog come JSON statici in public/blog-data/:
//   - index.json          → tutti i post SENZA content (per il listing /blog)
//   - posts/<slug>.json   → post completo (caricato on-demand da /blog/:slug)
//
// Prima questi dati viaggiavano dentro il bundle JS (chunk useBlogPosts da ~1,2 MB
// non compresso) scaricato su ogni pagina blog. Ora il client scarica solo l'indice
// leggero e il singolo articolo che sta leggendo.
//
// La logica di merge/dedup/sort replica ESATTAMENTE quella storica di
// src/hooks/useBlogPosts.ts: prima occorrenza per slug vince, ordine
// rewritten → aeo → blogPosts (che già include seoExpansion/ediliziaCloud/cloudAi).
import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "esbuild";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public", "blog-data");
const bundleFile = path.join(root, "node_modules", ".cache", "blog-data-bundle.mjs");

// blog-posts.ts è TypeScript con import relativi: lo bundlo con esbuild per importarlo in Node.
await mkdir(path.dirname(bundleFile), { recursive: true });
await build({
  entryPoints: [path.join(root, "src/data/blog-posts.ts")],
  bundle: true,
  format: "esm",
  platform: "node",
  outfile: bundleFile,
  logLevel: "silent",
});

const { blogPosts } = await import(pathToFileURL(bundleFile).href);
const { rewrittenPosts } = await import(pathToFileURL(path.join(root, "src/data/rewrittenPosts.js")).href);
const { aeoPosts } = await import(pathToFileURL(path.join(root, "src/data/aeoPosts.js")).href);

const toIso = (value) => {
  if (!value) return null;
  if (value instanceof Date) return value.toISOString();
  return String(value);
};

const toPostDB = (p) => ({
  id: p.id,
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  content: p.content,
  cover_image_url: p.cover_image_url,
  author_id: p.author?.id ?? null,
  category: p.category,
  tags: p.tags,
  published_at: toIso(p.published_at),
  updated_at: toIso(p.updated_at),
  reading_time: p.reading_time,
  featured: p.featured,
  status: p.status,
  seo_title: p.seo_title,
  seo_description: p.seo_description,
  created_at: toIso(p.published_at) ?? "",
  author: p.author ? { ...p.author, created_at: "2025-12-26T10:24:30.099858+00:00" } : null,
});

const rawSources = [...rewrittenPosts, ...aeoPosts, ...blogPosts];
const bySlug = new Map();
for (const p of rawSources) {
  if (p && p.status === "published" && p.slug && !bySlug.has(p.slug)) {
    bySlug.set(p.slug, p);
  }
}

const allPosts = Array.from(bySlug.values())
  .sort((a, b) => new Date(toIso(b.published_at) ?? 0).getTime() - new Date(toIso(a.published_at) ?? 0).getTime())
  .map(toPostDB);

if (allPosts.length < 90) {
  throw new Error(`generate-blog-data: solo ${allPosts.length} post trovati — atteso ~97. Controllare le fonti dati.`);
}

await rm(outDir, { recursive: true, force: true });
await mkdir(path.join(outDir, "posts"), { recursive: true });

const index = allPosts.map(({ content, ...rest }) => rest);
await writeFile(path.join(outDir, "index.json"), JSON.stringify(index));

for (const post of allPosts) {
  await writeFile(path.join(outDir, "posts", `${post.slug}.json`), JSON.stringify(post));
}

const indexKb = Math.round(JSON.stringify(index).length / 1024);
console.log(`Blog data: ${allPosts.length} post → index.json (${indexKb} KB) + ${allPosts.length} file per-slug.`);
