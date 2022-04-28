import Link from "next/link";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import Image from "next/image";
import profileImage from "../public/profile-image.png";
import StartupProjectsSection from "../components/HomePage/StartupProjectsSection";
import HardSkillsSection from "../components/HomePage/HardSkillsSection";
import SoftSkillsSection from "../components/HomePage/SoftSkillsSection";
import ActionButton from "../components/shared/material/ActionButton";
import { HomePageContext } from "../contexts/HomePage";
import { useState } from "react";
import OpenToWorkBanner from "../components/HomePage/OpenToWorkBanner";

const DynamicComponent = dynamic(
  () => import("../components/HomePage/EasterEggDialog")
);

const IndexPage = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  return (
    <HomePageContext.Provider
      value={{
        showEasterEgg,
        setShowEasterEgg,
      }}
    >
      <Layout title="Iván Velasteguí" className="bg-gray-50 relative">
        {showBanner && <OpenToWorkBanner close={() => setShowBanner(false)} />}
        {showEasterEgg && <DynamicComponent />}
        <div className="flex flex-col items-center mt-8 mb-4">
          <Image
            width={200}
            height={200}
            src={profileImage}
            alt="Picture of me"
          ></Image>
          <a href="https://linkedin.com/in/ivanfvj" target="blank">
            <p className="text-blue-500 hover:text-blue-600 mt-2 underline text-lg">
              @ivanfvj
            </p>
          </a>
        </div>

        {/* Maybe a little game with a rocket to carry your startup to the moon*/}

        <div className="mx-4 text-center">
          <h1>
            Hi there, I'm <span className="text-blue-600">Iván Velasteguí</span>
          </h1>

          <div className="mx-auto text-center">
            <h2>I would love to connect with founders and startup companies</h2>
          </div>
        </div>

        <div className="mx-auto bg-white flex flex-col border  max-w-xl my-5 container space-y-3 p-5">
          <p className="mx-auto text-2xl">
            Entrepreneur <span>•</span> Startuper
          </p>
          <p className="mx-auto text-xl">
            Software Engineer <span>•</span> Full-Stack Developer
          </p>

          {/* <p className="mx-auto text-2xl">Electronic Engineer</p> */}
        </div>

        <section className="max-w-4xl mx-auto mt-6">
          <div className="space-y-5 text-lg p-8 bg-white border">
            <h1 className="text-4xl md:text-5xl">About me</h1>
            <p>
              <u>
                These last 3 years I've been on the journey of creating a
                startup.
              </u>{" "}
              As entrepreneur I'm happy to have developed and tested several
              startup ideas, create MVP's from scratch, work with amazing
              people, help our customers, lead teams, learn from all this
              process and do marketing to make these ideas known. Valuable
              lessons all along the way.
            </p>
            <p>
              I have <u>+8 years of experience coding</u>. I started developing
              Android Apps and then i moved to Web Development and Full-Stack
              projects.
            </p>
            <p>
              I'm an Engineer, passionate about Technology, but also a
              self-taught person in different topics. I consider myself a
              continuous learner.
            </p>
            <p>
              <u>
                I have been chasing the dream of creating a high-impact startup
                since I was 17 years old, 8 years now.
              </u>
            </p>
            <p>
              <strong>I never give up.</strong>
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto border my-5 p-8 bg-white">
          <h1 className="text-4xl md:text-5xl mx-auto text-left mb-2">
            Startup Projects ⭐
          </h1>

          <p>
            These are some of the projects i founded, and have been working on
            for the last 3 years.
          </p>
          <strong>Click on the cards 😁👇</strong>
          <StartupProjectsSection className="mt-4" />
        </section>

        <section className="max-w-6xl mx-auto my-8">
          <div className="p-8 border flex bg-white">
            <h1 className="text-4xl">More Projects</h1>
            <div className="grow"></div>
            <Link href="/projects" passHref>
              <a>
                <ActionButton text="Show me more" />
              </a>
            </Link>
          </div>
        </section>

        <section className="max-w-6xl mx-auto my-8">
          <SoftSkillsSection />
        </section>

        <section className="max-w-6xl mx-auto mb-16">
          <HardSkillsSection />
        </section>

        {/* <section className="max-w-6xl mx-auto">
        <h1 className="text-5xl mx-auto text-center my-5">Valuable Skills</h1>
        <p>
          Actually improving my Marketing Skills. Storytelling and Copywriting
          skills
        </p>
        <div className="container mx-auto ">
          <h1>Perks</h1>
          <p>I use Arch BTW 😉</p>
          <h1 className="text-center bg-yellow-100">Timeline</h1>
        </div>
      </section> */}
      </Layout>
    </HomePageContext.Provider>
  );
};

export default IndexPage;
