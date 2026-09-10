# Changelog

All notable changes to `restaurace-strilky-cz` will be documented here.

This project follows semantic versioning once published.

## 1.0.0

- Migrated the site from Vite, Tailwind CSS, shadcn/ui and `@base-ui/react` to the Trebired application layout: `.trebired/*` package configs, `src/frontend`, `src/bin`, `src/types`, built by `@trebired/bundler` and rendered with `@trebired/frontend`.
- Added English. Switching re-renders the page in place without a reload or a change of URL, and the saved language is shown before the application bundle runs. English also has its own `/en` page so search engines index it; visitors are never sent there.
- Added `@trebired/seo` for canonical URLs, `hreflang` alternates, Open Graph and Twitter tags, JSON-LD, `robots.txt` and `sitemap.xml`, replacing the hand-written head in `index.html`.
- Replaced the hand-written `@font-face` blocks with `@trebired/frontend` font assets: Inter for text and Playfair Display for headings.
- Replaced the local lightbox with the `@trebired/frontend` media system, which renders through a portal, traps and restores focus, and reference counts the body scroll lock.
- Replaced `lucide-react` with `@trebired/frontend` Remix icons rendered from a build-time static cache, so the page makes no icon requests.
- Moved every string into colocated `i18n/cs.ts` and `i18n/en.ts` files and de-duplicated the venue addresses, phone number and venue names that were repeated across three components.
- Added the brand mark in `src/brand/favicon.svg`; `@trebired/frontend` rasterizes it into the ICO and PNG sizes at build time. The site had no favicon before.
- Regenerated the Google Maps embed. The previous URL ended in a placeholder timestamp.
- Fixed the `theme-color` meta, which was a green left over from an earlier palette, to the site's brown.
- Added `@trebired/code-discipline` with the `@trebired/configs` preset and the `dev` gate.
- Added `netlify.toml` declaring `bun run build` and `dist`, replacing the Apache `.htaccess` rewrite the host never used.
- Added `LICENSE`, `CONTRIBUTING.md` and this changelog.
