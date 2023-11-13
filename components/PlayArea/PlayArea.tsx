import React, {
  MutableRefObject,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { CardType, Position } from "../../types/model";
import { Card } from "../Card";
import styles from "./PlayArea.module.scss";
import _, { cloneDeep, remove } from "lodash";
import Image from "next/image";
import { Button } from "@mui/material";
import CardBack from "../../assets/Magic_card_back.webp";
import { useGameStore } from "../Game/GameProvider";
import { observer } from "mobx-react-lite";
import { MessageArea } from "../MessageArea";

type IProps = {
  decklist: CardType[];
  battlefieldCards: CardType[];
  removeCard?: (index: string) => void;
  graveyard: CardType[];
  startANewTurn?: VoidFunction;
  setBattlefieldCards: any;
};

type PlayCardListType = CardType;

export const PlayArea = observer(() => {
  const { battlefield, untapAll, library, graveyard, sendCardToGraveyard } =
    useGameStore();

  const AllowDrop: React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
  };

  const DropAction: React.DragEventHandler<HTMLDivElement> = (event) => {
    // console.log(event);
  };

  // const updateCardPosition = (key: string, newPosition: Position) => {
  //   const newCardList: CardType[] = [];

  //   battlefieldCards.forEach((currentCard) => {
  //     const newCard = { ...currentCard };
  //     if (newCard.key === key) {
  //       newCard.position = newPosition;
  //     }
  //     newCardList.push(newCard);
  //   });

  //   setBattlefieldCards(newCardList);
  // };

  return (
    <div className={styles["play-area"]}>
      <div onDrop={DropAction} onDragOver={AllowDrop}>
        {/* <div className={styles["play-area__utils"]}></div> */}
        <div
          className={styles["play-area__field"]}
          onClick={(event) => {
            // console.log(event.clientX);
          }}
        >
          {battlefield.map((card) => (
            <Card
              key={card.key}
              sendCardToGraveyard={sendCardToGraveyard}
              isDraggable
              card={card}
              className={`${styles["Card"]} ${
                styles[card.isTapped ? "isTapped" : "untapped"]
              }`}
            />
          ))}
        </div>
      </div>
      <MessageArea></MessageArea>
    </div>
  );
});
