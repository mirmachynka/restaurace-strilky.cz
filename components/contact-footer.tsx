import { Mail, MapPin, Phone } from "lucide-react"

const FACEBOOK_ICON_PATH =
  "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"

export function ContactFooter() {
  return (
    <footer className="bg-[#4a3324] py-10 text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <span className="font-heading text-2xl font-bold">Restaurace Střílky</span>
            <p className="mt-3 max-w-md leading-relaxed text-white/72">
              Restaurace a hospoda v srdci obce Střílky. Tradiční česká kuchyně, poctivé zázemí
              a prostory pro pořádání akcí.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white">Restaurace Kulturní dům</h2>
            <p className="mt-3 flex items-start gap-2 text-sm text-white/72">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              Hlavní 75, 768 04 Střílky
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white">Hospoda Gól</h2>
            <p className="mt-3 flex items-start gap-2 text-sm text-white/72">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              Zámecká 317, 768 04 Střílky
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/18 pt-6 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="tel:792288900" className="flex items-center gap-2 text-sm text-white/72 hover:text-white">
              <Phone className="h-4 w-4" />
              792 288 900
            </a>
            <a
              href="mailto:kontakt@restaurace-strilky.cz"
              className="flex items-center gap-2 text-sm text-white/72 hover:text-white"
            >
              <Mail className="h-4 w-4" />
              kontakt@restaurace-strilky.cz
            </a>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <a
              href="https://www.facebook.com/profile.php?id=61578657824365"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/14 bg-white/8 text-white/72 transition-colors hover:border-white/28 hover:bg-white/14 hover:text-white"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5 fill-current">
                <path d={FACEBOOK_ICON_PATH} />
              </svg>
            </a>
            <p className="text-sm text-white/52">© {new Date().getFullYear()} Restaurace Střílky</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
