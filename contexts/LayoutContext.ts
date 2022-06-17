import { createContext } from "react";

interface ILayoutContext {
  drawerActive: boolean;
  toggleDrawer: () => void;
}

export const LayoutContext = createContext<ILayoutContext>(null);
