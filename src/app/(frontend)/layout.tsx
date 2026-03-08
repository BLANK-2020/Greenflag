import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Green Flag Recruitment | Technology & Transformation Hiring',
  description:
    'Technology and transformation hiring. Done properly. Program Managers, Change Managers, Business Analysts, PMO professionals, Delivery Leads. Brisbane.',
}

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  )
}
