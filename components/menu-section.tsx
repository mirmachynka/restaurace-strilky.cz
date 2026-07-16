export function MenuSection() {
  return (
    <section id="poledni-menu" className="scroll-mt-20 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">Polední menu</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-5xl">
            Aktuální nabídka
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Denní menu pro Restauraci Kulturní dům.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-primary/14 bg-card shadow-sm">
          <div className="flex flex-col gap-1 bg-primary px-5 py-4 text-primary-foreground sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/64">Denní nabídka</p>
              <h3 className="font-heading text-2xl font-bold">Polední menu</h3>
            </div>
            <p className="text-sm text-white/72">Restaurace Kulturní dům</p>
          </div>

          <iframe
            src="https://www.menicka.cz/api/iframe/?id=9730"
            title="Polední menu"
            loading="lazy"
            className="block w-full bg-white"
            style={{ minHeight: "1600px", border: 0 }}
          />
        </div>
      </div>
    </section>
  )
}
