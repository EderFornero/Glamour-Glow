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
    .string({required_error: "categories are required"})
    .nonempty("You must provide at least 1 category"),
    
    
    price: z
    .string({ required_error: "A phone number is required" })
    //.nonnegative() need to add a validation so that the price is not negative
    ,
     
    seller: z
    .string({required_error: "seller is required"})
    .nonempty("You must provide a seller related to the services") 

});

export const createServiceSchema = z.object({
    body: serviceSchema

});

export const updateServiceSchema = z.object({
    body: serviceSchema.partial(),
    params: z.object({
        id: z.string()
    })
   
    
});
export const readAndDeleteServiceSchema = z.object({
    params: z.object({
        id: z.string()
    })
})


export type createServiceType = z.infer<typeof createServiceSchema>["body"]
export type updateServiceType = z.infer<typeof updateServiceSchema>["body"]
export type updateServiceTypeParams = z.infer<typeof updateServiceSchema>["params"]
export type readAndDeleteServiceTypeParams = z.infer<typeof readAndDeleteServiceSchema>["params"]
