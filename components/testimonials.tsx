"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      company: "Supermercado Central",
      text: "Trabajamos con Tidec desde hace 5 años y siempre nos sorprenden con su excelente servicio. Las entregas son puntuales y los productos de primera calidad.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      company: "Almacén La Esquina",
      text: "La atención personalizada y la variedad de productos que ofrecen hacen de Tidec nuestro proveedor preferido. Altamente recomendados.",
      rating: 5,
    },
    {
      name: "Laura Fernández",
      company: "Minimarket Express",
      text: "Excelente relación calidad-precio. El equipo de Tidec siempre está dispuesto a ayudar y resolver cualquier consulta rápidamente.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-balance md:text-4xl mb-4">
            Lo que dicen nuestros <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor motivación
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{testimonial.text}"</p>

                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
