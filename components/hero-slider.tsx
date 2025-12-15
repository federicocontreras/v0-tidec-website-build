"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

const slides = [
  {
    title: "Calidad y Servicio que Transforman tu Negocio",
    subtitle: "Distribuidora de Confianza",
    description:
      "Somos tu socio estratégico en distribución. Ofrecemos productos de primera calidad con la logística más eficiente del mercado.",
    image: "/modern-warehouse-distribution-center.jpg",
    cta: "Ver Catálogo",
    ctaLink: "productos",
  },
  {
    title: "Innovación en cada Entrega",
    subtitle: "Tecnología y Logística",
    description:
      "Sistema de gestión avanzado que garantiza entregas puntuales y seguimiento en tiempo real de tus pedidos.",
    image: "/modern-logistics-technology-truck-delivery.jpg",
    cta: "Conocer Más",
    ctaLink: "nosotros",
  },
  {
    title: "Más de 1000 Productos Disponibles",
    subtitle: "Variedad y Stock",
    description:
      "Amplio catálogo de productos de las mejores marcas. Stock permanente para que nunca te falte lo que necesitas.",
    image: "/product-warehouse-shelves-variety.jpg",
    cta: "Explorar Productos",
    ctaLink: "productos",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
            </div>

            {/* Content */}
            <div className="relative h-full container mx-auto px-4">
              <div className="flex h-full items-center">
                <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <div className="inline-block rounded-full bg-primary/15 backdrop-blur-sm px-4 py-2 border border-primary/20">
                    <span className="text-sm font-semibold text-primary">{slide.subtitle}</span>
                  </div>

                  <h1 className="text-4xl font-bold leading-tight text-balance md:text-6xl lg:text-7xl text-foreground">
                    {slide.title}
                  </h1>

                  <p className="text-lg text-muted-foreground text-pretty md:text-xl leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button size="lg" onClick={() => scrollToSection(slide.ctaLink)} className="group">
                      {slide.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => scrollToSection("contacto")}>
                      Contáctanos
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm p-3 text-foreground shadow-lg transition-all hover:bg-background hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm p-3 text-foreground shadow-lg transition-all hover:bg-background hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-primary" : "w-2 bg-background/50 hover:bg-background/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
