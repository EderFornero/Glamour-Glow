import {z} from "zod"



const paymentsSchema = z.object({
    status: z.string({required_error: "Payment must be completed pending or failed"}).optional(),
    userId: z.string({required_error: "Must provide the user who made the payment"}),
    sellerId: z.string({required_error: "You must provide the seller who recieved the payment"}),
    transactionId: z.string({required_error: "You must provide the transaction ID"}),
    price: z.string({required_error: "You must provide a price"})
})

export const createPaymentesSchema = z.object({
    body: paymentsSchema
})

export type createPaymentsSchemaType = z.infer<typeof createPaymentesSchema>["body"]