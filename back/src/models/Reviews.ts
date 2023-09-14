import { prop, modelOptions, Ref } from "@typegoose/typegoose";
import { Seller } from "./Sellers";
import { User } from "./User";

@modelOptions({
  schemaOptions: {
    _id: true,
  },
})
export class Reviews {
  @prop({ required: true, type: Number })
  rating: number;

  @prop({ required: true, type: String })
  description: string;

  @prop({ ref: () => Seller, default: "" })
  sellerId: Ref<Seller>;

  @prop({ ref: () => User, default: "" })
  userId: Ref<User>;
}
