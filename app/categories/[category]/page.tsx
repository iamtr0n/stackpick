import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllCategories, getPostsByCategory } from '@/lib/posts'

interface Props {
  params: { category: string }
}

const categoryNames: Record<string, string> = {
  'crm': 'CRM Software',
  'email-marketing': 'Email Marketing',
  'project-management': 'Project Management',
  'accounting': 'Accounting & Invoicing',
}

const categoryDescriptions: Record<string, string> = {
  'crm': 'Honest comparisons of the best CRM software for small business. We cover HubSpot, Pipedrive, Zoho, Salesforce, and more.',
  'email-marketing': 'Find the right email marketing platform to grow and engage your audience. We compare Mailchimp, ConvertKit, ActiveCampaign, and more.',
  'project-management': 'Keep your team organized and shipping. We review Notion, Monday.com, Asana, ClickUp, and more.',
  'accounting': 'Manage your books without the headache. We compare Wave, QuickBooks, FreshBooks, and more.',
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  const categoryKeys = Object.keys(categoryNames)
  // Include all known categories plus any from posts
  const allCats = Array.from(new Set([...categories.map(c => c.toLowerCase().replace(/\s+/g, '-')), ...categoryKeys]))
  return allCats.map((category) => ({ category }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const name = categoryNames[params.category] || params.category
  const description = categoryDescriptions[params.category] || `Software comparisons for ${name}`
  return {
    title: `${name} — Best Tools for Small Business`,
    description,
  }
}

export default function CategoryPage({ params }: Props) {
  const posts = getPostsByCategory(params.category)
  const name = categoryNames[params.category]

  if (!name && posts.length === 0) {
    notFound()
  }

  const displayName = name || params.category.replace(/-/g, ' ')
  const description = categoryDescriptions[params.category] || `Software comparisons for ${displayName}`

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-[#2563EB]">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[#2563EB]">Articles</Link>
        <span>/</span>
        <span className="text-[#111] capitalize">{displayName}</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#111] mb-2 capitalize">{displayName}</h1>
      <p className="text-gray-500 mb-10">{description}</p>

      {posts.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <p>No articles in this category yet. Check back soon.</p>
          <Link href="/blog" className="mt-4 inline-block text-[#2563EB] hover:underline">
            Browse all articles →
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-100 pb-6">
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-xl font-semibold text-[#111] group-hover:text-[#2563EB] transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="mt-2 text-gray-500 leading-relaxed">{post.description}</p>
                <div className="mt-3 flex items-center gap-4 text-sm text-gray-400">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
