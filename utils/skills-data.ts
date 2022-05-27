import { SkillCategories, ISkill, ProficiencyTypes } from "../interfaces/skill";

export const softwareSkillsCategories = [
  { text: "Backend", value: SkillCategories.BACKEND },
  { text: "Frontend", value: SkillCategories.FRONTEND },
  { text: "Databases", value: SkillCategories.DATABASE },
  { text: "Infrastructure", value: SkillCategories.INFRASTRUCTURE },
  { text: "Others", value: SkillCategories.OTHER },
];

export const marketingSkillsCategories = [
  { text: "Design", value: SkillCategories.DESIGN },
  { text: "Marketing", value: SkillCategories.MARKETING },
  { text: "Others", value: SkillCategories.OTHER },
];

export const pmSkillsCategories = [
  { text: "Agile", value: SkillCategories.AGILE },
  { text: "Others", value: SkillCategories.OTHER },
];

export const SoftwareSkills = {
  VUE: {
    text: "Vue.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.EXPERT,
  },
  NUXT: {
    text: "Nuxt.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.EXPERT,
  },
  NESTJS: {
    text: "Nest.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
    category: SkillCategories.BACKEND,
    proficiency: ProficiencyTypes.EXPERT,
  },
  NODEJS: {
    text: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: SkillCategories.BACKEND,
    proficiency: ProficiencyTypes.EXPERT,
  },
  EXPRESSJS: {
    text: "Express.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    category: SkillCategories.BACKEND,
    proficiency: ProficiencyTypes.EXPERT,
  },
  TYPESCRIPT: {
    text: "Typescript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.EXPERT,
  },
  JAVASCRIPT: {
    text: "Javascript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.EXPERT,
  },
  AWS: {
    text: "AWS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    category: SkillCategories.INFRASTRUCTURE,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  GCP: {
    text: "Google Cloud",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    category: SkillCategories.INFRASTRUCTURE,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  JAVA: {
    text: "Java",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
    category: SkillCategories.BACKEND,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  MONGODB: {
    text: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    category: SkillCategories.DATABASE,
    proficiency: ProficiencyTypes.EXPERT,
  },
  SQL: {
    text: "SQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
    category: SkillCategories.DATABASE,
    proficiency: ProficiencyTypes.EXPERT,
  },
  SASS: {
    text: "Sass",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.EXPERT,
  },
  VUETIFY: {
    text: "Vuetify",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.EXPERT,
  },
  ANDROID: {
    text: "Android",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  FLUTTER: {
    text: "Flutter",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.NOOB,
  },
  REDIS: {
    text: "Redis",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg",
    category: SkillCategories.DATABASE,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  DOCKER: {
    text: "Docker",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg",
    category: SkillCategories.INFRASTRUCTURE,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  LINUX: {
    text: "Linux",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    category: SkillCategories.INFRASTRUCTURE,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  GIT: {
    text: "Git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: SkillCategories.OTHER,
    proficiency: ProficiencyTypes.EXPERT,
  },
  TAILWINDCSS: {
    text: "Tailwindcss",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  REACT: {
    text: "React.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.NOOB,
  },
  NEXT: {
    text: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.NOOB,
  },
  WORDPRESS: {
    text: "Wordpress",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    category: SkillCategories.FRONTEND,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
};

export const MarketingSkills = {
  FIGMA: {
    text: "Figma",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    category: SkillCategories.DESIGN,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  UI_UX: {
    text: "UI/UX",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    category: SkillCategories.DESIGN,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  FACEBOOK_ADS: {
    text: "Facebook Ads",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    category: SkillCategories.MARKETING,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  GOOGLE_ADS: {
    text: "Google Ads",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    category: SkillCategories.MARKETING,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  EMAIL_MARKETING: {
    text: "Email Marketing",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    category: SkillCategories.MARKETING,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  SALES_FUNNELS: {
    text: "Sales Funnels",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    category: SkillCategories.MARKETING,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  MARKETING_AUTOMATION: {
    text: "Marketing Automation",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    category: SkillCategories.MARKETING,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  COPYWRITING: {
    text: "Copywriting",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    category: SkillCategories.MARKETING,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  STORYTELLING: {
    text: "Storytelling",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    category: SkillCategories.MARKETING,
    proficiency: ProficiencyTypes.NOOB,
  },
  LANDING_PAGES: {
    text: "Landing Pages",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    category: SkillCategories.DESIGN,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  TIK_TOK: {
    text: "TikTok Strategy",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    category: SkillCategories.MARKETING,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
};

export const PMSkills = {
  NOTION: {
    text: "Notion",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    category: SkillCategories.OTHER,
    proficiency: ProficiencyTypes.EXPERT,
  },
  SCRUM: {
    text: "Scrum",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    category: SkillCategories.AGILE,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  KANBAN: {
    text: "Kanban",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    category: SkillCategories.AGILE,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  JIRA: {
    text: "Jira",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    category: SkillCategories.OTHER,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  TRELLO: {
    text: "Trello",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    category: SkillCategories.OTHER,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
  EXCEL: {
    text: "Excel",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    category: SkillCategories.OTHER,
    proficiency: ProficiencyTypes.INTERMEDIATE,
  },
};

export const softwareSkillsArray: ISkill[] = Object.values(SoftwareSkills).sort(
  (a, z) => {
    return a.proficiency.localeCompare(z.proficiency);
  }
);
export const marketingSkillsArray: ISkill[] = Object.values(
  MarketingSkills
).sort((a, z) => {
  return a.proficiency.localeCompare(z.proficiency);
});

export const pmSkillsArray: ISkill[] = Object.values(PMSkills).sort((a, z) => {
  return a.proficiency.localeCompare(z.proficiency);
});
