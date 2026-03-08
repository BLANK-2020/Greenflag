const benefits = [
  {
    number: '1',
    title: 'Energy savings',
    description:
      'Our buildings are designed with efficiency at their core. From advanced insulation and passive solar gain to smart systems that adapt to your needs, you\'ll enjoy significantly lower energy bills — and a reduced environmental footprint — without compromising on comfort or design.',
  },
  {
    number: '2',
    title: 'Healthier living',
    description:
      'Natural materials, improved air quality, and smart ventilation make your space feel fresh, breathable, and alive. We prioritize wellness through biophilic design, clean indoor environments, and layouts that encourage light, movement, and connection with nature.',
  },
  {
    number: '3',
    title: 'Low carbon',
    description:
      'We use low-impact materials, design for durability, and reduce embodied carbon wherever possible. Whether it\'s reclaimed timber, eco-concrete, or green roofing systems, sustainability is embedded in every line of the plan.',
  },
  {
    number: '4',
    title: 'Built to last',
    description:
      'Longevity is our love language. We choose materials and construction methods that stand the test of time — structurally, aesthetically, and environmentally. Your space won\'t just look good for a year or two. It\'s designed to grow with you and age gracefully.',
  },
  {
    number: '5',
    title: 'Natural aesthetics',
    description:
      'We believe good design feels effortless. Expect warm, tactile surfaces, earthy textures, and an elegant balance of light and shadow. The result? A home or workspace that\'s as grounding as it is visually striking.',
  },
  {
    number: '6',
    title: 'Future-proof',
    description:
      'Sustainability isn\'t just about now — it\'s about what comes next. Our designs adapt to future lifestyles, technologies, and environmental challenges. You\'re not just building for today; you\'re investing in tomorrow.',
  },
]

export function Benefits() {
  return (
    <section className="bg-[var(--color-brand-secondary)] py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[var(--container-large)] px-[var(--section-padding-x)]">
        <h2 className="mb-16 text-3xl font-medium tracking-[-0.02em] text-[var(--color-foreground)] md:text-4xl">
          So why choose us?
        </h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.number} className="flex gap-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-primary)] text-lg font-medium text-white">
                {benefit.number}
              </span>
              <div>
                <h3 className="mb-2 text-xl font-medium text-[var(--color-foreground)]">
                  {benefit.title}
                </h3>
                <p className="text-[var(--text-body-size)] leading-[1.5] text-[var(--color-text-secondary)]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
