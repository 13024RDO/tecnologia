import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { FeaturesStrip } from "@/components/features-strip"
import { CategoryGrid } from "@/components/category-grid"
import { FeaturedProducts } from "@/components/featured-products"
import { PromoBanners } from "@/components/promo-banners"
import { BrandMarquee } from "@/components/brand-marquee"
import { AllCategories } from "@/components/all-categories"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroCarousel />
      <FeaturesStrip />
      <CategoryGrid />
      <FeaturedProducts />
      <PromoBanners />
      <BrandMarquee />
      <AllCategories />
      <Newsletter />
      <Footer />
    </main>
  )
}
