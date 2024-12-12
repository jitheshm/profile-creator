import { registrationSchema } from "@/validation/registrationSchema";
import { useState } from "react";
import { z } from "zod";

/**
 * Handles form submission and validation for the registration form.
 *
 * The hook returns an object with the following properties:
 * - `handleFormSubmit`: A function that takes a React `FormEvent` and handles
 *   submitting the form and validating the input data.
 * - `errors`: An object containing field-level error messages. The keys are
 *   the field names and the values are the error messages.
 * - `message`: A string containing a success message or null if there is no
 *   message.
 *
 * The hook uses the `registrationSchema` to validate the input data. If the
 * input data is valid, the hook sets a success message and resets the form.
 * If the input data is invalid, the hook sets the `errors` object with the
 * field-level error messages.
 */
const useRegistration = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState<string | null>(null);
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});
    const formData = new FormData(event.target as HTMLFormElement);
    const userInput = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };
    console.log(userInput);
    try {
      registrationSchema.parse(userInput);
      setMessage("Profile successfully created!");
      event.currentTarget.reset();
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        err.errors.forEach((error) => {
          if (error.path[0]) {
            fieldErrors[error.path[0] as string] = error.message;
          }
        });
        setMessage(null)
        setErrors(fieldErrors);
      }
    }
  };

  return { handleFormSubmit, errors, message };
};

export default useRegistration;
