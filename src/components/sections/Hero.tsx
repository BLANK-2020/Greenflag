import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      {/* Background - supplied abstract image (diagonal lines) */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Light overlay so texture shows; dark enough for white text */}
        <div className="absolute inset-0 bg-[#1a1a1a]/45" aria-hidden />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[var(--container-large)] px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.25em] text-[#4caf50]">
            Coming soon
          </p>
          <h1 className="mb-6 text-[2.75rem] font-bold leading-[1.1] tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">
            Greenflag Recruitment
          </h1>
          <p className="mb-10 text-xl leading-[1.5] text-white/95 md:text-2xl">
            Technology and transformation hiring.
            <br />
            Done properly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-[#4caf50] px-8 py-3.5 text-base font-medium text-white transition hover:bg-[#43a047]"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}
