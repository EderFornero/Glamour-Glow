import  {prop,  modelOptions} from "@typegoose/typegoose"



export enum ROLE {
    CUSTOMER = 'customer',
    SELLER = 'seller'
}
@modelOptions({
    schemaOptions: {
        _id: true,
        timestamps: true
    }
})
export class User {
   
    @prop({required: true, type: String, unique: true})
    username: string;

    @prop({required: true, type: String})
    fullname: string

    @prop({required: true, type: String, unique: true})
    email: string;

    @prop({required: true, type: String,})
    password: string;

    @prop({required: true, enum: ROLE, default: ROLE.CUSTOMER})
    role: ROLE;

    @prop({required: true, type: Date})
    date_of_birth: Date;

    @prop({required:true, type: String})
    image: string;
    
}
