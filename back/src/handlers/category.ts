import { CategoryModel } from "../models";

export const readCategories = async () => {

    try {
    const allCategories = await CategoryModel.find({})
    return allCategories;
        
    } catch (error) {
      return error  
    }

}