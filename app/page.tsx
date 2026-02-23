import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Logos } from "@/components/landing/logos"
import { Features } from "@/components/landing/features"
import { HowItWorks } from "@/components/landing/how-it-works"
import { CaseStudies } from "@/components/landing/case-studies"
import { AuditValue } from "@/components/landing/audit-value"
import { Pricing } from "@/components/landing/pricing"
import { Faq } from "@/components/landing/faq"
import { CtaSection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <HowItWorks />
      <CaseStudies />
      <AuditValue />
      <Pricing />
      <Faq />
      <CtaSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
