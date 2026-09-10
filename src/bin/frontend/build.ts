import {
  applyProjectConfigsToFrontendBundlerOptions,
  buildFrontendApp,
  buildStaticShell,
  createFrontendAppBundlerOptions,
  resolveConfiguredFrontendGlobalClientEntries,
} from "@trebired/bundler/frontend-app";
import type {
  BundlerBuildResult,
  BundlerFrontendAppBundlerConfigOptions,
  BundlerFrontendBuildResult,
} from "@trebired/bundler";
import path from "node:path";

import { createLocaleBootScript } from "@trebired/frontend";

import { logger } from "#fj03d91mfw5h";
import { LANGUAGE_ROUTING } from "#v7sa4g4qkjw7";
import { allRoutePaths } from "#11t2u7sblpl8";
import { renderRouteBodies } from "./ssr";
import { siteDefines } from "./options";
import { siteRobotsTxt, siteShellMeta, siteSitemap, siteStructuredData } from "./seo";

type SiteBuildMode = "development" | "production";

const SHELL_LANG = LANGUAGE_ROUTING.defaultLocale;

async function resolveSiteBundlerOptions(
  mode: SiteBuildMode,
  rootDir: string,
): Promise<BundlerFrontendAppBundlerConfigOptions> {
  return applyProjectConfigsToFrontendBundlerOptions({
      define: siteDefines,
      logger,
      mode,
      rootDir,
      ssr: false,
  });
}

async function writeSiteShell(
  options: BundlerFrontendAppBundlerConfigOptions,
  build: BundlerFrontendBuildResult,
  rootDir: string,
): Promise<void> {
  const bodies = await renderRouteBodies(options.supportedI18nLanguages || [], rootDir);
  const routes = allRoutePaths().map((routePath) => ({
        body: `${bodies[routePath] || ""}${siteStructuredData(routePath, rootDir)}`,
        meta: { ...siteShellMeta(routePath, SHELL_LANG), lang: SHELL_LANG },
        path: routePath,
  }));
  await buildStaticShell({
      build,
      config: options,
      meta: { bootScripts: [createLocaleBootScript(LANGUAGE_ROUTING)], lang: SHELL_LANG },
      routes,
  });
}

async function writeSeoArtifacts(
  options: BundlerFrontendAppBundlerConfigOptions,
  rootDir: string,
): Promise<void> {
  const outDir = path.join(rootDir, String(options.clientOutDir || "dist"));
  await Bun.write(path.join(outDir, "robots.txt"), siteRobotsTxt());
  await Bun.write(path.join(outDir, "sitemap.xml"), siteSitemap());
}

function shellBuildFromClient(
  options: BundlerFrontendAppBundlerConfigOptions,
  client: BundlerBuildResult,
): BundlerFrontendBuildResult {
  const { config } = createFrontendAppBundlerOptions(options);
  return {
    client,
    globalClientEntries: resolveConfiguredFrontendGlobalClientEntries(config, client.assetManifest),
    publicDirCopied: true,
    relatedClientEntryMap: {},
    stats: {},
  };
}

async function buildSite(mode: SiteBuildMode, rootDir: string): Promise<BundlerFrontendBuildResult> {
  const options = await resolveSiteBundlerOptions(mode, rootDir);
  const build = await buildFrontendApp({ ...options, target: "client" });
  await writeSiteShell(options, build, rootDir);
  await writeSeoArtifacts(options, rootDir);
  return build;
}

async function runBuildCommand(argv: string[]): Promise<void> {
  const target = String(argv[2] || "client");
  if (target !== "client") throw new Error(`unsupported build target: ${target}`);
  const build = await buildSite("production", process.cwd());
  logger.success("build", `client complete :: outputs=${build.client?.outputs.length ?? 0}`);
}

if (import.meta.main) await runBuildCommand(process.argv);

export {
  buildSite,
  resolveSiteBundlerOptions,
  shellBuildFromClient,
  writeSeoArtifacts,
  writeSiteShell,
};
export type { SiteBuildMode };
