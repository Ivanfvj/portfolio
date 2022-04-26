import React, { ReactNode } from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  className?: string;
  thumbnailImg?: string;
};

const Layout = ({
  children,
  title = "Iván Velasteguí - Software Engineer",
  description = "Startup founder and Software Engineer - Open to work remotely, connect with founders and work with startups",
  className,
  thumbnailImg,
}: Props) => {
  const imgUrl = thumbnailImg || "https://ivan.unamacro.com/portrait.jpg";

  // Recommended max length for these meta tags
  description = description.substring(0, 160);

  return (
    <div className={className}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imgUrl} />
        <meta name="twitter:image:alt" content={title.substring(0, 67)} />
        <meta name="og:title" content={title.substring(0, 67)} />
        <meta name="og:description" content={description.substring(0, 155)} />
        <meta name="og:image" content={imgUrl} />
        <meta name="og:image:secure_url" content={imgUrl} />
        <meta name="og:image:alt" content={title.substring(0, 67)} />
        {/* <link rel="shortcut icon" href="/static/favicon.ico" /> */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <header>
        <NavBar />
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
