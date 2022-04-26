import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Footer = ({ children }: Props) => (
  <footer className="w-100 bg-blue-200 py-8">
    <div className="text-center text-2xl">
      <p>🛠️ Working on Footer 🛠️</p>
    </div>
  </footer>
);

export default Footer;
