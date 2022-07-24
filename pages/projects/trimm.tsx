import Link from "next/link";
import Image from "next/image";

import { Layout } from "@src/layouts/DefaultLayout";
import ActionButton from "@components/shared/material/ActionButton";
import { ImageGallery } from "@components/shared/ImageGallery/";

const images = [
  { url: "/projects/trimm/trimm.tv-1.jpg", width: 1260, height: 911 },
  { url: "/projects/trimm/trimm.tv-2.jpg", width: 1286, height: 884 },
  { url: "/projects/trimm/trimm.tv-3.jpg", width: 1345, height: 752 },
  { url: "/projects/trimm/trimm.tv-5.jpg", width: 437, height: 820 },
  { url: "/projects/trimm/trimm.tv-6.jpg", width: 437, height: 821 },
  { url: "/projects/trimm/trimm.tv-4.jpg", width: 1903, height: 857 },
];

const TrimmProjectPage = () => (
  <Layout title="Trimm.tv Project" className="bg-gray-50 bg-opacity-50">
    <section className="py-10 bg-black">
      <div className="mb-3">
        <img
          className="mx-auto"
          src="/img/logo/trimm.tv-logo-light.svg"
          width={75}
          height={75}
          alt="Trimm.tv logo"
        />
      </div>
      <h1 className="text-center text-4xl text-white lg:text-5xl mb-5">
        Trimm.tv Startup
      </h1>
      <h2 className="text-white text-center font-semibold">
        Founder - Full Stack Engineer
      </h2>
    </section>

    <section className="max-w-6xl mx-auto my-10">
      <div className="mb-5 px-5 lg:px-0 space-y-4">
        <Link href="/projects" passHref>
          <a
            className="text-blue-500 hover:text-blue-600 hover:underline"
            href=""
          >
            Back to projects
          </a>
        </Link>
        <p>Mar 2021 — Jul 2021</p>
      </div>
      <div className="flex items-center flex-wrap border p-10 w-full bg-white">
        <div className="w-full md:w-1/2 order-2 md:order-1 space-y-3">
          <h1 className="leading-tight">Video Platform</h1>
          <p>
            <strong>Main Features:</strong> Video Editor to create clips and
            highlights from Youtube videos, Youtube API, Search Service.
          </p>
          <p>
            <strong>Highlights:</strong>
          </p>
          <ul className="ml-5 list-disc list-inside">
            <li>
              Launched “Trimm Internet Videos” to share clips and video
              highlights. Created the whole platform from scratch in 1 month.
            </li>
            <li>
              Built a video platform for web and mobile devices designed to
              handle +100K concurrent users. Responsive website as a Progressive
              Web Application (PWA) that can be installed on mobiles.
            </li>
            <li>
              Applied Clean Code, Domain-Driven Design (DDD), Hexagonal
              Architecture, Microservices Architecture, and Event-Driven
              software architecture. Scalable and extendable code, switchable
              for different implementations with repositories, external
              services, and databases.
            </li>
          </ul>

          <p>
            <strong>Tech Stack:</strong> Vue.js, Nuxt.js, Server Side Rendering
            (SSR), Typescript, Javascript, Node.js, MongoDB, AWS, Domain-Driven
            Design (DDD).
          </p>
          <Link href="https://trimm.tv" passHref>
            <a className="block" target="_blank">
              <ActionButton text="Visit site" />
            </a>
          </Link>
        </div>
        <div className="w-full md:w-1/2 mb-5 md:mb-0 order-1 md:order-2 text-center">
          <div className="relative h-80">
            <Image
              src="https://www.unamacro.com/wp-content/uploads/2022/04/trimm-tv-banner.jpg"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
          <p className="mt-5 font-semibold">Video platform</p>
        </div>
      </div>
    </section>

    <section className="max-w-6xl mx-auto my-10">
      <div className="flex items-center flex-wrap border p-10 w-full bg-white">
        <ImageGallery
          imageClassName="border border-gray-400"
          images={images.map((e) => {
            return {
              height: e.height,
              width: e.width,
              imageUrl: e.url,
              thumbnailUrl: e.url,
            };
          })}
        />
      </div>
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
        </div>
      </div>
    </section>
  </Layout>
);

export default TrimmProjectPage;
