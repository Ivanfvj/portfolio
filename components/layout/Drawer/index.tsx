import { ReactNode } from "react";

import styles from "./drawer.module.scss";
import { BaseReactProps } from "../../../common";

interface DrawerProps extends BaseReactProps {
  renderHeader?: () => ReactNode;
  active?: boolean;
  onHide?: () => void;
}
interface DrawerItemProps extends BaseReactProps {}

const DrawerItem = () => {
  <div>Item</div>;
};

export const Drawer = (props: DrawerProps) => {
  const onHide = () => {
    props.onHide && props.onHide();
  };
  return (
    <>
      <nav className={`${styles.drawer} ${props.active ? styles.active : ""}`}>
        {props.renderHeader && (
          <div className={styles["drawer__header"]}>{props.renderHeader()}</div>
        )}
        <div className={styles["drawer__content"]}></div>
      </nav>
      <div
        className={`${styles["drawer__overlay"]} ${
          props.active ? styles.active : ""
        }`}
        onClick={onHide}
      ></div>
    </>
  );
};
