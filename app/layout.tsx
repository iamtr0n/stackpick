import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'StackPick — Best SaaS Tools for Small Business',
    template: '%s | StackPick',
  },
  description: 'Honest, in-depth comparisons of the best SaaS software for small business owners. Find the right tools for CRM, email marketing, project management, and more.',
  metadataBase: new URL('https://stackpick.io'),
  openGraph: {
    siteName: 'StackPick',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
