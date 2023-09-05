import {
  prop,
  pre,
  modelOptions,
  Ref,
  DocumentType,
} from "@typegoose/typegoose";
import { User } from "./User";
import { Services } from "./Services";
import { ServicesModel } from ".";

export enum STATUS {
  PENDING = "pending",
  FULFILLED = "fulfilled",
}

@pre<Appointments>("save", async function () {
  try {
    const appointment = this as DocumentType<Appointments>;
    ServicesModel.findById(appointment.service)
      .select("duration")
      .exec()
      .then((service) => {
        if (service) {
          //appointment.duration = service.duration;
        }
      });
  } catch (error) {
    console.log(error);
  }
})
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Appointments {
  @prop({ ref: () => User })
  customer: Ref<User>;
  @prop({ ref: () => Services })
  service: Ref<Services>;
  @prop({ type: Date })
  date: Date;
  @prop({ type: String })
  hour: string;
  @prop({ type: Number })
  duration: number;
  @prop({ enum: STATUS, default: STATUS.PENDING })
  status: STATUS;
}
