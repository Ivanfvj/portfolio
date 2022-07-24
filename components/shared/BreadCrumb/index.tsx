import { ReactElement } from "react";
import Link from "next/link";

import { BaseReactProps } from "@src/common";
import { classNames } from "@src/utils";

interface IBreadCrumbProps extends BaseReactProps {
  items: IBreadCrumbItem[];
  outlined?: boolean;
}

export interface IBreadCrumbItem {
  text: string;
  href?: string;
  disabled?: boolean;
}

interface BreadCrumbLinkProps extends BaseReactProps {
  text: string;
  href?: string;
  activeRoute?: boolean;
  disabled?: boolean;
  renderPrevIcon?: () => ReactElement;
}

const HomeIcon = ({ className }: BaseReactProps) => (
  <svg
    className={classNames("mr-2 w-4 h-4", className)}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
  </svg>
);

const Separator = () => (
  <svg
    className="w-6 h-6 text-gray-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const BreadCrumbLink = (props: BreadCrumbLinkProps) => {
  if (props.disabled) {
    return (
      <span
        className={classNames(
          "text-sm font-medium text-gray-500 dark:text-gray-400",
          props.className
        )}
      >
        {props.text}
      </span>
    );
  }
  return (
    <Link href={props.href || "#"} passHref>
      <a
        className={classNames(
          "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
          props.className
        )}
      >
        {props.renderPrevIcon && props.renderPrevIcon()}
        <span>{props.text}</span>
      </a>
    </Link>
  );
};

export function BreadCrumb(props: IBreadCrumbProps) {
  const { items } = props;

  return (
    <nav
      className={classNames(
        "flex",
        props.className,
        props.outlined
          ? "py-3 px-5 text-gray-700 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
          : ""
      )}
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <BreadCrumbLink
            text="Home"
            href="/"
            renderPrevIcon={() => <HomeIcon />}
          />
        </li>
        {items &&
          items.map((e, index) => {
            const isLastItem = index === items.length - 1;
            return (
              <li key={e.href} aria-current={isLastItem ? "page" : undefined}>
                <div className="flex items-center">
                  <Separator />
                  <BreadCrumbLink
                    className="ml-1 md:ml-2"
                    text={e.text}
                    href={e.href}
                    disabled={isLastItem}
                  />
                </div>
              </li>
            );
          })}
      </ol>
    </nav>
  );
}
