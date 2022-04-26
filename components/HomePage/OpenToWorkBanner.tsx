import { MouseEvent } from "react";
import { BaseReactProps } from "../../common";

interface CloseButtonProps extends BaseReactProps {
  close?: () => void;
}

const CloseButton = (props: CloseButtonProps) => {
  const close = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (props.close) {
      props.close();
    }
  };

  return (
    <span
      className={`px-4 py-2 rounded-full bg-white hover:bg-gray-50 font-semibold text-sm flex align-center w-max cursor-pointer 
          ${props.className ? props.className : ""}`.trim()}
      onClick={close}
    >
      <button
        className="bg-transparent hover focus:outline-none"
        onClick={close}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="times"
          className="w-3"
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
    </span>
  );
};

interface Props {
  close?: () => void;
}

const OpenToWorkBanner = (props: Props) => {
  return (
    <div className="flex items-center justify-center p-3 bg-yellow-200">
      <p className="font-semibold">I'm open to work and contribute remotely</p>
      <CloseButton className="ml-2" close={props.close} />
    </div>
  );
};

export default OpenToWorkBanner;
