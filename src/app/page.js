import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import SocialProofSection from "@/components/social-proof-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <SocialProofSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
