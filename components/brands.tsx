"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

export function Brands() {
  const brands = [
    { name: "Quilmes", logo: "/quilmes-logo.jpg" },
    { name: "Coca Cola", logo: "/coca-cola-logo.png" },
    { name: "Pepsi", logo: "/pepsi-logo.png" },
    { name: "Arcor", logo: "/arcor-logo.jpg" },
    { name: "Marolio", logo: "/marolio-logo.jpg" },
    { name: "La Serenísima", logo: "/la-serenisima-logo.jpg" },
    { name: "Unilever", logo: "/generic-corporate-logo.png" },
    { name: "Procter & Gamble", logo: "/letter-p-typography.png" },
  ]

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-balance md:text-4xl mb-4">
            Marcas que <span className="text-primary">Distribuimos</span>
          </h2>
          <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
            Trabajamos con las marcas líderes del mercado para ofrecerte productos de la más alta calidad
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <Card
              key={index}
              className="group p-8 flex items-center justify-center hover:shadow-lg transition-all duration-300 bg-background border-2 hover:border-primary/30 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative h-20 w-full grayscale group-hover:grayscale-0 transition-all">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`Logo ${brand.name}`}
                  fill
                  className="object-contain"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
