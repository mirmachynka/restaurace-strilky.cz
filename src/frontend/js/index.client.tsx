import {
  bindFrontendRuntime,
  bootPageLoadProgress,
  configureLocaleRouting,
  configureSpa,
  currentLocale,
  parseLocalePathname,
} from "@trebired/frontend";
import "@trebired/frontend/static-icons";
import { LocaleProvider } from "@trebired/frontend/react";
import { createBrowserLog } from "@trebired/logger/browser";
import { LogErrorBoundary, LogProvider } from "@trebired/logger/browser/react";
import type { ReactElement } from "react";

import { FooterContent } from "#2ohv8csm9b87";
import { HeaderContent } from "#xm6kq3aohw8n";
import { LANGUAGE_ROUTING } from "#v7sa4g4qkjw7";
import { hydrateChromeRoots } from "#gfb4hgb24tch";
import { metaFor } from "#11t2u7sblpl8";
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
    <LocaleProvider locale={currentLocale()}>
    <LogErrorBoundary group="frontend.chrome">{node}</LogErrorBoundary>
    </LocaleProvider>
    </LogProvider>
  );
}

function applyDocumentTitle() {
  const { locale, pathname } = parseLocalePathname(window.location.pathname, LANGUAGE_ROUTING);
  document.title = metaFor(pathname, locale).title;
}

bootPageLoadProgress({ minVisibleMs: 320 });
configureSpa({});
applyDocumentTitle();

void hydrateChromeRoots([
    [document.querySelector("header"), observed(<HeaderContent />)],
    [document.querySelector("footer"), observed(<FooterContent />)],
]).then(() => {
    bindFrontendRuntime(document, { icons: { mode: "static" } });
    mountContentIsland("live_content");
});
