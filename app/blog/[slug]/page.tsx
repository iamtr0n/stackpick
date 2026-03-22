import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import Link from 'next/link'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `https://stackpick.io/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-[#2563EB]">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[#2563EB]">Articles</Link>
        <span>/</span>
        <span className="text-[#111]">{post.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <Link
          href={`/categories/${post.category}`}
          className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] hover:underline"
        >
          {post.category.replace(/-/g, ' ')}
        </Link>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-[#111] leading-tight">
          {post.title}
        </h1>
        <p className="mt-3 text-lg text-gray-500">{post.description}</p>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      {/* Divider */}
      <hr className="border-gray-100 mb-10" />

      {/* Article content */}
      <article className="prose max-w-none">
        <MDXRemote source={post.content} />
      </article>

      {/* Footer CTA */}
      <div className="mt-16 bg-[#F8F9FA] rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold text-[#111]">Found this helpful?</h3>
        <p className="mt-2 text-gray-500">Browse more honest software comparisons for small business owners.</p>
        <Link
          href="/blog"
          className="inline-block mt-4 bg-[#2563EB] text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Browse All Articles
        </Link>
      </div>
    </div>
  )
}
