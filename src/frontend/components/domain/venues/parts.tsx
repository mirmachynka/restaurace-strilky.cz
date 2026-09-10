import { ExpandableImage, Icon } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import { GALLERY_SOURCES, RESTAURANT_IMAGES } from "#c0bfft3knn5u";

type FeatureItem = {
  icon: string;
  key: string;
};

function PhotoPlaceholder({ label, translate }: { label: string; translate: I18nTranslator }) {
  return (
    <div className="venue__placeholder">
    <span className="venue__placeholder-label">{label}</span>
    <span className="venue__placeholder-note">{translate("photoSoon")}</span>
    </div>
  );
}

function FeatureGrid({ items, path, translate }: {
    items: FeatureItem[];
    path: string;
    translate: I18nTranslator;
}) {
  return (
    <div className="venue__features">
    {items.map((feature) => (
          <div className="venue__feature" key={feature.key}>
          <span className="venue__feature-icon">
          <Icon aria-hidden="true" spec={feature.icon} />
          </span>
          <p className="venue__feature-label">{translate(`${path}.features.${feature.key}`)}</p>
          </div>
    ))}
    </div>
  );
}

function VenueGallery({ translate }: { translate: I18nTranslator }) {
  return (
    <div className="venue__gallery">
    {RESTAURANT_IMAGES.map((image, index) => (
          <ExpandableImage
          alt={translate(`gallery.${image.id}`)}
          className={`venue__gallery-item${image.wide ? " venue__gallery-item--wide" : ""}`}
          images={GALLERY_SOURCES}
          index={index}
          key={image.id}
          src={image.src}
          />
    ))}
    </div>
  );
}

export { FeatureGrid, PhotoPlaceholder, VenueGallery };
export type { FeatureItem };
