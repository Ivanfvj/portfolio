import Link from "next/link";
import { ReactNode } from "react";

import { BaseReactProps } from "@src/common";
import { classNames } from "@src/utils";

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

const DefaultTimelineIcon = (
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
);

const TimelineIcon = (props: BaseReactProps) => {
  return (
    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
      {props.children ? props.children : DefaultTimelineIcon}
    </span>
  );
};

export interface ITimelineItem {
  title: string;
  subtitle?: string;
  time?: string;
  detailsUrl?: string;
}

interface ITimelineItemProps extends BaseReactProps, ITimelineItem {
  icon?: () => ReactNode;
}

export function TimelineItem(props: ITimelineItemProps) {
  return (
    <li className="mb-10 ml-6">
      <TimelineIcon>{props.icon && props.icon()}</TimelineIcon>
      <div className="flex justify-between items-center">
        <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
          {props.title}
        </h3>
        {props.time && (
          <time className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {props.time}
          </time>
        )}
      </div>
      {props.subtitle && <p>{props.subtitle}</p>}
      {props.children && <div className="mt-2 text-sm text-gray-600">{props.children}</div>}
      {props.detailsUrl && <DetailsButton />}
    </li>
  );
}

export function Timeline(props: ITimelineProps) {
  return (
    <div>
      <ol
        className={classNames(
          "relative border-l border-gray-200 dark:border-gray-700",
          props.className
        )}
      >
        {props.children}
      </ol>
    </div>
  );
}
