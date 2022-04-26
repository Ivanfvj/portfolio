import MaterialChip, {
  MaterialChipSize,
} from "../shared/material/MaterialChip";
import colors from "tailwindcss/colors";

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
];

{
  /* <h1>Leadership</h1>
            <p>With a good communication with our team</p>
            <h1>Creativity</h1>
            <p>With the hand of innovation</p>
            <h1>Mindset</h1>
            <h1>Execution First</h1>*/
}

const SoftSkillsSection = () => {
  return (
    <div>
      <div className="border border-gray-200 bg-white p-5">
      <h1 className="text-5xl text-center my-5">Soft Skills - Mental Map</h1>
        <h2 className="text-center">Some things i have inside my head</h2>

        <div className="my-5 flex flex-wrap justify-center items-center max-w-3xl mx-auto space-x-2">
          {softSkills.map((e) => {
            return (
              <MaterialChip
                className="mt-2 hover:scale-[1.1]"
                text={e.text}
                size={e.size}
                color={e.color}
              />
            );
          })}
          {/* <div className="">
            <p>
              Here a link{" "}
              <a href="https://blog.unamacro.com/ivanfvj" className="underline">
                to my blog
              </a>{" "}
              where i talk about things i learned all along the way
            </p>
            <p>Team communication is a must.</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SoftSkillsSection;
