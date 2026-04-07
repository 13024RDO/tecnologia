"use client"

const brands = [
  "Samsung",
  "Motorola",
  "Xiaomi",
  "JBL",
  "Apple",
  "Nokia",
  "Infinix",
  "Tecno",
  "Epson",
  "Brother",
  "Redmi",
  "POCO",
  "Nubia",
  "Soul",
]

export function BrandMarquee() {
  return (
    <section className="overflow-hidden border-y border-border bg-secondary py-6">
      <div className="relative">
        <div className="flex animate-[marquee_30s_linear_infinite] items-center gap-12">
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="whitespace-nowrap font-display text-lg font-bold tracking-tight text-muted-foreground/40 transition-colors hover:text-foreground md:text-xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
