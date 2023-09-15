import { prop } from "@typegoose/typegoose";



export class Visits {
    @prop({type: Date})
    date: Date
    @prop({type: String})
    path: string
}