import Link from "next/link";
import Layout from "../../components/Layout";
import ActionButton from "../../components/shared/material/ActionButton";

const TrimmProjectPage = () => (
  <Layout title="Mejorate.online Project" className="bg-gray-50 bg-opacity-50">
    <section className="py-5 bg-black">
      <h1 className="text-center text-4xl text-white lg:text-5xl my-10">
        Mejorate.online
      </h1>
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
    <section className="max-w-6xl mx-auto bg-white">
      E-commerce platform to sell online courses. Only validated/curated courses
      on the list.
    </section>
  </Layout>
);

export default TrimmProjectPage;
