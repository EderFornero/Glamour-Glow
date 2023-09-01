import {z} from "zod"
import { GENDER } from "../models/Seller"

const sellerSchema = z.object({
    seller_name: z
    .string({required_error: "a seller name is required"  })
    .nonempty("You must provide a seller name")
    .max(50,"Max, 50 characters")
    .trim(),
    seller_email: z
    .string({ required_error: "Email is required"})
    .email("Must be an Email")
    .nonempty("Must provide an email"),
    seller_phone: z
    .string({required_error: "A phone number is required"})
    .min(6)
    .max(20),
    seller_gender: z
    .enum([GENDER.ANY, GENDER.FEMALE, GENDER.MALE],{
        required_error: "Gender must be female, male or any"
    }),
   categoriesArray: z
    .array(z.string())
    .nonempty("You must provide at least 1 category")
    .min(1, "Min 1 category please"),
    servicesArray: z
    .array(z.string())
    .optional() 

});

export const CreateSellerSchema = z.object({
    body: sellerSchema
});

export const updateSellerSchema = z.object({
    body: sellerSchema.optional()
});

