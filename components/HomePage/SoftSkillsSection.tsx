import colors from "tailwindcss/colors";

import MaterialChip, {
  MaterialChipSize,
} from "@components/shared/material/MaterialChip";

type SoftSkillChipType = {
  text: string;
  description: string;
  size: MaterialChipSize;
  color: string;
};

const softSkills: SoftSkillChipType[] = [
  {
    text: "Communication",
    description: "Success for startups is based on good team communication",
    size: "x-large",
    color: colors.blue["100"],
  },
  {
    text: "Leadership",
    description: "Leadership",
    size: "large",
    color: colors.amber["200"],
  },
  {
    text: "Creativity",
    description: "Creativity",
    size: "medium",
    color: colors.yellow["200"],
  },
  {
    text: "Execution First",
    description: "Leadership",
    size: "x-large",
    color: colors.purple["200"],
  },
  {
    text: "Team Work",
    description: "Leadership",
    size: "x-large",
    color: colors.green["100"],
  },
  {
    text: "Analytical",
    description: "Analytical",
    size: "large",
    color: colors.cyan["100"],
  },
  {
    text: "Productivity",
    description: "Productivity",
    size: "large",
    color: colors.orange["100"],
  },
  {
    text: "Honesty",
    description: "Honesty",
    size: "x-large",
    color: colors.rose["100"],
  },
  {
    text: "Time management",
    description: "Time management",
    size: "large",
    color: colors.lime["100"],
  },
  {
    text: "Startup Culture",
    description: "Startup Culture",
    size: "x-large",
    color: colors.red["200"],
  },
  {
    text: "Positive Attitude",
    description: "Positive Attitude",
    size: "x-large",
    color: colors.green["200"],
  },
  {
    text: "Growth mindset",
    description: "Growth mindset",
    size: "large",
    color: colors.cyan["300"],
  },
  {
    text: "Innovation",
    description: "Innovation",
    size: "x-large",
    color: colors.rose["300"],
  },
];

const SoftSkillsSection = () => {
  return (
    <div>
      <div className="border border-gray-200 bg-white p-5">
        <h1 className="text-4xl md:text-5xl text-center my-5">
          Soft Skills - Mental Map
        </h1>

        <div className="my-5 flex flex-wrap justify-center items-center max-w-4xl mx-auto space-x-2">
          {softSkills.map((e) => {
            return (
              <MaterialChip
                key={e.text}
                className="mt-2 hover:scale-110 select-none noselect"
                text={e.text}
                size={e.size}
                color={e.color}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SoftSkillsSection;
