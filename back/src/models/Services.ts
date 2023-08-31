import { prop, Ref, modelOptions } from "@typegoose/typegoose";
import { Category } from "./Category";
import { Seller } from "./seller";


@modelOptions({
    schemaOptions: {
        _id:true
    }
})
export class Services {
    @prop({required: true, type: String})
    name: string;

    @prop({required: true, type: String})
    description: string;

    @prop({ ref: () => Category, default: []})
    serviceCategories: Ref<Category>[];

    @prop({required: true, type: Number, min: 0})
    price: number;

    @prop({ref: () => Seller})
    seller: Ref<Seller>

}