import type { FrontendComponentsConfig } from "@trebired/frontend/config";

import { button } from "./button";
import { media } from "./media";
import { overlays } from "./overlays";
import { shell } from "./shell";

export const components = {
  media,
  overlays,
  shell,
  surfaces: {
    button,
  },
} satisfies FrontendComponentsConfig;
