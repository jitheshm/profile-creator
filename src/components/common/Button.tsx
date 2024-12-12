type ButtonProps = {
  type: "submit" | "reset" | "button";
  name: string;
  className: string;
};
/**
 * Button component that renders a button element.
 *
 * @param {Object} props - The properties object.
 * @param {"submit" | "reset" | "button"} props.type - The type of the button.
 * @param {string} props.name - The name to be displayed on the button.
 * @param {string} props.className - The CSS class for styling the button.
 *
 * @returns {JSX.Element} A JSX element representing a button.
 */
function Button({ type, name, className }: ButtonProps) {
  return (
    <button type={type} className={className}>
      {name}
    </button>
  );
}

export default Button;
