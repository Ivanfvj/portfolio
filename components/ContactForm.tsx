import { MailIcon } from "@heroicons/react/solid";

import LinkedInIcon from "../components/Icons/LinkedInIcon";

export default function ContactForm() {
  return (
    <div
      id="contact"
      style={{ width: 300 }}
      className="my-5 mx-auto rounded flex flex-col items-center space-y-3"
    >
      <p className="font-semibold text-2xl">Contact Me</p>
      <a
        href="mail:to=ivan.orgv@gmail.com?subject=Hey%20Iván,%20Let's%20Get%20in%20touch!"
        target="_blank"
        className="w-44"
      >
        <button className="w-full px-3 flex items-center py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold">
          <MailIcon className="w-7 mr-2" />
          <span className="text-center flex-grow">Email me</span>
        </button>
      </a>

      {/* TODO: Here set up Tally form and linkedIn button */}
      <a
        className="inline-block w-44"
        href="https://linkedin.com/in/ivanfvj"
        target="_blank"
      >
        <button className="w-full px-3 flex items-center py-2 rounded bg-blue-700 hover:bg-blue-800 text-white font-semibold">
          <LinkedInIcon className="mr-2" color="#fff" />
          <span className="text-center flex-grow">LinkedIn</span>
        </button>
      </a>
    </div>
  );
}
