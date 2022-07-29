import Link from "next/link";

import { Layout } from "@src/layouts/DefaultLayout";
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

      <article>
        <div className="mt-5">
          <h2 className="font-semibold text-2xl">
            Augmented Reality Applications
          </h2>
          <hr className="my-5" />
          <div className="space-y-2 p-5 border-l-4 border-l-blue-500 bg-blue-50">
            <p>Android applications with Augmented Reality (AR).</p>
          </div>
          <div className="md:ml-10 space-y-4 mt-6">
            <h3 className="text-xl font-semibold">▶ Project EducAR</h3>
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
          <div className="md:ml-10 space-y-4 mt-20">
            <h3 className="text-xl font-semibold">▶ Project Andarele</h3>
            <img src="/img/andarele-logo.webp" alt="EducAR App" width="180" />
            <p>
              Worked with{" "}
              <a
                className="underline text-blue-500 hover:text-blue-600"
                href="https://www.andarele.com/"
                target="_blank"
              >
                Andarele Casa Editorial
              </a>{" "}
              providing consultancy services to implement Augmented Reality (AR)
              Technology in their books. Andarele is a publishing house in
              Ecuador with collections of books for schools and high schools.
            </p>
            <p>
              We showed the students a glimpse of the technological areas in
              which an Electronic Engineer is involved, and we had the
              opportunity to show some of my work in Andarele with Augmented
              Reality and mobile applications as an Android Developer.
            </p>
            <div className="relative h-0" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/wpPl_ErFPeo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-semibold text-2xl">Android Games</h2>
          <hr className="my-5" />
          <div className="space-y-2 p-5 border-l-4 border-l-blue-500 bg-blue-50">
            <p>
              Android games developed with Java, Android and game engine
              frameworks.
            </p>
          </div>

          <div className="md:ml-10 space-y-4 mt-10">
            <h3 className="text-xl font-semibold">
              ▶ Project 2 Dimensions - Android Game
            </h3>
            <p>
              Developed an Android game using Java, Android, and LibGDX
              framework. Users can use touchpad controls or the mobile gyroscope
              to play. Upgradable game experience, implemented Shop for in-app
              payments and game coins.
            </p>
            <p>
              The main idea is a spaceship (or similar) that navigates around
              space orbiting in circles. The game has enemies and black holes
              with gravity traction. The player-spaceship is safe inside the
              circular orbits. Orbits have multiple colors with different
              behaviors each.
            </p>
            <ul className="list-disc list-inside font-semibold">
              <li>The player can buy upgrades.</li>
              <li>Different guns are incorporated.</li>
              <li>Simple Enemy AI behavior to follow the player.</li>
              <li>
                Multiple challenges - screen rotates in stages greater than 2000
                distance.
              </li>
              <li>
                Users can get multiple powerups and collectibles. (yellow coins
                inside orbits).
              </li>
              <li>Gyroscope sensors.</li>
              <li>Multiple other features.</li>
            </ul>
            <div>
              <Video src="https://img.unamacro.com/2-dimensions-game.mp4" />
            </div>
          </div>
        </div>
        <div className="space-y-4 my-20">
          <h2 className="font-semibold text-2xl">
            Enterprise Android Applications
          </h2>
          <hr className="my-5" />

          <div className="space-y-2 p-5 border-l-4 border-l-blue-500 bg-blue-50">
            Developed 3 Enterprise Android Applications using Android, Java,
            ASP.NET/C#, MS SQL Server, and SAP ERP in{" "}
            <u>Almacenes Juan Eljuri</u>.
          </div>

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
