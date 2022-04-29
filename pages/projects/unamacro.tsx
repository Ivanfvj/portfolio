import Link from "next/link";
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
      <h2 className="text-3xl mb-3">Working on this page</h2>
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
