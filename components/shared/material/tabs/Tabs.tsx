import { Children, cloneElement, useState, isValidElement } from "react";
import { BaseReactProps } from "../../../../common/";
// import Tab from "./Tab";

interface Props extends BaseReactProps {
  value?: number;
  grow?: boolean;
  onChange?: (tabIndex: number) => void;
}

const Tabs = (props: Props) => {
  const [activeTab, setActiveTab] = useState(() => {
    return typeof props.value === "undefined" ? 0 : props.value;
  });

  const tabs = Children.toArray(props.children);

  const onTabClicked = (index: number) => {
    setActiveTab(index);
    if (props.onChange) {
      props.onChange(index);
    }
  };

  return (
    <div
      className={`flex flex-wrap sm:flex-nowrap ${
        props.className ? props.className : ""
      }`.trim()}
    >
      {Children.map(tabs, (child, index) => {
        if (!isValidElement(child)) {
          return null;
        }

        const isFirst = index === 0;
        const isLast = index === tabs.length - 1;

        return cloneElement(
          child,
          {
            className: `${props.grow ? "grow w-full" : ""}`,
            active: activeTab === index,
            isFirst,
            isLast,
            onClick: () => onTabClicked(index),
          },
          null
        );
      })}
    </div>
  );
};

export default Tabs;
