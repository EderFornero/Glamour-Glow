
     import { Request, Response } from "express"
     import { postSellersHandler } from "../../handlers/sellers.ts"
     
     export const postSellersController = async (req: Request, res: Response) => {
         const data = req.body
         try {
             const newSeller = await postSellersHandler(data)
             return res.status(200).json(newSeller)
         } catch (error) {
            return res.status(400).send(error)
         }
     }
     

     
