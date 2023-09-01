
import { SellerModel } from "../models";


export const getSellersHandler = async() => {
    
    try {
      const allSellers = await SellerModel.find({})
      return allSellers
    } catch (error) {
      return error
    }
}


export const postSellersHandler = async (data : any) => {

    try {
     const newSeller = await SellerModel.create(data)
     return newSeller;
    } catch (error) {
      throw new Error
    }
}


