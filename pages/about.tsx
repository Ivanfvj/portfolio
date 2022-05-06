import Link from "next/link";
import Layout from "../components/Layout";
import ActionButton from "../components/shared/material/ActionButton";

const AboutPage = () => (
  <Layout
    title="Iván Velasteguí | About me"
    className="bg-gray-50 bg-opacity-50"
  >
    <section className="py-5 bg-black">
      <h1 className="text-center text-4xl text-white lg:text-5xl my-10">
        About me
      </h1>
    </section>
    <div className="p-5 my-8 text-center">
      <h2 className="text-3xl mb-3">Working on this page</h2>
    </div>
  </Layout>
);

export default AboutPage;
