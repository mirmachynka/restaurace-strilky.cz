import { createLocalTranslator } from "@trebired/i18n";

import { MENU_IFRAME_URL } from "#gite3w3i4071";
import { useLanguage } from "#awbrz278qu5h";

const FRAME_MIN_HEIGHT = 1600;

function LunchMenu() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);

  return (
    <section className="section section--menu" id="poledni-menu">
    <div className="section__inner menu">
    <span className="section__eyebrow">{translate("eyebrow")}</span>
    <h2 className="section__title">{translate("title")}</h2>
    <p className="section__lead">{translate("lead")}</p>

    <div className="menu__frame">
    <iframe
    className="menu__iframe"
    loading="lazy"
    src={MENU_IFRAME_URL}
    style={{ border: 0, minHeight: `${FRAME_MIN_HEIGHT}px` }}
    title={translate("frameTitle")}
    />
    </div>
    </div>
    </section>
  );
}

export { LunchMenu };
