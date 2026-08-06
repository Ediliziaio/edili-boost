// Converte le cover del blog (public/blog-covers/*.jpg, 1600x900 ~250 KB) in WebP:
//   <nome>.webp      → max 1200px di larghezza (hero articolo, elemento LCP)
//   <nome>-600.webp  → 600px (card del listing)
// I .jpg originali restano: servono come og:image (compatibilità social) e fallback.
// Idempotente: rigenera solo se il .webp manca o è più vecchio del .jpg.
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const coversDir = path.resolve(__dirname, "..", "public", "blog-covers");

const files = (await readdir(coversDir)).filter((f) => f.endsWith(".jpg"));

async function isStale(src, dest) {
  try {
    const [s, d] = await Promise.all([stat(src), stat(dest)]);
    return d.mtimeMs < s.mtimeMs;
  } catch {
    return true; // dest non esiste
  }
}

let generated = 0;
for (const file of files) {
  const src = path.join(coversDir, file);
  const base = file.replace(/\.jpg$/, "");
  const targets = [
    { dest: path.join(coversDir, `${base}.webp`), width: 1200 },
    { dest: path.join(coversDir, `${base}-600.webp`), width: 600 },
  ];
  for (const { dest, width } of targets) {
    if (!(await isStale(src, dest))) continue;
    await sharp(src).resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(dest);
    generated += 1;
  }
}

console.log(`Cover WebP: ${files.length} jpg sorgente, ${generated} file generati/aggiornati.`);
