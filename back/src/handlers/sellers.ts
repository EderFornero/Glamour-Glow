import { SellerModel } from "../models";
import { NextFunction, Request, Response} from "express";


// get Handlers
 /*export const getSellersHandler = async () => {



  const allSellers = await SellerModel.find({})
    .populate("categoriesArray", {
      _id: 0,
      name: 1,
    })
    .populate("servicesArray", { _id: 0, name: 1 })
    .populate("reviews", { _id: 0, rating: 1});
  return allSellers;
};
 */
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
        path: "userId",
        select: { _id: 0, name: 1, lastName: 1,image: 1},
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

export const sellerFilterHandler = async ( _req: Request,
  res: Response,
  next: NextFunction) => {
    
try {
const query: Record<string, any> = _req.query;
const filters: Record<string, any> = {};

// aca el filtrado por nombre
if (query.sellerName) {
filters.sellerName = query.sellerName;
}
// por aca el filtrado por genero
if (query.sellerGender) {
filters.sellerGender = query.sellerGender;
}
// filtrado por categorias
if (query.categoriesArray && Array.isArray(query.categoriesArray)) {
filters["categoriesArray.name"] = { $in: query.categoriesArray };
}
const sellers = await SellerModel.find(filters)
.select({ sellerPassword: 0 })
.populate("categoriesArray", {
  _id: 0,
  name: 1,
})
.populate("servicesArray", { _id: 0, name: 1 })
.populate("reviews", { _id: 0, rating: 1}).exec();

return res.status(200).json(sellers)
} catch (error) {
return next(error); 
}
}

