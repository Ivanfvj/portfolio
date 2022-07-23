import { BaseReactProps } from "@src/common";
import Link from "next/link";

interface ITimelineProps extends BaseReactProps {}

const DetailsButton = (props: any) => {
  return (
    <Link href="/">
      <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
        {props.children}
      </button>
    </Link>
  );
};

const TimelineIcon = (props: any) => {
  return (
    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
      <svg
        aria-hidden="true"
        className="w-3 h-3 text-blue-600 dark:text-blue-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clipRule="evenodd"
        ></path>
      </svg>
    </span>
  );
};

interface TimelineItem {
  title: string;
  subtitle?: string;
  description: string;
  time?: string;
  detailsUrl?: string;
}

const items: TimelineItem[] = [
  {
    title: "Software Engineer and Founder",
    subtitle: "Unamacro",
    description:
      "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
    time: "November 2020 - April 2022",
  },
  {
    title: "Co-Founder",
    subtitle: "Mejorate.online",
    description:
      "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
    time: "September 2021 - April 2022",
  },
  {
    title: "Web Developer",
    subtitle: "Multiple Contracts",
    description:
      "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
    time: "February 2019 - November 2021",
  },
];

export function Timeline(props: ITimelineProps) {
  return (
    <div>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {items.map((e) => (
          <li key={e.title} className="mb-10 ml-6">
            <TimelineIcon />
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {e.title}
              {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              Latest
            </span> */}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {e.time}
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {e.description}
            </p>
            {e.detailsUrl && <DetailsButton />}
          </li>
        ))}
      </ol>
    </div>
  );
}
