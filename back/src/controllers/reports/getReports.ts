import { Request,Response,NextFunction } from "express";
import { readReports } from "../../handlers";

export const getReports = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allReports = await readReports()
    return res.status(200).json(allReports)
  } catch (error) {
    return next(error)
  }
}