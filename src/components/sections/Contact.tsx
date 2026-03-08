import Link from 'next/link'

export function Contact() {
  return (
    <section className="bg-[var(--color-brand-secondary)] py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[var(--container-large)] px-[var(--section-padding-x)]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-medium tracking-[-0.02em] text-[var(--color-foreground)] md:text-4xl">
            Lets build something
          </h2>
          <h3 className="mb-6 text-xl font-medium text-[var(--color-foreground)]">
            Start a consultation
          </h3>
          <p className="mb-8 text-[var(--text-body-size)] leading-[1.5] text-[var(--color-text-secondary)]">
            Let&apos;s create a space that&apos;s beautiful, intelligent, and kind to the planet. Book a
            consultation today and take the first step toward your sustainable dream home.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-[var(--radius-md)] bg-[var(--color-brand-primary)] px-8 py-4 text-base font-medium text-white transition hover:opacity-90"
          >
            Book a call
          </Link>
        </div>
      </div>
    </section>
  )
}
