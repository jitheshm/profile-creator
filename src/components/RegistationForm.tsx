"use client";
import useRegistration from "@/hooks/componentHooks/useRegistration";
import Button from "./common/Button";
import Input from "./common/Input";

/**
 * Registration form component. Uses the useRegistration hook to handle form submission and validation.
 *
 * The form consists of input fields for name, email, phone number, password, and confirm password.
 * After a successful submission, the form displays a success message at the top of the form.
 *
 * @returns A JSX element representing the registration form.
 */
function RegistationForm() {
  const { handleFormSubmit, errors, message } = useRegistration();

  return (
    <>
      <form
        className="w-full mx-auto max-w-md bg-white p-6 rounded-lg shadow-lg"
        onSubmit={handleFormSubmit}
        method="post"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Sign Up
        </h2>
        {message && (
          <p className="text-green-500 text-md text-center mt-1">{message}</p>
        )}
        <div className="mb-4">
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            labelName="Name"
            error={errors.name}
          />
        </div>
        <div className="mb-4">
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            labelName="Email"
            error={errors.email}
          />
        </div>
        <div className="mb-4">
          <Input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            labelName="Phone Number"
            error={errors.phone}
          />
        </div>
        <div className="mb-4">
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            labelName="Password"
            error={errors.password}
          />
        </div>
        <div className="mb-4">
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Re enter your password"
            labelName="Confirm Password"
            error={errors.confirmPassword}
          />
        </div>
        <Button
          type="submit"
          name="Sign Up"
          className="w-full bg-blue-500 text-white font-medium py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
        />
      </form>
    </>
  );
}

export default RegistationForm;
