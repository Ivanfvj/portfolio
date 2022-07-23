import type { GetServerSideProps, NextPage } from "next";

import { API_URL } from "@src/config";
import { Layout } from "@src/layouts/DefaultLayout";
import { ImageGallery } from "@components/shared/ImageGallery/";
import { ICertificate } from "@src/interfaces/certificate";

type PageProps = { certificates: ICertificate[] };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(`${API_URL}/api/certificates`);

  const _props: PageProps = {
    certificates: await response.json(),
  };
  return { props: _props };
};

const CertificatesPage: NextPage<PageProps> = (props: PageProps) => {
  const images = props.certificates
    ? props.certificates.map((e) => {
        return {
          width: e.image.width,
          height: e.image.height,
          imageUrl: e.image.src,
          thumbnailUrl: e.image.src,
        };
      })
    : [];

  return (
    <Layout>
      <section className="py-5 bg-black">
        <h1 className="text-center text-4xl text-white lg:text-5xl max-w-6xl mx-auto my-6">
          Certificates
        </h1>
      </section>
      <section className="my-10 px-5 lg:px-0 max-w-5xl mx-auto">
        <h2 className="text-3xl mb-5">Online Education</h2>
        <h3 id="platzi-certificates" className="text-2xl">
          Platzi Certificates
        </h3>
        <a
          className="text-blue-500 underline hover:text-blue-700"
          href="https://platzi.com/p/ivanfvj/"
          target="_blank"
        >
          Go to Platzi profile
        </a>
        <div className="ml-5">
          <ul className="list-disc list-inside font-semibold mt-2">
            <li>
              +35 certificates in Software Development, Startups, Digital
              Marketing, and personal growth.
            </li>
          </ul>

          <details className="mt-2">
            <summary className="cursor-pointer hover:underline">
              Show me more details
            </summary>
            <div className="mx-auto mt-8">
              {images && (
                <ImageGallery
                  images={images}
                  imageClassName="border hover:shadow-md transition"
                />
              )}
            </div>
          </details>
        </div>
      </section>
      <section className="my-10 px-5 lg:px-0 max-w-5xl mx-auto">
        <h3 id="codelytv-certificates" className="text-2xl">
          CodelyTv Certificates
        </h3>
      </section>
    </Layout>
  );
};

export default CertificatesPage;