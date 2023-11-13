import axios from "axios";
import React, { useEffect } from "react";

import {
  CardType,
  CreatureCardType,
  ScryfallCardType,
} from "../../../types/model";
import { Button } from "@mui/material";
import { cloneDeep } from "lodash";
import { GameStore } from "../../../components/Game/GameStore";

const MinotaurToken: CardType = {
  key: "",
  isTapped: false,
  hasSummoningSickness: true,
  type: "Creature",
  id: "5d2a3833-ab5b-4f84-b39c-d0eeb7b474d3",
  name: "Minotaur",
  scryfall_uri: "https://scryfall.com/card/tjou/3/minotaur?utm_source=api",
  image_uris: {
    small:
      "https://cards.scryfall.io/small/front/5/d/5d2a3833-ab5b-4f84-b39c-d0eeb7b474d3.jpg?1561757242",
    normal:
      "https://cards.scryfall.io/normal/front/5/d/5d2a3833-ab5b-4f84-b39c-d0eeb7b474d3.jpg?1561757242",
    large:
      "https://cards.scryfall.io/large/front/5/d/5d2a3833-ab5b-4f84-b39c-d0eeb7b474d3.jpg?1561757242",
    png: "https://cards.scryfall.io/png/front/5/d/5d2a3833-ab5b-4f84-b39c-d0eeb7b474d3.png?1561757242",
    art_crop:
      "https://cards.scryfall.io/art_crop/front/5/d/5d2a3833-ab5b-4f84-b39c-d0eeb7b474d3.jpg?1561757242",
    border_crop:
      "https://cards.scryfall.io/border_crop/front/5/d/5d2a3833-ab5b-4f84-b39c-d0eeb7b474d3.jpg?1561757242",
  },
  cmc: 0,
  power: 2,
  toughness: 3,
  keywords: [],
  rulings_uri:
    "https://api.scryfall.com/cards/5d2a3833-ab5b-4f84-b39c-d0eeb7b474d3/rulings",
  rarity: "common",
};

