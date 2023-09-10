import { prop, Ref, modelOptions } from "@typegoose/typegoose";
import { Category } from "./Category";
import { Seller } from "./Sellers";

@modelOptions({
  schemaOptions: {
    _id: true,
  },
})
export class Services {
  @prop({ required: true, type: String })
  name: string;

  @prop({ required: true, type: String })
  description: string;

  @prop({ ref: () => Category, default: "" })
  serviceCategories: Ref<Category>;

  @prop({ required: true, type: String, min: 0 })
  price: string;

  @prop({ ref: () => Seller })
  seller: Ref<Seller>;
}
