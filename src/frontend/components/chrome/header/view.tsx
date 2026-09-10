import { Icon } from "@trebired/frontend/react";
import { createLocalTranslator } from "@trebired/i18n";
import { useState } from "react";

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

function HeaderContent() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);
  const [open, setOpen] = useState(false);

  return (
    <div className="site-bar">
    <div className="site-bar__row">
    <a className="site-bar__brand" href="#top">{translate("brand")}</a>

    <nav aria-label={translate("nav.venues")} className="site-bar__nav">
    {NAV_SECTIONS.map((section) => (
          <a className="site-bar__link" href={NAV_HREFS[section]} key={section}>
          {translate(`nav.${section}`)}
          </a>
    ))}
    </nav>

    <div className="site-bar__actions">
    <LanguageMenu />
    <Button className="site-bar__cta" href="#kontakt">{translate("cta")}</Button>
    </div>

    <button
    aria-expanded={open}
    aria-label={open ? translate("menuClose") : translate("menuOpen")}
    className="site-bar__toggle"
    onClick={() => setOpen((value) => !value)}
    type="button"
    >
    <Icon aria-hidden="true" spec={open ? ICON_CLOSE : ICON_MENU} />
    </button>
    </div>

    <div className={`site-bar__drawer${open ? " is-open" : ""}`}>
    <nav aria-hidden={!open} className="site-bar__drawer-inner">
    {NAV_SECTIONS.map((section) => (
          <a
          className="site-bar__drawer-link"
          href={NAV_HREFS[section]}
          key={section}
          onClick={() => setOpen(false)}
          >
          {translate(`nav.${section}`)}
          </a>
    ))}
    <Button className="site-bar__drawer-cta" href="#kontakt" onClick={() => setOpen(false)}>
    {translate("cta")}
    </Button>
    </nav>
    </div>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
    <HeaderContent />
    </header>
  );
}

export { Header, HeaderContent };
