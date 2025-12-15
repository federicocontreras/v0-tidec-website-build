"use client"

import { Package, Users, TrendingUp, MapPin } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function Stats() {
  const stats = [
    {
      icon: Package,
      value: 1000,
      suffix: "+",
      label: "Productos",
    },
    {
      icon: Users,
      value: 5000,
      suffix: "+",
      label: "Clientes Satisfechos",
    },
    {
      icon: TrendingUp,
      value: 25,
      suffix: "+",
      label: "Años de Experiencia",
    },
    {
      icon: MapPin,
      value: 15,
      suffix: "",
      label: "Zonas de Cobertura",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary py-16 md:py-24">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, index }: { stat: any; index: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = stat.value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= stat.value) {
        setCount(stat.value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, stat.value])

  return (
    <div
      ref={ref}
      className="group relative text-center animate-in fade-in slide-in-from-bottom-4 duration-700"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 transition-all hover:bg-white/15 hover:scale-105">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm transition-transform group-hover:scale-110">
          <stat.icon className="h-7 w-7 text-white" />
        </div>
        <div className="text-4xl font-bold text-white md:text-5xl">
          {count.toLocaleString()}
          {stat.suffix}
        </div>
        <div className="mt-3 text-sm font-medium text-white/90">{stat.label}</div>
      </div>
    </div>
  )
}
