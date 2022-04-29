import Link from "next/link";
import { useState } from "react";
import StartupProjectCard from "../StartupProjectCard";

interface ButtonProps {
  text: string;
  href?: string;
  link?: boolean;
  target?: string;
}

const ActionButton = (props: ButtonProps) => {
  return (
    <Link href={props.href} passHref>
      <a
        className="underline text-blue-500 hover:text-blue-600"
        target={props.target}
      >
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          {props.text}
        </button>
      </a>
    </Link>
  );
};

const UnamacroProject = () => {
  return (
    <div className="">
      <div className="space-y-3">
        {/* <div className="relative w-full h-80 overflow-hidden border-1 border-b">
          <Image
            src="/portrait.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div> */}
        <div className="space-y-3 p-5">
          <h1>Unamacro</h1>
          <p className="!mt-0 !mb-3">Founder - CEO</p>
          <div className="flex space-x-2">
            <ActionButton
              target="_blank"
              text="Visit site"
              href="https://www.unamacro.com"
            />
            <ActionButton link text="Details" href="/projects/unamacro" />
          </div>
          <p>
            <strong>Marketing Automation SaaS</strong>
          </p>
          <p>
            At Unamacro we want to generate growth for everyone using digital
            tools for Marketing and Sales.
          </p>
          <p>
            We create a Marketing SaaS solution for small businesses, including
            CRM, Email Marketing and third party integrations with tools like
            Facebook Lead Ads. We also worked as Digital Marketing Agency with
            some clients.
          </p>
          <p>
            We offer fully automated Marketing Solutions and sales funnels for
            Small Businesses. I know the value of community, so we created a
            public community platform to share Marketing knowledge with
            entrepreneurs and small businesses. Unamacro is community first.
          </p>
          <p>
            <strong>Actually we have 2 principal projects:</strong>
          </p>
          <ul className="list-disc list-inside">
            <li>Unamacro SaaS application</li>
            <li>Community Blog Platform</li>
          </ul>
        </div>
      </div>
      {/* <div className="col-span-4">Some text here</div> */}
    </div>
  );
};

const TrimmProject = () => {
  return (
    <div className="">
      <div className="p-5 space-y-3">
        <h1>Trimm.tv</h1>
        <p className="!mt-0 !mb-3">Founder - CEO</p>
        <div className="flex space-x-2">
          <ActionButton
            target="_blank"
            text="Visit site"
            href="https://trimm.tv"
          />
          <ActionButton link text="Details" href="/projects/trimm" />
        </div>
        <p>
          <strong>Video Platform</strong>
        </p>
        <p>
          Trimm videos from the internet and share only relevant content. Clips
          and video highlights.
        </p>
        <p>
          I've created all this whole video platform from scratch. The MVP is
          Actually working for Youtube videos.
        </p>
        <ul className="list-disc list-inside">
          <li>Domain Driven Design (DDD) and Hexagonal Architecture.</li>
          <li>Server Side Rendering (SSR).</li>
        </ul>
      </div>
    </div>
  );
};

const MejorateProject = () => {
  return (
    <div className="">
      <div className="p-5 space-y-3">
        <h1>Mejorate.online</h1>
        <p className="!mt-0 !mb-3">Founder - CEO</p>
        <div className="flex space-x-2">
          <ActionButton
            target="_blank"
            text="Visit site"
            href="https://mejorate.online"
          />
          <ActionButton
            target="_blank"
            text="Details"
            href="https://mejorate.online"
          />
          {/* <Link href="/projects/mejorate" passHref>
          <a>
            <ActionButton text="Details" />
          </a>
        </Link> */}
        </div>
        <p>
          <strong>E-commerce platform</strong>
        </p>
        <p>
          Validated online courses. Acquire specific skills to generate more
          income.
        </p>
        <p>
          I create this ecommerce platform made in Wordpress to promote Digital
          Courses with multiple Marketing Strategies. We only add courses
          validated by our team in our catalog.
        </p>
        <p>
          I made some viral Tiktok Videos for the pets niche. We got 28.1Million
          views on our most viewed video and several millions on others. This
          generated us 100K followers in one week.
        </p>
      </div>

      {/* <p>Redirect here to Mejorate.online with all landings</p> */}
    </div>
  );
};

const selectedProject = (project: number) => {
  switch (project) {
    case 1:
      return <UnamacroProject />;
    case 2:
      return <TrimmProject />;
    case 3:
      return <MejorateProject />;
      break;
  }
};

interface IProps {
  className?: string;
}

const StartupProjectsSection = (props: IProps) => {
  const [activeCard, setActiveCard] = useState(1);

  const changeActiveCard = (cardNumber: number) => {
    setActiveCard(cardNumber);
  };

  return (
    <div
      className={`bg-white ${props.className ? props.className : ""}`.trim()}
    >
      <div className="flex flex-wrap" id="startup-projects">
        <StartupProjectCard
          image="/unamacro-logo.png"
          imageAlt="Unamacro logo"
          title="Unamacro"
          webUrl="https://www.unamacro.com"
          webUrlText="unamacro.com"
          active={activeCard === 1}
          onClick={() => changeActiveCard(1)}
        />
        <StartupProjectCard
          image="/trimm-logo.png"
          imageAlt="Trimm.tv logo"
          title="Trimm.tv"
          webUrl="https://trimm.tv"
          webUrlText="trimm.tv"
          active={activeCard === 2}
          onClick={() => changeActiveCard(2)}
        />
        <StartupProjectCard
          image="/mejorate.online-circular-logo.png"
          imageAlt="Mejorate.online Logo"
          title="Mejorate.online"
          description="Side project"
          webUrl="https://mejorate.online"
          webUrlText="mejorate.online"
          active={activeCard === 3}
          onClick={() => changeActiveCard(3)}
        />
      </div>
      <div className="bg-white border text-left">
        {selectedProject(activeCard)}
      </div>
    </div>
  );
};

export default StartupProjectsSection;
