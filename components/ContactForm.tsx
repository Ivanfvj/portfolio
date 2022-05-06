import LinkedInIcon from "../components/Icons/LinkedInIcon";

export default function ContactForm() {
  return (
    <div className="my-5">
      {/* TODO: Here set up Tally form and linkedIn button */}
      <a className="inline-block" href="https://linkedin.com/in/ivanfvj" target="_blank">
        <button className="pl-3 pr-4 flex items-center py-2 rounded bg-blue-700 hover:bg-blue-800 text-white font-semibold">
          <LinkedInIcon className="mr-2" color="#fff" />
          <span>Via LinkedIn</span>
        </button>
      </a>
    </div>
  );
}
