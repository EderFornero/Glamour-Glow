import { prop, pre ,Ref, DocumentType, modelOptions, Severity} from "@typegoose/typegoose";
import { Category } from "./Category";
import { Services } from "./Services";
import { Reviews } from "./Reviews";
import argon2 from "argon2";
// import { ROLE } from "./User";

export enum ROLE {
  CUSTOMER = "customer",
  SELLER = "seller",
}
export enum GENDER {
    ANY = 'any',
    FEMALE = 'female',
    MALE = 'male'
}

@pre<Seller>("save",async function () {
    if (!this.isModified("sellerPassword")) {
      return;
    }
  
    const hash = await argon2.hash(this.sellerPassword);
    this.sellerPassword = hash;
    return;
  })

@modelOptions({
    schemaOptions: {
        _id: true,
        timestamps: true
    },
    options:{
      allowMixed: Severity.ALLOW
    }
})


export class Seller {
    @prop({required: true, type: String})
    sellerName: string;

    @prop({required: true, type: String})
    sellerEmail: string;

    @prop({required: true, type: String})
    sellerPassword: string;

    @prop({ required: true, type: String})
    sellerPhone: String;
      
    @prop({ required: true, type: [String] }) 
    images: string[];

    @prop({ required: true, enum: ROLE, default: ROLE.SELLER })
    role: ROLE;

    @prop({required: true, enum: GENDER})
    sellerGender: GENDER;

    @prop({ required: true, default: true, type: Boolean })
    isActive: boolean;

    @prop({default: 0, type: Number})
    accountBalance: number;

    @prop()
    passwordResetCode: string | null;

    @prop({ref: () => Reviews, default:[]})
    reviews: Ref<Reviews>[];

    @prop({ref: () => Category, default:[]})
    categoriesArray: Ref<Category>[];

    @prop({ref: () => Services, default: []})
    servicesArray: Ref<Services>[];

    async validatePassword(this: DocumentType<Seller>, candidatePassword: string) {
        try {
          return await argon2.verify(this.sellerPassword, candidatePassword);
        } catch (error) {
          console.log(error, "Could not validate password");
          return false;
        }
      }
  

    async updateAccountBalance(this: DocumentType<Seller>, servicePrice:number) {
      try {
        this.accountBalance += servicePrice
        await this.save();
        return  true
      } catch (error) {
        console.log(error, "Could not update account balance")
        return false
      }
    }
}
   

