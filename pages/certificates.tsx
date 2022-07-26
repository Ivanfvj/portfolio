import type { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import { API_URL } from "@src/config";
import { Layout } from "@src/layouts/DefaultLayout";
import { ICertificate } from "@src/interfaces/certificate";

type PageProps = { certificates: ICertificate[] };

const ImageGallery = dynamic(
  () => import("../components/shared/ImageGallery/"),
  {
    suspense: true,
    ssr: false,
  }
);

export const getStaticProps: GetStaticProps = async () => {
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
        <div className="space-y-2 bg-yellow-50 p-5 border-l-4 border-l-yellow-500">
          <p className="text-xl">
            <strong>💡 Disclosure:</strong>
          </p>
          <p>
            I'm not a "certificates guy"; I read, watch or take the information
            I need and apply it to real projects. Googling, Stackoverflowing.
            Skills such as fast learning, searching, and solving problems are my
            strength. However, here are some of the courses and certifications I
            took and sat for a test.
          </p>
        </div>
      </section>
      <section className="my-10 px-5 lg:px-0 max-w-5xl mx-auto">
        <h2 id="online-education" className="text-3xl">
          Online Education
        </h2>
        <hr className="my-5" />
        <div className="md:ml-10">
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
          <div className="ml-5 mt-2">
            <ul className="list-disc list-inside font-semibold">
              <li>
                +35 certificates in Software Development, Startups, Digital
                Marketing, and personal growth.
              </li>
            </ul>

            <details className="mt-2" open>
              <summary className="cursor-pointer hover:underline">
                Show me more details
              </summary>
              <div className="mx-auto mt-8">
                {images && (
                  <Suspense fallback={<p>Loading...</p>}>
                    <ImageGallery
                      images={images}
                      imageClassName="border hover:shadow-md transition"
                    />
                  </Suspense>
                )}
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="my-10 px-5 lg:px-0 max-w-5xl mx-auto">
        <h2 id="online-assesments" className="text-3xl">
          Online Assesments
        </h2>
        <hr className="my-5" />
        <div className="md:ml-10">
          <h3 id="triplebyte" className="text-2xl">
            Triplebyte Certificate
          </h3>
          <a
            className="text-blue-500 underline hover:text-blue-700"
            href="https://triplebyte.com/tb/ivan-velastegui-joym6a4/certificate"
            target="_blank"
          >
            Show credential
          </a>
          <div className="ml-5 mt-2">
            <li><strong>Expert:</strong> Javascript</li>
            <li><strong>Advanced:</strong> Front-end, General Coding Logic </li>
          </div>
        </div>
      </section>
      {/* <section className="my-10 px-5 lg:px-0 max-w-5xl mx-auto">
        <h3 id="codelytv-certificates" className="text-2xl">
          CodelyTv Certificates
        </h3>
      </section> */}
    </Layout>
  );
};

export default CertificatesPage;
