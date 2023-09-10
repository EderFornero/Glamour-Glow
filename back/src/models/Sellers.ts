import { prop, Ref, modelOptions} from "@typegoose/typegoose";
import { Category } from "./Category";
import { Services } from "./Services";
import { Reviews } from "./Reviews";


export enum ROLE {
    CUSTOMER = "customer",
    SELLER = "seller",
  }
export enum GENDER {
    ANY = 'any',
    FEMALE = 'female',
    MALE = 'male'
}


@modelOptions({
    schemaOptions: {
        _id: true,
        timestamps: true
    }
})


export class Seller {
    @prop({required: true, type: String})
    sellerName?: string;

    @prop({required: true, type: String})
    sellerEmail?: string;

    @prop({required: true, type: String})
    sellerPassword?: string;

    @prop({ required: true, type: String})
    sellerPhone?: String;

    @prop({required: true, enum: GENDER})
    sellerGender: GENDER

    @prop({ref: () => Reviews, default:[]})
    reviews: Ref<Reviews>[];

    @prop({ref: () => Category, default:[]})
    categoriesArray: Ref<Category>[];

    @prop({ref: () => Services, default: []})
    servicesArray: Ref<Services>[];
   
}
