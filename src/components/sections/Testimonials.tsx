const testimonials = [
  {
    quote:
      'From the first sketch to the final detail, Verdant exceeded every expectation. Our home feels like a sanctuary — sustainable, serene, and uniquely ours.',
    author: 'Elena Morris',
    role: 'Private Homeowner',
  },
  {
    quote:
      'What impressed me most was their ability to merge clean modern design with eco-conscious thinking. We\'ve cut our energy use by 40%, and it looks stunning.',
    author: 'Daniel Cho',
    role: 'Urban Developer',
  },
  {
    quote:
      'From concept to completion, Verdant made the entire process feel seamless. Their attention to detail, sustainable design approach, and ability to bring our vision to life was truly impressive.',
    author: 'Jame Rutherford',
    role: 'Residential Project',
  },
]

export function Testimonials() {
  return (
    <section className="py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[var(--container-large)] px-[var(--section-padding-x)]">
        <h2 className="mb-16 text-3xl font-medium tracking-[-0.02em] text-[var(--color-foreground)] md:text-4xl">
          You&apos;re in good company
        </h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border)] p-8"
            >
              <p className="mb-6 text-[var(--text-body-size)] leading-[1.5] text-[var(--color-text-secondary)]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer>
                <cite className="not-italic font-medium text-[var(--color-foreground)]">
                  {t.author}
                </cite>
                <p className="text-sm text-[var(--color-text-secondary)]">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
