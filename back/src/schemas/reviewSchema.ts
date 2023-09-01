import {z} from "zod"

const reviewSchema = z.object({
    rating: z
    .number({required_error: "Rating is required"})
    .nonnegative()
    .min(1)
    .max(5),

    description: z
    .string({required_error: "Description is required"})
    .nonempty("You must provide a description")
    .max(50, "The description must be up to 50 characters"),

})

export const createReviewSchema = z.object({
    body: reviewSchema
})



export type createReviewType = z.infer<typeof createReviewSchema>["body"]