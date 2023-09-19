import {prop,modelOptions} from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    _id: true,
  },
})

export class Reports {
  
  @prop({ required: true, type: String })
  description: string;

  @prop({ required: true, default: "", type: String })
  id: string
}