import {z} from "zod";

const AdminSchema = z.object({
    name: z
    .string({required_error: "Name is required"})
    .nonempty("You must provide a name"),

    email: z
    .string({required_error: "Email is required"})
    .nonempty("You must provide an email")
    .email("Must be an email"),

    password: z
    .string({required_error: "Password is required"})
    .nonempty("You must provide a password")
    .min(6, "The password should have at least 6 characters")
    .max(18, "Max 18 chars please")
    .trim(),

    role: z
    .string({required_error: "Role is required"})
    .nonempty("You must provide your role")

})

export const createAdminSchema = z.object({
    body: AdminSchema
});

export const loginAdminSchema = z.object({
    body: z.object({
        email: z
        .string()
        .nonempty()
        .email(),
        password: z
        .string()
        .nonempty()
        .min(6, "The password should have at least 6 characters")
        .max(18, "Max 18 chars please")
        .trim()
    })
});
export type createAdminType = z.infer<typeof createAdminSchema>["body"]
export type loginAdminType = z.infer<typeof loginAdminSchema>["body"]