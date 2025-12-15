import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4">
              <Image
                src="/images/355491266-521895620038439-27671258499040325-n.jpg"
                alt="Tidec Logo"
                width={120}
                height={120}
                className="h-16 w-16 object-contain"
              />
            </div>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              Tu distribuidora de confianza con más de 25 años de experiencia en el mercado argentino.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-secondary-foreground">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>
                <a href="#nosotros" className="hover:text-primary transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-primary transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#preguntas" className="hover:text-primary transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-secondary-foreground">Contacto</h3>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                +54 11 1234-5678
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                ventas@tidec.com.ar
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>
                  Av. Principal 1234
                  <br />
                  Buenos Aires, Argentina
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-secondary-foreground">Síguenos</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-secondary-foreground mb-2">Newsletter</h4>
              <p className="text-xs text-secondary-foreground/70 mb-3">Recibe nuestras novedades y promociones</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-secondary-foreground/10 pt-8 text-center text-sm text-secondary-foreground/70">
          <p>© {currentYear} Tidec - Distribuidora. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
