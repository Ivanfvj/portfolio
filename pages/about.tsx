import Image from "next/image";

import { Layout } from "@src/layouts/DefaultLayout";
import { Section } from "@components/layout/LayoutSection";

const AboutPage = () => (
  <Layout
    title="Iván Velasteguí | About me"
    className="bg-gray-50 bg-opacity-50"
  >
    <div className="relative w-full h-[20rem] md:h-[40rem]">
      <Image
        layout="fill"
        quality={75}
        objectFit="cover"
        src="/img/about/me-1.jpg"
        style={{
          transform: "scaleX(-1)",
        }}
      />
    </div>
    <Section>
      <div className="my-5">
        <h1 className="text-center">🚧 Under construction 🚧</h1>
      </div>
    </Section>

    {/* <section className="py-2 bg-black">
      <h1 className="text-center text-4xl text-white lg:text-5xl my-8">
        Hobbies
      </h1>
    </section> */}
    {/* <div className="mx-auto bg-green-100 max-w-6xl">
      <ul className="list-disc list-inside">
        <li>Playing Guitar</li>
        <li>Biking</li>
        <li>Swimming</li>
      </ul>
    </div> */}
  </Layout>
);

export default AboutPage;
