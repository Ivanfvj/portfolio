import { useState, useContext } from "react";
import LogoCard from "../../components/LogoCard";
import Chip from "../../components/shared/Chip";
import ActionButton from "../shared/material/ActionButton";
import { HomePageContext } from "../../contexts/HomePage";

const SkillCategories = {
  BACKEND: "backend",
  FRONTEND: "frontend",
  DATABASE: "database",
  INFRASTRUCTURE: "infrastructure",
  OTHER: "other",
} as const;

const ProficiencyTypes = {
  NOOB: "noob",
  INTERMEDIATE: "intermediate",
  EXPERT: "expert",
};

type SkillCategory = typeof SkillCategories[keyof typeof SkillCategories];
type ProficiencyType = typeof ProficiencyTypes[keyof typeof ProficiencyTypes];

interface ISkill {
  text: string;
  image: string;
  category: SkillCategory;
  proficiency: ProficiencyType;
}

const skillsCategories = [
  { text: "Backend", value: SkillCategories.BACKEND },
  { text: "Frontend", value: SkillCategories.FRONTEND },
  { text: "Databases", value: SkillCategories.DATABASE },
  { text: "Infrastructure", value: SkillCategories.INFRASTRUCTURE },
  { text: "Others", value: SkillCategories.OTHER },
];

const hardSkills: ISkill[] = [
  {
    text: "Vue.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.EXPERT,
  },
  {
    text: "Nuxt.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.EXPERT,
  },
  {
    text: "Nest.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
    category: SkillCategories.BACKEND,
    proficiency: ProficiencyTypes.EXPERT,
  },
  {
    text: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: SkillCategories.BACKEND,
    proficiency: ProficiencyTypes.EXPERT,
  },

  {
    text: "Express.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    category: SkillCategories.BACKEND,
    proficiency: ProficiencyTypes.EXPERT,
  },
  {
    text: "Typescript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.EXPERT,
  },
  {
    text: "Javascript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.EXPERT,
  },
  {
    text: "AWS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    category: SkillCategories.INFRASTRUCTURE,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  {
    text: "Google Cloud",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    category: SkillCategories.INFRASTRUCTURE,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  {
    text: "Java",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
    category: SkillCategories.BACKEND,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  {
    text: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    category: SkillCategories.DATABASE,
    proficiency: ProficiencyTypes.EXPERT,
  },
  {
    text: "SQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
    category: SkillCategories.DATABASE,
    proficiency: ProficiencyTypes.EXPERT,
  },
  {
    text: "Sass",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.EXPERT,
  },
  {
    text: "Vuetify",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.EXPERT,
  },
  {
    text: "Android",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  {
    text: "Flutter",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.NOOB,
  },

  {
    text: "Redis",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg",
    category: SkillCategories.DATABASE,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  {
    text: "Docker",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg",
    category: SkillCategories.INFRASTRUCTURE,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  {
    text: "Linux",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    category: SkillCategories.INFRASTRUCTURE,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  {
    text: "Git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: SkillCategories.OTHER,
    proficiency: ProficiencyTypes.EXPERT,
  },
  {
    text: "Tailwindcss",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },

  {
    text: "React.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.NOOB,
  },
  {
    text: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.NOOB,
  },
  {
    text: "Wordpress",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
].sort((a, z) => {
  return a.proficiency.localeCompare(z.proficiency);
});

const defaultCategoriesSelected = skillsCategories.map((e) => {
  return {
    text: e.text,
    value: e.value,
    active: true,
  };
});

const HardSkillsSection = () => {
  const [categories, setCategories] = useState(defaultCategoriesSelected);

  const categoriesSelected = categories
    .filter((e) => e.active)
    .map((e) => e.value);

  const isAllCategoriesSelected =
    categoriesSelected.length === skillsCategories.length;

  const skillsFiltered = hardSkills.filter((e) => {
    return categoriesSelected.includes(e.category);
  });

  const toggleAllCategories = (active: boolean) => {
    setCategories(
      defaultCategoriesSelected.map((e) => {
        return { ...e, active: active };
      })
    );
    document.getElementById("hard-skills").scrollIntoView();
  };

  const updateCategoryActive = (category: string, active: boolean) => {
    const foundedCategory = categories.find((e) => e.value === category);
    if (foundedCategory) {
      const index = categories.indexOf(foundedCategory);
      let copy = [...categories];
      if (isAllCategoriesSelected) {
        // Then disable all chips
        copy = copy.map((e) => {
          return { ...e, active: false };
        });
        active = true;
      }
      copy.splice(index, 1, { ...foundedCategory, active });
      setCategories(copy);
    }
  };

  return (
    <div className="bg-white">
      <div id="hard-skills" className="border border-gray-200">
        <h1 className="text-4xl md:text-5xl mx-auto text-center my-5">
          Hard Skills
        </h1>
        <div className="px-5 py-5 text-center bg-gray-800 sticky top-0">
          <div
            id="hard-skills-filter"
            className="flex flex-wrap space-x-3 text-center justify-center"
          >
            <Chip
              className="my-2"
              text="All"
              active={isAllCategoriesSelected}
              onChange={toggleAllCategories}
            />
            {categories.map((e) => (
              <Chip
                key={e.text}
                className="my-2"
                text={e.text}
                active={e.active}
                onChange={(active: boolean) => {
                  updateCategoryActive(e.value, active);
                }}
              />
            ))}
          </div>
        </div>

        <div className="p-5 bg-white">
          <div className="flex flex-wrap">
            {skillsFiltered.length === 0 ? (
              <EasiestEasterEgg />
            ) : (
              skillsFiltered.map((e, index) => (
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
        </div>
      </div>
    </div>
  );
};

const EasiestEasterEgg = () => {
  const { setShowEasterEgg } = useContext(HomePageContext);

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

export default HardSkillsSection;
