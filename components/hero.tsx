"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2">
            <span className="text-sm font-semibold text-primary">Distribuidora de Confianza</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-balance md:text-6xl lg:text-7xl">
            Calidad y Servicio que <span className="text-primary">Transforman tu Negocio</span>
          </h1>

          <p className="mb-10 text-lg text-muted-foreground text-pretty md:text-xl leading-relaxed">
            Somos tu socio estratégico en distribución. Ofrecemos productos de primera calidad con la logística más
            eficiente del mercado.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" onClick={() => scrollToSection("productos")} className="group">
              Ver Catálogo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contacto")}>
              Contáctanos
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
    </section>
  )
}
