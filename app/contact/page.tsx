import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact StackPick',
  description: 'Get in touch with the StackPick team. We\'d love to hear from you.',
}

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-[#111] mb-3">Contact Us</h1>
      <p className="text-gray-500 mb-10">
        Have a question, suggestion, or want to flag an error in our reviews? We&apos;d love to hear from you.
      </p>

      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#111] mb-1.5">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[#111] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
            placeholder="Jane Smith"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#111] mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[#111] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
            placeholder="jane@example.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-[#111] mb-1.5">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[#111] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent bg-white"
          >
            <option value="">Select a reason</option>
            <option value="review-request">Request a software review</option>
            <option value="correction">Correction or update</option>
            <option value="partnership">Partnership inquiry</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#111] mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[#111] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent resize-none"
            placeholder="Tell us what's on your mind..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#2563EB] text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>

      <p className="mt-8 text-sm text-gray-400 text-center">
        We typically respond within 1–2 business days.
      </p>
    </div>
  )
}
