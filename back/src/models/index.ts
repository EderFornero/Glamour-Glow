import { getModelForClass } from "@typegoose/typegoose";

import { Category } from "./Category";
import { User } from "./User";
import { Seller } from "./Sellers";
import { Services } from "./Services";
import { Reviews } from "./Reviews";
import { Favorites } from "./Favorites";
import { Visits } from "./Visits";
import { Payments } from "./Payments";

export const CategoryModel = getModelForClass(Category);
export const UserModel = getModelForClass(User);
export const SellerModel = getModelForClass(Seller);
export const ServicesModel = getModelForClass(Services);
export const ReviewsModel = getModelForClass(Reviews);
export const FavoritesModel = getModelForClass(Favorites);
export const VisistModel = getModelForClass(Visits);
export const PaymentsModel = getModelForClass(Payments);

