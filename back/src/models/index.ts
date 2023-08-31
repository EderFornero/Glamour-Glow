import { getModelForClass } from "@typegoose/typegoose";

import { Category } from "./Category";
import { User } from "./User";
import { Business } from "./seller";
import { Services } from "./Services";

export const CategoryModel = getModelForClass(Category)
export const UserModel = getModelForClass(User)
export const BusinessModel = getModelForClass(Business)
export const ServicesModel = getModelForClass(Services)