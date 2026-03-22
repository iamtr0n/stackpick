import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'StackPick — Best SaaS Tools for Small Business',
  description: 'Honest, in-depth comparisons of the best SaaS software for small business owners. Find the right tools for CRM, email marketing, project management, and more.',
}

const categories = [
  { name: 'CRM Software', slug: 'crm', description: 'Find the best customer relationship management tool for your team.', emoji: '🤝' },
  { name: 'Email Marketing', slug: 'email-marketing', description: 'Pick the right email platform to grow and engage your audience.', emoji: '✉️' },
  { name: 'Project Management', slug: 'project-management', description: 'Keep your team aligned, on track, and shipping.', emoji: '📋' },
  { name: 'Accounting', slug: 'accounting', description: 'Invoice clients and manage your books without the headache.', emoji: '💰' },
]

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#111] leading-tight">
            Pick the right software.<br />
            <span className="text-[#2563EB]">Stop second-guessing.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl mx-auto">
            Honest, in-depth comparisons of the best SaaS tools for small business owners. No fluff — just clear picks backed by real research.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/blog"
              className="inline-block bg-[#2563EB] text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse All Articles
            </Link>
            <Link
              href="/categories/crm"
              className="inline-block border border-gray-200 text-[#111] font-semibold px-6 py-3 rounded-lg hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
            >
              CRM Comparisons
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#F8F9FA] py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#111] mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#2563EB] hover:shadow-sm transition-all group"
              >
                <div className="text-3xl mb-3">{cat.emoji}</div>
                <h3 className="font-semibold text-[#111] group-hover:text-[#2563EB] transition-colors">{cat.name}</h3>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#111]">Latest Articles</h2>
            <Link href="/blog" className="text-sm text-[#2563EB] font-medium hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-gray-100 rounded-xl p-6 hover:border-[#2563EB] hover:shadow-sm transition-all"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                  {post.category.replace(/-/g, ' ')}
                </span>
                <h3 className="mt-2 font-semibold text-[#111] leading-snug group-hover:text-[#2563EB] transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
                  {post.description}
                </p>
                <div className="mt-4 text-xs text-gray-400">{post.readTime}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#F8F9FA] py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#2563EB]">50+</div>
              <div className="text-sm text-gray-500 mt-1">Tools reviewed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#2563EB]">100%</div>
              <div className="text-sm text-gray-500 mt-1">Independent reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#2563EB]">No BS</div>
              <div className="text-sm text-gray-500 mt-1">We say what we think</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
