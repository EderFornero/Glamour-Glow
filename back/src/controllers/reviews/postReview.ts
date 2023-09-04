import { Request, Response, NextFunction } from "express";
import { createReviewHandler } from "../../handlers";
import { createReviewType } from "../../schemas/reviewSchema";

export const postReviewController = async (
  req: Request<{}, {}, createReviewType>,
  res: Response,
  next: NextFunction
) => {
  const reviewData = req.body;
  try {
    const newReview = await createReviewHandler(reviewData);
    console.log("Review posted");
    return res.status(200).json(newReview);
  } catch (error) {
    return next(error);
  }
};
