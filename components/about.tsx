import { Card, CardContent } from "@/components/ui/card"
import { Target, Award, Users2, Truck } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Target,
      title: "Misión",
      description:
        "Proveer productos de la más alta calidad con un servicio excepcional, estableciendo relaciones duraderas con nuestros clientes.",
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
      description:
        "Trabajamos únicamente con las marcas líderes del mercado, asegurando la excelencia en cada producto que distribuimos.",
    },
    {
      icon: Users2,
      title: "Equipo Profesional",
      description:
        "Nuestro equipo altamente capacitado está comprometido con la satisfacción del cliente y el crecimiento mutuo.",
    },
    {
      icon: Truck,
      title: "Logística Eficiente",
      description: "Sistema de distribución optimizado que garantiza entregas puntuales en toda la región.",
    },
  ]

  return (
    <section id="nosotros" className="scroll-mt-16 py-20 md:py-28 relative overflow-hidden">
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute left-0 bottom-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold text-balance md:text-5xl mb-4">
            Sobre <span className="text-primary">Tidec</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Con más de 25 años en el mercado, somos la distribuidora de confianza que impulsa el crecimiento de negocios
            en toda la región. Nos especializamos en ofrecer soluciones integrales de distribución con un enfoque en la
            excelencia.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
