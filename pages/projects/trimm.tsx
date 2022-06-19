import Link from "next/link";
import Layout from "../../components/Layout";
import ActionButton from "../../components/shared/material/ActionButton";

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

    <div className="p-5 my-8 text-center">
      <h2 className="text-3xl mb-3">Working on this page</h2>
      <Link href="/#startup-projects" passHref>
        <a className="mr-2">
          <ActionButton text="Back to HomePage" />
        </a>
      </Link>
      <Link href="https://trimm.tv" passHref>
        <a target="_blank">
          <ActionButton text="Visit Site" />
        </a>
      </Link>
    </div>
  </Layout>
);

export default TrimmProjectPage;
