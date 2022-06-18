import { createContext } from "react";

import { ResponsiveBreakpoints } from "../common/hooks/useResponsiveBreakpoint";

interface ILayoutContext {
  drawerActive: boolean;
  toggleDrawer: () => void;
  setDrawerActive: (active: boolean) => void;
  breakpoints?: ResponsiveBreakpoints
}

export const LayoutContext = createContext<ILayoutContext>(null);
