import { Icon, TextLink } from "@trebired/frontend/react";
import { createLocalTranslator } from "@trebired/i18n";

import { FACEBOOK_URL, VENUES } from "#gite3w3i4071";
import { ICON_FACEBOOK, ICON_MAIL, ICON_MAP_PIN, ICON_PHONE } from "#0j5v09p24ykm";
import { contactEmail, contactHref, contactPhone, contactPhoneHref, productDisplayName } from "#2a97kzldgel2";
import { useLanguage } from "#awbrz278qu5h";

const FOUNDED_YEAR = 2025;

function FooterContent() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);

  return (
    <div className="site-foot">
    <div className="site-foot__top">
    <div className="site-foot__brand">
    <span className="site-foot__name">{productDisplayName}</span>
    <p className="site-foot__blurb">{translate("blurb")}</p>
    </div>

    {VENUES.map((venue) => (
          <div className="site-foot__venue" key={venue.id}>
          <span className="site-foot__heading">{translate(`venues.${venue.id}`)}</span>
          <span className="site-foot__address">
          <Icon aria-hidden="true" spec={ICON_MAP_PIN} />
          {venue.addressLine}, {venue.city}
          </span>
          </div>
    ))}
    </div>

    <div className="site-foot__base">
    <div className="site-foot__contacts">
    <TextLink className="site-foot__link" href={contactPhoneHref}>
    <Icon aria-hidden="true" spec={ICON_PHONE} />
    {contactPhone}
    </TextLink>
    <TextLink className="site-foot__link" href={contactHref}>
    <Icon aria-hidden="true" spec={ICON_MAIL} />
    {contactEmail}
    </TextLink>
    <TextLink aria-label={translate("facebook")} className="site-foot__link" external href={FACEBOOK_URL}>
    <Icon aria-hidden="true" spec={ICON_FACEBOOK} />
    {translate("facebook")}
    </TextLink>
    </div>
    <span className="site-foot__meta">
    &copy; {FOUNDED_YEAR} {productDisplayName}
    </span>
    </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
    <FooterContent />
    </footer>
  );
}

export { Footer, FooterContent };
