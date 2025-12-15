import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { Brands } from "@/components/brands"
import { Products } from "@/components/products"
import { Coverage } from "@/components/coverage"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <Stats />
        <About />
        <Brands />
        <Products />
        <Coverage />
        <Testimonials />
        <CTASection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
