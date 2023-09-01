
import { Request, Response } from "express"
import { getSellersHandler } from "../../handlers/sellers.ts"

export const getSellersController = async (_req: Request, res: Response) => {
    try {
        const allSellers = await getSellersHandler()
        return res.status(200).json(allSellers)
    } catch (error) {
        return res.status(500).send(error)
    }
}

