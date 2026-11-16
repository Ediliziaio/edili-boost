/** Same selector for rendered HTML and client navigation. */
export function selectRelatedPosts(posts, current, limit = 3) {
  const tags = new Set((current.tags || []).map(tag => tag.toLocaleLowerCase('it')));
  const candidates = posts.filter(post => post.slug !== current.slug);
  const seed = [...current.slug].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return candidates
    .map((post, index) => ({
      post,
      score: (post.tags || []).filter(tag => tags.has(tag.toLocaleLowerCase('it'))).length * 2 + Number(post.category === current.category),
      order: (index + seed) % Math.max(candidates.length, 1),
    }))
    .sort((a, b) => b.score - a.score || a.order - b.order)
    .slice(0, limit)
    .map(item => item.post);
}
