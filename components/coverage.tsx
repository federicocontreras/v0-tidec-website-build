"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export function Coverage() {
  const regions = [
    { province: "Buenos Aires", cities: ["CABA", "La Plata", "Mar del Plata"] },
    { province: "Córdoba", cities: ["Córdoba Capital", "Villa María", "Río Cuarto"] },
    { province: "Santa Fe", cities: ["Rosario", "Santa Fe Capital"] },
    { province: "Mendoza", cities: ["Mendoza Capital", "San Rafael"] },
  ]

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-balance md:text-4xl mb-6">
              Cobertura en toda <span className="text-primary">Argentina</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-8">
              Contamos con una red de distribución que alcanza las principales ciudades del país, garantizando entregas
              rápidas y eficientes. Nuestro compromiso es llevar productos de calidad a cada rincón donde nos necesites.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">12.000+</div>
                  <div className="text-sm text-muted-foreground">km diarios recorridos</div>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Ciudades alcanzadas</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-4">
            {regions.map((region, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all animate-in fade-in slide-in-from-right-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{region.province}</h3>
                      <p className="text-sm text-muted-foreground">{region.cities.join(" • ")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
