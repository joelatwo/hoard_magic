import { observer } from "mobx-react-lite";
import { useGameStore } from "../Game/GameProvider";
import styles from "./MessageArea.module.scss";

export const MessageArea = observer(() => {
  const { messageList } = useGameStore();

  return (
    <div className={styles["MessageArea"]}>
      <h2>Message Area</h2>
      {messageList.length > 0 && !messageList[0].hasBeenRead ? (
        <p>{messageList[0].message}</p>
      ) : (
        <></>
      )}
    </div>
  );
});
