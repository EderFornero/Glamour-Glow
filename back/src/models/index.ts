import { getModelForClass } from "@typegoose/typegoose";

import { Category } from "./Category";
import { User } from "./User";
import { Seller } from "./Sellers";
import { Services } from "./Services";
import { Reviews } from "./Reviews";

export const CategoryModel = getModelForClass(Category);
export const UserModel = getModelForClass(User);
export const SellerModel = getModelForClass(Seller);
export const ServicesModel = getModelForClass(Services);
export const ReviewsModel = getModelForClass(Reviews);
