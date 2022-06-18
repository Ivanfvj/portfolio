import { useMediaQuery } from "./useMediaQuery";

interface Props {
  breakpoints?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    "2xl"?: number;
  };
}

const defaultBreakpoints: Props["breakpoints"] = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

type BreakpointName = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type ResponsiveBreakpoints = ReturnType<
  typeof useResponsiveBreakpoint
>["breakpoints"];

export const useResponsiveBreakpoint = (props?: Props) => {
  const breakpointsConfig: Props["breakpoints"] = {
    ...defaultBreakpoints,
    ...(props?.breakpoints || {}),
  };

  if (!process.browser || !window) {
    return { breakpoints: null };
  }

  // TODO: This can be optimized using only one eventListener instead of 4
  // Calculation is true if window width is less than breakpointConfig limit
  const lessThanSm = useMediaQuery(breakpointsConfig.sm);
  const lessThanMd = useMediaQuery(breakpointsConfig.md);
  const lessThanLg = useMediaQuery(breakpointsConfig.lg);
  const lessThanXl = useMediaQuery(breakpointsConfig.xl);
  const lessThan2Xl = useMediaQuery(breakpointsConfig["2xl"]);

  const isSmAndDown = lessThanSm;
  const isMdAndDown = lessThanMd;
  const isLgAndDown = lessThanLg;
  const isXlAndDown = lessThanXl;
  const is2XlAndDown = lessThan2Xl;

  const isSmAndUp = true; // Always considered true as sm breakpoint is the lower limit
  const isMdAndUp = !lessThanSm;
  const isLgAndUp = !lessThanMd;
  const isXlAndUp = !lessThanLg;

  // Breakpoint name
  let name: BreakpointName = "xs";
  if (
    !lessThanSm &&
    !lessThanMd &&
    !lessThanLg &&
    !lessThanXl &&
    !lessThan2Xl
  ) {
    name = "2xl";
  } else if (
    !lessThanSm &&
    !lessThanMd &&
    !lessThanLg &&
    !lessThanXl &&
    lessThan2Xl
  ) {
    name = "xl";
  } else if (!lessThanSm && !lessThanMd && !lessThanLg && lessThanXl) {
    name = "lg";
  } else if (!lessThanSm && !lessThanMd && lessThanLg) {
    name = "md";
  } else if (!lessThanSm && lessThanMd) {
    name = "sm";
  } else {
    name = "xs";
  }

  const breakpoints = {
    name,
    isSmAndDown,
    isMdAndDown,
    isLgAndDown,
    isXlAndDown,
    is2XlAndDown,

    isSmAndUp,
    isMdAndUp,
    isLgAndUp,
    isXlAndUp,
  };

  return {
    breakpoints,
  };
};
