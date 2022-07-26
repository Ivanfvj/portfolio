import Link from "next/link";

import { Layout } from "@src/layouts/DefaultLayout";
import { ImageGallery } from "@components/shared/ImageGallery/";

const images = [
  { url: "/projects/eljuri/eljuri-1.png", width: 932, height: 734 },
  { url: "/projects/eljuri/eljuri-2.png", width: 932, height: 734 },
  { url: "/projects/eljuri/eljuri-3.png", width: 932, height: 734 },
  { url: "/projects/eljuri/eljuri-4.png", width: 932, height: 734 },
  { url: "/projects/eljuri/eljuri-5.png", width: 932, height: 734 },
  { url: "/projects/eljuri/eljuri-6.png", width: 932, height: 734 },
  { url: "/projects/eljuri/eljuri-7.png", width: 734, height: 932 },
  { url: "/projects/eljuri/eljuri-8.png", width: 734, height: 932 },
  { url: "/projects/eljuri/eljuri-9.png", width: 734, height: 932 },
  { url: "/projects/eljuri/eljuri-10.png", width: 734, height: 932 },
  { url: "/projects/eljuri/eljuri-11.png", width: 734, height: 932 },
  { url: "/projects/eljuri/eljuri-12.png", width: 734, height: 932 },
  { url: "/projects/eljuri/eljuri-13.png", width: 734, height: 932 },
  { url: "/projects/eljuri/eljuri-14.png", width: 734, height: 932 },
  { url: "/projects/eljuri/eljuri-15.png", width: 734, height: 932 },
  { url: "/projects/eljuri/eljuri-16.png", width: 734, height: 932 },
];

const EljuriProjectPage = () => (
  <Layout
    title="Project: Eljuri | Android Developer"
    className="bg-gray-50 bg-opacity-50"
  >
    <section className="py-10 bg-black">
      <h1 className="text-center text-4xl text-white lg:text-5xl mb-5">
        Almacenes Juan Eljuri
      </h1>
      <h2 className="text-white text-center font-semibold">
        Android Developer
      </h2>
    </section>
    <section className="my-10 px-5 lg:px-0 max-w-5xl mx-auto space-y-4">
      <Link href="/projects" passHref>
        <a
          className="text-blue-500 hover:text-blue-600 hover:underline"
          href=""
        >
          Back to projects
        </a>
      </Link>
      <p>Jun 2017 — Jan 2019</p>
      <h2 className="font-semibold">Enterprise Android Applications</h2>
      <p>
        In charge of Android Apps of the organization.{" "}
        <strong>
          I developed 3 Internal Android Applications for operations.
        </strong>{" "}
        Connected and integrated with the main SAP system. "Almacenes Juan
        Eljuri" is one of the biggest group organizations in Ecuador. They are
        main distributors of multiple supplies chains here.
      </p>
      <p>
        I worked in IT department with an excellent team of professionals:
        Software Engineers and SAP experts.
      </p>
      <ul className="list-disc list-inside font-semibold">
        <li>+100 staff members trained.</li>
        <li>+80 Android Tablets configured and delivered to sales team.</li>
        <li>+30 brands and +70k materials/products.</li>
        <li>Advanced filters and fast queries.</li>
        <li>SAP Integration</li>
      </ul>
      <div className="px-5 sm:px-0 !my-10">
        <ImageGallery
          images={images.map((e) => {
            return {
              height: e.height,
              width: e.width,
              imageUrl: e.url,
              thumbnailUrl: e.url,
            };
          })}
        />
      </div>
      <p>These are the 3 principal apps mentioned before:</p>
      <p>
        <strong>1. Orders App:</strong> Used by salesman and managers to create
        orders in SAP. This document is generated before invoices in the sales
        process. The user can fetch and retrieve real time data of
        products/materials to generate an order and printable PDF.
      </p>
      <p>
        <strong>2. Materials Catalog:</strong> Real time visualization for more
        than 70k products available in all the different brands/departments in
        the organization. Advanced filtering and direct integration with Orders
        App.
      </p>
      <p>
        <strong>3. Retail POS App:</strong> Generate Invoices, Credit notes,
        Cash registers, etc... Used by personal in retail and distribution. As
        my responsibilities: Develop, System and Apps Optimization and
        Monitoring, Staff Training.
      </p>
    </section>
  </Layout>
);

export default EljuriProjectPage;
