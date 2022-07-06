import { GetStaticProps } from "next";

import Layout from "../../components/Layout";
import { ProjectInfo } from "../../interfaces";
import { projects, landingPagesProjects } from "../api/projects/data";
import { ProjectCard } from "../../components/ProjectsPage/ProjectCard";

interface PageProps {
  projects: ProjectInfo[];
}

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
    <Layout title="Projects | Portfolio" className="bg-gray-200 bg-opacity-50">
      <section className="py-5 bg-black">
        <h1 className="text-center text-4xl text-white lg:text-5xl max-w-6xl mx-auto my-6">
          Portfolio and Projects
        </h1>
      </section>
      <div className="p-5 my-8 max-w-6xl mx-auto">
        <h2 className="mb-8 font-semibold text-2xl">
          Startup Projects and Software Development
        </h2>
        <ProjectGrid projects={props.projects} />
      </div>
      <section className="py-5 bg-black">
        <h1 className="text-center text-4xl text-white lg:text-5xl my-6">
          Marketing Projects
        </h1>
      </section>
      {/* <div className="relative w-full" style={{ height: "60rem" }}>
        <div className="opacity-100">
          <Image
            layout="fill"
            height={200}
            quality={100}
            objectFit="cover"
            src="/projects/landings/landing-groups.jpg"
          />
        </div>
        <div className="absolute w-full h-full">
          <div className="max-w-6xl mx-auto h-full flex items-center justify-start">
            <div className="rounded-lg p-3 space-y-5 text-white">
            </div>
          </div>
        </div>
      </div> */}
      <div className="p-5 my-8 max-w-6xl mx-auto">
        <h2 className="mt-5 font-semibold text-2xl mb-3">Landing pages</h2>
        <p>
          Multiple Landing Pages and Sales Funnels implemented for{" "}
          <strong>Unamacro </strong>
          and <strong>Mejorate.online</strong> projects.
        </p>
        <p>
          Marketing Strategies, Copywriting and Storytelling were fundamental in
          the creation process.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3">
          {landingPagesProjects.map((e) => {
            return (
              <ProjectCard
                key={e.text}
                title={e.text}
                image={e.image}
                link={e.url}
              />
            );
          })}
        </div>
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
