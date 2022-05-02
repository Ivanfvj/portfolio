import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import ActionButton from "../../components/shared/material/ActionButton";

const UnamacroProjectPage = () => (
  <Layout title="Projects | Portfolio" className="bg-gray-50 bg-opacity-50">
    <section className="py-5 bg-black">
      <h1 className="text-center text-4xl text-white lg:text-5xl my-10">
        Unamacro Startup
      </h1>
    </section>
    <div className="p-5 my-8 text-center">
      <Image src="/unamacro-logo.png" width={150} height={150} />
      <p>Growth for all</p>
      <p>Marketing Automation SaaS</p>
      <div className="max-w-4xl mx-auto my-12 shadow-lg border rounded text-left p-5 space-y-5">
        <p>
          Imagine you are an entrepreneur with zero knowledge about Digital
          Marketing. You have to tell the world about your existence, but the
          process to be on the internet may be tough. At early stage you might
          not have the money to hire a whole team, and you might be handling it by
          your own. The most affordable solution at this point might be to work
          with a Marketing Agency and get advice.
        </p>
        <p>
          So we offer "Marketing Macros": a package of digital assets and
          digital tools to manage the Marketing of your business. You choose
          your Macro from the marketplace and deploy a fully automated solution
          immediately. This macro can be as specific as your niche needs. If you
          have a market, a hair salon, a restaurant, or if you are a real estate
          advisor, freelancer; It does not matter, we will cover all the
          possibilities, and for that we have our community of professionals.
        </p>
        <p>
          We allow Marketing Professionals to build their own macros, bring
          their value and knowledge with the best strategies for every niche. We
          give you all the tools and you can build whatever you need. Offer this
          as your product and help millions of small businesses. All of us
          together can collaborate to close the digital gap.
        </p>
      </div>
      <p>
        There's a lot of information about Marketing around the internet. We
        want to be the place where you find Marketing in natural language and without confusion
      </p>
      <p>
        At Unamacro we want to generate growth for everyone using digital tools
        for Marketing and Sales. I know the value of community, so we created a
        public community platform to share Marketing knowledge with
        entrepreneurs and small businesses. Unamacro is community first.
        Actually we have 2 principal projects: Unamacro SaaS application
        Community Blog Platform
      </p>
      <p>
        We have created a Marketing SaaS solution for small businesses, including CRM,
        Email Marketing and third party integrations with tools like Facebook
        Lead Ads. We also worked as Digital Marketing Agency with some clients.
        We offer fully automated Marketing Solutions and sales funnels for Small
        Businesses.
      </p>
      <Link href="/#startup-projects" passHref>
        <a className="mr-2">
          <ActionButton text="Back to HomePage" />
        </a>
      </Link>
      <Link href="https://www.unamacro.com" passHref>
        <a target="_blank">
          <ActionButton text="Visit Site" />
        </a>
      </Link>
    </div>

    {/* <p>
      We do it easy for you, to implement and automatize digital tools in your
      business. We are focused on Marketing Workflows and Funnels
    </p> */}
  </Layout>
);

export default UnamacroProjectPage;
