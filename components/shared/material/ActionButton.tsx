import { classNames } from "@src/utils";

interface ButtonProps {
  text: string;
  href?: string;
  className?: string;
  outlined?: boolean;
  onClick?: () => void;
}

const ActionButton = (props: ButtonProps) => {
  const isOutlined = typeof props.outlined === "undefined" || props.outlined;
  return (
    <button
      className={classNames(
        "py-2 px-4 rounded font-semibold border hover:border-transparent leading-none",
        props.className,
        isOutlined
          ? "bg-transparent hover:bg-blue-500 text-blue-700 border-blue-500 hover:text-white"
          : "bg-blue-500 text-white border-none hover:bg-blue-600"
      )}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default ActionButton;
