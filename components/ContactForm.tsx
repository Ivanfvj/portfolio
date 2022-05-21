import Link from "next/link";
import LinkedInIcon from "../components/Icons/LinkedInIcon";
import ActionButton from "./shared/material/ActionButton";

export default function ContactForm() {
  return (
    <div
      id="contact"
      style={{ width: 300 }}
      className="my-5 mx-auto rounded flex flex-col items-center space-y-3"
    >

      <Link
        href="mail:to=ivan.orgv@gmail.com?subject=Hey%20Iván,%20Let's%20Get%20in%20touch!"
        passHref
      >
        <a>
          <ActionButton text="Email me" outlined={false} />
        </a>
      </Link>

      {/* TODO: Here set up Tally form and linkedIn button */}
      <a
        className="inline-block"
        href="https://linkedin.com/in/ivanfvj"
        target="_blank"
      >
        <button className="pl-3 pr-4 flex items-center py-2 rounded bg-blue-700 hover:bg-blue-800 text-white font-semibold">
          <LinkedInIcon className="mr-2" color="#fff" />
          <span>Via LinkedIn</span>
        </button>
      </a>
    </div>
  );
}
