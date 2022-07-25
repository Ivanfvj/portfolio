import { ReactNode } from "react";

import { classNames } from "@src/utils";

type Props = {
  children?: ReactNode;
  text: string;
  active?: boolean;
  showCloseButton?: boolean;
  className?: string;
  onChange?: (active: boolean) => void;
  activeColor?: string;
  color?: string;
  size?: "large" | "small" | "x-small" | "medium" | "x-large";
};

export type MaterialChipSize = Props["size"];

const Chip = (props: Props) => {
  const toggleActive = () => {
    if (props.onChange) {
      props.onChange(!props.active);
    }
  };

  const setActive = (active: boolean) => {
    if (props.onChange) {
      props.onChange(active);
    }
  };

  const textSizeClasses = () => {
    switch (props.size) {
      case "x-large":
        return "text-xl";
      case "large":
        return "text-lg";
      case "medium":
        return "text-md";
      case "x-small":
        return "text-xs";
      case "small":
      default:
        return "text-sm";
    }
  };

  const paddingClasses = () => {
    switch (props.size) {
      case "x-small":
        return "px-2 py-1";
      case "medium":
      case "small":
      case "x-large":
      case "large":
      default:
        return "px-4 py-2";
    }
  };

  return (
    <span
      className={classNames(
        "rounded-full bg-gray-200 font-semibold flex align-center w-max cursor-pointer transition duration-200 ease",
        props.active
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "text-gray-800 hover:bg-blue-300",
        paddingClasses(),
        textSizeClasses(),
        props.className
      )}
      style={{
        background: props.active ? props.activeColor : props.color,
      }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleActive();
      }}
    >
      {props.text}
      {props.showCloseButton && props.active && (
        <button
          className="bg-transparent hover focus:outline-none"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setActive(false);
          }}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="times"
            className="w-3 ml-3"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
          >
            <path
              fill="currentColor"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            ></path>
          </svg>
        </button>
      )}
    </span>
  );
};

export default Chip;
