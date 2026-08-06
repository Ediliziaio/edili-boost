import { useQuery } from '@tanstack/react-query';

// I dati blog NON sono più importati nel bundle JS (erano ~1,2 MB di chunk
// scaricato su ogni pagina blog). Vengono generati come JSON statici da
// scripts/generate-blog-data.mjs (eseguito da `npm run dev` e `npm run build`):
//   /blog-data/index.json        → tutti i post senza content (listing)
//   /blog-data/posts/<slug>.json → post completo (pagina articolo)
// La logica di merge/dedup/sort vive nello script ed è identica a quella storica.

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

// L'indice non contiene `content`: chi ha bisogno del testo usa useBlogPost(slug).
export type BlogPostIndexEntry = Omit<BlogPostDB, 'content'>;

async function fetchIndex(): Promise<BlogPostIndexEntry[]> {
  const res = await fetch('/blog-data/index.json');
  if (!res.ok) throw new Error(`Impossibile caricare l'indice del blog (HTTP ${res.status})`);
  return res.json();
}

// Dati statici per build: nessun motivo di rifetchare durante la sessione.
const staticQuery = { staleTime: Infinity, gcTime: Infinity } as const;

export function useBlogPosts(category?: string) {
  return useQuery({
    queryKey: ['blog-posts', category],
    queryFn: async () => {
      const posts = await fetchIndex();
      if (category && category !== 'all') {
        return posts.filter(p => p.category === category);
      }
      return posts;
    },
    ...staticQuery,
  });
}

export function useFeaturedPosts() {
  return useQuery({
    queryKey: ['blog-posts', 'featured'],
    queryFn: async () => (await fetchIndex()).filter(p => p.featured),
    ...staticQuery,
  });
}

export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async (): Promise<BlogPostDB | null> => {
      const res = await fetch(`/blog-data/posts/${encodeURIComponent(slug)}.json`);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error(`Impossibile caricare l'articolo (HTTP ${res.status})`);
      return res.json();
    },
    enabled: !!slug,
    ...staticQuery,
  });
}

export function useRelatedPosts(currentPostId: string, category: string, tags: string[], limit = 3) {
  return useQuery({
    queryKey: ['blog-posts', 'related', currentPostId],
    queryFn: async () => {
      const posts = await fetchIndex();
      return posts
        .filter(p => p.id !== currentPostId && p.category === category)
        .slice(0, limit);
    },
    enabled: !!currentPostId,
    ...staticQuery,
  });
}
