interface ButtonProps {
  text: string;
  href?: string;
  className?: string;
}

const ActionButton = (props: ButtonProps) => {
  return (
    <a
      className={`underline text-blue-500 hover:text-blue-600 ${
        props.className ? props.className : ""
      }`.trim()}
      href={props.href}
      target="_blank"
    >
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        {props.text}
      </button>
    </a>
  );
};

export default ActionButton;
