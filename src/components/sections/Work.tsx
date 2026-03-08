import Link from 'next/link'

const projects = [
  {
    title: 'Tallowwood Residence',
    location: 'Byron Bay, New South Wales',
    year: '2025',
    slug: 'tallowwood-residence',
  },
  {
    title: 'Aurora Tech Campus',
    location: 'Richmond, Victoria',
    year: '2024',
    slug: 'aurora-tech-campus',
  },
  {
    title: 'Mountain View Retreat',
    location: 'Blue Mountains, New South Wales',
    year: '2024',
    slug: 'mountain-view-retreat',
  },
  {
    title: 'Coastal Retreat Home',
    location: 'Lennox Head, New South Wales',
    year: '2023',
    slug: 'coastal-retreat-home',
  },
]

export function Work() {
  return (
    <section className="bg-[var(--color-brand-secondary)] py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[var(--container-large)] px-[var(--section-padding-x)]">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-medium tracking-[-0.02em] text-[var(--color-foreground)] md:text-4xl">
              We&apos;ve worked on some awesome eco-friendly projects
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="text-base font-medium text-[var(--color-brand-primary)] transition hover:underline"
          >
            Explore case studies
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/case-studies/${project.slug}`}
              className="group block overflow-hidden rounded-[var(--radius-lg)] bg-white transition hover:shadow-lg"
            >
              <div className="aspect-[4/3] bg-[var(--color-border)]" />
              <div className="p-6">
                <h3 className="mb-1 text-lg font-medium text-[var(--color-foreground)] group-hover:text-[var(--color-brand-primary)]">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {project.location} • {project.year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
