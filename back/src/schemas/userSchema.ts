import { z } from "zod";
import { ROLE } from "../models/User";

const UserSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .nonempty("You must provide a full name")
    .max(50, "Max 50 characters")
    .trim(),
  last_name: z
    .string({ required_error: "Last name is required" })
    .nonempty("You must provide a full name")
    .max(50, "Max 50 characters")
    .trim(),
  role: z.enum([ROLE.CUSTOMER, ROLE.SELLER], {
    required_error: "Role must be customer or seller",
  }),
  phone_number: z
    .string({ required_error: "A phone number is required" })
    .min(6)
    .max(20),

  date_of_birth: z
    .string({ required_error: "A date of birth is required" })
    .transform((str) => new Date(str)),

  image: z
    .string({ required_error: "the url image must be provided" })
    .optional(),

  password: z
    .string({ required_error: "password  is required" })
    .nonempty("You must provide a password")
    .min(6, "The password should have at least 6 characters")
    .max(12, "12 characters max")
    .trim(),
  email: z
    .string({ required_error: "Email is required" })
    .email("Must be an Email")
    .nonempty("Must provide an email"),
  isActive: z.boolean().optional(),
});

export const CreateUserSchema = z.object({
  body: UserSchema,
});

export const updateUserSchema = z.object({
  body: UserSchema.partial(),
  params: z.object({
    id: z.string(),
  }),
});

export const readAndDeleteUserSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});

export type createUserType = z.infer<typeof CreateUserSchema>["body"];
export type updateUserTypeBody = z.infer<typeof updateUserSchema>["body"];
export type updateUserTypeParams = z.infer<typeof updateUserSchema>["params"];
export type readAndDeleteUserType = z.infer<
  typeof readAndDeleteUserSchema
>["params"];
