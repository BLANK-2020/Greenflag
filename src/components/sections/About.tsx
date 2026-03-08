export function About() {
  return (
    <section id="about" className="bg-[#f8f8f4]">
      {/* This site is currently being built */}
      <div className="border-t border-[#e8e4df]">
        <div className="mx-auto max-w-[var(--container-large)] px-6 py-20 md:px-12 lg:px-16">
          <h2 className="mb-8 text-center text-[1.5rem] font-bold tracking-[-0.02em] text-[#333333]">
            This site is currently being built.
          </h2>
          <div className="mx-auto w-full max-w-[42rem] space-y-6 text-center text-[1.0625rem] leading-[1.75] text-[#555555]">
            <p>
              In the meantime, if you&apos;re hiring for technology or transformation roles, we connect you directly with the person leading the hire.
            </p>
            <p className="font-semibold text-[#333333]">
              Just a straightforward conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
