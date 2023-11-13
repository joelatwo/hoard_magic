import axios from "axios";
import React, { useEffect } from "react";

import { PlayArea } from "../../components";
import { Game } from "../../components/Game/Game";
import { GameProvider } from "../../components/Game/GameProvider";
import { PlayMenu } from "../../components/PlayMenu/PlayMenu";
import { GameStore } from "../../components/Game/GameStore";
import {
  CardType,
  CreatureCardType,
  ScryfallCardType,
} from "../../types/model";
import { Button } from "@mui/material";
import { cloneDeep } from "lodash";
import { PlaneswalkerMessage } from "../../components/Planeswalker";

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

  const common: ScryfallCardType[] = [
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: false,
      id: "3d2f2bcc-0db9-4aa1-b63d-587c62468015",
      name: "Minotaur Goreseeker",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/3/d/3d2f2bcc-0db9-4aa1-b63d-587c62468015.jpg?1562639757",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/3/d/3d2f2bcc-0db9-4aa1-b63d-587c62468015.jpg?1562639757",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/3/d/3d2f2bcc-0db9-4aa1-b63d-587c62468015.jpg?1562639757",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/3/d/3d2f2bcc-0db9-4aa1-b63d-587c62468015.png?1562639757",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/3/d/3d2f2bcc-0db9-4aa1-b63d-587c62468015.jpg?1562639757",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/3/d/3d2f2bcc-0db9-4aa1-b63d-587c62468015.jpg?1562639757",
      },
      cmc: 0,
      power: 3,
      toughness: 2,
      keywords: ["Haste"],
      rarity: "common",
    },
    {
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
      isTapped: true,
      hasSummoningSickness: true,
      id: "553ae9d2-3807-4ca8-a575-7fa6667ee212",
      name: "Mogis's Chosen",
      scryfall_uri:
        "https://scryfall.com/card/tbth/3/mogiss-chosen?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/5/5/553ae9d2-3807-4ca8-a575-7fa6667ee212.jpg?1562639810",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/5/553ae9d2-3807-4ca8-a575-7fa6667ee212.jpg?1562639810",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/5/5/553ae9d2-3807-4ca8-a575-7fa6667ee212.jpg?1562639810",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/5/5/553ae9d2-3807-4ca8-a575-7fa6667ee212.png?1562639810",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/5/553ae9d2-3807-4ca8-a575-7fa6667ee212.jpg?1562639810",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/5/553ae9d2-3807-4ca8-a575-7fa6667ee212.jpg?1562639810",
      },
      cmc: 0,
      power: 5,
      toughness: 4,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/553ae9d2-3807-4ca8-a575-7fa6667ee212/rulings",

      rarity: "common",
    },
    {
      hasSummoningSickness: false,
      type: "Creature",
      isTapped: false,
      id: "1eda2434-523d-4e9c-a8f1-acbee5c87aac",
      name: "Phoberos Reaver",
      scryfall_uri:
        "https://scryfall.com/card/tbth/4/phoberos-reaver?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/1/e/1eda2434-523d-4e9c-a8f1-acbee5c87aac.jpg?1562639708",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/1/e/1eda2434-523d-4e9c-a8f1-acbee5c87aac.jpg?1562639708",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/1/e/1eda2434-523d-4e9c-a8f1-acbee5c87aac.jpg?1562639708",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/1/e/1eda2434-523d-4e9c-a8f1-acbee5c87aac.png?1562639708",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/1/e/1eda2434-523d-4e9c-a8f1-acbee5c87aac.jpg?1562639708",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/1/e/1eda2434-523d-4e9c-a8f1-acbee5c87aac.jpg?1562639708",
      },
      cmc: 0,
      power: 2,
      toughness: 3,
      keywords: ["Haste"],
      rulings_uri:
        "https://api.scryfall.com/cards/1eda2434-523d-4e9c-a8f1-acbee5c87aac/rulings",

      rarity: "common",
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
      hasSummoningSickness: false,
      isTapped: false,
      id: "dd5db68c-24d5-44ce-9809-e446f26fac5d",
      name: "Ahn-Crop Crasher",
      scryfall_uri:
        "https://scryfall.com/card/akh/117/ahn-crop-crasher?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/d/d/dd5db68c-24d5-44ce-9809-e446f26fac5d.jpg?1543675472",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/d/d/dd5db68c-24d5-44ce-9809-e446f26fac5d.jpg?1543675472",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/d/d/dd5db68c-24d5-44ce-9809-e446f26fac5d.jpg?1543675472",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/d/d/dd5db68c-24d5-44ce-9809-e446f26fac5d.png?1543675472",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/d/d/dd5db68c-24d5-44ce-9809-e446f26fac5d.jpg?1543675472",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/d/d/dd5db68c-24d5-44ce-9809-e446f26fac5d.jpg?1543675472",
      },
      cmc: 3,
      power: 3,
      toughness: 2,
      keywords: ["Haste", "Exert"],

      rulings_uri:
        "https://api.scryfall.com/cards/dd5db68c-24d5-44ce-9809-e446f26fac5d/rulings",

      rarity: "uncommon",
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
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "6fdd01bd-ab41-4005-8807-46db0cfc4da4",
      name: "Anaba Bodyguard",
      scryfall_uri:
        "https://scryfall.com/card/10e/187/anaba-bodyguard?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/6/f/6fdd01bd-ab41-4005-8807-46db0cfc4da4.jpg?1562549580",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/6/f/6fdd01bd-ab41-4005-8807-46db0cfc4da4.jpg?1562549580",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/6/f/6fdd01bd-ab41-4005-8807-46db0cfc4da4.jpg?1562549580",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/6/f/6fdd01bd-ab41-4005-8807-46db0cfc4da4.png?1562549580",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/6/f/6fdd01bd-ab41-4005-8807-46db0cfc4da4.jpg?1562549580",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/6/f/6fdd01bd-ab41-4005-8807-46db0cfc4da4.jpg?1562549580",
      },
      cmc: 4,

      power: 2,
      toughness: 3,
      keywords: ["First strike"],

      rulings_uri:
        "https://api.scryfall.com/cards/6fdd01bd-ab41-4005-8807-46db0cfc4da4/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: false,
      id: "52a54ebc-008a-4180-a023-2e1d5318780c",
      name: "Barging Sergeant",
      scryfall_uri:
        "https://scryfall.com/card/grn/92/barging-sergeant?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/5/2/52a54ebc-008a-4180-a023-2e1d5318780c.jpg?1572893099",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/2/52a54ebc-008a-4180-a023-2e1d5318780c.jpg?1572893099",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/5/2/52a54ebc-008a-4180-a023-2e1d5318780c.jpg?1572893099",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/5/2/52a54ebc-008a-4180-a023-2e1d5318780c.png?1572893099",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/2/52a54ebc-008a-4180-a023-2e1d5318780c.jpg?1572893099",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/2/52a54ebc-008a-4180-a023-2e1d5318780c.jpg?1572893099",
      },
      cmc: 5,

      power: 4,
      toughness: 2,
      keywords: ["Mentor", "Haste"],
      rulings_uri:
        "https://api.scryfall.com/cards/52a54ebc-008a-4180-a023-2e1d5318780c/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "8b8c80ea-7b29-4335-ba7b-3e51a5a104a9",
      name: "Borderland Minotaur",
      scryfall_uri:
        "https://scryfall.com/card/jmp/301/borderland-minotaur?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/8/b/8b8c80ea-7b29-4335-ba7b-3e51a5a104a9.jpg?1601077376",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/b/8b8c80ea-7b29-4335-ba7b-3e51a5a104a9.jpg?1601077376",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/8/b/8b8c80ea-7b29-4335-ba7b-3e51a5a104a9.jpg?1601077376",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/8/b/8b8c80ea-7b29-4335-ba7b-3e51a5a104a9.png?1601077376",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/b/8b8c80ea-7b29-4335-ba7b-3e51a5a104a9.jpg?1601077376",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/b/8b8c80ea-7b29-4335-ba7b-3e51a5a104a9.jpg?1601077376",
      },
      cmc: 4,
      power: 4,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/8b8c80ea-7b29-4335-ba7b-3e51a5a104a9/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "f0270fed-4591-4111-a95f-91d4a0ab0d14",
      name: "Bull-Rush Bruiser",
      scryfall_uri:
        "https://scryfall.com/card/bbd/57/bull-rush-bruiser?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/f/0/f0270fed-4591-4111-a95f-91d4a0ab0d14.jpg?1562943246",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/f/0/f0270fed-4591-4111-a95f-91d4a0ab0d14.jpg?1562943246",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/f/0/f0270fed-4591-4111-a95f-91d4a0ab0d14.jpg?1562943246",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/f/0/f0270fed-4591-4111-a95f-91d4a0ab0d14.png?1562943246",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/0/f0270fed-4591-4111-a95f-91d4a0ab0d14.jpg?1562943246",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/0/f0270fed-4591-4111-a95f-91d4a0ab0d14.jpg?1562943246",
      },
      cmc: 4,

      power: 4,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/f0270fed-4591-4111-a95f-91d4a0ab0d14/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "52f191fb-eaf6-432f-a668-37ad48ffabaf",
      name: "Burning-Fist Minotaur",
      scryfall_uri:
        "https://scryfall.com/card/hou/85/burning-fist-minotaur?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/5/2/52f191fb-eaf6-432f-a668-37ad48ffabaf.jpg?1562799434",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/2/52f191fb-eaf6-432f-a668-37ad48ffabaf.jpg?1562799434",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/5/2/52f191fb-eaf6-432f-a668-37ad48ffabaf.jpg?1562799434",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/5/2/52f191fb-eaf6-432f-a668-37ad48ffabaf.png?1562799434",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/2/52f191fb-eaf6-432f-a668-37ad48ffabaf.jpg?1562799434",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/2/52f191fb-eaf6-432f-a668-37ad48ffabaf.jpg?1562799434",
      },
      cmc: 2,

      power: 2,
      toughness: 1,
      keywords: ["First strike"],

      rulings_uri:
        "https://api.scryfall.com/cards/52f191fb-eaf6-432f-a668-37ad48ffabaf/rulings",

      rarity: "uncommon",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "3469d73e-6de1-4b91-83e3-b1714ac29268",
      name: "Canyon Minotaur",
      scryfall_uri:
        "https://scryfall.com/card/m14/131/canyon-minotaur?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/3/4/3469d73e-6de1-4b91-83e3-b1714ac29268.jpg?1595438052",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/3/4/3469d73e-6de1-4b91-83e3-b1714ac29268.jpg?1595438052",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/3/4/3469d73e-6de1-4b91-83e3-b1714ac29268.jpg?1595438052",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/3/4/3469d73e-6de1-4b91-83e3-b1714ac29268.png?1595438052",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/3/4/3469d73e-6de1-4b91-83e3-b1714ac29268.jpg?1595438052",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/3/4/3469d73e-6de1-4b91-83e3-b1714ac29268.jpg?1595438052",
      },
      cmc: 4,
      power: 3,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/3469d73e-6de1-4b91-83e3-b1714ac29268/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "a3990d2f-39d9-49f9-936f-1d40adcf295c",
      name: "Cursed Minotaur",
      scryfall_uri:
        "https://scryfall.com/card/akh/85/cursed-minotaur?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/a/3/a3990d2f-39d9-49f9-936f-1d40adcf295c.jpg?1543675233",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/3/a3990d2f-39d9-49f9-936f-1d40adcf295c.jpg?1543675233",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/a/3/a3990d2f-39d9-49f9-936f-1d40adcf295c.jpg?1543675233",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/a/3/a3990d2f-39d9-49f9-936f-1d40adcf295c.png?1543675233",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/3/a3990d2f-39d9-49f9-936f-1d40adcf295c.jpg?1543675233",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/3/a3990d2f-39d9-49f9-936f-1d40adcf295c.jpg?1543675233",
      },
      cmc: 3,

      power: 3,
      toughness: 2,
      keywords: ["Menace"],

      rulings_uri:
        "https://api.scryfall.com/cards/a3990d2f-39d9-49f9-936f-1d40adcf295c/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "aacb131b-74c9-4e6c-9466-27710bc9441f",
      name: "Deadshot Minotaur",
      scryfall_uri:
        "https://scryfall.com/card/arb/52/deadshot-minotaur?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/a/a/aacb131b-74c9-4e6c-9466-27710bc9441f.jpg?1562643506",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/a/aacb131b-74c9-4e6c-9466-27710bc9441f.jpg?1562643506",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/a/a/aacb131b-74c9-4e6c-9466-27710bc9441f.jpg?1562643506",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/a/a/aacb131b-74c9-4e6c-9466-27710bc9441f.png?1562643506",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/a/aacb131b-74c9-4e6c-9466-27710bc9441f.jpg?1562643506",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/a/aacb131b-74c9-4e6c-9466-27710bc9441f.jpg?1562643506",
      },
      cmc: 5,

      power: 3,
      toughness: 4,

      keywords: ["Cycling"],

      rulings_uri:
        "https://api.scryfall.com/cards/aacb131b-74c9-4e6c-9466-27710bc9441f/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "b29fc64e-297e-4e10-8f4e-289dc1c3ebfd",
      name: "Deathbellow Raider",
      scryfall_uri:
        "https://scryfall.com/card/ths/117/deathbellow-raider?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/b/2/b29fc64e-297e-4e10-8f4e-289dc1c3ebfd.jpg?1562825822",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/b/2/b29fc64e-297e-4e10-8f4e-289dc1c3ebfd.jpg?1562825822",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/b/2/b29fc64e-297e-4e10-8f4e-289dc1c3ebfd.jpg?1562825822",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/b/2/b29fc64e-297e-4e10-8f4e-289dc1c3ebfd.png?1562825822",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/b/2/b29fc64e-297e-4e10-8f4e-289dc1c3ebfd.jpg?1562825822",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/b/2/b29fc64e-297e-4e10-8f4e-289dc1c3ebfd.jpg?1562825822",
      },
      cmc: 2,

      power: 2,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/b29fc64e-297e-4e10-8f4e-289dc1c3ebfd/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "81e7aeca-eaba-4d9a-b061-0d9a63b03b3a",
      name: "Emberhorn Minotaur",
      scryfall_uri:
        "https://scryfall.com/card/akh/130/emberhorn-minotaur?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/8/1/81e7aeca-eaba-4d9a-b061-0d9a63b03b3a.jpg?1543675562",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/1/81e7aeca-eaba-4d9a-b061-0d9a63b03b3a.jpg?1543675562",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/8/1/81e7aeca-eaba-4d9a-b061-0d9a63b03b3a.jpg?1543675562",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/8/1/81e7aeca-eaba-4d9a-b061-0d9a63b03b3a.png?1543675562",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/1/81e7aeca-eaba-4d9a-b061-0d9a63b03b3a.jpg?1543675562",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/1/81e7aeca-eaba-4d9a-b061-0d9a63b03b3a.jpg?1543675562",
      },
      cmc: 4,

      power: 4,
      toughness: 3,
      keywords: ["Exert"],

      rulings_uri:
        "https://api.scryfall.com/cards/81e7aeca-eaba-4d9a-b061-0d9a63b03b3a/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "4a829bb0-6a84-46de-9c2d-14176cf542e6",
      name: "Felhide Brawler",
      scryfall_uri:
        "https://scryfall.com/card/bng/70/felhide-brawler?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/4/a/4a829bb0-6a84-46de-9c2d-14176cf542e6.jpg?1593091966",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/4/a/4a829bb0-6a84-46de-9c2d-14176cf542e6.jpg?1593091966",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/4/a/4a829bb0-6a84-46de-9c2d-14176cf542e6.jpg?1593091966",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/4/a/4a829bb0-6a84-46de-9c2d-14176cf542e6.png?1593091966",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/4/a/4a829bb0-6a84-46de-9c2d-14176cf542e6.jpg?1593091966",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/4/a/4a829bb0-6a84-46de-9c2d-14176cf542e6.jpg?1593091966",
      },
      cmc: 2,

      power: 2,
      toughness: 2,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/4a829bb0-6a84-46de-9c2d-14176cf542e6/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "b4e424de-81be-4f90-a7a2-4102c8ba8989",
      name: "Felhide Minotaur",
      scryfall_uri:
        "https://scryfall.com/card/ths/87/felhide-minotaur?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/b/4/b4e424de-81be-4f90-a7a2-4102c8ba8989.jpg?1593860908",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/b/4/b4e424de-81be-4f90-a7a2-4102c8ba8989.jpg?1593860908",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/b/4/b4e424de-81be-4f90-a7a2-4102c8ba8989.jpg?1593860908",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/b/4/b4e424de-81be-4f90-a7a2-4102c8ba8989.png?1593860908",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/b/4/b4e424de-81be-4f90-a7a2-4102c8ba8989.jpg?1593860908",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/b/4/b4e424de-81be-4f90-a7a2-4102c8ba8989.jpg?1593860908",
      },
      cmc: 3,
      power: 2,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/b4e424de-81be-4f90-a7a2-4102c8ba8989/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "8c869cc4-eed9-4b24-b60f-2d7f85b885dc",
      name: "Frontline Devastator",
      scryfall_uri:
        "https://scryfall.com/card/hou/93/frontline-devastator?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/8/c/8c869cc4-eed9-4b24-b60f-2d7f85b885dc.jpg?1562806662",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/c/8c869cc4-eed9-4b24-b60f-2d7f85b885dc.jpg?1562806662",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/8/c/8c869cc4-eed9-4b24-b60f-2d7f85b885dc.jpg?1562806662",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/8/c/8c869cc4-eed9-4b24-b60f-2d7f85b885dc.png?1562806662",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/c/8c869cc4-eed9-4b24-b60f-2d7f85b885dc.jpg?1562806662",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/c/8c869cc4-eed9-4b24-b60f-2d7f85b885dc.jpg?1562806662",
      },
      cmc: 4,

      power: 3,
      toughness: 3,
      keywords: ["Afflict"],

      rulings_uri:
        "https://api.scryfall.com/cards/8c869cc4-eed9-4b24-b60f-2d7f85b885dc/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "040af9b9-1e94-4dd1-b347-b54b6b9e0275",
      name: "Gnarled Scarhide",
      scryfall_uri:
        "https://scryfall.com/card/jou/72/gnarled-scarhide?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/0/4/040af9b9-1e94-4dd1-b347-b54b6b9e0275.jpg?1593095738",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/0/4/040af9b9-1e94-4dd1-b347-b54b6b9e0275.jpg?1593095738",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/0/4/040af9b9-1e94-4dd1-b347-b54b6b9e0275.jpg?1593095738",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/0/4/040af9b9-1e94-4dd1-b347-b54b6b9e0275.png?1593095738",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/4/040af9b9-1e94-4dd1-b347-b54b6b9e0275.jpg?1593095738",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/0/4/040af9b9-1e94-4dd1-b347-b54b6b9e0275.jpg?1593095738",
      },
      cmc: 1,

      power: 2,
      toughness: 1,
      keywords: ["Bestow"],

      rulings_uri:
        "https://api.scryfall.com/cards/040af9b9-1e94-4dd1-b347-b54b6b9e0275/rulings",

      rarity: "uncommon",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "035ee44d-63ef-45b7-b36b-38ac341a2ca7",
      name: "Grisly Survivor",
      scryfall_uri:
        "https://scryfall.com/card/hou/64/grisly-survivor?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/0/3/035ee44d-63ef-45b7-b36b-38ac341a2ca7.jpg?1562787663",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/0/3/035ee44d-63ef-45b7-b36b-38ac341a2ca7.jpg?1562787663",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/0/3/035ee44d-63ef-45b7-b36b-38ac341a2ca7.jpg?1562787663",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/0/3/035ee44d-63ef-45b7-b36b-38ac341a2ca7.png?1562787663",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/3/035ee44d-63ef-45b7-b36b-38ac341a2ca7.jpg?1562787663",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/0/3/035ee44d-63ef-45b7-b36b-38ac341a2ca7.jpg?1562787663",
      },
      cmc: 3,

      power: 2,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/035ee44d-63ef-45b7-b36b-38ac341a2ca7/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: false,
      id: "0e1263ea-adc9-442b-b13e-9afb69596372",
      name: "Hostile Minotaur",
      scryfall_uri:
        "https://scryfall.com/card/m20/331/hostile-minotaur?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/0/e/0e1263ea-adc9-442b-b13e-9afb69596372.jpg?1564022990",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/0/e/0e1263ea-adc9-442b-b13e-9afb69596372.jpg?1564022990",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/0/e/0e1263ea-adc9-442b-b13e-9afb69596372.jpg?1564022990",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/0/e/0e1263ea-adc9-442b-b13e-9afb69596372.png?1564022990",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/e/0e1263ea-adc9-442b-b13e-9afb69596372.jpg?1564022990",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/0/e/0e1263ea-adc9-442b-b13e-9afb69596372.jpg?1564022990",
      },
      cmc: 4,

      power: 3,
      toughness: 3,
      keywords: ["Haste"],

      rulings_uri:
        "https://api.scryfall.com/cards/0e1263ea-adc9-442b-b13e-9afb69596372/rulings",

      rarity: "common",
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
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "ddfb7f50-14b1-4c7d-b4c8-f50bc14f4fb7",
      name: "Marauding Boneslasher",
      scryfall_uri:
        "https://scryfall.com/card/hou/70/marauding-boneslasher?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/d/d/ddfb7f50-14b1-4c7d-b4c8-f50bc14f4fb7.jpg?1562817493",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/d/d/ddfb7f50-14b1-4c7d-b4c8-f50bc14f4fb7.jpg?1562817493",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/d/d/ddfb7f50-14b1-4c7d-b4c8-f50bc14f4fb7.jpg?1562817493",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/d/d/ddfb7f50-14b1-4c7d-b4c8-f50bc14f4fb7.png?1562817493",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/d/d/ddfb7f50-14b1-4c7d-b4c8-f50bc14f4fb7.jpg?1562817493",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/d/d/ddfb7f50-14b1-4c7d-b4c8-f50bc14f4fb7.jpg?1562817493",
      },
      cmc: 3,

      power: 3,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/ddfb7f50-14b1-4c7d-b4c8-f50bc14f4fb7/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "55725e38-d60a-41a2-93b0-2eefe6d2cc59",
      name: "Minotaur Explorer",
      scryfall_uri:
        "https://scryfall.com/card/ody/206/minotaur-explorer?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/5/5/55725e38-d60a-41a2-93b0-2eefe6d2cc59.jpg?1562910687",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/5/55725e38-d60a-41a2-93b0-2eefe6d2cc59.jpg?1562910687",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/5/5/55725e38-d60a-41a2-93b0-2eefe6d2cc59.jpg?1562910687",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/5/5/55725e38-d60a-41a2-93b0-2eefe6d2cc59.png?1562910687",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/5/55725e38-d60a-41a2-93b0-2eefe6d2cc59.jpg?1562910687",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/5/55725e38-d60a-41a2-93b0-2eefe6d2cc59.jpg?1562910687",
      },
      cmc: 2,

      power: 3,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/55725e38-d60a-41a2-93b0-2eefe6d2cc59/rulings",

      rarity: "uncommon",
    },
    {
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
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "cbd65150-a698-4f23-836c-5cd0fb153eb3",
      name: "Minotaur Sureshot",
      scryfall_uri:
        "https://scryfall.com/card/jmp/350/minotaur-sureshot?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/c/b/cbd65150-a698-4f23-836c-5cd0fb153eb3.jpg?1601078394",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/b/cbd65150-a698-4f23-836c-5cd0fb153eb3.jpg?1601078394",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/c/b/cbd65150-a698-4f23-836c-5cd0fb153eb3.jpg?1601078394",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/c/b/cbd65150-a698-4f23-836c-5cd0fb153eb3.png?1601078394",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/b/cbd65150-a698-4f23-836c-5cd0fb153eb3.jpg?1601078394",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/b/cbd65150-a698-4f23-836c-5cd0fb153eb3.jpg?1601078394",
      },
      cmc: 3,

      power: 2,
      toughness: 3,
      keywords: ["Reach"],

      rulings_uri:
        "https://api.scryfall.com/cards/cbd65150-a698-4f23-836c-5cd0fb153eb3/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "c694f5db-a4ad-4abd-acff-d6b340d2387c",
      name: "Minotaur Warrior",
      scryfall_uri:
        "https://scryfall.com/card/por/140/minotaur-warrior?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/c/6/c694f5db-a4ad-4abd-acff-d6b340d2387c.jpg?1562447827",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/6/c694f5db-a4ad-4abd-acff-d6b340d2387c.jpg?1562447827",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/c/6/c694f5db-a4ad-4abd-acff-d6b340d2387c.jpg?1562447827",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/c/6/c694f5db-a4ad-4abd-acff-d6b340d2387c.png?1562447827",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/6/c694f5db-a4ad-4abd-acff-d6b340d2387c.jpg?1562447827",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/6/c694f5db-a4ad-4abd-acff-d6b340d2387c.jpg?1562447827",
      },
      cmc: 3,
      power: 2,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/c694f5db-a4ad-4abd-acff-d6b340d2387c/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "fd2a923a-1f9c-4a29-9c6b-344ae4d5ae8f",
      name: "Nyxborn Marauder",
      scryfall_uri:
        "https://scryfall.com/card/thb/109/nyxborn-marauder?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/f/d/fd2a923a-1f9c-4a29-9c6b-344ae4d5ae8f.jpg?1581479907",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/f/d/fd2a923a-1f9c-4a29-9c6b-344ae4d5ae8f.jpg?1581479907",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/f/d/fd2a923a-1f9c-4a29-9c6b-344ae4d5ae8f.jpg?1581479907",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/f/d/fd2a923a-1f9c-4a29-9c6b-344ae4d5ae8f.png?1581479907",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/d/fd2a923a-1f9c-4a29-9c6b-344ae4d5ae8f.jpg?1581479907",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/d/fd2a923a-1f9c-4a29-9c6b-344ae4d5ae8f.jpg?1581479907",
      },
      cmc: 4,
      power: 4,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/fd2a923a-1f9c-4a29-9c6b-344ae4d5ae8f/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "902b462a-a552-42d4-91f0-bd33cd9cb719",
      name: "Pensive Minotaur",
      scryfall_uri:
        "https://scryfall.com/card/jou/105/pensive-minotaur?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/9/0/902b462a-a552-42d4-91f0-bd33cd9cb719.jpg?1593860935",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/0/902b462a-a552-42d4-91f0-bd33cd9cb719.jpg?1593860935",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/9/0/902b462a-a552-42d4-91f0-bd33cd9cb719.jpg?1593860935",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/9/0/902b462a-a552-42d4-91f0-bd33cd9cb719.png?1593860935",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/9/0/902b462a-a552-42d4-91f0-bd33cd9cb719.jpg?1593860935",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/9/0/902b462a-a552-42d4-91f0-bd33cd9cb719.jpg?1593860935",
      },
      cmc: 3,
      power: 2,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/902b462a-a552-42d4-91f0-bd33cd9cb719/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "22eb0615-d1b2-4128-bad5-bcff83672f6b",
      name: "Pitiless Vizier",
      scryfall_uri:
        "https://scryfall.com/card/akh/103/pitiless-vizier?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/2/2/22eb0615-d1b2-4128-bad5-bcff83672f6b.jpg?1543675368",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/2/2/22eb0615-d1b2-4128-bad5-bcff83672f6b.jpg?1543675368",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/2/2/22eb0615-d1b2-4128-bad5-bcff83672f6b.jpg?1543675368",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/2/2/22eb0615-d1b2-4128-bad5-bcff83672f6b.png?1543675368",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/2/2/22eb0615-d1b2-4128-bad5-bcff83672f6b.jpg?1543675368",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/2/2/22eb0615-d1b2-4128-bad5-bcff83672f6b.jpg?1543675368",
      },
      cmc: 4,

      power: 4,
      toughness: 2,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/22eb0615-d1b2-4128-bad5-bcff83672f6b/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "1f76d7c4-a5d6-4144-b5f3-e43b96b695b7",
      name: "Rage-Scarred Berserker",
      scryfall_uri:
        "https://scryfall.com/card/thb/113/rage-scarred-berserker?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/1/f/1f76d7c4-a5d6-4144-b5f3-e43b96b695b7.jpg?1581479940",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/1/f/1f76d7c4-a5d6-4144-b5f3-e43b96b695b7.jpg?1581479940",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/1/f/1f76d7c4-a5d6-4144-b5f3-e43b96b695b7.jpg?1581479940",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/1/f/1f76d7c4-a5d6-4144-b5f3-e43b96b695b7.png?1581479940",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/1/f/1f76d7c4-a5d6-4144-b5f3-e43b96b695b7.jpg?1581479940",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/1/f/1f76d7c4-a5d6-4144-b5f3-e43b96b695b7.jpg?1581479940",
      },
      cmc: 5,

      power: 5,
      toughness: 4,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/1f76d7c4-a5d6-4144-b5f3-e43b96b695b7/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: false,
      id: "c52f5e44-4ab6-43d7-aecb-5b95f84d5475",
      name: "Raging Minotaur",
      scryfall_uri:
        "https://scryfall.com/card/me3/109/raging-minotaur?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/c/5/c52f5e44-4ab6-43d7-aecb-5b95f84d5475.jpg?1562936696",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/5/c52f5e44-4ab6-43d7-aecb-5b95f84d5475.jpg?1562936696",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/c/5/c52f5e44-4ab6-43d7-aecb-5b95f84d5475.jpg?1562936696",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/c/5/c52f5e44-4ab6-43d7-aecb-5b95f84d5475.png?1562936696",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/5/c52f5e44-4ab6-43d7-aecb-5b95f84d5475.jpg?1562936696",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/5/c52f5e44-4ab6-43d7-aecb-5b95f84d5475.jpg?1562936696",
      },
      cmc: 4,
      power: 3,
      toughness: 3,
      keywords: ["Haste"],

      rulings_uri:
        "https://api.scryfall.com/cards/c52f5e44-4ab6-43d7-aecb-5b95f84d5475/rulings",
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
      id: "59c39c70-8360-4c7c-b5fa-61c42828609a",
      name: "Skophos Warleader",
      scryfall_uri:
        "https://scryfall.com/card/thb/154/skophos-warleader?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/5/9/59c39c70-8360-4c7c-b5fa-61c42828609a.jpg?1581480410",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/9/59c39c70-8360-4c7c-b5fa-61c42828609a.jpg?1581480410",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/5/9/59c39c70-8360-4c7c-b5fa-61c42828609a.jpg?1581480410",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/5/9/59c39c70-8360-4c7c-b5fa-61c42828609a.png?1581480410",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/9/59c39c70-8360-4c7c-b5fa-61c42828609a.jpg?1581480410",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/9/59c39c70-8360-4c7c-b5fa-61c42828609a.jpg?1581480410",
      },
      cmc: 5,

      power: 4,
      toughness: 5,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/59c39c70-8360-4c7c-b5fa-61c42828609a/rulings",

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
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "f851d74e-90ad-417f-8372-8437d2d68b0d",
      name: "Smelt-Ward Minotaur",
      scryfall_uri:
        "https://scryfall.com/card/grn/116/smelt-ward-minotaur?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/f/8/f851d74e-90ad-417f-8372-8437d2d68b0d.jpg?1572893261",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/f/8/f851d74e-90ad-417f-8372-8437d2d68b0d.jpg?1572893261",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/f/8/f851d74e-90ad-417f-8372-8437d2d68b0d.jpg?1572893261",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/f/8/f851d74e-90ad-417f-8372-8437d2d68b0d.png?1572893261",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/8/f851d74e-90ad-417f-8372-8437d2d68b0d.jpg?1572893261",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/8/f851d74e-90ad-417f-8372-8437d2d68b0d.jpg?1572893261",
      },
      cmc: 3,

      power: 2,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/f851d74e-90ad-417f-8372-8437d2d68b0d/rulings",

      rarity: "uncommon",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "55e2f383-d2a0-4424-bf7a-79e82d6f691f",
      name: "Soulreaper of Mogis",
      scryfall_uri:
        "https://scryfall.com/card/thb/115/soulreaper-of-mogis?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/5/5/55e2f383-d2a0-4424-bf7a-79e82d6f691f.jpg?1616399505",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/5/55e2f383-d2a0-4424-bf7a-79e82d6f691f.jpg?1616399505",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/5/5/55e2f383-d2a0-4424-bf7a-79e82d6f691f.jpg?1616399505",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/5/5/55e2f383-d2a0-4424-bf7a-79e82d6f691f.png?1616399505",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/5/55e2f383-d2a0-4424-bf7a-79e82d6f691f.jpg?1616399505",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/5/55e2f383-d2a0-4424-bf7a-79e82d6f691f.jpg?1616399505",
      },
      cmc: 3,
      power: 2,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/55e2f383-d2a0-4424-bf7a-79e82d6f691f/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "86b9479d-7b6a-40c8-94ea-fdf0ec980b42",
      name: "Spinehorn Minotaur",
      scryfall_uri:
        "https://scryfall.com/card/mh1/147/spinehorn-minotaur?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/8/6/86b9479d-7b6a-40c8-94ea-fdf0ec980b42.jpg?1562201970",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/6/86b9479d-7b6a-40c8-94ea-fdf0ec980b42.jpg?1562201970",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/8/6/86b9479d-7b6a-40c8-94ea-fdf0ec980b42.jpg?1562201970",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/8/6/86b9479d-7b6a-40c8-94ea-fdf0ec980b42.png?1562201970",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/6/86b9479d-7b6a-40c8-94ea-fdf0ec980b42.jpg?1562201970",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/6/86b9479d-7b6a-40c8-94ea-fdf0ec980b42.jpg?1562201970",
      },
      cmc: 3,

      power: 2,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/86b9479d-7b6a-40c8-94ea-fdf0ec980b42/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "33730a07-754c-4606-bfac-d73454af9567",
      name: "Talruum Champion",
      scryfall_uri:
        "https://scryfall.com/card/vis/97/talruum-champion?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/3/3/33730a07-754c-4606-bfac-d73454af9567.jpg?1562277432",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/3/3/33730a07-754c-4606-bfac-d73454af9567.jpg?1562277432",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/3/3/33730a07-754c-4606-bfac-d73454af9567.jpg?1562277432",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/3/3/33730a07-754c-4606-bfac-d73454af9567.png?1562277432",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/3/3/33730a07-754c-4606-bfac-d73454af9567.jpg?1562277432",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/3/3/33730a07-754c-4606-bfac-d73454af9567.jpg?1562277432",
      },
      cmc: 5,

      power: 3,
      toughness: 3,
      keywords: ["First strike"],

      rulings_uri:
        "https://api.scryfall.com/cards/33730a07-754c-4606-bfac-d73454af9567/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: false,
      id: "4a4f1317-5e9b-4f49-9ed8-4f97f8c4b8d0",
      name: "Talruum Minotaur",
      scryfall_uri:
        "https://scryfall.com/card/6ed/210/talruum-minotaur?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/4/a/4a4f1317-5e9b-4f49-9ed8-4f97f8c4b8d0.jpg?1562817266",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/4/a/4a4f1317-5e9b-4f49-9ed8-4f97f8c4b8d0.jpg?1562817266",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/4/a/4a4f1317-5e9b-4f49-9ed8-4f97f8c4b8d0.jpg?1562817266",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/4/a/4a4f1317-5e9b-4f49-9ed8-4f97f8c4b8d0.png?1562817266",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/4/a/4a4f1317-5e9b-4f49-9ed8-4f97f8c4b8d0.jpg?1562817266",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/4/a/4a4f1317-5e9b-4f49-9ed8-4f97f8c4b8d0.jpg?1562817266",
      },
      cmc: 4,
      power: 3,
      toughness: 3,
      keywords: ["Haste"],

      rulings_uri:
        "https://api.scryfall.com/cards/4a4f1317-5e9b-4f49-9ed8-4f97f8c4b8d0/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "ca2cb9a7-5063-4b31-9782-8bfd784bca0a",
      name: "Talruum Piper",
      scryfall_uri:
        "https://scryfall.com/card/vis/98/talruum-piper?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/c/a/ca2cb9a7-5063-4b31-9782-8bfd784bca0a.jpg?1562278637",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/a/ca2cb9a7-5063-4b31-9782-8bfd784bca0a.jpg?1562278637",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/c/a/ca2cb9a7-5063-4b31-9782-8bfd784bca0a.jpg?1562278637",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/c/a/ca2cb9a7-5063-4b31-9782-8bfd784bca0a.png?1562278637",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/a/ca2cb9a7-5063-4b31-9782-8bfd784bca0a.jpg?1562278637",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/a/ca2cb9a7-5063-4b31-9782-8bfd784bca0a.jpg?1562278637",
      },
      cmc: 5,
      power: 3,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/ca2cb9a7-5063-4b31-9782-8bfd784bca0a/rulings",

      rarity: "uncommon",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "5e5ae910-ee1d-4958-92d9-0b06872913c6",
      name: "Undead Minotaur",
      scryfall_uri:
        "https://scryfall.com/card/m14/119/undead-minotaur?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/5/e/5e5ae910-ee1d-4958-92d9-0b06872913c6.jpg?1562829888",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/e/5e5ae910-ee1d-4958-92d9-0b06872913c6.jpg?1562829888",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/5/e/5e5ae910-ee1d-4958-92d9-0b06872913c6.jpg?1562829888",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/5/e/5e5ae910-ee1d-4958-92d9-0b06872913c6.png?1562829888",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/e/5e5ae910-ee1d-4958-92d9-0b06872913c6.jpg?1562829888",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/e/5e5ae910-ee1d-4958-92d9-0b06872913c6.jpg?1562829888",
      },
      cmc: 3,
      power: 2,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/5e5ae910-ee1d-4958-92d9-0b06872913c6/rulings",

      rarity: "common",
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
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "ff48d55e-aa8b-4061-9c77-fd7e696fd7ba",
      name: "Warden of the Chained",
      scryfall_uri:
        "https://scryfall.com/card/thb/230/warden-of-the-chained?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/f/f/ff48d55e-aa8b-4061-9c77-fd7e696fd7ba.jpg?1581481170",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/f/f/ff48d55e-aa8b-4061-9c77-fd7e696fd7ba.jpg?1581481170",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/f/f/ff48d55e-aa8b-4061-9c77-fd7e696fd7ba.jpg?1581481170",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/f/f/ff48d55e-aa8b-4061-9c77-fd7e696fd7ba.png?1581481170",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/f/ff48d55e-aa8b-4061-9c77-fd7e696fd7ba.jpg?1581481170",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/f/ff48d55e-aa8b-4061-9c77-fd7e696fd7ba.jpg?1581481170",
      },
      cmc: 3,

      power: 4,
      toughness: 4,

      keywords: ["Trample"],

      rulings_uri:
        "https://api.scryfall.com/cards/ff48d55e-aa8b-4061-9c77-fd7e696fd7ba/rulings",

      rarity: "uncommon",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "1fe6dd47-92f9-4dbe-8747-352023377e07",
      name: "Zealot of the God-Pharaoh",
      scryfall_uri:
        "https://scryfall.com/card/gn2/45/zealot-of-the-god-pharaoh?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/1/f/1fe6dd47-92f9-4dbe-8747-352023377e07.jpg?1576267394",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/1/f/1fe6dd47-92f9-4dbe-8747-352023377e07.jpg?1576267394",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/1/f/1fe6dd47-92f9-4dbe-8747-352023377e07.jpg?1576267394",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/1/f/1fe6dd47-92f9-4dbe-8747-352023377e07.png?1576267394",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/1/f/1fe6dd47-92f9-4dbe-8747-352023377e07.jpg?1576267394",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/1/f/1fe6dd47-92f9-4dbe-8747-352023377e07.jpg?1576267394",
      },
      cmc: 4,

      power: 4,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/1fe6dd47-92f9-4dbe-8747-352023377e07/rulings",

      rarity: "common",
    },
  ];

  const uncommon: ScryfallCardType[] = [    {
    type: "Creature",
    hasSummoningSickness: true,
    isTapped: false,
    id: "f2e73e06-d708-41dc-b20c-1f71651230e1",
    name: "Mogis's Warhound",
    scryfall_uri:
      "https://scryfall.com/card/jou/104/mogiss-warhound?utm_source=api",
    image_uris: {
      small:
        "https://c1.scryfall.com/file/scryfall-cards/small/front/f/2/f2e73e06-d708-41dc-b20c-1f71651230e1.jpg?1593096042",
      normal:
        "https://c1.scryfall.com/file/scryfall-cards/normal/front/f/2/f2e73e06-d708-41dc-b20c-1f71651230e1.jpg?1593096042",
      large:
        "https://c1.scryfall.com/file/scryfall-cards/large/front/f/2/f2e73e06-d708-41dc-b20c-1f71651230e1.jpg?1593096042",
      png: "https://c1.scryfall.com/file/scryfall-cards/png/front/f/2/f2e73e06-d708-41dc-b20c-1f71651230e1.png?1593096042",
      art_crop:
        "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/2/f2e73e06-d708-41dc-b20c-1f71651230e1.jpg?1593096042",
      border_crop:
        "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/2/f2e73e06-d708-41dc-b20c-1f71651230e1.jpg?1593096042",
    },
    cmc: 2,

    power: 2,
    toughness: 2,
    keywords: ["Bestow"],

    rulings_uri:
      "https://api.scryfall.com/cards/f2e73e06-d708-41dc-b20c-1f71651230e1/rulings",

    rarity: "uncommon",
  },
 
    {
      type: "Creature",
      hasSummoningSickness: true,
      isTapped: false,
      id: "1eb6eda2-e3df-440a-8900-8310f11db6e9",
      name: "Ragemonger",
      scryfall_uri:
        "https://scryfall.com/card/bng/153/ragemonger?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/1/e/1eb6eda2-e3df-440a-8900-8310f11db6e9.jpg?1593092810",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/1/e/1eb6eda2-e3df-440a-8900-8310f11db6e9.jpg?1593092810",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/1/e/1eb6eda2-e3df-440a-8900-8310f11db6e9.jpg?1593092810",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/1/e/1eb6eda2-e3df-440a-8900-8310f11db6e9.png?1593092810",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/1/e/1eb6eda2-e3df-440a-8900-8310f11db6e9.jpg?1593092810",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/1/e/1eb6eda2-e3df-440a-8900-8310f11db6e9.jpg?1593092810",
      },
      cmc: 3,

      power: 2,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/1eb6eda2-e3df-440a-8900-8310f11db6e9/rulings",

      rarity: "uncommon",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "55a8e1ce-e394-48d6-938a-aa76c0273abe",
      name: "Zerapa Minotaur",
      scryfall_uri:
        "https://scryfall.com/card/pcy/108/zerapa-minotaur?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/5/5/55a8e1ce-e394-48d6-938a-aa76c0273abe.jpg?1562910719",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/5/55a8e1ce-e394-48d6-938a-aa76c0273abe.jpg?1562910719",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/5/5/55a8e1ce-e394-48d6-938a-aa76c0273abe.jpg?1562910719",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/5/5/55a8e1ce-e394-48d6-938a-aa76c0273abe.png?1562910719",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/5/55a8e1ce-e394-48d6-938a-aa76c0273abe.jpg?1562910719",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/5/55a8e1ce-e394-48d6-938a-aa76c0273abe.jpg?1562910719",
      },
      cmc: 4,

      power: 3,
      toughness: 3,
      keywords: ["First strike"],
      rulings_uri:
        "https://api.scryfall.com/cards/55a8e1ce-e394-48d6-938a-aa76c0273abe/rulings",
      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "87573fa7-5593-4810-bc4a-0caa55577be5",
      name: "Gorehorn Minotaurs",
      scryfall_uri:
        "https://scryfall.com/card/e01/49/gorehorn-minotaurs?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/8/7/87573fa7-5593-4810-bc4a-0caa55577be5.jpg?1592765676",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/7/87573fa7-5593-4810-bc4a-0caa55577be5.jpg?1592765676",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/8/7/87573fa7-5593-4810-bc4a-0caa55577be5.jpg?1592765676",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/8/7/87573fa7-5593-4810-bc4a-0caa55577be5.png?1592765676",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/7/87573fa7-5593-4810-bc4a-0caa55577be5.jpg?1592765676",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/7/87573fa7-5593-4810-bc4a-0caa55577be5.jpg?1592765676",
      },
      cmc: 4,

      power: 3,
      toughness: 3,
      keywords: ["Bloodthirst"],

      rulings_uri:
        "https://api.scryfall.com/cards/87573fa7-5593-4810-bc4a-0caa55577be5/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "0bb37d02-3e99-433a-ad3a-3c1fce50f0f0",
      name: "Anaba Spirit Crafter",
      scryfall_uri:
        "https://scryfall.com/card/me3/87/anaba-spirit-crafter?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/0/b/0bb37d02-3e99-433a-ad3a-3c1fce50f0f0.jpg?1562897430",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/0/b/0bb37d02-3e99-433a-ad3a-3c1fce50f0f0.jpg?1562897430",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/0/b/0bb37d02-3e99-433a-ad3a-3c1fce50f0f0.jpg?1562897430",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/0/b/0bb37d02-3e99-433a-ad3a-3c1fce50f0f0.png?1562897430",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/b/0bb37d02-3e99-433a-ad3a-3c1fce50f0f0.jpg?1562897430",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/0/b/0bb37d02-3e99-433a-ad3a-3c1fce50f0f0.jpg?1562897430",
      },
      cmc: 4,
      power: 1,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/0bb37d02-3e99-433a-ad3a-3c1fce50f0f0/rulings",

      rarity: "common",
    },
    {
      type: "Planeswalker",
      id: "f17103dd-f31b-4f6e-b2ea-4ea91815bdd6",
      name: "Angrath, Minotaur Pirate",
      scryfall_uri:
        "https://scryfall.com/card/rix/201/angrath-minotaur-pirate?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/f/1/f17103dd-f31b-4f6e-b2ea-4ea91815bdd6.jpg?1555041190",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/f/1/f17103dd-f31b-4f6e-b2ea-4ea91815bdd6.jpg?1555041190",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/f/1/f17103dd-f31b-4f6e-b2ea-4ea91815bdd6.jpg?1555041190",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/f/1/f17103dd-f31b-4f6e-b2ea-4ea91815bdd6.png?1555041190",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/f/1/f17103dd-f31b-4f6e-b2ea-4ea91815bdd6.jpg?1555041190",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/f/1/f17103dd-f31b-4f6e-b2ea-4ea91815bdd6.jpg?1555041190",
      },
      cmc: 6,

      loyalty: 5,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/f17103dd-f31b-4f6e-b2ea-4ea91815bdd6/rulings",

      rarity: "mythic",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "c3b633bf-a77e-4b78-b729-a83896abf17c",
      name: "Bloodrage Brawler",
      scryfall_uri:
        "https://scryfall.com/card/jmp/296/bloodrage-brawler?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/c/3/c3b633bf-a77e-4b78-b729-a83896abf17c.jpg?1600702025",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/3/c3b633bf-a77e-4b78-b729-a83896abf17c.jpg?1600702025",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/c/3/c3b633bf-a77e-4b78-b729-a83896abf17c.jpg?1600702025",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/c/3/c3b633bf-a77e-4b78-b729-a83896abf17c.png?1600702025",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/3/c3b633bf-a77e-4b78-b729-a83896abf17c.jpg?1600702025",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/3/c3b633bf-a77e-4b78-b729-a83896abf17c.jpg?1600702025",
      },
      cmc: 2,

      power: 4,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/c3b633bf-a77e-4b78-b729-a83896abf17c/rulings",

      rarity: "uncommon",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "6c43e449-acf2-4e94-b7cf-8c84d70191da",
      name: "Boros Battleshaper",
      scryfall_uri:
        "https://scryfall.com/card/dgm/58/boros-battleshaper?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/6/c/6c43e449-acf2-4e94-b7cf-8c84d70191da.jpg?1562915094",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/6/c/6c43e449-acf2-4e94-b7cf-8c84d70191da.jpg?1562915094",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/6/c/6c43e449-acf2-4e94-b7cf-8c84d70191da.jpg?1562915094",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/6/c/6c43e449-acf2-4e94-b7cf-8c84d70191da.png?1562915094",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/6/c/6c43e449-acf2-4e94-b7cf-8c84d70191da.jpg?1562915094",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/6/c/6c43e449-acf2-4e94-b7cf-8c84d70191da.jpg?1562915094",
      },
      cmc: 7,

      power: 5,
      toughness: 5,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/6c43e449-acf2-4e94-b7cf-8c84d70191da/rulings",

      rarity: "rare",
    },
    {
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
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "4d6cce01-a0cb-4059-a0ad-fbf7d9b998b8",
      name: "Felhide Petrifier",
      scryfall_uri:
        "https://scryfall.com/card/jou/70/felhide-petrifier?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/4/d/4d6cce01-a0cb-4059-a0ad-fbf7d9b998b8.jpg?1593095714",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/4/d/4d6cce01-a0cb-4059-a0ad-fbf7d9b998b8.jpg?1593095714",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/4/d/4d6cce01-a0cb-4059-a0ad-fbf7d9b998b8.jpg?1593095714",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/4/d/4d6cce01-a0cb-4059-a0ad-fbf7d9b998b8.png?1593095714",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/4/d/4d6cce01-a0cb-4059-a0ad-fbf7d9b998b8.jpg?1593095714",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/4/d/4d6cce01-a0cb-4059-a0ad-fbf7d9b998b8.jpg?1593095714",
      },
      cmc: 3,

      power: 2,
      toughness: 3,
      keywords: ["Deathtouch"],

      rulings_uri:
        "https://api.scryfall.com/cards/4d6cce01-a0cb-4059-a0ad-fbf7d9b998b8/rulings",

      rarity: "uncommon",
    },
    {
      type: "Sorcery",
      id: "be522ae8-9cf4-4c63-9a1c-0010d482c00a",
      name: "Flurry of Horns",
      scryfall_uri:
        "https://scryfall.com/card/jmp/321/flurry-of-horns?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/b/e/be522ae8-9cf4-4c63-9a1c-0010d482c00a.jpg?1601077696",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/b/e/be522ae8-9cf4-4c63-9a1c-0010d482c00a.jpg?1601077696",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/b/e/be522ae8-9cf4-4c63-9a1c-0010d482c00a.jpg?1601077696",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/b/e/be522ae8-9cf4-4c63-9a1c-0010d482c00a.png?1601077696",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/b/e/be522ae8-9cf4-4c63-9a1c-0010d482c00a.jpg?1601077696",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/b/e/be522ae8-9cf4-4c63-9a1c-0010d482c00a.jpg?1601077696",
      },
      cmc: 5,
      keywords: [],
      rulings_uri:
        "https://api.scryfall.com/cards/be522ae8-9cf4-4c63-9a1c-0010d482c00a/rulings",

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
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "da42df13-eded-48e2-ad1a-ff74d718ce3c",
      name: "Kazuul Warlord",
      scryfall_uri:
        "https://scryfall.com/card/zen/134/kazuul-warlord?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/d/a/da42df13-eded-48e2-ad1a-ff74d718ce3c.jpg?1562617294",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/d/a/da42df13-eded-48e2-ad1a-ff74d718ce3c.jpg?1562617294",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/d/a/da42df13-eded-48e2-ad1a-ff74d718ce3c.jpg?1562617294",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/d/a/da42df13-eded-48e2-ad1a-ff74d718ce3c.png?1562617294",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/d/a/da42df13-eded-48e2-ad1a-ff74d718ce3c.jpg?1562617294",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/d/a/da42df13-eded-48e2-ad1a-ff74d718ce3c.jpg?1562617294",
      },
      cmc: 5,

      power: 3,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/da42df13-eded-48e2-ad1a-ff74d718ce3c/rulings",

      rarity: "rare",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: false,
      id: "78791fc6-054f-45eb-b8b0-28f2512d72b6",
      name: "Kragma Warcaller",
      scryfall_uri:
        "https://scryfall.com/card/ths/195/kragma-warcaller?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/7/8/78791fc6-054f-45eb-b8b0-28f2512d72b6.jpg?1562820128",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/7/8/78791fc6-054f-45eb-b8b0-28f2512d72b6.jpg?1562820128",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/7/8/78791fc6-054f-45eb-b8b0-28f2512d72b6.jpg?1562820128",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/7/8/78791fc6-054f-45eb-b8b0-28f2512d72b6.png?1562820128",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/7/8/78791fc6-054f-45eb-b8b0-28f2512d72b6.jpg?1562820128",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/7/8/78791fc6-054f-45eb-b8b0-28f2512d72b6.jpg?1562820128",
      },
      cmc: 5,

      power: 2,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/78791fc6-054f-45eb-b8b0-28f2512d72b6/rulings",

      rarity: "uncommon",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "9dca75a1-443d-4f8e-b12b-2aada3a8e3e4",
      name: "Minotaur Abomination",
      scryfall_uri:
        "https://scryfall.com/card/m14/107/minotaur-abomination?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/9/d/9dca75a1-443d-4f8e-b12b-2aada3a8e3e4.jpg?1562832893",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/d/9dca75a1-443d-4f8e-b12b-2aada3a8e3e4.jpg?1562832893",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/9/d/9dca75a1-443d-4f8e-b12b-2aada3a8e3e4.jpg?1562832893",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/9/d/9dca75a1-443d-4f8e-b12b-2aada3a8e3e4.png?1562832893",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/9/d/9dca75a1-443d-4f8e-b12b-2aada3a8e3e4.jpg?1562832893",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/9/d/9dca75a1-443d-4f8e-b12b-2aada3a8e3e4.jpg?1562832893",
      },
      cmc: 6,
      power: 4,
      toughness: 6,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/9dca75a1-443d-4f8e-b12b-2aada3a8e3e4/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: false,
      id: "e22959dc-8759-454e-80b9-623a799af354",
      name: "Minotaur Aggressor",
      scryfall_uri:
        "https://scryfall.com/card/rtr/100/minotaur-aggressor?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/e/2/e22959dc-8759-454e-80b9-623a799af354.jpg?1562794511",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/2/e22959dc-8759-454e-80b9-623a799af354.jpg?1562794511",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/e/2/e22959dc-8759-454e-80b9-623a799af354.jpg?1562794511",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/e/2/e22959dc-8759-454e-80b9-623a799af354.png?1562794511",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/2/e22959dc-8759-454e-80b9-623a799af354.jpg?1562794511",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/2/e22959dc-8759-454e-80b9-623a799af354.jpg?1562794511",
      },
      cmc: 7,
      power: 6,
      toughness: 2,
      keywords: ["First strike", "Haste"],

      rulings_uri:
        "https://api.scryfall.com/cards/e22959dc-8759-454e-80b9-623a799af354/rulings",

      rarity: "uncommon",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "708e1979-902b-410a-ae46-3fd1d2acc31d",
      name: "Ondu Champion",
      scryfall_uri:
        "https://scryfall.com/card/bfz/149/ondu-champion?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/7/0/708e1979-902b-410a-ae46-3fd1d2acc31d.jpg?1562921519",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/7/0/708e1979-902b-410a-ae46-3fd1d2acc31d.jpg?1562921519",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/7/0/708e1979-902b-410a-ae46-3fd1d2acc31d.jpg?1562921519",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/7/0/708e1979-902b-410a-ae46-3fd1d2acc31d.png?1562921519",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/7/0/708e1979-902b-410a-ae46-3fd1d2acc31d.jpg?1562921519",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/7/0/708e1979-902b-410a-ae46-3fd1d2acc31d.jpg?1562921519",
      },
      cmc: 4,

      power: 4,
      toughness: 3,
      keywords: ["Rally"],

      rulings_uri:
        "https://api.scryfall.com/cards/708e1979-902b-410a-ae46-3fd1d2acc31d/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "20fea3f6-e64a-4964-86bc-c0b8fef0ab25",
      name: "Ordruun Veteran",
      scryfall_uri:
        "https://scryfall.com/card/gtc/184/ordruun-veteran?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/2/0/20fea3f6-e64a-4964-86bc-c0b8fef0ab25.jpg?1561819307",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/2/0/20fea3f6-e64a-4964-86bc-c0b8fef0ab25.jpg?1561819307",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/2/0/20fea3f6-e64a-4964-86bc-c0b8fef0ab25.jpg?1561819307",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/2/0/20fea3f6-e64a-4964-86bc-c0b8fef0ab25.png?1561819307",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/2/0/20fea3f6-e64a-4964-86bc-c0b8fef0ab25.jpg?1561819307",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/2/0/20fea3f6-e64a-4964-86bc-c0b8fef0ab25.jpg?1561819307",
      },
      cmc: 4,

      power: 3,
      toughness: 1,
      keywords: ["Battalion"],

      rulings_uri:
        "https://api.scryfall.com/cards/20fea3f6-e64a-4964-86bc-c0b8fef0ab25/rulings",

      rarity: "uncommon",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "568a31c0-799b-48b6-a91c-95d176b22670",
      name: "Rageblood Shaman",
      scryfall_uri:
        "https://scryfall.com/card/jmp/357/rageblood-shaman?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/5/6/568a31c0-799b-48b6-a91c-95d176b22670.jpg?1601078490",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/6/568a31c0-799b-48b6-a91c-95d176b22670.jpg?1601078490",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/5/6/568a31c0-799b-48b6-a91c-95d176b22670.jpg?1601078490",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/5/6/568a31c0-799b-48b6-a91c-95d176b22670.png?1601078490",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/6/568a31c0-799b-48b6-a91c-95d176b22670.jpg?1601078490",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/6/568a31c0-799b-48b6-a91c-95d176b22670.jpg?1601078490",
      },
      cmc: 3,

      power: 2,
      toughness: 3,
      keywords: ["Trample"],

      rulings_uri:
        "https://api.scryfall.com/cards/568a31c0-799b-48b6-a91c-95d176b22670/rulings",

      rarity: "rare",
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
      hasSummoningSickness: false,
      id: "9d311f5f-ad68-48d4-aa5d-66916034ddb9",
      name: "Shatterskull Minotaur",
      scryfall_uri:
        "https://scryfall.com/card/znr/160/shatterskull-minotaur?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/9/d/9d311f5f-ad68-48d4-aa5d-66916034ddb9.jpg?1604197791",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/d/9d311f5f-ad68-48d4-aa5d-66916034ddb9.jpg?1604197791",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/9/d/9d311f5f-ad68-48d4-aa5d-66916034ddb9.jpg?1604197791",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/9/d/9d311f5f-ad68-48d4-aa5d-66916034ddb9.png?1604197791",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/9/d/9d311f5f-ad68-48d4-aa5d-66916034ddb9.jpg?1604197791",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/9/d/9d311f5f-ad68-48d4-aa5d-66916034ddb9.jpg?1604197791",
      },
      cmc: 6,

      power: 5,
      toughness: 4,
      keywords: ["Haste"],

      rulings_uri:
        "https://api.scryfall.com/cards/9d311f5f-ad68-48d4-aa5d-66916034ddb9/rulings",

      rarity: "uncommon",
    },
    {
      type: "Creature",
      isTapped: false,
      hasSummoningSickness: true,
      id: "c1778f37-af01-4f8c-ab9d-a4c60abf7e78",
      name: "Tahngarth, Talruum Hero",
      scryfall_uri:
        "https://scryfall.com/card/pls/74/tahngarth-talruum-hero?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/c/1/c1778f37-af01-4f8c-ab9d-a4c60abf7e78.jpg?1586450735",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/1/c1778f37-af01-4f8c-ab9d-a4c60abf7e78.jpg?1586450735",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/c/1/c1778f37-af01-4f8c-ab9d-a4c60abf7e78.jpg?1586450735",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/c/1/c1778f37-af01-4f8c-ab9d-a4c60abf7e78.png?1586450735",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/1/c1778f37-af01-4f8c-ab9d-a4c60abf7e78.jpg?1586450735",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/1/c1778f37-af01-4f8c-ab9d-a4c60abf7e78.jpg?1586450735",
      },
      cmc: 5,

      power: 4,
      toughness: 4,
      keywords: ["Vigilance"],

      rulings_uri:
        "https://api.scryfall.com/cards/c1778f37-af01-4f8c-ab9d-a4c60abf7e78/rulings",

      rarity: "rare",
    },
    {
      type: "Sorcery",
      id: "7e5d19fa-0f12-41cb-90a8-c027edbc893b",
      name: "Consuming Rage",
      scryfall_uri:
        "https://scryfall.com/card/tbth/6/consuming-rage?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/7/e/7e5d19fa-0f12-41cb-90a8-c027edbc893b.jpg?1562639885",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/7/e/7e5d19fa-0f12-41cb-90a8-c027edbc893b.jpg?1562639885",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/7/e/7e5d19fa-0f12-41cb-90a8-c027edbc893b.jpg?1562639885",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/7/e/7e5d19fa-0f12-41cb-90a8-c027edbc893b.png?1562639885",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/7/e/7e5d19fa-0f12-41cb-90a8-c027edbc893b.jpg?1562639885",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/7/e/7e5d19fa-0f12-41cb-90a8-c027edbc893b.jpg?1562639885",
      },
      cmc: 0,

      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/7e5d19fa-0f12-41cb-90a8-c027edbc893b/rulings",

      rarity: "common",
    },
    {
      type: "Sorcery",
      id: "95e0a522-2395-438a-83bc-ea092e4286c3",
      name: "Descend on the Prey",
      scryfall_uri:
        "https://scryfall.com/card/tbth/7/descend-on-the-prey?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/9/5/95e0a522-2395-438a-83bc-ea092e4286c3.jpg?1562639935",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/5/95e0a522-2395-438a-83bc-ea092e4286c3.jpg?1562639935",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/9/5/95e0a522-2395-438a-83bc-ea092e4286c3.jpg?1562639935",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/9/5/95e0a522-2395-438a-83bc-ea092e4286c3.png?1562639935",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/9/5/95e0a522-2395-438a-83bc-ea092e4286c3.jpg?1562639935",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/9/5/95e0a522-2395-438a-83bc-ea092e4286c3.jpg?1562639935",
      },
      cmc: 0,

      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/95e0a522-2395-438a-83bc-ea092e4286c3/rulings",

      rarity: "common",
    },
    {
      type: "Sorcery",
      id: "661e8959-4c63-439b-8cbf-837f84ad3e57",
      name: "Intervention of Keranos",
      scryfall_uri:
        "https://scryfall.com/card/tbth/8/intervention-of-keranos?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/6/6/661e8959-4c63-439b-8cbf-837f84ad3e57.jpg?1562639836",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/6/6/661e8959-4c63-439b-8cbf-837f84ad3e57.jpg?1562639836",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/6/6/661e8959-4c63-439b-8cbf-837f84ad3e57.jpg?1562639836",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/6/6/661e8959-4c63-439b-8cbf-837f84ad3e57.png?1562639836",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/6/6/661e8959-4c63-439b-8cbf-837f84ad3e57.jpg?1562639836",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/6/6/661e8959-4c63-439b-8cbf-837f84ad3e57.jpg?1562639836",
      },
      cmc: 0,

      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/661e8959-4c63-439b-8cbf-837f84ad3e57/rulings",

      rarity: "common",
    },
    {
      type: "Sorcery",
      id: "c58bacd4-e84b-4c73-802f-5f65e5c94a46",
      name: "Touch of the Horned God",
      scryfall_uri:
        "https://scryfall.com/card/tbth/9/touch-of-the-horned-god?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/c/5/c58bacd4-e84b-4c73-802f-5f65e5c94a46.jpg?1562640033",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/5/c58bacd4-e84b-4c73-802f-5f65e5c94a46.jpg?1562640033",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/c/5/c58bacd4-e84b-4c73-802f-5f65e5c94a46.jpg?1562640033",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/c/5/c58bacd4-e84b-4c73-802f-5f65e5c94a46.png?1562640033",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/5/c58bacd4-e84b-4c73-802f-5f65e5c94a46.jpg?1562640033",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/5/c58bacd4-e84b-4c73-802f-5f65e5c94a46.jpg?1562640033",
      },
      cmc: 0,

      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/c58bacd4-e84b-4c73-802f-5f65e5c94a46/rulings",

      rarity: "common",
    },
    {
      type: "Enchantment",
      id: "db6b3f71-d833-4548-8d66-1d51da08d8b9",
      name: "Unquenchable Fury",
      scryfall_uri:
        "https://scryfall.com/card/nec/23/unquenchable-fury?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/d/b/db6b3f71-d833-4548-8d66-1d51da08d8b9.jpg?1651655388",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/d/b/db6b3f71-d833-4548-8d66-1d51da08d8b9.jpg?1651655388",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/d/b/db6b3f71-d833-4548-8d66-1d51da08d8b9.jpg?1651655388",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/d/b/db6b3f71-d833-4548-8d66-1d51da08d8b9.png?1651655388",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/d/b/db6b3f71-d833-4548-8d66-1d51da08d8b9.jpg?1651655388",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/d/b/db6b3f71-d833-4548-8d66-1d51da08d8b9.jpg?1651655388",
      },
      cmc: 3,

      keywords: ["Enchant"],

      rulings_uri:
        "https://api.scryfall.com/cards/db6b3f71-d833-4548-8d66-1d51da08d8b9/rulings",

      rarity: "rare",
    },
  ];

  const rare: ScryfallCardType[] = [
    {
      type: "Planeswalker",
      onDeath: () => {
        game.addNewMessage(
          <div>
            <p>NOOOOO!!!</p>
            <p>
              Angrath destroys all creatures that dealt damage to him while he
              was on the battlefield.
            </p>
          </div>
        );
        game.accelerateGame();
      },
      id: "aa3a4cb5-945e-4caf-8a18-1ef977879fe8",
      name: "Angrath, Captain of Chaos",
      scryfall_uri:
        "https://scryfall.com/card/war/227/angrath-captain-of-chaos?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/a/a/aa3a4cb5-945e-4caf-8a18-1ef977879fe8.jpg?1582053147",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/a/aa3a4cb5-945e-4caf-8a18-1ef977879fe8.jpg?1582053147",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/a/a/aa3a4cb5-945e-4caf-8a18-1ef977879fe8.jpg?1582053147",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/a/a/aa3a4cb5-945e-4caf-8a18-1ef977879fe8.png?1582053147",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/a/aa3a4cb5-945e-4caf-8a18-1ef977879fe8.jpg?1582053147",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/a/aa3a4cb5-945e-4caf-8a18-1ef977879fe8.jpg?1582053147",
      },
      cmc: 4,

      loyalty: 5,
      keywords: ["Amass"],

      rulings_uri:
        "https://api.scryfall.com/cards/aa3a4cb5-945e-4caf-8a18-1ef977879fe8/rulings",

      rarity: "uncommon",
    },
    {
      onEnter: () => {
        game.addNewMessage(
          <PlaneswalkerMessage
            turns={[
              "-3 Ability Activates on your best creature.",
              "+1 Ability Activates.",
              "+1 Ability Activates for a second time.",
              "-8 Ability Activates and Angrath is removed from the game.",
            ]}
          ></PlaneswalkerMessage>
        );
      },
      onDeath: () => {
        game.addNewMessage(
          "NOOOOO!!! Angrath destroys all creatures that dealt damage to him while he was on the battlefield."
        );
      },
      type: "Planeswalker",
      id: "a4d76d03-4fcf-42f8-8c2e-ad6b03d58677",
      name: "Angrath, the Flame-Chained",
      scryfall_uri:
        "https://scryfall.com/card/rix/152/angrath-the-flame-chained?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/a/4/a4d76d03-4fcf-42f8-8c2e-ad6b03d58677.jpg?1555040781",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/4/a4d76d03-4fcf-42f8-8c2e-ad6b03d58677.jpg?1555040781",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/a/4/a4d76d03-4fcf-42f8-8c2e-ad6b03d58677.jpg?1555040781",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/a/4/a4d76d03-4fcf-42f8-8c2e-ad6b03d58677.png?1555040781",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/4/a4d76d03-4fcf-42f8-8c2e-ad6b03d58677.jpg?1555040781",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/4/a4d76d03-4fcf-42f8-8c2e-ad6b03d58677.jpg?1555040781",
      },
      cmc: 5,

      loyalty: 4,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/a4d76d03-4fcf-42f8-8c2e-ad6b03d58677/rulings",

      rarity: "mythic",
    },
    {
      type: "Enchantment",
      id: "ea00d757-0ea9-4123-89f6-0a437d7fd33d",
      name: "Anthem of Rakdos",
      onEnter: () => {
        game.addNewMessage(
          "The minotaurs seem to be going into some sort of frenzied rage. Starting next turn Hellbent will become active."
        );
      },
      scryfall_uri:
        "https://scryfall.com/card/dis/102/anthem-of-rakdos?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/e/a/ea00d757-0ea9-4123-89f6-0a437d7fd33d.jpg?1593273540",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/a/ea00d757-0ea9-4123-89f6-0a437d7fd33d.jpg?1593273540",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/e/a/ea00d757-0ea9-4123-89f6-0a437d7fd33d.jpg?1593273540",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/e/a/ea00d757-0ea9-4123-89f6-0a437d7fd33d.png?1593273540",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/a/ea00d757-0ea9-4123-89f6-0a437d7fd33d.jpg?1593273540",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/a/ea00d757-0ea9-4123-89f6-0a437d7fd33d.jpg?1593273540",
      },
      cmc: 5,

      keywords: ["Hellbent"],

      rulings_uri:
        "https://api.scryfall.com/cards/ea00d757-0ea9-4123-89f6-0a437d7fd33d/rulings",

      rarity: "rare",
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
      hasSummoningSickness: true,
      isTapped: false,
      id: "5e179f0d-2965-44e4-8483-67b330a8608c",
      name: "Blaze Commando",
      scryfall_uri:
        "https://scryfall.com/card/dgm/56/blaze-commando?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/5/e/5e179f0d-2965-44e4-8483-67b330a8608c.jpg?1562912362",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/e/5e179f0d-2965-44e4-8483-67b330a8608c.jpg?1562912362",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/5/e/5e179f0d-2965-44e4-8483-67b330a8608c.jpg?1562912362",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/5/e/5e179f0d-2965-44e4-8483-67b330a8608c.png?1562912362",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/e/5e179f0d-2965-44e4-8483-67b330a8608c.jpg?1562912362",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/e/5e179f0d-2965-44e4-8483-67b330a8608c.jpg?1562912362",
      },
      cmc: 5,

      power: 5,
      toughness: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/5e179f0d-2965-44e4-8483-67b330a8608c/rulings",

      rarity: "uncommon",
    },
    {
      type: "Creature",
      hasSummoningSickness: true,
      isTapped: false,
      id: "cdc5666c-6f27-4ae9-8f0e-17e2a44bc646",
      name: "Boros Reckoner",
      scryfall_uri:
        "https://scryfall.com/card/mm3/206/boros-reckoner?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/c/d/cdc5666c-6f27-4ae9-8f0e-17e2a44bc646.jpg?1593814781",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/d/cdc5666c-6f27-4ae9-8f0e-17e2a44bc646.jpg?1593814781",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/c/d/cdc5666c-6f27-4ae9-8f0e-17e2a44bc646.jpg?1593814781",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/c/d/cdc5666c-6f27-4ae9-8f0e-17e2a44bc646.png?1593814781",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/d/cdc5666c-6f27-4ae9-8f0e-17e2a44bc646.jpg?1593814781",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/d/cdc5666c-6f27-4ae9-8f0e-17e2a44bc646.jpg?1593814781",
      },
      cmc: 3,

      power: 3,
      toughness: 3,

      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/cdc5666c-6f27-4ae9-8f0e-17e2a44bc646/rulings",

      rarity: "rare",
    },
    {
      type: "Artifact",
      id: "513d4c36-6ad4-4ee9-b161-3136eb59504f",
      name: "Coat of Arms",
      scryfall_uri:
        "https://scryfall.com/card/dds/58/coat-of-arms?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/5/1/513d4c36-6ad4-4ee9-b161-3136eb59504f.jpg?1592761864",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/1/513d4c36-6ad4-4ee9-b161-3136eb59504f.jpg?1592761864",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/5/1/513d4c36-6ad4-4ee9-b161-3136eb59504f.jpg?1592761864",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/5/1/513d4c36-6ad4-4ee9-b161-3136eb59504f.png?1592761864",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/1/513d4c36-6ad4-4ee9-b161-3136eb59504f.jpg?1592761864",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/1/513d4c36-6ad4-4ee9-b161-3136eb59504f.jpg?1592761864",
      },
      cmc: 5,

      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/513d4c36-6ad4-4ee9-b161-3136eb59504f/rulings",

      rarity: "rare",
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
      type: "Sorcery",
      id: "cf0f58ac-88ef-445c-a12b-0bb1cf482298",
      name: "Deathbellow War Cry",
      scryfall_uri:
        "https://scryfall.com/card/thb/294/deathbellow-war-cry?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/c/f/cf0f58ac-88ef-445c-a12b-0bb1cf482298.jpg?1582021227",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/f/cf0f58ac-88ef-445c-a12b-0bb1cf482298.jpg?1582021227",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/c/f/cf0f58ac-88ef-445c-a12b-0bb1cf482298.jpg?1582021227",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/c/f/cf0f58ac-88ef-445c-a12b-0bb1cf482298.png?1582021227",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/f/cf0f58ac-88ef-445c-a12b-0bb1cf482298.jpg?1582021227",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/f/cf0f58ac-88ef-445c-a12b-0bb1cf482298.jpg?1582021227",
      },
      cmc: 8,

      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/cf0f58ac-88ef-445c-a12b-0bb1cf482298/rulings",

      rarity: "rare",
    },
    {
      type: "Artifact",
      id: "8d2ff269-ee43-4684-84a4-ecb4aed3d960",
      name: "Didgeridoo",
      scryfall_uri:
        "https://scryfall.com/card/me3/194/didgeridoo?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/8/d/8d2ff269-ee43-4684-84a4-ecb4aed3d960.jpg?1562924800",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/d/8d2ff269-ee43-4684-84a4-ecb4aed3d960.jpg?1562924800",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/8/d/8d2ff269-ee43-4684-84a4-ecb4aed3d960.jpg?1562924800",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/8/d/8d2ff269-ee43-4684-84a4-ecb4aed3d960.png?1562924800",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/d/8d2ff269-ee43-4684-84a4-ecb4aed3d960.jpg?1562924800",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/d/8d2ff269-ee43-4684-84a4-ecb4aed3d960.jpg?1562924800",
      },
      cmc: 1,

      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/8d2ff269-ee43-4684-84a4-ecb4aed3d960/rulings",

      rarity: "uncommon",
    },
    {
      type: "Creature",
      hasSummoningSickness: true,
      isTapped: false,
      id: "c11f5d27-37f3-430a-833c-84e249b5e744",
      name: "Dreamshaper Shaman",
      scryfall_uri:
        "https://scryfall.com/card/2x2/108/dreamshaper-shaman?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/c/1/c11f5d27-37f3-430a-833c-84e249b5e744.jpg?1655824300",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/1/c11f5d27-37f3-430a-833c-84e249b5e744.jpg?1655824300",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/c/1/c11f5d27-37f3-430a-833c-84e249b5e744.jpg?1655824300",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/c/1/c11f5d27-37f3-430a-833c-84e249b5e744.png?1655824300",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/1/c11f5d27-37f3-430a-833c-84e249b5e744.jpg?1655824300",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/1/c11f5d27-37f3-430a-833c-84e249b5e744.jpg?1655824300",
      },
      cmc: 6,

      power: 5,
      toughness: 4,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/c11f5d27-37f3-430a-833c-84e249b5e744/rulings",

      rarity: "uncommon",
    },
    {
      type: "Creature",
      hasSummoningSickness: true,
      isTapped: false,
      id: "732d0770-fc8a-4319-8219-8d68b1a39af0",
      name: "Etherium-Horn Sorcerer",
      scryfall_uri:
        "https://scryfall.com/card/c17/171/etherium-horn-sorcerer?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/7/3/732d0770-fc8a-4319-8219-8d68b1a39af0.jpg?1562612504",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/7/3/732d0770-fc8a-4319-8219-8d68b1a39af0.jpg?1562612504",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/7/3/732d0770-fc8a-4319-8219-8d68b1a39af0.jpg?1562612504",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/7/3/732d0770-fc8a-4319-8219-8d68b1a39af0.png?1562612504",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/7/3/732d0770-fc8a-4319-8219-8d68b1a39af0.jpg?1562612504",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/7/3/732d0770-fc8a-4319-8219-8d68b1a39af0.jpg?1562612504",
      },
      cmc: 6,

      power: 3,
      toughness: 6,
      keywords: ["Cascade"],

      rulings_uri:
        "https://api.scryfall.com/cards/732d0770-fc8a-4319-8219-8d68b1a39af0/rulings",

      rarity: "rare",
    },
    {
      type: "Creature",
      hasSummoningSickness: true,
      isTapped: false,
      id: "bbbbe4ce-d6a6-428d-aeee-1c316f358777",
      name: "Felhide Spiritbinder",
      scryfall_uri:
        "https://scryfall.com/card/bng/96/felhide-spiritbinder?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/b/b/bbbbe4ce-d6a6-428d-aeee-1c316f358777.jpg?1593092229",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/b/b/bbbbe4ce-d6a6-428d-aeee-1c316f358777.jpg?1593092229",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/b/b/bbbbe4ce-d6a6-428d-aeee-1c316f358777.jpg?1593092229",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/b/b/bbbbe4ce-d6a6-428d-aeee-1c316f358777.png?1593092229",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/b/b/bbbbe4ce-d6a6-428d-aeee-1c316f358777.jpg?1593092229",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/b/b/bbbbe4ce-d6a6-428d-aeee-1c316f358777.jpg?1593092229",
      },
      cmc: 4,

      power: 3,
      toughness: 4,
      keywords: ["Inspired"],
      rulings_uri:
        "https://api.scryfall.com/cards/bbbbe4ce-d6a6-428d-aeee-1c316f358777/rulings",

      rarity: "rare",
    },
    {
      type: "Enchantment",
      id: "8f7005fd-5917-4f7d-9a7d-7ccc044d0f87",
      name: "Ferocity of the Wilds",
      scryfall_uri:
        "https://scryfall.com/card/eld/123/ferocity-of-the-wilds?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/8/f/8f7005fd-5917-4f7d-9a7d-7ccc044d0f87.jpg?1572490351",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/f/8f7005fd-5917-4f7d-9a7d-7ccc044d0f87.jpg?1572490351",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/8/f/8f7005fd-5917-4f7d-9a7d-7ccc044d0f87.jpg?1572490351",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/8/f/8f7005fd-5917-4f7d-9a7d-7ccc044d0f87.png?1572490351",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/f/8f7005fd-5917-4f7d-9a7d-7ccc044d0f87.jpg?1572490351",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/f/8f7005fd-5917-4f7d-9a7d-7ccc044d0f87.jpg?1572490351",
      },
      cmc: 3,

      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/8f7005fd-5917-4f7d-9a7d-7ccc044d0f87/rulings",

      rarity: "uncommon",
    },
    {
      type: "Creature",
      hasSummoningSickness: true,
      isTapped: false,
      id: "4d5edf4f-5695-42fc-9e57-c4faef60fbc3",
      name: "Firesong and Sunspeaker",
      scryfall_uri:
        "https://scryfall.com/card/2x2/215/firesong-and-sunspeaker?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/4/d/4d5edf4f-5695-42fc-9e57-c4faef60fbc3.jpg?1655930647",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/4/d/4d5edf4f-5695-42fc-9e57-c4faef60fbc3.jpg?1655930647",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/4/d/4d5edf4f-5695-42fc-9e57-c4faef60fbc3.jpg?1655930647",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/4/d/4d5edf4f-5695-42fc-9e57-c4faef60fbc3.png?1655930647",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/4/d/4d5edf4f-5695-42fc-9e57-c4faef60fbc3.jpg?1655930647",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/4/d/4d5edf4f-5695-42fc-9e57-c4faef60fbc3.jpg?1655930647",
      },
      cmc: 6,

      power: 4,
      toughness: 6,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/4d5edf4f-5695-42fc-9e57-c4faef60fbc3/rulings",

      rarity: "rare",
    },
    {
      type: "Creature",
      hasSummoningSickness: false,
      isTapped: false,
      id: "df2df9cb-14f5-470f-b438-20f4ae8d0d59",
      name: "Glint-Horn Buccaneer",
      scryfall_uri:
        "https://scryfall.com/card/m20/141/glint-horn-buccaneer?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/d/f/df2df9cb-14f5-470f-b438-20f4ae8d0d59.jpg?1592516947",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/d/f/df2df9cb-14f5-470f-b438-20f4ae8d0d59.jpg?1592516947",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/d/f/df2df9cb-14f5-470f-b438-20f4ae8d0d59.jpg?1592516947",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/d/f/df2df9cb-14f5-470f-b438-20f4ae8d0d59.png?1592516947",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/d/f/df2df9cb-14f5-470f-b438-20f4ae8d0d59.jpg?1592516947",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/d/f/df2df9cb-14f5-470f-b438-20f4ae8d0d59.jpg?1592516947",
      },
      cmc: 3,

      power: 2,
      toughness: 4,
      keywords: ["Haste"],

      rulings_uri:
        "https://api.scryfall.com/cards/df2df9cb-14f5-470f-b438-20f4ae8d0d59/rulings",

      rarity: "rare",
    },
    {
      type: "Sorcery",
      id: "33c5f81a-395d-41bf-9563-6cf0e406ee18",
      name: "Hero's Downfall",
      scryfall_uri:
        "https://scryfall.com/card/dmc/112/heros-downfall?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/3/3/33c5f81a-395d-41bf-9563-6cf0e406ee18.jpg?1661387618",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/3/3/33c5f81a-395d-41bf-9563-6cf0e406ee18.jpg?1661387618",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/3/3/33c5f81a-395d-41bf-9563-6cf0e406ee18.jpg?1661387618",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/3/3/33c5f81a-395d-41bf-9563-6cf0e406ee18.png?1661387618",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/3/3/33c5f81a-395d-41bf-9563-6cf0e406ee18.jpg?1661387618",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/3/3/33c5f81a-395d-41bf-9563-6cf0e406ee18.jpg?1661387618",
      },
      cmc: 3,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/33c5f81a-395d-41bf-9563-6cf0e406ee18/rulings",

      rarity: "uncommon",
    },
    {
      type: "Enchantment",
      id: "56fb4035-197b-4d28-9bf7-bb62c304067e",
      name: "Impact Tremors",
      scryfall_uri:
        "https://scryfall.com/card/dtk/140/impact-tremors?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/5/6/56fb4035-197b-4d28-9bf7-bb62c304067e.jpg?1562786545",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/6/56fb4035-197b-4d28-9bf7-bb62c304067e.jpg?1562786545",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/5/6/56fb4035-197b-4d28-9bf7-bb62c304067e.jpg?1562786545",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/5/6/56fb4035-197b-4d28-9bf7-bb62c304067e.png?1562786545",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/6/56fb4035-197b-4d28-9bf7-bb62c304067e.jpg?1562786545",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/6/56fb4035-197b-4d28-9bf7-bb62c304067e.jpg?1562786545",
      },
      cmc: 2,

      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/56fb4035-197b-4d28-9bf7-bb62c304067e/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      hasSummoningSickness: true,
      isTapped: false,
      id: "af648aaf-a8e0-4291-acf9-5f8533728f92",
      name: "Lightning Visionary",
      scryfall_uri:
        "https://scryfall.com/card/jmp/22/lightning-visionary?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/a/f/af648aaf-a8e0-4291-acf9-5f8533728f92.jpg?1632261835",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/f/af648aaf-a8e0-4291-acf9-5f8533728f92.jpg?1632261835",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/a/f/af648aaf-a8e0-4291-acf9-5f8533728f92.jpg?1632261835",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/a/f/af648aaf-a8e0-4291-acf9-5f8533728f92.png?1632261835",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/f/af648aaf-a8e0-4291-acf9-5f8533728f92.jpg?1632261835",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/f/af648aaf-a8e0-4291-acf9-5f8533728f92.jpg?1632261835",
      },
      cmc: 2,

      power: 2,
      toughness: 1,
      keywords: ["Prowess"],

      rulings_uri:
        "https://api.scryfall.com/cards/af648aaf-a8e0-4291-acf9-5f8533728f92/rulings",

      rarity: "common",
    },
    {
      type: "Creature",
      hasSummoningSickness: true,
      isTapped: false,
      id: "b2159a7d-e37a-4c43-a7b9-1e7179a7e43b",
      name: "Lord of Shatterskull Pass",
      scryfall_uri:
        "https://scryfall.com/card/roe/156/lord-of-shatterskull-pass?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/b/2/b2159a7d-e37a-4c43-a7b9-1e7179a7e43b.jpg?1562707504",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/b/2/b2159a7d-e37a-4c43-a7b9-1e7179a7e43b.jpg?1562707504",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/b/2/b2159a7d-e37a-4c43-a7b9-1e7179a7e43b.jpg?1562707504",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/b/2/b2159a7d-e37a-4c43-a7b9-1e7179a7e43b.png?1562707504",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/b/2/b2159a7d-e37a-4c43-a7b9-1e7179a7e43b.jpg?1562707504",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/b/2/b2159a7d-e37a-4c43-a7b9-1e7179a7e43b.jpg?1562707504",
      },
      cmc: 4,

      power: 3,
      toughness: 3,
      keywords: ["Level Up"],

      rulings_uri:
        "https://api.scryfall.com/cards/b2159a7d-e37a-4c43-a7b9-1e7179a7e43b/rulings",

      rarity: "rare",
    },
    {
      type: "Creature",
      onEnter:() => {game.addNewMessage(<div><p>The minotaurs have begun to summon aid from their diety.</p><p>Mogis will become a creature in 2 turns.</p></div>); game.accelerateGame()},   onDeath: () => {
        game.accelerateGame();
      },      hasSummoningSickness: true,
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
      hasSummoningSickness: true,
      isTapped: false,
      id: "7593d5fb-c6b3-4d24-b9d3-97a4378161fd",
      onDeath: () => {
        game.accelerateGame();
      },
      onEnter: () => {
        game.addNewMessage(
          <div>
            I am Neheb. You are trespassing on our land. We shall defeat you.
            "As long as you have one or fewer cards in hand, Minotaurs you control get +2/+0." will be active starting next turn.
          </div>
        );
      },
      name: "Neheb, the Worthy",
      scryfall_uri:
        "https://scryfall.com/card/akh/203/neheb-the-worthy?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/7/5/7593d5fb-c6b3-4d24-b9d3-97a4378161fd.jpg?1543676084",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/7/5/7593d5fb-c6b3-4d24-b9d3-97a4378161fd.jpg?1543676084",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/7/5/7593d5fb-c6b3-4d24-b9d3-97a4378161fd.jpg?1543676084",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/7/5/7593d5fb-c6b3-4d24-b9d3-97a4378161fd.png?1543676084",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/7/5/7593d5fb-c6b3-4d24-b9d3-97a4378161fd.jpg?1543676084",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/7/5/7593d5fb-c6b3-4d24-b9d3-97a4378161fd.jpg?1543676084",
      },
      cmc: 3,

      power: 2,
      toughness: 2,
      keywords: ["First strike"],

      rulings_uri:
        "https://api.scryfall.com/cards/7593d5fb-c6b3-4d24-b9d3-97a4378161fd/rulings",

      rarity: "rare",
    },
    {
      type: "Artifact",
      id: "c610beb6-6fd5-4230-ae74-240a005d5c8c",
      name: "Obelisk of Urd",      onDeath: () => {
        game.accelerateGame();
      },
      scryfall_uri:
        "https://scryfall.com/card/znc/115/obelisk-of-urd?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/c/6/c610beb6-6fd5-4230-ae74-240a005d5c8c.jpg?1604195713",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/6/c610beb6-6fd5-4230-ae74-240a005d5c8c.jpg?1604195713",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/c/6/c610beb6-6fd5-4230-ae74-240a005d5c8c.jpg?1604195713",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/c/6/c610beb6-6fd5-4230-ae74-240a005d5c8c.png?1604195713",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/6/c610beb6-6fd5-4230-ae74-240a005d5c8c.jpg?1604195713",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/6/c610beb6-6fd5-4230-ae74-240a005d5c8c.jpg?1604195713",
      },
      cmc: 6,

      keywords: ["Convoke"],

      rulings_uri:
        "https://api.scryfall.com/cards/c610beb6-6fd5-4230-ae74-240a005d5c8c/rulings",

      rarity: "rare",
    },
    {
      type: "Enchantment",
      id: "844801e4-cf37-4f20-9149-b58a57b9276e",
      name: "Pain Magnification",
      onDeath: () => {
        game.accelerateGame();
      },
      scryfall_uri:
        "https://scryfall.com/card/dis/121/pain-magnification?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/8/4/844801e4-cf37-4f20-9149-b58a57b9276e.jpg?1593273683",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/8/4/844801e4-cf37-4f20-9149-b58a57b9276e.jpg?1593273683",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/8/4/844801e4-cf37-4f20-9149-b58a57b9276e.jpg?1593273683",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/8/4/844801e4-cf37-4f20-9149-b58a57b9276e.png?1593273683",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/4/844801e4-cf37-4f20-9149-b58a57b9276e.jpg?1593273683",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/4/844801e4-cf37-4f20-9149-b58a57b9276e.jpg?1593273683",
      },
      cmc: 3,

      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/844801e4-cf37-4f20-9149-b58a57b9276e/rulings",

      rarity: "uncommon",
    },
    {
      type: "Enchantment",
      id: "b767e176-1df5-4adc-bf6b-418d71b4dbbe",
      name: "Rage Reflection",      onDeath: () => {
        game.accelerateGame();
      },
      scryfall_uri:
        "https://scryfall.com/card/2xm/139/rage-reflection?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/b/7/b767e176-1df5-4adc-bf6b-418d71b4dbbe.jpg?1599706601",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/b/7/b767e176-1df5-4adc-bf6b-418d71b4dbbe.jpg?1599706601",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/b/7/b767e176-1df5-4adc-bf6b-418d71b4dbbe.jpg?1599706601",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/b/7/b767e176-1df5-4adc-bf6b-418d71b4dbbe.png?1599706601",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/b/7/b767e176-1df5-4adc-bf6b-418d71b4dbbe.jpg?1599706601",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/b/7/b767e176-1df5-4adc-bf6b-418d71b4dbbe.jpg?1599706601",
      },
      cmc: 6,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/b767e176-1df5-4adc-bf6b-418d71b4dbbe/rulings",

      rarity: "rare",
    },

    {
      type: "Creature",
      hasSummoningSickness: true,
      isTapped: false,
      onDeath: () => {
        game.accelerateGame();
      },
      customHeader: (
        <Button
          onClick={() => {
            const newToken = cloneDeep(MinotaurToken);
            newToken.key = `${Math.random()}`;
            game.addCardsToBattlefield(newToken);
          }}
        >
          Create Token
        </Button>
      ),
      id: "274cdb39-1454-4c9b-acd8-4f762a48e71f",
      name: "Sethron, Hurloon General",
      scryfall_uri:
        "https://scryfall.com/card/jmp/25/sethron-hurloon-general?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/2/7/274cdb39-1454-4c9b-acd8-4f762a48e71f.jpg?1632261849",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/2/7/274cdb39-1454-4c9b-acd8-4f762a48e71f.jpg?1632261849",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/2/7/274cdb39-1454-4c9b-acd8-4f762a48e71f.jpg?1632261849",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/2/7/274cdb39-1454-4c9b-acd8-4f762a48e71f.png?1632261849",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/2/7/274cdb39-1454-4c9b-acd8-4f762a48e71f.jpg?1632261849",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/2/7/274cdb39-1454-4c9b-acd8-4f762a48e71f.jpg?1632261849",
      },
      cmc: 5,

      power: 4,
      toughness: 4,
      keywords: [],

      rulings_uri:
        "https://api.scryfall.com/cards/274cdb39-1454-4c9b-acd8-4f762a48e71f/rulings",

      rarity: "rare",
    },
    {
      type: "Sorcery",
      castAction: () => {
        game.addNewMessage(
          <div>
            Both Insult and Injury are cast in succession. For injury choose a
            creautre with the highest toughness that would die.
          </div>
        );
      },
      id: "eeac671f-2606-43ed-ad60-a69df5c150f6",
      name: "Insult // Injury",
      scryfall_uri:
        "https://scryfall.com/card/akh/213/insult-injury?utm_source=api",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/e/e/eeac671f-2606-43ed-ad60-a69df5c150f6.jpg?1549941631",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/e/eeac671f-2606-43ed-ad60-a69df5c150f6.jpg?1549941631",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/e/e/eeac671f-2606-43ed-ad60-a69df5c150f6.jpg?1549941631",
        png: "https://c1.scryfall.com/file/scryfall-cards/png/front/e/e/eeac671f-2606-43ed-ad60-a69df5c150f6.png?1549941631",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/e/eeac671f-2606-43ed-ad60-a69df5c150f6.jpg?1549941631",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/e/eeac671f-2606-43ed-ad60-a69df5c150f6.jpg?1549941631",
      },
      cmc: 6,
      keywords: ["Aftermath"],
      rulings_uri:
        "https://api.scryfall.com/cards/eeac671f-2606-43ed-ad60-a69df5c150f6/rulings",
      rarity: "rare",
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

  const generateClump = (index: number) => {
    const array = [];
    // array.push(
    //   getNewCard(index + 1, "common", common[getRandomInt(common.length)])
    // );
    // array.push(
    //   getNewCard(index + 2, "common", common[getRandomInt(common.length)])
    // );
    // array.push(
    //   getNewCard(index + 3, "common", common[getRandomInt(common.length)])
    // );
    // array.push(
    //   getNewCard(index + 4, "common", common[getRandomInt(common.length)])
    // );
    // array.push(
    //   getNewCard(index + 5, "common", common[getRandomInt(common.length)])
    // );
    // array.push(
    //   getNewCard(index + 6, "common", common[getRandomInt(common.length)])
    // );
    // array.push(
    //   getNewCard(index + 7, "uncommon", uncommon[getRandomInt(uncommon.length)])
    // );
    // array.push(
    //   getNewCard(index, "uncommon", uncommon[getRandomInt(uncommon.length)])
    // );
    // array.push(
    //   getNewCard(index + 9, "uncommon", uncommon[getRandomInt(uncommon.length)])
    // );
    array.push(getNewCard(index + 10, "rare", rare[getRandomInt(rare.length)]));
    return array;
  };

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
