import { defineConfig } from "@trebired/frontend/config";

import { ALL_ICON_SPECS } from "#0j5v09p24ykm";

import { components } from "./components";
import { palette } from "./palette";
import { systems } from "./systems";
import { interactions, runtime, semantics } from "./theme";
import { breakpoints, typography } from "./typography";

export default defineConfig({
    forVersion: "13.1.2",
    assets: {
      favicon: {
        default: "src/brand/favicon.svg",
      },
      fonts: {
        families: {
          display: {
            package: "playfair-display",
            family: "Playfair Display",
            subsets: ["latin", "latin-ext"],
            weights: [600, 700],
          },
          sans: {
            package: "inter",
            family: "Inter",
            subsets: ["latin", "latin-ext"],
            weights: [400, 500, 600, 700, 800],
          },
        },
        sans: '"Inter", sans-serif',
      },
      icons: {
        endpoint: false,
        mode: "static",
        packs: ["remixicon"],
        specs: ALL_ICON_SPECS,
      },
    },
    components: { ...components, typography },
    design: {
      breakpoints,
      interactions,
      palette,
      scrollBehavior: "smooth",
      semantics,
    },
    runtime,
    systems,
});
