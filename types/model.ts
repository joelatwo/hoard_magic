export type CardType = {
  id: string;
  name: string;
  image_uris: scryfall_images;
  rulings_uri?: string;
  gatherer: string;
  rarity: "common" | "uncommon" | "rare";
  key: number;
};

export type scryfall_images = {
  small: string;
  normal: string;
  large: string;
  png: string;
  art_crop: string;
  border_crop: string;
};
