import { NextFunction,Request,Response } from "express";
import { createReportTypeBody } from "../../schemas/reportSchema";
import { createReport } from "../../handlers";

export const postReport = async (
  req: Request<{},{},createReportTypeBody>,
  res: Response,
  next: NextFunction
) => {
  const report = req.body
  try {
    const newReport = await createReport(report)
    console.log("Report sent");
    return res.status(200).json(newReport)
  } catch (error) {
    return next(error)    
  }
}