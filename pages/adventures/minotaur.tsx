import axios from "axios";
import React, { useEffect } from "react";
import { common, rare, uncommon } from "../../assets/decks/MinotaurTribal";

import { PlayArea } from "../../components";

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
  array.push(
    getNewCard(index + 1, "common", common[getRandomInt(common.length)])
  );
  array.push(
    getNewCard(index + 2, "common", common[getRandomInt(common.length)])
  );
  array.push(
    getNewCard(index + 3, "common", common[getRandomInt(common.length)])
  );
  array.push(
    getNewCard(index + 4, "common", common[getRandomInt(common.length)])
  );
  array.push(
    getNewCard(index + 5, "common", common[getRandomInt(common.length)])
  );
  array.push(
    getNewCard(index + 6, "common", common[getRandomInt(common.length)])
  );
  array.push(
    getNewCard(index + 7, "uncommon", uncommon[getRandomInt(uncommon.length)])
  );
  array.push(
    getNewCard(index, "uncommon", uncommon[getRandomInt(uncommon.length)])
  );
  array.push(
    getNewCard(index + 9, "uncommon", uncommon[getRandomInt(uncommon.length)])
  );
  array.push(getNewCard(index + 10, "rare", rare[getRandomInt(rare.length)]));
  return array;
};

const generateDeck = () => {
  console.log(common.length, uncommon.length, rare.length);
  let decklist: any[] = [];
  for (let i = 0; i < 6; i++) {
    decklist = decklist.concat(generateClump(i * 100));
  }
  console.log(decklist);
  return randomizeArray(decklist);
  //   const clump.
  //   for(let currentClump = 0; currentClump < 10; currentClump++){

  //   }
  // const minotaurDeck = []
  // for(let i = 0; i < 100; i++){
  // }
};

const Minotaur = () => {
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

  useEffect(() => {
    loadData();
  });
  return <PlayArea decklist={generateDeck()}></PlayArea>;
};

export default Minotaur;
