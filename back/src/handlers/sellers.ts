import { SellerModel } from "../models";
import { NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";


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
  
  const sellerById = await SellerModel.findOne({_id: id, isActive:true})
    .select({sellerPassword:0, role:0, isActive:0, accountBalance: 0})
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
  if(!sellerById) return "Seller not found"
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
  }).select({sellerPassword:0, role:0, isActive:0, accountBalance: 0, passwordResetCode:0 });
  return sellerUpdate;
};

// delete Handlers
export const deleteSellerHandler = async (id: String) => {
  await SellerModel.findByIdAndUpdate(id, {isActive: false});
  return "Seller has been successfully deleted";
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

//filters.isActive = true;
const sellers = await SellerModel.find({...filters, isActive:true})
.select({sellerPassword:0, role:0, isActive:0, accountBalance: 0, passwordResetCode:0 })
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

export const validateLogInSeller = async (sellerEmail: string, sellerPassword: string) => {
  //change "any" type
  try {
    const seller = await SellerModel.findOne({ sellerEmail }).exec();
    if (!seller || !seller.isActive) {
      throw new Error("Seller is not registered");
    }

    const isPasswordValid = await seller.validatePassword(sellerPassword);

    if (!isPasswordValid) {
      return false;
    }
    return { id: seller._id, role: seller.role};
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const generateTokenSeller = async (sellerEmail: string) => {
  try {
    const seller = await SellerModel.findOne({ sellerEmail:sellerEmail })
    const token = await jwt.sign(
      { sellerName: seller?.sellerName, id: seller?._id, role: seller?.role },
      process.env.TOKEN_ENCRYPTION!,
      { expiresIn: "1h" }
    );
    return token;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const forgotSellerPasswordHandler = async (sellerEmail: string) => {
  const user = await SellerModel.findOne({sellerEmail})
  console.log("user", user)
  return user
}

export const resetSellerPasswordHandler = async (id: string, newPassword: string) => {
  const user = await SellerModel.findById(id);
  if(user){
    if(newPassword === user.sellerPassword){
      throw Error("Input password can't match the current password")
    }
    user.sellerPassword = newPassword
    user.passwordResetCode = null 
    user.save()
  }
  console.log(user);
  return user
}