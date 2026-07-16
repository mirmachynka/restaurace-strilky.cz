import { useEffect, useId, useState } from "react"
import { Maximize2, X } from "lucide-react"

import { cn } from "@/lib/utils"

type ExpandableImageProps = {
  src: string
  alt: string
  className?: string
  imageClassName?: string
}

export function ExpandableImage({ src, alt, className, imageClassName }: ExpandableImageProps) {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const titleId = useId()

  const close = () => {
    setVisible(false)
    window.setTimeout(() => setOpen(false), 180)
  }

  const expand = () => {
    setOpen(true)
    window.requestAnimationFrame(() => setVisible(true))
  }

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close()
      }
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={expand}
        className={cn(
          "group relative block cursor-pointer overflow-hidden rounded-2xl bg-muted text-left focus-visible:ring-3 focus-visible:ring-ring/50",
          className,
        )}
        aria-label={`Zvětšit fotografii: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className={cn("h-full w-full object-cover transition-transform duration-500 group-hover:scale-105", imageClassName)}
        />
        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/35 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          <Maximize2 className="h-4 w-4" />
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/82 p-4 backdrop-blur-sm transition-opacity duration-200 ease-out ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
        >
          <div
            className={`relative flex max-w-[min(92vw,72rem)] flex-col items-center transition-[opacity,transform] duration-200 ease-out ${
              visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <h2 id={titleId} className="sr-only">
              {alt}
            </h2>
            <button
              type="button"
              onClick={close}
              className="absolute right-0 top-0 z-10 flex h-11 w-11 -translate-y-14 cursor-pointer items-center justify-center rounded-full bg-white/14 text-white backdrop-blur-md transition-colors hover:bg-white/24"
              aria-label="Zavřít fotografii"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={src}
              alt={alt}
              className="h-auto max-h-[86vh] w-auto max-w-full overflow-hidden rounded-2xl object-contain shadow-2xl"
            />
            <p className="mt-3 text-center text-sm text-white/72">{alt}</p>
          </div>
        </div>
      )}
    </>
  )
}
