import Link from "next/link";
import Layout from "../components/Layout";
import ActionButton from "../components/shared/material/ActionButton";

const AboutPage = () => (
  <Layout title="Projects | Portfolio">
    <div className="p-5 max-w-4xl mx-auto my-8 bg-gray-100 text-center">
      <h1 className="mx-auto">Projects</h1>
      <h2 className="mt-2 mb-3">🛠️ Working on it 🛠️</h2>

      <Link href="/" passHref>
        <a>
          <ActionButton text="Go home" />
        </a>
      </Link>
    </div>
  </Layout>
);

export default AboutPage;
