import { prop, Ref, modelOptions} from "@typegoose/typegoose";
import { Category } from "./Category";
import { Services } from "./Services";
import { Reviews } from "./Reviews";



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
    seller_name?: string;

    @prop({required: true, type: String})
    seller_email?: string;

    @prop({ required: true, type: String})
    seller_phone?: String;

    @prop({required: true, enum: GENDER})
    seller_gender: GENDER

    @prop({ref: () => Reviews, default:[]})
    reviews: Ref<Reviews>[];

    @prop({ref: () => Category, default:[]})
    categoriesArray: Ref<Category>[];

    @prop({ref: () => Services, default: []})
    servicesArray: Ref<Services>[];
   
}
