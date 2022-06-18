import React from "react";
import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { LayoutContextProvider } from "../contexts/LayoutContextProvider";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutContextProvider>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </LayoutContextProvider>
  );
}

export default MyApp;
