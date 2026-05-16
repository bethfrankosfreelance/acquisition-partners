export type ShopItem = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  url: string;
};

export const shopItems: ShopItem[] = [
  {
    id: "pixel-9a-peony",
    title: "Google Pixel 9a with Gemini",
    description:
      "Unlocked Android smartphone with incredible camera, AI photo editing, all-day battery, and powerful security — Peony, 128 GB.",
    price: "$399.00",
    image: "https://m.media-amazon.com/images/I/61IgWXs5BRL._AC_SX466_.jpg",
    url: "https://amzn.to/4dtjrvV",
  },
];
