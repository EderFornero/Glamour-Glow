import { prop} from "@typegoose/typegoose";
import { modelOptions } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions:{ 
        _id: true,
    }
})

export class Category {
    @prop({required: true, type: String})
    name: string
}



