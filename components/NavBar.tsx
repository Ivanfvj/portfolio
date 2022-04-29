import React, { useState } from "react";
import Link from "next/link";
// import Switch from "../components/shared/material/Switch";

type Props = {
  //   children?: ReactNode;
  //   title?: string;
};

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
        target="_blank"
      >
        <button className="bg-blue-500 text-md md:text-lg hover:bg-blue-600 font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          {props.text}
        </button>
      </a>
    </Link>
  );
};

const NavBar = ({}: Props) => (
  <nav className="px-4 py-3 bg-blue-100">
    <ul className="flex items-center max-w-6xl mx-auto">
      <li>
        <NavBarItem href="/" text="Home" />
      </li>
      <li>
        <NavBarItem href="/projects" text="Portfolio" />
      </li>

      <div className="flex-grow"></div>
      <li>
        <NavBarItem
          href="https://www.unamacro.com/wp-content/uploads/2022/04/CV_Ivan_Velastegui_Senior_Full_Stack_Engineer.pdf"
          text="Download CV"
          target="_blank"
        />
      </li>
      {/* <Switch className="mr-6" /> */}
      <ActionButton text="Contact Me" href="https://linkedin.com/in/ivanfvj" />
    </ul>
  </nav>
);

export default NavBar;
