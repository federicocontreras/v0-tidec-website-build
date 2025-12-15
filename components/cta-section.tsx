"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-balance md:text-5xl mb-6">
            ¿Listo para trabajar con <span className="text-primary">Tidec</span>?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-8">
            Únete a los más de 15.000 clientes que confían en nosotros. Contáctanos hoy y descubre cómo podemos ayudarte
            a crecer tu negocio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-base gap-2"
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            >
              Solicitar Información
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base gap-2 border-2 bg-transparent"
              onClick={() => window.open("https://wa.me/5491112345678", "_blank")}
            >
              <MessageCircle className="h-5 w-5" />
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
