import { Header } from "@/components/header"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Preguntas Frecuentes - Tidec",
  description: "Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.",
}

export default function PreguntasFrecuentesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
