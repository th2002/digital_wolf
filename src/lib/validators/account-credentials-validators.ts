import { z } from "zod";

// Define a validation schema for authentication credentials using Zod.
export const AuthCredentialsValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

// Infer the type of the validation schema.
export type TAuthCredentialsValidator = z.infer<
  typeof AuthCredentialsValidator
>;
