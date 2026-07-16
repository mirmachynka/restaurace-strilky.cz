import { useState } from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

const links = [
  { href: "#restaurace", label: "Provozovny" },
  { href: "#poledni-menu", label: "Polední menu" },
  { href: "#kontakt", label: "Kontakt" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#" className="flex items-center">
          <span className="font-heading text-lg font-bold leading-tight text-foreground">
            Restaurace Střílky
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button nativeButton={false} render={<a href="#kontakt">Kde nás najdete</a>} />
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <nav aria-hidden={!open} className="min-h-0 border-t border-border/60 bg-background">
          <div
            className={`mx-auto flex max-w-6xl flex-col px-4 py-2 transition-all duration-300 ease-out ${
              open ? "translate-y-0" : "-translate-y-2"
            }`}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button
              className="mt-2"
              nativeButton={false}
              render={
                <a href="#kontakt" onClick={() => setOpen(false)}>
                  Kde nás najdete
                </a>
              }
            />
          </div>
        </nav>
      </div>
    </header>
  )
}
