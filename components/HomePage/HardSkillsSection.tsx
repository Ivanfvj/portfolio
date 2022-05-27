import { useState, useContext } from "react";
import LogoCard from "../../components/LogoCard";
import Chip from "../../components/shared/Chip";
import ActionButton from "../shared/material/ActionButton";
import { HomePageContext } from "../../contexts/HomePage";
import Tabs from "../shared/material/tabs/Tabs";
import Tab from "../shared/material/tabs/Tab";
import { motion } from "framer-motion";

import {
  softwareSkillsArray,
  softwareSkillsCategories,
  marketingSkillsArray,
  marketingSkillsCategories,
  pmSkillsArray,
  pmSkillsCategories,
} from "../../utils/skills-data";

interface CategoryFilter {
  text: string;
  value: string;
  active: boolean;
}

const createDefaultFilters = (categories: any[]): CategoryFilter[] => {
  return categories.map((e) => {
    return {
      text: e.text,
      value: e.value,
      active: true,
    };
  });
};

const defaultSoftwareCategoriesSelected = createDefaultFilters(
  softwareSkillsCategories
);
const defaultMarketingCategoriesSelected = createDefaultFilters(
  marketingSkillsCategories
);
const defaultPmCategoriesSelected = createDefaultFilters(pmSkillsCategories);

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const HardSkillsSection = () => {
  // MULTIPLE CATEGORIES LOGIC HARDCODED FOR THE MOMENT
  // Software Categories/ skills
  // Marketing categories/ skills
  // Project Management/ skills
  const [tabSelected, setTabSelected] = useState(0);

  const [softwareCategories, setSoftwareCategories] = useState(
    defaultSoftwareCategoriesSelected
  );
  const [marketingCategories, setMarketingCategories] = useState(
    defaultMarketingCategoriesSelected
  );
  const [pmCategories, setPmCategories] = useState(defaultPmCategoriesSelected);

  const softwareCategoriesSelected = softwareCategories
    .filter((e) => e.active)
    .map((e) => e.value);
  const marketingCategoriesSelected = marketingCategories
    .filter((e) => e.active)
    .map((e) => e.value);
  const pmCategoriesSelected = pmCategories
    .filter((e) => e.active)
    .map((e) => e.value);

  const isAllSoftwareCategoriesSelected =
    softwareCategoriesSelected.length === softwareSkillsCategories.length;
  const isAllMarketingCategoriesSelected =
    marketingCategoriesSelected.length === marketingSkillsCategories.length;
  const isAllPmCategoriesSelected =
    pmCategoriesSelected.length === pmSkillsCategories.length;

  const softwareSkillsFiltered = softwareSkillsArray.filter((e) => {
    return softwareCategoriesSelected.includes(e.category);
  });
  const marketingSkillsFiltered = marketingSkillsArray.filter((e) => {
    return marketingCategoriesSelected.includes(e.category);
  });

  const pmSkillsFiltered = pmSkillsArray.filter((e) => {
    return pmCategoriesSelected.includes(e.category);
  });

  const toggleAllCategories = (active: boolean, key: string) => {
    switch (key) {
      case "marketing":
        setMarketingCategories(
          defaultMarketingCategoriesSelected.map((e) => {
            return { ...e, active: active };
          })
        );
        break;
      case "pm":
        setPmCategories(
          defaultPmCategoriesSelected.map((e) => {
            return { ...e, active: active };
          })
        );
        break;
      case "software":
      default:
        setSoftwareCategories(
          defaultSoftwareCategoriesSelected.map((e) => {
            return { ...e, active: active };
          })
        );
        break;
    }
    document.getElementById("hard-skills").scrollIntoView();
  };

  const updateCategoryActiveSoftware = (category: string, active: boolean) => {
    const foundedCategory = softwareCategories.find(
      (e) => e.value === category
    );
    if (foundedCategory) {
      const index = softwareCategories.indexOf(foundedCategory);
      let copy = [...softwareCategories];
      if (isAllSoftwareCategoriesSelected) {
        // Then disable all chips
        copy = copy.map((e) => {
          return { ...e, active: false };
        });
        active = true;
      }
      copy.splice(index, 1, { ...foundedCategory, active });
      setSoftwareCategories(copy);
    }
  };

  const updateCategoryActiveMarketing = (category: string, active: boolean) => {
    const foundedCategory = marketingCategories.find(
      (e) => e.value === category
    );
    if (foundedCategory) {
      const index = marketingCategories.indexOf(foundedCategory);
      let copy = [...marketingCategories];
      if (isAllMarketingCategoriesSelected) {
        // Then disable all chips
        copy = copy.map((e) => {
          return { ...e, active: false };
        });
        active = true;
      }
      copy.splice(index, 1, { ...foundedCategory, active });
      setMarketingCategories(copy);
    }
  };

  const updateCategoryActivePm = (category: string, active: boolean) => {
    const foundedCategory = pmCategories.find((e) => e.value === category);
    if (foundedCategory) {
      const index = pmCategories.indexOf(foundedCategory);
      let copy = [...pmCategories];
      if (isAllPmCategoriesSelected) {
        // Then disable all chips
        copy = copy.map((e) => {
          return { ...e, active: false };
        });
        active = true;
      }
      copy.splice(index, 1, { ...foundedCategory, active });
      setPmCategories(copy);
    }
  };

  const onTabSelected = (tabIndex: number) => {
    setTabSelected(tabIndex);
    document.getElementById("hard-skills").scrollIntoView();
  };

  return (
    <div className="bg-white">
      <div
        id="hard-skills"
        className="border border-x-0 sm:border-x border-gray-200"
      >
        <h1 className="text-4xl md:text-5xl mx-auto text-center my-5">
          Hard Skills
        </h1>
        <div className="sticky top-0">
          <div className="flex">
            <Tabs grow className="w-full" onChange={onTabSelected}>
              <Tab text="Software Development" />
              <Tab text="Design/Marketing" />
              <Tab text="Project Management" />
            </Tabs>
          </div>

          <div className="px-5 py-5 text-center bg-gray-800">
            <motion.div
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
              transition={{ type: "linear" }}
              id="hard-skills-filter"
              className="flex flex-wrap space-x-3 text-center justify-center"
            >
              {(() => {
                if (tabSelected === 0) {
                  return (
                    <CategoryFilters
                      categories={softwareCategories}
                      isAllSelected={isAllSoftwareCategoriesSelected}
                      toggleAllCategories={(active: boolean) =>
                        toggleAllCategories(active, "software")
                      }
                      onChange={(value: string, active: boolean) => {
                        updateCategoryActiveSoftware(value, active);
                      }}
                    />
                  );
                } else if (tabSelected === 1) {
                  return (
                    <CategoryFilters
                      categories={marketingCategories}
                      isAllSelected={isAllMarketingCategoriesSelected}
                      toggleAllCategories={(active: boolean) =>
                        toggleAllCategories(active, "marketing")
                      }
                      onChange={(value: string, active: boolean) => {
                        updateCategoryActiveMarketing(value, active);
                      }}
                    />
                  );
                } else {
                  return (
                    <CategoryFilters
                      categories={pmCategories}
                      isAllSelected={isAllPmCategoriesSelected}
                      toggleAllCategories={(active: boolean) =>
                        toggleAllCategories(active, "pm")
                      }
                      onChange={(value: string, active: boolean) => {
                        updateCategoryActivePm(value, active);
                      }}
                    />
                  );
                }
              })()}
            </motion.div>
          </div>
        </div>

        <div className="p-5 bg-white">
          {tabSelected == 0 ? (
            <SkillsGrid skills={softwareSkillsFiltered} />
          ) : tabSelected == 1 ? (
            <SkillsGrid skills={marketingSkillsFiltered} />
          ) : (
            <SkillsGrid skills={pmSkillsFiltered} />
          )}
        </div>
      </div>
    </div>
  );
};

type CategoriesFiltersProps = {
  categories: CategoryFilter[];
  isAllSelected?: boolean;
  toggleAllCategories?: (active: boolean) => void;
  onChange?: (value: string, active: boolean) => void;
};

const CategoryFilters = (props: CategoriesFiltersProps) => {
  return (
    <>
      <Chip
        className="my-2"
        text="All"
        active={props.isAllSelected}
        onChange={props.toggleAllCategories}
      />
      {props.categories.map((e) => (
        <Chip
          key={e.text}
          className="my-2"
          text={e.text}
          active={e.active}
          onChange={(active: boolean) => {
            props.onChange(e.value, active);
          }}
        />
      ))}
    </>
  );
};

type SkillsGridProps = {
  skills: any[];
};

const SkillsGrid = (props: SkillsGridProps) => {
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
