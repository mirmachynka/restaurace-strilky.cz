import { Icon, SiteHeader } from "@trebired/frontend/react";
import { createLocalTranslator } from "@trebired/i18n";

import { Button } from "#888a228i8srs";
import { ICON_CLOSE, ICON_MENU } from "#0j5v09p24ykm";
import { LanguageMenu } from "#2ig7rnexheln";
import { useLanguage } from "#awbrz278qu5h";

const NAV_SECTIONS = ["venues", "lunch", "contact"] as const;

const NAV_HREFS: Record<(typeof NAV_SECTIONS)[number], string> = {
  contact: "#kontakt",
  lunch: "#poledni-menu",
  venues: "#restaurace",
};

function Header() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);

  return (
    <SiteHeader
    actions={(
        <>
        <LanguageMenu />
        <Button href="#kontakt">{translate("cta")}</Button>
        </>
    )}
    brand={translate("brand")}
    brandHref="#top"
    closeIcon={<Icon aria-hidden="true" spec={ICON_CLOSE} />}
    labels={{ closeMenu: translate("menuClose"), navigation: translate("navLabel"), openMenu: translate("menuOpen") }}
    links={NAV_SECTIONS.map((section) => ({ href: NAV_HREFS[section], key: section, label: translate(`nav.${section}`) }))}
    menuIcon={<Icon aria-hidden="true" spec={ICON_MENU} />}
    />
  );
}

export { Header };
