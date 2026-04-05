import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Logos } from "@/components/landing/logos"
import { Problem } from "@/components/landing/problem"
import { Features } from "@/components/landing/features"
import { HowItWorks } from "@/components/landing/how-it-works"
import { CaseStudies } from "@/components/landing/case-studies"
import { AuditValue } from "@/components/landing/audit-value"
import { PourQui } from "@/components/landing/pour-qui"
import { Pricing } from "@/components/landing/pricing"
import { Faq } from "@/components/landing/faq"
import { Footer } from "@/components/landing/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Logos />
      <Problem />
      <Features />
      <HowItWorks />
      <CaseStudies />
      <AuditValue />
      <PourQui />
      <Pricing />
      <Faq />
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
