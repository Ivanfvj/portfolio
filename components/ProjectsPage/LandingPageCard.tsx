import Link from "next/link";
import Image from "next/image";
import ActionButton from "../../components/shared/material/ActionButton";
import { BaseReactProps } from "../../common";

interface LandingPageCardProps extends BaseReactProps {
  text: string;
  subtitle?: string;
  imgSrc: string;
  href?: string;
}

export const LandingPageCard = (props: LandingPageCardProps) => {
  return (
    <div className="relative hover:shadow-2xl transition all ease duration-200 border">
      <div
        className={`absolute z-10 w-full h-full flex flex-col justify-center items-center opacity-0 hover:opacity-100 
        focus:opacity-100 active:opacity-100 transition-all ease text-white
        hover:bg-black/60`}
      >
        <p className="px-3 text-xl text-center font-semibold leading-tight">{props.text}</p>
        {props.subtitle && <p>{props.subtitle}</p>}

        {props.href && (
          <Link href={props.href} passHref target="_blank">
            <a target="_blank">
              <ActionButton
                className="mt-2"
                text="Visit site"
                outlined={false}
              />
            </a>
          </Link>
        )}
      </div>
      <figure className="relative w-full h-64">
        <Image
          src={props.imgSrc}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </figure>
    </div>
  );
};
