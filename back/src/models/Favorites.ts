import { prop, Ref, modelOptions } from "@typegoose/typegoose";
import { Seller } from "./Sellers";
import { User } from "./User";

@modelOptions({
    schemaOptions:{
        timestamps: true
    }
})
export class Favorites {
    @prop({ref: () => Seller})
    sellerId:  Ref<Seller>;

    @prop({ref: () => User})
    userId: Ref<User>
}