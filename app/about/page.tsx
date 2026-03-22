import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About StackPick',
  description: 'StackPick is an independent software review site for small business owners. We test tools honestly and tell you which ones are actually worth it.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-[#111] mb-6">About StackPick</h1>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          StackPick was built by small business operators who were frustrated with software review sites that seemed to recommend everything equally, bury the lede, and pad every article with 3,000 words of filler.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          We&apos;re different. We make clear picks. We explain why. And we&apos;re not afraid to say when a tool is overpriced, overhyped, or just wrong for your business type.
        </p>

        <h2 className="text-xl font-bold text-[#111] mt-8 mb-3">Our Process</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Every tool we review gets hands-on testing. We create accounts, go through onboarding, build real workflows, and evaluate each platform against the criteria that actually matter to small business owners: ease of use, pricing transparency, support quality, and whether the thing does what it says it does.
        </p>

        <h2 className="text-xl font-bold text-[#111] mt-8 mb-3">How We Make Money</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          StackPick earns revenue through affiliate partnerships. When you click a link to a software product and make a purchase, we may earn a commission — at no additional cost to you.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          This is how we keep the lights on and keep producing independent content. However, our affiliate relationships do <strong>not</strong> influence our recommendations. We&apos;ve recommended tools we have no affiliate relationship with, and we&apos;ve been critical of tools we do earn commissions from. Editorial independence is non-negotiable.
        </p>

        <h2 className="text-xl font-bold text-[#111] mt-8 mb-3">What We Cover</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
          <li>CRM and sales software</li>
          <li>Email marketing platforms</li>
          <li>Project management tools</li>
          <li>Accounting and invoicing software</li>
          <li>Customer support tools</li>
          <li>Marketing automation platforms</li>
        </ul>

        <h2 className="text-xl font-bold text-[#111] mt-8 mb-3">Get in Touch</h2>
        <p className="text-gray-600 leading-relaxed">
          Have a tool you&apos;d like us to review? A correction to flag? Or just want to say hi?{' '}
          <Link href="/contact" className="text-[#2563EB] hover:underline">
            Drop us a message
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
