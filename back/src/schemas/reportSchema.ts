import { z } from "zod";

const reportSchema = z.object({
  description: z
    .string({ required_error: "Description is required" })
    .nonempty("You must provide a description")
    .max(500, "The description must be up to 500 characters"),

  id: z.string({ required_error: "Id is required" }),
});
export const createReportSchema = z.object({
  body: reportSchema,
});
export const deleteReportSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});

export type createReportTypeBody = z.infer<typeof createReportSchema>["body"];
export type deleteReportType = z.infer<typeof deleteReportSchema>["params"];
