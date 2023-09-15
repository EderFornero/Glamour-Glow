
import { Request, Response , NextFunction} from "express";
import { deleteReviewsAdmin } from "../../handlers";
import { deleteReviewType } from "../../schemas/reviewSchema";



export const deleteReviewsAdminController = async(req:Request<deleteReviewType> ,res: Response, next: NextFunction) => {

    const {id} = req.params
try {
    const reviewDeleted = await deleteReviewsAdmin(id)
    return res.status(200).send(`Review with id: ${reviewDeleted} was sucessfully deleted`)
    
} catch (error) {
    return next(error)
}
}