interface ButtonProps {
  text: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const ActionButton = (props: ButtonProps) => {
  return (
    <button
      className={`bg-transparent py-2 px-4 hover:bg-blue-500 text-blue-700 font-semibold 
      hover:text-white border border-blue-500 hover:border-transparent rounded ${
        props.className ? props.className : ""
      }`.trim()}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default ActionButton;
