"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image src="/tidec-logo.png" alt="Tidec Logo" width={48} height={48} className="h-12 w-12" />
          <span className="text-2xl font-bold text-foreground">TIDEC</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              pathname === "/" ? "text-primary" : "text-foreground/80 hover:text-primary"
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/nosotros"
            className={`text-sm font-medium transition-colors ${
              pathname === "/nosotros" ? "text-primary" : "text-foreground/80 hover:text-primary"
            }`}
          >
            Nosotros
          </Link>
          <Link
            href="/productos"
            className={`text-sm font-medium transition-colors ${
              pathname === "/productos" ? "text-primary" : "text-foreground/80 hover:text-primary"
            }`}
          >
            Productos
          </Link>
          <Link
            href="/preguntas-frecuentes"
            className={`text-sm font-medium transition-colors ${
              pathname === "/preguntas-frecuentes" ? "text-primary" : "text-foreground/80 hover:text-primary"
            }`}
          >
            Preguntas Frecuentes
          </Link>
          <Link href="/contacto">
            <Button size="sm">Contacto</Button>
          </Link>
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
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`text-left text-sm font-medium transition-colors ${
                pathname === "/" ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              onClick={() => setIsMenuOpen(false)}
              className={`text-left text-sm font-medium transition-colors ${
                pathname === "/nosotros" ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Nosotros
            </Link>
            <Link
              href="/productos"
              onClick={() => setIsMenuOpen(false)}
              className={`text-left text-sm font-medium transition-colors ${
                pathname === "/productos" ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Productos
            </Link>
            <Link
              href="/preguntas-frecuentes"
              onClick={() => setIsMenuOpen(false)}
              className={`text-left text-sm font-medium transition-colors ${
                pathname === "/preguntas-frecuentes" ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              Preguntas Frecuentes
            </Link>
            <Link href="/contacto" onClick={() => setIsMenuOpen(false)}>
              <Button size="sm" className="w-full">
                Contacto
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
