-- Create blog_authors table
CREATE TABLE public.blog_authors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS on blog_authors (public read)
ALTER TABLE public.blog_authors ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read blog_authors" 
ON public.blog_authors 
FOR SELECT 
TO anon, authenticated
USING (true);

-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image_url TEXT,
  author_id UUID REFERENCES public.blog_authors(id) ON DELETE SET NULL,
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  published_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
  reading_time INTEGER DEFAULT 5,
  featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'draft',
  seo_title TEXT,
  seo_description TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS on blog_posts (public read for published)
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read published posts" 
ON public.blog_posts 
FOR SELECT 
TO anon, authenticated
USING (status = 'published');

-- Create storage bucket for blog images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('blog-images', 'blog-images', true);

-- Storage policy for public read
CREATE POLICY "Public read blog images"
ON storage.objects
FOR SELECT
TO anon, authenticated
USING (bucket_id = 'blog-images');

-- Create index for faster queries
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX idx_blog_posts_category ON public.blog_posts(category);
CREATE INDEX idx_blog_posts_status ON public.blog_posts(status);
CREATE INDEX idx_blog_posts_published_at ON public.blog_posts(published_at DESC);