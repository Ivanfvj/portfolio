import React, { useState, useContext } from "react";
import Link from "next/link";
import { BaseReactProps } from "../common";
import { LayoutContext } from "../contexts/LayoutContext";
// import Switch from "../components/shared/material/Switch";

interface Props extends BaseReactProps {
  //   title?: string;
}

type NavBarItemProps = {
  text?: string;
  href?: string;
  target?: string;
};

const NavBarItem = ({ text, href, target }: NavBarItemProps) => {
  return (
    <Link href={href} passHref>
      <a
        target={target}
        className="text-md md:text-xl px-3 py-3 hover:text-blue-500 hover:underline cursor-pointer font-semibold"
      >
        {text}
      </a>
    </Link>
  );
};

const ActionButton = (props: any) => {
  return (
    <Link href={props.href} passHref>
      <a
        className={`underline text-blue-500 hover:text-blue-600 ${
          props.className ? props.className : ""
        }`.trim()}
        target={props.target ? props.target : "_blank"}
      >
        <button className="bg-blue-500 text-md md:text-lg hover:bg-blue-600 font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          {props.text}
        </button>
      </a>
    </Link>
  );
};

const NavBar = ({}: Props) => {
  const { toggleDrawer } = useContext(LayoutContext);

  return (
    <nav className="px-4 py-3 bg-blue-100">
      <ul className="flex items-center max-w-6xl mx-auto">
        <button onClick={toggleDrawer} className="bg-red-200 w-12">
          O
        </button>
        <li>
          <NavBarItem href="/" text="Home" />
        </li>
        <li>
          <NavBarItem href="/projects" text="Portfolio" />
        </li>
        {/* <li>
          <NavBarItem href="/about" text="About me" />
        </li> */}

        <div className="flex-grow"></div>
        {/* <li>
          <NavBarItem href="/about" text="About me" />
        </li> */}
        <li>
          <NavBarItem
            href="https://www.unamacro.com/wp-content/uploads/2022/05/CV_Ivan_Velastegui_Senior_Full_Stack_Engineer.pdf"
            text="Resume"
            target="_blank"
          />
        </li>

        {/* <Switch className="mr-6" /> */}
        {/* <ActionButton className="ml-1" text="Contact Me" href="https://linkedin.com/in/ivanfvj" /> */}
        <ActionButton
          className="ml-1"
          text="Contact Me"
          href="#contact"
          target="_self"
        />
      </ul>
    </nav>
  );
};

export default NavBar;
