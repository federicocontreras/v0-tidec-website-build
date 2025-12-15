"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Products() {
  const categories = [
    {
      name: "Alimentos y Bebidas",
      description: "Amplia variedad de productos alimenticios de las mejores marcas",
      image: "/grocery-store-food-products-on-shelves.jpg",
      products: ["Lácteos", "Bebidas", "Snacks", "Conservas"],
    },
    {
      name: "Productos de Limpieza",
      description: "Línea completa de artículos para higiene y limpieza",
      image: "/cleaning-products-shelves-detergent.jpg",
      products: ["Detergentes", "Desinfectantes", "Artículos de limpieza", "Cuidado personal"],
    },
    {
      name: "Artículos de Almacén",
      description: "Todo lo necesario para tu negocio en un solo lugar",
      image: "/warehouse-storage-distribution-products.jpg",
      products: ["Papel y cartón", "Envases", "Materiales de empaque", "Suministros"],
    },
    {
      name: "Productos Premium",
      description: "Selección exclusiva de productos de alta gama",
      image: "/premium-gourmet-products-display.jpg",
      products: ["Gourmet", "Importados", "Especialidades", "Marcas exclusivas"],
    },
  ]

  return (
    <section id="productos" className="scroll-mt-16 bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold text-balance md:text-5xl mb-4">
            Nuestro <span className="text-primary">Catálogo</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Ofrecemos una amplia gama de productos de las marcas más reconocidas del mercado, seleccionados
            cuidadosamente para satisfacer las necesidades de tu negocio.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 animate-in fade-in slide-in-from-bottom-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{category.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{category.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.products.map((product, idx) => (
                    <span
                      key={idx}
                      className="inline-block rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/20 transition-colors"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            variant="outline"
            className="group bg-transparent"
            onClick={() => {
              const element = document.getElementById("contacto")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <Sparkles className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
            Solicitar Catálogo Completo
          </Button>
        </div>
      </div>
    </section>
  )
}
