<div align="center">

<img src="docs/screens/mark.png" alt="Restaurace Střílky" width="120">

**The website of Restaurace Střílky: a bilingual, prerendered page for Restaurace Kulturní dům and Hospoda Gól, with the two venues, today's lunch menu, rooms to stay in and how to get in touch.**

[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Runtime](https://img.shields.io/badge/runtime-Bun%201%2B-black)](#install)
[![Output](https://img.shields.io/badge/output-static%20site-black)](#runtime)

</div>

---

This repository owns what is specific to this site: the copy and its Czech and English translations, the four sections, the brand mark, and the design values in `.trebired/`. The `@trebired/*` packages own everything generic: the build, the browser runtime, locale routing, the gallery lightbox, SEO artifacts and logging. menicka.cz owns the lunch menu, which the page embeds, and Google owns the map. The operator owns the Netlify site and the DNS record. This repository does not own a server, a database, table bookings or the menu data.

The output is static files. There is no backend, no contact form, no accounts and no analytics.

Restaurace Střílky is a Trebired product, licensed under the MIT License. See [LICENSE](LICENSE).

## Contents

- [Install](#install)
- [Quick Start](#quick-start)
- [Screens](#screens)
- [Concepts](#concepts)
- [Configuration](#configuration)
- [Runtime](#runtime)
- [Contributing](#contributing)
- [What It Does Not Do](#what-it-does-not-do)

## Install

Runtime support: Bun 1+.

```sh
bun i
```

## Quick Start

```sh
bun run dev
```

The dev server runs behind the Code Discipline gate and serves on port 3000. `bun run build` writes the client and one prerendered document per locale into `dist`, the directory Netlify publishes. `bun run verify` runs the discipline check, the typecheck and the build.

## Screens

Czech at `/` and English at `/en`, each served as its own prerendered document:

| | |
| --- | --- |
| ![Home](docs/screens/home.png) | ![Home in English](docs/screens/home-en.png) |

<div align="center">

<img src="docs/screens/mobile.png" alt="Restaurace Střílky on a phone" width="300">

</div>

## Concepts

### One page per locale, prerendered, then hydrated

`src/frontend/pages/home.tsx` composes four sections: the hero, the two venues, the lunch menu and contact. At build time `src/frontend/ssr/entry.tsx` renders them once per locale inside `LocaleProvider`, and `@trebired/bundler` writes each into its own document with its own head tags. In the browser the header and footer hydrate as their own roots and the page body hydrates as a live island.

### Locale-prefixed routing

Czech is served at `/` and English at `/en`, each a separate prerendered document with its own `<html lang>`, title, description, canonical URL and `hreflang` set. `@trebired/frontend` owns the mechanism: a boot script in the head resolves the visitor's locale from storage or the browser and redirects before first paint, so the language is never corrected after the page is visible.

### Third-party embeds

The lunch menu is an iframe from menicka.cz and the map is a Google Maps embed. Both are cross-origin, so the page cannot measure the menu: its frame keeps a fixed minimum height of 1600 px. Both load lazily, when they scroll near the viewport.

### Business data

The venue addresses, the phone number and external links live once in `src/frontend/shared/content.ts` and `src/frontend/shared/identity.ts`, instead of being repeated in every section that shows them. The e-mail address is derived from the product domain.

## Configuration

Package behaviour is configured under `.trebired/`:

| File | Owns |
| --- | --- |
| `.trebired/frontend/config.ts` | Palette, fonts, favicon source, static icon specs, enabled systems |
| `.trebired/bundler/config.ts` | Frontend directory, build output directory, public path |
| `.trebired/seo/config.ts` | Site URL, locales, locale strategy, robots policy, sitemap defaults |
| `.trebired/i18n/config.ts` | Supported languages, fallback language, checker root |
| `.trebired/startup/config.ts` | Dev server port requirement and shutdown timeout |
| `.trebired/code-discipline/config.ts` | Preset and banned patterns |

The site is light only. Product and organization identity live in `package.json#config` and are injected as build-time defines.

## Runtime

The build emits an ES module client bundle, two stylesheets, the self hosted Inter and Playfair Display files, the rasterized favicon set, `robots.txt`, `sitemap.xml` and one prerendered HTML document per locale. Icons resolve from a build-generated static cache, so the page makes no icon requests. Netlify builds the site with the command and publish directory declared in `netlify.toml`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## What It Does Not Do

This application does not:

- Take table or room bookings. Visitors call or e-mail.
- Store or edit the lunch menu. menicka.cz publishes it and the page embeds it.
- Run a server, a database or any scheduled work. Every document is prerendered at build time.
- Collect anything. There is no contact form.
- Set analytics, advertising or tracking cookies.
- Ship a test suite. Verification is `bun run verify`.
