import { ReviewsModel, UserModel } from "../models";
import { createReviewType } from "../schemas/reviewSchema";
import { SellerModel } from "../models";

export const createReviewHandler = async (data: createReviewType) => {
  let newReview = await ReviewsModel.create(data);
  const userInformation = await UserModel.findById(newReview.userId);
  if (userInformation) {
    newReview.userId = userInformation;
  }
  await SellerModel.findOneAndUpdate(
    { _id: newReview.sellerId },
    { $push: { reviews: newReview } }
  );
  return newReview;
};

export const deleteReviewsHandler = async (id: String) => {
  const removeReview = await ReviewsModel.findByIdAndDelete(id);
  await SellerModel.findOneAndUpdate(
    { _id: removeReview?.sellerId },
    { $pull: { reviews: id } }
  );
  return id;
};
