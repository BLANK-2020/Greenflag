'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
  }

  return (
    <footer className="footer-section">
      <div className="section-inner">
        <div className="section-box foreground">
          <div className="footer-container w-layout-blockcontainer global-container w-container">
            <div className="footer-wrapper">
              <div className="footer-upper">
                <div className="footer-upper-wrapper w-layout-grid">
                  <Link href="/" aria-label="Green Flag" className="footer-logo-link w-inline-block">
                    <img
                      src="/logo.svg"
                      alt="Green Flag"
                      width={124}
                      height={32}
                      loading="lazy"
                      className="footer-logo"
                    />
                  </Link>
                  <div className="footer-upper-left" id="w-node-_959e798a-bf7d-0415-c244-f69347460e85-47460e7c">
                    <p className="footer-paragraph">
                      Technology and transformation hiring. Done properly.
                    </p>
                    <div className="footer-social-wrapper">
                      <div className="footer-subtitle">Follow us for more:</div>
                      <div className="footer-social-list">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="footer-menu w-inline-block" aria-label="Instagram">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="footer-social-icon" aria-hidden>
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="footer-menu w-inline-block" aria-label="X (Twitter)">
                          <svg width="21" height="19" viewBox="0 0 24 24" fill="currentColor" className="footer-social-icon" aria-hidden>
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="footer-menu w-inline-block" aria-label="Facebook">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="footer-social-icon" aria-hidden>
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer-menu w-inline-block" aria-label="LinkedIn">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="footer-social-icon" aria-hidden>
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="footer-contact">
                    <p className="footer-contact-name">Green Flag Recruitment</p>
                    <p className="footer-contact-location">Brisbane</p>
                    <a href="mailto:gerard@greenflag.tech" className="footer-contact-link">
                      gerard@greenflag.tech
                    </a>
                    <a href="tel:0412665486" className="footer-contact-link">
                      0412 665 486
                    </a>
                    <p className="footer-contact-tagline">Speak with Gerard.</p>
                  </div>
                  <div className="footer-form" id="w-node-_959e798a-bf7d-0415-c244-f69347460eac-47460e7c">
                    <form onSubmit={handleSubscribe} className="subs-form-block w-form" aria-label="Newsletter">
                      <label htmlFor="footer-email" className="subs-form-label">Subscribe to our newsletter</label>
                      <div className="subs-form-flex">
                        <input
                          id="footer-email"
                          className="subs-form-input w-input"
                          type="email"
                          name="email"
                          placeholder="Write your email here"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <button type="submit" className="button white w-button">
                          Subscribe
                        </button>
                      </div>
                      {submitted && (
                        <div className="success-message w-form-done" role="region" aria-label="Form success">
                          <div className="message-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024" className="message-icon success" aria-hidden>
                              <path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                            </svg>
                            <div className="message-title">Great!</div>
                            <div className="message-description">Your submission has been received. We&apos;ll be in touch soon.</div>
                          </div>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
              <div className="footer-divider" />
              <div className="footer-lower">
                <div className="footer-footnote">
                  <div className="footer-foot-text">© {new Date().getFullYear()} Green Flag Recruitment. Brisbane.</div>
                </div>
                <div className="footer-mega-text" aria-hidden>
                  Green Flag
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
