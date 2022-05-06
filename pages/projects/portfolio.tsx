import Layout from "../../components/Layout";

const PortfolioPage = () => {
  return (
    <Layout
      title="Iván Velasteguí - Portfolio Project"
      className="bg-gray-50 relative"
    >
      <div className="mx-auto max-w-6xl text-center py-16">
        <h1>My Personal Website / Portfolio</h1>
        <p>
          This website was created with React, Next.js, Tailwind CSS and deployed
          to Vercel
        </p>
      </div>
    </Layout>
  );
};

export default PortfolioPage;
