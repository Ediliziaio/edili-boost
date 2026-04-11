import { useMemo } from 'react';

interface ArticleContentProps {
  content: string;
}

export function ArticleContent({ content }: ArticleContentProps) {
  // Processa il contenuto: se è plain text con \n, convertilo in HTML
  // Aggiunge ID ai titoli H2/H3 per table of contents e anchor links
  const processedContent = useMemo(() => {
    const hasHtmlTags = /<[a-z][\s\S]*>/i.test(content);

    let html = content;
    if (!hasHtmlTags) {
      html = content
        .split(/\n\n+/)
        .map(paragraph => `<p>${paragraph.replace(/\n/g, '<br>')}</p>`)
        .join('');
    }

    // Add IDs to h2 and h3 headings for anchor navigation
    html = html.replace(/<h([2-3])([^>]*)>(.*?)<\/h[2-3]>/gi, (match, level, attrs, text) => {
      if (attrs.includes('id=')) return match;
      const plainText = text.replace(/<[^>]*>/g, '');
      const id = plainText
        .toLowerCase()
        .replace(/[àáâãäå]/g, 'a').replace(/[èéêë]/g, 'e')
        .replace(/[ìíîï]/g, 'i').replace(/[òóôõö]/g, 'o')
        .replace(/[ùúûü]/g, 'u')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
    });

    return html;
  }, [content]);

  return (
    <div 
      className="prose prose-lg dark:prose-invert max-w-prose mx-auto
        prose-headings:font-heading prose-headings:text-foreground
        prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:font-bold prose-h2:mt-14 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-border
        prose-h3:text-xl prose-h3:md:text-2xl prose-h3:font-semibold prose-h3:mt-10 prose-h3:mb-5
        prose-p:text-muted-foreground prose-p:leading-[1.9] prose-p:md:leading-[2] prose-p:mb-7 prose-p:text-base prose-p:md:text-lg
        prose-a:text-primary prose-a:font-medium prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-primary/80
        prose-strong:text-foreground prose-strong:font-bold
        prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-4 prose-ul:mb-8 prose-ul:marker:text-primary
        prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-4 prose-ol:mb-8 prose-ol:marker:text-primary prose-ol:marker:font-semibold
        prose-li:text-muted-foreground prose-li:leading-[1.85] prose-li:text-base prose-li:md:text-lg
        prose-blockquote:border-l-4 prose-blockquote:border-primary 
        prose-blockquote:bg-muted/30 prose-blockquote:rounded-r-xl
        prose-blockquote:pl-6 prose-blockquote:py-5 prose-blockquote:pr-5
        prose-blockquote:italic prose-blockquote:my-10
        prose-blockquote:text-foreground prose-blockquote:text-lg prose-blockquote:leading-relaxed
        prose-table:border-collapse prose-table:w-full prose-table:my-10
        prose-td:border prose-td:border-border prose-td:px-4 prose-td:py-3
        prose-th:border prose-th:border-border prose-th:px-4 prose-th:py-3 
        prose-th:bg-muted prose-th:font-semibold
        prose-img:rounded-2xl prose-img:shadow-xl prose-img:my-10
        prose-em:text-muted-foreground prose-em:opacity-80"
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
}
