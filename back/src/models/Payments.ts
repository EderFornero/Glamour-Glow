import { prop, Ref } from "@typegoose/typegoose";
import { User } from "./User";
import { Seller } from "./Sellers";


export class Payments {
    @prop({required: true,  type: String, default: "completed"})
    status: string

    @prop({ref: () => User})
    userId: Ref<User>

    @prop({ref: () => Seller})
    sellerId: Ref<Seller>

    @prop({required: true, type: String, unique: true})
    transactionId: String

    @prop({required: true, type: String})
    price: string
}