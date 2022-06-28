import { useHomeContext } from "../../../contexts/HomePage";
import ActionButton from "../../shared/material/ActionButton";

export const EasiestEasterEgg = () => {
  const { setShowEasterEgg } = useHomeContext();

  return (
    <div className="flex flex-col mx-auto items-center justify-center p-5 bg-gray-100 border">
      <small>No filters selected - nothing here</small>
      <h1 className="text-yellow-400 text-3xl md:text-5xl mb-5">
        🎉 Congratulations 🎉
      </h1>
      <p>
        <u>You found the easiest Easter Egg</u>
      </p>
      <ActionButton
        className="mt-5"
        text="Claim my reward"
        onClick={() => setShowEasterEgg(true)}
      />
    </div>
  );
};
