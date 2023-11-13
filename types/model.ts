import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type CardType = {
  id: string;
  name: string;
  image_uris?: scryfall_images;
  rulings_uri?: string;
  gatherer?: string;
  rarity?: "common" | "uncommon" | "rare" | "mythic";
  key: string;
  position?: Position;
  isTapped?: boolean;
  customHeader?: ReactNode;
  cmc?: number;
  scryfall_uri?: string;
  keywords?: string[];
} & (
  | CreatureCardType
  | SorceryCardType
  | InstantCardType
  | OtheCardType
  | PlaneswalkerCardType
  | EnchantmentCardType
  | ArtifactCardType
);

export type ScryfallCardType = {
  id: string;
  name: string;
  image_uris?: scryfall_images;
  rulings_uri?: string;
  gatherer?: string;
  rarity?: "common" | "uncommon" | "rare" | "mythic";
  key?: string;
  position?: Position;
  isTapped?: boolean;
  customHeader?: ReactNode;
  cmc?: number;
  scryfall_uri?: string;
  keywords?: string[];
} & (
  | CreatureCardType
  | SorceryCardType
  | InstantCardType
  | OtheCardType
  | PlaneswalkerCardType
  | EnchantmentCardType
  | ArtifactCardType
);
export type OtheCardType = { type: "Other" };

export type CreatureCardType = {
  type: "Creature";
  power: number;
  keywords?: string[];
  toughness: number;
  isTapped: boolean;
  hasSummoningSickness: boolean;
  onDeath?: VoidFunction;
  onEnter?: VoidFunction
};

export type EnchantmentCardType = {
  type: "Enchantment";
  onEnter?: VoidFunction;
  onDeath?: VoidFunction;
};

export type ArtifactCardType = {
  type: "Artifact";onDeath?: VoidFunction;
};

export type PlaneswalkerCardType = {
  type: "Planeswalker";
  onEnter?: VoidFunction;
  onDeath?: VoidFunction;
  loyalty?: number;
};

export type SorceryCardType = { type: "Sorcery"; castAction?: VoidFunction };

export type InstantCardType = { type: "Instant"; castAction?: VoidFunction };

export type scryfall_images = {
  small?: ImageType;
  normal?: ImageType;
  large?: ImageType;
  png?: ImageType;
  art_crop?: string;
  border_crop?: string;
};

type ImageType = string | StaticImageData;

export type Position = {
  x: number;
  y: number;
};
