import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import ActionButton from "../../components/shared/material/ActionButton";
import Chip from "../../components/shared/material/MaterialChip";
import { BaseReactProps } from "../../common";

interface Props extends BaseReactProps, ProjectInfo {}

interface Technology {
  text: string;
}
interface ProjectInfo {
  title: string;
  id: string;
  headline?: string;
  description?: string;
  image?: string;
  stack?: Technology[];
  tags?: string[];
  categories?: Technology[];
  link?: string;
  to?: string;
  featured?: boolean;
}

const ProjectCard = (props: Props) => {
  return (
    <div className="flex flex-col bg-white cursor-pointer rounded-lg hover:shadow-lg transition duration-200 ease overflow-hidden border">
      <div className="relative w-full h-64 overflow-hidden border-1 border-b">
        <Image
          src={props.image}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="p-5 pb-2 flex flex-col flex-1 overflow-hidden">
        <h1 className="text-2xl mb-2">{props.title}</h1>
        {props.headline && (
          <p className="mb-2">
            <strong>{props.headline}</strong>
          </p>
        )}
        {props.stack && props.stack.length > 0 && (
          <ul className="flex flex-wrap">
            {props.stack.map((e) => {
              return (
                <li key={e.text} className="my-1 mr-1">
                  <Chip text={e.text} size="x-small" />
                </li>
              );
            })}
          </ul>
        )}
        <div className="grow"></div>
      </div>
      <hr className="mt-1 mb-3" />
      <div className="flex justify-end px-3 pb-3">
        <Link href={props.to || props.link} passHref>
          <a target={props.to ? "" : "_blank"}>
            <ActionButton text="Visit site" />
          </a>
        </Link>
      </div>
    </div>
  );
};

const projects: ProjectInfo[] = [
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
    // link: "/projects/unamacro/#blog",
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
    // link: "/projects/unamacro/#blog",
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
    link: "https://trimm.tv",
    // link: "/projects/trimm",
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
    // link: "/projects/mejorate.online",
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
    // link: "/projects/hormiga",
    link: "https://hormiga.ec/inmuebles?transactionType=sale&property_type=all",
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
    // link: "/projects/personal-brand",
    link: "https://catamaldonado.com/",
  },
  // {
  //   id: "chichobox",
  //   title: "Chichobox",
  //   image: "/portrait.jpg",
  //   categories: [{ text: "webapp" }],
  //   stack: [{ text: "Vite" }, { text: "React" }],
  //   tags: ["marketing"],
  //   link: "/projects/chichobox",
  // },
  {
    id: "IoT",
    title: "Internet of Things - Thesis",
    headline: "IoT Platform for Industry 4.0",
    image:
      "https://www.unamacro.com/wp-content/uploads/2022/04/thesis-iot-diagram-2.jpg",
    categories: [{ text: "mobile" }],
    stack: [{ text: "MQTT" }, { text: "Javascript" }, { text: "IoT" }],
    tags: ["marketing"],
    link: "https://dspace.uazuay.edu.ec/bitstream/datos/9814/1/15444.pdf",
  },
];

const landingPagesCreated = [
  {
    text: "Unamacro - Marketing sin Confusión",
    image: "",
    url: "https://www.unamacro.com/marketing-sin-confusion/",
  },
  {
    text: "Unamacro - Kit Email Marketing",
    image: "",
    url: "https://www.unamacro.com/kit-email-marketing/",
  },
  {
    text: "Drones y SIG para la gestión del territorio",
    image: "",
    url: "https://mejorate.online/drones-y-sig-para-gestion-del-territorio/",
  },
  {
    text: "Pisos con Resina epóxica",
    image: "",
    url: "https://mejorate.online/pisos-con-resina/",
  },
  {
    text: "Terapia con Imanes",
    image: "",
    url: "https://mejorate.online/terapia-con-imanes/",
  },
  {
    text: "Yoga Facial con Aromaterapia",
    image: "",
    url: "https://mejorate.online/yoga-facial-con-aromaterapia/",
  },
  {
    text: "Pastelería Canina y Felina",
    image: "",
    url: "https://mejorate.online/pasteleria-canina-y-felina/",
  },
  {
    text: "Costura Premium",
    image: "",
    url: "https://mejorate.online/costura-premium/",
  },
  {
    text: "Curso de Drones",
    image: "",
    url: "https://mejorate.online/curso-manejo-de-drones/",
  },
];

const AboutPage = () => (
  <Layout title="Projects | Portfolio" className="bg-gray-50 bg-opacity-50">
    <section className="py-5 bg-black">
      <h1 className="text-center text-4xl text-white lg:text-5xl my-10">
        Portfolio and Projects
      </h1>
    </section>
    {/* <section className="p-5 my-8 max-w-6xl mx-auto">
    </section> */}
    <div className="p-5 my-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3">
        {projects.map((e) => {
          return <ProjectCard key={e.id} {...e} />;
        })}
      </div>
    </div>
    <section className="py-5 bg-black">
      <h1 className="text-center text-4xl text-white lg:text-5xl my-10">
        Marketing Projects
      </h1>
    </section>
    <div className="p-5 my-8 max-w-6xl mx-auto">
      <h2 className="mt-5 font-semibold mb-3">Landing pages</h2>

      <ul className="list-inside list-disc">
        {landingPagesCreated.map((e) => {
          return (
            <li key={e.text}>
              <a
                className="text-blue-500 text-lg underline hover:text-blue-600"
                href={e.url}
                target="_blank"
              >
                {e.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  </Layout>
);

export default AboutPage;
