import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Tools for Small Business Owners',
  description: 'Free calculators and tools to help small business owners price their services, plan their finances, and make better decisions.',
}

const tools = [
  {
    title: 'Service Pricing Calculator',
    description: 'Calculate your hourly rate and project pricing based on your income goals and overhead.',
    href: '/tools/service-pricing-calculator',
    emoji: '💰',
    tag: 'Free',
  },
]

export default function ToolsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#111]">Free Tools for Small Business Owners</h1>
        <p className="mt-4 text-lg text-gray-500 leading-relaxed max-w-2xl">
          Calculators and planning tools to help you price your services, set income goals, and make smarter business decisions — no signup required.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group border border-gray-100 rounded-xl p-6 hover:border-[#2563EB] hover:shadow-sm transition-all bg-white"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl">{tool.emoji}</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-green-600 bg-green-50 px-2 py-1 rounded">
                {tool.tag}
              </span>
            </div>
            <h2 className="text-lg font-semibold text-[#111] group-hover:text-[#2563EB] transition-colors">
              {tool.title}
            </h2>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">{tool.description}</p>
            <div className="mt-4 text-sm text-[#2563EB] font-medium">
              Open calculator →
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
