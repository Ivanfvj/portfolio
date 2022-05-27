import {
  Children,
  cloneElement,
  useState,
  useEffect,
  isValidElement,
} from "react";
import { BaseReactProps } from "../../../../common/";
// import Tab from "./Tab";

interface Props extends BaseReactProps {
  grow?: boolean;
  onChange?: (tabIndex: number) => void;
}

const Tabs = (props: Props) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = Children.toArray(props.children);

  useEffect(() => {
    if (props.onChange) {
      props.onChange(activeTab);
    }
  }, [activeTab]);

  return (
    <div className={`flex flex-wrap sm:flex-nowrap ${props.className ? props.className : ""}`.trim()}>
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
            onClick: () => setActiveTab(index),
          },
          null
        );
      })}
    </div>
  );
};

export default Tabs;
