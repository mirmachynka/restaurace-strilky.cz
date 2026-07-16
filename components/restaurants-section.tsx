import { BedDouble, Beer, MapPin, Trophy, Users, Utensils } from "lucide-react"

import { ExpandableImage } from "@/components/expandable-image"
import { restaurantImages } from "@/lib/site-images"

const kulturniDumFeatures = [
  { icon: Users, label: "Prostorný sál pro akce" },
  { icon: MapPin, label: "Kulturní dům" },
  { icon: Utensils, label: "Tradiční česká kuchyně" },
]

const golFeatures = [
  { icon: Trophy, label: "U fotbalového hřiště" },
  { icon: Beer, label: "Čepované pivo" },
  { icon: BedDouble, label: "Ubytování" },
]

const accommodationPhotos = ["Pokoj 1", "Pokoj 2", "Zázemí ubytování"]

function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex h-full min-h-56 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-muted p-6 text-center">
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
      <span className="text-xs text-muted-foreground/70">Fotografie již brzy</span>
    </div>
  )
}

function FeatureGrid({ items }: { items: typeof kulturniDumFeatures }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((feature) => (
        <div key={feature.label} className="rounded-2xl border border-border bg-card p-4">
          <span
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary"
          >
            <feature.icon className="h-5 w-5" />
          </span>
          <p className="mt-3 text-sm font-medium leading-snug text-foreground">{feature.label}</p>
        </div>
      ))}
    </div>
  )
}

function RestaurantGallery() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {restaurantImages.map((image) => (
          <ExpandableImage
            key={image.src}
            src={image.src}
            alt={image.alt}
            className={`overflow-hidden rounded-2xl bg-muted ${
              image.wide ? "col-span-2 aspect-[16/7] md:col-span-3" : "aspect-square"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export function RestaurantsSection() {
  return (
    <section id="restaurace" className="scroll-mt-20 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 md:gap-24 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#4a3324]">Naše provozovny</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-balance text-foreground md:text-5xl">
            Restaurace, hospoda a ubytování
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Ať už hledáte místo pro rodinnou oslavu nebo příjemné posezení po zápase, máme pro vás to pravé.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#4a3324]/10 px-4 py-2 text-sm font-medium text-[#4a3324]">
              <MapPin className="h-4 w-4" />
              Hlavní 75, 768 04 Střílky
            </span>
            <h3 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Restaurace Kulturní dům
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Moderní restaurace v srdci obce s prostorným sálem pro pořádání svateb, oslav a firemních akcí.
              Příjemné zázemí pro oběd i větší společenské akce.
            </p>
            <div className="w-full">
              <FeatureGrid items={kulturniDumFeatures} />
            </div>
          </div>

          <ExpandableImage
            src="/image2.jpg"
            alt="Hlavní sál restaurace Kulturní dům"
            className="aspect-video w-full rounded-2xl object-cover"
          />

          <div className="lg:col-span-2">
            <RestaurantGallery />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <PhotoPlaceholder label="Hospoda Gól" />

          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#4a3324]/10 px-4 py-2 text-sm font-medium text-[#4a3324]">
              <MapPin className="h-4 w-4" />
              Zámecká 317, 768 04 Střílky
            </span>
            <h3 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Hospoda Gól & ubytování
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Sportovní hospoda přímo u fotbalového hřiště. Ideální místo pro fanoušky sportu, dobrý oběd,
              sledování zápasu s přáteli i praktické ubytování ve Střílkách.
            </p>
            <div className="w-full">
              <FeatureGrid items={golFeatures} />
            </div>
            <div className="w-full">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Ubytování
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {accommodationPhotos.map((label) => (
                  <PhotoPlaceholder key={label} label={label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
