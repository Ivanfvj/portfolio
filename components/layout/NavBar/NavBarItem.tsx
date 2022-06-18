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
        className="text-md md:text-xl px-3 py-3 hover:text-blue-500 hover:underline cursor-pointer font-semibold"
      >
        {text}
      </a>
    </Link>
  );
};
