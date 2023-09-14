import { z } from "zod";
import { ROLE } from "../models/User";

const UserSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .nonempty("You must provide a full name")
    .max(50, "Max 50 characters")
    .trim(),
  lastName: z
    .string({ required_error: "Last name is required" })
    .nonempty("You must provide a full name")
    .max(50, "Max 50 characters")
    .trim(),
  role: z.enum([ROLE.CUSTOMER], {
    required_error: "Role must be customer",
  }),
  phoneNumber: z
    .string({ required_error: "A phone number is required" })
    .min(6)
    .max(20),

  dateOfBirth: z
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

export const readAndReActiveUserSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});

export const loginUserSchema = z.object({
  body: z.object({
   email: z.string({required_error: "Email is required"})
   .email("Not a valid email"),
   password: z
   .string({ required_error: "Password  is required" })
   .nonempty("You must provide a password")
   .min(6, "The password should have at least 6 characters")
   .max(12, "12 characters max")
   .trim()
  }),
});

export const forgotPasswordSchema = z.object({
  body: z.object({
   email: z.string({required_error: "Email is required"})
   .email("Not a valid email"),
  }),
});
 
export const resetPasswordSchema = z.object({
  params: z.object({
    id: z.string(),
    passwordResetCode: z.string()
  }),
  body: z.object({
    password: z.string({required_error: "Password is required"}).min(6, "Password is too short -- should be min 6 chars"),
    passwordConfirmation: z.string({required_error: "Password confirmation is required"})
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"]
  })
})

export type createUserType = z.infer<typeof CreateUserSchema>["body"];
export type updateUserTypeBody = z.infer<typeof updateUserSchema>["body"];
export type updateUserTypeParams = z.infer<typeof updateUserSchema>["params"];
export type readAndDeleteUserType = z.infer<typeof readAndDeleteUserSchema>["params"];
export type readAndReActiveUserType = z.infer<typeof readAndReActiveUserSchema>["params"];
export type loginSellerType = z.infer<typeof loginUserSchema>["body"]
export type forgotPasswordTypeBody = z.infer<typeof forgotPasswordSchema>["body"];
export type resetPasswordType = z.infer<typeof resetPasswordSchema>;
