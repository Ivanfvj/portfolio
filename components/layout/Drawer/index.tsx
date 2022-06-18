import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./drawer.module.scss";
import { BaseReactProps } from "../../../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface DrawerProps extends BaseReactProps {
  renderHeader?: () => ReactNode;
  active?: boolean;
  onHide?: () => void;
}

interface IDrawerItem {
  text: string;
  icon?: string;
  href?: string;
  target?: string;
  items?: IDrawerItem[];
}

interface DrawerItemProps extends BaseReactProps, Partial<IDrawerItem> {
  active?: boolean;
}

interface IDrawerSubgroup extends IDrawerItem {}
interface DrawerSubgroupProps extends BaseReactProps, IDrawerSubgroup {
  open?: boolean;
  activeRoute?: string;
}

const DrawerSubgroup = (props: DrawerSubgroupProps) => {
  const [open, setOpen] = useState(false);
  const hasItems = props.items && props.items.length > 0;
  const childRouteActive = useMemo(
    () =>
      hasItems &&
      props.activeRoute &&
      props.items.find((e) => props.activeRoute === e.href),
    [props.activeRoute, props.items]
  );

  useEffect(() => {
    if (childRouteActive) {
      setOpen(true);
    }
  }, []);

  // TODO: Init state on active if child route is active
  const toggleMenu = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  return (
    <>
      <div
        className={`py-3 px-6 cursor-pointer text-md w-full h-full select-none md:text-lg flex justify-between items-center transition-all ease 
        ${
          childRouteActive
            ? "bg-blue-400 text-white font-semibold"
            : open
            ? "bg-blue-100"
            : "hover:bg-gray-100"
        }`}
        onClick={toggleMenu}
      >
        <span>{props.text}</span>
        {hasItems && <FontAwesomeIcon icon={faChevronDown} />}
      </div>
      {hasItems &&
        open &&
        props.items.map((e) => (
          <Link key={e.text} href={e.href}>
            <li
              className={`py-3 px-6 pl-9 cursor-pointer transition-all ease ${
                e === childRouteActive
                  ? "bg-blue-300 text-white font-semibold"
                  : "bg-blue-50 hover:bg-blue-100"
              }`}
            >
              <a
                target={e.target || "_self"}
                className="text-md w-full h-full md:text-lg select-none"
              >
                {e.text}
              </a>
            </li>
          </Link>
        ))}
    </>
  );
};

const DrawerItem = (props: DrawerItemProps) => {
  const target = props.target || "_self";
  return (
    <Link href={props.href}>
      <li
        className={`py-3 px-6 cursor-pointer transition-all ease ${
          props.active
            ? "bg-blue-300 text-white font-semibold"
            : "hover:bg-gray-100"
        }`}
      >
        <a
          href={props.href}
          target={target}
          className="text-md w-full h-full md:text-lg"
        >
          {props.text}
        </a>
      </li>
    </Link>
  );
};

const DrawerHeader = () => {
  return (
    <div>
      <p>
        <strong>Iván Velasteguí</strong>
      </p>
    </div>
  );
};

export const Drawer = (props: DrawerProps) => {
  const { asPath: actualRoute } = useRouter();
  const items: IDrawerItem[] = [
    { text: "Home", href: "/" },
    { text: "Portfolio", href: "/projects" },
    {
      text: "Startup Projects",
      items: [
        { text: "Unamacro", href: "/projects/unamacro" },
        { text: "Trimm.tv", href: "/projects/trimm" },
        { text: "Mejorate.online", href: "/projects/mejorate" },
      ],
    },
    { text: "About me", href: "/about" },
    { text: "Resume", href: "/resume" },
  ];
  const onHide = () => {
    props.onHide && props.onHide();
  };
  return (
    <>
      <aside
        className={`${styles.drawer} ${props.active ? styles.active : ""}`}
      >
        <div className={styles["drawer__header"]}>
          {props.renderHeader ? props.renderHeader() : <DrawerHeader />}
        </div>
        <div className={styles["drawer__content"]}>
          <ul>
            {items.map((e) => {
              if (e.items && e.items.length > 0) {
                return (
                  <DrawerSubgroup
                    {...e}
                    key={e.text}
                    activeRoute={actualRoute}
                  />
                );
              } else
                return (
                  <DrawerItem
                    {...e}
                    active={actualRoute === e.href}
                    key={e.text}
                  />
                );
            })}
          </ul>
        </div>
      </aside>
      <div
        className={`${styles["drawer__overlay"]} ${
          props.active ? styles.active : ""
        }`}
        onClick={onHide}
      ></div>
    </>
  );
};
