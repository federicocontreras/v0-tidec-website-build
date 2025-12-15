import { Header } from "@/components/header"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Nosotros - Tidec",
  description: "Conoce más sobre Tidec, nuestra historia, misión y valores.",
}

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <About />

        {/* Historia Section */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-balance md:text-4xl mb-8">
                Nuestra <span className="text-primary">Historia</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Fundada hace más de 25 años, Tidec nació con la visión de convertirse en el socio estratégico de
                  negocios y comercios en toda la región. Comenzamos como una pequeña distribuidora familiar y hemos
                  crecido hasta convertirnos en una de las empresas de distribución más confiables del mercado.
                </p>
                <p className="text-lg">
                  A lo largo de los años, hemos construido relaciones sólidas con las marcas líderes del mercado y con
                  miles de clientes que confían en nosotros para abastecer sus negocios. Nuestro compromiso con la
                  excelencia y el servicio al cliente nos ha permitido expandir nuestra operación y mejorar
                  continuamente nuestros procesos.
                </p>
                <p className="text-lg">
                  Hoy, Tidec cuenta con una flota propia, personal altamente capacitado y tecnología de punta para
                  garantizar entregas puntuales y un servicio excepcional. Seguimos creciendo y evolucionando para
                  satisfacer las necesidades cambiantes de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-balance md:text-4xl mb-12 text-center">
                Nuestros <span className="text-primary">Valores</span>
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                {[
                  {
                    title: "Compromiso",
                    description:
                      "Nos comprometemos con la calidad, puntualidad y satisfacción de nuestros clientes en cada entrega.",
                  },
                  {
                    title: "Integridad",
                    description: "Actuamos con honestidad y transparencia en todas nuestras relaciones comerciales.",
                  },
                  {
                    title: "Innovación",
                    description: "Buscamos constantemente mejorar nuestros procesos y adoptar nuevas tecnologías.",
                  },
                  {
                    title: "Responsabilidad",
                    description: "Asumimos la responsabilidad social y ambiental en todas nuestras operaciones.",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg border-2 border-muted hover:border-primary/50 transition-colors"
                  >
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
