import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "792 288 900",
    href: "tel:792288900",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "info@restaurace-strilky.cz",
    href: "mailto:info@restaurace-strilky.cz",
  },
]

const locations = [
  {
    name: "Restaurace Kulturní dům",
    address: "Hlavní 75, 768 04 Střílky",
    mapUrl: "https://maps.google.com/?q=Hlavní+75,+768+04+Střílky",
  },
  {
    name: "Hospoda Gól",
    address: "Zámecká 317, 768 04 Střílky",
    mapUrl: "https://maps.google.com/?q=Zámecká+317,+768+04+Střílky",
  },
]

export function ContactSection() {
  return (
    <section id="kontakt" className="scroll-mt-20 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#4a3324]">Kontakt</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-5xl">Těšíme se na vás</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Máte dotaz nebo si chcete rezervovat stůl? Kontaktujte nás telefonicky nebo e-mailem.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-6 py-8 text-center transition-colors hover:border-[#4a3324]/20 hover:bg-white"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#4a3324]/10 text-[#4a3324] transition-colors group-hover:bg-[#4a3324]/14">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="font-heading font-semibold leading-snug text-foreground transition-colors group-hover:text-[#4a3324]">
                    {item.value}
                  </span>
                </a>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4a3324]/10 text-[#4a3324]">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Kde nás najdete</p>
                  <p className="font-semibold text-foreground">Naše adresy</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {locations.map((location) => (
                  <div
                    key={location.address}
                    className="flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-4"
                  >
                    <div>
                      <p className="font-medium text-foreground">{location.name}</p>
                      <p className="text-sm text-muted-foreground">{location.address}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      nativeButton={false}
                      render={
                        <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                          Mapa
                        </a>
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-2xl bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10426.843866927!2d17.199!3d49.179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713a13f8a1b5b9d%3A0x400af0f66157a60!2sStr%C3%ADlky!5e0!3m2!1scs!2scz!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Střílky"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
