import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Footer = ({ children }: Props) => (
  <footer className="w-100 bg-blue-200 py-8">
    <div className="text-center ">
      <p className="text-2xl mb-4">🛠️ Working on Footer 🛠️</p>
      <p>
        This website is developed with Next.js, Typescript, Tailwind CSS and
        deployed to Vercel
      </p>
    </div>
  </footer>
);

export default Footer;
