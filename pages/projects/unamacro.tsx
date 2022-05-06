import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import ActionButton from "../../components/shared/material/ActionButton";

const UnamacroProjectPage = () => {
  const [showVideos, setShowVideos] = useState(true);

  const toggleVideos = () => {
    setShowVideos(!showVideos);
  };

  return (
    <Layout title="Project: Unamacro | Founder - Full Stack Engineer" className="bg-gray-50 bg-opacity-50">
      <section className="py-10 bg-black">
        <h1 className="text-center text-4xl text-white lg:text-5xl mb-5">
          Unamacro Startup
        </h1>
        <h2 className="text-white text-center font-semibold">
          Founder - Full Stack Engineer
        </h2>
      </section>

      <section className="max-w-6xl mx-auto my-10">
        <p className="mb-5">Sep 2020 — Present</p>
        <div className="flex items-center flex-wrap border p-10 w-full bg-white">
          <div className="w-full md:w-1/2 order-2 md:order-1 space-y-3">
            <h1 className="leading-tight">
              Marketing Automation SaaS Platform
            </h1>
            <p>
              <strong>Main Features:</strong> CRM, Email Marketing, Forms and
              Integrations.
            </p>
            <p>
              <strong>Highlights:</strong>
            </p>
            <ul className="ml-5 list-disc list-inside">
              <li>
                I create an Automatic Email System that can deliver{" "}
                <u>+1 Million emails per day</u>, using Node.js, Typescript,
                Redis and MongoDB.
              </li>
              <li>
                We have implemented Sales Funnels and Workflow Automations for
                B2B Clients.
              </li>
            </ul>

            <p>
              <strong>Tech Stack:</strong> Nuxt.js, Vue.js, Typescript, Node.js,
              MongoDB, Redis, DDD, Vuetify, AWS, GCP
            </p>

            <ActionButton
              text={showVideos ? "Hide demo" : "Show demo"}
              onClick={toggleVideos}
            />
          </div>
          <div className="w-full md:w-1/2 mb-5 md:mb-0 order-1 md:order-2 text-center">
            <div className="relative h-64">
              <Image
                src="https://www.unamacro.com/wp-content/uploads/2021/08/MACROLINK-Y-PLATAFORMA-UNAMACRO.png"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
            <p className="mt-5 font-semibold">Beta version was released</p>
          </div>
          <div
            className={`w-full order-3 mt-5 flex flex-wrap md:flex-nowrap md:flex-auto gap-2 ${
              showVideos ? "" : "hidden"
            }`}
          >
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/ZoxR3XA5Vhc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/2iGV4E6P6fg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto my-10">
        <div className="flex items-center flex-wrap border p-10 w-full bg-white">
          <div className="w-full lg:w-1/2 mb-5 ml:mb-0">
            <div className="md:pr-8">
              <figure className="relative border rounded-lg overflow-hidden ">
                <img
                  src="https://blog.unamacro.com/img/workflow-screenshot.jpg"
                  alt="Unamacro Community"
                />
              </figure>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-3">
            <h1 className="leading-tight">Marketing Community</h1>
            <p>
              <strong>Main Features:</strong> Blog posts, Marketing Workflows,
              Social Network
            </p>
            <p>
              <strong>Highlights:</strong>
            </p>
            <ul className="ml-5 list-disc list-inside">
              <li>
                MVP with basic features is working, actually doing Marketing.
              </li>
              <li>
                We have implemented Sales Funnels and Workflow Automations for
                B2B Clients.
              </li>
            </ul>

            <p>
              <strong>Tech Stack:</strong> Nuxt.js, Vue.js, Typescript, Node.js,
              Nest.js, MongoDB, DDD, Vuetify, AWS S3, AWS SNS, AWS EC2, AWS
              CodePipeline, AWS Route 53
            </p>

            <Link href="https://blog.unamacro.com" passHref>
              <a className="block" target="_blank">
                <ActionButton text="Visit site" />
              </a>
            </Link>
          </div>
          {/* <hr /> */}
          {/* <div className="">
            <h1>Marketing Community</h1>
            <p>
              Blog platform open to public. A Marketing Community where
              professionals can help Entrepreneur and Small Businesses with
              their knowledge.
            </p>
            <p>
              I know the value of community, so we created a public community
              platform to share Marketing knowledge with entrepreneurs and small
              businesses. Unamacro is community first.
            </p>

            <a
              className="block"
              href="https://blog.unamacro.com"
              target="_blank"
            >
              <ActionButton text="Visit Site" />
            </a>
          </div> */}
        </div>
      </section>
    </Layout>
  );
};

export default UnamacroProjectPage;
