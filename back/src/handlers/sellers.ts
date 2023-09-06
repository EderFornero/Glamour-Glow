import { SellerModel } from "../models";

// get Handlers
export const getSellersHandler = async () => {



  const allSellers = await SellerModel.find({})
    .populate("categoriesArray", {
      _id: 0,
      name: 1,
    })
    .populate("servicesArray", { _id: 0, name: 1 })
    .populate("reviews", { _id: 0, rating: 1});
  return allSellers;
};

export const getSellersByIdHandler = async (id: String) => {
  const sellerById = await SellerModel.findById(id)
    .populate("categoriesArray", {
      _id: 0,
      name: 1,
    })
    .populate("servicesArray", { _id: 0, name: 1, price: 1, description: 1 })
    .populate({
      path: "reviews",
      select: { _id: 0, rating: 1, description: 1 },
      populate: {
        path: "user_id",
        select: { _id: 0, username: 1,image: 1},
      },
    })
  return sellerById;
};

//post Handlers
export const postSellersHandler = async (seller: Object) => {
  const newSeller = await SellerModel.create(seller);
  return newSeller;
};

//put Handlers
export const putSellersHandler = async (id: String, update: Object) => {
  const sellerUpdate = await SellerModel.findByIdAndUpdate(id, update, {
    new: true,
  });
  return sellerUpdate;
};

// delete Handlers
export const deleteSellerHandler = async (id: String) => {
  await SellerModel.findByIdAndDelete(id);
  return "Delete seller succesfuly";
};
