import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostMeta {
  title: string
  slug: string
  category: string
  description: string
  date: string
  readTime: string
}

export interface Post extends PostMeta {
  content: string
}

const contentDir = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(contentDir)
  const posts = files
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(contentDir, file), 'utf8')
      const { data } = matter(raw)
      return data as PostMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export function getPostBySlug(slug: string): Post | null {
  const files = fs.readdirSync(contentDir)
  const file = files.find((f) => f.replace('.mdx', '') === slug)
  if (!file) return null

  const raw = fs.readFileSync(path.join(contentDir, file), 'utf8')
  const { data, content } = matter(raw)

  return {
    ...(data as PostMeta),
    content,
  }
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter(
    (p) => p.category.toLowerCase().replace(/\s+/g, '-') === category.toLowerCase()
  )
}

export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const cats = posts.map((p) => p.category)
  return Array.from(new Set(cats))
}
