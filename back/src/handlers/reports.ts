import { ReportsModel } from "../models";
import { createReportTypeBody } from "../schemas/reportSchema";

export const createReport = async (data: createReportTypeBody) =>{
  const report = await ReportsModel.create(data)
  return report
}

export const dropReport = async (id : string) =>{
  const removeReport = await ReportsModel.findByIdAndDelete(id)
  return removeReport?.id
}

export const readReports = async () =>{
  const reports = await ReportsModel.find({})
  return reports
}