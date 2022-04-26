import React, { ReactNode } from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
  title?: string;
  className?: string;
};

const Layout = ({ children, title = "This is the default title", className }: Props) => (
  <div className={className}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <NavBar />
    </header>
    {children}
    <Footer />
  </div>
);

export default Layout;
