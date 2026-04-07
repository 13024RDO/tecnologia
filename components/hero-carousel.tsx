"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/images/hero-phones.jpg",
    title: "Celulares",
    subtitle: "Ultimas novedades",
    description:
      "Samsung, Motorola, Xiaomi y mas. Encontra el celular ideal para vos.",
    cta: "Comprar ahora",
    href: "#celulares",
    align: "left" as const,
  },
  {
    id: 2,
    image: "/images/hero-speakers.jpg",
    title: "Parlantes JBL",
    subtitle: "Sonido profesional",
    description:
      "PartyBox, Flip, Charge y toda la linea JBL. Lleva la fiesta a donde vayas.",
    cta: "Ver parlantes",
    href: "#parlantes",
    align: "right" as const,
  },
  {
    id: 3,
    image: "/images/hero-earbuds.jpg",
    title: "Auriculares",
    subtitle: "Bluetooth y con cable",
    description:
      "Earbuds, vinchas y gaming. La mejor calidad de audio al mejor precio.",
    cta: "Explorar",
    href: "#auriculares",
    align: "left" as const,
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setCurrent(index)
      setTimeout(() => setIsTransitioning(false), 600)
    },
    [isTransitioning]
  )

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <section className="relative w-full overflow-hidden bg-foreground">
      <div className="relative h-[50vh] min-h-[400px] md:h-[65vh] lg:h-[75vh]">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === current ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/40 to-transparent" />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-8">
          <div
            className={`max-w-xl ${
              slide.align === "right" ? "ml-auto text-right" : ""
            }`}
          >
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
              {slide.subtitle}
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-7xl">
              {slide.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              {slide.description}
            </p>
            <Link
              href={slide.href}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-8 py-3 text-sm font-semibold text-foreground transition-all hover:scale-105 hover:shadow-lg"
            >
              {slide.cta}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/20 text-primary-foreground backdrop-blur-sm transition-all hover:bg-background/40 md:h-12 md:w-12"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/20 text-primary-foreground backdrop-blur-sm transition-all hover:bg-background/40 md:h-12 md:w-12"
          aria-label="Siguiente"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-primary-foreground"
                  : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
              }`}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
