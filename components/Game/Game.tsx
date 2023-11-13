import { useEffect, useState } from "react";
import { PlayArea } from "../PlayArea";
import { PlayMenu } from "../PlayMenu/PlayMenu";
import { CardType } from "../../types/model";
import { cloneDeep, remove } from "lodash";
import styles from "./Game.module.scss";
import { GameProvider } from "./GameProvider";
import { observer } from "mobx-react-lite";
import { GameStore } from "./GameStore";
import { MessageArea } from "../MessageArea";

export enum TurnPhasesType {
  "upkeep",
  "draw",
  "main1",
  "combat",
  "main2",
  "end",
}

type IProps = {
  decklist?: CardType[];
  deckConfiguration?: any;
};

export const Game = ({
  decklist,
  deckConfiguration = { main1: { cardDraw: 2 } },
}: IProps) => {
  return (
    <div className={styles["game"]}>
      <PlayArea></PlayArea>
      <PlayMenu></PlayMenu>
    </div>
  );
};
