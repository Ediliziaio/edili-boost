import { useQuery } from '@tanstack/react-query';
import { blogPosts, blogAuthor, StaticBlogPost, StaticBlogAuthor } from '@/data/blog-posts';
// Archivi SEO aggiuntivi — stessa shape di StaticBlogPost.
// Prima NON erano collegati al sito React: erano prerenderizzati e presenti in sitemap,
// ma useBlogPost() non li trovava e BlogPost.tsx rimandava a /blog dopo l'hydration.
// Questo generava il "Scansionata, ma attualmente non indicizzata" su GSC per ~70 URL.
import { seoExpansionPosts } from '@/data/seoExpansionPosts.js';
import { cloudAiSeoPosts } from '@/data/cloudAiSeoPosts.js';
import { ediliziaCloudPosts } from '@/data/ediliziaCloudContent.js';
import { aeoPosts } from '@/data/aeoPosts.js';
import { rewrittenPosts } from '@/data/rewrittenPosts.js';

export interface BlogAuthor {
  id: string;
  name: string;
  role: string;
  bio: string | null;
  avatar_url: string | null;
  created_at: string;
}

export interface BlogPostDB {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image_url: string | null;
  author_id: string | null;
  category: string;
  tags: string[];
  published_at: string | null;
  updated_at: string | null;
  reading_time: number;
  featured: boolean;
  status: string;
  seo_title: string | null;
  seo_description: string | null;
  created_at: string;
  author: BlogAuthor | null;
}

function toAuthor(a: StaticBlogAuthor): BlogAuthor {
  return {
    ...a,
    bio: a.bio,
    created_at: "2025-12-26T10:24:30.099858+00:00"
  };
}

// Alcuni archivi hanno updated_at come oggetto Date invece che stringa ISO.
function toIso(value: unknown): string | null {
  if (!value) return null;
  if (value instanceof Date) return value.toISOString();
  return String(value);
}

function toPostDB(p: StaticBlogPost): BlogPostDB {
  return {
    id: p.id,
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    content: p.content,
    cover_image_url: p.cover_image_url,
    author_id: p.author.id,
    category: p.category,
    tags: p.tags,
    published_at: toIso(p.published_at),
    updated_at: toIso(p.updated_at),
    reading_time: p.reading_time,
    featured: p.featured,
    status: p.status,
    seo_title: p.seo_title,
    seo_description: p.seo_description,
    created_at: toIso(p.published_at) ?? '',
    author: toAuthor(p.author)
  };
}

// Le stesse 4 fonti aggregate dal prerender (scripts/prerender-seo.mjs) devono essere
// risolvibili dal sito React, così ogni URL in sitemap corrisponde a una pagina reale.
const rawSources = [
  // Le versioni riscritte vanno PRIME: la deduplica per slug tiene la prima
  // occorrenza, quindi shadowano automaticamente i vecchi duplicati.
  ...(rewrittenPosts as unknown as StaticBlogPost[]),
  ...(aeoPosts as unknown as StaticBlogPost[]),
  ...(blogPosts as StaticBlogPost[]),
  ...(seoExpansionPosts as unknown as StaticBlogPost[]),
  ...(cloudAiSeoPosts as unknown as StaticBlogPost[]),
  ...(ediliziaCloudPosts as unknown as StaticBlogPost[]),
];

// Dedup per slug: la prima occorrenza vince (blog-posts.ts ha precedenza).
const bySlug = new Map<string, StaticBlogPost>();
for (const p of rawSources) {
  if (p && p.status === 'published' && p.slug && !bySlug.has(p.slug)) {
    bySlug.set(p.slug, p);
  }
}

const allPosts: BlogPostDB[] = Array.from(bySlug.values())
  .sort((a, b) => new Date(toIso(b.published_at) ?? 0).getTime() - new Date(toIso(a.published_at) ?? 0).getTime())
  .map(toPostDB);

export function useBlogPosts(category?: string) {
  return useQuery({
    queryKey: ['blog-posts', category],
    queryFn: async () => {
      if (category && category !== 'all') {
        return allPosts.filter(p => p.category === category);
      }
      return allPosts;
    },
  });
}

export function useFeaturedPosts() {
  return useQuery({
    queryKey: ['blog-posts', 'featured'],
    queryFn: async () => {
      return allPosts.filter(p => p.featured);
    },
  });
}

export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      return allPosts.find(p => p.slug === slug) || null;
    },
    enabled: !!slug,
  });
}

export function useRelatedPosts(currentPostId: string, category: string, tags: string[], limit = 3) {
  return useQuery({
    queryKey: ['blog-posts', 'related', currentPostId],
    queryFn: async () => {
      return allPosts
        .filter(p => p.id !== currentPostId && p.category === category)
        .slice(0, limit);
    },
    enabled: !!currentPostId,
  });
}
