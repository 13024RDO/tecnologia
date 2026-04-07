import { Truck, CreditCard, Shield, Headphones } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Envio a todo el pais",
    description: "Gratis en compras +$50.000",
  },
  {
    icon: CreditCard,
    title: "6 cuotas sin interes",
    description: "Con todas las tarjetas",
  },
  {
    icon: Shield,
    title: "Compra protegida",
    description: "Garantia en todos los productos",
  },
  {
    icon: Headphones,
    title: "Atencion personalizada",
    description: "Te ayudamos a elegir",
  },
]

export function FeaturesStrip() {
  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 md:py-10 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary/10">
              <feature.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
