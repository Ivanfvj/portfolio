import { BaseReactProps } from "../../../../common/";

interface TabProps extends BaseReactProps {
  text?: string;
  isLast?: boolean;
  isFirst?: boolean;
  active?: boolean;
  onClick?: () => void;
  activeClass?: boolean;
}

const Tab = (props: TabProps) => {
  return (
    <div
      //@ts-ignore
      active={props.active?.toString()}
      onClick={props.onClick}
      className={
        `cursor-pointer select-none border-l-2 border-t-2 py-4 px-5 font-semibold `
        + `flex items-center justify-center text-center transition ease-in-out duration-200 ` +
        `${props.isLast ? "border-r-2 " : ""}` +
        `${
          props.active
            ? `text-blue-600 bg-blue-50 hover:bg-blue-100 ${
                props.activeClass ? props.activeClass : ""
              }`.trim()
            : "hover:bg-gray-50 bg-white "
        }` +
        `${props.className ? props.className : ""}`
      }
    >
      <span className="inline-block align-middle leading-tight">
        {props.text}
      </span>
    </div>
  );
};

export default Tab;
