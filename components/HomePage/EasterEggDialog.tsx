import { useEffect, useContext } from "react";
import { HomePageContext } from "../../contexts/HomePage";
import ActionButton from "../shared/material/ActionButton";

interface Props {
  onClose?: () => void;
}

const EasterEggDialog = (props: Props) => {
  const { setShowEasterEgg } = useContext(HomePageContext);
  const close = () => {
    setShowEasterEgg(false);
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (["escape", "enter"].includes(key)) {
        close();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div
      className="sticky w-full h-screen top-0 flex flex-col justify-center items-center
     bg-yellow-200 bg-opacity-80 z-10 transition-opacity delay-150 ease-in duration-200"
    >
      {/* <div className="relative"> */}
      <div
        className="absolute z-10 w-full h-full flex items-center justify-center opacity-80"
        style={{
          backgroundImage: `url("/confetti-sm.gif")`,
        }}
      ></div>
      <div className="text-center z-20 space-y-2 bg-white p-5 rounded border-2">
        <h1>¡You are awesome!</h1>
        <p>¿Do you feel like Indiana Jones already?</p>
        <ActionButton text="Yes, now take me back xD" onClick={close} />
      </div>
    </div>
    // </div>
  );
};

export default EasterEggDialog;
