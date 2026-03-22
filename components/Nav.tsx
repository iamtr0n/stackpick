'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-[#111] hover:text-[#2563EB] transition-colors">
          Stack<span className="text-[#2563EB]">Pick</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/blog" className="text-sm font-medium text-[#333] hover:text-[#2563EB] transition-colors">
            Articles
          </Link>
          <Link href="/categories/crm" className="text-sm font-medium text-[#333] hover:text-[#2563EB] transition-colors">
            CRM
          </Link>
          <Link href="/categories/email-marketing" className="text-sm font-medium text-[#333] hover:text-[#2563EB] transition-colors">
            Email
          </Link>
          <Link href="/categories/project-management" className="text-sm font-medium text-[#333] hover:text-[#2563EB] transition-colors">
            Projects
          </Link>
          <Link href="/about" className="text-sm font-medium text-[#333] hover:text-[#2563EB] transition-colors">
            About
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#333] hover:text-[#2563EB]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          <Link href="/blog" className="block text-sm font-medium text-[#333] hover:text-[#2563EB]" onClick={() => setMenuOpen(false)}>Articles</Link>
          <Link href="/categories/crm" className="block text-sm font-medium text-[#333] hover:text-[#2563EB]" onClick={() => setMenuOpen(false)}>CRM</Link>
          <Link href="/categories/email-marketing" className="block text-sm font-medium text-[#333] hover:text-[#2563EB]" onClick={() => setMenuOpen(false)}>Email Marketing</Link>
          <Link href="/categories/project-management" className="block text-sm font-medium text-[#333] hover:text-[#2563EB]" onClick={() => setMenuOpen(false)}>Project Management</Link>
          <Link href="/about" className="block text-sm font-medium text-[#333] hover:text-[#2563EB]" onClick={() => setMenuOpen(false)}>About</Link>
        </div>
      )}
    </nav>
  )
}
