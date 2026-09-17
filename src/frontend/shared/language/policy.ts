import { languageName, normalizeLocaleRouting } from "@trebired/frontend";

const SUPPORTED_LANGUAGES = ["cs", "en"] as const;

type SiteLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const DEFAULT_LANGUAGE: SiteLanguage = "cs";

const LANGUAGE_COUNTRIES: Record<SiteLanguage, string> = {
  cs: "CZ",
  en: "GB",
};

const LANGUAGE_LABELS: Record<SiteLanguage, string> = {
  cs: languageName("cs"),
  en: languageName("en"),
};

const LANGUAGE_ROUTING = normalizeLocaleRouting({
    defaultLocale: DEFAULT_LANGUAGE,
    locales: [...SUPPORTED_LANGUAGES],
    storageKey: "strilky-language",
});

export {
  DEFAULT_LANGUAGE,
  LANGUAGE_COUNTRIES,
  LANGUAGE_LABELS,
  LANGUAGE_ROUTING,
  SUPPORTED_LANGUAGES,
};
export type { SiteLanguage };
