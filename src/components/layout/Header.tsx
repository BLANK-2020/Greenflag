'use client'

import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-none bg-[#1a1a1a]">
      <div className="mx-auto flex max-w-[var(--container-large)] items-center justify-between gap-8 px-6 py-5 md:px-12 lg:px-16">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <img src="/logo.svg" alt="Green Flag" className="h-8 w-auto md:h-9" />
          <span className="text-lg font-medium text-white">Green Flag</span>
        </Link>
        <Link
          href="/contact"
          className="flex shrink-0 items-center gap-2 rounded-full bg-[#4caf50] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#43a047]"
        >
          Get Started Now
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </header>
  )
}
