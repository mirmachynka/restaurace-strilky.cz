import { frontendDataAttr, frontendModifierClass } from "@trebired/frontend";
import { Icon, PopoverOpenButton, PopoverPanel, flag } from "@trebired/frontend/react";
import { createLocalTranslator } from "@trebired/i18n";
import { useId } from "react";

import { ICON_ARROW_DOWN } from "#0j5v09p24ykm";
import { LANGUAGE_COUNTRIES, LANGUAGE_LABELS, SUPPORTED_LANGUAGES } from "#v7sa4g4qkjw7";
import type { SiteLanguage } from "#v7sa4g4qkjw7";
import { useLanguage } from "#awbrz278qu5h";

const TRIGGER_CLASS = [
  "site-language__trigger",
  frontendModifierClass("button", "sm"),
  frontendModifierClass("button", "chip"),
].join(" ");

function languageFlag(value: SiteLanguage) {
  return flag({ country: LANGUAGE_COUNTRIES[value], label: LANGUAGE_LABELS[value] });
}

function LanguageMenu() {
  const { language, setLanguage } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);
  const menuId = useId();

  return (
    <div className="site-language">
    <PopoverOpenButton aria-label={translate("label")} className={TRIGGER_CLASS} controls={menuId}>
    {languageFlag(language)}
    <span>{language.toUpperCase()}</span>
    <Icon aria-hidden="true" spec={ICON_ARROW_DOWN} />
    </PopoverOpenButton>

    <PopoverPanel className="site-language__menu" id={menuId} role="listbox">
    {SUPPORTED_LANGUAGES.map((value) => (
          <button
          aria-selected={value === language}
          className={value === language ? "active" : undefined}
          key={value}
          onClick={() => setLanguage(value)}
          role="option"
          type="button"
          {...{ [frontendDataAttr("popover-close")]: "" }}
          >
          {languageFlag(value)}
          <span>{LANGUAGE_LABELS[value]}</span>
          </button>
    ))}
    </PopoverPanel>
    </div>
  );
}

export { LanguageMenu };
