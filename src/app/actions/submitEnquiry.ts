'use server'

import { Resend } from 'resend'

const ENQUIRY_EMAIL = 'gerard@greenflag.tech'
// Resend requires verified domain. Use onboarding@resend.dev for testing, or set RESEND_FROM_EMAIL after verifying your domain
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

export type EnquiryFormData = {
  name: string
  email: string
  company?: string
  phone?: string
  message: string
}

export type SubmitResult = { ok: true } | { ok: false; error: string }

export async function submitEnquiry(data: EnquiryFormData): Promise<SubmitResult> {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set')
      return { ok: false, error: 'Email service is not configured. Please try again later.' }
    }

    const resend = new Resend(apiKey)

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: ENQUIRY_EMAIL,
      replyTo: data.email,
      subject: `Enquiry from ${data.name} - Green Flag`,
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        ${data.company ? `<p><strong>Company:</strong> ${escapeHtml(data.company)}</p>` : ''}
        ${data.phone ? `<p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>` : ''}
        <p><strong>Message:</strong></p>
        <pre style="white-space: pre-wrap; font-family: sans-serif;">${escapeHtml(data.message)}</pre>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return { ok: false, error: error.message || 'Failed to send enquiry.' }
    }

    return { ok: true }
  } catch (err) {
    console.error('Enquiry submit error:', err)
    return {
      ok: false,
      error: err instanceof Error ? err.message : 'An unexpected error occurred.',
    }
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
