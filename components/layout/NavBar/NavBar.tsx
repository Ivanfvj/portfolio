import React, { useContext } from "react";
import Link from "next/link";

import { BaseReactProps, RESUME_URL } from "../../../common";
import { LayoutContext } from "../../../contexts/LayoutContext";
import { NavBarMenu } from "./NavBarMenu";
import { NavBarItem } from "./NavBarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { classNames } from "@src/utils";

interface Props extends BaseReactProps {}

const ActionButton = (props: any) => {
  return (
    <Link href={props.href} passHref>
      <a
        className={classNames(
          "underline text-blue-500 hover:text-blue-600",
          props.className
        )}
        target={props.target ? props.target : "_blank"}
      >
        <button className="bg-blue-500 text-md md:text-lg hover:bg-blue-600 font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded leading-none md:leading-tight">
          {props.text}
        </button>
      </a>
    </Link>
  );
};

const NavBar = ({}: Props) => {
  const { toggleDrawer, drawerActive, breakpoints } = useContext(LayoutContext);

  return (
    <nav className="px-4 py-3 bg-blue-100">
      <ul className="flex items-center max-w-6xl mx-auto">
        {breakpoints?.isMdAndDown && (
          <button
            onClick={toggleDrawer}
            style={{ width: 40, height: 40 }}
            className={`p-2 flex justify-center items-center rounded-full transition-all ${
              drawerActive ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
          >
            <FontAwesomeIcon icon={faBars} style={{ fontSize: 20 }} />
          </button>
        )}

        <li className={`${breakpoints?.isMdAndDown ? "hidden" : ""}`}>
          <NavBarItem href="/" text="Home" />
        </li>
        <li className={`${breakpoints?.isMdAndDown ? "hidden" : ""}`}>
          <NavBarItem href="/projects" text="Portfolio" />
        </li>
        <li className={`${breakpoints?.isMdAndDown ? "hidden" : ""}`}>
          <NavBarMenu text="Startup Projects">
            <NavBarItem href="/projects/unamacro" text="Unamacro" />
            <NavBarItem href="/projects/mejorate" text="Mejorate.online" />
            <NavBarItem href="/projects/trimm" text="Trimm.tv" />
          </NavBarMenu>
        </li>
        <div className="flex-grow"></div>
        <li className={`${breakpoints?.isMdAndDown ? "hidden" : ""}`}>
          <NavBarItem href="/about" text="About me" />
        </li>
        <li className={`${breakpoints?.isMdAndDown ? "hidden" : ""}`}>
          <NavBarItem href={RESUME_URL} text="Resume" target="_blank" />
        </li>

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
