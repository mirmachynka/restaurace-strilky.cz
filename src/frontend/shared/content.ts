type Venue = {
  addressLine: string;
  city: string;
  id: "gol" | "kulturni_dum";
  mapsQuery: string;
};

const VENUES: Venue[] = [
  {
    addressLine: "Hlavní 75",
    city: "768 04 Střílky",
    id: "kulturni_dum",
    mapsQuery: "Hlavní 75, 768 04 Střílky",
  },
  {
    addressLine: "Zámecká 317",
    city: "768 04 Střílky",
    id: "gol",
    mapsQuery: "Zámecká 317, 768 04 Střílky",
  },
];

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61578657824365";
const MENU_IFRAME_URL = "https://www.menicka.cz/api/iframe/?id=9730";

function mapsHref(query: string): string {
  return `https://maps.google.com/?q=${encodeURIComponent(query)}`;
}

export { FACEBOOK_URL, MENU_IFRAME_URL, VENUES, mapsHref };
export type { Venue };
