import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "¿Cuál es el monto mínimo de compra?",
      answer:
        "El monto mínimo de compra varía según la zona de entrega. Contáctanos para conocer las condiciones específicas para tu ubicación y obtener las mejores condiciones comerciales.",
    },
    {
      question: "¿Realizan entregas a domicilio?",
      answer:
        "Sí, realizamos entregas en toda la región. Contamos con una flota propia que garantiza entregas puntuales y seguras. Los horarios y frecuencias se coordinan según las necesidades de cada cliente.",
    },
    {
      question: "¿Qué formas de pago aceptan?",
      answer:
        "Aceptamos diversas formas de pago: efectivo, transferencia bancaria, cheques y tarjetas de crédito. Para clientes recurrentes ofrecemos condiciones de crédito personalizadas según historial comercial.",
    },
    {
      question: "¿Ofrecen descuentos por volumen?",
      answer:
        "Sí, ofrecemos descuentos especiales por compras en volumen y promociones regulares para nuestros clientes. Además, contamos con un programa de beneficios para clientes frecuentes con condiciones preferenciales.",
    },
    {
      question: "¿Cómo puedo hacer un pedido?",
      answer:
        "Puedes hacer tu pedido a través de nuestro equipo de ventas por teléfono, WhatsApp o email. También puedes completar el formulario de contacto y uno de nuestros asesores se comunicará contigo a la brevedad para procesar tu orden.",
    },
    {
      question: "¿Tienen garantía en los productos?",
      answer:
        "Todos nuestros productos cuentan con garantía del fabricante. Trabajamos únicamente con marcas reconocidas que respaldan la calidad de sus productos. En caso de cualquier inconveniente, gestionamos la solución de forma rápida y eficiente.",
    },
  ]

  return (
    <section id="preguntas" className="scroll-mt-16 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold text-balance md:text-5xl mb-4">
            Preguntas <span className="text-primary">Frecuentes</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Encuentra respuestas a las consultas más comunes. Si tienes alguna otra pregunta, no dudes en contactarnos.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
