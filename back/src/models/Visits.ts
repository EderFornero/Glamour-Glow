import { prop, modelOptions } from "@typegoose/typegoose";


@modelOptions({
    schemaOptions:{ 
        timestamps: true
    }
})
export class Visits {
    @prop({type: Date})
    date: Date
    @prop({type: String})
    path: string
}