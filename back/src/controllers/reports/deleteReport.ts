import { Request,Response,NextFunction } from "express";
import { deleteReportType } from "../../schemas/reportSchema";
import { dropReport } from "../../handlers";

export const deleteReport = async(
  req: Request<deleteReportType>,
  res: Response,
  next: NextFunction
)=> {
  const {id} = req.params
  try {
    const deletedReport = await dropReport(id)
    return res.status(200).send(`Report with id: ${deletedReport} was deleted`)
  } catch (error) {
    return next(error)
  }
}