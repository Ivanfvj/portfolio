import Image from "next/image";
import Link from "next/link";
import { BaseReactProps } from "../../common";
import { ProjectInfo } from "../../interfaces";
import ActionButton from "../../components/shared/material/ActionButton";
import Chip from "../../components/shared/material/MaterialChip";

interface Props extends BaseReactProps, ProjectInfo {}

export const ProjectCard = (props: Props) => {
  return (
    <div className="flex flex-col bg-white cursor-pointer rounded-lg hover:shadow-lg transition duration-200 ease overflow-hidden border">
      <div className="relative w-full h-64 overflow-hidden border-1 border-b">
        <Image
          src={props.image}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="p-5 pb-2 flex flex-col flex-1 overflow-hidden">
        <h1 className="text-2xl mb-2">{props.title}</h1>
        {props.headline && (
          <p className="mb-2">
            <strong>{props.headline}</strong>
          </p>
        )}
        {props.stack && props.stack.length > 0 && (
          <ul className="flex flex-wrap">
            {props.stack.map((e) => {
              return (
                <li key={e.text} className="my-1 mr-1">
                  <Chip text={e.text} size="x-small" />
                </li>
              );
            })}
          </ul>
        )}
        <div className="grow"></div>
      </div>
      <hr className="mt-1 mb-3" />
      <div className="flex justify-end px-3 pb-3">
        <Link href={props.to || props.link} passHref>
          <a target={props.to ? "" : "_blank"}>
            <ActionButton text="Visit site" />
          </a>
        </Link>
      </div>
    </div>
  );
};
