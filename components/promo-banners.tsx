import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const banners = [
  {
    title: "Gaming Zone",
    description:
      "Auriculares gamer, joysticks, teclados y todo lo que necesitas para tu setup.",
    image: "/images/promo-gaming.jpg",
    cta: "Ver productos",
    href: "#gaming",
    dark: true,
  },
  {
    title: "Notebooks",
    description:
      "Las mejores notebooks para estudio, trabajo y gaming. Encontra la tuya.",
    image: "/images/category-notebook.jpg",
    cta: "Explorar",
    href: "#notebooks",
    dark: false,
  },
]

export function PromoBanners() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:py-12">
      <div className="grid gap-4 md:grid-cols-2">
        {banners.map((banner) => (
          <Link
            key={banner.title}
            href={banner.href}
            className="group relative flex min-h-[280px] overflow-hidden rounded-2xl md:min-h-[340px]"
          >
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className={`absolute inset-0 ${
                banner.dark
                  ? "bg-gradient-to-r from-foreground/90 via-foreground/60 to-foreground/30"
                  : "bg-gradient-to-r from-background/90 via-background/60 to-background/30"
              }`}
            />
            <div className="relative z-10 flex flex-col justify-end p-6 md:p-8">
              <h3
                className={`font-display text-2xl font-bold md:text-3xl ${
                  banner.dark ? "text-background" : "text-foreground"
                }`}
              >
                {banner.title}
              </h3>
              <p
                className={`mt-2 max-w-sm text-sm leading-relaxed ${
                  banner.dark
                    ? "text-background/70"
                    : "text-foreground/70"
                }`}
              >
                {banner.description}
              </p>
              <span
                className={`mt-4 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all group-hover:gap-3 ${
                  banner.dark
                    ? "bg-background text-foreground"
                    : "bg-foreground text-background"
                }`}
              >
                {banner.cta}
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
