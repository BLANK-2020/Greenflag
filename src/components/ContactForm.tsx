'use client'

import { useState } from 'react'
import { submitEnquiry } from '@/app/actions/submitEnquiry'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: (formData.get('company') as string) || undefined,
      phone: (formData.get('phone') as string) || undefined,
      message: formData.get('message') as string,
    }

    if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
      setStatus('error')
      setErrorMessage('Please fill in name, email and message.')
      return
    }

    setStatus('sending')
    setErrorMessage('')

    const result = await submitEnquiry(data)

    if (result.ok) {
      setStatus('success')
      form.reset()
    } else {
      setStatus('error')
      setErrorMessage(result.error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#333333]">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={status === 'sending'}
            className="w-full rounded-lg border border-[#e8e4df] bg-white px-4 py-3 text-[#333333] placeholder:text-[#555555] focus:border-[#4caf50] focus:outline-none focus:ring-1 focus:ring-[#4caf50] disabled:opacity-60"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#333333]">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={status === 'sending'}
            className="w-full rounded-lg border border-[#e8e4df] bg-white px-4 py-3 text-[#333333] placeholder:text-[#555555] focus:border-[#4caf50] focus:outline-none focus:ring-1 focus:ring-[#4caf50] disabled:opacity-60"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-[#333333]">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            disabled={status === 'sending'}
            className="w-full rounded-lg border border-[#e8e4df] bg-white px-4 py-3 text-[#333333] placeholder:text-[#555555] focus:border-[#4caf50] focus:outline-none focus:ring-1 focus:ring-[#4caf50] disabled:opacity-60"
            placeholder="Company name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#333333]">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            disabled={status === 'sending'}
            className="w-full rounded-lg border border-[#e8e4df] bg-white px-4 py-3 text-[#333333] placeholder:text-[#555555] focus:border-[#4caf50] focus:outline-none focus:ring-1 focus:ring-[#4caf50] disabled:opacity-60"
            placeholder="Your phone"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#333333]">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={status === 'sending'}
          className="w-full resize-y rounded-lg border border-[#e8e4df] bg-white px-4 py-3 text-[#333333] placeholder:text-[#555555] focus:border-[#4caf50] focus:outline-none focus:ring-1 focus:ring-[#4caf50] disabled:opacity-60"
          placeholder="Your enquiry..."
        />
      </div>
      {status === 'success' && (
        <div className="rounded-lg bg-[var(--color-success)]/10 p-4 text-[var(--color-success)]">
          Thank you for your enquiry. We&apos;ll get back to you soon.
        </div>
      )}
      {status === 'error' && (
        <div className="rounded-lg bg-[var(--color-error)]/10 p-4 text-[var(--color-error)]">
          {errorMessage}
        </div>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-lg bg-[#4caf50] px-6 py-4 font-medium text-white transition hover:bg-[#43a047] disabled:opacity-60 sm:w-auto"
      >
        {status === 'sending' ? 'Sending...' : 'Send enquiry'}
      </button>
    </form>
  )
}
