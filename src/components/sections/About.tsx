import Link from 'next/link'

function RoleIcon({ name }: { name: string }) {
  const size = 24
  switch (name) {
    case 'rocket':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      )
    case 'chart':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      )
    case 'analytics':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="M18 17V9" />
          <path d="M13 17V5" />
          <path d="M8 17v-3" />
        </svg>
      )
    case 'building':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M12 6h.01" />
          <path d="M12 10h.01" />
          <path d="M12 14h.01" />
          <path d="M16 10h.01" />
          <path d="M16 14h.01" />
          <path d="M8 10h.01" />
          <path d="M8 14h.01" />
        </svg>
      )
    case 'arrow':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m5 12 7-7 7 7" />
          <path d="M12 19V5" />
        </svg>
      )
    default:
      return null
  }
}

export function About() {
  return (
    <section className="bg-[#fbf8f4] py-20 md:py-24">
      <div className="mx-auto max-w-[var(--container-large)] px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="mb-12 text-[1.25rem] leading-[1.6] text-[#555555]">
            Greenflag Recruitment works with organisations delivering real technology and
            business change.
          </p>
          <h2 className="mb-10 text-[2rem] font-bold tracking-[-0.02em] text-[#333333]">
            Our Focus
          </h2>
          <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              { icon: 'rocket', label: 'Program Managers.' },
              { icon: 'chart', label: 'Change Managers.' },
              { icon: 'analytics', label: 'Business Analysts.' },
              { icon: 'building', label: 'PMO professionals.' },
              { icon: 'arrow', label: 'Delivery Leads.' },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex flex-col rounded-xl bg-[#2d2d2d] p-8 text-white"
              >
                <div className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#4caf50] bg-white">
                  <RoleIcon name={icon} />
                </div>
                <p className="text-[1.125rem] font-medium leading-[1.5]">{label}</p>
              </div>
            ))}
          </div>
          <p className="mb-10 text-[1.25rem] leading-[1.6] text-[#555555]">
            The people responsible for making transformation programs work.
          </p>
          <hr className="my-14 border-[#e8e4df]" />
          <h2 className="mb-5 text-[1.5rem] font-bold tracking-[-0.02em] text-[#333333]">
            This site is currently being built.
          </h2>
          <p className="mb-6 text-[1.25rem] leading-[1.6] text-[#555555]">
            In the meantime, if you&apos;re hiring for technology or transformation roles, you
            can speak directly with the person running the process.
          </p>
          <p className="mb-6 text-[1.25rem] leading-[1.6] text-[#555555]">
            No forms disappearing into inboxes. No sales teams. No handovers.
          </p>
          <p className="mb-10 text-[1.25rem] font-semibold leading-[1.6] text-[#333333]">
            Just a straightforward conversation.
          </p>
          <hr className="my-14 border-[#e8e4df]" />
          <div className="space-y-3">
            <p className="text-[1.25rem] font-semibold text-[#333333]">
              Greenflag Recruitment
            </p>
            <p className="text-[1.25rem] text-[#555555]">Brisbane</p>
            <p className="text-[1.25rem]">
              <a
                href="mailto:gerard@greenflag.tech"
                className="font-medium text-[#4caf50] hover:underline"
              >
                gerard@greenflag.tech
              </a>
            </p>
            <p className="text-[1.25rem]">
              <a
                href="tel:0412665486"
                className="font-medium text-[#4caf50] hover:underline"
              >
                0412 665 486
              </a>
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-lg bg-[#4caf50] px-8 py-3.5 text-base font-medium text-white transition hover:bg-[#43a047]"
            >
              Get in touch
            </Link>
          </div>
          <p className="mt-14 text-[0.875rem] text-[#555555]">Website launching soon.</p>
        </div>
      </div>
    </section>
  )
}
