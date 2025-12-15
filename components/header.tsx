"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Image src="/tidec-logo.png" alt="Tidec Logo" width={48} height={48} className="h-12 w-12" />
          <span className="text-2xl font-bold text-foreground">TIDEC</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("nosotros")}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollToSection("productos")}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Productos
          </button>
          <button
            onClick={() => scrollToSection("preguntas")}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Preguntas Frecuentes
          </button>
          <Button onClick={() => scrollToSection("contacto")} size="sm">
            Contacto
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto flex flex-col gap-4 p-4">
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("productos")}
              className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection("preguntas")}
              className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Preguntas Frecuentes
            </button>
            <Button onClick={() => scrollToSection("contacto")} size="sm" className="w-full">
              Contacto
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
