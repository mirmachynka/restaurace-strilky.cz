import { CalendarDays, MapPin, Utensils } from "lucide-react"

import { ExpandableImage } from "@/components/expandable-image"
import { Button } from "@/components/ui/button"
import { restaurantImages } from "@/lib/site-images"

const highlights = [
  { title: "Česká kuchyně", desc: "Tradiční recepty" },
  { title: "Ubytování", desc: "Přímo ve Střílkách" },
  { title: "Pořádání akcí", desc: "Oslavy & svatby" },
]

export function HeroSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:px-6">
        <div className="rounded-b-[2rem] bg-[#4a3324] px-5 py-20 text-center text-white md:rounded-b-[2.5rem] md:px-10 md:py-28">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            <h1 className="font-heading text-5xl font-bold leading-tight text-balance sm:text-6xl md:text-7xl">
              Restaurace Střílky
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-white/84 md:text-xl">
              Restaurace Kulturní dům a hospoda Gól mají jeden cíl: výborné jídlo, příjemné posezení a
              příjemnou atmosféru pro rodinné oslavy, firemní akce i každodenní posezení.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                nativeButton={false}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                render={<a href="#restaurace">Naše provozovny</a>}
              >
                <Utensils className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                nativeButton={false}
                className="bg-white text-[#4a3324] hover:bg-white/90"
                render={<a href="#poledni-menu">Dnešní menu</a>}
              >
                <CalendarDays className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                className="border-white/24 bg-transparent text-white hover:border-white/38 hover:bg-white/10 hover:text-white"
                render={<a href="#kontakt">Kde nás najdete</a>}
              >
                <MapPin className="h-5 w-5" />
              </Button>
            </div>

            <div className="mt-12 grid w-full max-w-3xl overflow-hidden rounded-2xl border border-white/16 bg-white/6 divide-y divide-white/16 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {highlights.map((item) => (
                <div key={item.title} className="px-5 py-4 text-center">
                  <h2 className="font-medium text-white">{item.title}</h2>
                  <p className="mt-1 text-sm text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          <ExpandableImage
            src={restaurantImages[0].src}
            alt={restaurantImages[0].alt}
            className="col-span-2 aspect-[16/10] md:col-span-3"
          />
          <ExpandableImage
            src={restaurantImages[1].src}
            alt={restaurantImages[1].alt}
            className="aspect-square md:col-span-1"
          />
          <ExpandableImage
            src={restaurantImages[3].src}
            alt={restaurantImages[3].alt}
            className="aspect-square md:col-span-1"
          />
        </div>
      </div>
    </section>
  )
}
