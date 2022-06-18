import { useEffect, useState } from "react";

import { BaseReactProps } from "../common";
import { LayoutContext } from "./LayoutContext";
import { useResponsiveBreakpoint } from "../common/hooks/useResponsiveBreakpoint";

interface Props extends BaseReactProps {}

export const LayoutContextProvider = (props: Props) => {
  const [drawerActive, setDrawerActive] = useState(false);
  let { breakpoints } = useResponsiveBreakpoint();

  const toggleDrawer = () => {
    setDrawerActive((prevState) => !prevState);
  };

  return (
    <LayoutContext.Provider
      value={{ drawerActive, setDrawerActive, toggleDrawer, breakpoints }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};
