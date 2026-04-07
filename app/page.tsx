"use client"

import Image from "next/image"
import { useState } from "react"
import { 
  Globe, 
  CheckCircle2, 
  Smartphone, 
  Clock, 
  TrendingUp, 
  Shield, 
  Zap, 
  MessageCircle,
  ChevronDown,
  Star,
  Users,
  XCircle,
  ArrowRight,
  Search,
  ThumbsUp,
  Monitor
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const WHATSAPP_NUMBER = "543704383901"
const WHATSAPP_MESSAGE = "Hola! Quiero información sobre páginas web para mi negocio"

function WhatsAppButton({ text, className = "", size = "default" }: { text: string; className?: string; size?: "default" | "lg" }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  
  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={className}>
      <Button 
        size={size === "lg" ? "lg" : "default"}
        className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold w-full gap-2 shadow-lg shadow-[#25D366]/30 transition-all hover:scale-105"
      >
        <MessageCircle className="w-5 h-5" />
        {text}
      </Button>
    </a>
  )
}

function FloatingWhatsApp() {
  return (
    <a 
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-2xl shadow-[#25D366]/40 hover:scale-110 transition-transform animate-bounce"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 via-transparent to-orange-500/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/logo.png"
            alt="WebsVentas.ar"
            width={200}
            height={100}
            className="mx-auto"
            priority
          />
        </div>

        {/* Main Headline */}
        <h1 className="font-[var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          <span className="text-sky-400">¿Tu negocio</span>{" "}
          <span className="text-foreground">todavía</span><br />
          <span className="text-orange-400">no tiene página web?</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Estás <span className="text-orange-400 font-semibold">perdiendo clientes</span> todos los días.
          <br />
          <span className="text-sky-400 font-semibold">Nosotros te ayudamos a recuperarlos.</span>
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-border">
            <Globe className="w-5 h-5 text-sky-400" />
            <span className="text-sm font-medium">Aparecé en Internet</span>
          </div>
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-border">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium">Mostrate Profesional</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <WhatsAppButton text="¡Quiero más clientes!" size="lg" className="w-full sm:w-auto" />
          <a href="#ejemplos" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
            Ver ejemplos <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Hero Image */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <Image
            src="/images/promo-light.png"
            alt="Ejemplos de páginas web profesionales"
            width={800}
            height={600}
            className="rounded-2xl shadow-2xl shadow-sky-500/20 border border-border/50"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </div>
    </section>
  )
}

function ProblemSection() {
  const problems = [
    { icon: XCircle, text: "Tus clientes buscan en Google y encuentran a tu competencia" },
    { icon: XCircle, text: "Te llaman a cualquier hora porque no tienen información disponible" },
    { icon: XCircle, text: "Perdés ventas porque no pueden ver tus productos o servicios" },
    { icon: XCircle, text: "Tu negocio parece menos profesional que los demás" },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-red-950/10 to-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-center mb-4">
          Sin página web, <span className="text-red-400">estás invisible</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Mientras vos dudás, tu competencia está captando a tus clientes potenciales
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-red-950/20 border-red-900/30 hover:border-red-700/50 transition-colors">
              <CardContent className="flex items-start gap-4 p-6">
                <problem.icon className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                <p className="text-foreground">{problem.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            ¿Vas a seguir <span className="text-red-400">perdiendo oportunidades</span>?
          </p>
        </div>
      </div>
    </section>
  )
}

function SolutionSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 via-transparent to-orange-500/5" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-sky-500/20 text-sky-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Zap className="w-4 h-4" />
          La solución
        </div>

        <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold mb-6">
          Tu página web profesional<br />
          <span className="text-sky-400">lista en 48 horas</span>
        </h2>

        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          No necesitás conocimientos técnicos. Nosotros nos encargamos de todo para que vos 
          <span className="text-foreground font-semibold"> solo te preocupes por vender</span>.
        </p>

        <div className="relative max-w-2xl mx-auto mb-12">
          <Image
            src="/images/promo-dark.png"
            alt="Tu página web en 48 horas"
            width={700}
            height={500}
            className="rounded-2xl shadow-2xl shadow-sky-500/20 border border-border/50"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["Diseño Profesional", "Optimizada para Celular", "Botón de WhatsApp", "Lista para Vender"].map((feature) => (
            <div key={feature} className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>

        <WhatsAppButton text="¡Quiero mi página web!" size="lg" />
      </div>
    </section>
  )
}

function BenefitsSection() {
  const benefits = [
    {
      icon: Search,
      title: "Más Clientes",
      description: "Aparecé en Google cuando busquen lo que vos vendés. Llegá a clientes nuevos todos los días.",
      color: "text-sky-400"
    },
    {
      icon: Smartphone,
      title: "Visible en Celular",
      description: "El 80% de las personas buscan desde el celular. Tu web se ve perfecta en cualquier dispositivo.",
      color: "text-orange-400"
    },
    {
      icon: ThumbsUp,
      title: "Imagen Profesional",
      description: "Transmití confianza y credibilidad. Una web profesional te diferencia de la competencia.",
      color: "text-green-400"
    },
    {
      icon: Clock,
      title: "Disponible 24/7",
      description: "Tu página trabaja para vos mientras dormís. Recibí consultas a cualquier hora del día.",
      color: "text-purple-400"
    },
    {
      icon: TrendingUp,
      title: "Más Ventas",
      description: "Convertí visitantes en clientes con una web diseñada para vender, no solo para mostrar.",
      color: "text-pink-400"
    },
    {
      icon: Shield,
      title: "Sin Complicaciones",
      description: "Nosotros nos encargamos del hosting, dominio y mantenimiento. Vos solo vendés.",
      color: "text-cyan-400"
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-card/50 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-center mb-4">
          ¿Por qué necesitás una <span className="text-sky-400">página web</span>?
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          No es un gasto, es una inversión que se paga sola
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border-border hover:border-sky-500/50 transition-all hover:-translate-y-1 group">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-card flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${benefit.color}`}>
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExamplesSection() {
  const examples = [
    { type: "Electricista", icon: Zap, color: "from-yellow-500 to-orange-500" },
    { type: "Salón de Belleza", icon: Star, color: "from-pink-500 to-purple-500" },
    { type: "Restaurante", icon: Users, color: "from-red-500 to-orange-500" },
    { type: "Profesionales", icon: Shield, color: "from-sky-500 to-blue-500" },
    { type: "Comercios", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
    { type: "Servicios", icon: Monitor, color: "from-cyan-500 to-sky-500" },
  ]

  return (
    <section id="ejemplos" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-center mb-4">
          Páginas web para <span className="text-orange-400">cualquier rubro</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Sea cual sea tu negocio, tenemos la solución perfecta para vos
        </p>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
          {examples.map((example, index) => (
            <Card key={index} className="bg-card border-border hover:border-sky-500/50 transition-all hover:scale-105 cursor-pointer overflow-hidden group">
              <CardContent className="p-6 text-center relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${example.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-card to-muted flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <example.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">{example.type}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">¿No ves tu rubro? No te preocupes, hacemos webs para todos</p>
          <WhatsAppButton text="Consultá por tu rubro" />
        </div>
      </div>
    </section>
  )
}

function OfferSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-orange-500/10 to-sky-500/10" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <Card className="bg-card/80 backdrop-blur border-2 border-sky-500/50 overflow-hidden">
          <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
            OFERTA ESPECIAL
          </div>
          
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold mb-6">
              Tu página web desde<br />
              <span className="text-6xl md:text-8xl text-sky-400">$100.000</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Precio único. Sin cuotas sorpresa. Sin costos ocultos.
            </p>

            <div className="grid gap-3 md:grid-cols-2 mb-8 max-w-lg mx-auto text-left">
              {[
                "Diseño profesional personalizado",
                "Optimizada para celulares",
                "Botón de WhatsApp integrado",
                "Hosting incluido por 1 año",
                "Dominio .com.ar incluido",
                "Soporte técnico permanente",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-orange-500/20 border border-orange-500/50 rounded-xl p-4 mb-8">
              <p className="text-orange-400 font-semibold">
                🎁 BONUS: Maqueta GRATIS antes de pagar
              </p>
              <p className="text-sm text-muted-foreground">
                Te mostramos cómo va a quedar tu web sin compromiso
              </p>
            </div>

            <WhatsAppButton text="¡Quiero mi maqueta GRATIS!" size="lg" />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "María García",
      business: "Peluquería Estilo",
      text: "Desde que tengo mi página web, me llegan más de 10 clientes nuevos por semana. La mejor inversión que hice.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      business: "Electricista 24hs",
      text: "Antes dependía solo de los contactos. Ahora la gente me encuentra en Google y me contacta directo por WhatsApp.",
      rating: 5
    },
    {
      name: "Laura Martínez",
      business: "Pastelería Dulce Hogar",
      text: "Mi página web me ayudó a vender en otras zonas. Ahora hago envíos y duplicé mis ventas.",
      rating: 5
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-center mb-4">
          Lo que dicen <span className="text-sky-400">nuestros clientes</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Negocios reales con resultados reales
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Cuánto tiempo tardan en hacer mi página?",
      answer: "Tu página web está lista en 48 horas hábiles desde que nos enviás toda la información necesaria (textos, fotos, logo)."
    },
    {
      question: "¿Necesito saber de computación?",
      answer: "Para nada. Nosotros nos encargamos de todo: diseño, programación, hosting y dominio. Vos solo nos decís qué querés mostrar."
    },
    {
      question: "¿Qué pasa si no me gusta el diseño?",
      answer: "Te mostramos una maqueta GRATIS antes de que pagues. Si no te gusta, hacemos los cambios que necesites sin costo adicional."
    },
    {
      question: "¿Puedo hacer cambios después?",
      answer: "¡Sí! Incluimos soporte técnico permanente. Podés pedirnos cambios cuando quieras."
    },
    {
      question: "¿El precio incluye el hosting y dominio?",
      answer: "Sí, el precio incluye hosting por 1 año y tu dominio .com.ar. Después del primer año, el costo de renovación es muy accesible."
    },
    {
      question: "¿Funciona en celulares?",
      answer: "¡Por supuesto! Todas nuestras páginas están optimizadas para verse perfectas en celulares, tablets y computadoras."
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-center mb-4">
          Preguntas <span className="text-sky-400">frecuentes</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12">
          Resolvemos todas tus dudas
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className={`bg-card border-border cursor-pointer transition-all ${openIndex === index ? 'border-sky-500/50' : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <CardContent className="p-0">
                <div className="flex items-center justify-between p-5">
                  <h3 className="font-semibold text-left pr-4">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-muted-foreground transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                </div>
                {openIndex === index && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 via-orange-500/20 to-sky-500/20" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold mb-6">
          ¿Listo para tener<br />
          <span className="text-sky-400">más clientes</span>?
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
          Escribinos por WhatsApp y en menos de 48 horas tenés tu página web lista para vender
        </p>

        <WhatsAppButton text="¡Escribime por WhatsApp!" size="lg" />

        <p className="mt-6 text-sm text-muted-foreground">
          Sin compromiso • Maqueta GRATIS • Respuesta inmediata
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <Image
          src="/images/logo.png"
          alt="WebsVentas.ar"
          width={150}
          height={75}
          className="mx-auto mb-6"
        />
        <p className="text-muted-foreground mb-4">
          Páginas web profesionales para tu negocio
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} WebsVentas.ar - Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <ExamplesSection />
      <OfferSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
