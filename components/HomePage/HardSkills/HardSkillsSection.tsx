import { useState } from "react";
import { motion } from "framer-motion";

import Tabs from "../../shared/material/tabs/Tabs";
import Tab from "../../shared/material/tabs/Tab";
import { CategoryFilters, ICategoryFilter } from "./CategoryFilter";
import { SkillsGrid } from "./SkillsGrid";

import {
  softwareSkillsArray,
  softwareSkillsCategories,
  marketingSkillsArray,
  marketingSkillsCategories,
  pmSkillsArray,
  pmSkillsCategories,
} from "../../../utils/skills-data";

const createDefaultFilters = (categories: any[]): ICategoryFilter[] => {
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

const motionVariants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const HardSkillsSection = () => {
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
          <div className="flex overflow-hidden">
            <Tabs
              grow
              className="w-full"
              value={tabSelected}
              onChange={onTabSelected}
            >
              <Tab text="Software Development" />
              <Tab text="Design/Marketing" />
              <Tab text="Project Management" />
            </Tabs>
          </div>

          {/* TODO: Here use composition */}
          <div className="px-5 py-3 md:py-5 text-center bg-gray-800">
            <motion.div
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={motionVariants}
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

export default HardSkillsSection;
