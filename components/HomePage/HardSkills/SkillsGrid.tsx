import { ISkill } from "../../../interfaces/skill";
import LogoCard from "../../LogoCard";
import { EasiestEasterEgg } from "./EasiestEasterEgg";

interface SkillsGridProps {
  skills: ISkill[];
}

export const SkillsGrid = (props: SkillsGridProps) => {
  return (
    <div className="flex flex-wrap">
      {props.skills.length === 0 ? (
        <EasiestEasterEgg />
      ) : (
        props.skills.map((e, index) => (
          <div key={index} className="w-1/2 md:w-1/4 mb-4 px-2">
            <LogoCard
              className="mx-auto"
              text={e.text}
              imageUrl={e.image}
              proficiency={e.proficiency}
            />
          </div>
        ))
      )}
    </div>
  );
};
