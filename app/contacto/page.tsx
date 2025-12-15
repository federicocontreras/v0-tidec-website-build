import { Header } from "@/components/header"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Contacto - Tidec",
  description: "Ponte en contacto con nosotros. Estamos para ayudarte.",
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
