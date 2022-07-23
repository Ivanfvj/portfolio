import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  XIcon,
  MenuIcon,
  DownloadIcon,
  FingerPrintIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon, HomeIcon } from "@heroicons/react/solid";

import { BaseReactProps, RESUME_URL } from "@src/common";
import { classNames } from "@src/utils";
import { withLink } from "@components/hoc/withLink";

interface MenuItem {
  name: string;
  description: string;
  href: string;
  icon?: any; // TODO: Update to specific typing
}

const UnamacroIcon = () => {
  return (
    <Image width={40} height={40} src="/unamacro-logo.png" alt="Unamacro" />
  );
};

const MejorateOnlineIcon = () => {
  return (
    <Image
      width={40}
      height={40}
      src="/mejorate.online-circular-logo.png"
      alt="Mejorate.online"
    />
  );
};

const TrimmIcon = () => {
  return <Image width={40} height={40} src="/trimm-logo.png" alt="Trimm.tv" />;
};

const startupProjects: MenuItem[] = [
  {
    name: "Unamacro",
    description: "Marketing Automation",
    href: "/projects/unamacro",
    icon: UnamacroIcon,
  },
  {
    name: "Mejorate.online",
    description: "Digital Courses E-commerce",
    href: "/projects/mejorate",
    icon: MejorateOnlineIcon,
  },
  {
    name: "Trimm.tv",
    description: "Video Highlights Platform",
    href: "/projects/trimm",
    icon: TrimmIcon,
  },
];

// const callsToAction = [{ name: "Watch Demo", href: "#", icon: PlayIcon }];
const resources = [
  // {
  //   name: "Life Timeline",
  //   description: "Life timeline and profesional experience timeline",
  //   href: "/timeline",
  //   icon: FingerPrintIcon,
  // },
  {
    name: "Certificates",
    description: "Certificates and Awards",
    href: "/certificates",
    icon: AcademicCapIcon,
  },
  {
    name: "Resume",
    description: "Download CV",
    href: RESUME_URL,
    icon: DownloadIcon,
    target: "_blank",
  },
];

interface AppBarLinkProps extends BaseReactProps {
  href: string;
  active?: boolean;
}

const AppBarLink = withLink((props: AppBarLinkProps) => (
  <span
    className={classNames(
      "text-base font-medium text-gray-700 hover:text-black",
      props.active ? "text-purple-700" : ""
    )}
  >
    {props.children}
  </span>
));

const MenuTransition = (props: BaseReactProps) => (
  <Transition
    as={Fragment}
    enter="transition ease-out duration-200"
    enterFrom="opacity-0 translate-y-1"
    enterTo="opacity-100 translate-y-0"
    leave="transition ease-in duration-150"
    leaveFrom="opacity-100 translate-y-0"
    leaveTo="opacity-0 translate-y-1"
  >
    {props.children}
  </Transition>
);

interface PopoverMenuProps extends BaseReactProps {
  title: string;
}

const PopoverMenu = (props: PopoverMenuProps) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-black" : "text-gray-700",
              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            )}
          >
            <span>{props.title}</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-gray-600" : "text-gray-400",
                "ml-2 h-5 w-5 group-hover:text-gray-500"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <MenuTransition>
            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                {props.children}
              </div>
            </Popover.Panel>
          </MenuTransition>
        </>
      )}
    </Popover>
  );
};

const AppBarMenuItem = (item: MenuItem) => {
  return (
    <Link href={item.href} passHref>
      <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
        {item.icon && (
          <item.icon
            className="flex-shrink-0 h-6 w-6 text-indigo-600"
            aria-hidden="true"
          />
        )}
        <div className="ml-4">
          <p className="text-base font-medium text-gray-900">{item.name}</p>
          <p className="mt-1 text-sm text-gray-500">{item.description}</p>
        </div>
      </a>
    </Link>
  );
};

const MobileMenuItem = (props: any) => {
  return (
    <Link key={props.name} href={props.href} passHref>
      <a
        key={props.name}
        target={props.target}
        className="p-3 flex items-start rounded-lg hover:bg-gray-50"
      >
        {props.icon && (
          <props.icon
            className="flex-shrink-0 h-6 w-6 text-indigo-600"
            aria-hidden="true"
          />
        )}
        <div className="ml-4">
          <p className="text-base font-medium text-gray-900">{props.name}</p>
          <p className="mt-1 text-sm text-gray-500">{props.description}</p>
        </div>
      </a>
    </Link>
  );
};

export function AppBar() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="hidden md:flex justify-start">
            <Link href="/" passHref>
              <a>
                <span className="sr-only">Home</span>
                <HomeIcon className="h-6 w-auto sm:h-6" />
              </a>
            </Link>
          </div>
          {/* Hamburguer Menu Button */}
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Abrir menú</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="hidden md:flex flex-1 items-centers space-x-10"
          >
            <AppBarLink href="/projects">Portfolio</AppBarLink>

            <PopoverMenu title="Startup Projects">
              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                {startupProjects.map((item) => (
                  <AppBarMenuItem key={item.name} {...item} />
                ))}
              </div>
            </PopoverMenu>

            <div className="flex-grow"></div>

            <AppBarLink href="/about">About</AppBarLink>

            {/* More popover */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-black" : "text-gray-700",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <MenuTransition>
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <Link key={item.name} href={item.href} passHref>
                              <a
                                key={item.name}
                                target={item.target}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </MenuTransition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="md:flex items-center justify-end">
            <a
              href="#contact"
              className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 z-10 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-300">
            <div className="py-5 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/" passHref>
                    <a className="flex space-x-2 hover:bg-gray-100 rounded-md p-2">
                      <HomeIcon className="h-6 w-auto sm:h-6" />
                      <span className="font-bold">Home</span>
                    </a>
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Cerrar menú</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="pt-5 pb-6 px-5">
              <nav className="relative grid grid-cols-2 gap-y-2 gap-x-8">
                <MobileMenuItem
                  name="Portfolio"
                  href="/projects"
                  icon={BriefcaseIcon}
                />
                <MobileMenuItem
                  name="About"
                  href="/about"
                  icon={InformationCircleIcon}
                />
              </nav>
            </div>
            <div className="p-5">
              <p className="text-gray-600 mb-5 px-3">Startup Projects</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-3">
                <Link href="/projects/unamacro" passHref>
                  <a className="relative flex flex-col text-center justify-center rounded-md hover:bg-slate-50 py-4 border border-transparent hover:border-gray-200">
                    <figure className="relative">
                      <UnamacroIcon />
                    </figure>
                    <span>Unamacro</span>
                  </a>
                </Link>
                <Link href="/projects/mejorate" passHref>
                  <a className="relative flex flex-col text-center justify-center rounded-md hover:bg-slate-50 py-4 border border-transparent hover:border-gray-200">
                    <figure className="relative">
                      <MejorateOnlineIcon />
                    </figure>
                    <span>Mejorate.online</span>
                  </a>
                </Link>
                <Link href="/projects/trimm" passHref>
                  <a className="relative flex flex-col text-center justify-center rounded-md hover:bg-slate-50 py-4 border border-transparent hover:border-gray-200">
                    <figure className="relative">
                      <TrimmIcon />
                    </figure>
                    <span>Trimm.tv</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-2 gap-x-8">
                {resources.map((item) => (
                  <Link key={item.name} href={item.href} passHref>
                    <a
                      key={item.name}
                      target={item.target}
                      className="p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
              <div>
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
