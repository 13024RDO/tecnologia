import Link from "next/link"
import {
  Smartphone,
  Headphones,
  Speaker,
  BatteryCharging,
  Cable,
  Printer,
  Monitor,
  Watch,
  Laptop,
  Gamepad2,
  Mouse,
  Keyboard,
  Camera,
  Wifi,
  Plug,
  Tablet,
} from "lucide-react"

const allCategories = [
  { name: "Celulares", icon: Smartphone, href: "#" },
  { name: "Auriculares", icon: Headphones, href: "#" },
  { name: "Parlantes", icon: Speaker, href: "#" },
  { name: "Cargadores", icon: BatteryCharging, href: "#" },
  { name: "Cables", icon: Cable, href: "#" },
  { name: "Impresoras", icon: Printer, href: "#" },
  { name: "Smart TV", icon: Monitor, href: "#" },
  { name: "Smartwatch", icon: Watch, href: "#" },
  { name: "Notebooks", icon: Laptop, href: "#" },
  { name: "Joysticks", icon: Gamepad2, href: "#" },
  { name: "Mouse", icon: Mouse, href: "#" },
  { name: "Teclados", icon: Keyboard, href: "#" },
  { name: "Camaras", icon: Camera, href: "#" },
  { name: "Router WiFi", icon: Wifi, href: "#" },
  { name: "Adaptadores", icon: Plug, href: "#" },
  { name: "Tablets", icon: Tablet, href: "#" },
]

export function AllCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="mb-8 text-center">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Todas las categorias
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Encontra todo lo que necesitas en un solo lugar
        </p>
      </div>
      <div className="grid grid-cols-4 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {allCategories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.href}
            className="group flex flex-col items-center gap-2 rounded-2xl bg-secondary p-4 transition-all hover:bg-accent hover:shadow-md md:p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background transition-colors group-hover:bg-primary/10">
              <cat.icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <span className="text-center text-xs font-medium text-foreground">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
