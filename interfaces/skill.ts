export const SkillCategories = {
  BACKEND: "backend",
  FRONTEND: "frontend",
  DATABASE: "database",
  INFRASTRUCTURE: "infrastructure",
  DESIGN: "design",
  MARKETING: "marketing",
  AGILE: "agile",
  TOOLS: "tools",
  COMMUNICATION: "communication",
  OTHER: "other",
} as const;

export const ProficiencyTypes = {
  NOOB: "noob",
  INTERMEDIATE: "intermediate",
  EXPERT: "expert",
};

export type SkillCategory =
  typeof SkillCategories[keyof typeof SkillCategories];
export type ProficiencyType =
  typeof ProficiencyTypes[keyof typeof ProficiencyTypes];

export interface ISkill {
  text: string;
  image: string;
  category: SkillCategory;
  proficiency: ProficiencyType;
}
