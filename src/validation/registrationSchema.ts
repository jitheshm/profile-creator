import { z } from "zod";

/**
 * Registration schema.
 *
 * The schema consists of the following fields:
 * - `name`: A string with a minimum length of 3 characters.
 * - `email`: A string that must be a valid email address.
 * - `phone`: An optional string that must contain only digits.
 * - `password`: A string with a minimum length of 8 characters that must
 *   contain at least one uppercase letter, one lowercase letter, one
 *   numeric digit, and one special character.
 * - `confirmPassword`: A string with a minimum length of 8 characters that
 *   must match the password.
 */

export const registrationSchema = z
  .object({
    name: z.string().min(3, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z
      .string()
      .optional()
      .refine(
        (val) => !val || /^\d+$/.test(val),
        "Phone number must contain only digits"
      ),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one numeric digit")
      .regex(
        /[@#$%^&*()_+!~={}\[\]|\\:;"'<>,.?/]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z
      .string()
      .min(8, "Confirm password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
