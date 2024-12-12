type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  labelName: string;
  error?: string;
};

/**
 * A single input field with a label and optional error message.
 *
 * The component renders a label with the given `labelName` and an input field
 * with the given `type`, `name`, and `placeholder`. If an `error` is provided,
 * it will be displayed below the input field in red text.
 *
 * The component uses Tailwind CSS classes to style the input field and label.
 *
 * @param {string} type - The type of the input field (e.g. "text", "email", etc.)
 * @param {string} name - The name of the input field
 * @param {string} placeholder - The placeholder text for the input field
 * @param {string} labelName - The text for the label
 * @param {string} [error] - An optional error message to display below the input field
 */
function Input({ type, name, placeholder, labelName, error }: InputProps) {
  return (
    <div>
      <label
        htmlFor={labelName}
        className="block text-gray-700 font-medium mb-2"
      >
        {labelName}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

export default Input;
