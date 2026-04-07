"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  return (
    <section className="bg-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-16 text-center md:py-20">
        <h2 className="font-display text-2xl font-bold tracking-tight text-background md:text-4xl">
          Recibe ofertas exclusivas
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-background/60">
          Suscribite a nuestro newsletter y enterate de las mejores
          promociones antes que nadie.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex w-full max-w-md items-center gap-2"
        >
          <div className="relative flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu email"
              className="w-full rounded-full bg-background/10 px-5 py-3 text-sm text-background outline-none ring-1 ring-background/20 transition-all placeholder:text-background/40 focus:bg-background/15 focus:ring-background/40"
            />
          </div>
          <button
            type="submit"
            className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90"
            aria-label="Suscribirse"
          >
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>
    </section>
  )
}
