import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Check the user-facing static output against the records fetched by React.
// This catches a correct title paired with a different article's body.
const root = process.cwd();
const index = JSON.parse(readFileSync(join(root, 'public/blog-data/index.json'), 'utf8'));
const escape = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const errors = [];
for (const entry of index) {
  const post = JSON.parse(readFileSync(join(root, 'public/blog-data/posts', `${entry.slug}.json`), 'utf8'));
  const html = readFileSync(join(root, 'dist/blog', `${entry.slug}.html`), 'utf8');
  if (!html.includes(`<h1>${escape(post.title)}</h1>`)) errors.push(`${entry.slug}: title differs from client record`);
  if (!html.includes(`<div data-editorial-body>${post.content}</div>`)) errors.push(`${entry.slug}: body differs from client record`);
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
  const flat = schemas.flatMap(value => value['@graph'] || (Array.isArray(value) ? value : [value]));
  const article = flat.find(value => ['Article', 'BlogPosting'].includes(value['@type']));
  if (!article || article.headline !== post.title) errors.push(`${entry.slug}: article headline differs from client record`);
}
const report = { checkedArticles: index.length, errors };
writeFileSync(join(root, '.blog-consistency-report.json'), JSON.stringify(report, null, 2) + '\n');
if (errors.length) throw new Error(`Blog consistency failed:\n${errors.join('\n')}`);
console.log(`Blog consistency: ${index.length} production pages match the client title, full body and Article headline.`);
