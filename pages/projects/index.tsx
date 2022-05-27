import Layout from "../../components/Layout";
import Image from "next/image";
import { GetStaticProps } from "next";
import { ProjectInfo } from "../../interfaces";
import { projects } from "../api/projects/data";
import { ProjectCard } from "../../components/ProjectsPage/ProjectCard";
import { SkillCard } from "../../components/SkillCard";
import { SoftwareSkills } from "../../utils/skills-data";

interface PageProps {
  projects: ProjectInfo[];
}

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

const ProjectGrid = (props: PageProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3">
      {props.projects.map((e) => {
        return <ProjectCard key={e.id} {...e} />;
      })}
    </div>
  );
};

export default function ProjectsPage(props: PageProps) {
  return (
    <Layout title="Projects | Portfolio" className="bg-gray-50 bg-opacity-50">
      <section className="py-5 bg-black">
        <h1 className="text-center text-4xl text-white lg:text-5xl my-10">
          Portfolio and Projects
        </h1>
      </section>
      {/* <section className="px-2 sm:px-0 py-8 bg-white">
        <div className="max-w-6xl mx-auto ">
          <a href="#startup" className="hover:underline">
            <h1 id="startup">Startup Projects</h1>
          </a>
          <div>
            <Image src="/unamacro-logo.png" width={50} height={50} />
          </div>
          <h2>Unamacro</h2>
          <p>MEVN Stack</p>
          <div className="border border-gray-200 p-5 rounded">
            <div className="flex flex-wrap gap-2">
              <SkillCard skill={Skills.VUE} />
              <SkillCard skill={Skills.VUETIFY} />
              <SkillCard skill={Skills.NUXT} />
              <SkillCard skill={Skills.SASS} />
              <SkillCard skill={Skills.TYPESCRIPT} />
              <SkillCard skill={Skills.EXPRESSJS} />
              <SkillCard skill={Skills.NESTJS} />
              <SkillCard skill={Skills.NODEJS} />
              <SkillCard skill={Skills.AWS} />
              <SkillCard skill={Skills.REDIS} />
              <SkillCard skill={Skills.WORDPRESS} />
            </div>
          </div>
        </div>
      </section> */}
      <div className="p-5 my-8 max-w-6xl mx-auto">
        <ProjectGrid projects={props.projects} />
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
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  try {
    return { props: { projects } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
