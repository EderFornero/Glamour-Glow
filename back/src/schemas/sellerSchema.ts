import { z } from "zod";
import { GENDER } from "../models/Sellers";

const sellerSchema = z.object({
  sellerName: z
    .string({ required_error: "a seller name is required" })
    .nonempty("You must provide a seller name")
    .max(50, "Max, 50 characters")
    .trim(),
  sellerEmail: z
    .string({ required_error: "Email is required" })
    .email("Must be an Email")
    .nonempty("Must provide an email"),
  sellerPassword: z
    .string({ required_error: "password  is required" })
    .nonempty("You must provide a password")
    .min(6, "The password should have at least 6 characters")
    .max(12, "12 characters max")
    .trim(),
  sellerPhone: z
    .string({ required_error: "A phone number is required" })
    .min(6)
    .max(20),
  sellerGender: z.enum([GENDER.ANY, GENDER.FEMALE, GENDER.MALE], {
    required_error: "Gender must be female, male or any",
  }),
  categoriesArray: z
    .array(z.string())
    .nonempty("You must provide at least 1 category")
    .min(1, "Min 1 category please"),
  servicesArray: z.array(z.string()).optional(),
  reviews: z.array(z.string()).optional(),
});

export const createSellerSchema = z.object({
  body: sellerSchema,
});

export const updateSellerSchema = z.object({
  body: sellerSchema.partial(),
  params: z.object({
    id: z.string(),
  }),
});

export const readAndDeleteSellerSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});

export type createSellerType = z.infer<typeof createSellerSchema>["body"];
export type updateSellerTypeBody = z.infer<typeof updateSellerSchema>["body"];
export type updateSellerTypeParams = z.infer<
  typeof updateSellerSchema
>["params"];
export type readAndDeleteSellerTypeParams = z.infer<
  typeof readAndDeleteSellerSchema
>["params"];
