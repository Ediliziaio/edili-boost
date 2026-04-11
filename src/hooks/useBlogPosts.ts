import { useQuery } from '@tanstack/react-query';
import { blogPosts, blogAuthor, StaticBlogPost, StaticBlogAuthor } from '@/data/blog-posts';

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
    published_at: p.published_at,
    updated_at: p.updated_at,
    reading_time: p.reading_time,
    featured: p.featured,
    status: p.status,
    seo_title: p.seo_title,
    seo_description: p.seo_description,
    created_at: p.published_at,
    author: toAuthor(p.author)
  };
}

const allPosts: BlogPostDB[] = blogPosts
  .filter(p => p.status === 'published')
  .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
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
