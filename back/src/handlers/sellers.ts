
import { SellerModel } from "../models";

// get Handlers
export const getSellersHandler = async() => {
      const allSellers = await SellerModel.find({})
      return allSellers
};

export const getSellersByIdHandler = async(id: String) => {
    const sellerById = await SellerModel.findById(id).exec();
    return sellerById;
};

//post Handlers
export const postSellersHandler = async (seller : String) => {
     const newSeller = await SellerModel.create(seller)
     return newSeller;
};

//put Handlers
export const putSellersHandler = async (id : String, update: Object) => {
    const sellerUpdate = await SellerModel.findByIdAndUpdate(id, update,{
      new : true
    })
    return sellerUpdate
};

// delete Handlers
export const deleteSellerHandler = async (id:String) => {
    await SellerModel.findByIdAndDelete(id)
    return "Delete seller succesfuly"
};
