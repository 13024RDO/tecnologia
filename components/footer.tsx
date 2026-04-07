import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  Productos: [
    { name: "Celulares", href: "#celulares" },
    { name: "Auriculares", href: "#auriculares" },
    { name: "Parlantes", href: "#parlantes" },
    { name: "Cargadores", href: "#cargadores" },
    { name: "Cables", href: "#cables" },
    { name: "Impresoras", href: "#impresoras" },
  ],
  Categorias: [
    { name: "Smart TV", href: "#smart-tv" },
    { name: "Smartwatch", href: "#smartwatch" },
    { name: "Notebooks", href: "#notebooks" },
    { name: "Accesorios", href: "#accesorios" },
    { name: "Gaming", href: "#gaming" },
    { name: "Ver todo", href: "#" },
  ],
  Informacion: [
    { name: "Quienes somos", href: "#" },
    { name: "Formas de pago", href: "#" },
    { name: "Envios", href: "#" },
    { name: "Cambios y devoluciones", href: "#" },
    { name: "Terminos y condiciones", href: "#" },
    { name: "Contacto", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="font-display text-lg font-bold text-primary-foreground">
                  A
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold leading-tight tracking-tight text-foreground">
                  ARGO
                </span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  Telefonia
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Tu tienda de tecnologia y accesorios para celulares. Los
              mejores productos al mejor precio con envio a todo el pais.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:info@argotelefonia.com.ar"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                info@argotelefonia.com.ar
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                +54 11 1234-5678
              </span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Buenos Aires, Argentina
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-foreground">
                {title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-muted-foreground sm:flex-row">
          <span>
            {"Argo Telefonia Movil. Todos los derechos reservados."}
          </span>
          <div className="flex items-center gap-4">
            <Link href="#" className="transition-colors hover:text-foreground">
              Privacidad
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Terminos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
