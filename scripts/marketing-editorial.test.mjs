import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { serviceBodyHtml, servicePage, serviceFaqs, blogPaths } from "../src/data/marketingEditorialPages.js";
import { agencyGuidePosts } from "../src/data/agencyGuidePosts.js";

const htmlFor = path => readFileSync(`dist/${path === "/" ? "index" : path.slice(1)}.html`, "utf8");
const jsonLd = html => [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
const originalDates = {
  "come-scegliere-agenzia-marketing-edilizia": "2026-03-28T09:00:00+00:00",
  "come-scegliere-agenzia-marketing-azienda-edile-2026": "2026-04-07T09:00:00+00:00",
  "agenzia-marketing-edilizia-come-scegliere": "2026-07-19T09:00:00+00:00",
};

test("service content and FAQ are published before JavaScript, using the visible-page source", () => {
  const html = htmlFor("/servizi");
  assert.ok(html.includes(`<h1>${servicePage.h1}</h1>`));
  assert.ok(html.includes(serviceBodyHtml));
  assert.ok(serviceBodyHtml.replace(/<[^>]+>/g, " ").split(/\s+/).length > 900);
  const faq = jsonLd(html).find(schema => schema["@type"] === "FAQPage");
  assert.ok(faq, "service FAQ schema is present in initial HTML");
  assert.deepEqual(faq.mainEntity.map(item => item.name), serviceFaqs.map(item => item.question));
  assert.ok(html.includes('rel="canonical" href="https://www.marketingedile.com/servizi"'));
});

test("the blog exposes its three reading paths and keeps each existing guide address", () => {
  const html = htmlFor("/blog");
  assert.equal(blogPaths.length, 3);
  for (const group of blogPaths) {
    assert.ok(html.includes(group.title));
    for (const link of group.links) assert.ok(html.includes(`href="${link.href}"`));
  }
  assert.equal(agencyGuidePosts.length, 3);
  assert.equal(new Set(agencyGuidePosts.map(post => post.seo_title)).size, 3);
});

test("each revised guide has the same published body in initial HTML and client JSON, retaining publication date and cover", () => {
  const index = JSON.parse(readFileSync("public/blog-data/index.json", "utf8"));
  for (const post of agencyGuidePosts) {
    const html = htmlFor(`/blog/${post.slug}`);
    const payload = JSON.parse(readFileSync(`public/blog-data/posts/${post.slug}.json`, "utf8"));
    assert.equal(payload.published_at, originalDates[post.slug]);
    assert.equal(payload.cover_image_url, post.cover_image_url);
    assert.ok(html.includes(`/blog-covers/${post.slug}.jpg`), "the published original cover remains unchanged");
    assert.equal(payload.content, post.content);
    assert.ok(html.includes(post.content), `${post.slug}: full revised content is served before hydration`);
    assert.equal(index.filter(entry => entry.slug === post.slug).length, 1);
    assert.equal(index.find(entry => entry.slug === post.slug).title, post.title);
    assert.equal(payload.faqs.length, 3);
    const article = jsonLd(html).find(schema => ["Article", "BlogPosting"].includes(schema["@type"]));
    assert.equal(article.datePublished, originalDates[post.slug]);
    assert.equal(article.dateModified, "2026-11-18T09:00:00+00:00");
    assert.ok(html.includes("data-editorial-body"));
  }
});
