import { prop, Ref } from "@typegoose/typegoose";
import { modelOptions } from "@typegoose/typegoose";
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


export class Business {
    @prop({required: true, type: String})
    business_name?: string;

    @prop({required: true, type: String})
    business_email?: string;

    @prop({ required: true, type: Number})
    business_phone?: number;

    @prop({required: true, enum: GENDER})
    business_gender: GENDER

    @prop({ref: () => Category, default:[]})
    categoriesArray: Ref<Category>[];

    @prop({ref: () => Services, default: []})
    servicesArray: Ref<Services>[];

    
}