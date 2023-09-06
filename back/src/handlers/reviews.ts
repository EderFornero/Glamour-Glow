import { ReviewsModel, UserModel } from "../models";
import { createReviewType } from "../schemas/reviewSchema";
import { SellerModel } from "../models";

export const createReviewHandler = async (data: createReviewType) => {
    
      let newReview = await ReviewsModel.create(data)
      const userInformation = await UserModel.findById(newReview.user_id)
      if (userInformation) {
            newReview.user_id = userInformation
      }
      await SellerModel.findOneAndUpdate({_id : newReview.seller_id}, {"$push": {reviews: newReview}})
      return newReview
    
}

export const deleteReviewsHandler = async (id: String) => {


     const removeReview = await ReviewsModel.findByIdAndDelete(id)

     await SellerModel.findOneAndUpdate({_id : removeReview?.seller_id}, {"$pull": {reviews: id}})
     return id
  
}