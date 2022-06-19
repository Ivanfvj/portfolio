import Link from "next/link";
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

    <div className="p-5 my-8 text-center">
      <h2 className="text-3xl mb-3">Working on this page</h2>
      <Link href="/#startup-projects" passHref>
        <a className="mr-2">
          <ActionButton text="Back to HomePage" />
        </a>
      </Link>
      <Link href="https://mejorate.online" passHref>
        <a target="_blank">
          <ActionButton text="Visit Site" />
        </a>
      </Link>
    </div>
    {/* <section className="max-w-6xl mx-auto bg-white">
      E-commerce platform to sell online courses. Only validated/curated courses
      on the list.
    </section> */}
  </Layout>
);

export default MejorateProjectPage;
