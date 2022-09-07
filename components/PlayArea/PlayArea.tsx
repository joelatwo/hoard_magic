import React, { useState } from "react";
import { CardType } from "../../types/model";
import { Card } from "../Card";
import styles from "./PlayArea.module.scss";
import _ from "lodash";
import Image from "next/image";
import CardBack from "../../assets/Magic_card_back.webp";

type IProps = {
  decklist: CardType[];
};

type PlayCardListType = CardType;

export const PlayArea = ({ decklist }: IProps) => {
  const [cardList, setCardList] = useState<PlayCardListType[]>([]);
  const [topOfDeck, setTopOfDeck] = useState(0);
  const [discardPile, setDiscardPile] = useState<PlayCardListType[]>([]);
  const [winCount, setWinCount] = useState(3);
  const [turnCount, setTurnCount] = useState(0);
  const [numberOfCardsToDraw, setNumberOfCardsToDraw] = useState(2);

  const drawCards = (numberOfCardsToDraw: number = 1) => {
    const newCardList: PlayCardListType[] = [...cardList];
    let i = 0;
    let currentTopOfDeck = topOfDeck;
    for (; i < numberOfCardsToDraw; i++) {
      if (topOfDeck < decklist.length) {
        newCardList.push(decklist[currentTopOfDeck]);
        currentTopOfDeck++;
      }
    }
    setTopOfDeck(currentTopOfDeck);
    setCardList(newCardList);
  };

  const removeCard = (key: number) => {
    const newCardList = [...cardList];
    const removedCards = _.remove(newCardList, (card) => card.key === key);
    setDiscardPile([...discardPile, ...removedCards]);
    setCardList(newCardList);
    if (removedCards[0].rarity === "rare") {
      setNumberOfCardsToDraw((prev) => prev + 1);
    }
  };

  const takeNewTurn = () => {
    checkPlayerVictory();
    drawCards(numberOfCardsToDraw);
  };

  const checkPlayerVictory = () => {
    if (decklist.length <= topOfDeck) {
      console.log(decklist.length, topOfDeck);
      if (winCount > 0) {
        setWinCount((prev) => prev - 1);
      }
    }
    return false;
  };

  return (
    <div className={styles["play-area"]}>
      {winCount === 0 && <div>You Win!!!</div>}
      <div className={styles["play-area__utils"]}>
        <div>Turn {turnCount}</div>
        <button onClick={takeNewTurn}>Next Turn</button>
        <button>Untap</button>
        <button onClick={takeNewTurn}>Draw</button>
      </div>
      <div className={styles["play-area__field"]}>
        <div>
          <Image width={200} height={300} src={CardBack}></Image>{" "}
          {decklist.length - topOfDeck}
        </div>
        <div>
          <Image width={200} height={300} src={CardBack}></Image>{" "}
          {discardPile.length}
        </div>
        {cardList.map((card) => (
          <div key={card.key}>
            <Card removeCard={removeCard} card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};
