import React, { Children, isValidElement } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { BaseReactProps } from "@src/common";
import { classNames } from "@src/utils";
import { NavBarItemProps } from "./NavBarItem";
import styles from "./NavBarMenu.module.css";

interface NavBarMenuProps extends BaseReactProps {
  text: string;
  href?: string;
}

export const NavBarMenu = (props: NavBarMenuProps) => {
  const items = Children.toArray(props.children);

  return (
    <div className={styles["navbar-menu"]}>
      <button
        className={classNames(
          styles["navbar-menu__button"],
          "flex items-center text-md md:text-lg px-3 py-3 hover:text-blue-500 hover:underline cursor-pointer font-semibold"
        )}
      >
        {props.text}
        <FontAwesomeIcon
          className="ml-5"
          icon={faChevronDown}
          style={{ fontSize: 14 }}
        />
      </button>
      <div className={`${styles["navbar-menu__content"]} shadow-lg`}>
        <ul>
          {Children.map(items, (child, index) => {
            if (!isValidElement(child)) {
              return null;
            }

            const { text, href } = child.props as NavBarItemProps;

            const isFirst = index === 0;
            const isLast = index === items.length - 1;

            return (
              <li>
                <Link href={href} passHref>
                  <a className="block py-3 px-3 hover:bg-gray-100">{text}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
