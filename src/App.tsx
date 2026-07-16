import { ContactFooter } from "@/components/contact-footer"
import { ContactSection } from "@/components/contact-section"
import { HeroSection } from "@/components/hero-section"
import { MenuSection } from "@/components/menu-section"
import { RestaurantsSection } from "@/components/restaurants-section"
import { SiteHeader } from "@/components/site-header"

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="flex flex-col gap-20 md:gap-28">
        <main className="flex flex-col gap-20 md:gap-28">
          <HeroSection />
          <RestaurantsSection />
          <MenuSection />
          <ContactSection />
        </main>
        <ContactFooter />
      </div>
    </div>
  )
}
