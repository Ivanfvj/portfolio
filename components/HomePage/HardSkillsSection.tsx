import { useState, useContext } from "react";
import LogoCard from "../../components/LogoCard";
import Chip from "../../components/shared/Chip";
import ActionButton from "../shared/material/ActionButton";
import { HomePageContext } from "../../contexts/HomePage";
import { SkillCategories } from "../../interfaces/skill";
import { hardSkillsArray } from "../../utils/skills-data";
import Tabs from "../shared/material/tabs/Tabs";
import Tab from "../shared/material/tabs/Tab";

const skillsCategories = [
  { text: "Backend", value: SkillCategories.BACKEND },
  { text: "Frontend", value: SkillCategories.FRONTEND },
  { text: "Databases", value: SkillCategories.DATABASE },
  { text: "Infrastructure", value: SkillCategories.INFRASTRUCTURE },
  { text: "Others", value: SkillCategories.OTHER },
];

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

  const skillsFiltered = hardSkillsArray.filter((e) => {
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
        {/* <div className="flex">
          <Tabs grow className="w-full">
            <Tab text="Software Development" />
            <Tab text="Marketing/Design" />
          </Tabs>
        </div> */}
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
