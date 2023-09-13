import { UserModel, SellerModel } from "../models";

export const deleteUserHandler = async (id: String) => {
    const userdeleted = await UserModel.findByIdAndDelete(id)
    if(!userdeleted){
      throw Error("user does not exist")
    }
    return id;
  }

  export const deleteSellerHandler = async (id: String) => {
    const sellerDeleted = await SellerModel.findByIdAndDelete(id)
    if(!sellerDeleted){
      throw Error("user does not exist")
    }
    return id;
  }