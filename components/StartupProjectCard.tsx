import { useState } from "react";
import Card from "../components/shared/material/Card";

interface IProjectCardProps {
  title: string;
  image: string;
  imageAlt?: string;
  webUrl: string;
  webUrlText: string;
  className?: string;
  active?: boolean;
  onClick?: () => void;
}

const ProjectCard = (props: IProjectCardProps) => {
  return (
    <div
      className={`w-1/3 cursor-pointer flex flex-col items-center p-3  border-gray-200 
      overflow-hidden border-t border-r border-l transition duration-200 ease bg-white ${
        props.active ? "bg-sky-50" : "hover:bg-gray-50"
      }`}
      onClick={props.onClick}
    >
      <img width={150} height={150} src={props.image} alt={props.imageAlt} />
      <h1>{props.title}</h1>
    </div>
  );
};

export default ProjectCard;
