import { prop, pre, DocumentType, modelOptions } from "@typegoose/typegoose";
import argon2 from "argon2";
import 'dotenv'
const {ADMIN} = process.env

// enum ROLE{
//     admin = ADMIN
// }
@pre<Admin>("save", async function () {
    if (!this.isModified("password")) {
      return;
    }
    const hash = await argon2.hash(this.password);
    this.password = hash;
    return;
  })
  @modelOptions({
    schemaOptions:{
        _id: true
    }
  })
export class Admin {
    @prop({type: String, default:"Glamour Glow", required: true})
    name: string;

    @prop({ required: true, unique: true, type: String, default: "glamourglowpf@gmail.com"})
    email: string;

    @prop({required: true, default: ADMIN})
    role: string | null

    @prop({required: true, type: String})
    password: string

    async validatePassword(this: DocumentType<Admin>, candidatePassword: string) {
        try {
          return await argon2.verify(this.password, candidatePassword);
        } catch (error) {
          console.log(error, "Could not validate password");
          return false;
        }
      }

}