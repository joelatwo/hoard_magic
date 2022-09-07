import Image from "next/image";
import React from "react";
import { CardType } from "../../types/model";
import styles from "./Card.module.scss";

type IProps = {
  card: CardType;
  removeCard: (index: number) => void;
};

export const Card = ({ card, removeCard }: IProps) => {
  return (
    <div className={styles["card"]}>
      <div className="card__header">
        {card.key} {card.rarity}
        <button
          className="close__button"
          onClick={() => {
            removeCard(card.key);
          }}
        >
          X
        </button>
      </div>
      <div className="card__image">
        <Image
          alt={card.name}
          width={200}
          height={300}
          src={card.image_uris.normal}
        />
      </div>
    </div>
  );
};
