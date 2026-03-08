import { ContactForm } from '@/components/ContactForm'

export const metadata = {
  title: 'Contact | Green Flag Recruitment',
  description:
    'Get in touch with Green Flag Recruitment. Speak directly with Gerard. Brisbane.',
}

export default function ContactPage() {
  return (
    <section className="bg-[#fbf8f4] py-20 md:py-24">
      <div className="mx-auto max-w-[var(--container-small)] px-6 md:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-[-0.02em] text-[#333333] md:text-4xl">
            Get in touch
          </h1>
          <p className="mb-10 text-[1.25rem] leading-[1.5] text-[#555555]">
            Speak directly with Gerard. All enquiries go to{' '}
            <a
              href="mailto:gerard@greenflag.tech"
              className="font-medium text-[#4caf50] hover:underline"
            >
              gerard@greenflag.tech
            </a>{' '}
            or call{' '}
            <a
              href="tel:0412665486"
              className="font-medium text-[#4caf50] hover:underline"
            >
              0412 665 486
            </a>
            .
          </p>
          <div className="mx-auto flex w-full max-w-lg justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
