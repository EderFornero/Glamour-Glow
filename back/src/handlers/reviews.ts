import { ReviewsModel } from "../models";
import { createReviewType } from "../schemas/reviewSchema";


export const createReviewHandler = async (data: createReviewType) => {
    
      const  newReview = await ReviewsModel.create(data)
      return newReview
    
}

export const deleteReviewsHandler = async (id: String) => {
  
     await ReviewsModel.findByIdAndDelete(id)
     return id
  
}