import { useState } from "react";
import Link from "next/link";

import { RESUME_URL } from "@src/common";
import { Layout } from "@src/layouts/DefaultLayout";
import { Timeline, TimelineItem } from "@components/shared/Timeline";
import ActionButton from "@components/shared/material/ActionButton";

const TimelinePage = () => {
  const [openDetails, setOpenDetails] = useState(true);

  return (
    <Layout>
      <section className="py-5 bg-black">
        <h1 className="text-center text-4xl text-white lg:text-5xl max-w-6xl mx-auto my-6">
          Timeline
        </h1>
      </section>
      <section className="my-10 px-5 lg:px-0 max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 id="work-experience" className="text-3xl font-bold">
            Work Experience
          </h2>
          <Link href={RESUME_URL} passHref>
            <a target="_blank">
              <ActionButton text="Download CV" />
            </a>
          </Link>
        </div>
        <Timeline>
          <TimelineItem
            title="Software Engineer and Founder"
            subtitle="Unamacro"
            time="November 2020 - Present"
            button={{
              url: "/projects/unamacro",
            }}
          >
            <details open={openDetails}>
              <summary className="cursor-pointer">Highlights</summary>
              <ul className="list-disc list-inside ml-5 space-y-3 mt-2">
                <li>
                  Released a Marketing SaaS multitenant solution for small
                  businesses, including CRM, Email Marketing, and third-party
                  integrations with tools like Facebook Lead Ads. Founded a
                  marketing community, blog and social network platform with
                  +17K visitors, and +100 users registered in 1 month.
                </li>
                <li>
                  Built an Automatic Email System that can deliver 1 Million
                  emails per day, using Node.js, Javascript, Typescript, Redis,
                  MongoDB, Docker, and AWS.
                </li>
                <li>
                  Managed a 4-member cross-functional (product, engineering,
                  designers) team, and worked as a Digital Marketing Agency with
                  +20 clients and +50 products from different niches.
                  Implemented fully automated Marketing Solutions “Marketing
                  macros” and Workflow Automations for B2B clients.
                </li>
              </ul>
            </details>
          </TimelineItem>
          <TimelineItem
            title="Co-Founder"
            subtitle="Mejorate.online"
            time="September 2021 - April 2022"
            button={{
              url: "/projects/mejorate",
            }}
          >
            <details open={openDetails}>
              <summary className="cursor-pointer">Highlights</summary>
              <ul className="list-disc list-inside ml-5 space-y-3 mt-2">
                <li>
                  Launched an E-commerce platform with WordPress in 1 week and
                  deployed on an AWS EC2 instance for performance. Conceived
                  Business Model to sell +500 online courses available using
                  affiliate marketing.
                </li>
                <li>
                  Configured +20 Sales Funnels, and multiple Marketing
                  Automation tools. Used different digital marketing strategies
                  to promote these courses including SEO, Facebook Ads,
                  Instagram Ads, Email Marketing, Google Ads, and Content
                  Marketing.
                </li>
                <li>
                  Drove 1400 organic sign-ups to automated sales funnels in one
                  week by creating multiple viral Tiktok Videos with +28.1
                  Million views, representing an increase of +20K website unique
                  visitors per month, +100K followers on Tiktok, and a 300%
                  increase in monthly sales
                </li>
              </ul>
            </details>
          </TimelineItem>
          <TimelineItem
            title="Web Developer"
            subtitle="Multiple Contracts"
            time="February 2019 - November 2021"
            button={{
              url: "/projects",
            }}
          >
            <details open={openDetails}>
              <summary className="cursor-pointer">Highlights</summary>
              <ul className="list-disc list-inside ml-5 space-y-3 mt-2">
                <li>
                  Developed +10 projects including websites, mobile apps, and
                  landing pages for companies and personal brands using
                  WordPress, Typescript, Vue.js, Express.js, MongoDB, SQL, PHP,
                  and AWS. Applied UI/UX design and marketing skills. Customer
                  service and commitment to customer satisfaction.
                </li>
                <li>
                  Assembled multiple WordPress websites in record time (3-7
                  days) with client approval and satisfaction. Created a Web
                  platform for a Real State company, deployed in 2 weeks, set up
                  with Javascript, Nuxt.js, Strapi.js, MongoDB, and AWS. Public
                  platform and Administration Panel for staff members.
                </li>
              </ul>
            </details>
          </TimelineItem>
          <TimelineItem
            title="Software Engineer and Founder"
            subtitle="Trimm.tv"
            time="March 2021 - July 2021"
            button={{
              url: "/projects/trimm",
            }}
          >
            <details open={openDetails}>
              <summary className="cursor-pointer">Highlights</summary>
              <ul className="list-disc list-inside ml-5 space-y-3 mt-2">
                <li>
                  Launched “Trimm Internet Videos” to share clips and video
                  highlights. Created the whole platform from scratch in 1
                  month. MVP available and working for Youtube videos.
                </li>
                <li>
                  Built a video platform for web and mobile devices designed to
                  handle +100K concurrent users. Applied Nuxt.js for Server-Side
                  Rendering (SSR), Vue.js, Vuex, Javascript, Typescript,
                  Node.js, Express.js, MongoDB, and AWS. Responsive website as a
                  Progressive Web Application (PWA) that can be installed on
                  mobiles.
                </li>
                <li>
                  Applied Clean Code, Domain-Driven Design (DDD), Hexagonal
                  Architecture, Microservices Architecture, and Event-Driven
                  software architecture. Scalable and extendable code,
                  switchable for different implementations with repositories,
                  external services, and databases.
                </li>
              </ul>
            </details>
          </TimelineItem>
          <TimelineItem
            title="Android Developer"
            subtitle="Almacenes Juan Eljuri"
            time="June 2017 - January 2019"
            button={{
              url: "/projects/eljuri",
            }}
          >
            <details open={openDetails}>
              <summary className="cursor-pointer">Highlights</summary>
              <ul className="list-disc list-inside ml-5 space-y-3 mt-2">
                <li>
                  Developed three Internal Android Applications for operations
                  connected and integrated with the main SAP system. Applied
                  Java, ASP.NET/C#, and MS SQL Server to software development.
                </li>
                <li>
                  Worked in the IT department collaborating with an excellent
                  team of +15 professionals such as managers, software
                  engineers, and SAP experts.
                </li>
                <li>
                  Trained more than 100 staff members. Configured and delivered
                  more than 80 Android Tablets to the sales team. Apps working
                  for more than 7 business units, including +30 brands and +70k
                  products.
                </li>
                <li>
                  Reduced information fetch time from 3 hours to 5 minutes with
                  advanced filters and query optimization. Configured multiple
                  real-time endpoints with SAP Integration.
                </li>
              </ul>
            </details>
          </TimelineItem>
          <TimelineItem
            title="Android and Java Developer"
            subtitle="Freelancing"
            time="January 2016 - June 2017"
            button={{
              url: "/projects/android",
            }}
          >
            <details open={openDetails}>
              <summary className="cursor-pointer">Highlights</summary>
              <ul className="list-disc list-inside ml-5 space-y-3 mt-2">
                <li>
                  Developed Android Applications using Java, Unity, C#, and
                  SQLite, freelancer jobs and side projects.
                </li>
                <li>
                  Created Augmented Reality Applications with Vuforia SDK and
                  Android Games with LibGDX.
                </li>
                <li>
                  Mentored and educated university students in Java and Android
                  while coursing my degree and got exonerated in Java
                  programming subjects.
                </li>
              </ul>
            </details>
          </TimelineItem>
        </Timeline>
      </section>
      <section className="my-10 mt-20 px-5 lg:px-0 max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 id="education" className="text-3xl font-bold">
            Education
          </h2>
        </div>
        <Timeline>
          <TimelineItem
            title="Self-Taught Student - Online"
            subtitle="Platzi"
            time="Feb 2018 — Present"
            button={{
              url: "/certificates",
            }}
          >
            <details open={openDetails}>
              <summary className="cursor-pointer">Highlights</summary>
              <ul className="list-disc list-inside ml-5 space-y-3 mt-2">
                <li>
                  +35 certificates in Software Development, Startups, Digital
                  Marketing, and personal growth.
                </li>
              </ul>
            </details>
          </TimelineItem>
          <TimelineItem
            title="BE. Electronics Engineer"
            subtitle="Universidad del Azuay"
            time="September 2014 — July 2019"
            button={{
              url: "https://www.unamacro.com/wp-content/uploads/2022/05/Ivan-Velastegui-Thesis-work.pdf",
              target: "_blank",
            }}
          >
            <details open={openDetails}>
              <summary className="cursor-pointer">Highlights</summary>
              <ul className="list-disc list-inside ml-5 space-y-3 mt-2">
                <li>
                  Thesis work about the Internet of Things (IoT) for Industry
                  4.0 applications using multiple Hardware and Software
                  technologies including PLCs, HTTP and MQTT protocols.
                  Delivered a didactic bench to the university with practical
                  guides for the students and following generations.
                </li>
              </ul>
            </details>
          </TimelineItem>
        </Timeline>
      </section>
    </Layout>
  );
};

export default TimelinePage;
