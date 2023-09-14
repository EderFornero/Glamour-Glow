import {z} from "zod"

const visitsSchema =z.object({
    date: z.date(),
    path: z.string({required_error: "Path is required"})
})

export const countVisitsSchema = z.object({
    body: visitsSchema
})

export type countVisitsType = z.infer<typeof countVisitsSchema>["body"]