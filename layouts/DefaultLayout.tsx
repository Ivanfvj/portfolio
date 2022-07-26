import React, { ReactNode } from "react";
import { motion } from "framer-motion";

import { Head } from "@components/layout/Head";
import { AppBar } from "@components/layout/AppBar";
import Footer from "@components/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  className?: string;
  thumbnailImg?: string;
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export const Layout = ({
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
      <Head title={title} description={description} imgUrl={imgUrl} />
      <header>
        <AppBar />
      </header>
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
        className=""
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};
