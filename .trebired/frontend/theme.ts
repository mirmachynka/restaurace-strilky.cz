import type { FrontendDesignConfig, FrontendDesignInteractionsConfig, FrontendRuntimeConfig, FrontendThemeConfig } from "@trebired/frontend/config";

export const theme = {
  dark: "light",
  defaultMode: "light",
  light: "light",
  modes: {
    light: { scheme: "light" },
  },
} satisfies FrontendThemeConfig;

export const interactions = {
  activePress: {
    enabled: false,
  },
} satisfies FrontendDesignInteractionsConfig;

export const semantics = {
  anchorOffset: "5rem",
  heading: {
    fontWeight: "700",
  },
  selection: {
    bg: "#f3eee7",
    text: "#241f1b",
  },
  transitionFast: "120ms",
} satisfies NonNullable<FrontendDesignConfig["semantics"]>;

export const runtime = {
  theme,
} satisfies FrontendRuntimeConfig;
