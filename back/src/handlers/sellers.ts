
import { SellerModel } from "../models";

// get Handlers
export const getSellersHandler = async() => {
    
    try {
      const allSellers = await SellerModel.find({})
      return allSellers
    } catch (error) {
      return error
    }
};

export const getSellersByIdHandler = async(id:any) => {
  try {
    const sellerById = await SellerModel.findById(id).exec();
    return sellerById;
  } catch (error) {
    return error
  }
};

//post Handlers
export const postSellersHandler = async (data : any) => {

    try {
     const newSeller = await SellerModel.create(data)
     return newSeller;
    } catch (error) {
      throw new Error
    }
};

//put Handlers
export const putSellersHandler = async (id : any, update: any) => {

  try {
    const sellerUpdate = await SellerModel.findByIdAndUpdate(id, update,{
      new : true
    })
    return sellerUpdate
  } catch (error) {
    return error
  }
};

// delete Handlers
export const deleteSellerHandler = async (id:any) => {

  try {
    await SellerModel.findByIdAndDelete(id)
    return "Delete seller succesfuly"
  } catch (error) {
    return error
  }
};
