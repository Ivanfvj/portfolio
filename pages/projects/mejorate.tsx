import Link from "next/link";
import Image from "next/image";

import { Layout } from "@src/layouts/DefaultLayout";
// TODO: Change this behaviour
import { landingPagesProjects } from "../api/projects/data";
import ActionButton from "@components/shared/material/ActionButton";
import { ImageGallery } from "@components/shared/ImageGallery/";
import { LandingPageCard } from "@components/ProjectsPage/LandingPageCard";

const landingPages = landingPagesProjects.filter(
  (e) => e.project === "mejorate.online"
);

const tiktokImages = [
  { url: "/projects/mejorate/tiktok-growth-1.jpg", width: 809, height: 526 },
  { url: "/projects/mejorate/tiktok-growth-2.jpg", width: 809, height: 526 },
  { url: "/projects/mejorate/tiktok-growth-3.jpg", width: 809, height: 526 },
  { url: "/projects/mejorate/tiktok-growth-4.jpg", width: 1280, height: 751 },
  { url: "/projects/mejorate/tiktok-growth-5.jpg", width: 1280, height: 645 },
];

const MejorateProjectPage = () => (
  <Layout title="Mejorate.online Project" className="bg-gray-50 bg-opacity-50">
    <section className="py-10 bg-black">
      <div className="mb-2">
        <img
          className="mx-auto"
          src="/img/logo/mejorate.online-logo.png"
          width={90}
          height={90}
          alt="Mejorate.online logo"
        />
      </div>
      <h1 className="text-center text-4xl text-white lg:text-5xl mb-5">
        Mejorate.online
      </h1>
      <h2 className="text-white text-center font-semibold">
        Founder - Marketing Strategist
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
          <Link href="/projects/trimm" passHref>
            <a
              className="text-blue-500 hover:text-blue-600 hover:underline"
              href=""
            >
              Next project
            </a>
          </Link>
        </div>
        <p>Sep 2021 — Apr 2022</p>
      </div>
      <div className="flex items-center flex-wrap border p-10 w-full bg-white">
        <div className="w-full md:w-1/2 order-2 md:order-1 space-y-3">
          <h1 className="leading-tight">Ecommerce Platform</h1>
          <p>
            <strong>Main Features:</strong> Validated Digital Courses Catalog,
            Affiliate Marketing.
          </p>
          <p>
            <strong>Highlights:</strong>
          </p>
          <ul className="ml-5 list-disc list-inside">
            <li>
              Launched an E-commerce platform with WordPress <u>in 1 week</u>{" "}
              and deployed on an AWS EC2 instance for performance. Conceived
              Business Model to sell +500 online courses available using
              affiliate marketing.
            </li>
            <li>
              Configured +20 Sales Funnels, and multiple Marketing Automation
              tools. Used different digital marketing strategies to promote
              these courses including SEO, Facebook Ads, Instagram Ads, Email
              Marketing, Google Ads, and Content Marketing.
            </li>
          </ul>

          <p>
            <strong>Tech Stack:</strong> WordPress, PHP, CSS, Javascript, AWS
          </p>
          <Link href="https://mejorate.online" passHref>
            <a className="block" target="_blank">
              <ActionButton text="Visit site" />
            </a>
          </Link>
        </div>
        <div className="w-full md:w-1/2 mb-5 md:mb-0 order-1 md:order-2 text-center">
          <div className="relative h-80">
            <Image
              src="https://www.unamacro.com/wp-content/uploads/2022/04/mejorate-online-banner.jpg"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
          <p className="mt-5 font-semibold">Ecommerce created in WordPress</p>
        </div>
      </div>
    </section>

    <section className="max-w-6xl mx-auto my-10">
      <div className="flex items-center flex-wrap border p-10 w-full bg-white">
        <div className="space-y-3 mb-5">
          <h1 className="leading-tight">Marketing Strategies</h1>
          <p>
            <strong>Highlights:</strong>
          </p>
          <ul className="ml-5 list-disc list-inside">
            <li>
              Drove 1400 organic sign-ups to automated sales funnels{" "}
              <u>
                <b>in one week</b>
              </u>{" "}
              by creating multiple viral Tiktok Videos with{" "}
              <u>+28.1 Million views</u>, representing an increase of{" "}
              <u>+20K website unique visitors per month</u>,{" "}
              <u>+100K followers on Tiktok</u>, and a{" "}
              <u>300% increase in monthly sales</u>.
            </li>
          </ul>
        </div>
        <ImageGallery
          imageClassName="border border-gray-400"
          images={tiktokImages.map((e) => {
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
      <div className="flex items-center justify-center flex-wrap border p-5 w-full bg-white">
        <div className="mb-5 text-center space-y-2">
          <h1 className="leading-tight">Landing pages</h1>
          <p>
            <u>Web design and Marketing Funnels</u>
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-3">
          {landingPages.map((e) => (
            <LandingPageCard text={e.text} imgSrc={e.image} href={e.url} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default MejorateProjectPage;
