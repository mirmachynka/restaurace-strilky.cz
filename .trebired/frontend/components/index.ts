import type { FrontendComponentsConfig } from "@trebired/frontend/config";

import { button } from "./button";
import { media } from "./media";
import { overlays } from "./overlays";

export const components = {
  media,
  overlays,
  surfaces: {
    button,
  },
} satisfies FrontendComponentsConfig;
