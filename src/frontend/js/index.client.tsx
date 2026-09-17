import {
  bindFrontendRuntime,
  bootPageLoadProgress,
  configureLocaleRouting,
  configureSpa,
  SITE_HEADER_ROOT_SELECTOR,
} from "@trebired/frontend";
import "@trebired/frontend/static-icons";
import { LocaleProvider } from "@trebired/frontend/react";
import { createBrowserLog } from "@trebired/logger/browser";
import { LogErrorBoundary, LogProvider } from "@trebired/logger/browser/react";
import type { ReactElement } from "react";

import { FooterContent } from "#2ohv8csm9b87";
import { Header } from "#xm6kq3aohw8n";
import { LANGUAGE_ROUTING } from "#v7sa4g4qkjw7";
import { hydrateChromeRoots } from "#gfb4hgb24tch";
import { mountContentIsland } from "#72opuou5b6ws";
import { productDomain } from "#2a97kzldgel2";

const log = createBrowserLog({
    group: "frontend.app",
    source: productDomain,
});

configureLocaleRouting(LANGUAGE_ROUTING);

function observed(node: ReactElement) {
  return (
    <LogProvider log={log}>
    <LocaleProvider>
    <LogErrorBoundary group="frontend.chrome">{node}</LogErrorBoundary>
    </LocaleProvider>
    </LogProvider>
  );
}

bootPageLoadProgress({ minVisibleMs: 320 });
configureSpa({});

void hydrateChromeRoots([
    [document.querySelector(SITE_HEADER_ROOT_SELECTOR), observed(<Header />)],
    [document.querySelector("footer"), observed(<FooterContent />)],
]).then(() => {
    bindFrontendRuntime(document, { icons: { mode: "static" } });
    mountContentIsland("live_content");
});
