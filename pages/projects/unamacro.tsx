import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { Layout } from "@src/layouts/DefaultLayout";
import ActionButton from "@components/shared/material/ActionButton";
import { LandingPageCard } from "@components/ProjectsPage/LandingPageCard";

const Video = ({ src, className }: { src: string; className: string }) => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className={`w-full ${className || ""}`}>
      <video
        ref={videoEl}
        src={src}
        style={{ maxWidth: "100%", margin: "0 auto" }}
        playsInline
        loop
        muted
        controls
      />
    </div>
  );
};

const UnamacroProjectPage = () => {
  const [showVideos, setShowVideos] = useState(true);

  const toggleVideos = () => {
    setShowVideos(!showVideos);
  };

  return (
    <Layout
      title="Project: Unamacro | Founder - Full Stack Engineer"
      className="bg-gray-50 bg-opacity-50"
    >
      <section className="py-10 bg-black">
        <div>
          <img
            className="mx-auto"
            src="/img/logo/unamacro-logo.png"
            width={90}
            height={90}
            alt="Unamacro logo"
          />
        </div>
        <h1 className="text-center text-4xl text-white lg:text-5xl mb-5">
          Unamacro Startup
        </h1>
        <h2 className="text-white text-center font-semibold">
          Founder - Full Stack Engineer
        </h2>
      </section>

      <section className="max-w-6xl mx-auto my-10">
        <div className="mb-5 px-5 lg:px-0 space-y-4">
          <div className="flex justify-between">
            <Link href="/projects" passHref>
              <a
                className="text-blue-500 hover:text-blue-600 hover:underline"
                href=""
              >
                Back to projects
              </a>
            </Link>
            <Link href="/projects/mejorate" passHref>
              <a
                className="text-blue-500 hover:text-blue-600 hover:underline"
                href=""
              >
                Next project
              </a>
            </Link>
          </div>
          <p>Sep 2020 — Present</p>
        </div>
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
                Released a Marketing SaaS multitenant solution for small
                businesses, including CRM, Email Marketing, and third-party
                integrations with tools like Facebook Lead Ads.
              </li>
              <li>
                Built an Automatic Email System that can deliver{" "}
                <u>+1 Million emails per day</u>, using Node.js, Javascript,
                Typescript, Redis, MongoDB, Docker, and AWS.
              </li>
              <li>
                Implemented multiple Sales Funnels and Workflows Automation for
                B2B Clients.
              </li>
            </ul>
            {/* TODO: ADD THIS HIGHLIGHT */}
            {/* Digital Marketing Agency with +20
            clients and +50 products from different niches. Implemented fully
            automated Marketing Solutions “Marketing macros” and Workflow
            Automations for B2B clients. */}
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
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/2iGV4E6P6fg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
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
            <h1 className="leading-tight">Marketing Community - Blog</h1>
            <p>
              <strong>Main Features:</strong> Blog posts, Marketing Workflows,
              Social Network
            </p>
            <p>
              <strong>Highlights:</strong>
            </p>
            <ul className="ml-5 list-disc list-inside">
              <li>
                Founded a marketing community, blog and social network platform
                to share Marketing knowledge with entrepreneurs and small
                businesses.
              </li>
              <li>
                Functional MVP with basic features, actually doing Marketing.
                +17K visitors and +100 users registered in 1 month.
              </li>
              <li>Integrations with Slack to report platform usage events.</li>
              <li>CI/CD automation with AWS CodePipeline.</li>
            </ul>
            <p>
              <strong>Tech Stack:</strong> Nuxt.js, Vue.js, Typescript, Node.js,
              Nest.js, MongoDB, DDD, Vuetify, AWS S3, AWS SNS, AWS EC2, AWS
              CodePipeline, AWS Route 53, CSS and SASS.
            </p>
            <Link href="https://blog.unamacro.com" passHref>
              <a className="block" target="_blank">
                <ActionButton text="Visit site" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto my-10">
        <div className="flex items-center flex-wrap border p-10 w-full bg-white">
          <div className="w-full md:w-1/2 order-2 md:order-1 space-y-3">
            <h1 className="leading-tight">Visit our website</h1>
            <p>
              <strong>Marketing Macros:</strong> Fully automated Marketing
              Solutions as a package. Deploy your marketing and sales funnels
              easily.
            </p>
            <p>We take care of all the configuration, so you don't have to.</p>
            <Link href="https://www.unamacro.com" passHref>
              <a className="block" target="_blank">
                <ActionButton text="Visit site" />
              </a>
            </Link>
          </div>
          <div className="w-full md:w-1/2 mb-5 md:mb-0 order-1 md:order-2 text-center">
            <div className="md:pr-8">
              <figure className="relative border rounded-lg overflow-hidden ">
                <img
                  src="https://www.unamacro.com/wp-content/uploads/2022/07/unamacro-website.jpg"
                  alt="Unamacro Website"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto my-10">
        <div className="flex items-center flex-wrap border p-10 w-full bg-white">
          <h1 className="leading-tight mb-5 text-center w-full">
            Creating Community and Marketing our products
          </h1>
          <Video
            className="mb-5"
            src="https://img.unamacro.com/tiktok-portfolio-hd.mp4"
          />
          <div className="space-y-4">
            <p>
              Use of multiple social media strategies. We share content about
              marketing to help entrepreneurs and small businesses increase
              their leads and revenue.
            </p>
            <p>
              Production of vertical videos for Content Marketing: TikTok and
              Instagram Reels. Connecting with our audience and openness to
              feedback.
            </p>
            <p>
              <strong>Highlights:</strong>
            </p>
            <ul className="ml-5 list-disc list-inside">
              <li>+17K followers in one month.</li>
              <li>Viral videos with +500k views.</li>
              <li>+120 users registered in our Marketing blog platform.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-center flex-wrap border p-5 w-full bg-white">
          <div className="mb-5 text-center space-y-2">
            <h1 className="leading-tight">Landing pages</h1>
            <p>
              <u>Web design and Marketing Funnels</u>
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-3">
            <LandingPageCard
              text="Marketing sin confusión"
              imgSrc="/projects/landings/landing-1.jpg"
              href="https://www.unamacro.com/marketing-sin-confusion/"
            />
            <LandingPageCard
              text="Kit Email Marketing"
              imgSrc="/projects/landings/landing-2.jpg"
              href="https://www.unamacro.com/kit-email-marketing/"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UnamacroProjectPage;
