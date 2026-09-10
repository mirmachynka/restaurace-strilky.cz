import { createSeoBuilder, organizationSchema } from "@trebired/seo";
import { readProductIdentity } from "@trebired/utils";

import seoConfig from "#dsn2xo5sa3qv";
import { allRoutePaths, metaFor } from "#11t2u7sblpl8";

const THEME_COLOR = "#4a3324";

const seo = createSeoBuilder(seoConfig, {
    chrome: {
      metas: [{ content: THEME_COLOR, name: "theme-color" }],
    },
    configPath: ".trebired/seo/config.ts",
});

function siteShellMeta(path: string, language: string) {
  const copy = metaFor(path, language);
  return seo.shellMeta({
      description: copy.description,
      locale: language,
      path,
      title: copy.title,
  });
}

function siteStructuredData(path: string, rootDir: string): string {
  if (path !== "/") return "";
  const product = readProductIdentity({ startDir: rootDir });
  return seo.structuredData([
      organizationSchema({ name: product.displayName, url: product.website }),
  ]);
}

function siteRobotsTxt(): string {
  return seo.robotsTxt();
}

function siteSitemap(): string {
  return seo.sitemap(allRoutePaths().map((path) => ({ path })));
}

export { siteRobotsTxt, siteShellMeta, siteSitemap, siteStructuredData };
