import React, { ReactNode, useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  children?: ReactNode;
  className?: string;
  imageUrl?: string;
  text?: string;
  proficiency?: string;
};

const LogoCard = ({ className, imageUrl, text, proficiency }: Props) => {
  const proficiencyColorClass =
    proficiency === "expert"
      ? "bg-red-200"
      : proficiency === "intermediate"
      ? "bg-yellow-200"
      : proficiency === "noob"
      ? "bg-green-200"
      : "bg-gray-200";

  return (
    <div
      className={`cursor-pointer p-3 max-w-sm rounded border border-gray-200 
    overflow-hidden shadow-lg hover:shadow-2xl duration-200 ease bg-white ${className}`}
    >
      <div className="rounded bg-gray-100 p-3">
        <img
          className="mx-auto"
          style={{ maxHeight: 80 }}
          width="80"
          height="80"
          alt=""
          src={imageUrl}
        />
      </div>
      <p className="my-2">
        <strong>{text}</strong>
      </p>
      {proficiency && (
        <div
          className={`inline-block rounded px-2 text-sm py-1 ${proficiencyColorClass}`}
        >
          <p>{proficiency}</p>
        </div>
      )}
    </div>
  );
};

export default LogoCard;
