import { Request, Response } from "express";
import { readCategories } from "../../handlers/category";

export const getCategories = async(_req: Request, res: Response) => {
    try {
       const allCategories = await readCategories()
       return res.status(200).json(allCategories) 
    } catch (error: any) {
        return res.status(500).json({message: error.message})
    }
}