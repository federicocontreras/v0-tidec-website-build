import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { Stats } from "@/components/stats"
import { Brands } from "@/components/brands"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <Stats />
        <Brands />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