const Minotaur = () => {
  const game = new GameStore();

  const Mogis: CardType[] = [
    {
    key:"Mogis - Fanatic of Mogis",
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "581eaadb-442b-40c9-b8f9-9e19d5eba824",
      name: "Fanatic of Mogis",
      scryfall_uri:
        "https://scryfall.com/card/ths/121/fanatic-of-mogis?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/5/8/581eaadb-442b-40c9-b8f9-9e19d5eba824.jpg?1562818407",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/8/581eaadb-442b-40c9-b8f9-9e19d5eba824.jpg?1562818407",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/5/8/581eaadb-442b-40c9-b8f9-9e19d5eba824.jpg?1562818407",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/5/8/581eaadb-442b-40c9-b8f9-9e19d5eba824.png?1562818407",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/8/581eaadb-442b-40c9-b8f9-9e19d5eba824.jpg?1562818407",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/8/581eaadb-442b-40c9-b8f9-9e19d5eba824.jpg?1562818407",
      },
      cmc: 4,

      power: 4,
      toughness: 2,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/581eaadb-442b-40c9-b8f9-9e19d5eba824/rulings",

      rarity: "uncommon",
    },
    {
    key: "Mogis - Kragma Butcher",
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "56d1dcab-7e46-4ff1-91f6-77352ef0cd90",
      name: "Kragma Butcher",
      scryfall_uri:
        "https://scryfall.com/card/bng/100/kragma-butcher?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/5/6/56d1dcab-7e46-4ff1-91f6-77352ef0cd90.jpg?1593092263",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/6/56d1dcab-7e46-4ff1-91f6-77352ef0cd90.jpg?1593092263",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/5/6/56d1dcab-7e46-4ff1-91f6-77352ef0cd90.jpg?1593092263",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/5/6/56d1dcab-7e46-4ff1-91f6-77352ef0cd90.png?1593092263",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/6/56d1dcab-7e46-4ff1-91f6-77352ef0cd90.jpg?1593092263",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/6/56d1dcab-7e46-4ff1-91f6-77352ef0cd90.jpg?1593092263",
      },
      cmc: 3,

      power: 2,
      toughness: 3,
      keywords: ["Inspired"],

      rulings_uri:
        "https://api.scryfall.com/cards/56d1dcab-7e46-4ff1-91f6-77352ef0cd90/rulings",

      rarity: "common",
    },
    {
        key: "Mogis - Minotaur Skullcleaver",
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: false,
      id: "b6fef9f8-ff3e-4a3f-a3ff-4534ff0c3946",
      name: "Minotaur Skullcleaver",
      scryfall_uri:
        "https://scryfall.com/card/jmp/349/minotaur-skullcleaver?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/b/6/b6fef9f8-ff3e-4a3f-a3ff-4534ff0c3946.jpg?1601078382",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/b/6/b6fef9f8-ff3e-4a3f-a3ff-4534ff0c3946.jpg?1601078382",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/b/6/b6fef9f8-ff3e-4a3f-a3ff-4534ff0c3946.jpg?1601078382",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/b/6/b6fef9f8-ff3e-4a3f-a3ff-4534ff0c3946.png?1601078382",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/b/6/b6fef9f8-ff3e-4a3f-a3ff-4534ff0c3946.jpg?1601078382",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/b/6/b6fef9f8-ff3e-4a3f-a3ff-4534ff0c3946.jpg?1601078382",
      },
      cmc: 3,

      power: 2,
      toughness: 2,
      keywords: ["Haste"],

      rulings_uri:
        "https://api.scryfall.com/cards/b6fef9f8-ff3e-4a3f-a3ff-4534ff0c3946/rulings",

      rarity: "common",
    },
    {
        key:"Mogis - Minotaur Younghorn",
      hasSummoningSickness: false,
      isTapped: false,
      type: "Creature",
      id: "2c8e22f9-6b70-425c-a0a8-09b6101a286e",
      name: "Minotaur Younghorn",
      scryfall_uri:
        "https://scryfall.com/card/tbth/2/minotaur-younghorn?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/2/c/2c8e22f9-6b70-425c-a0a8-09b6101a286e.jpg?1562639728",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/2/c/2c8e22f9-6b70-425c-a0a8-09b6101a286e.jpg?1562639728",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/2/c/2c8e22f9-6b70-425c-a0a8-09b6101a286e.jpg?1562639728",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/2/c/2c8e22f9-6b70-425c-a0a8-09b6101a286e.png?1562639728",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/2/c/2c8e22f9-6b70-425c-a0a8-09b6101a286e.jpg?1562639728",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/2/c/2c8e22f9-6b70-425c-a0a8-09b6101a286e.jpg?1562639728",
      },
      cmc: 0,
      power: 2,
      toughness: 2,
      keywords: ["Haste"],

      rulings_uri:
        "https://api.scryfall.com/cards/2c8e22f9-6b70-425c-a0a8-09b6101a286e/rulings",
      rarity: "common",
    },
    {
      type: "Creature",
      onEnter: () => {
        game.addNewMessage(
          <div>
            <p>The minotaurs have begun to summon aid from their diety.</p>
            <p>Mogis will become a creature in 2 turns.</p>
          </div>
        );
        game.accelerateGame();
      },
      onDeath: () => {
        game.accelerateGame();
      },
      hasSummoningSickness: true,
      isTapped: false,
      id: "2a0417bf-b735-46d7-9985-2d991051020f",
      name: "Mogis, God of Slaughter",
      scryfall_uri:
        "https://scryfall.com/card/bng/151/mogis-god-of-slaughter?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/2/a/2a0417bf-b735-46d7-9985-2d991051020f.jpg?1593092789",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/2/a/2a0417bf-b735-46d7-9985-2d991051020f.jpg?1593092789",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/2/a/2a0417bf-b735-46d7-9985-2d991051020f.jpg?1593092789",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/2/a/2a0417bf-b735-46d7-9985-2d991051020f.png?1593092789",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/2/a/2a0417bf-b735-46d7-9985-2d991051020f.jpg?1593092789",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/2/a/2a0417bf-b735-46d7-9985-2d991051020f.jpg?1593092789",
      },
      cmc: 4,

      power: 7,
      toughness: 5,
      keywords: ["Indestructible"],

      rulings_uri:
        "https://api.scryfall.com/cards/2a0417bf-b735-46d7-9985-2d991051020f/rulings",

      rarity: "mythic",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: false,
      id: "938272b2-8e1c-4196-8557-c597735dd96e",
      name: "Reckless Minotaur",
      scryfall_uri:
        "https://scryfall.com/card/tbth/5/reckless-minotaur?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/9/3/938272b2-8e1c-4196-8557-c597735dd96e.jpg?1562639929",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/3/938272b2-8e1c-4196-8557-c597735dd96e.jpg?1562639929",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/9/3/938272b2-8e1c-4196-8557-c597735dd96e.jpg?1562639929",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/9/3/938272b2-8e1c-4196-8557-c597735dd96e.png?1562639929",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/9/3/938272b2-8e1c-4196-8557-c597735dd96e.jpg?1562639929",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/9/3/938272b2-8e1c-4196-8557-c597735dd96e.jpg?1562639929",
      },
      cmc: 0,
      power: 4,
      toughness: 1,
      keywords: ["Haste"],

      rulings_uri:
        "https://api.scryfall.com/cards/938272b2-8e1c-4196-8557-c597735dd96e/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "e800a3fe-bb1a-45f1-8c81-5ec88ff8647b",
      name: "Ruinous Minotaur",
      scryfall_uri:
        "https://scryfall.com/card/zen/145/ruinous-minotaur?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/e/8/e800a3fe-bb1a-45f1-8c81-5ec88ff8647b.jpg?1562617854",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/8/e800a3fe-bb1a-45f1-8c81-5ec88ff8647b.jpg?1562617854",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/e/8/e800a3fe-bb1a-45f1-8c81-5ec88ff8647b.jpg?1562617854",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/e/8/e800a3fe-bb1a-45f1-8c81-5ec88ff8647b.png?1562617854",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/8/e800a3fe-bb1a-45f1-8c81-5ec88ff8647b.jpg?1562617854",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/8/e800a3fe-bb1a-45f1-8c81-5ec88ff8647b.jpg?1562617854",
      },
      cmc: 3,

      power: 5,
      toughness: 2,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/e800a3fe-bb1a-45f1-8c81-5ec88ff8647b/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "32691e3f-dea9-45ac-96fe-96b34d5116a9",
      name: "Skophos Reaver",
      scryfall_uri:
        "https://scryfall.com/card/mh2/140/skophos-reaver?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/3/2/32691e3f-dea9-45ac-96fe-96b34d5116a9.jpg?1626096969",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/3/2/32691e3f-dea9-45ac-96fe-96b34d5116a9.jpg?1626096969",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/3/2/32691e3f-dea9-45ac-96fe-96b34d5116a9.jpg?1626096969",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/3/2/32691e3f-dea9-45ac-96fe-96b34d5116a9.png?1626096969",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/3/2/32691e3f-dea9-45ac-96fe-96b34d5116a9.jpg?1626096969",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/3/2/32691e3f-dea9-45ac-96fe-96b34d5116a9.jpg?1626096969",
      },
      cmc: 3,

      power: 2,
      toughness: 3,
      keywords: ["Madness"],

      rulings_uri:
        "https://api.scryfall.com/cards/32691e3f-dea9-45ac-96fe-96b34d5116a9/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "a2b441c0-261e-4094-b694-5e11ea3c14ab",
      name: "Slaughter-Priest of Mogis",
      scryfall_uri:
        "https://scryfall.com/card/thb/227/slaughter-priest-of-mogis?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/a/2/a2b441c0-261e-4094-b694-5e11ea3c14ab.jpg?1581481146",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/2/a2b441c0-261e-4094-b694-5e11ea3c14ab.jpg?1581481146",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/a/2/a2b441c0-261e-4094-b694-5e11ea3c14ab.jpg?1581481146",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/a/2/a2b441c0-261e-4094-b694-5e11ea3c14ab.png?1581481146",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/2/a2b441c0-261e-4094-b694-5e11ea3c14ab.jpg?1581481146",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/2/a2b441c0-261e-4094-b694-5e11ea3c14ab.jpg?1581481146",
      },
      cmc: 2,

      power: 2,
      toughness: 2,

      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/a2b441c0-261e-4094-b694-5e11ea3c14ab/rulings",

      rarity: "uncommon",
    },
    {
      object: "card",
      id: "30d81da3-dc88-4cf7-ab9a-c8ade2cfa0e1",
      oracle_id: "97acd3aa-ae4a-4e9d-a5b9-36eaba158735",
      multiverse_ids: [426816],
      mtgo_id: 63830,
      mtgo_foil_id: 63831,
      tcgplayer_id: 130063,
      cardmarket_id: 296786,
      name: "Unburden",
      lang: "en",
      released_at: "2017-04-28",
      uri: "https://api.scryfall.com/cards/30d81da3-dc88-4cf7-ab9a-c8ade2cfa0e1",
      scryfall_uri: "https://scryfall.com/card/akh/114/unburden?utm_source=api",
      layout: "normal",
      highres_image: true,
      image_status: "highres_scan",
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/3/0/30d81da3-dc88-4cf7-ab9a-c8ade2cfa0e1.jpg?1543675450",
        normal:
          "https://cards.scryfall.io/normal/front/3/0/30d81da3-dc88-4cf7-ab9a-c8ade2cfa0e1.jpg?1543675450",
        large:
          "https://cards.scryfall.io/large/front/3/0/30d81da3-dc88-4cf7-ab9a-c8ade2cfa0e1.jpg?1543675450",
        png: "https://cards.scryfall.io/png/front/3/0/30d81da3-dc88-4cf7-ab9a-c8ade2cfa0e1.png?1543675450",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/3/0/30d81da3-dc88-4cf7-ab9a-c8ade2cfa0e1.jpg?1543675450",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/3/0/30d81da3-dc88-4cf7-ab9a-c8ade2cfa0e1.jpg?1543675450",
      },
      mana_cost: "{1}{B}{B}",
      cmc: 3.0,
      type_line: "Sorcery",
      oracle_text:
        "Target player discards two cards.\nCycling {2} ({2}, Discard this card: Draw a card.)",
      colors: ["B"],
      color_identity: ["B"],
      keywords: ["Cycling"],
      legalities: {
        standard: "not_legal",
        future: "not_legal",
        historic: "legal",
        gladiator: "legal",
        pioneer: "legal",
        explorer: "legal",
        modern: "legal",
        legacy: "legal",
        pauper: "legal",
        vintage: "legal",
        penny: "legal",
        commander: "legal",
        oathbreaker: "legal",
        brawl: "not_legal",
        historicbrawl: "legal",
        alchemy: "not_legal",
        paupercommander: "legal",
        duel: "legal",
        oldschool: "not_legal",
        premodern: "legal",
        predh: "legal",
      },
      games: ["paper", "mtgo"],
      reserved: false,
      foil: true,
      nonfoil: true,
      finishes: ["nonfoil", "foil"],
      oversized: false,
      promo: false,
      reprint: true,
      variation: false,
      set_id: "02d1c536-68bc-4208-9b65-7741ef1f9da8",
      set: "akh",
      set_name: "Amonkhet",
      set_type: "expansion",
      set_uri:
        "https://api.scryfall.com/sets/02d1c536-68bc-4208-9b65-7741ef1f9da8",
      set_search_uri:
        "https://api.scryfall.com/cards/search?order=set&q=e%3Aakh&unique=prints",
      scryfall_set_uri: "https://scryfall.com/sets/akh?utm_source=api",
      rulings_uri:
        "https://api.scryfall.com/cards/30d81da3-dc88-4cf7-ab9a-c8ade2cfa0e1/rulings",
      prints_search_uri:
        "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A97acd3aa-ae4a-4e9d-a5b9-36eaba158735&unique=prints",
      collector_number: "114",
      digital: false,
      rarity: "common",
      flavor_text:
        '"Ambition requires clarity. If you have any doubts, they must be abandoned."\n—Bontu, god of ambition',
      card_back_id: "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
      artist: "Svetlin Velinov",
      artist_ids: ["ffd063ae-c097-4f26-b2e6-b1e2137708bc"],
      illustration_id: "a0e0645e-6157-4589-8636-15369d9bf644",
      border_color: "black",
      frame: "2015",
      full_art: false,
      textless: false,
      booster: true,
      story_spotlight: false,
      edhrec_rank: 16419,
      penny_rank: 2445,
      prices: {
        usd: "0.04",
        usd_foil: "0.21",
        usd_etched: null,
        eur: "0.03",
        eur_foil: "0.09",
        tix: "0.03",
      },
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=426816&printed=false",
        tcgplayer_infinite_articles:
          "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26partner%3Dscryfall%26q%3DUnburden",
        tcgplayer_infinite_decks:
          "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26partner%3Dscryfall%26q%3DUnburden",
        edhrec: "https://edhrec.com/route/?cc=Unburden",
      },
      purchase_uris: {
        tcgplayer:
          "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F130063%3Fpage%3D1",
        cardmarket:
          "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Unburden&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
        cardhoarder:
          "https://www.cardhoarder.com/cards/63830?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall",
      },
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "2dea2466-5c7f-40ce-b749-100ae89d2c90",
      name: "Ahn-Crop Invader",
      scryfall_uri:
        "https://scryfall.com/card/war/113/ahn-crop-invader?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/2/d/2dea2466-5c7f-40ce-b749-100ae89d2c90.jpg?1557576604",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/2/d/2dea2466-5c7f-40ce-b749-100ae89d2c90.jpg?1557576604",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/2/d/2dea2466-5c7f-40ce-b749-100ae89d2c90.jpg?1557576604",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/2/d/2dea2466-5c7f-40ce-b749-100ae89d2c90.png?1557576604",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/2/d/2dea2466-5c7f-40ce-b749-100ae89d2c90.jpg?1557576604",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/2/d/2dea2466-5c7f-40ce-b749-100ae89d2c90.jpg?1557576604",
      },
      cmc: 3,

      power: 2,
      toughness: 2,
      keywords: [],
      rulings_uri:
        "https://api.scryfall.com/cards/2dea2466-5c7f-40ce-b749-100ae89d2c90/rulings",

      rarity: "common",
    },
    {
      object: "card",
      id: "f6882d51-1db2-4b08-8873-cb6f2d96b260",
      oracle_id: "136bce30-d1bf-4e54-93f6-6c74f6fa6567",
      multiverse_ids: [],
      tcgplayer_id: 231502,
      name: "Altar of Mogis",
      lang: "en",
      released_at: "2014-03-01",
      uri: "https://api.scryfall.com/cards/f6882d51-1db2-4b08-8873-cb6f2d96b260",
      scryfall_uri:
        "https://scryfall.com/card/tbth/11/altar-of-mogis?utm_source=api",
      layout: "normal",
      highres_image: true,
      image_status: "highres_scan",
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/f/6/f6882d51-1db2-4b08-8873-cb6f2d96b260.jpg?1562640138",
        normal:
          "https://cards.scryfall.io/normal/front/f/6/f6882d51-1db2-4b08-8873-cb6f2d96b260.jpg?1562640138",
        large:
          "https://cards.scryfall.io/large/front/f/6/f6882d51-1db2-4b08-8873-cb6f2d96b260.jpg?1562640138",
        png: "https://cards.scryfall.io/png/front/f/6/f6882d51-1db2-4b08-8873-cb6f2d96b260.png?1562640138",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/f/6/f6882d51-1db2-4b08-8873-cb6f2d96b260.jpg?1562640138",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/f/6/f6882d51-1db2-4b08-8873-cb6f2d96b260.jpg?1562640138",
      },
      mana_cost: "",
      cmc: 0.0,
      type_line: "Artifact",
      oracle_text:
        "At the beginning of the Horde's precombat main phase, reveal an additional card from the top of the Horde's library. The Horde casts that card.\nHero's Reward — When Altar of Mogis is put into a graveyard from anywhere, the Horde sacrifices two Minotaurs.",
      colors: [],
      color_identity: [],
      keywords: ["Hero's Reward"],
      legalities: {
        standard: "not_legal",
        future: "not_legal",
        historic: "not_legal",
        gladiator: "not_legal",
        pioneer: "not_legal",
        explorer: "not_legal",
        modern: "not_legal",
        legacy: "not_legal",
        pauper: "not_legal",
        vintage: "not_legal",
        penny: "not_legal",
        commander: "not_legal",
        oathbreaker: "not_legal",
        brawl: "not_legal",
        historicbrawl: "not_legal",
        alchemy: "not_legal",
        paupercommander: "not_legal",
        duel: "not_legal",
        oldschool: "not_legal",
        premodern: "not_legal",
        predh: "not_legal",
      },
      games: ["paper"],
      reserved: false,
      foil: false,
      nonfoil: true,
      finishes: ["nonfoil"],
      oversized: false,
      promo: false,
      reprint: false,
      variation: false,
      set_id: "7dd30d1d-f481-4f68-9383-6ddb51bbe21b",
      set: "tbth",
      set_name: "Battle the Horde",
      set_type: "token",
      set_uri:
        "https://api.scryfall.com/sets/7dd30d1d-f481-4f68-9383-6ddb51bbe21b",
      set_search_uri:
        "https://api.scryfall.com/cards/search?order=set&q=e%3Atbth&unique=prints",
      scryfall_set_uri: "https://scryfall.com/sets/tbth?utm_source=api",
      rulings_uri:
        "https://api.scryfall.com/cards/f6882d51-1db2-4b08-8873-cb6f2d96b260/rulings",
      prints_search_uri:
        "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A136bce30-d1bf-4e54-93f6-6c74f6fa6567&unique=prints",
      collector_number: "11",
      digital: false,
      rarity: "common",
      card_back_id: "87d06f2c-46ff-4cad-9ee2-1a51b26f50cd",
      artist: "Aaron Miller",
      artist_ids: ["fc021f3d-773a-4706-bbe7-f602324f511f"],
      illustration_id: "453c27e4-fe7f-46af-8012-f22b969b3f2d",
      border_color: "black",
      frame: "2003",
      full_art: false,
      textless: false,
      booster: false,
      story_spotlight: false,
      promo_types: ["instore"],
      prices: {
        usd: "4.78",
        usd_foil: null,
        usd_etched: null,
        eur: null,
        eur_foil: null,
        tix: null,
      },
      related_uris: {
        tcgplayer_infinite_articles:
          "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26partner%3Dscryfall%26q%3DAltar%2Bof%2BMogis",
        tcgplayer_infinite_decks:
          "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26partner%3Dscryfall%26q%3DAltar%2Bof%2BMogis",
        edhrec: "https://edhrec.com/route/?cc=Altar+of+Mogis",
      },
      purchase_uris: {
        tcgplayer:
          "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F231502%3Fpage%3D1",
        cardmarket:
          "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Altar+of+Mogis&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
        cardhoarder:
          "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Altar+of+Mogis&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall",
      },
    },
    {
      type: "Sorcery",
      id: "ba975f60-ca29-4fc8-b2f0-416be395f200",
      name: "Blasphemous Act",
      castAction: () => {
        game.addNewMessage("Blasphemour");
      },
      scryfall_uri:
        "https://scryfall.com/card/clb/780/blasphemous-act?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/b/a/ba975f60-ca29-4fc8-b2f0-416be395f200.jpg?1654116928",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/b/a/ba975f60-ca29-4fc8-b2f0-416be395f200.jpg?1654116928",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/b/a/ba975f60-ca29-4fc8-b2f0-416be395f200.jpg?1654116928",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/b/a/ba975f60-ca29-4fc8-b2f0-416be395f200.png?1654116928",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/b/a/ba975f60-ca29-4fc8-b2f0-416be395f200.jpg?1654116928",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/b/a/ba975f60-ca29-4fc8-b2f0-416be395f200.jpg?1654116928",
      },
      cmc: 9,

      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/ba975f60-ca29-4fc8-b2f0-416be395f200/rulings",

      rarity: "rare",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "757948b3-8cb2-4709-9bbf-031c2bf6d4c5",
      name: "Warchanter of Mogis",
      scryfall_uri:
        "https://scryfall.com/card/bng/85/warchanter-of-mogis?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/7/5/757948b3-8cb2-4709-9bbf-031c2bf6d4c5.jpg?1593092126",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/7/5/757948b3-8cb2-4709-9bbf-031c2bf6d4c5.jpg?1593092126",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/7/5/757948b3-8cb2-4709-9bbf-031c2bf6d4c5.jpg?1593092126",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/7/5/757948b3-8cb2-4709-9bbf-031c2bf6d4c5.png?1593092126",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/7/5/757948b3-8cb2-4709-9bbf-031c2bf6d4c5.jpg?1593092126",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/7/5/757948b3-8cb2-4709-9bbf-031c2bf6d4c5.jpg?1593092126",
      },
      cmc: 5,

      power: 3,
      toughness: 3,
      keywords: ["Inspired"],
      rulings_uri:
        "https://api.scryfall.com/cards/757948b3-8cb2-4709-9bbf-031c2bf6d4c5/rulings",

      rarity: "common",
    },
    {
      object: "card",
      id: "d529d230-89b0-453b-987b-a47e15bc3830",
      oracle_id: "16dddf03-449c-4df0-9902-f8901f05656e",
      multiverse_ids: [426828],
      mtgo_id: 63854,
      mtgo_foil_id: 63855,
      tcgplayer_id: 129743,
      cardmarket_id: 296706,
      name: "Consuming Fervor",
      lang: "en",
      released_at: "2017-04-28",
      uri: "https://api.scryfall.com/cards/d529d230-89b0-453b-987b-a47e15bc3830",
      scryfall_uri:
        "https://scryfall.com/card/akh/126/consuming-fervor?utm_source=api",
      layout: "normal",
      highres_image: true,
      image_status: "highres_scan",
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/d/5/d529d230-89b0-453b-987b-a47e15bc3830.jpg?1543675535",
        normal:
          "https://cards.scryfall.io/normal/front/d/5/d529d230-89b0-453b-987b-a47e15bc3830.jpg?1543675535",
        large:
          "https://cards.scryfall.io/large/front/d/5/d529d230-89b0-453b-987b-a47e15bc3830.jpg?1543675535",
        png: "https://cards.scryfall.io/png/front/d/5/d529d230-89b0-453b-987b-a47e15bc3830.png?1543675535",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/d/5/d529d230-89b0-453b-987b-a47e15bc3830.jpg?1543675535",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/d/5/d529d230-89b0-453b-987b-a47e15bc3830.jpg?1543675535",
      },
      mana_cost: "{R}",
      cmc: 1.0,
      type_line: "Enchantment — Aura",
      oracle_text:
        'Enchant creature\nEnchanted creature gets +3/+3 and has "At the beginning of your upkeep, put a -1/-1 counter on this creature."',
      colors: ["R"],
      color_identity: ["R"],
      keywords: ["Enchant"],
      legalities: {
        standard: "not_legal",
        future: "not_legal",
        historic: "not_legal",
        gladiator: "not_legal",
        pioneer: "legal",
        explorer: "not_legal",
        modern: "legal",
        legacy: "legal",
        pauper: "not_legal",
        vintage: "legal",
        penny: "not_legal",
        commander: "legal",
        oathbreaker: "legal",
        brawl: "not_legal",
        historicbrawl: "not_legal",
        alchemy: "not_legal",
        paupercommander: "not_legal",
        duel: "legal",
        oldschool: "not_legal",
        premodern: "not_legal",
        predh: "not_legal",
      },
      games: ["paper", "mtgo"],
      reserved: false,
      foil: true,
      nonfoil: true,
      finishes: ["nonfoil", "foil"],
      oversized: false,
      promo: false,
      reprint: false,
      variation: false,
      set_id: "02d1c536-68bc-4208-9b65-7741ef1f9da8",
      set: "akh",
      set_name: "Amonkhet",
      set_type: "expansion",
      set_uri:
        "https://api.scryfall.com/sets/02d1c536-68bc-4208-9b65-7741ef1f9da8",
      set_search_uri:
        "https://api.scryfall.com/cards/search?order=set&q=e%3Aakh&unique=prints",
      scryfall_set_uri: "https://scryfall.com/sets/akh?utm_source=api",
      rulings_uri:
        "https://api.scryfall.com/cards/d529d230-89b0-453b-987b-a47e15bc3830/rulings",
      prints_search_uri:
        "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A16dddf03-449c-4df0-9902-f8901f05656e&unique=prints",
      collector_number: "126",
      digital: false,
      rarity: "uncommon",
      flavor_text:
        "Headlong is the only way to pass through the gate to the afterlife.",
      card_back_id: "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
      artist: "Svetlin Velinov",
      artist_ids: ["ffd063ae-c097-4f26-b2e6-b1e2137708bc"],
      illustration_id: "e49a75ce-d03b-41b1-800d-fb093b7a38df",
      border_color: "black",
      frame: "2015",
      full_art: false,
      textless: false,
      booster: true,
      story_spotlight: false,
      edhrec_rank: 16317,
      penny_rank: 2461,
      prices: {
        usd: "0.06",
        usd_foil: "0.44",
        usd_etched: null,
        eur: "0.40",
        eur_foil: "0.20",
        tix: "0.03",
      },
      related_uris: {
        gatherer:
          "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=426828&printed=false",
        tcgplayer_infinite_articles:
          "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26partner%3Dscryfall%26q%3DConsuming%2BFervor",
        tcgplayer_infinite_decks:
          "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26partner%3Dscryfall%26q%3DConsuming%2BFervor",
        edhrec: "https://edhrec.com/route/?cc=Consuming+Fervor",
      },
      purchase_uris: {
        tcgplayer:
          "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F129743%3Fpage%3D1",
        cardmarket:
          "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Consuming+Fervor&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
        cardhoarder:
          "https://www.cardhoarder.com/cards/63854?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall",
      },
    },
    {
      type: "Sorcery",
      id: "a66e5673-e34b-46e8-a0e4-55f3ee20f99a",
      name: "Crackling Doom",
      scryfall_uri:
        "https://scryfall.com/card/2x2/196/crackling-doom?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/a/6/a66e5673-e34b-46e8-a0e4-55f3ee20f99a.jpg?1655802481",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/6/a66e5673-e34b-46e8-a0e4-55f3ee20f99a.jpg?1655802481",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/a/6/a66e5673-e34b-46e8-a0e4-55f3ee20f99a.jpg?1655802481",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/a/6/a66e5673-e34b-46e8-a0e4-55f3ee20f99a.png?1655802481",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/6/a66e5673-e34b-46e8-a0e4-55f3ee20f99a.jpg?1655802481",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/6/a66e5673-e34b-46e8-a0e4-55f3ee20f99a.jpg?1655802481",
      },
      cmc: 3,

      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/a66e5673-e34b-46e8-a0e4-55f3ee20f99a/rulings",

      rarity: "uncommon",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "eb72cfc8-6235-4951-b1ba-6d9531f5eabf",
      name: "Hurloon Minotaur",
      scryfall_uri:
        "https://scryfall.com/card/me3/102/hurloon-minotaur?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/e/b/eb72cfc8-6235-4951-b1ba-6d9531f5eabf.jpg?1562944657",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/b/eb72cfc8-6235-4951-b1ba-6d9531f5eabf.jpg?1562944657",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/e/b/eb72cfc8-6235-4951-b1ba-6d9531f5eabf.jpg?1562944657",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/e/b/eb72cfc8-6235-4951-b1ba-6d9531f5eabf.png?1562944657",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/b/eb72cfc8-6235-4951-b1ba-6d9531f5eabf.jpg?1562944657",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/b/eb72cfc8-6235-4951-b1ba-6d9531f5eabf.jpg?1562944657",
      },
      cmc: 3,
      power: 2,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/eb72cfc8-6235-4951-b1ba-6d9531f5eabf/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "70a359c9-1889-426d-acaf-074cfd9f274d",
      name: "Hurloon Shaman",
      scryfall_uri:
        "https://scryfall.com/card/wth/108/hurloon-shaman?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/7/0/70a359c9-1889-426d-acaf-074cfd9f274d.jpg?1562801451",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/7/0/70a359c9-1889-426d-acaf-074cfd9f274d.jpg?1562801451",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/7/0/70a359c9-1889-426d-acaf-074cfd9f274d.jpg?1562801451",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/7/0/70a359c9-1889-426d-acaf-074cfd9f274d.png?1562801451",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/7/0/70a359c9-1889-426d-acaf-074cfd9f274d.jpg?1562801451",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/7/0/70a359c9-1889-426d-acaf-074cfd9f274d.jpg?1562801451",
      },
      cmc: 3,
      power: 2,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/70a359c9-1889-426d-acaf-074cfd9f274d/rulings",

      rarity: "uncommon",
    },
  ];

  const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * max);
  };

  const randomizeArray = (decklist: any[]) => {
    return decklist;
    return decklist.sort(() => (Math.random() > 0.5 ? 1 : -1));
  };

  const getNewCard = (index: number, rarity: string, cardData: any) => {
    return { ...cardData, rarity: rarity, key: index };
  };

