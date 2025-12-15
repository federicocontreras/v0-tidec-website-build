import { Header } from "@/components/header"
import { Products } from "@/components/products"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Productos - Tidec",
  description: "Amplio catálogo de productos de las mejores marcas del mercado.",
}

export default function ProductosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Products />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
