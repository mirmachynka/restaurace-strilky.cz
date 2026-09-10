import { Icon, MapEmbed, TextLink } from "@trebired/frontend/react";
import { createLocalTranslator } from "@trebired/i18n";
import type { I18nTranslator } from "@trebired/i18n";

import { Button } from "#888a228i8srs";
import { ICON_MAIL, ICON_MAP_PIN, ICON_PHONE } from "#0j5v09p24ykm";
import { VENUES, mapsHref } from "#gite3w3i4071";
import { contactEmail, contactHref, contactPhone, contactPhoneHref } from "#2a97kzldgel2";
import { useLanguage } from "#awbrz278qu5h";

const MAP_EMBED_URL =
"https://www.google.com/maps?q=Hlavn%C3%AD%2075%2C%20768%2004%20St%C5%99%C3%ADlky&output=embed";

function ContactAddresses({ translate }: { translate: I18nTranslator }) {
  return (
    <div className="contact__addresses">
    <h3 className="contact__addresses-title">{translate("addresses")}</h3>
    {VENUES.map((venue) => (
          <div className="contact__address" key={venue.id}>
          <span className="contact__address-icon"><Icon aria-hidden="true" spec={ICON_MAP_PIN} /></span>
          <span className="contact__address-body">
          <span className="contact__address-name">{translate(`venues.${venue.id}`)}</span>
          <span className="contact__address-line">{venue.addressLine}, {venue.city}</span>
          </span>
          <Button
          className="contact__address-action"
          href={mapsHref(venue.mapsQuery)}
          rel="noopener noreferrer"
          size="sm"
          target="_blank"
          variant="ghost"
          >
          {translate("mapAction")}
          </Button>
          </div>
    ))}
    </div>
  );
}

function Contact() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);

  return (
    <section className="section section--contact" id="kontakt">
    <div className="section__inner contact">
    <div className="contact__head">
    <h2 className="section__title">{translate("title")}</h2>
    <p className="section__lead">{translate("lead")}</p>
    </div>

    <div className="contact__tiles">
    <TextLink className="contact__tile" href={contactPhoneHref}>
    <span className="contact__tile-icon"><Icon aria-hidden="true" spec={ICON_PHONE} /></span>
    <span className="contact__tile-label">{translate("phone")}</span>
    <span className="contact__tile-value">{contactPhone}</span>
    </TextLink>
    <TextLink className="contact__tile" href={contactHref}>
    <span className="contact__tile-icon"><Icon aria-hidden="true" spec={ICON_MAIL} /></span>
    <span className="contact__tile-label">{translate("email")}</span>
    <span className="contact__tile-value">{contactEmail}</span>
    </TextLink>
    </div>

    <ContactAddresses translate={translate} />

    <div className="contact__map">
    <MapEmbed className="contact__map-frame" src={MAP_EMBED_URL} title={translate("mapTitle")} />
    </div>
    </div>
    </section>
  );
}

export { Contact };
