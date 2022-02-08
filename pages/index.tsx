import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Iván Velasteguí">
    <div className="flex flex-col border-2 bg-gray-20 container columns-3 m-3 space-y-4 p-5">
      <p className="mx-auto">Entrepreneur</p>
      <p className="mx-auto">Electronic Engineer</p>
      <p className="mx-auto">Software Developer</p>
    </div>

    <div className="container mx-auto w-10/12 bg-gray-200">
      <h1 className="text-center bg-yellow-100">Timeline</h1>
      <p className="m-5">Extract from Linkedin, maybe use a component</p>

      <h1 className="text-center bg-yellow-200">Projects</h1>

      <div className="grid grid-cols-4 gap-4"></div>

      <h1>StartupLife</h1>
      <h2>Unamacro</h2>
      <p>We are developing a Marketing SaaS solution</p>

      <a href="https://mejorate.online" className="text-teal-400">
        <h2>Mejorate.online</h2>
      </a>
      <p>Social Media Content and Affiliate Marketing</p>
      <h2>Landing Pages</h2>
      <p>Redirect here to Mejorate.online with all landings</p>
      <p>Separate Programming projects and Marketing projects</p>
      <p>Facebook Ads</p>
    </div>
  </Layout>
);

export default IndexPage;
