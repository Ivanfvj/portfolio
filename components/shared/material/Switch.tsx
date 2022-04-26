import { useState } from "react";

interface Props {
  className?: string;
}

const Switch = (props: Props) => {
  const [active, setActive] = useState(false);

  return (
    <label
      htmlFor="toggle"
      className={`flex items-center cursor-pointer ${
        props.className ? props.className : ""
      }`.trim()}
    >
      <div className="relative">
        <input type="checkbox" id="toggle" className="sr-only" />
        <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
        <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
      </div>
    </label>
  );
};

export default Switch;
