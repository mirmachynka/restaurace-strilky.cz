import { LiveIslandMount, LocaleProvider } from "@trebired/frontend/react";
import { siteHeaderRootHtml } from "@trebired/frontend";
import { buildStaticIconCache, createServerIconRenderer, withIconServerRenderer } from "@trebired/frontend/server";
import { renderToString } from "react-dom/server";
import type { ReactElement } from "react";

import { ALL_ICON_SPECS } from "#0j5v09p24ykm";
import { Footer } from "#2ohv8csm9b87";
import { Header } from "#xm6kq3aohw8n";
import { PageContent } from "#372ddxeebklo";

const iconRenderer = createServerIconRenderer(buildStaticIconCache(ALL_ICON_SPECS));

function renderRouteBody(path: string, locale: string): string {
  const localized = (node: ReactElement) => renderToString(
    <LocaleProvider locale={locale}>{node}</LocaleProvider>,
  );
  return withIconServerRenderer(iconRenderer, () => {
      const header = localized(<Header />);
      const content = localized(
        <LiveIslandMount rootId="live_content" stateId="live_content_state">
        <PageContent path={path} />
        </LiveIslandMount>,
      );
      const footer = localized(<Footer />);
      return `${siteHeaderRootHtml(header)}${content}${footer}`;
  });
}

export { renderRouteBody };
