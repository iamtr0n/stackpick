import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'All Articles',
  description: 'Browse all StackPick software comparisons and buying guides for small business owners.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-[#111] mb-2">All Articles</h1>
      <p className="text-gray-500 mb-10">
        Software comparisons, buying guides, and honest recommendations for small business owners.
      </p>

      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-100 pb-6">
            <Link href={`/blog/${post.slug}`} className="group">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                {post.category.replace(/-/g, ' ')}
              </span>
              <h2 className="mt-1 text-xl font-semibold text-[#111] group-hover:text-[#2563EB] transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="mt-2 text-gray-500 leading-relaxed">
                {post.description}
              </p>
              <div className="mt-3 flex items-center gap-4 text-sm text-gray-400">
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
