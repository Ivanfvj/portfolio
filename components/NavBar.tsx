import React from "react";
import Link from "next/link";

type Props = {
  //   children?: ReactNode;
  //   title?: string;
};

type NavBarItemProps = {
  text?: string;
  href?: string;
};

const NavBarItem = ({ text, href }: NavBarItemProps) => {
  return (
    <div className="bg-white px-3 py-3 rounded hover:drop-shadow-md transition ease-in-out delay-150 cursor-pointer">
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </div>
  );
};

const NavBar = ({}: Props) => (
  <nav className="p-8 border-2 border-slate-50 flex justify-end space-x-2">
    <NavBarItem href="/" text="Home" />
    <NavBarItem href="/about" text="About" />
    <NavBarItem href="/users" text="Users List" />
    <NavBarItem href="/api/users" text="Users API" />
  </nav>
);

export default NavBar;
