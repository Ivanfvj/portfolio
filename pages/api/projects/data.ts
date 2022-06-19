import { ProjectInfo } from "../../../interfaces";

export const projects: ProjectInfo[] = [
  {
    id: "unamacro",
    title: "Unamacro SaaS",
    featured: true,
    headline: "Marketing Automation SaaS",
    // description: "Marketing Automation SaaS",
    image:
      "https://www.unamacro.com/wp-content/uploads/2021/08/PortfolioUnamacro-CRM.png",
    categories: [{ text: "website" }],
    stack: [
      { text: "DDD" },
      { text: "Typescript" },
      { text: "Vue.js" },
      { text: "Nuxt.js" },
      { text: "Vuetify" },
      { text: "Node.js" },
      { text: "MongoDB" },
      { text: "AWS" },
      { text: "GCP" },
      { text: "Redis" },
    ],
    tags: ["marketing", "crm", "automation", "email-marketing"],
    to: "/projects/unamacro",
  },
  {
    id: "unamacro-blog",
    title: "Unamacro Blog",
    featured: true,
    headline: "Marketing Blog for Entrepreneurs",
    image: "https://blog.unamacro.com/img/workflow-screenshot.jpg",
    categories: [{ text: "website" }, { text: "DDD" }],
    stack: [
      { text: "DDD" },
      { text: "Typescript" },
      { text: "Vue.js" },
      { text: "Vuetify" },
      { text: "Nuxt.js" },
      { text: "Node.js" },
      { text: "Nest.js" },
      { text: "MongoDB" },
    ],
    tags: ["marketing"],
    link: "https://blog.unamacro.com",
  },
  {
    id: "unamacro-website",
    title: "Unamacro Website",
    headline: "Startup Website",
    featured: true,
    image:
      "https://www.unamacro.com/wp-content/uploads/2021/08/Captura-de-Pantalla-2021-08-12-a-las-21.21.08.png",
    categories: [{ text: "website" }],
    stack: [{ text: "Wordpress" }, { text: "SEO" }, { text: "Marketing" }],
    tags: ["marketing"],
    link: "https://www.unamacro.com",
  },
  {
    id: "trimm",
    title: "Trimm.tv",
    featured: true,
    image:
      "https://www.unamacro.com/wp-content/uploads/2022/04/trimm-tv-banner.jpg",
    headline: "Video platform",
    categories: [{ text: "website" }],
    stack: [
      { text: "DDD" },
      { text: "Typescript" },
      { text: "Vue.js" },
      { text: "Vuetify" },
      { text: "Nuxt.js" },
      { text: "Node.js" },
      { text: "MongoDB" },
    ],
    tags: ["marketing"],
    to: "/projects/trimm",
  },
  {
    id: "mejorate.online",
    title: "Mejorate.online",
    featured: true,
    headline: "E-commerce - Online Courses",
    image:
      "https://www.unamacro.com/wp-content/uploads/2022/04/mejorate-online-banner.jpg",
    categories: [{ text: "website" }],
    stack: [
      { text: "Wordpress" },
      { text: "E-commerce" },
      { text: "Web Design" },
      { text: "Affiliate Marketing" },
    ],
    tags: ["marketing"],
    link: "https://mejorate.online",
  },
  {
    id: "portfolio",
    title: "My personal Website",
    headline: "This website ;)",
    image: "/portrait.jpg",
    categories: [{ text: "website" }],
    stack: [
      { text: "Typescript" },
      { text: "Next.js" },
      { text: "React" },
      { text: "Tailwind CSS" },
    ],
    tags: ["marketing"],
    link: "/projects/portfolio",
  },
  {
    id: "hormiga",
    title: "Hormiga.ec",
    headline: "Real Estate Web Page",
    image:
      "https://www.unamacro.com/wp-content/uploads/2021/08/PortfolioUnamacro-hormigaec.png",
    categories: [{ text: "website" }],
    stack: [
      { text: "Vue.js" },
      { text: "Nuxt.js" },
      { text: "AWS" },
      { text: "Amazon S3" },
      { text: "Amazon EC2" },
      { text: "Strapi.js" },
      { text: "PWA" },
    ],
    tags: ["marketing"],
    link: "https://realstate.unamacro.com/inmuebles?transactionType=sale&property_type=all",
  },
  {
    id: "eljuri",
    title: "Eljuri Android Apps",
    headline: "Android Apps connected with SAP",
    image:
      "https://www.unamacro.com/wp-content/uploads/2022/04/eljuri-android-apps.jpg",
    categories: [{ text: "mobile" }],
    stack: [
      { text: "Android" },
      { text: "SQL Server" },
      { text: "C#" },
      { text: "SAP" },
    ],
    tags: ["marketing"],
    to: "/projects/eljuri",
  },
  {
    id: "proelectronic",
    title: "Proelectronic.com.ec",
    headline: "Wordpress Website - Engineering Services",
    image:
      "https://www.unamacro.com/wp-content/uploads/2021/08/PortfolioUnamacro-Proelectronic.png",
    categories: [{ text: "website" }],
    stack: [{ text: "Wordpress" }, { text: "Web Design" }],
    tags: ["marketing"],
    link: "https://www.proelectronic.com.ec",
  },
  {
    id: "personal-brand-web",
    title: "Personal Brand Webpage",
    headline: "Wordpress Website - Personal Brand",
    image:
      "https://www.unamacro.com/wp-content/uploads/2021/08/PortfolioUnamacroCatamaldonado.png",
    categories: [{ text: "website" }],
    stack: [{ text: "Wordpress" }, { text: "Web Design" }],
    tags: ["marketing", "wordpress"],
    link: "https://catamaldonado.com/",
  },
  {
    id: "IoT",
    title: "Internet of Things - Thesis",
    headline: "IoT Platform for Industry 4.0",
    image:
      "https://www.unamacro.com/wp-content/uploads/2022/04/thesis-iot-diagram-2.jpg",
    categories: [{ text: "mobile" }],
    stack: [{ text: "MQTT" }, { text: "Javascript" }, { text: "IoT" }],
    tags: ["marketing"],
    link: "https://www.unamacro.com/wp-content/uploads/2022/05/Ivan-Velastegui-Thesis-work.pdf",
  },
];
