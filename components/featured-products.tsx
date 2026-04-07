"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, Tag } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Parlante JBL PartyBox 720",
    category: "Parlantes",
    price: 3294060,
    originalPrice: 4117575,
    transferPrice: 2141139,
    image: "/images/product-speaker1.jpg",
    badge: "20% OFF",
    freeShipping: true,
  },
  {
    id: 2,
    name: "Parlante JBL PartyBox Ultimate",
    category: "Parlantes",
    price: 3999076,
    originalPrice: null,
    transferPrice: 2599399,
    image: "/images/product-speaker2.jpg",
    badge: null,
    freeShipping: true,
  },
  {
    id: 3,
    name: "Smartphone Redmi Note 13 Pro",
    category: "Celulares",
    price: 489990,
    originalPrice: 549990,
    transferPrice: 318493,
    image: "/images/product-phone1.jpg",
    badge: "10% OFF",
    freeShipping: true,
  },
  {
    id: 4,
    name: "Earbuds Bluetooth Pro TWS",
    category: "Auriculares",
    price: 45990,
    originalPrice: 59990,
    transferPrice: 29893,
    image: "/images/product-earbuds1.jpg",
    badge: "23% OFF",
    freeShipping: false,
  },
  {
    id: 5,
    name: "Parlante JBL PartyBox Club 320",
    category: "Parlantes",
    price: 1690000,
    originalPrice: 1877777,
    transferPrice: 1098500,
    image: "/images/product-speaker1.jpg",
    badge: "10% OFF",
    freeShipping: true,
  },
  {
    id: 6,
    name: "Parlante JBL PartyBox Club 120",
    category: "Parlantes",
    price: 1196910,
    originalPrice: 1496137,
    transferPrice: 777991,
    image: "/images/product-speaker2.jpg",
    badge: "20% OFF",
    freeShipping: true,
  },
]

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function FeaturedProducts() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = direction === "left" ? -340 : 340
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Productos destacados
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Lo mas vendido de nuestra tienda
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="scrollbar-hide flex gap-4 overflow-x-auto px-4 pb-4 md:px-[max(1rem,calc((100vw-80rem)/2+1rem))]"
      >
        {products.map((product) => (
          <Link
            key={product.id}
            href="#"
            className="group flex w-[280px] flex-none flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg md:w-[320px]"
          >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden bg-secondary">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {product.badge && (
                <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-destructive px-2.5 py-1 text-xs font-bold text-destructive-foreground">
                  <Tag className="h-3 w-3" />
                  {product.badge}
                </span>
              )}
              {product.freeShipping && (
                <span className="absolute right-3 top-3 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                  Envio gratis
                </span>
              )}
            </div>

            {/* Details */}
            <div className="flex flex-1 flex-col p-4">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {product.category}
              </span>
              <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-card-foreground">
                {product.name}
              </h3>
              <div className="mt-auto pt-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-card-foreground">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-primary">
                  {formatPrice(product.transferPrice)} con transferencia
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  6 cuotas sin interes de{" "}
                  {formatPrice(Math.round(product.price / 6))}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mx-auto mt-6 max-w-7xl px-4">
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          Ver todos los productos
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
