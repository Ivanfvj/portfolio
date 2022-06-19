import Link from "next/link";
import Image from "next/image";

import Layout from "../../components/Layout";
import ActionButton from "../../components/shared/material/ActionButton";

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
        <Link href="/projects" passHref>
          <a
            className="text-blue-500 hover:text-blue-600 hover:underline"
            href=""
          >
            Back to projects
          </a>
        </Link>
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
        {/* <li>
              Drove 1400 organic sign-ups to automated sales funnels in one week
              by creating multiple viral Tiktok Videos with +28.1 Million views,
              representing an increase of +20K website unique visitors per
              month, +100K followers on Tiktok, and a 300% increase in monthly
              sales.
            </li> */}
      </div>
    </section>
  </Layout>
);

export default MejorateProjectPage;
