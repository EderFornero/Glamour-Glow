import {z} from "zod"

const serviceSchema = z.object({
    name: z
    .string({required_error: "a seller name is required"  })
    .nonempty("You must provide a seller name")
    .max(50,"Max, 50 characters")
    .trim(),
    description: z
    .string({required_error: "a seller name is required"  })
    .nonempty("You must provide a seller name")
    .max(50,"Max, 50 characters")
    .trim(),
    serviceCategories: z
    .array(z.string())
    .nonempty("You must provide at least 1 category")
    .min(1, "Min 1 category please"),
    price: z
    .number({required_error: "You must provide a price"})
    .nonnegative(),
    rating: z
    .number({required_error: "Rating is required between 0 and 5"})
    .nonnegative()
    .gte(0, "min rating is 0")
    .lte(5, "max rating is 5"),
    seller: z
    .array(z.string())
    .nonempty("You must provide a seller related to the services")

});

export const createServiceSchema = z.object({
    body: serviceSchema
});

export const updateServiceSchema = z.object({
    body: serviceSchema.optional()
});