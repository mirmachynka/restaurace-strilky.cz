# Contributing

Expected runtime: Bun. Never use npm, and never commit a `package-lock.json`.

## Commands

```sh
bun i
bunx code-discipline fix imports
bun run discipline:check
bun run typecheck
bun run build
bun run verify
```

`bun run dev` runs the dev server behind the Code Discipline gate. The port comes from `.trebired/startup/config.ts` and honours `PORT`.

## Rules

- Code Discipline owns formatting, file and function size limits, comment removal, structural blank lines, empty folder removal and alias-managed imports. Run one rule at a time, such as `bunx code-discipline fix imports`, and typecheck after each. Never run a bare `bunx code-discipline fix`: it applies every rule at once, including ones that rewrite and move files.
- Alias names in `.trebired/code-discipline/imports/*.json` are generated. Never hand-edit them. Write a relative import and let `fix imports` alias it.
- Generated output stays out of Git: `dist/`, `.ssr/` and `.trebired/code-discipline/generated/reports/`.
- Translated text lives in `i18n/cs.ts` and `i18n/en.ts` beside the component that owns it. Both languages must expose the same keys, and the build fails when they do not.
- Business data that appears in more than one place (addresses, phone number, external links) lives once in `src/frontend/shared/content.ts` and `src/frontend/shared/identity.ts`.
- Every icon the page renders must be listed in `src/frontend/icon_specs.ts`, including `MEDIA_ICON_SPECS` for the gallery. An icon missing from that list renders on the server but not in the browser, and the page fails hydration.
- Generic frontend, bundling, locale, SEO and translation behaviour belongs in the `@trebired/*` packages. Add a package option instead of restyling package output from application CSS.
- After editing a file that `.trebired/frontend/config.ts` imports, clear `node_modules/.cache/frontend`.

There are no test suites. Verification is `bun run verify`, which runs the discipline check, the typecheck and a real build.
