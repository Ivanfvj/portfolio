import Link from "next/link";

import { Layout } from "@src/layouts/DefaultLayout";
import { ImageGallery } from "@components/shared/ImageGallery/";
import ActionButton from "@components/shared/material/ActionButton";
import { Video } from "@components/shared/VideoWrapper";

const images = [
  { url: "/projects/eljuri/eljuri-1.png", width: 932, height: 734 },
];

const AndroidProjectPage = () => (
  <Layout
    title="Project: Android Freelancer | Android and Java Developer"
    className="bg-gray-50 bg-opacity-50"
  >
    <section className="py-10 bg-black">
      <h1 className="text-center text-4xl text-white lg:text-5xl mb-5">
        Android/Java Freelancing
      </h1>
      <h2 className="text-white text-center font-semibold">
        Android and Java Developer
      </h2>
    </section>
    <section className="my-10 px-5 lg:px-0 max-w-5xl mx-auto">
      <Link href="/projects" passHref>
        <a
          className="text-blue-500 hover:text-blue-600 hover:underline"
          href=""
        >
          Back to projects
        </a>
      </Link>

      {/* <h2 className="font-semibold text-2xl">Android Applications</h2>
      <hr className="my-5" />
      <div className="md:ml-10 space-y-4">
        <h3 className="text-xl font-semibold">Parkeando</h3>
      </div> */}

      <article>
        <div className="space-y-4 mt-5">
          <h2 className="font-semibold text-2xl">
            Augmented Reality Applications
          </h2>
          <hr className="my-5" />
          <p>
            Android applications with Augmented Reality (AR) using Unity, and
            Vuforia SDK.
          </p>
          <div className="md:ml-10 space-y-4">
            <h3 className="text-xl font-semibold">Project EducAR</h3>
            <img
              src="/projects/android/educar_logo.png"
              alt="EducAR App"
              width="180"
            />
            <p>
              Project created to improve university students' experience
              learning math, calculus, and engineering subjects. Professor
              Ernesto at{" "}
              <a
                className="underline text-blue-500 hover:text-blue-600"
                href="https://www.ucuenca.edu.ec/"
                target="_blank"
              >
                Universidad de Cuenca
              </a>{" "}
              was investigating alternatives to education using Augmented
              Reality (AR) Technology.
            </p>
            <p>
              Applied Unity, C#, Vuforia SDK, Android, Java and Matlab to
              software development.
            </p>
            <ul className="list-disc list-inside font-semibold">
              <li>
                Developed an Augmented Reality mobile application using Vuforia
                SDK and Unity.
              </li>
              <li>Video player created from scratch with C# in Unity.</li>
            </ul>
            <div>
              <Video src="https://img.unamacro.com/educar_app_demo.mp4" />
            </div>
          </div>
        </div>
        {/* <h2 className="font-semibold text-2xl">Android Games</h2>
      <hr className="my-5" />
      <div className="md:ml-10 space-y-4">
        <h3 className="font-semibold">2 Dimensions</h3>
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
      </div> */}
        <div className="space-y-4 my-10">
          <h2 className="font-semibold text-2xl">
            Enterprise Android Applications
          </h2>
          <hr className="my-5" />
          <p>
            Developed 3 Enterprise Android Applications using Android,
            Java, ASP.NET/C#, MS SQL Server, and SAP ERP in{" "}
            <u>Almacenes Juan Eljuri</u>.
          </p>
          <div>
            <Link href="/projects/eljuri" passHref>
              <a>
                <ActionButton text="More details" />
              </a>
            </Link>
          </div>
        </div>
      </article>
    </section>
  </Layout>
);

export default AndroidProjectPage;
