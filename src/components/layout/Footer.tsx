import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-[#e8e4df] bg-[#f5f2ee]">
      <div className="mx-auto max-w-[var(--container-large)] px-6 py-16 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          <div>
            <Link
              href="/"
              className="text-xl font-semibold text-[#333333]"
            >
              Green Flag Recruitment
            </Link>
            <p className="mt-3 text-[1.125rem] text-[#555555]">
              Technology and transformation hiring. Done properly.
            </p>
          </div>
          <nav className="flex flex-wrap gap-8">
            <Link
              href="/"
              className="text-[1.25rem] text-[#555555] hover:text-[#4caf50]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[1.25rem] text-[#555555] hover:text-[#4caf50]"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="mt-12 border-t border-[#e8e4df] pt-8 text-[0.875rem] text-[#555555]">
          © {new Date().getFullYear()} Green Flag Recruitment. Brisbane.
        </div>
      </div>
    </footer>
  )
}
