import { prop, modelOptions, pre, DocumentType } from "@typegoose/typegoose";

import argon2 from "argon2";

export enum ROLE {
  CUSTOMER = "customer",
  SELLER = "seller",
}
@pre<User>("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  const hash = await argon2.hash(this.password);
  this.password = hash;
  return;
})
@modelOptions({
  schemaOptions: {
    _id: true,
    timestamps: true,
  },
})
export class User {
  @prop({ required: true, type: String })
  name: string;

  @prop({ required: true, type: String })
  last_name: string;

  @prop({ required: true, type: String, unique: true, lowercase: true })
  email: string;

  @prop({ required: true, type: String })
  password: string;

  @prop({ required: true, type: String })
  phoneNumber: string;

  @prop({ required: true, enum: ROLE, default: ROLE.CUSTOMER })
  role: ROLE;

  @prop({ required: true, type: Date })
  dateOfBirth: Date;

  @prop({ required: true, type: String })
  image: string;

  @prop({ required: true, default: true, type: Boolean })
  isActive: boolean;

  async validatePassword(this: DocumentType<User>, candidatePassword: string) {
    try {
      return await argon2.verify(this.password, candidatePassword);
    } catch (error) {
      console.log(error, "Could not validate password");
      return false;
    }
  }
}
