"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  ChevronDown,
  Headphones,
  Cable,
  BatteryCharging,
  Smartphone,
  Printer,
  Speaker,
  Monitor,
} from "lucide-react"

const categories = [
  { name: "Celulares", icon: Smartphone, href: "#celulares" },
  { name: "Auriculares", icon: Headphones, href: "#auriculares" },
  { name: "Parlantes", icon: Speaker, href: "#parlantes" },
  { name: "Cargadores", icon: BatteryCharging, href: "#cargadores" },
  { name: "Cables", icon: Cable, href: "#cables" },
  { name: "Impresoras", icon: Printer, href: "#impresoras" },
  { name: "Smart TV", icon: Monitor, href: "#smart-tv" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <>
      {/* Top bar */}
      <div className="bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs">
          <span className="hidden font-medium tracking-wide sm:block">
            Envio gratis en compras mayores a $50.000
          </span>
          <span className="font-medium tracking-wide sm:hidden">
            Envio gratis +$50.000
          </span>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="transition-opacity hover:opacity-80"
            >
              Crear cuenta
            </Link>
            <span className="opacity-40">|</span>
            <Link
              href="#"
              className="transition-opacity hover:opacity-80"
            >
              Iniciar sesion
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* Logo */}
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

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                {cat.name}
              </Link>
            ))}
            <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
              Mas
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-accent"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="#"
              className="hidden h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-accent sm:flex"
              aria-label="Mi cuenta"
            >
              <User className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-accent"
              aria-label="Carrito"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                0
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-accent lg:hidden"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className="border-t border-border px-4 py-3">
            <div className="mx-auto max-w-2xl">
              <div className="flex items-center gap-3 rounded-full bg-secondary px-4 py-2.5">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="border-t border-border lg:hidden">
            <div className="mx-auto max-w-7xl px-4 py-4">
              <nav className="flex flex-col gap-1">
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    <cat.icon className="h-5 w-5 text-muted-foreground" />
                    {cat.name}
                  </Link>
                ))}
                <div className="my-2 h-px bg-border" />
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  <User className="h-5 w-5 text-muted-foreground" />
                  Mi cuenta
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
