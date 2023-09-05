import { prop, modelOptions, Ref } from "@typegoose/typegoose";
import { Seller } from "./Seller";
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
  seller_id: Ref<Seller>;

  @prop({ ref: () => User, default: "" })
  user_id: Ref<User>;
}
