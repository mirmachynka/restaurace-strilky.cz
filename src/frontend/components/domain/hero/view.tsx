import { ExpandableImage, Icon } from "@trebired/frontend/react";
import { createLocalTranslator } from "@trebired/i18n";

import { Button } from "#888a228i8srs";
import { ICON_CALENDAR, ICON_MAP_PIN, ICON_RESTAURANT } from "#0j5v09p24ykm";
import { RESTAURANT_IMAGES } from "#c0bfft3knn5u";
import { useLanguage } from "#awbrz278qu5h";

const HIGHLIGHTS = ["kitchen", "stay", "events"] as const;

const HERO_IMAGES = [
  { id: "bar", modifier: "wide" },
  { id: "hall", modifier: "square" },
  { id: "interior", modifier: "square" },
];

const SOURCE_BY_ID: Record<string, string> = {
  bar: RESTAURANT_IMAGES[0].src,
  hall: RESTAURANT_IMAGES[1].src,
  interior: RESTAURANT_IMAGES[3].src,
};

function Hero() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);

  return (
    <section className="section section--hero" id="top">
    <div className="section__inner hero">
    <div className="hero__panel">
    <h1 className="hero__title">{translate("title")}</h1>
    <p className="hero__lead">{translate("lead")}</p>

    <div className="hero__actions">
    <Button href="#restaurace" size="lg" variant="accent">
    <Icon aria-hidden="true" spec={ICON_RESTAURANT} />
    {translate("cta.venues")}
    </Button>
    <Button href="#poledni-menu" size="lg" variant="white">
    <Icon aria-hidden="true" spec={ICON_CALENDAR} />
    {translate("cta.lunch")}
    </Button>
    <Button href="#kontakt" size="lg" variant="outline">
    <Icon aria-hidden="true" spec={ICON_MAP_PIN} />
    {translate("cta.where")}
    </Button>
    </div>

    <div className="hero__highlights">
    {HIGHLIGHTS.map((item) => (
          <div className="hero__highlight" key={item}>
          <h2 className="hero__highlight-title">{translate(`highlights.${item}.title`)}</h2>
          <p className="hero__highlight-desc">{translate(`highlights.${item}.desc`)}</p>
          </div>
    ))}
    </div>
    </div>

    <div className="hero__gallery">
    {HERO_IMAGES.map((image) => (
          <ExpandableImage
          alt={translate(`images.${image.id}`)}
          className={`hero__image hero__image--${image.modifier}`}
          key={image.id}
          src={SOURCE_BY_ID[image.id]}
          />
    ))}
    </div>
    </div>
    </section>
  );
}

export { Hero };
