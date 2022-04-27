import React, { ReactNode } from "react";
import Link from "next/link";
import { BaseReactProps } from "../common";

interface SocialMediaInfo {
  title: string;
  image: string;
  url?: string;
}

const socialNetworks: SocialMediaInfo[] = [
  {
    title: "LinkedIn",
    image: "/svg/linkedin-icon.svg",
    url: "https://linkedin.com/in/ivanfvj",
  },
  {
    title: "Github",
    image: "/svg/github-icon.svg",
    url: "https://github.com/ivanfvj",
  },
  // {
  //   title: "Instagram",
  //   image: "/svg/instagram-icon.svg",
  // },
  {
    title: "Twitter",
    image: "/svg/twitter-icon.svg",
    url: "https://twitter.com/ivanfvj",
  },
  {
    title: "Tik-Tok",
    image: "/svg/tik-tok-icon.svg",
    url: "https://www.tiktok.com/@unamacro",
  },
];

interface Props extends BaseReactProps {}
interface SocialMediaIconProps extends BaseReactProps, SocialMediaInfo {}

const SocialMediaIcon = (props: SocialMediaIconProps) => {
  return (
    <Link href={props.url} passHref>
      <a target="_blank">
        <div className="bg-gray-50 hover:bg-blue-100 cursor-pointer p-1 rounded-lg">
          <img src={props.image} width={30} height={30} />
        </div>
      </a>
    </Link>
  );
};

const Footer = ({ children }: Props) => (
  <footer className="w-100 bg-blue-200 py-8 px-2">
    <div className="text-center">
      <p className="text-2xl mb-4">🛠️ Working on Footer 🛠️</p>
      <p>
        This website was created using Next.js, Typescript, Tailwind CSS and is
        deployed to Vercel
      </p>
    </div>
    <div className="flex justify-center space-x-2 mt-3">
      {socialNetworks.map((e) => {
        return (
          <SocialMediaIcon
            key={e.title}
            title={e.title}
            image={e.image}
            url={e.url}
          />
        );
      })}
    </div>
  </footer>
);

export default Footer;
