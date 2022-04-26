import React, { ReactNode, useEffect, useState } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  imageUrl?: string;
  text?: string;
  onClick?: () => void;
};

const LogoCard = (props: Props) => {
  const emitClick = (e: any) => {
    e.preventDefault();
    props.onClick();
  };

  return (
    <div
      className={`cursor-pointer flex flex-col items-center p-3 rounded border-r border-b border-l border-gray-200 
        overflow-hidden shadow-lg hover:shadow-2xl duration-200 ease bg-white ${
          props.className ? props.className : ""
        }`}
      onClick={emitClick}
    >
      {props.children}
    </div>
  );
};

export default LogoCard;
