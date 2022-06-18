import { useEffect, useState } from "react";

export const useMediaQuery = (minWidth: number) => {
  const [state, setState] = useState({
    windowWidth: 0,
    isDesiredWidth: false,
  });

  if (!process.browser || !window) {
    return false;
  }

  useEffect(() => {
    const resizeHandler = () => {
      const currentWindowWidth = window.innerWidth;
      const isDesiredWidth = currentWindowWidth < minWidth;
      setState({ windowWidth: currentWindowWidth, isDesiredWidth });
    };
    window.addEventListener("resize", resizeHandler);
    // Force first call
    resizeHandler();
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return state.isDesiredWidth;
};