//   const generateClump = (index: number) => {
//     const array = [];
//     // array.push(
//     //   getNewCard(index + 1, "common", common[getRandomInt(common.length)])
//     // );
//     // array.push(
//     //   getNewCard(index + 2, "common", common[getRandomInt(common.length)])
//     // );
//     // array.push(
//     //   getNewCard(index + 3, "common", common[getRandomInt(common.length)])
//     // );
//     // array.push(
//     //   getNewCard(index + 4, "common", common[getRandomInt(common.length)])
//     // );
//     // array.push(
//     //   getNewCard(index + 5, "common", common[getRandomInt(common.length)])
//     // );
//     // array.push(
//     //   getNewCard(index + 6, "common", common[getRandomInt(common.length)])
//     // );
//     // array.push(
//     //   getNewCard(index + 7, "uncommon", uncommon[getRandomInt(uncommon.length)])
//     // );
//     // array.push(
//     //   getNewCard(index, "uncommon", uncommon[getRandomInt(uncommon.length)])
//     // );
//     // array.push(
//     //   getNewCard(index + 9, "uncommon", uncommon[getRandomInt(uncommon.length)])
//     // );
//     array.push(getNewCard(index + 10, "rare", rare[getRandomInt(rare.length)]));
//     return array;
//   };

  const loadData = async () => {
    // console.log(
    //   JSON.stringify(
    //     (
    //       await axios.post("https://api.scryfall.com/cards/collection", {
    //         identifiers: [
    //           { name: "Kindred Charge" },
    //           { name: "Angrath, Captain of Chaos" },
    //           { name: "Angrath, the Flame-Chained" },
    //           { name: "Angrath's Fury" },
    //           { name: "Anthem of Rakdos" },
    //           { name: "Archetype of Aggression" },
    //           { name: "Ardent Dustspeaker" },
    //           { name: "Blasphemous Act" },
    //           { name: "Blaze Commando" },
    //           { name: "Boros Reckoner" },
    //           { name: "Coat of Arms" },
    //           { name: "Crackling Doom" },
    //           { name: "Deathbellow War Cry" },
    //           { name: "Didgeridoo" },
    //           { name: "Dreamshaper Shaman" },
    //           { name: "Etherium-Horn Sorcerer" },
    //           { name: "Felhide Spiritbinder" },
    //           { name: "Ferocity of the Wilds" },
    //           { name: "Firesong and Sunspeaker" },
    //           { name: "Glint-Horn Buccaneer" },
    //           { name: "Hero's Downfall" },
    //           { name: "Impact Tremors" },
    //           { name: "Lightning Visionary" },
    //           { name: "Lord of Shatterskull Pass" },
    //           { name: "Mogis, God of Slaughter" },
    //           { name: "Mogis's Warhound" },
    //           { name: "Neheb, Dreadhorde Champion" },
    //           { name: "Neheb, the Eternal" },
    //           { name: "Neheb, the Worthy" },
    //           { name: "Obelisk of Urd" },
    //           { name: "Oracle of Bones" },
    //           { name: "Pain Magnification" },
    //           { name: "Rage Reflection" },
    //           { name: "Ragemonger" },
    //           { name: "Read the Bones" },
    //           { name: "Sethron, Hurloon General" },
    //           { name: "Supernatural Stamina" },
    //           { name: "Taurean Mauler" },
    //           { name: "Unleash Fury" },
    //           { name: "Zerapa Minotaur" },
    //         ],
    //       })
    //     ).data
    //   )
    // );
    // generateDeck();
  };

  const generateDeck = () => {
    // console.log(common.length, uncommon.length, rare.length);
    let decklist: any[] = [];
    for (let i = 0; i < 6; i++) {
      decklist = decklist.concat(generateClump(i * 100));
    }
    // console.log(deck5list);
    return randomizeArray(decklist);
    //   const clump.
    //   for(let currentClump = 0; currentClump < 10; currentClump++){

    //   }
    // const minotaurDeck = []
    // for(let i = 0; i < 100; i++){
    // }
  };

  useEffect(() => {
    loadData();
    game.initializeDeck(generateDeck());
  });

  return (
    <GameProvider game={game}>
      <Game></Game>
    </GameProvider>
  );
};

export default Minotaur;
