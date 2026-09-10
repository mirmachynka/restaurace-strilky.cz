import { Icon } from "@trebired/frontend/react";
import { createLocalTranslator } from "@trebired/i18n";
import type { I18nTranslator } from "@trebired/i18n";

import { FeatureGrid, PhotoPlaceholder, VenueGallery } from "./parts";
import type { FeatureItem } from "./parts";
import { ICON_BED, ICON_BEER, ICON_MAP_PIN, ICON_RESTAURANT, ICON_TROPHY, ICON_USERS } from "#0j5v09p24ykm";
import { VENUES } from "#gite3w3i4071";
import { useLanguage } from "#awbrz278qu5h";

const KULTURNI_DUM_FEATURES: FeatureItem[] = [
  { icon: ICON_USERS, key: "hall" },
  { icon: ICON_MAP_PIN, key: "place" },
  { icon: ICON_RESTAURANT, key: "kitchen" },
];

const GOL_FEATURES: FeatureItem[] = [
  { icon: ICON_TROPHY, key: "pitch" },
  { icon: ICON_BEER, key: "beer" },
  { icon: ICON_BED, key: "stay" },
];

const ROOM_PLACEHOLDERS = ["room1", "room2", "shared"];

function VenueAddress({ venueId }: { venueId: string }) {
  const venue = VENUES.find((entry) => entry.id === venueId);
  if (!venue) return null;

  return (
    <span className="venue__address">
    <Icon aria-hidden="true" spec={ICON_MAP_PIN} />
    {venue.addressLine}, {venue.city}
    </span>
  );
}

function VenueIntro({ path, translate }: { path: string; translate: I18nTranslator }) {
  return (
    <>
    <VenueAddress venueId={path} />
    <h3 className="venue__title">{translate(`${path}.title`)}</h3>
    <p className="venue__lead">{translate(`${path}.lead`)}</p>
    </>
  );
}

function Venues() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);

  return (
    <section className="section section--venues" id="restaurace">
    <div className="section__inner venues">
    <div className="venues__head">
    <span className="section__eyebrow">{translate("eyebrow")}</span>
    <h2 className="section__title">{translate("title")}</h2>
    <p className="section__lead">{translate("lead")}</p>
    </div>

    <div className="venues__block">
    <div className="venue__body">
    <VenueIntro path="kulturni_dum" translate={translate} />
    <FeatureGrid items={KULTURNI_DUM_FEATURES} path="kulturni_dum" translate={translate} />
    </div>
    <VenueGallery translate={translate} />
    </div>

    <div className="venues__block venues__block--reverse">
    <PhotoPlaceholder label={translate("placeholders.gol")} translate={translate} />
    <div className="venue__body">
    <VenueIntro path="gol" translate={translate} />
    <FeatureGrid items={GOL_FEATURES} path="gol" translate={translate} />
    <div className="venue__rooms">
    <p className="venue__rooms-title">{translate("accommodation")}</p>
    <div className="venue__rooms-grid">
    {ROOM_PLACEHOLDERS.map((key) => (
          <PhotoPlaceholder key={key} label={translate(`placeholders.${key}`)} translate={translate} />
    ))}
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}

export { Venues };
