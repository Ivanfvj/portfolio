import { Layout } from "@src/layouts/DefaultLayout";
import { Timeline } from "@components/shared/Timeline";

const CertificatesPage = () => {
  return (
    <Layout>
      <section className="py-5 bg-black">
        <h1 className="text-center text-4xl text-white lg:text-5xl max-w-6xl mx-auto my-6">
          Lifetime Timeline
        </h1>
      </section>
      <section className="my-10 px-5 lg:px-0 max-w-5xl mx-auto">
        <Timeline />
      </section>
    </Layout>
  );
};

export default CertificatesPage;
