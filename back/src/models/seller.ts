import { prop, Ref, modelOptions} from "@typegoose/typegoose";
import { Category } from "./Category";
import { Services } from "./Services";



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

    @prop({ required: true, type: Number})
    seller_phone?: number;

    @prop({required: true, enum: GENDER})
    seller_gender: GENDER

    @prop({ref: () => Category, default:[]})
    categoriesArray: Ref<Category>[];

    @prop({ref: () => Services, default: []})
    servicesArray: Ref<Services>[];

    
}