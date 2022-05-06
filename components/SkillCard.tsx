import { BaseReactProps } from "../common";
import { ISkill } from "../interfaces/skill";

interface Props extends BaseReactProps {
  size?: number;
  skill: ISkill;
}

export const SkillCard = (props: Props) => {
  const size = props.size || 50;
  const tooltipId = `tooltip-${props.skill.text}`;
  return (
    <div
      className={`cursor-pointer inline-block rounded bg-gray-100 border hover:shadow-md transition duration-100 ease ${
        props.className ? props.className : ""
      }`.trim()}
    >
      <div data-tooltip-target={tooltipId} className="rounded bg-gray-100 p-3">
        <img
          className="mx-auto"
          width={size}
          height={size}
          alt=""
          src={props.skill.image}
        />
      </div>
      <div
        id={tooltipId}
        role="tooltip"
        className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
      >
        {props.skill.text}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  );
};
