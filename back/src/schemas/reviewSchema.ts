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

    seller_id: z
    .string({required_error: "a seller id is required"}),

    user_id: z
    .string({required_error: "you must provide a user id"})



})

export const createReviewSchema = z.object({
    body: reviewSchema
})
export const deleteReviewSchema = z.object({
    params: z.object({
        id: z.string()
    })
})



export type createReviewType = z.infer<typeof createReviewSchema>["body"]
export type deleteReviewType = z.infer<typeof deleteReviewSchema>["params"]