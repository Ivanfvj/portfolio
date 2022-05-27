import Link from "next/link";
import Layout from "../components/Layout";
import ActionButton from "../components/shared/material/ActionButton";
import Image from "next/image";

const AboutPage = () => (
  <Layout
    title="Iván Velasteguí | About me"
    className="bg-gray-50 bg-opacity-50"
  >
    <div className="relative w-full" style={{ height: "40rem" }}>
      <div className="opacity-100">
        <Image
          layout="fill"
          height={200}
          quality={75}
          objectFit="cover"
          src="/img/about/me-1.jpg"
          style={{
            transform: "scaleX(-1)",
          }}
        />
      </div>
      <div className="absolute w-full h-full">
        <div className="max-w-6xl mx-auto h-full flex items-center justify-start">
          <div className="rounded-lg p-3 space-y-5 text-white">
            {/* <h1 className="text-4xl lg:text-6xl text-white">About me</h1>
            <p></p>
            <p>Actively dreaming</p>
            <ActionButton text="Hola" outlined={false} /> */}
          </div>
        </div>
      </div>
    </div>
    {/* <section>
      <div>I'm a social person, and i really enjoy helping.</div>
    </section> */}

    {/* <section className="py-2 bg-black">
      <h1 className="text-center text-4xl text-white lg:text-5xl my-8">
        Hobbies
      </h1>
    </section> */}
    {/* <section>
      <h1>Principles and values</h1>
      <p>No ego</p>
      <p>Teamworking</p>
      <p>Helping people</p>
      <p>Unamacro Tiktok</p>
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
