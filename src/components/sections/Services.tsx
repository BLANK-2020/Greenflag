import Link from 'next/link'

const services = [
  {
    title: 'Architectural design',
    description:
      'Tailored, timeless spaces that balance beauty, function, and purpose.',
  },
  {
    title: 'Sustainable solutions',
    description:
      'Low-carbon, energy-efficient design for a healthier planet — and home.',
  },
  {
    title: 'Planning & permissions',
    description: 'Expert handling of all applications and approvals, stress-free.',
  },
  {
    title: 'Renovations & retrofits',
    description: 'Transform existing spaces with intelligent, eco-conscious upgrades.',
  },
  {
    title: '3D visualisation',
    description: 'Photorealistic renders that help you see the vision before it\'s built.',
  },
]

export function Services() {
  return (
    <section className="py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[var(--container-large)] px-[var(--section-padding-x)]">
        <h2 className="mb-4 text-3xl font-medium tracking-[-0.02em] text-[var(--color-foreground)] md:text-4xl">
          And we offer a range of services
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border)] p-8 transition hover:border-[var(--color-brand-primary)]/30"
            >
              <h3 className="mb-3 text-xl font-medium text-[var(--color-foreground)]">
                {service.title}
              </h3>
              <p className="text-[var(--text-body-size)] leading-[1.5] text-[var(--color-text-secondary)]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-[var(--text-body-size)] text-[var(--color-text-secondary)]">
          Not sure where to start?{' '}
          <Link href="/contact" className="font-medium text-[var(--color-brand-primary)] hover:underline">
            Contact us
          </Link>{' '}
          to talk through your project
        </p>
      </div>
    </section>
  )
}
