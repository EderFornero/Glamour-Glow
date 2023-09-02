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
    .number({required_error: "You must provide a price"})
    .nonnegative(),
     
    rating: z
    .number({required_error: "Rating is required between 0 and 5"})
    .nonnegative()
    .min(1)
    .max(5), 
     
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


export type createServiceType = z.infer<typeof createServiceSchema>["body"]
export type updateServiceType = z.infer<typeof updateServiceSchema>["body"]
export type updateServiceTypeParams = z.infer<typeof updateServiceSchema>["params"]
 
