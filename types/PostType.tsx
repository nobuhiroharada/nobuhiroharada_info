export type PostType = {
  slug: string,
  frontmatter: {
    title: string,
    date: string,
    excerpt: string,
    cover_image: string,
    category: string,
    author: string,
    author_image: string,
  }
}