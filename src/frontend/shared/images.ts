type SiteImage = {
  id: string;
  src: string;
  wide: boolean;
};

const RESTAURANT_IMAGES: SiteImage[] = [
  { id: "bar", src: "/image1.jpg", wide: true },
  { id: "hall", src: "/image2.jpg", wide: false },
  { id: "table", src: "/image3.jpeg", wide: false },
  { id: "interior", src: "/image4.jpeg", wide: false },
  { id: "events", src: "/image5.jpeg", wide: true },
];

const GALLERY_SOURCES = RESTAURANT_IMAGES.map((image) => image.src);

export { GALLERY_SOURCES, RESTAURANT_IMAGES };
export type { SiteImage };
