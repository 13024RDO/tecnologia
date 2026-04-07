import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    name: "Celulares",
    description: "Samsung, Motorola, Xiaomi y mas",
    image: "/images/hero-phones.jpg",
    href: "#celulares",
    featured: true,
  },
  {
    name: "Auriculares",
    description: "Bluetooth, Gamer y con cable",
    image: "/images/hero-earbuds.jpg",
    href: "#auriculares",
    featured: true,
  },
  {
    name: "Parlantes",
    description: "JBL, Soul y mas marcas",
    image: "/images/hero-speakers.jpg",
    href: "#parlantes",
    featured: false,
  },
  {
    name: "Cargadores",
    description: "Pared, auto e inalambricos",
    image: "/images/category-chargers.jpg",
    href: "#cargadores",
    featured: false,
  },
  {
    name: "Smart TV",
    description: "Monitores y pantallas",
    image: "/images/category-tv.jpg",
    href: "#smart-tv",
    featured: false,
  },
  {
    name: "Smartwatch",
    description: "Relojes inteligentes",
    image: "/images/category-smartwatch.jpg",
    href: "#smartwatch",
    featured: false,
  },
]

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Categorias
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Explora nuestro catalogo completo
          </p>
        </div>
        <Link
          href="#"
          className="hidden items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 sm:flex"
        >
          Ver todas
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {categories.map((cat, i) => (
          <Link
            key={cat.name}
            href={cat.href}
            className={`group relative overflow-hidden rounded-2xl bg-secondary ${
              i < 2
                ? "col-span-2 aspect-[2/1] md:col-span-1 md:row-span-2 md:aspect-auto md:h-full lg:col-span-2 lg:aspect-[2/1] lg:row-span-1"
                : "aspect-square"
            }`}
          >
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 md:p-6">
              <h3 className="font-display text-lg font-bold text-background md:text-xl">
                {cat.name}
              </h3>
              <p className="mt-0.5 text-xs text-background/70 md:text-sm">
                {cat.description}
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-background transition-all group-hover:gap-2">
                Explorar
                <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
