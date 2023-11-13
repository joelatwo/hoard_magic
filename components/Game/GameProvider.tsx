import { ReactNode, createContext, useContext, useEffect } from "react";
import { GameStore } from "./GameStore";

const GameContext = createContext<GameStore>({} as GameStore);

export const useGameStore = () => {
  return useContext(GameContext);
};

type IProps = {
  children: ReactNode;
  game: GameStore;
};

export const GameProvider = ({ children, game }: IProps) => {
  const Store = useContext(GameContext);

  if (game) {
    return <GameContext.Provider value={game}>{children}</GameContext.Provider>;
  }

  return <GameContext.Provider value={Store}>{children}</GameContext.Provider>;
};
