import { hasOwn } from "@trebired/utils";

import { DEFAULT_LANGUAGE } from "./language/policy";
import type { SiteLanguage } from "./language/policy";

type RouteMeta = {
  description: string;
  title: string;
};

const ROUTES: Record<string, Record<SiteLanguage, RouteMeta>> = {
  "/": {
    cs: {
      title: "Restaurace Střílky, hospoda a ubytování",
      description:
      "Restaurace Kulturní dům a hospoda Gól ve Střílkách nabízí českou kuchyni, " +
        "čepované pivo, zázemí pro oslavy i ubytování.",
    },
    en: {
      title: "Restaurace Střílky, pub and accommodation",
      description:
      "Restaurace Kulturní dům and Hospoda Gól in Střílky serve Czech cooking and " +
        "draught beer, with space for celebrations and rooms to stay in.",
    },
  },
};

function canonicalPath(path: string): string {
  const normalized = String(path || "/");
  const trimmed = normalized.length > 1 ? normalized.replace(/\/+$/u, "") : normalized;
  return trimmed || "/";
}

function matchLanguage(input: unknown): SiteLanguage {
  return input === "en" || input === "cs" ? input : DEFAULT_LANGUAGE;
}

function routeExists(path: string): boolean {
  return hasOwn(ROUTES, canonicalPath(path));
}

function allRoutePaths(): string[] {
  return Object.keys(ROUTES);
}

function metaFor(path: string, language: unknown = DEFAULT_LANGUAGE): RouteMeta {
  const lang = matchLanguage(language);
  return ROUTES[canonicalPath(path)]?.[lang] ?? ROUTES["/"][lang];
}

export { allRoutePaths, canonicalPath, matchLanguage, metaFor, routeExists };
export type { RouteMeta };
