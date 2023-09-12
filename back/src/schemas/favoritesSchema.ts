import {z} from "zod";

const favoritesSchema = z.object({
    sellerId: z
    .string({required_error: "Seller id is required"})
    .nonempty("You must provide a seller id"),

    userId: z
    .string({required_error: "User id is required"})
    .nonempty("You must provide a user id")
})

export const createFavoritesSchema = z.object({
    body: favoritesSchema
})
export const deleteFavoritesSchema = z.object({
    params: z.object({
        id: z.string()
    })
})

export type createFavoriteType = z.infer<typeof createFavoritesSchema>["body"]
export type deleteFavoriteType = z.infer<typeof deleteFavoritesSchema>["params"]