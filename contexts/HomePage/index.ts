import { createContext, useContext } from "react";

export interface IHomePageContext {
  showEasterEgg?: boolean;
  setShowEasterEgg?: (value: boolean) => void;
}

export const HomePageContext = createContext<IHomePageContext>({});

export const useHomeContext = () => useContext(HomePageContext);
