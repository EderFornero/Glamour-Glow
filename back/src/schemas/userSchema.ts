import {z} from "zod"
import { ROLE } from '../models/User'

export const userSchema = z.object({
    body: z.object({
        username: z
            .string({ required_error: "User name must be characters"})
            .nonempty("You must provide an user name")
            .max(50,"Max 50 characters")
            .trim(),
        fullname: z
            .string({ required_error: "Full name is required"})
            .nonempty("You must provide a full name")
            .max(50,"Max 50 characters")
            .trim(),
        role: z
            .enum ([ROLE.CUSTOMER, ROLE.SELLER], {
            required_error: "Role must be customer or seller"
        }),


        date_of_birth: z
            .date({required_error: "Date of birth is required"}),

        image: z
            .string({required_error: "the url image must be provided"})
            .optional(),
        
        password: z
            .string({required_error: "password  is required"})
            .nonempty("You must provide a password")
            .min(6,"The password should have at least 6 characters")
            .max(12,"12 characters max")
            .trim(),
        email: z
            .string({ required_error: "Email is required"})
            .email("Must be an Email")
            .nonempty("Must provide an email")
    }),
});

export const updateUserSchema = z.object({
    body: z.object({
        username: z
            .string({ required_error: "User name must be characters"})
            .nonempty("You must provide an user name")
            .max(50,"Max 50 characters")
            .trim()
            .optional(),
        fullname: z
            .string({ required_error: "Full name is required"})
            .nonempty("You must provide a full name")
            .max(50,"Max 50 characters")
            .trim()
            .optional(),
        role: z
            .enum ([ROLE.CUSTOMER, ROLE.SELLER], {
            required_error: "Role must be customer or seller"
        })
        .optional(),


        date_of_birth: z
            .date({required_error: "Date of birth is required"})
            .optional(),

        image: z
            .string({required_error: "the url image must be provided"})
            .optional(),
        
        password: z
            .string({required_error: "password  is required"})
            .nonempty("You must provide a password")
            .min(6,"The password should have at least 6 characters")
            .max(12,"12 characters max")
            .trim()
            .optional(),
        email: z
            .string({ required_error: "Email is required"})
            .email("Must be an Email")
            .nonempty("Must provide an email")
            .optional(),
    }),
});