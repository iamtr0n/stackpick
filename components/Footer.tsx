import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FA] border-t border-gray-200 mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-[#111]">
              Stack<span className="text-[#2563EB]">Pick</span>
            </Link>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Honest, independent software reviews for small business owners. We do the research so you don&apos;t have to.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-[#111] uppercase tracking-wider mb-3">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/categories/crm" className="text-sm text-gray-500 hover:text-[#2563EB]">CRM Software</Link></li>
              <li><Link href="/categories/email-marketing" className="text-sm text-gray-500 hover:text-[#2563EB]">Email Marketing</Link></li>
              <li><Link href="/categories/project-management" className="text-sm text-gray-500 hover:text-[#2563EB]">Project Management</Link></li>
              <li><Link href="/categories/accounting" className="text-sm text-gray-500 hover:text-[#2563EB]">Accounting & Invoicing</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#111] uppercase tracking-wider mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-500 hover:text-[#2563EB]">About</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-500 hover:text-[#2563EB]">Contact</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-500 hover:text-[#2563EB]">All Articles</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} StackPick.io. All rights reserved.</p>
          <p className="text-xs text-gray-400">
            Some links are affiliate links. We may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  )
}
