import Link from "next/link";

export interface NavBarItemProps {
  text?: string;
  href?: string;
  target?: string;
}

export const NavBarItem = ({ text, href, target }: NavBarItemProps) => {
  return (
    <Link href={href} passHref>
      <a
        target={target}
        className="text-md md:text-lg px-2 lg:px-3 py-3 hover:text-blue-500 leading-none md:leading-none hover:underline cursor-pointer font-semibold"
      >
        {text}
      </a>
    </Link>
  );
};
