'use client'

import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[#fbf8f4]">
      <div className="mx-auto flex max-w-[var(--container-large)] items-center justify-between px-6 py-5 md:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-[#333333] md:text-xl"
        >
          Green Flag
        </Link>
        <nav className="hidden gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[15px] text-[#555555] transition hover:text-[#4caf50]"
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-lg bg-[#4caf50] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#43a047]"
        >
          Get in touch
        </Link>
      </div>
    </header>
  )
}
